import Text from "sap/m/Text";
import List from "sap/ui/webc/main/List";
import StandardListItem from "sap/ui/webc/main/StandardListItem";
import UI5Event from "sap/ui/base/Event";

import BaseController from "./BaseController";
import MessageBox from "sap/m/MessageBox";

/**
 * @namespace test.Sample.tsapp.controller
 */
export default class Other extends BaseController {
    async onItemClick(oEvent): Promise<void> {
        (this.getView().byId("idTextFieldClickResult") as Text).setText((oEvent.getParameter("item") as StandardListItem).getText());
    }

    async onActionPressed() {
        const oOperation = this.getView().getModel().bindContext("/MyCustomAction(...)");
        try {
            const response = await oOperation.execute();
            MessageBox.success("Action sucessfully mocked");
        } catch (oError) {
            MessageBox.error(oError.message);
        }
    }

    onAddLineItem(/* oEvent */): void {
        (this.getView().byId("PeopleList") as List).addItem(new StandardListItem({ text: "Peter Parker" }));
    }

    onRowPressed(event: UI5Event): void {
        const selectedEmployee = event.getParameter("bindingContext").getObject();
        (this.getView().byId("idTextFieldClickResult") as Text).setText(`${selectedEmployee.FirstName} ${selectedEmployee.LastName}`);
    }

    onAddTableItem(): Promise<void> {
        this.getView().byId("PeopleList").getBinding("items").create({
            FirstName: "Peter",
            LastName: "Parker",
        });
    }
}
