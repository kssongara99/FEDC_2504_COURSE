const products = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Phone", price: 800, category: "Electronics" },
    { name: "Shirt", price: 40, category: "Clothing" },
    { name: "Book", price: 20, category: "Stationery" },
    { name: "Shoes", price: 100, category: "Clothing" }
  ];
  
  // .map()
  const productNamesUpperCase = products.map(product => product.name.toUpperCase());
  console.log(productNamesUpperCase);

  //.filter()

  const ClothingProducts = products.filter(product => product.category === "Clothing");
  console.log(ClothingProducts);

  // .sort()

  const productsByPriceAscending =[...products].sort((a,b)=>a.price - b.price);
  console.log(productsByPriceAscending.map(product => product.name));

  // .foreach()

products.forEach(product => { console.log(`The product ${product.name} costs ${product.price} and belongs to ${product.category} category.`)})

// .reduce()


const totalPrice = products.reduce((sum, product)=> sum + product.price,0);
console.log(totalPrice)