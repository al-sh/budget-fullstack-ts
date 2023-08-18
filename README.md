# "Мой бюджет"

Уже залито в Яндекс.Облако, но пока еще весь функционал из MVP не реализован
Обзавёлся доменными именами - alsh.tech и alsh.fun

## Список изменений

<details>

<summary>Список изменений</summary>

### Версия 0.2.40 (2023.08.17)

Апдейт вёрстки общего враппера и ответа по синхронизации

### Версия 0.2.39 (2023.08.08)

Добавлена dev и prod сборка на vite (CRA пока не стал выпиливать)

### Версия 0.2.38 (2023.08.08)

Добавлен gh-pages

### Версия 0.2.37 (2023.05.04)

Добавлен и типизирован вывод статистики по сохранению из стораджа

### Версия 0.2.36 (2023.04.26)

Добавлена возможность указывать сумму через запятую

### Версия 0.2.35 (2023.01.24)

Доработка логики удаления категорий

### Версия 0.2.34 (2023.01.24)

Оффлайн-работа через localStorage

### Версия 0.2.33 (2023.01.16)

Добавлены докерфайлы и скрипты создания и запуска контейнеров

### Версия 0.2.32 (2022.12.12)

Добавлены даты по умолчанию и фикс расчета остатка на экране счета

### Версия 0.2.31 (2022.12.12)

Доработка расчетов для графика статистики по родительской категории

### Версия 0.2.30 (2022.12.12)

Доработка визуала графика

### Версия 0.2.29 (2022.12.12)

Добавлен линейный график в статистику

### Версия 0.2.28 (2022.12.09)

Ограничение числа транзакций на главной странице

### Версия 0.2.27 (2022.12.06)

Отображение данных по месяцам

### Версия 0.2.26 (2022.12.06)

Показ числа установленных фильтров у иконки

### Версия 0.2.25 (2022.11.23)

Статистика. Доработка заголовка

### Версия 0.2.24 (2022.11.21)

Фиксы и рефакторинг вёрстки

### Версия 0.2.23 (2022.11.16)

Обновлен дизайн страницы транзакций и меню

### Версия 0.2.22 (2022.11.16)

Добавлены шрифты по дизайну

### Версия 0.2.21 (2022.11.15)

Новый дизайн заголовка страницы с транзакциями

### Версия 0.2.20 (2022.11.08)

Фикс ошибки аутентификации и фикс импорта/экспорта транзакций

### Версия 0.2.19 (2022.11.07)

Доработка синронизации значений фильтров транзакций и URL

### Версия 0.2.18 (2022.11.02)

Исправлено отображение переводов между своими счетами

### Версия 0.2.17 (2022.10.31)

Исправлено отображение остатков по счетам

### Версия 0.2.16 (2022.10.31)

Фикс подсчета возвратов - добавление типа к транзакции

### Версия 0.2.15 (2022.10.28)

Возврат на предыдущую страницу после действия с транзакцией

### Версия 0.2.14 (2022.10.28)

Общая сумма для статистики за период

### Версия 0.2.13 (2022.10.27)

Сохранение значений фильтров транзакций и перенос этого в URL, исправление редактирования транзакций

### Версия 0.2.12 (2022.10.27)

Исправление фильтра статистики по категориям и отображения остатка по счету

### Версия 0.2.11 (2022.10.26)

Переход на хранение копееек, функция "создать еще" для транзакций

### Версия 0.2.10 (2022.10.26)

Автопроставление порядка при создании категории

### Версия 0.2.9 (2022.10.25)

Порядок отображения категорий (с ручной простановкой значения)

### Версия 0.2.8 (2022.10.20)

Общие метод экспорта и импорта

### Версия 0.2.7 (2022.10.17)

Отображение в статистике по дочерним категориям отдельных трат по родительской категории (общ)

### Версия 0.2.6 (2022.10.12)

Выгрузка/загрузка счетов и транзакций

### Версия 0.2.5 (2022.10.10)

Рефакторинг роутов, добавление страницы синхронизации

### Версия 0.2.4 (2022.10.06)

Загрузка категорий из файла

### Версия 0.2.3 (2022.10.04)

Выгрузка категорий в файл

### Версия 0.2.2 (2022.09.27)

Переход на postgre

### Версия 0.2.1 (2022.09.27)

Фильтр по периодам на странице статистики

### Версия 0.2.0 (2022.08.25)

Страница со статистикой за весь период

### Версия 0.1.9 (2022.08.24)

Фильтр транзакций по датам

### Версия 0.1.8 (2022.08.19)

Доработка конфигов mysql для других серверов и доработка путей под проксирование

### Версия 0.1.6 (2022.08.18)

Фильтр транзакций по типам и категориям

### Версия 0.1.5 (2022.08.17)

Фильтр транзакций по счетам

### Версия 0.1.4 (2022.08.16)

Группировка транзакций по дням

### Версия 0.1.3 (2022.08.11)

Доработан роутинг для опциональной работы нескольких приложений на одном хосте
Добавлен mobx, интегрирован resizeService

</details>

## Реализованные возможности

### Безопасность

Авторизация по логину и паролю

### Главная страница

Cписок активных счетов и остатков по ним  
Последние транзакции

### Общее по интерфейсу

Переключение на тёмную тему

### Счета и Категории

Управление счетами и категориями  
Редактирование названия счета  
Отдельная страница счета  
Отображение текущего остатка по счету  
По умолчанию скрывать удалённые счета  
Удаление счета приравнено к деактивации  
Родительские категории  
Отображать иерархию в селекте категорий  
Отображать иерархию в списке категорий  
Удаление категорий  
Выбор иконки счета при создании/редактировании

### Транзакции

Группировка по дням  
Управление транзакциями  
Отображение времени и категории транзакции  
Переводы между своими счетами  
Многостраничность  
Указание даты транзакции  
Опционально не показывать возвраты расхода и переводы между своими в селекте типов  
Не давать создавать транзакции на неактивные счета  
Фильтры по датам, счетам, категориям и периоду

### Статистика

Страница со статистикой по категориям за весь период
Считать сумму по категории (отдельно дочерние)

## Планы

<details>
<summary>MVP</summary>

### Аналитика

График доходов/расходов за последний год
Возможность выбора периода на графиках

</details>

<details>
<summary>На перспективу</summary>

### Общее

Оффлайн-работа

### Бюджетирование

Создание и просмотр бюджета на выбранный период
Отображение исполнения бюджета в % по категориям

### Дизайн

Выбрать хороший DatePicker
Дизайн для мобильных устройств

### Счета и Категории

Управление порядком отображения счетов и категорий
Добавление транзакции со списка счетов с подстановкой счета
Получение и подстановка последнего использованного счета
Доработка алгоритма расчета остатков по счетам (добавление кэширования)

### Транзакции

Функционал тегов
Подгрузка новых транзакций по кнопке "Еще" (Infinite Queries?)
Optimistic update
Разные валюты

### Бюджетирование

Календарь платежей, напоминания о платежах

### Аналитика

Графики в различной динамике и разрезах

### Безопасность

Другие каналы авторизации (Google, VK и тд)

</details>
