const products = [
  {
    id: 1,
    name: "Vanilla",
    discount: "10%",
    originalPrice: 230,
    price: 200,
    discription:
      "Creamy and rich vanilla flavor, made with the finest ingredients",
    image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    id: 2,
    name: "Chocolate",
    discount: "5%",
    originalPrice: 180,
    price: 150,
    discription:
      "Decadent and smooth chocolate ice cream that melts in your mouth",
    image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    id: 3,
    name: "Strawberry",
    discount: "15%",
    originalPrice: 250,
    price: 210,
    discription: "Fresh and fruity strawberry ice cream made with real berries",
    image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    id: 4,
    name: "Mint Choco Chips",
    discount: "20%",
    originalPrice: 300,
    price: 240,
    discription: "Cool mint ice cream with rich chocolate chips throughout",
    image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    id: 5,
    name: "Butter Peacan",
    discount: "10%",
    originalPrice: 280,
    price: 250,
    discription: "Creamy butter pecan ice cream with crunchy pecan pieces",
    image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    id: 6,
    name: "Rock Road",
    discount: "15%",
    originalPrice: 220,
    price: 190,
    discription: "Chocolate ice cream with marshmallows and nuts mixed in",
    image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    id: 7,
    name: "Mango Sorbet",
    discount: "5%",
    originalPrice: 200,
    price: 180,
    discription: "Refreshing mango sorbet made with ripe, juicy mangoes",
    image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    id: 8,
    name: "Cookie Dough",
    discount: "10%",
    originalPrice: 320,
    price: 290,
    discription: "Vanilla ice cream loaded with chunks of cookie dough",
    image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
  {
    id: 9,
    name: "Pistachio Ice Cream",
    discount: "15%",
    originalPrice: 270,
    price: 240,
    discription: "Nutty pistachio ice cream with real pistachio pieces",
    image: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  },
];
const productsElement = document.getElementById("products");
function createAndAppendElement(
  tagName,
  attributes = {},
  content = " ",
  parentSelector = "body"
) {
  const element = document.createElement(tagName);
  for (const [key, value] of Object.entries(attributes)) {
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
    "#products"
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

const enquiryForm = document.getElementById("enquiryForm");
enquiryForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("submit button clicked");
  let isValid = true;
  let errorMessages = [];
  
  // Clear previous error messages
  document.getElementById("errorMessages").innerHTML = '';
  const firstName = event.target.elements.firstName.value.trim();
  const lastName = event.target.elements.lastName.value.trim();
  const mobile = event.target.elements.mobile.value.trim();
  const email = event.target.elements.email.value.trim();
  const icecreamProducts = event.target.elements.icecreamProducts.value.trim();
  const enquiryMessage = event.target.elements.enquiryMessage.value.trim();
  console.log(
    `First Name: ${firstName}, 
      Last Name: ${lastName}, 
      Mobile: ${mobile},
      Email: ${email},
      Ice Cream Products: ${icecreamProducts}, 
      Enquiry Message: ${enquiryMessage}`
  );
  // First Name validation
  if (firstName.length < 2) {
    isValid = false;
    errorMessages.push("First Name must be at least 2 characters long");
  }
  if (firstName.length > 20) {
    isValid = false;
    errorMessages.push("First Name must be at most 20 characters long");
  }
  // Last Name validation
  if (lastName.length < 2) {
    isValid = false;
    errorMessages.push("Last Name must be at least 2 characters long");
  }
  if (lastName.length > 20) {
    isValid = false;
    errorMessages.push("Last Name must be at most 20 characters long");
  }
  // Mobile validation (Indian mobile number format)
  const mobilePattern = /^[6-9]\d{9}$/;
  if (!mobilePattern.test(mobile)) {
    isValid = false;
    errorMessages.push("Mobile number must be a valid 10-digit number");
  }
  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    isValid = false;
    errorMessages.push("Email must be a valid email address");
  }
  // Ice Cream Products validation
  const icecreamProductsOption = [
    "Vanilla Ice Cream",
    "Chocolate Ice Cream",
    "Strawberry Ice Cream",
    "Mint Chocolate Chip",
    "Butter Pecan",
    "Rocky Road",
    "Mango Sorbet",
    "Cookie Dough",
    "Pistachio Ice Cream"
  ];
  if (!icecreamProductsOption.includes(icecreamProducts)) {
    isValid = false;
    errorMessages.push("Please select a valid ice cream product");
  }
  // Enquiry Message validation
  if (enquiryMessage.length < 10) {
    isValid = false;
    errorMessages.push("Enquiry Message must be at least 10 characters long");
  }
  if (enquiryMessage.length > 1024) {
    isValid = false;
    errorMessages.push("Enquiry Message must be at most 1024 characters long");
  }
  // If form is invalid, show error messages
  if (!isValid) {
    errorMessages.forEach((message) => {
      createAndAppendElement("div", 
        { class: "alert alert-danger", role: "alert" }, 
        message, "#errorMessage");
    });
  } else {
    // If form is valid, submit it and reset the form
    fetch(`https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZkMDYzNzA0MzE1MjY5NTUzNDUxMzci_pc`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      mobile,
      email,
      icecreamProducts,
      enquiryMessage,
    }),
  }).then((response) => {
    if (response.ok) {
      console.log("Form submitted successfully");
    } else {
      console.error("Form submission failed");
    }
  });
    //enquiryForm.reset();
  }
});


