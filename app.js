let users = [{
        id: 1,
        img: './user_images/user1.jpeg',
        userName: "Nas Daily",
        userAge: 25,
        email: "nasdaily@gmail.com",
        location: "Palestine",
        job: "Video maker",
    },
    {
        id: 2,
        img: './user_images/user2.jpeg',
        userName: "John Doe",
        userAge: 28,
        email: "johndoe@gmail.com",
        location: "Romania",
        job: "UX/UI designer",
    },
    {
        id: 3,
        img: './user_images/user3.jpeg',
        userName: "Bob Mark",
        userAge: 31,
        email: "bobby@gmail.com",
        location: "Italia",
        job: "Web developer",
    },
    {
        id: 4,
        img: './user_images/user4.jpeg',
        userName: "Ivanov Ivan",
        userAge: 25,
        email: "ivanivanovy@gmail.com",
        location: "Russia",
        job: "Sales assistant",
    },
    {
        id: 5,
        img: './user_images/user5.jpeg',
        userName: "John Alex",
        userAge: 38,
        email: "axjohn@gmail.com",
        location: "The US",
        job: "Actor",
    },
    {
        id: 6,
        img: './user_images/user6.jpeg',
        userName: "Alex Young",
        userAge: 21,
        email: "yalex@gmail.com",
        location: "England",
        job: "Musician",
    },
    {
        id: 7,
        img: './user_images/user7.jpeg',
        userName: "Cole Sprouse",
        userAge: 23,
        email: "coolguy@gmail.com",
        location: "Palestine",
        job: "Actor",
    },
    {
        id: 8,
        img: './user_images/user8.jpeg',
        userName: "Dylan Minette",
        userAge: 16,
        email: "clayjensen@gmail.com",
        location: "The US",
        job: "High school student",
    },
    {
        id: 9,
        img: './user_images/user9.jpg',
        userName: "Tom Holland",
        userAge: 22,
        email: "barca_my_name_is_hollandy@gmail.com",
        location: "England",
        job: "Actor",
    },
    {
        id: 10,
        img: './user_images/user10.jpg',
        userName: "Tony Stark",
        userAge: 25,
        email: "tonyisalive@gmail.com",
        location: "The US",
        job: "Retired",
    },

]
let randomBtn = document.querySelector("#randomBtn");
let btns = document.querySelectorAll(".btn-container button");
let email = document.querySelector("#email");
let name_ = document.querySelector("#name");
let age = document.querySelector("#age");
let job = document.querySelector("#job");
let loc = document.querySelector("#location");
let img = document.querySelector(".img");
let random = Math.floor(Math.random() * users.length) + 1;
let prev = random;
let h1 = document.querySelector(".user h1");
let activeBtn = document.querySelector(".active");

function randomUser() {
    img.src = users[random].img;
    h1.textContent = users[random].userName;
    email.addEventListener("click", () => {
        h1.textContent = users[random].email;
    })




    job.addEventListener("click", () => {
        h1.textContent = users[random].job;
    })




    loc.addEventListener("click", () => {
        h1.textContent = users[random].location;
    })




    age.addEventListener("click", () => {
        h1.textContent = users[random].userAge;
    })




    name_.addEventListener("click", () => {
        h1.textContent = users[random].userName;
    })

}


window.addEventListener("DOMContentLoaded", () => {
    randomUser();
    btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            btns.forEach(btn => {
                btn.classList.remove("active");
            })
            e.currentTarget.classList.add("active")
        })
    })
})

randomBtn.addEventListener("click", () => {
    random = Math.floor(Math.random() * users.length) + 0;
    let temp = random;
    if (random == prev) {
        random = Math.floor(Math.random() * users.length);
        if (random == temp) random = Math.floor(Math.random() * users.length);
    }
    randomUser();
})