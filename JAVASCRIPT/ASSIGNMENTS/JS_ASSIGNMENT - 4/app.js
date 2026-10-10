// // step # 2 logical AND &&

let age = 20;
let feePaid = true;

if (age >= 18 && feePaid === true) {
  console.log("Allowed");
} else {
  console.log("Not Allowed");
}

// step # 3 OR  ||
let emailCorrect = true;
let phoneCorrect = false;

if (emailCorrect || phoneCorrect) {
  console.log("Login Allowed");
} else {
  console.log("Login Not Allowed");
}
// step # 4 NOt !
let isBlocked = false;

if (!isBlocked) {
  console.log("Access Allowed");
} else {
  console.log("Access Denied");
}
// step # 5 Combine logical operator
let isLoggedIn = true;
let isPremium = false;
let hasCoupon = true;

if (isLoggedIn && (isPremium || hasCoupon)) {
  console.log("Special Discount Allowed");
} else {
  console.log("No Special Discount");
}

// step # 6 practice

// Example 1: Logged in and premium member
// let isLoggedIn = true;
// let isPremium = true;
// let hasCoupon = false;

// let specialDiscount = isLoggedIn && (isPremium || hasCoupon);

// console.log(specialDiscount);
// true because the user is logged in AND is a premium member.

// Example 2: Logged in but no premium/coupon
// Example 2: Logged in but neither premium nor has coupon
// let isLoggedIn = true;
// let isPremium = false;
// let hasCoupon = false;

// let specialDiscount = isLoggedIn && (isPremium || hasCoupon);

// console.log(specialDiscount);
// false because the user is logged in,
// but is neither a premium member nor has a coupon.

// Example 3: Not logged in but has coupon
// Example 3: User has a coupon but is not logged in
// let isLoggedIn = false;
// let isPremium = false;
// let hasCoupon = true;

// let specialDiscount = isLoggedIn && (isPremium || hasCoupon);

// console.log(specialDiscount);
// false because the user has a coupon,
// but the user is not logged in.
