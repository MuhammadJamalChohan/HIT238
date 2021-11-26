let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Classic Burger',
        tag: 'classicburger',
        price: 8,
        inCart: 0
    },
    {
        name: 'Spaghetti Bolognese',
        tag: 'spaghettibolognese',
        price: 8,
        inCart: 0
    },
    {
        name: 'CLassic Chips',
        tag: 'classicchips',
        price: 4,
        inCart: 0
    },
    {
        name: 'Greek Salad',
        tag: 'greeksalad',
        price: 3,
        inCart: 0
    },
    {
        name: 'Ice Tea',
        tag: 'icetea',
        price: 3,
        inCart: 0
    }
]

//This will add prodcut and its count number to the cartCount.
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () =>{
        cartCounts(products[i]);
        totalCost(products[i]);
    })
}


//If the page refresh cart number remains with this function
function onLoadCartCount() {
    let productNumbers = localStorage.getItem('cartCounts');

    if (productNumbers)
    {
        document.querySelector('.cart span').textContent = productNumbers; //if cart count is present it will be shown at cart count.
    }
}


function cartCounts(product, action) {


    let productNumbers = localStorage.getItem('cartCounts');

    //convert the 1 string into number
    productNumbers = parseInt(productNumbers); //converting string count into numbers using parse.

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (action == 'decrease') { //it will decrease the cart number
        localStorage.setItem('cartCounts', productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
    } else if (productNumbers) { //increase the cart number
        localStorage.setItem("cartCounts", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else { //if we are not clicking and just loading the page
        localStorage.setItem('cartCounts', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(product);
}

//Function to add products in the local storage on browser
function setItems(product)
{
    // console.log('my cart items are ', product);

    //To stop the items overwritten in the local storage
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems); //making it a javaScript item.
    // console.log('my cart items are ', product);


    //adding the products in cart using its tag
    if(cartItems != null) { //not clicking the first time

        //It will add the product if the product clicked was not the same as before
        if( cartItems[product.tag] == undefined)
        {
            cartItems = {
                ...cartItems, //whatever is already in the cart
                [product.tag]: product
            }
        }


        cartItems[product.tag].inCart += 1;
    } else { //if clicking first time
        product.inCart = 1;
        cartItems = {
        [product.tag]: product
        }

    }

    //passing the products in cart to localStorage as JSON object
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

//Adding the total cost for the cart
function totalCost (product, action) {
    //console.log("price is", product.price);

    let cartCost = localStorage.getItem('totalCost');
    //console.log("cart cost is", cartCost);

    if (action == 'decrease') {
        cartCost = parseInt(cartCost);

        //If decreasing product in cart it will decrease the totalCost accordingly
        localStorage.setItem('totalCost', cartCost - product.price)
    }
    else if(cartCost != null) {
        //Adding the price of the product to the total. //if products are already there
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        //adding the cost of the first product
        localStorage.setItem("totalCost", product.price);
    }
}

// Every time tge page is refreshen this function will be called to refresh the cartCounts.
onLoadCartCount();

//For cart page ..............


function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    // console.log("cart items are",cartItems);

    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost.length < 1 || cartCost == 0) {
        $(".buy-btn").css('display','none');
    }

    if (cartItems && productContainer) {

        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle"></ion-icon>
                <img src="./images/menu/${item.tag}.jpg" width="40" height"50">
                <span class="productFonts">${item.name}</span>
            </div>
            <div class="price">$${item.price}.00</div>
            <div class="quantity">
                <ion-icon class = "decrease"
                name="caret-back"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class = "increase"
                name="caret-forward"></ion-icon>
            </div>
            <div class = "total">
                $${item.inCart * item.price}.00
            </div>
            `
        });


        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class=basketTotalTitle">
                Basket Total&nbsp;
            </h4>
            <h4 class = "basketTotal">
            $${cartCost}.00
            </h4>
        </div>
            `
        // used npbsp to add space after basket total
    }

    //it will delete the clicked button
    deleteButtons();
    manageQuantity();
}


displayCart();


function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.product ion-icon');
    let productName;
    let productNumbers = localStorage.getItem('cartCounts');
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');
    console.log(cartItems);



    //looping through all the buttons to delete
    for(let i =0; i<deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement
            .textContent.trim().toLowerCase().replace(/ /g, ''); //converting name to tag
            // console.log(productName);
            // console.log(cartItems[productName].name + " " + cartItems[productName].inCart);

            //Setting cart number equal to product numbers
            localStorage.setItem('cartCounts', productNumbers - cartItems[productName].inCart);

            //Taking care of total cost
            localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart));

            //
            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartCount();
        });

    }

}

function manageQuantity() {

    //Grabbing all the buttons of increase and decrease
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');

    let currentProduct = "";
    let currentQuantity =0;
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    //looking through all the button and add them to event listeners
    for (let i=0; i < decreaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);

            // catching the product and converting the name to tag
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct);
            if (cartItems[currentProduct].inCart > 1) {
                cartItems[currentProduct].inCart -= 1;
                cartCounts (cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease")
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }

        });
    }

    //looking through all the button and add them to event listeners
    for (let i=0; i < increaseButtons.length; i++) {
        increaseButtons[i].addEventListener('click', () => {
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);

            // catching the product and converting the name to tag
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent.toLowerCase().replace(/ /g, '').trim();
            console.log(currentProduct);


                cartItems[currentProduct].inCart += 1;
                cartCounts (cartItems[currentProduct], "increase");
                totalCost(cartItems[currentProduct]);

                //Updating the local storage
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();

        })
    }
}