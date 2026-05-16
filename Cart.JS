// 1. Инициализируем массив для хранения данных
let clickData = [];

// 2. Функция загрузки данных из localStorage при открытии страницы
function loadClickData() {
  const saved = localStorage.getItem('clickData');
  if (saved) {
    clickData = JSON.parse(saved);
  }
}

// 3. Функция сохранения данных в localStorage
function saveClickData() {
  localStorage.setItem('clickData', JSON.stringify(clickData));
}

// 4. Находим все кнопки с классом .buttonCart
const numberCart = document.querySelectorAll('.buttonCart');

// 5. Для каждой кнопки добавляем обработчик клика
numberCart.forEach(element => {
  element.addEventListener('click', function(event) {
    // 6. Собираем данные о товаре (предполагаем структуру HTML)
    const productCard = this.closest('.product'); // родительский контейнер товара
    const name = productCard.querySelector('.product-name').textContent;
    const priceText = productCard.querySelector('.price').textContent;

    // Очищаем цену от лишних символов (₽, пробелы и т. д.)
    const price = parseFloat(priceText.replace(/[^\d.,]/g, '').replace(',', '.'));

    // 7. Создаём объект с данными о нажатии
    const clickInfo = {
      name: name,
      price: price
    };

    // 8. Добавляем объект в массив
    clickData.push(clickInfo);


    saveClickData();


    console.log('Товар добавлен в корзину:', clickInfo);
    console.log('Текущий массив clickData:', clickData);
  });
});


loadClickData();
