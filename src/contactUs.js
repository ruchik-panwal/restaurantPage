import "../src/cssFiles/contactUs.css"






const contactAddress = () => {

    const content = document.querySelector("#content");
    content.className = "contactUsContent";

    const addressBox = document.createElement("div");
    addressBox.className = "addressBox";

    const addressTitle = document.createElement("div");
    addressTitle.innerHTML = "Address";
    addressTitle.className = "addressTitle";

    const addressBody = document.createElement("div");
    addressBody.innerHTML = "225 Park Ave S, New York, NY 10003, USA";
    addressBody.className = "addressBody";

    addressBox.appendChild(addressTitle);
    addressBox.appendChild(addressBody);
    content.appendChild(addressBox);

}

const contactForm = () => {

    const contactTitle = document.createElement("div");
    contactTitle.innerHTML = "Contact Form";
    contactTitle.className = "contactTitle";

    const submitButton = document.createElement("button");
    submitButton.innerHTML = "Submit";
    submitButton.className = "submitButton";

    const firstName = document.createElement("input");
    firstName.className = "firstName";
    firstName.placeholder = "First Name";

    const lastName = document.createElement("input");
    lastName.className = "lastName";
    lastName.placeholder = "Last Name";

    const phoneNo = document.createElement("input");
    phoneNo.className = "phoneNo";
    phoneNo.placeholder = "9999 999 999";

    const email = document.createElement("input");
    email.className = "email";
    email.placeholder = "@gmail.com";

    const description = document.createElement("input");
    description.className = "description";
    description.placeholder = ".....";


    const contactTitleSubmit = document.createElement("div");
    contactTitleSubmit.className = "contactTitleSubmit";
    contactTitleSubmit.appendChild(contactTitle);
    contactTitleSubmit.appendChild(submitButton);

    const formInputs = document.createElement("div");
    formInputs.className = "formInputs";
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

export { contactAddress, addressMap, contactForm };