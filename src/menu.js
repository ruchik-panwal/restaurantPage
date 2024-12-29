
import ButterChicken from "./Images/FoodList/ButterChicken.jpeg";
import ChickenBiryani from "./Images/FoodList/ChickenBiryani.jpeg";
import CholeBhature from "./Images/FoodList/CholeBhature.jpeg";
import DahiKeKebab from "./Images/FoodList/DahiKeKebab.jpeg";
import PaneerTikkaPizza from "./Images/FoodList/PaneerTikkaPizza.jpeg";
import RajKachori from "./Images/FoodList/RajKachori.jpeg";
import SpecialThali from "./Images/FoodList/SpecialThali.jpeg";
import TawaPulao from "./Images/FoodList/TawaPulao.jpeg";
import TheGrillMill from "./Images/FoodList/TheGrillMill.jpeg";


const menuItems = [{
    name: "Butter Chicken",
    image: ButterChicken
},
{
    name: "Chicken Biryani",
    image: ChickenBiryani
},
{
    name: "Chole Bhature",
    image: CholeBhature
},
{
    name: "Dahi Ke Kebab",
    image: DahiKeKebab
},
{
    name: "Panner Tikka Pizza",
    image: PaneerTikkaPizza
},
{
    name: "Raj Kachori",
    image: RajKachori
},
{
    name: "Special Thali",
    image: SpecialThali
},
{
    name: "Tawa Pulao",
    image: TawaPulao
},
{
    name: "The Grill Mill",
    image: TheGrillMill
}];

const content = document.querySelector("#content");

const menuhead = () => {

    const menuTitle = document.createElement("div");
    const lineDiv = document.createElement("div");
    menuTitle.innerHTML = "Menu";
    menuTitle.className = "title";
    lineDiv.className = "lineDiv";

    
    lineDiv.appendChild(menuTitle);
    content.appendChild(lineDiv)
    
};

const foodList = () => {

    const menuGrid = document.createElement("div");
    menuGrid.className = 'menuGrid';

    menuItems.forEach((item) => {
        const itemBox = document.createElement("div");
        itemBox.className = "itemBox";

        const foodImage = document.createElement("img");
        foodImage.className = "foodImage";
        foodImage.src = item.image;

        const foodName = document.createElement("div");
        foodName.innerHTML = item.name;

        itemBox.appendChild(foodImage);
        itemBox.appendChild(foodName);

        menuGrid.appendChild(itemBox);
    });    

    content.appendChild(menuGrid);

    
};

export {menuhead, foodList};