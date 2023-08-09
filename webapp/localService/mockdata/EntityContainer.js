module.exports = {
    executeAction: async function (actionDefinition, actionData, keys) {
        console.log("test")
        // this.throwError("My super duper error message", 500)
        const employeeEntityInterface = await this.base.getEntityInterface("Employees")
        await employeeEntityInterface.updateEntry({ EmployeeID: 10, FirstName: "UI5Con" })
    },
};