import {SignIn} from "./modules/signin/signin.js";
import {ProfileSettings} from "./modules/profile-settings/profile-settings.js";
import {Chats} from "./modules/chats/chats.js";
import {SignUp} from "./modules/signup/signup";
import {Error500} from "./modules/error-pages/500";
import {Error404} from "./modules/error-pages/404";

import styles from "./index.css"
document.querySelectorAll('*').forEach((element) => {
    let oldClassName= element.getAttribute('class');
    let newClassName= styles[oldClassName];
    element.setAttribute('class',newClassName?newClassName:oldClassName);
});

let path = window.location.pathname;
if (path === '/') {
        const module = new SignIn('plug_in_place');
    } else if (path === '/signin') {
        const module = new SignIn('plug_in_place');
    } else if (path === '/signup') {
        const module = new SignUp('plug_in_place');
    } else if (path === '/profile') {
    const module = new ProfileSettings('plug_in_place');
    } else if (path === '/chat') {
        const module = new Chats('plug_in_place');
    } else if (path === '/changepsw') {
        const module = new Error500('plug_in_place');
    } else {
        const module = new Error404('plug_in_place');
}

