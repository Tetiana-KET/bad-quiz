## Інструкція з запуску програми

1. Встановлення Node.js:

Для того, щоб ваша програма працювала, на комп'ютері повинна бути встановлена `Node.js`. Якщо вона ще не встановлена, завантажте її з офіційного сайту:
[Node.js](https://nodejs.org/)

Після встановлення `Node.js` перевірте, чи встановлений він правильно, використовуючи наступні команди в терміналі:

```
node -v
npm -v
```

Це виведе версії Node.js та npm (менеджер пакетів).

2. Отримання та налаштування проекту:

- Клонувати репозиторій програми можна за допомогою Git або завантажити архів з проектом.

Якщо ви використовуєте Git, виконайте наступну команду:

```
git clone git@github.com:Tetiana-KET/bad-quiz.git
```

- Перейдіть до папки вашого проекту:

```
cd bad-quiz
```

3. Встановлення залежностей:

У кореневій директорії проекту виконайте наступну команду для встановлення всіх необхідних бібліотек та залежностей:

```
npm install
```

4. Налаштування вхідних даних:

Програма очікує, що вхідні дані будуть знаходитися в файлі source.txt в кореневій директорії проекту.
Якщо ви хочете змінити вхідні дані, просто замініть вміст цього файлу або передайте ім'я файлу через функцію в програмі:

У файлі app.js:

```
export default async function app() {
const puzzles = await readFile('source.txt'); // Тут можна змінити ім'я файлу
buildSequence(puzzles);
}
```

5. Запуск програми:

Для запуску програми використовуйте команду:

```
npm start
```

Ця команда виконає програму, що прочитає файл source.txt, розбудує послідовність і виведе результат у консоль.

### Зміна вхідних даних:

Якщо ви хочете працювати з іншими даними, ви можете змінити вміст файлу source.txt, або передати інший файл, змінивши відповідну частину коду, як було показано вище.

### Перевірка результату:

Після запуску програми ви побачите у консолі побудовану послідовність і список використаних фрагментів. Для запропонованого файлу рышення -   359855139425170794369391735564820640833617

## Задача

Скласти найбільший однорядний цифровий пазл, де елементами з'єднання будуть перші або останні ДВІ цифри.
Його фрагменти можуть розміщуватись тільки слідуючи один за одним.

Наприклад, маємо такі рядки із числами:

608017, 248460, 962282, 994725, 177092

Рішення:

Аналізуючи кінцеві частини, можна скласти такий ланцюжок:

248460 & 608017 & 177092 -> 2484(60)80(17)7092

Таким чином найбільша послідовність і відповідь буде: 24846080177092

Текстовий файл має 142 фрагменти, що повинні складатися тільки із цифр!
Визначте найбільшу (найдовшу) послідовність для цих фрагментів.
