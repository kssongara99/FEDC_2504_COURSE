function formatUser(user){
    const { id , profile :{ name,address:{city,zipcode} ={} } ={} 
        } = user;
    
    const userName = name || "Information not available";
    const userCity = city || "Information not available";    
    const userZipcode = zipcode || "Information not available";

    return `user ${userName} (ID:${id}) lives in ${userCity} (ZIP :${userZipcode})`
}

const user1 = { 
    id: 123,
    profile: { 
        name: "John Doe",
        address: { 
            city: "Los Angeles",
            zipcode: "90001"
        } 
    }
};

const user2 = { id:456,profile:{
    name: "Jane Smith"
}};

console.log(formatUser(user1))
console.log(formatUser(user2))



