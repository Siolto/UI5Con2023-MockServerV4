class MainPage {
    /**
     * define actions for the page objects
     **/

    async iEnterTextIntoInputField(text: string) {
        return await (
            await browser.asControl({
                selector: {
                    id: "mainUserInput",
                    viewName: "test.Sample.tsapp.view.Main"
                }
            })
        ).enterText(text)
    }

    async iPressOnNavToOtherPageButton() {
        return await (
            await browser.asControl({
                selector: {
                    id: "test.Sample.tsapp::TargetMain--NavFwdButton"
                }
            })
        ).press()
    }
    /**
     * define assertions for the page objects
     **/

    async iShouldSeeTextInInputField(text: string) {
        const input = await browser.asControl({
            selector: {
                id: "mainUserInput",
                viewName: "test.Sample.tsapp.view.Main",
                properties: {
                    value: text
                }
            }
        })
        return expect(input.isInitialized()).toBeTruthy()
    }

    async iShouldSeePageTitle(title: string) {
        const page = await browser.asControl({
            selector: {
                id: "page",
                viewName: "test.Sample.tsapp.view.Main",
                properties: {
                    title: title
                }
            }
        })

        expect(page.isInitialized).toBeTruthy()
    }

    async iShouldSeeMainTitle(title: string) {
        const titleControl = await browser.asControl({
            selector: {
                id: "Title::NoAction.h1",
                controlType: "sap.m.Title",
                viewName: "test.Sample.tsapp.view.Main",
                properties: {
                    text: title
                }
            }
        })

        expect(titleControl.isInitialized()).toBeTruthy()
    }
}
export default new MainPage()
