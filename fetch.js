'use strict';

const username = document.getElementById('text');
const role = document.getElementById('role');
const age = document.getElementById('num');

const getData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      sendData(data)
    })
    .catch((error) => console.log(error))
}

const sendData = (data) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      username.value = `My name is ${data.user}`
      role.value = `I'm ${data.role}`
      age.value = `My age is ${data.age}`
      console.log(data)
    })
    .catch((error) => console.log(error))
}

document.addEventListener('DOMContentLoaded', getData('db.json'))

