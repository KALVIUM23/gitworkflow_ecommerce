// script.js
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.product-card button');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.parentElement.querySelector('h3').textContent;
      alert(`${productName} added to cart!`);
    });
  });
});