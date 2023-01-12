let year = document.querySelector('.form-profile #year')
let month = document.querySelector('.form-profile #month')
let day = document.querySelector('.form-profile #day')
let gender = document.querySelector('.form-profile #gender')
let language = document.querySelector('.form-profile #language')
let currency = document.querySelector('.form-profile #currency')

let currentYear = new Date().getFullYear()

for (let index = currentYear - 60; index <= currentYear; index++) {
    year.innerHTML += `<option value="${index}">${index}</option>`
}