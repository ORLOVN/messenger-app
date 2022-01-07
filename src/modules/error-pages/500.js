import styles from "./error.css";
import {CompClass} from "/src/core.js";

const tmpl = `
<div class="error__back">
<div class="error__title">500</div>
<div class="error__description">Что-то пошло не так! Мы уже разбиремся</div>
<div class="error__back-link"><a href="./chats">Назад к чатам</a>
</div>
`;

export class Error500 extends CompClass {
    constructor(tag){
        super(tag, tmpl, {},styles);
    }
}