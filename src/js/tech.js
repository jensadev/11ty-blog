import { getRandomColor, getRandomColorWithContrast, getContrastColor } from "./color";

const tech = () => {
    const h1 = document.querySelector('h1');

    const color = getRandomColor();

    h1.style.color = color;

    const colorWithContrast = getContrastColor(color);
    const colorWithContrast2 = getRandomColorWithContrast();

    console.log(colorWithContrast);
    console.log(colorWithContrast2);
}

export { tech };