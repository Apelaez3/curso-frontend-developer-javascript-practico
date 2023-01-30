const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamIcon = document.querySelector(".menu");
const menuShoppingCar = document.querySelector(".navbar-shopping-cart");
const menuDetailsCar = document.querySelector(".product-detail");
const cardContainer = document.querySelector(".cards-container");

menuEmail.addEventListener('click', toggleDeskopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShoppingCar.addEventListener('click', toggleMenuShoppingCar);

function toggleDeskopMenu() {
    const isMenuDetailsCarClosed1 = menuDetailsCar.classList.contains('inactive');

    if (!isMenuDetailsCarClosed1) {
        menuDetailsCar.classList.add('inactive');

    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isMenuDetailsCarClosed = menuDetailsCar.classList.contains('inactive');

    if (!isMenuDetailsCarClosed) {
        menuDetailsCar.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

}


function toggleMenuShoppingCar() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    menuDetailsCar.classList.toggle('inactive');
}

function openProductDetailAside(){
    
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'TV',
    price: 600,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'PC',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'PC',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'PC',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'PC',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'PC',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})


function renderProducts(arr){
    for(product of arr){
        const productCart = document.createElement('div');
        productCart.classList.add('product-card');
    
        
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailAside);
    
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        
    
        const productInfoDiv = document.createElement('div');
        
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFiguere = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFiguere.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFiguere);
    
        productCart.appendChild(productImg);
        productCart.appendChild(productInfo);
    
        cardContainer.appendChild(productCart);
    }
}

renderProducts(productList);