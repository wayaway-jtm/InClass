class Store {
    constructor() {
        // Array of Objects
        this.inventory = [

        ];
    }

    addProduct = product => {
        return this.inventory.push(product);
    }

    removeProduct = (product) => {
        this.inventory.splice(this.inventory.indexOf(product), 1);
    }

    // Get an array of all of the computer objects
    getComputers() {
        return this.inventory.filter((item) => {
            if (item.isComputer) {
                return true;
            } else {
                return false;
            }
        })
    }

    // Get an array of all of the laptop objects
    getLaptops() {
        return this.inventory.filter((item) => {
            if (item.isLaptop) {
                return true;
            } else {
                return false;
            }
        })
    }
}

class Product {
    constructor() {
        this.name = "Generic Product";
        this.price = 1;
        this.type = 'product';
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }

    getType() {
        return this.type;
    }
}

class Computer extends Product {
    constructor(newName, newPrice) {
        super();
        this.name = newName;
        this.price = newPrice;
        this.isComputer = true;
        this.type = 'electronics';
    }
}

class Laptop extends Computer {
    constructor(newName, newPrice, newSize) {
        super();
        this.name = newName;
        this.price = newPrice;
        this.isComputer = true;
        this.isLaptop = true;
        this.type = 'electronics';
        this.size = newSize;
    }
}

class Sticker extends Product {
    constructor(newName, newPrice) {
        super();
        this.name = newName;
        this.price = newPrice;
        this.type = 'general merchandise';
    }
}

class HDMI extends Product {
    constructor(newName, newPrice, newSize) {
        super();
        this.name = newName;
        this.price = newPrice;
        this.size = newSize;
        this.type = 'electronics';
    }
}

class Monitor extends Product {
    constructor(newName, newPrice, newSize) {
        super();
        this.name = newName;
        this.price = newPrice;
        this.size = newSize;
        this.type = 'electronics';
    }
}

class MountainDew extends Product {
    constructor(newName, newPrice) {
        super();
        this.name = newName;
        this.price = newPrice;
        this.type = 'food';
    }
}

let dell = new Laptop();
// console.log(dell instanceof Laptop);
// console.log(dell instanceof Computer);
// console.log(dell instanceof Product);

let store = new Store();
// add products
store.addProduct(new Laptop("Lenovo Edge", 800, 13));
store.addProduct(new Laptop("HP Workbook", 300, 13));
store.addProduct(new Laptop("Acer Spire", 500, 15));
store.addProduct(new Computer("Alienware G6", 1500));
store.addProduct(new Computer("Homemade Custom", 3000));
store.addProduct(new Sticker("Cute kitten", 5));
store.addProduct(new Sticker("Computer", 0.89));
store.addProduct(new HDMI("Monster HDMI Cable", 25, 50));
store.addProduct(new HDMI("AmazonBasics HDMI Cable", 25, 13));
store.addProduct(new Monitor("Vizio EV560", 200, 34));
store.addProduct(new Monitor("Lenovo Thinkvision", 150, 24));
store.addProduct(new Monitor("Samsung QB65R", 1000, 65));
store.addProduct(new MountainDew("Code Red Mountain Dew", 1.25));
store.addProduct(new MountainDew("Mountain Dew Livewire", 1));
store.addProduct(new MountainDew("Mountain Dew", 1.50));

// get all laptops
console.log(store.getLaptops());

// remove a specific product
console.log("Before Removal", store.inventory);
store.removeProduct(new MountainDew("Code Red Mountain Dew", 1.25));
console.log("After Removal", store.inventory);

// get the price of a specific product
console.log(store.inventory.find(product => product.name === "Cute kitten").getPrice());