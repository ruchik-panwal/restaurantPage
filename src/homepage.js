import "../src/cssFiles/homePage.css"

const pageLoad = () => {
    const content = document.querySelector("#content");
    content.className = ".homePageContent";
};

export default pageLoad;