// { id: "57710", name: 'Samsung S8', price: '7000', imageUrl: 'resim3.png', description: 'İyi telefon', categoryid: "1" },
// { id: "79575", name: 'Samsung S9', price: '9000', imageUrl: 'resim4.png', description: 'İyi telefon', categoryid: "1" },
// { id: "79576", name: 'Dizüstü Bilgisayar', price: '15000', imageUrl: 'resim4.png', description: 'İyi bilgisyar', categoryid: "2" },
// { id: "79572", name: 'Buz Dolabı', price: '9000', imageUrl: 'resim4.png', description: 'İyi Buz Dolabı', categoryid: "3" },
const dbcopycat = require('dbcopycat');
module.exports = class Product {
    constructor(name, price, imageUrl, description, categoryid) {
        this.id = (Math.floor(Math.random() * 99999) + 1).toString();
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.categoryid = categoryid;
    }

    saveProduct() {
        dbcopycat.add("products", this);
        // products.push(this);
    }

    static getAll() {
        return dbcopycat.getAll().products;
        // return products;
    }

    static getById(id) {
        return dbcopycat.getById("products", id);
        // return products.find(i => i.id == id);
    }

    static getProductsByCategoryId(categoryid) {
        return dbcopycat.filter("products", x => x.categoryid === categoryid);
        // return products.filter(x => x.categoryid === categoryid);
    }

    static Update(product) {
        dbcopycat.update("products", product)
        // const index = products.findIndex(i => i.id === product.id);

        // products[index].name = product.name;
        // products[index].price = product.price;
        // products[index].description = product.description;
        // products[index].imageUrl = product.imageUrl;
    }

    static DeleteById(id) {
        dbcopycat.deleteById("products", id)
        // const index = products.findIndex(i => i.id == id);
        // products.splice(index, 1);
    }
}