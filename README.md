# "Мой бюджет"

Уже залито в Яндекс.Облако, но пока еще весь функционал из MVP не реализован
Обзавёлся доменными именами - alsh.tech и alsh.fun

## Список изменений

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

## Реализованные возможности

### Безопасность

Авторизация по логину и паролю

### Главная страница

Выводить список активных счетов и остатков по ним
Выводить несколько последних транзакций

### Общее по интерфейсу

Переключение на тёмную тему

### Счета и Категории

Управление счетами
Управление категориями
Редактирование названия счета
Отдельная страница счета
Отображение текущего остатка по счету
По умолчанию скрывать удалённые счета
Удаление счета приравнено к деактивации
Родительские категории
Отображать иерархию в селекте категорий
Отображать иерархию в списке категорий
Удаление категорий
Типизация запросов категорий (фронт и бэк)
Категории разделить на 2 таба - расходы и доходы
Тестовые иконки счетов
Добавить разные иконки счетов
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
Фильтр по датам (без передачи параметров)
Фильтр по счетам
Фильтр по категориям, периоду

### Статистика

Страница со статистикой по категориям за весь период

## Планы (MVP)

### Транзакции

Считать сумму по категории (отдельно дочерние)
Отображение остатка после каждой транзакции (до и после)

### Аналитика

График доходов/расходов за последний год
Возможность выбора периода на графиках
Выбор категорий на графике

### Безопасность

Добавить проверки по принадлежности счета

## Планы (Следующий этап)

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
