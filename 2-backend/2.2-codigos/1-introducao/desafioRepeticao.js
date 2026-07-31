//contar quantos numeros impares e pares tem entre 0 e 100

let numerosPares = 0;

let numerosImpares= 0;

for(let i =0; i<=100; i++){
    if(i%2==0){
        numerosPares++;
    }else{
        numerosImpares++;
    }
}

console.log(`\nEntre 0 e 100 há ${numerosPares} números pares`);

console.log(`\nEntre 0 e 100 há ${numerosImpares} números ímpares`);