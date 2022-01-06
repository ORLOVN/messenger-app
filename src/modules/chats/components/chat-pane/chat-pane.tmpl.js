export const tmpl = `
<div class="chat-pane">
    <div class="chat-pane__header">
        <div class="chat-pane__avatar">
        </div>
        <div class="chat-pane__contact-name">
        Рабочая группа         
        </div> 
        <div class="chat-pane__contact-status">
        Павел печатает...
        </div>                                                                  
    </div>
    <div class="chat-pane__main-pane">
        <div class="chat-pane__messages-pane">
            <div class="chat-pane__date-division">
                <div class="chat-pane__date-caption">
                Сегодня
                </div>
                <div class="chat-pane__bottom-line">
                </div>                
                <div class="chat-pane__received-message">
                    <div class="chat-pane__message-author">Иван</div>
                    <div class="chat-pane__message">
                    The CSSStyleSheet interface represents a single CSS stylesheet, and lets you inspect and modify the list of rules contained in the stylesheet. It inherits properties and methods from its parent, StyleSheet.
                    </div>
                    <div class="chat-pane__time">
                    19:32
                    </div>
                </div>  
                <div class="chat-pane__sent-message">
                    <div class="chat-pane__message">
                    The CSSStyleSheet interface represents a single CSS stylesheet, and lets you inspect and modify the list of rules contained in the stylesheet. It inherits properties and methods from its parent, StyleSheet.
                    </div>
                    <div class="chat-pane__time">
                    19:32 <span class="material-icons">done_all</span>
                    </div>
                </div>                
            </div>
        </div>
        <div>
        <!-- no content -->
        </div>
        <div class="chat-pane__new-message-pane">
            <div class="chat-pane__attach-button">
                <span class="material-icons">
                attach_file
                </span>
            </div>
            <input class="chat-pane__message-input" name="message" placeholder="Сообщение"/>
            <div class="chat-pane__attach-button">
                <span class="material-icons">
                attach_file
                </span>
            </div>
        </div>
        <div class="chat-pane__submit-button">
            <span class="material-icons">
                send
            </span>
        </div>
    </div>
</div>
`