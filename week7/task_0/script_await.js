//task 0


async function load() {   // ассинхронная функция с названием load
    const res = await fetch("https://jsonplaceholder.typicode.com/users");  // переменная res, который хранит http ответ, fetch отправляет http запрос на сервер, await ждет пока запрос завершиться, там массив обьектов
    console.log("A", res.ok);  // ввыводит на консоль ответ 
    const data = await res.json(); // переменная data которая ждет json ответа от res
    console.log("B", data.length);   // ввыодит ответ, и количество обьектов в массиве
}     // если убрать await, то fetch будет обьектом у которого нет свойства Статус, по этому будет undefind, также можно использовать .then


load();  //
console.log("C");  // Синхронные, выполняются сразу
console.log("D"); //

//task 0.1  с then

function load_2() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(res){
        console.log("A", res.ok)
        return res.json();
    })
    .then(function(data){
        console.log("B", data.length);
    });
}

console.log("Cc");
load_2()
console.log("Dd");