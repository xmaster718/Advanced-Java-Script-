// tasks 1

const cards = document.querySelector("#cards");
const button = document.querySelector("#button");
const search = document.querySelector("#search");
const count = document.querySelector("#count");

let allUsers = [];

async function load() {
    cards.textContent = "Загружаем";
    button.textContent = "Загрузить";
    button.disabled = true;


    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok){
            throw new Error(res.status);
        }

        const users = await res.json();
        allUsers = users;

        if (users.length == 0) {
            cards.textContent = "Ничего не найденно";
        } else {
            render(users);
        } 
    }catch (error) {
            cards.textContent = "Не получилось загрузить";

            button.textContent = "Повторить";
        } finally {
            button.disabled = false;
        }
}

function render(users){
    cards.textContent = "";

    users.forEach(function(user) {
        const card = document.createElement("div");
        card.className = "card";

        const name = document.createElement("h2");
        name.textContent = user.name;

         const email = document.createElement("p");
        email.textContent = "Email " + user.email;

         const city = document.createElement("p");
        city.textContent = "Город " + user.address.city;

        card.append(name);
        card.append(email);
        card.append(city);


        cards.append(card);
    });

    count.textContent = "Найденно " + users.length;
}

search.addEventListener("input", function(){
    const query = search.value.toLowerCase();

    const filter = allUsers.filter(function(user){
        return user.name.toLowerCase().includes(query);
    });

    render(filter);
});

button.addEventListener("click", load);
load();