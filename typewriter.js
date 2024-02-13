
const sentence = "hello there from lighthouse labs\n";
let time = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time)
  
  time = time + 50;
}






// const sentence = "hello there from lighthouse labs";
// let time = 0;

// for (let i = 0; i < sentence.length; i++) {

//   setTimeout(() => {
//     process.stdout.write(sentence[i]);
//     }, time)
//     time = time + 50 
// }