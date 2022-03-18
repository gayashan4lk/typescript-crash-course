// Basic Types
let id: number = 5;
let company: string = "Virtusa";
let isPublished: boolean = true;
let x: any = "Hello";

let age: number
age = 30;

let idStore: number[] = [1, 2, 3, 4, 5];
idStore.push(6);
console.log(idStore);

let mixArr: any[] = [1, "one", true, {data : "some data"}];
mixArr.push("two");
mixArr.push(2);
mixArr.push({name : "Leonado"});
console.log(mixArr);

// Tuple
let person: [number, string, boolean] = [1, "Davinci", true];
// Tuple Array
let employee: [number, string][];
employee = [
  [1, "Fyodor Dostoevsky"],
  [2, "Maxim Gorky"],
  [3, "Dan Brown"]
]
console.log(employee);

// Union
let productId: number | string
productId = 22;
console.log(productId);
productId = "22";
console.log(productId);

// Enum
enum basicDirection {
  up,
  down,
  left,
  right
}
console.log(basicDirection.up);
console.log(basicDirection.right);

enum menu {
  file = 1,
  edit,
  search,
  help
}
console.log(menu.file);
console.log(menu.help);

enum mainMenu {
  file = "file",
  edit = "edit",
  search = "search",
  help = "help"
}
console.log(mainMenu.file);
console.log(mainMenu.search);
