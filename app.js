// Ternary Operator

// const age = 20;
// const isAdult = age >= 21 ? 'shadi mubarak' : 'nikal';

// console.log(isAdult);


// Arrow functions

// const arrow = username=> `hello ${username}`;

// console.log(arrow('hasan'));


const small = document.querySelector('.small')

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