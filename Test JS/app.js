broj = +prompt("Unesite neki broj");
if(isNaN(broj)){
    console.log("Niste uneli odgovarajuci broj")
}else{
    console.log(broj * broj);
}






  //2.zadatak
  for (i = 1; i <= 100; i++) {
    if ((i % 3 == 0) & (i % 5 == 0)) console.log("FIZZ BUZZ");
  }
else if (i % 3 == 0) {
  console.log("FIZZ");
} else if (i % 5 == 0) {
  console.log("BUZZ");
}
else{
    console.log(i)
}


//3.zadatak
let brBr = 0;
for(i = 1; brBr < 4; i++){
    if(i % 4 == 0 && i % 6 ==0)
    console.log(i);
  brBr++

}
