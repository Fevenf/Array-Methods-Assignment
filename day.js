// let array = ['apple','banana','orange'];

// array[4]='carrot'
// console.log(array)

// let array = ['coconut','sousoap','mango','pineapple','guava']
// let newarray =array.slice(1,4)
// console.log(newarray)

// let simpleArray = [3,5,2,1,6,9,7,8];
// simpleArray.sort();
// console.log(simpleArray)
// let complexArray = [1,24,31,5,2,67,22,56,15,9,16];
// complexArray.reverse();
// console.log(complexArray)

// let names = ['John', 'Mary', 'Irena', 'Lakshmi', 'Ronald', 'Elain', 'Raj'];
// names.join('&'); 
// console.log(names)

// let numbers = ['2333', '1', '1', '1'];
// console.log (numbers[0]);

// let a = [1,2,3,5];
// let x = a.map(function(item){
//  return item+1;
// })
// console.log(x)

// function rotate(a){
// let myShift = a.shift();
// a.push(myShift);
// return a;
//  }
//   console.log(rotate(['a', 'b', 'c']));

// //1
// let shopping = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee']
// shopping.push('fruit loops') 
// console.log(shopping)
// shopping[4]='fair trade coffee'
// console.log(shopping)
// //4
// shopping[2,3]= 'rice', 'beans';
// console.log(shopping)
// //5
// let cart =[]
// //6
// shopping.pop()
// console.log(shopping)
// cart.push('fruit loops');
// console.log(cart);
// //7
// shopping.shift(0)
// console.log(shopping)
// cart.unshift('pop starts');
// console.log(cart);
// //8
// let i = 0
// while (shopping.length != 0) {
//     cart.push (shopping [i]);
//     shopping.shift();
//     i++;
// }
// //9
// console.log(cart);
// cart.sort()
// console.log(cart)
// cart.reverse()
// console.log(cart)
// //10
// console.log(cart.toString());

// let user = {
//     name: 'Gmail', 
//     mailboxes:{ 
//         inbox: [{name: 'Amazon', lastmessage: 'your item is ready for pick up'},
//             {name: 'Udemy', lastmessage: 'Get courses as low as $12.99'},],
//         Snoozed: [{name: ['iphone', 'apple watch'], lastMessage: 'Barkon Birthday invitation'},],
//         sent: [{name: 'Daniel', lastMessage: 'send me your skype address'},
//                     {name: 'Danielha', lastMessage: '6 month reminder'}],
//         drafts: [{name:'truwork', lastmessage: 'important information'}]
//     },
//         contacts: [{firstname: 'mahlet', lastname: 'tsegaye'}, {firstname: 'simenesh', lastname: 'abebe'}],
//     };

//     console.log(Object.keys(user.mailboxes));

//     for(i = 0; i < user.mailboxes.inbox.length; i++){
//         console.log(user.mailboxes.inbox[i].name);}

// //     console.log(user.mailboxes.inbox[0].lastmessage);
// //     user.mailboxes.sent.push(user.mailboxes.drafts[1]);
// //     console.log(user.mailboxes.sent);
// //     let addDraft = [{name: 'Feven', lastmessage: 'Too many things to do'}];
// //     user.mailboxes.drafts.push(addDraft);
// //     console.log(user.mailboxes.drafts);
  
// // function add(num1, num2) {
// //     return num1+num2;
// // }
// // console.log(add(4,5))

// // if (true){ 
// //     const message = "Hello World";
// //   }
// //   console.log(true)

// // if (true) {
// //     var greeting = 'hello';

// // }
// // // console.log(greeting)
// // function outer(){
// //   var a = 'today'
// //   var b = {type:"Fiat",
// //            model:"500", 
// //             color:"white"}; 
// //  console.log(a); 
// //  console.log(b);

// //  function inner (a,b){
// //      var a = 'x'
// //      var b = {name: 'feven',
// //               address: '1529 cold',
// //               email: 'feven.gh@gmail.com',
// //     }
// // console.log(a);
// // console.log(b);
    
// //  }
// //   inner();

// // }      
// //   outer();

// var exponent = function (a, n)
// {
//     if (n === 0)
//     {
//         return 1;
//     }
//     else 
//     {
//         return a * exponent(a, n-1);
//     }
// };
// console.log(exponent(2, 5));
// console.log(exponent(7, 3));
// console.log(exponent(12, 2));
// console.log(exponent(9, 4));

// //bonus

// function rec(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
//     return result;
//     }
//     console.log(rec(2, 5));
//     console.log(rec(7, 3)); 
//     console.log(rec(12, 2)); 
//     console.log(rec(9, 4));

// const hands = ['rock' , 'paper', 'scissors'];
// console.log(hands);


const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

const userjose = users.find(user => user.firstName === 'Jose');
console.log(userjose);

const premiummember = users.filter(user => user.isPremiumMember === true);
console.log(premiummember);

 const userLastName = users.map (users => users.lastName);
 console.log(userLastName);

const loggedmorethan10times= users.filter(user => user.logins > 10).map(user => user.firstName + " " + user.lastName);
console.log(loggedmorethan10times);

const totallogin = users.reduce((total,item) => {
    return total + item.logins
}, 0)
console.log(totallogin);