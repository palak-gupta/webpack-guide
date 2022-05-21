import _ from "lodash"
import styles from './index.scss';
import image from './image.jpg';
import print from "./print";

function component() {
    const element = document.createElement("div");

    element.innerHTML = _.join(['Hello', 'Webpackers'], ' ');
    element.classList.add(styles.hello);
    const image_ele = document.createElement('img')
    image_ele.src = image;
    const th = document.createElement('div');
    th.appendChild(image_ele);
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check console';
    btn.onclick = print;
    element.appendChild(th);
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
