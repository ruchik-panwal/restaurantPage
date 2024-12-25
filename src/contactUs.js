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

export {contactAddress};