$(document).ready(function() {
    var slideIndex = 1;
    showSlides(slideIndex);

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function prevSlide() {
        showSlides(slideIndex -= 1);
    }

    function nextSlide() {
        showSlides(slideIndex += 1);
    }

    function showSlides(n) {
        var i;
        var slides = $('.slide-item');
        var dots = $('.slider-dot');
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
});

function validateLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (password.length < 8) {
        alert("رمز عبور باید حداقل ۸ کاراکتر باشد.");
        return false;
    }


    var englishPattern = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    if (englishPattern.test(username)) {
        alert("نام کاربری نمی‌تواند شامل کلمات انگلیسی باشد.");
        return false;
    }

    return true;
}

function addToCart() {
    var cartList = document.getElementById("cart-list");
    var productTitle = document.getElementById("product-title").textContent;
    var productPrice = document.getElementById("product-price").textContent;
    var listItem = document.createElement("li");
    listItem.textContent = productTitle + " - " + productPrice;
    cartList.appendChild(listItem);
}