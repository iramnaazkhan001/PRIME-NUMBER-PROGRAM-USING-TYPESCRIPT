// function isPrime(num: number): boolean {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function printPrimeNumbers(): void {
//   for (let i = 1; i <= 50; i++) {
//     if (isPrime(i)) {
//       console.log(`${i} is prime.`);
//     }
//   }
// }

// printPrimeNumbers();

var n:number=50
var primeNumbers:number[]=[]
for(let i:number=2; i<=n; i++){
    let flag:boolean=true
    for(let j:number=2; j<(i/2 + 1); j++){
        if(i%j==0){
            flag=false
            break;
        }
    }
    if(flag)
        primeNumbers.push(i)
}
console.log("prime numbers are: ", primeNumbers)