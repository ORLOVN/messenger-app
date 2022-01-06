"use strict"
const Handlebars = require("handlebars");
let uniqCounter = 0;

export function uniqNumber(name){
    uniqCounter++;
    return name+uniqCounter;
}

export const validTools ={
    beautifyPhone: function (str) {
        str = str.replace(/[^0-9]/g, '');
        let area = str.substr(0, 3);
        let pre = str.substr(3, 3);
        let tel = str.substr(6, 4);
        if (area.length < 3) {
            return "(" + area;
        } else if (area.length === 3 && pre.length < 3) {
            return "(" + area + ")" + " " + pre;
        } else if (area.length === 3 && pre.length === 3) {
            return "(" + area + ")" + " " + pre + "-" + tel;
        }
        return str
    },
    badPhone: function (str) {

        if (/^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/.test(str) === false) {
            return 'Введите телефон полностью'
        }
        return false;
    },
    badText: function (str, fieldName) {

        if (str.length === 0) {
            return `Поле ${fieldName} не должно оставаться пустым`
        }
        return false;
    },
    badLogin: function (str) {

        if (str.length < 4 || str.length > 20) {
            return 'В логине должен быть от 4 до 20 символов'
        }
        if (/^[a-zA-Z1-9]+$/.test(str) === false) {
            return 'В логине должны быть только латинские буквы'
        }
        if (parseInt(str.substr(0, 1))) {
            return 'Логин должен начинаться с буквы'
        }

        return false;
    },
    badPassword:function (str) {
        if (str.length < 1) {
            return 'Пароль должен быть введен обязательно'
        }
        return false
    },
    badRepassword: function(rePsw, psw) {
        if (rePsw.length < 1) {
            return 'Пароль должен быть введен повторно'
        }
        if (rePsw !== psw) {
            return 'Пароли не совпадают'
        }
    },
    badEmail:function (str) {
        if (str.length < 1) {
            return 'Email должен быть введен обязательно'
        }
        if (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(str) === false) {
            return 'Email должен быть формата name@domen.com'
        }
        return false;
    },
    validate: function (labelElement,testResult, badColor = 'red', goodColor = 'green') {
        if (testResult) {
            labelElement.textContent = testResult;
            labelElement.style.color = badColor;
            return false;
        }
        else {
            labelElement.textContent = labelElement.originalText;
            labelElement.style.color = goodColor;
        }
        return true;
    }
}
export function TemplateCompile(tmpl,tmplData){
    const template = Handlebars.compile(tmpl);
    return template(tmplData)
}

export function ReplaceTag(tag,NodeHTML){
    if (document.querySelector(tag)) {
        document.querySelector(tag).replaceWith(NodeHTML);
    }
}
export function ParseStringHTML(stringHTML){
    return (new DOMParser()).parseFromString(stringHTML,"text/html").body.children[0]
}
export function ParseNReplaceTag(tag,stringHTML){
    ReplaceTag(tag,ParseStringHTML(stringHTML))
}

export class CompClass {
    constructor(tag,tmpl,tmplData,styles=null) {
        this.tmpl = tmpl;
        this.signinForm = {};
        this.node = ParseStringHTML(TemplateCompile(tmpl, tmplData));
        ReplaceTag(tag, this.node);

        if (styles) { //заменяем клаcсы в html элементах на те, что получились после postcss
            let oldClass= this.node.getAttribute('class');
            let newClass= styles[oldClass];
            this.node.setAttribute('class',newClass?newClass:oldClass);
            this.node.querySelectorAll('*').forEach((element) => {
                let oldClass= element.getAttribute('class');
                let newClass= styles[oldClass];
                element.setAttribute('class',newClass?newClass:oldClass);
            })
        }

        this.appElements = this.node.querySelectorAll('[id^="app-"]') // все елементы с id начинающийчся с app-, будт поключены к свойстван текущего объекта для легкого доступа
        this.appElements.forEach( (element)=> {
            let id =  element.getAttribute('id');
            id = id.slice(4,id.length);
            this[id] = element;
        });
        this.onInit();
    }
    setSetterGetterAttr(element, attributeName, propertyName = '') {
        if (!propertyName) {
            propertyName = attributeName;
        }
        element[propertyName] = {
            get() {
                element.getAttribute(attributeName)
            },
            set(value) {
                element.setAttribute(attributeName,value)
            }
        }
    }

    onInit(){};
}

export class AppCompClass {
    constructor(tag,tmpl,tmplData){
        this.tmpl = tmpl;
        /*let nodeReplaced = document.querySelector(tag);
        console.log(nodeReplaced);
        if (nodeReplaced) {
            let attr = nodeReplaced.attributes;
        }*/
        this.node = ParseStringHTML(TemplateCompile(tmpl,tmplData));
        ReplaceTag(tag,this.node);
        this.onInit();
    }
    onInit(){};
}