import { menuItems } from "./menu-items";

export function Menu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-items');

    menuItems.forEach((item) => {
        const menuCard = document.createElement('div');
        menuCard.classList.add('card');
        
        const menuImg = document.createElement('div');
        menuImg.classList.add('menu-img');
        menuImg.style.backgroundImage = `url(${item.image})`;
        menuCard.appendChild(menuImg);

        const menuDescription = document.createElement('div');
        const menuTitle = document.createElement('h1');
        const menuCaption = document.createElement('p');

        menuTitle.innerText = item.title;
        menuCaption.innerText = item.description;

        menuDescription.classList.add('img-description');
        menuDescription.appendChild(menuTitle);
        menuDescription.appendChild(menuCaption);

        menuCard.appendChild(menuDescription);

        const menuButton = document.createElement('button');
        menuButton.innerText = "Order here";
        menuButton.classList.add("menu-order");
        menuCard.appendChild(menuButton);

        menuDiv.appendChild(menuCard);
    });

    return menuDiv;
}