
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

const content = document.querySelector("#content");

const menuhead = () => {

   
    const menuTitle = document.createElement("div");
    menuTitle.innerHTML = "Menu";
    menuTitle.className = "title";

    // const line = document.createElement("div");
    // line.innerHTML = "-------";

    content.appendChild(menuTitle);
};

const foodList = () => {

    const menuGrid = document.createElement("div");
    menuGrid.className = 'menuGrid';

    menuItems.forEach((item) => {
        const itemBox = document.createElement("div");
        itemBox.className = "itemBox";
        const foodImage = document.createElement("div");
        foodImage.innerHTML = item.image;

        const foodname = document.createElement("div");
        foodname.innerHTML = item.name;

        itemBox.appendChild(foodImage);
        itemBox.appendChild(foodname);

        menuGrid.appendChild(itemBox);
    });    

    content.appendChild(menuGrid);

    
};

export {menuhead, foodList};