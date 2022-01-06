export const tmpl = `
<div class="chatlist__back">
    <div class="chatlist__header">
        <div class="chatlist__search">
        <span class="material-icons chatlist__search-icon">
            search
        </span>
        <input type="text" class="chatlist__search-input" name="chart-search" placeholder="Поиск">
        <app-input></app-input>
        </div>
        <button class="chatlist__profile-settings" id="app-profButton">
            <span class="material-icons">
                account_circle
            </span>
        </button>
    </div>
    <div class="chatlist__list-pane">
<!--     <div class="chatselector__bottomline"></div> -->
<!-- chat list-pane-->
{{#each chatlist}}
        <div class="chatselector">
            <div class="chatselector__avatar-container">
              <div class="chatselector__avatar">

               </div>
            </div>
            <div class="chatselector__discription">
                <div class="chatselector__name">
                    {{this.name}}
                </div>
                <div class="chatselector__last-time">
                    {{this.time}}
                </div> 
                <div class="chatselector__last-messege">
                    {{this.lastmessege}}
                </div>          
                <div class="chatselector__unread">
                        <div class="chatselector__unread-circle">
                        {{this.unread}}
                        </div>
                </div>
            </div>
        </div>
<!--    <div class="chatselector__bottom-line"></div> -->
{{/each}} 
<!--chat list-pane-->
    </div>
 </div>
`