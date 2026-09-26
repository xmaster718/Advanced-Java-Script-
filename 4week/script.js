console.log("1 task")

for(let i = 1; i < 11; i++) {
    console.log(i);
};

console.log("2 task")

for(let i=10; i > 0; i--){
    console.log(i);
}

console.log("3 task")


let sum = 0;

for(i=1; i<101; i++){
    sum +=i;
}
console.log(sum);


console.log("4 task")

const list = ["Almaty", "Astana", "Taldykorgan", "Shymkent", "Semey"];
for(i=0; i<list.length; i++){
    console.log(i+1, list[i]);
};

console.log("5 task")

let number = 1;

for (const city of list){
    console.log(number +'. '+ city);
    number++;
}

console.log("6 task")

for (i=2; i<21; i+=2){
    console.log(i);
};
