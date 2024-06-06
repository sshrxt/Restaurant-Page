import { Menu } from "./menu";


export function MenuPage() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');

    const menuHeaderTitle = document.createElement('h1');
    menuHeaderTitle.innerHTML = "Shrut's Menu";
    menuHeaderTitle.classList.add('menu-title');

    const menuHeaderCaption = document.createElement("p");
    menuHeaderCaption.innerHTML = "Feast like shrut - the fattest dude around";
    menuHeaderCaption.classList.add('menu-caption');

    menuHeader.appendChild(menuHeaderTitle);
    menuHeader.appendChild(menuHeaderCaption);

    const menuItems = Menu();

    menuContainer.appendChild(menuHeader);
    menuContainer.appendChild(menuItems);

    return menuContainer;
}   