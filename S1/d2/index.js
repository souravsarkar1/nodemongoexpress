// const {add , div , sub , mul} = require('./module')

// console.log(add(10,3));
// console.log(div(10,3));
// console.log(sub(10,3));
// console.log(mul(10,3));


const fs = require('fs');
// console.log(fs);
// fs.readFile('./index.txt',{encoding:'utf-8'},(err,data)=>{
//     if (err) {
//       console.log(err);  
//     }
//     else{
//         console.log(data , 'a');
//     }
// })

// const data = fs.readFileSync('./index.txt',{encoding:'utf-8'})

// try {
//     console.log(data , 's');
// } catch (error) {
//     console.log(error);
// }

// fs.writeFile('./index.txt' , '\n I love you Ratna.',(err)=>{
//     console.log(err);
// });

fs.appendFile('./index.txt' , '\nI love you Pritha' , (err)=>{
    if (err) {
        console.log(err);  
    } else {
       console.log('data is added'); 
    }
})