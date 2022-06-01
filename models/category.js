const dbcopycat = require('dbcopycat');
module.exports = class Category {
    constructor(name, description) {
        this.id = (categories.length + 1).toString();
        this.name = name;
        this.description = description;
    }

    saveCategory() {
        dbcopycat.add("categories", this);
        // categories.push(this);
    }

    static getAll() {
        return dbcopycat.getAll().categories;
        // return categories;
    }

    static getById(id) {
        return dbcopycat.getById("categories", id);
        // return categories.find(i => i.id === id);
    }

    static update(category) {
        dbcopycat.update("categories", category);
        // const index = categories.findIndex(i => i.id === category.id);
        // categories[index].name = category.name;
        // categories[index].description = category.description;
    }

    static deleteById(id) {
        dbcopycat.deleteById("categories", id);
        // const index = categories.findIndex(i => i.id === id);
        // categories.splice(index, 1);
    }
}