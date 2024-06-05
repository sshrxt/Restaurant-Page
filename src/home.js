export function HomePage() {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('home-content');

    const sloganDiv = document.createElement('div');
    sloganDiv.innerText = "MAKE YOUR WEIGHT LOSS DREAMS INTO REALITY";
    sloganDiv.classList.add('slogan');
    // contentDiv.appendChild(sloganDiv);

    const captionDiv = document.createElement('div');
    captionDiv.innerText = "Enjoy dishes inspired by many sources, like tiktok, prepared with fresh ingredients for a stress-free and authentic flavor";
    captionDiv.classList.add('caption');

    const menuBtn = document.createElement('div');
    menuBtn.innerText = 'see the menu';
    menuBtn.classList.add('menu-button');

    contentDiv.appendChild(sloganDiv);
    contentDiv.appendChild(captionDiv);
    contentDiv.appendChild(menuBtn);

    return contentDiv;
}