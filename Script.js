
function beforeSubmit(){
 let inputDate = document.querySelector('.inputdate');
 let outputDate = document.querySelector('.outputdate');//string to Date(en_IN) form

console.log('input date::' , inputDate.value);
let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
console.log(typeof formattedDate,formattedDate);
outputDate.value = formattedDate;
console.log(outputDate.value);
}