import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const STRIPE_PUBLIC_KEY = 'pk_test_51LgwaMCyPfOzbfRz8LA4CrEE2fgh4npZTa36wGG1NjqLyWXxqxScBx7ivkt3DrXZa1oLBQaTi9TqT2Wu3uZ04AQU00WsXaRpPg'
const getStripe =  () => {
    if (!stripePromise) {
        stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
    }
    return stripePromise;
}

export default getStripe