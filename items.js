const = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 200 },
    { id: 4, name: 'Product 4', price: 200 },
]

const productsContainer = document.getElementById('main');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product'); // Добавьте класс для стилизации

    // Заполняем блок данными
    productDiv.innerHTML = `
        <img src="https://avatars.githubusercontent.com/u/51032358?v=4">
        <h3>${product.name}</h3>
        <p>Цена: ${product.price} руб.</p>
    `;

    // Добавляем блок в контейнер
    productsContainer.appendChild(productDiv);
});