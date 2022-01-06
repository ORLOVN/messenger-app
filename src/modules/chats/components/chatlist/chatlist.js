import {CompClass} from "/src/core.js";
import {tmpl} from "./chatlist.tmpl.js";
import {dollData} from './dolldata.js'

import styles from "./chatlist.css"

export class ChatList extends CompClass {
    constructor(tag) {
        super(tag,tmpl,dollData,styles);
        this.profButton.addEventListener('click', event=>this.handleProfButton(event))
    }
    handleProfButton(event){
        window.location.href = '/profile'
    }
}