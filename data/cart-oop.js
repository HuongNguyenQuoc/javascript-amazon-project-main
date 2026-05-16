import { validDeliveryOption } from "./deliveryOptions.js";

function Cart(localStorageKey) {
    const cart = {
        cartItems: undefined,

        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
            }, {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '2'
            }];
        },

        saveToStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },

        addToCart(productId, quantity) {
            let matchingItem;

            this.cartItems.forEach((item) => {
                if (productId === item.productId) matchingItem = item;
            });

            if (matchingItem) {
                matchingItem.quantity += quantity;
            } else {
                this.cartItems.push({
                productId,
                quantity,
                deliveryOptionId: '1'
                });
            }

            this.saveToStorage();
        },

        removeFromCart(productId) {
            this.cartItems = this.cartItems.filter((cartItem) => cartItem.productId !== productId);
            this.saveToStorage();
        },

        updateDeliveryOption(productId, deliveryOptionId) {
            let matchingItem;

            this.cartItems.forEach((item) => {
                if (productId === item.productId) matchingItem = item;
            });

            if (!matchingItem) return;
            if (!validDeliveryOption(deliveryOptionId)) return;

            matchingItem.deliveryOptionId = deliveryOptionId;
            this.saveToStorage();
        },

        calculateCartQuantity() {
            let cartQuantity = 0;

            this.cartItems.forEach((cartItem) => {
                cartQuantity += cartItem.quantity;
            });

            return cartQuantity;
        },

        updateQuantity(productId, newQuantity) {
            let matchingItem;

            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId === productId) matchingItem = cartItem;
            });

            matchingItem.quantity = newQuantity;

            this.saveToStorage();
        }
    };
    
    cart.loadFromStorage();
    return cart;
}

const cart = Cart('cart-oop');
cart.addToCart('54e0eccd-8f36-462b-b68a-8182611d9add', 10);
const businessCart = Cart('cart-business');

cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);














