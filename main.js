console.clear();
1.
// Here are 3 functions that return promises
// 1st function creates a random number and refactors the name
// 2nd function decides the level of the user
// 3rd function gives hit points and strength of user based on level

const loginUser = (name) => {
    return new Promise((resolve, reject) => {
        const error = false;
        let random = Math.floor(Math.random() * 98);
        
        error
        ? reject('User Not logged in')
        : resolve({ name: `The ${name}-Meister`, random });
    });
};

let level = (levelNumber) => {
    return new Promise((resolve, reject) => {
        levelNumber === 0
        ? reject('User had no power and is expired')
        : levelNumber < 32
        ? resolve('amateur')
        : levelNumber < 65
        ? resolve('intermediate')
        : resolve('advanced');
    });
};

let levelPower = (level) => {
    return new Promise((resolve, reject) => {
        return 'advanced'
        ? resolve({ hitPoints: 200, strength: 10 })
        : 'intermediate'
        ? resolve({ hitPoints: 100, strength: 7 })
        : resolve({ hitPoints: 70, strength: 4 });
    });
};
// Using async await....create a function called login, that takes a name and email
// Success from the function will log a string using values from all 3 functions
// Successful String Output: '<name from loginUser> is an <level> player with <strength> strength and <hitPoint> hit points.'
// Failed String Output: 'User Not Logged in'

// Except for loginUser, calling a function requires a value from the previous function
// Do not edit loginUser, level or levelPower except to test the error variable
// log the error message in your function so that it shows the message if reject has been called
const login = async (name, email)=>{
    try {
        const a = await loginUser(name);        
        const b = await level(a.random);        
        const c = await levelPower(b);
        console.log(`${a.name} is an ${b} player with ${c.hitPoints} strength and ${c.strength} hit points.\n`)
    } catch (err){
        console.log(err);
    }
}

login('harry', 'asd@mat.com')
///////////???????????????????????????????????????? see the error????

2.
// Write an async function getUsersEmails
// Using fetch, it should call the given url
// const url1 = 'https://randomuser.me/api/?results=10';
// log out a list of User Emails
// OUTPUT
// Email List:
const fetch = require('node-fetch');
let url = 'https://randomuser.me/api/?results=10';

const getUsersEmails = async(endpoint)=>{
    try {
        let response = await fetch(endpoint);
        let json = await response.json();
        
        let emailList = await Object.entries(json)[0][1].forEach((item)=>{//is there a other way to find the end points
            console.log(item.email);
            // item.email
        })
        // console.log(emailList)
    } catch(err){
        console.log('some error')
    }
}
getUsersEmails(url)
// craig.odonoghue@example.com
// ferdinanda.farias@example.com
// isabella.horton@example.com
// alessandro.rink@example.com
// giulia.daconceicao@example.com
// yolanda.nieto@example.com
// sander.thomsen@example.com
// damien.dupont@example.com
// isabella.carroll@example.com
// jake.owens@example.com

3.
// Write an async function getFilms
// using axios, it should call the given url
// let url = 'https://ghibliapi.herokuapp.com/films';
// Function should randomly choose one of the objects from your api call
// and log the title as well as the classification and name from the last url in the species array
// study the data to figure out your solution
// Output will be random but format it like the EXAMPLE OUTPUT below
// EXAMPLE OUTPUT:
// Title: Whisper of the Heart
// Classification: Mammal
// Name: Human
const axios = require('axios');

let url3 = 'https://ghibliapi.herokuapp.com/films';

const getFilms = async(endpoint)=>{
try {
    const response = await axios.get(endpoint);
    console.log('\n-------------three---------------------')
    const myData = await Object.entries(response)[5][1];
    const randomObjNum = Math.floor(Math.random()*(myData.length-1)+1);
    // console.log(randomObjNum)
    console.log(`Title: ${myData[randomObjNum].title} \nDirector: ${myData[randomObjNum].director} \nRelease date:${myData[randomObjNum].release_date} \n`)
} catch (err) {
    return err;
}
}

getFilms(url3);



