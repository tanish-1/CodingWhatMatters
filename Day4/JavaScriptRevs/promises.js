// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function(orderId){
//     proceedToPayment(orderId);
// })

// const promise = createOrder(cart);

//  promise.then(function(orderId){
//     proceedToPayment(orderId);
//  })
const GITHUB_API = "https://api.github.com/users/akshaymarch7"

const user = fetch(GITHUB_API );
console.log(user);

user.then((data) => proceedToPayment(data) )
.then((paymentInfo) => showOrderSummary(paymentInfo))