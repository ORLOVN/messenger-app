import {CompClass} from "/src/core.js";
import {tmpl} from "./chats.tmpl.js"

import {ChatList} from "./components/chatlist/chatlist.js"
import {ChatPane} from "./components/chat-pane/chat-pane"

import styles from "./chats.css"

export class Chats extends CompClass {
constructor(tag) {
    super(tag,tmpl,{},styles);
    this.chatList = new ChatList('chatlist');
    this.chatPane = new ChatPane('chat-pane');
}
}
