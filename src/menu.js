
// menuItems = [{
//     name: "Vada",
//     image: ""
// },
// {
//     name: "Panner Handi",
//     image: ""
// },
// {
//     name: "Gulab Jamun",
//     image: ""
// }];


const menuhead = () => {

    const content = document.querySelector("#content");
    const menuTitle = document.createElement("div");
    menuTitle.innerHTML = "Menu";
    menuTitle.className = "title";

    const line = document.createElement("div");
    line.innerHTML = "-------";

    content.appendChild(menuTitle);
    content.appendChild(line);
};

const foodList = () => {

    menuItems.forEach((item) => {

        
        
    });    
};

export {menuhead};