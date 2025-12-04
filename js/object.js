const product = {
name: 'table' ,
price : 2000
};
console.log(product);
console.log(product.name);
console.log(product.price);

product.name = 'chiar';
console.log(product.name);

product.age = 2;
console.log(product);

product.qoality = 'good';
console.log(product);

delete product.qoality;
console.log(product);

console.log(product['name']);

const product2 = {
    name : 'shirt',
    'delivery-time' : '1 day',
    rating: {
        stars : 4.7,
        review : 87

    },
    fun : function function1(){
        console.log('funtion inside object.')
    }

};
console.log(product2);
console.log(product2['delivery-time']);
console.log(product2.fun);
console.log(typeof product2.fun);
product2.fun();


/*json and localstorage*/
/* js to json*/
jsonString = JSON.stringify(product2);
console.log(jsonString);
/*json to js*/
js = JSON.parse(jsonString);
console.log(js);

/* localstorage*/
localStorage.setItem('massage' , 'hello');

ls = localStorage.getItem('massage');
console.log(ls);
