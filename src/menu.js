
const menuItems = [{
    name: "Butter Chicken",
    image: "Images/FoodList/Butter Chicken.jpeg"
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
        foodImage.className = "foodImage";
        foodImage.style.backgroundImage = 'Images/FoodList/Butter Chicken.jpeg';

        const foodname = document.createElement("div");
        foodname.innerHTML = item.name;

        itemBox.appendChild(foodImage);
        itemBox.appendChild(foodname);

        menuGrid.appendChild(itemBox);
    });    

    content.appendChild(menuGrid);

    
};

export {menuhead, foodList};