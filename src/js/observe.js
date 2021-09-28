import { getRandomColor } from './color';
import confetti from 'canvas-confetti';

let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
};

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry.target);
            let color = getRandomColor();
            entry.target.style.color = color;
            if (confetti) {
                confetti();
            }
        }
        // Each entry describes an intersection change for one observed
        // target element:
        //   entry.boundingClientRect
        //   entry.intersectionRatio
        //   entry.intersectionRect
        //   entry.isIntersecting
        //   entry.rootBounds
        //   entry.target
        //   entry.time
    });
};

let observer = new IntersectionObserver(callback, options);

let target = document.querySelector('p');



export { observer, target };
