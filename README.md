Yandex practicum sprint no 1
Прототипы экранов находятся по ссылке https://www.figma.com/file/zM210yks893au6dEYgdMRP/messanger-app
Проект развернут на Netlify по ссылке https://friendly-haibt-bebf56.netlify.app

Скрипты запуска:

npm run:    Значение                            Описание
"start"     "node server.js",                   Стартует сервер на 3000 порту
"dev"       "parcel src/index.html",            Собирает проект в папку dist (для разработки, включены такие фитчи как горячее обновление)
"build"     "parcel build src/index.html"       Собирает проект в папку dist (для продакшина)

Обратите внимание, папка dist должна содержать _redirects для Netlify. Поэтому в .gitignore добавлено сключение !/dist/_redirects
Если файла _redirects нет в dist, копируйте его из root. 


Описание проекта
Проект будет представлять собой мессенджер, наподобие telegram. В рамках первого спринта пока созданы прототипы экранов.
Некоторые прототипы имеют формы, к которым уже прописана валидация. Также имеются ссылки, с помощью которых можно переключаться
между страницами. 

Список доступных страниц:

Вход            https://friendly-haibt-bebf56.netlify.app/signin
Регистрация     https://friendly-haibt-bebf56.netlify.app/signup
Чаты            https://friendly-haibt-bebf56.netlify.app/chats
Профиль         https://friendly-haibt-bebf56.netlify.app/profile          

Страница 404    https://friendly-haibt-bebf56.netlify.app/any (появляется по любой непредусмотренной ссылке например)
Страница 500    https://friendly-haibt-bebf56.netlify.app/?path=changepsw

Шаблонизатор подключен в src/core.js. Там представлен класс CompClass, который является родителем классов для всех страниц. 
CompClass автоматически подключает шаблон, шаблонизирует и парсит в html. 
Также он подключает все элементы HTML с id, начинающиеся с app-, к объекту для удобной навигации.

Postcss подключен к проекту (вместе с плагином autoprefixer). Modules (Postcss) был отключен в виду того, что 
все имена классов в css уникальные и этот инструмент на данном этапе не нужен.   