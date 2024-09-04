const products = [  
  {
      id: 1,
      name: 'Vanilla',
      discount:'10%',
      originalPrice:230,
      price: 200,
      discription: 'Creamy and rich vanilla flavor, made with the finest ingredients',
      image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  },
  {
      id: 2,
      name: 'Chocolate',
      discount:'5%',
      originalPrice:180,
      price: 150,
      discription: 'Decadent and smooth chocolate ice cream that melts in your mouth',
      image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  },
  {
      id: 3,
      name: 'Strawberry',
      discount:'15%',
      originalPrice:250,
      price: 210,
      discription: 'Fresh and fruity strawberry ice cream made with real berries',
      image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  },
  {
      id: 4,
      name: 'Mint Choco Chips',
      discount:'20%',
      originalPrice:300,
      price: 240,
      discription: 'Cool mint ice cream with rich chocolate chips throughout',
      image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  },
  {
      id: 5,
      name: 'Butter Peacan',
      discount:'10%',
      originalPrice:280,
      price: 250,
      discription: 'Creamy butter pecan ice cream with crunchy pecan pieces',
      image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  },
  {
      id: 6,
      name: 'Rock Road',
      discount:'15%',
      originalPrice:220,
      price: 190,
      discription: 'Chocolate ice cream with marshmallows and nuts mixed in',
      image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  },
  {
      id: 7,
      name: 'Mango Sorbet',
      discount:'5%',
      originalPrice:200,
      price: 180,
      discription: 'Refreshing mango sorbet made with ripe, juicy mangoes',
      image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  },
  {
      id: 8,
      name: 'Cookie Dough',
      discount:'10%',
      originalPrice:320,
      price: 290,
      discription: 'Vanilla ice cream loaded with chunks of cookie dough',
      image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  },
  {
      id: 9,
      name: 'Pistachio Ice Cream',
      discount:'15%',
      originalPrice:270,
      price: 240,
      discription: 'Nutty pistachio ice cream with real pistachio pieces',
      image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  }
];
const productsElement=document.getElementById('products');
function createAndAppendElement(
  tagName,
  attributes = {},
  content = " ",
  parentSelector = "body"
)
{
  const element = document.createElement(tagName);
  for (const [key , value] of Object.entries(attributes))
  {
    element.setAttribute(key, value);
  }
  element.innerHTML = content;
  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(element);
}
products.forEach((product) => {
  // Create product container
  const productContainer = createAndAppendElement(
    "div",
    { class: "col-md-4 mb-4" },
    " ",
    '#products'
  );
  
  // Create card
  const card = createAndAppendElement(
    "div",
    { class: "card h-100", id: `product-${product.id}` },
    " ",
    `#products > .col-md-4:last-child`
  );

  // Add product image
  createAndAppendElement(
    "img",
    { class: "card-img-top", src: product.image, alt: product.name },
    " ",
    `#product-${product.id}`
  );

  // Add card body
  const cardBody = createAndAppendElement(
    "div",
    { class: "card-body" },
    " ",
    `#product-${product.id}`
  );

  // Add product name
  createAndAppendElement(
    "h5",
    { class: "card-title" },
    product.name,
    `#product-${product.id} > .card-body`
  );

  // Add product description
  createAndAppendElement(
    "p",
    { class: "card-text" },
    product.discription,
    `#product-${product.id} > .card-body`
  );

  // Add discount
  createAndAppendElement(
    "p",
    { class: "card-text" },
    `Discount: ${product.discount}`,
    `#product-${product.id} > .card-body`
  );

  // Add original price
  createAndAppendElement(
    "p",
    { class: "card-text" },
    `Original Price: <s>$${product.originalPrice}</s>`,
    `#product-${product.id} > .card-body`
  );

  // Add final price
  createAndAppendElement(
    "p",
    { class: "card-text" },
    `Price: $${product.price}`,
    `#product-${product.id} > .card-body`
  );

  // Add button group
  const buttonGroup = createAndAppendElement(
    "div",
    { class: `d-flex buttongroup-${product.id} justify-content-end gap-3` },
    "",
    `#product-${product.id} > .card-body`
  );

  // Add view details button
  createAndAppendElement(
    "a",
    { class: "btn btn-primary", href: "#" },
    "View Details",
    `#product-${product.id} .buttongroup-${product.id}`
  );

  // Add add to cart button
  createAndAppendElement(
    "a",
    { class: "btn btn-info", href: "#" },
    "Add to Cart",
    `#product-${product.id} .buttongroup-${product.id}`
  );
});
