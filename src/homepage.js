const pageLoad = () => {

    const content = document.querySelector("#content");
    const description = document.createElement("div");
    description.innerHTML = "Food that Makes you go Crasy";

    
    content.appendChild(description);
};

export default pageLoad;