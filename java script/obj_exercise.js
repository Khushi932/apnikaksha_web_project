const product = {
    itemName:'flower',
    price:50,
    discount: 20,
    itemCode:'f40'
}

function createProduct (name, price,discount,itemCode){
    return{
        itemName : name,
        price:price,
        discount : discount,
        itemCode:itemCode
    }
}

const football = createProduct('football',400,10,'f30');

function Product(name, price,discount,itemCode){
    this.itemName = name;
    this.price = price;
    this.discount = discount;
    this.itemCode = itemCode;
    this.discountValue = function(){
        return price = dicount/100;
    }
        
}

const mobile = new Product ('One plus', 30000, 5,'op23')

