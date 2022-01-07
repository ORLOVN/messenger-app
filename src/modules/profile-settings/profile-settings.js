import {CompClass} from "/src/core.js";
import {tmpl} from "./profile-settings.tmpl";
import styles from "./profile-settings.css";

const tmplData = {
    email:"ivan@ivanov.ru",
    login:"ivan123",
    first_name:"Иван",
    second_name:"Иванов",
    display_name:"Иван",
    phone:"(914) 640 8801",
};

export class ProfileSettings extends CompClass {
    constructor(tag) {
        super(tag,tmpl,tmplData,styles);
        this.backButton.addEventListener("click",(event)=>this.backButtonClickHandler(event));
    }
    backButtonClickHandler(event){
        document.location.href="./chats";
    }
}
