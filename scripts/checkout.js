import { loadCartFetch } from '../data/cart.js';
import { loadProducts } from "../data/products.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

async function loadPage() {
    try {
        await Promise.all([
            loadProducts(),
            loadCartFetch()
        ]);
    } catch (error) {
        console.log('Unexpected error. Please try again later.');
    }

    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();