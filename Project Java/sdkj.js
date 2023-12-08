// Get the container element for the products
const productsContainer = document.getElementById('products-container');

// Define an array of products
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Product 1 description goes here.'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Product 2 description goes here.'
  },
  // Add more products here
];

// Create a button for each product
products.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');
  
  const productName = document.createElement('h2');
  productName.textContent = product.name;
  productDiv.appendChild(productName);
  
  const productDescription = document.createElement('p');
  productDescription.textContent = product.description;
  productDiv.appendChild(productDescription);
  
  const detailsButton = document.createElement('button');
  detailsButton.classList.add('details-button');
  detailsButton.setAttribute('data-product-id', product.id);
  detailsButton.textContent = 'Details';
  productDiv.appendChild(detailsButton);
  
  productsContainer.appendChild(productDiv);
});

// Add event listener to each product button
productsContainer.addEventListener('click', e => {
  if (e.target.classList.contains('details-button')) {
    const productId = e.target.getAttribute('data-product-id');
    navigateToProductDetailsPage(productId);
  }
});

// Function to navigate to the product details page
function navigateToProductDetailsPage(productId) {
  // Construct the URL for the product details page, with the product ID as a query parameter
  const url = `product-details.html?id=${productId}`;
  
  // Navigate to the product details page
  window.location.href = url;
}



// Get the container element for the product details
const productDetailsContainer = document.getElementById('product-details-container');

// Get the product ID from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Fetch the product details from the server
fetch(`/api/products/${productId}`)
  .then(response => response.json())
  .then(product => {
    // Create elements to display the product details
    const productName = document.createElement('h2');
    productName.textContent = product.name;
    
    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;
    
    // Append the elements to the container
    productDetailsContainer.appendChild(productName);
    productDetailsContainer.appendChild(productDescription);
  })
  .catch(error => console.error(error));
