import categories from "./Categories";
import customers from "./Customers";

const tables = [
    {
        name: 'Categories Table',
        columns: ["id", "name", "description"],
        items: categories
    },
    {
        name: 'Customers Table',
        columns: ["customerID", "companyName", "contactName", "contactTitle"],
        items: customers
    },

]