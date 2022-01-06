export const tmpl=`
<div class="profile-settings__back-pane">
    <button class="profile-settings__back-button" id="app-backButton">
        <span class="material-icons">
        arrow_back
        </span>
    </button>
    <div class="profile-settings__settings-pane">
        <div class="profile-settings__avatar-pane">
            <div class="profile-settings__avatar">
        
            </div>
            <div class="profile-settings__avatar-caption">
            Иван
            </div>
        </div>
        <div class="profile-settings__items">
                <div class="profile-settings__item">
                    <div calss="profile-settings__item-discription"> Почта </div>
                    <div class="profile-settings__input-wrap">
                        <input class="profile-settings__input" type="email" name="email" id="app-email" placeholder="example@e-mail.com" value="{{email}}">
                    </div>    
                    <div class="profile-settings__bottom-line"></div>
                </div>
                
                <div class="profile-settings__item">
                    <div calss="profile-settings__item-discription"> Логин </div>
                    <div class="profile-settings__input-wrap">
                        <input class="profile-settings__input" type="text" name="login" id="app-login" placeholder="mylogin999" value="{{login}}">
                    </div>  
                    <div class="profile-settings__bottom-line"></div>
                </div>
                                
                <div class="profile-settings__item">
                    <div class="profile-settings__item-discription"> Имя </div>
                    <div class="profile-settings__input-wrap">
                        <input class="profile-settings__input" type="text" name="first_name" id="app-first_name" placeholder="Иван" value="{{first_name}}">
                    </div> 
                    <div class="profile-settings__bottom-line"></div>
                </div>                
                
                <div class="profile-settings__item">
                    <div class="profile-settings__item-discription"> Фамилия </div>
                    <div class="profile-settings__input-wrap">
                        <input class="profile-settings__input" type="text" name="second_name" id="app-second_name" placeholder="Иванов" value="{{second_name}}">
                    </div>   
                    <div class="profile-settings__bottom-line"></div>
                </div>
                
                <div class="profile-settings__item">
                    <div class="profile-settings__item-discription"> Имя в чате </div>
                    <div class="profile-settings__input-wrap">
                        <input class="profile-settings__input" type="text" name="display_name" id="app-display_name" placeholder="Иван" value="{{display_name}}">
                    </div>
                    <div class="profile-settings__bottom-line"></div>
                </div>    
                            
                <div class="profile-settings__item">
                    <div class="profile-settings__item-discription"> Телефон </div>
                    <div class="profile-settings__input-wrap">
                        <span>+7</span><input class="profile-settings__input" type="text" name="phone" id="app-phone" placeholder="(888)888-8888" value="{{phone}}">
                    </div>    
                    <div class="profile-settings__bottom-line"></div>
                </div>
        </div>
        <div class="profile-settings__buttons-pane">
                <div class="profile-settings__button">
                    <a href="#"> Изменить данные </a>
                    <div class="profile-settings__bottom-line"></div>
                </div> 
                <div class="profile-settings__button">
                    <a href="/changepsw"> Изменить пароль </a>
                    <div class="profile-settings__bottom-line"></div>
                </div>         
        </div>                      
    </div>   
</div>    
`