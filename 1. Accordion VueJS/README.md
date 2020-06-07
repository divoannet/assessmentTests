```
Необходимо реализовать компонент “Accordion” на основе VueJS фреймворка
   
Пример можно посмотреть тут: https://jqueryui.com/accordion/
   
Что важно:
   
- должна быть реализована анимация переключения между вкладками
- контент во вкладки должен подгружаться асинхронно (запрос на получение контента происходит при активации вкладки)
- в качестве клиента к API может выступать setTimeout со статичным контентом, интерфейс взаимодействия - Promise

п.с. дизайнерская составляющая не так важна, верстка может быть максимально простая
```

```npm i```

```npm run serve```

```http://localhost:8000```

**Warning!!!** Для запуска приложения с локального окружения необходимо запустить браузер в режиме `--disable-web-security` для работы с CORS. 