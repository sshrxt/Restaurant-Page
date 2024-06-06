import Restaurant from './assets/restaurant.jpg'

export function AboutPage() {
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about-container");

  const beforeDiv = document.createElement("div");
  beforeDiv.innerText =
    'Welcome to "Shrut\'s Kitchen," where we redefine healthy dining with flavor and finesse. I\'m Shrut, the founder and visionary behind this low-calorie culinary haven. Inspired by my personal journey towards a healthier lifestyle, I created this restaurant with the mission to offer delicious, nutritious meals that do not compromise on taste. My passion for health and wellness began when I realized the impact of dietary choices on overall well-being. Determined to find a balance between enjoyment and nutrition, I embarked on a culinary adventure to craft a menu that delivers satisfaction without excess calories. After extensive research, countless recipe experiments, and collaborations with nutritionists and chefs, "Shrut\'s Kitchen" was born. At "Shrut\'s Kitchen," we are committed to providing meals that are both delectable and health-conscious. Our menu features a wide array of dishes, each carefully curated to ensure a harmonious blend of flavors and nutritional benefits. From our signature "Slim Sliders" to the indulgent yet mindful "Calorie-Conscious Chocolate Mousse," every item is designed to delight your palate while supporting your wellness goals.';
  beforeDiv.classList.add("about");

  const aboutImg = document.createElement('div');
  aboutImg.classList.add('about-img');
  aboutImg.style.backgroundImage = `url(${Restaurant})`;

  const afterDiv = document.createElement('div');
  afterDiv.innerText = "We pride ourselves on using fresh, high-quality ingredients, sourced from trusted suppliers who share our commitment to health and sustainability. Our innovative cooking techniques enhance the natural flavors of our ingredients, ensuring that every bite is a memorable experience. Why choose \"Shrut's Kitchen\"? Our dedication to excellence and our passion for healthy living set us apart. We strive to create an inviting atmosphere where you can enjoy wholesome meals in a comfortable and refined setting. Our team is here to provide you with exceptional service, making your dining experience both enjoyable and nourishing. Join us at \"Shrut's Kitchen\" and discover how delicious healthy eating can be. Let us be your partner in your journey";
  afterDiv.classList.add("about");

  aboutDiv.appendChild(beforeDiv);
  aboutDiv.appendChild(aboutImg);
  aboutDiv.appendChild(afterDiv);

  return aboutDiv;
}
