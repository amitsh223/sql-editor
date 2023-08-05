import categories from "../Tables/Categories";
import customers from "../Tables/Customers";

const availableQueries = [
    {
        name: "Get Customer's Company Name with Contact Name",
        query: "SELECT companyName, contactName FROM Customers",
        result: {
            columns: [
                {
                    id: "companyName",
                    label: "Company Name"
                },
                {
                    id: "contactName",
                    label: "Contact Name"
                }
            ],
            items: customers
        }
    },
    {
        name: "Get Condiments Category",
        query: "SELECT * FROM Categories WHERE name IS 'Condiments'",
        result: {
            columns: [
                {
                    id: "categoryId",
                    label: "Category Id"
                },
                {
                    id: "name",
                    label: "Name"
                },
                {
                    id: "description",
                    label: "Description"
                }
            ],
            items: categories.filter((item) => item.name === "Condiments")
        }
    },
];

export default availableQueries;