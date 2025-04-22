function calculatePrice(price ,discount){
    if(typeof price !==`number || price <= 0`){
        return "Eror: Invalid price. Please enter a positive number";
    }
    if(typeof price !==`number || discount < 0`){
        return "Eror: Invalid discount. Please enter a non-negetive number";
    }
    const finalPrice = price * (1-discount);
    return finalPrice;
}
let priceInput = prompt("Enter the price:");
let discountInput = prompt("Enter the disconut:");

let price = parseFloat(priceInput);
let disconut = discountInput === "" ? undefined : parseFloat(discountInput)/100;

let result = calculatePrice(price,disconut);

if(typeof result=== `string && result.startsWith("Error)`){
    console.log(result);
    alert(result);
}else{
    console.log("Final price:",result);
    alert("Final price: " + result);
};