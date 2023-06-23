for(let x = 1, y = 10; x<y; x++, y--){
    console.log(`x=${x}, y=${y}`)
}
// let sum = 0;
// while(sum+=sum <10){
//     console.log(sum);
// }
for (let x in[1,2,3,4]){

}
let person = {"name": "Jo", height:"5.8"}
console.log(person);
for(let fact in person){
    console.log(`fact about person ${fact} is ${person[fact]}`);
}

let hello = "hello";
for (let letter of hello){
    console.log(letter)
}