//declaring a class

// class Product{
//     constructor(itemName,price, discount, productCode){
//         this.itemName = itemName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }
// }

class Product{
        constructor(itemName,price, discount, productCode){
            this.itemName = itemName;
        }

        getItemName(){
            return this.itemName + "is a product";
        }
    }

class furniture extends Product{
    constructor(itemName){
        super(itemName);

    }
    getItemName(){
        return this.itemName + "is a furniture"
    }
}

let pencil = new Product('Pencil', 20,2,'p10');
let chair = new furniture('Chair',499,15,'c10')

// const Product1 = class Product{
//     constructor(itemName,price, discount, productCode){
//         this.itemName = itemName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
        
//         }
//         get getDiscountValue(){
//             return this.discount}
//             set setDiscountValue(value){
//                 return this.discount}
        
//         discountValue(){
//             return this.discount*this.price/100
//         }
//     };


// let chair = new Product1('Chair',499,15,'c10')

