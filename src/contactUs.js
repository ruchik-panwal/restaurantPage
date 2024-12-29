const content = document.querySelector("#content");


const contactAddress = () => {

    const addressBox = document.createElement("div");
    addressBox.className = "addressBox";

    const addressTitle  = document.createElement("div");
    addressTitle.innerHTML = "Address";

    const addressBody = document.createElement("div");
    addressBody.innerHTML = "225 Park Ave S, New York, NY 10003, USA";

    addressBox.appendChild(addressTitle);
    addressBox.appendChild(addressBody);
    content.appendChild(addressBox);

}

const contactForm = () => {

    const contactTitle = document.createElement("div");
    contactTitle.innerHTML = "Contact Form";

    const submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";
    submitButton.className = "submitButton";

    const firstName = document.createElement("input");
    firstName.className = "firstName";
    firstName.value = "First Name";

    const lastName = document.createElement("input");
    lastName.className = "lastName";
    lastName.value = "Last Name";

    const phoneNo = document.createElement("input");
    phoneNo.className = "phoneNo";
    phoneNo.value = "9999 999 999";

    const email = document.createElement("input");
    email.className = "email";
    email.value = "@gmail.com";

    const description = document.createElement("input");
    description.className = "description";
    description.value = ".....";


    const contactTitleSubmit = document.createElement("div");
    contactTitleSubmit.appendChild(contactTitle);
    contactTitleSubmit.appendChild(submitButton);

    const formInputs = document.createElement("div");
    formInputs.appendChild(firstName);
    formInputs.appendChild(lastName);
    formInputs.appendChild(phoneNo);
    formInputs.appendChild(email);
    formInputs.appendChild(description);

    const contactUsForm = document.createElement("div");
    contactUsForm.className = "contactUsForm"

    contactUsForm.appendChild(contactTitleSubmit);
    contactUsForm.appendChild(formInputs);
    content.appendChild(contactUsForm);
}


const addressMap = () => {

    const map = document.createElement("div");
    map.className = "map";

    content.appendChild(map);
};

export {contactAddress, addressMap, contactForm};