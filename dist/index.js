"use strict";
// Basic Types
let id = 5;
let company = "Virtusa";
let isPublished = true;
let x = "Hello";
let age;
age = 30;
let idStore = [1, 2, 3, 4, 5];
idStore.push(6);
console.log(idStore);
let mixArr = [1, "one", true, { data: "some data" }];
mixArr.push("two");
mixArr.push(2);
mixArr.push({ name: "Leonado" });
console.log(mixArr);
// Tuple
let person = [1, "Davinci", true];
// Tuple Array
let employee;
employee = [
    [1, "Fyodor Dostoevsky"],
    [2, "Maxim Gorky"],
    [3, "Dan Brown"]
];
console.log(employee);
// Union
let productId;
productId = 22;
console.log(productId);
productId = "22";
console.log(productId);
// Enum
var basicDirection;
(function (basicDirection) {
    basicDirection[basicDirection["up"] = 0] = "up";
    basicDirection[basicDirection["down"] = 1] = "down";
    basicDirection[basicDirection["left"] = 2] = "left";
    basicDirection[basicDirection["right"] = 3] = "right";
})(basicDirection || (basicDirection = {}));
console.log(basicDirection.up);
console.log(basicDirection.right);
var menu;
(function (menu) {
    menu[menu["file"] = 1] = "file";
    menu[menu["edit"] = 2] = "edit";
    menu[menu["search"] = 3] = "search";
    menu[menu["help"] = 4] = "help";
})(menu || (menu = {}));
console.log(menu.file);
console.log(menu.help);
var mainMenu;
(function (mainMenu) {
    mainMenu["file"] = "file";
    mainMenu["edit"] = "edit";
    mainMenu["search"] = "search";
    mainMenu["help"] = "help";
})(mainMenu || (mainMenu = {}));
console.log(mainMenu.file);
console.log(mainMenu.search);
// Objects
const user = {
    id: 1,
    name: "Pablo Neruda",
};
console.log(user);
const terminator = {
    id: 1,
    model: "T-800"
};
console.log(terminator);
