import Text from "sap/m/Text"
import List from "sap/ui/webc/main/List"
import StandardListItem from "sap/ui/webc/main/StandardListItem"
import UI5Event from "sap/ui/base/Event"

import BaseController from "./BaseController"

/**
 * @namespace test.Sample.tsapp.controller
 */
export default class Other extends BaseController {
    onItemClick(oEvent): void {
        ;(this.getView().byId("idTextFieldClickResult") as Text).setText(
            (oEvent.getParameter("item") as StandardListItem).getText()
        )
    }

    onAddLineItem(/* oEvent */): void {
        ;(this.getView().byId("PeopleList") as List).addItem(new StandardListItem({ text: "Peter Parker" }))
    }

    onRowPressed(event: UI5Event): void {
        const selectedEmployee = event.getParameter("bindingContext").getObject()
        ;(this.getView().byId("idTextFieldClickResult") as Text).setText(
            `${selectedEmployee.FirstName} ${selectedEmployee.LastName}`
        )
    }

    onAddTableItem(): void {
        this.getView().byId("myTable").getAggregation("content").getAggregation("_content").getBinding("items").create({
            FirstName: "Peter",
            LastName: "Parker"
        })
    }
}
