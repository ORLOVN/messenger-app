import {CompClass} from "/src/core.js";
import {tmpl} from "./chat-pane.tmpl.js"

import styles from "./chat-pane.css";

export class ChatPane extends CompClass {
    constructor(tag) {
        super(tag,tmpl,{},styles);
    }
}