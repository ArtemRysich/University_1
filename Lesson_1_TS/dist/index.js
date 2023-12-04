// Скалярні типи
// let isOpen: boolean = true;
// isOpen = false;
// let value: number = 10;
// let message: string = "Hello world";
// let empty: null = null;
// let missing: undefined = undefined;
// ************ any ********* //
let some = 4;
const exampleOrder = {
    number: "12345",
    items: [
        { name: "Laptop", price: 800 },
        { name: "Mouse", price: 30 },
        { name: "Keyboard", price: 50 },
    ],
    status: "in process",
};
function calculateTotal(items) {
    return items.reduce((acc, { price }) => acc + price, 0);
}
function printStatus({ number, status, items }) {
    console.log(`Order - ${number}, status: ${status}, total price ${calculateTotal(items)}`);
}
printStatus(exampleOrder);
//# sourceMappingURL=index.js.map