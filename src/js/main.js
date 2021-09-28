import { tech } from './tech';
import { fest } from './fest';
import { observer, target } from './observe';

window.addEventListener('load', () => {
    tech();
    fest();
    observer.observe(target);
});

console.log('hello world with rollup');