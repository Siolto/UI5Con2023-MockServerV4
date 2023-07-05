import { before } from "mocha";
import MainPage from "../pageobjects/Main.page";
import OtherPage from "../pageobjects/Other.page";
import { wdi5 } from "wdio-ui5-service";
const Logger = wdi5.getLogger();

describe("Journey Recorder", async () => {
    before(async () => {
        const response = await fetch("http://localhost:8080/V4/Northwind/Northwind.svc/$metadata/reload", {
            method: "POST",
        });
        Logger.info(await response.json());
    });

    it("enterText in Input Field", async () => {
        await MainPage.iEnterTextIntoInputField("Journey Recorder");
        await MainPage.iShouldSeeTextInInputField("Journey Recorder");
    });

    it("navigate to Other Page", async () => {
        await MainPage.iPressOnNavToOtherPageButton();
        await OtherPage.iShouldSeePageTitle("Another View...");
        await OtherPage.iShouldSeeEntriesInList(9);
    });
    it("click on list item", async () => {
        await OtherPage.iClickOnListItem("Andrew");
        await OtherPage.iShouldSeeHighlightedListItem("Andrew Fuller");
    });
    it("add line item", async () => {
        await OtherPage.iClickOnAddLineItemButton();
        await OtherPage.iShouldSeeEntriesInList(10);
    });
    it("filter table with city", async () => {
        await OtherPage.iFilterTableWithCityWithValueHelp("London");
        await OtherPage.iShouldSeeEntriesInList(4);
    });
});
