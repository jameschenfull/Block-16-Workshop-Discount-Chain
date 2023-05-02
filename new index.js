//Starter Code
const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};

const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

//change variables here

const total = id(timmy);

// multiply pricePerRefill and refills for total
function cost(med) {
  return med.pricePerRefill * med.refills;
}

//If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.

function hasSubscription(total, med) {
  if (med.subscription === true) {
    return total - total * 0.25;
  }
  return total;
}
//If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.

function hasCoupon(total, med) {
  if (med.coupon === true) {
    return total - 10.0;
  }
  return total;
}
//At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."

console.log("Your grand total is ${total}");
