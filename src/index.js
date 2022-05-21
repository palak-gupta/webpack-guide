import _ from "lodash"
import styles from './index.scss';

function component() {
    const element = document.createElement("div");
    
    element.innerHTML = _.join(['Hello', 'Webpackers'], ' ');
    element.classList.add(styles.hello);

    return element;
}

document.body.appendChild(component());
