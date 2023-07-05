module.exports = {
    executeAction: async function (actionDefinition, actionData, keys) {
        // this.throwError("my super error message!", 401)
        const employeeEntity = await this.base.getEntityInterface("Employees")
        await employeeEntity.addEntry({ EmployeeID: "10", FirstName: "UI5Con", LastName: "2023" })
    }
};