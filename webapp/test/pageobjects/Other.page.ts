import { wdi5 } from "wdio-ui5-service"

class Other {
    /**
     * define actions for the page objects
     **/
    async iClickOnListItem(text: string) {
        await (
            await browser.asControl({
                selector: {
                    controlType: "sap.m.ColumnListItem",
                    viewId: "test.Sample.tsapp::TargetOther",
                    descendant: {
                        controlType: "sap.m.Text",
                        properties: {
                            text: text
                        }
                    }
                }
            })
        ).press()
    }

    async iFilterTableWithCityWithValueHelp(city: string) {
        await (
            await browser.asControl({
                selector: {
                    id: "test.Sample.tsapp::TargetOther--myTable-content-settings-img"
                }
            })
        ).press()

        await (
            await browser.asControl({
                selector: {
                    controlType: "sap.m.IconTabFilter",
                    viewName: "test.Sample.tsapp.view.Other",
                    viewId: "test.Sample.tsapp::TargetOther",
                    properties: {
                        text: "Filtern"
                    },
                    searchOpenDialogs: true,
                    interaction: {
                        idSuffix: "text"
                    }
                }
            })
        ).press()

        await (
            await browser.asControl({
                selector: {
                    controlType: "sap.m.ComboBox",
                    viewName: "test.Sample.tsapp.view.Other",
                    viewId: "test.Sample.tsapp::TargetOther",
                    properties: {
                        valueState: "None"
                    },
                    searchOpenDialogs: true,
                    interaction: {
                        idSuffix: "inner"
                    }
                }
            })
        ).enterText("City")

        await (
            await browser.asControl({
                selector: {
                    id: "test.Sample.tsapp::TargetOther--myTable-content::AdaptationFilterField::City-inner-vhi",
                    searchOpenDialogs: true
                }
            })
        ).press()

        await (
            await browser.asControl({
                selector: {
                    controlType: "sap.m.Text",
                    viewName: "test.Sample.tsapp.view.Other",
                    viewId: "test.Sample.tsapp::TargetOther",
                    properties: {
                        text: city
                    },
                    searchOpenDialogs: true
                }
            })
        ).press()

        await (
            await browser.asControl({
                selector: {
                    controlType: "sap.m.Button",
                    viewName: "test.Sample.tsapp.view.Other",
                    viewId: "test.Sample.tsapp::TargetOther",
                    properties: {
                        text: "OK"
                    },
                    ancestor: {
                        viewName: "test.Sample.tsapp.view.Other",
                        viewId: "test.Sample.tsapp::TargetOther",
                        controlType: "sap.m.Dialog",
                        properties: {
                            title: "City"
                        },
                        searchOpenDialogs: true
                    },
                    searchOpenDialogs: true
                }
            })
        ).press()

        await (
            await browser.asControl({
                selector: {
                    controlType: "sap.m.Button",
                    viewName: "test.Sample.tsapp.view.Other",
                    viewId: "test.Sample.tsapp::TargetOther",
                    properties: {
                        text: "OK"
                    },
                    searchOpenDialogs: true
                }
            })
        ).press()
    }

    async iClickOnAddLineItemButton() {
        await (
            await browser.asControl({
                selector: {
                    id: "test.Sample.tsapp::TargetOther--idAddLineItemButton"
                }
            })
        ).press()
    }
    /**
     * define assertions for the page objects
     **/
    async iShouldSeePageTitle(text: string) {
        const title = await browser.asControl({
            forceSelect: true,
            selector: {
                id: "test.Sample.tsapp::TargetOther--OtherPage-title",
                properties: {
                    text: text
                }
            }
        })
        expect(await title.isInitialized()).toBeTruthy()
    }

    async iShouldSeeEntriesInList(amount: number) {
        const list = await browser.asControl({
            forceSelect: true,
            selector: {
                id: "test.Sample.tsapp::TargetOther--myTable-content-innerTable",
                aggregationLengthEquals: {
                    name: "items",
                    length: amount
                }
            }
        })
        expect(await list.isInitialized()).toBeTruthy()
    }

    async iShouldSeeHighlightedListItem(textProperty: string) {
        const text = await browser.asControl({
            forceSelect: true,
            selector: {
                id: "idTextFieldClickResult",
                viewId: "test.Sample.tsapp::TargetOther",
                properties: {
                    text: textProperty
                }
            }
        })
        expect(await text.isInitialized()).toBeTruthy()
    }

    async open() {
        await wdi5.goTo("#/Other")
    }
}

export default new Other()
