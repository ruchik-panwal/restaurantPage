
const menuItems = [{
    name: "Vada",
    image: "vada cha ima"
},
{
    name: "Panner Handi",
    image: "fefsfe"
},
{
    name: "Gulab Jamun",
    image: "adfe"
}];


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
        const itemBox = document.createElement("div");
        const foodImage = document.createElement("div");
        foodImage.innerHTML = item.image;

        const foodname = document.createElement("div");
        foodname.innerHTML = item.name;

        itemBox.appendChild(foodImage);
        itemBox.appendChild(foodname);

        content.appendChild(itemBox);
    });    

    
};

export {menuhead, foodList};