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