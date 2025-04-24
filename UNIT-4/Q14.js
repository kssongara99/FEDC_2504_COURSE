const profile = { 
    name: "Charlie",
    age: 29,
    address: { 
        city: "San Francisco",
         zipcode: "94101" 
        } 
    };

const updates = {
     age: 30,
     address: { 
        zipcode: "94109",
        country: "USA" 
    } 
};
const mergedObject = { ...profile,...updates};

if(profile.address || updates.address){
    mergedObject.address = {
        ...profile.address, ...updates.address
    };
}
console.log(mergedObject)