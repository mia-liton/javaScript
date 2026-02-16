let username = null;

let displayName = username ?? "Guest";

// console.log(displayName);

// let user = {
//     name: "Liton",
//     address: {
//         city: "Dhaka",
//         country: "Bangladesh"
//     }
// };

// console.log(user.address?.city);
// console.log(user.contact?.phone);


let user = {
    name: "Liton",
    contact: null
};

let phone = user.contact?.phone ?? "Not available";
console.log(phone);

