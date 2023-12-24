let cart = [];

function addToCart(productItme, price) {
    const itemList = { name: productItme, price: price };
    cart.push(itemList);
    updateCart();
}

addToCart();

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    const totalPrice = document.getElementById("total");
    let total = 0;

    cart.forEach((item) => {
        if (item.price !== undefined) {
            const li = document.createElement("li");
            li.textContent = `${item.name} $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += item.price;
        }
    });

    totalPrice.innerText = `Total = $${total.toFixed(2)}`;
}

function checkout() {
    cart = [];
    updateCart();
    popupClose();
}

function popupClose() {
    const closeBtn = document.querySelector(".closeBtn");
    const popup = document.querySelector(".popup");
    const close = document.querySelector(".close");
    closeBtn.addEventListener("click", function () {
        popup.style.display = "block";
        popup.style.marginTop = "-300px"
    })
    close.addEventListener("click", function () {
        popup.style.display = "none";
    });
}

const form = document.querySelector("form");
const formContainer = document.querySelector(".form-container");
const main = document.querySelector("main");
let userName = "ram";
let userPass = "sanjay"
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.querySelector(".user").value;
    const password = document.querySelector(".password").value;
    const usernameSpan = document.querySelector(".usererror");
    const passwordSpan = document.querySelector(".passerror");
    let usernameErrorShown = false;
    if (username === "" && username.length <= 1) {
        usernameSpan.innerText = "Plese enter vaild username";
        usernameSpan.style.color = "red";
        usernameErrorShown = true;
        return;
    }else if(username !== userName){
        usernameSpan.innerText = "invaild username";
        usernameSpan.style.color = "red";
        usernameErrorShown = true;
        return;
    }else {
        usernameSpan.style.display = "none";
    }

    if (password === "" && password.length <= 1) {
        passwordSpan.innerText = "Plese enter vaild password";
        passwordSpan.style.color = "red";
        
    }else if(password !== userPass){
        passwordSpan.innerText = "invaild password";
        passwordSpan.style.color = 'red';
    } else {
        passwordSpan.style.display = "none";
    }
    if(username === userName && password === userPass){
        main.style.display = "block";
        formContainer.style.display = "none"
    }

});
const optdata = document.querySelector(".opt");
let opt = "";

function optGenretor() {
     for (let i = 0; i < 4; i++) {
        opt += Math.floor(Math.random()*10); 
     }
    return opt;
}

const data = optGenretor();
setTimeout(()=>{
    optdata.innerText = `Enter opt ${data}` ;
},5000)

// let cart = [];

// function addToCart(productName, price) {
//     const item = { name: productName, price: price };
//     cart.push(item);
//     updateCart();
// }
// function updateCart() {
//     const cartItemsElement = document.getElementById('cart-items');
//     const totalElement = document.getElementById('total');
//     cartItemsElement.innerHTML = '';
//     let total = 0;
//     cart.forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
//         cartItemsElement.appendChild(li);
//         total += item.price;
//     });

//     totalElement.textContent = `Total: $${total.toFixed(2)}`;
// }

// function checkout() {
//     alert('Thank you for your purchase!');
//     cart = [];
//     updateCart();
// }
