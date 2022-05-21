import _ from "lodash"
import styles from './index.scss';
import image from './image.jpg'

function component() {
    const element = document.createElement("div");

    element.innerHTML = _.join(['Hello', 'Webpackers'], ' ');
    element.classList.add(styles.hello);
    const image_ele = document.createElement('img')
    image_ele.src = image;
    const th = document.createElement('div');
    th.appendChild(image_ele)
    element.appendChild(th);

    return element;
}

document.body.appendChild(component());
