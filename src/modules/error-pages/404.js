import styles from "./error.css";
import {CompClass} from "/src/core.js";

const tmpl = `
<div class="error__back">
<div class="error__title">404</div>
<div class="error__description">Вы куда-то не туда зашли</div>
<div class="error__back-link"><a href="./chats">Назад к чатам</a>
</div>
`;

export class Error404 extends CompClass {
    constructor(tag){
        super(tag, tmpl, {},styles);
    }
}