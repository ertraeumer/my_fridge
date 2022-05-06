const addProductForm = document.querySelector('#form');
const listOfProducts = document.querySelector('#list');

if (addProductForm) {
  addProductForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const productName = event.target.description.value;
    const category = event.target.category.value;
    const expires = event.target.expirationDate.value.split('.').reverse().join('-');
    const source = event.target.source.value;

    const response = await fetch('/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productName, category, expires, source }),
    });
    const result = await response.json();

    const newDiv = document.createElement('div');
    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newImg = document.createElement('img');
    newImg.src = `${result.newProduct.source}`;
    newLi.classList.add('list-group-item');
    newSpan.innerText = `${result.newProduct.productName}`;
    newDiv.appendChild(newLi);
    newLi.appendChild(newSpan);
    newLi.appendChild(newImg);
    listOfProducts.appendChild(newDiv);
  });
}
