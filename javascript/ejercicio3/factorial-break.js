
let factorialDe10= 1
for (let i = 1; i <= 100; i++) {
    if(i>=11){
        break
    }else{
        console.log(i)
        factorialDe10 = factorialDe10  * i
        continue
    }

}
console.log(factorialDe10)