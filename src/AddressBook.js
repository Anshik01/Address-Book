class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

let addressBook = [];

function validate(contact) {
    const nameRegex = /^[A-Z][a-z]{2,}/;
    const addressRegex = /^.{4,}/;
    const zipRegex = /^\d{5}$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!nameRegex.test(contact.firstName) || !nameRegex.test(contact.lastName)) {
        throw "Invalid Name";
    }
    if (
        !addressRegex.test(contact.address) ||
        !addressRegex.test(contact.city) ||
        !addressRegex.test(contact.state)
    ) {
        throw "Invalid Address";
    }
    if (
        !zipRegex.test(contact.zip) ||
        !phoneRegex.test(contact.phoneNumber) ||
        !emailRegex.test(contact.email)
    ) {
        throw "Invalid Contact Information";
    }
    return true;
}

function addContact(contact){
    if(validate(contact)){
        addressBook.push(contact);
    }
    else{
        return "Invalid Contact";
    }
}

function editContact(name, newContact){
    let fullName = name.split(" ");

    let contact = addressBook.findIndex(
        (contact) => contact.firstName == fullName[0] && contact.lastName == fullName[1]
    )

    if(contact != -1){
        addressBook[contact] = newContact;
    }
    
    else{
        return "Contact not found";
    }
}   

function deleteContact(name){
    let fullName = name.split(" ");

    let index = addressBook.findIndex(
        (contact) => contact.firstName == fullName[0] && contact.lastName == fullName[1]
    )

    if(index != -1){
        addressBook.splice(index, 1);
    }
    else{
        return "Contact not found";
    }
}

function countContacts(){
    return addressBook.reduce((count) => count +1, 0);
}

function isDuplicate(name){
    let fullName = name.split(" ");

    return addressBook.some(
        (contact) => contact.firstName == fullName[0] && contact.lastName == fullName[1]
    );
}

function addUniqueContact(contact){
    if(!isDuplicate(contact.firstName + " " + contact.lastName)){
        addressBook.push(contact);
    }
    else{
        console.error("Contact already exists");
    }
}

function search(cityOrState){
    return addressBook.filter(
        (contact) => contact.city == cityOrState || contact.state == cityOrState
    )
}

function viewByCityOrState(cityOrState) {
    return addressBook.filter(
      (contact) => contact.city === cityOrState || contact.state === cityOrState
    );
}

function countByCityOrState(cityOrState) {
    return addressBook.filter(
      (contact) => contact.city === cityOrState || contact.state === cityOrState
    ).length;
}

function sortContactByName(){
    return addressBook.sort(
        (a,b) => a.firstName.localeCompare(b.firstName) ||
                 a.lastName.localeCompare(b.lastName) 
    )
}

function sortByLocation(attribute){
    return addressBook.sort(
        (a,b) => a[attribute].localeCompare(b[attribute])
    )
}