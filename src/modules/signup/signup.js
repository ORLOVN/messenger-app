import {CompClass, validTools} from "/src/core.js";
import {temp} from "./signup.tmpl.js";
import styles from "./signup.css";

export class SignUp extends CompClass {
    constructor(tag) {
        super(tag,temp,{},styles);
        // Все html елементы, содержащие id^="app-" продключены родителем к объекту в качетве свойств.
        this.appElements.forEach(
            (element)=>{
                /*if (element.tagName == 'input') {                //такие геттеры и сеттеры уже определены
                    this.setSetterGetterAttr(element, "value")
                }*/
                if (element.tagName === 'LABEL') {
                    this.setSetterGetterAttr(element, "originalText");
                    element.originalText = element.textContent;
                }
            });
        this.signupForm.addEventListener('submit', event=>this.handleFormSubmit(event)) //стредочная, чтобы исключить подмену this
        this.phone.addEventListener('change',event=>this.handlePhoneChange(event));
    }
    handlePhoneChange (event) {
        event.srcElement.value=validTools.beautifyPhone(event.srcElement.value);
    }
    handleFormSubmit(event) {
        event.preventDefault() // Просим форму не отправлять данные самостоятельно
        let test = true;
        test &= validTools.validate(this.loginLabel,validTools.badLogin(this.login.value));
        test &= validTools.validate(this.passwordLabel,validTools.badPassword(this.password.value));
        test &= validTools.validate(this.repasswordLabel,validTools.badRepassword(this.repassword.value,this.password.value));
        test &= validTools.validate(this.emailLabel,validTools.badEmail(this.email.value));
        test &= validTools.validate(this.phoneLabel,validTools.badPhone(this.phone.value));
        test &= validTools.validate(this.first_nameLabel,validTools.badText(this.first_name.value,this.first_nameLabel.originalText));
        test &= validTools.validate(this.second_nameLabel,validTools.badText(this.second_name.value,this.second_nameLabel.originalText));
        if (test) {window.location.href = '/chat'}

    }
}
