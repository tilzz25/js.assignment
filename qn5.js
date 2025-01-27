//4. Delete the address property in Person
//b) Access the address property, what does it display? Explain


const person = {
    firstName: 'tilak',
    lastName: 'patel',
    age: 18,
    address: {
        city: 'USA',
        street: 'fannypeg road',
        zipCode: '200603'
    },
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};


delete person.address;

console.log(person.address); 
//It displays undefined
//Explanation:
//Because the address property doesnt exist anymore.