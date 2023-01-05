// javascriopt BASICO 3.0
// Bifurcaciones if else 
let saldo= 5000;
let efectivo=100;

if(efectivo<=saldo){
    console.log("Es verdadero")
}else{
console.log("No es verdadero")
}

//if else + if else

let nota =5;
if(nota ===5){
    console.log("aprobaste")
}else if(nota===4){
    console.log("eres una ...")
}else if(nota===3){
    console.log("trabaja pa")
}else if(nota===2){
    console.log("sos horri...")

}else if(nota===1){
    console.log("te veo en marzo")
}else{
    console.log("Error, introduce una nota entre 1 y 5")
}
/// ejemplo de switch

let calificacion= 5;

switch(nota){
    case 5:
        console.log("aprobaste");
        break
    case 4:
        console.log("eres una ...")
        break
    case 3:
        console.log("trabaja pa")
        break
    case 2:
        console.log("sos horri...")
        break
    case 1:
        console.log(console.log("te veo en marzo"))
        break
    default:
        console.log("Error, introduce una nota entre 1 y 5")
        break
}

/// comparaciones Javascrpt 3.2

// Igualdad

if(5==5){
    console.log("hola")
}

if(5===5){
    console.log("5 es muy igual a 5")
}

let a1= 5;

let b1=5;

if(a1==b1){
/// utilizar el ==  solo compara el valor
    console.log("a es igual a1 b1 -debil")
}

if(a1===b1){
/// utilizar el === compara el tipo y el contenido de ambos si son extactamente iguales
console.log("a es igual a1 b1 -fuerte")
}


let c1=10;
let d1=20;
let e1="10";
if(c1 != e1){
    console.log("son diferentes debil")
}
 if(c1!==d1){
    console.log("son diferentes fuerte")
}

let max=10;
let min=1;

let min2="10"

if(max>=min){
    console.log("max es mayor que min")
}

if(min<max){
    console.log("min es menor que max")
}

if(min<=max){
    console.log("min es menor e igual que max")
}