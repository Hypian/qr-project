"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenu = void 0;
function getMenu() {
    const menuItems = [
        { id: 1, name: "Pizza", description: "Cheesy and delicious", price: 9.99 },
        { id: 2, name: "Burger", description: "Juicy beef patty", price: 8.99 },
        { id: 3, name: "Pasta", description: "Penne with marinara sauce", price: 7.99 },
        { id: 4, name: "Salad", description: "Fresh garden salad", price: 5.99 },
    ];
    return menuItems.map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price.toFixed(2),
    }));
}
exports.getMenu = getMenu;
