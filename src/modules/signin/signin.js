import {CompClass, validTools} from "/src/core.js";
import {tmpl} from "./signin.tmpl.js";
import styles from "./signin.css";

export class SignIn extends CompClass {
    constructor(tag) {
        super(tag, tmpl, {},styles);
        // Все html елементы, содержащие id^="app-" продключены родителем к объекту в качетве свойств.
        this.appElements.forEach(
            (element)=>{
                if (element.tagName === 'LABEL') {
                    this.setSetterGetterAttr(element, "originalText");
                    element.originalText = element.textContent;
                }
            });
        this.signinForm.addEventListener('submit', event=>this.handleFormSubmit(event)) //стредочная, чтобы исключить подмену this
    }
    handleFormSubmit(event) {
        event.preventDefault() // Просим форму не отправлять данные самостоятельно
        let test = true;
        test &= validTools.validate(this.loginLabel,validTools.badLogin(this.login.value));
        test &= validTools.validate(this.passwordLabel,validTools.badPassword(this.password.value));
        if (test) {window.location.href = '/chat'}
    }


}
