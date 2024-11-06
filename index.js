const arr = ["img/k2.jfif", "img/k4.jfif", "img/k5.jfif", "img/k3.jpg"];
let changer = 0;
let image = document.getElementById("image1");
let cartPrice = 0;
let cartamount = 0;
const button1 = document.getElementById("but4");
// when document dom content is loaded this fires and gets every single href element than loops through link object element and listens to event click
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
// this just listens to the animation iterationt and fires every single iteration to change image to other from defined array arr
image.addEventListener("animationiteration", () => {
  image.src = arr[changer];
  if (changer === 3) {
    changer = -1;
  }
  changer += 1;
});

function addToCart(index) {
  // simple function fires when click on button and changes inner html of cart items and adds price in forms elemnt
  const cart = document.getElementById("cartamount");
  const prices = document.getElementsByClassName("price");
  const price = prices[index].innerHTML[0] + prices[index].innerHTML[1];

  const intPrice = parseInt(price, 10);
  cartPrice += intPrice;
  cartamount += 1;
  document.getElementById("amount").innerHTML = cartPrice;
  cart.innerHTML = cartamount;
}

//--------------------------
let appendStr = "";
function checkOut() {
  // every single element within ord and name fieldnumber should be filled if its filled carprice and cart amount rresets
  if (
    document.forms["ord"].field1.value === "" ||
    document.forms["ord"].field2.value === "" ||
    document.forms["ord"].field3.value === "" ||
    document.forms["ord"].field4.value === "" ||
    document.forms["ord"].field5.value === "" ||
    document.forms["ord"].field6.value === "" ||
    document.forms["ord"].field7.value === "" ||
    document.forms["ord"].field8.value === "" ||
    cartPrice === 0
  ) {
    alert("Fill Out Every Field Or Buy Something");
  } else {
    if (
      document.forms["ord"].promofield.value === appendStr &&
      cartPrice != 0
    ) {
      alert(
        `You Ordered with discount ${cartamount} Items For ${cartPrice - 10}GEL`
      );
      document.forms["ord"].promofield.value = "";
      const cart = document.getElementById("cartamount");
      cartPrice = 0;
      cartamount = 0;
      document.getElementById("amount").innerHTML = cartPrice;
      cart.innerHTML = cartamount;
    } else {
      alert(`You Ordered ${cartamount} Items For ${cartPrice}GEL`);
      const cart = document.getElementById("cartamount");
      cartPrice = 0;
      cartamount = 0;
      document.getElementById("amount").innerHTML = cartPrice;
      cart.innerHTML = cartamount;
    }
  }
}

function clearCart() {
  const amountSpan = document.getElementById("cartamount");
  const priceSpan = document.getElementById("amount");

  cartamount = 0;
  cartPrice = 0;

  amountSpan.innerHTML = cartamount;
  priceSpan.innerHTML = cartPrice;
}

const promo = document.getElementById("promo-code-text");
something();

function something() {
  // very simple timer with promo code change

  let count = 600;
  // 600 = 10 minutes
  const timer = document.getElementById("promo-timer");
  // set interval function will fire every 1000ms and substract and plus the string
  setInterval(() => {
    if (count > 0) {
      count--;
      let time = "";
      countMinutes = Math.floor(count / 60);
      countSeconds = Math.floor(count % 60);
      time += countMinutes.toString() + ":";
      if (countSeconds >= 0 && countSeconds <= 9) {
        time += "0" + countSeconds.toString();
      } else {
        time += countSeconds.toString();
      }
      timer.innerHTML = time;
    }
  }, 1000);
  appendStr = "";
  // this is to asign ascii value to character as 0 to then randomly generate string with numbers and characters
  const character = "A".charCodeAt(0);

  for (let i = 0; i < 16; i++) {
    if (i % 4 == 0 && i != 0) {
      appendStr += "-";
    }
    let choice = Math.floor(Math.random() * 2);
    if (choice == 1) {
      let numCode = Math.floor(Math.random() * 10);
      appendStr += numCode.toString();
    } else {
      let charCode = Math.floor(Math.random() * 26);
      appendStr += String.fromCharCode(character + charCode);
    }
  }
  promo.innerHTML = appendStr;
  setTimeout(() => {
    something();
  }, 600000);
}

function passChecker() {
  if (
    document.forms["register-forms"].pass1.value ===
    document.forms["register-forms"].pass2.value
  ) {
    console.log("ok");
    return true;
  } else {
    var regForm = document.getElementById("reg-form");
    addEventListener("submit", (e) => {
      e.preventDefault();
    });
    alert("Passwords don't match");
  }
}
