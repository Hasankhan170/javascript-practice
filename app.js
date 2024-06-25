// Ternary Operator

// const age = 20;
// const isAdult = age >= 21 ? 'shadi mubarak' : 'nikal';

// console.log(isAdult);


// Arrow functions

// const arrow = username=> `hello ${username}`;

// console.log(arrow('hasan'));


// const small = document.querySelector('.small')
// let users = [];

// async function asyncFun(){
// try {
//     const res = await axios('https://jsonplaceholder.typicode.com/users');
//     users = res.data;
//     randarItems();
// } catch (error) {
//     console.log(error);
// }
// }

// function randarItems(){
//     small.innerHTML = users.map((item,index)=>`
//      <div class="card" style="width: 18rem;" data-index="${index}">
//                     <div class="card-body">
//                         <h5 class="card-title">${item.name}</h5>
//                         <p class="card-text">Address: ${item.address.suite}, ${item.address.street}, ${item.address.city}</p>
//                     </div>
//                 </div>
//     `).join('');

//     document.querySelectorAll('.card').forEach(card=>
//         card.addEventListener('click', deleteCard)
//     )
// }


// document.querySelectorAll('.card').forEach(card=>
//     card.addEventListener('click', deleteCard)
// )

// function deleteCard(event){
//     const card = event.target.closest('.card');
//     const index = card.getAttribute('data-index');
//     users.splice(index,1)
//     randarItems();
// }



// asyncFun();


// async await 


// async function asyncFun(){
//     try {
//       const res = await axios('https://jsonplaceholder.typicode.com/users');
//       small.innerHTML = res.data.map(item=>`
//                 <div class="card" style="width: 18rem;">
//                         <div class="card-body">
//                             <h5 class="card-title">${item.name}</h5>
//                             <p class="card-text">Address: ${item.address.suite}, ${item.address.street}, ${item.address.city}</p>
//                         </div>
//                     </div>
//         `).join('')
        
//         document.querySelectorAll('.card').forEach(card=>{
//             card.addEventListener('click', deleteCard);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

// function deleteCard(event){
//     event.target.closest('.card').remove();
// }

// asyncFun();


// const div = document.querySelector('div')

// const obj = {
//     name: 'hasan',
//     age: 20,
//     isloggedIn : true,
// }


// const entrie = Object.entries(obj)
// const param = new URLSearchParams(entrie)
// console.log(param.toString());




// const entrie = Object.entries(obj)
// for(const [key,value] of entrie){
//     console.log(key);
//     console.log(value);
// }

// for(const key in obj){
//     if(obj.hasOwnProperty(key))
//         console.log(obj[key]);
// }


// const key = Object.keys(obj)
// console.log(key);

// const value = Object.values(obj)
// console.log(value);

// const entrie = Object.entries(obj)
// console.log(entrie[2]);



// let value = Object.values(obj)
// for(let i = 0; i < value.length;i++){
//     console.log(value[i]);
//     div.innerHTML += `<h1>${value[i]}</h1>`
// }



// Object.entries(obj).forEach((i)=>{
//    console.log(i);

    
// });




// let obj = { a: 1, b: 2, c: 3 };
// let outputDiv = document.getElementById('output');

// for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {

//         outputDiv.innerHTML += `<h1>${key} : ${obj[key]}</h1>`;
//     }
// }





// import and export 


//  const hasan = [1,2,3,4,5];
//  const nikal = [6,7,8,9,10];
//  const mubarak = [11,12,13,14,15];
//  const shadi = [16,17,18,19,20];

//  console.log(hasan,nikal,mubarak,shadi);

//  export {hasan,nikal,mubarak,shadi}



// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     return res.json();
// }).then((res)=>{
//     console.log(res);
// })


// async function asyncFun(){
//     try {
//         const data = await fetch('https://jsonplaceholder.typicode.com/users')
//         const res = await data.json();
//         console.log(res);
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// asyncFun();





// const obj = {
//     name: 'hasan',
//     age: 20,
//     isloggedIn : true,
//     city: 'dhaka',
//     country: 'bangladesh',
//     adress : 'shah faisal'
// }

// for(const key in obj){
//     // console.log(key);
//     console.log(obj[key]);
// }