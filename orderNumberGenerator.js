const categories = {
    'SEO': ['SEO', 'Трафик', 'Статистика и аналитика'],
    'Разработка и IT': ['Серверы и хостинг', 'Игры', 'Мобильные приложения', 'Скрипты и боты', 'Десктоп программирование', 'Верстка', 'Доработка и настройка сайтов', 'Создание сайтов'],
    'Дизайн': ['Промышленный дизайн', 'Наружная реклама', 'Полиграфия', 'Интерьер и экстерьер', 'Маркетплейсы и соцсети', 'Веб и мобильный дизайн', 'Арт и иллюстрации', 'Презентации', 'Инфографика', 'Логотипы и брендинг'],
    'Видео и аудио': ['Аудиозапись и озвучка', 'Музыка и песни', 'Редактирование аудио', 'Интро', 'Анимация логотипа', 'Видеоролики'],
    'СММ и реклама': ['Контекстная реклама', 'Соцсети и СММ', 'Базы данных и клиентов', 'Рассылки', 'Маркетплейсы и доски объявлений', 'Реклама и PR'],
    'Бизнес': ['Стройка и ремонт', 'Обучение и консалтинг', 'HR-поддержка', 'Юридическая помощь', 'Обзвоны и продажи', 'Бухгалтерия и налоги', 'Персональный помощник'],
    'Тексты и переводы': ['Рефераты и конспекты', 'Продающие тексты', 'Резюме и вакансии', 'Набор текста', 'Переводы', 'Тексты и наполнение сайта']
};

// Генерация случайного 9-значного номера
function generateRandomNumber(length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1)));
}

// Основная функция генерации номера заказа
function generateOrderNumber(categoryName) {
    const subcategories = categories[categoryName];
    
    if (!subcategories) {
        throw new Error(`Категория "${categoryName}" не найдена`);
    }

    const randomSubcategory = subcategories[Math.floor(Math.random() * subcategories.length)];
    const subcategoryCode = randomSubcategory.slice(0, 3).toLowerCase();
    const randomNumber = generateRandomNumber(9);

    return `${categoryName.toLowerCase()}-${randomNumber}${subcategoryCode}`;
}

// Пример использования
try {
    const orderNumber = generateOrderNumber('Дизайн');
    console.log(orderNumber);
} catch (error) {
    console.error(error.message);
}

module.exports = {
    generateOrderNumber
};
