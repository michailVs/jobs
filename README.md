# Проект - тестовое задание [JOBS](https://jobs.yourcodereview.com)
## Для начала работы, необходимо:
  - Открыть консоль
  - Выбрать папку в которую клонировать проект
  - Ввести в консоль `git clone ссылка на проект`
  - Перейти в проект через `cd папка проекта` и ввести команду `npm run preview`
  - По завершению скачивания всех зависимостией проект запустится на `localhost:5173`

## Так же для работы запросов необходимо перейти в `unknownAPI.ts`, раскоментировать:
```js
  const req = await fetch('APIUrl')
  const data = await req.json()
  return data
```
и в `await fetch('APIUrl')` указать API url