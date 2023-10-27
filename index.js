// const elForm = document.querySelector(".form")
// const elFormEmailInput = document.querySelector(".form_email-input")
// const elFormPasswordInput = document.querySelector(".form_password-input")
// const elFormBtn = document.querySelector(".form-btn")




// elFormBtn.addEventListener("click", (e) => {
//     e.preventDefault()

//     if (elFormEmailInput.value == "admin" && elFormPasswordInput.value == 2006) {
//         elFormEmailInput.style.border = " 2px solid green"
//         elFormPasswordInput.style.border = " 2px solid green"
//         alert("Success")
//     } else {
//         elFormEmailInput.style.border = " 2px solid red"
//         elFormPasswordInput.style.border = " 2px solid red"
//         alert("Noto`g`ri parol")
//     }
// })


let elForm = document.querySelector(".form")
let elFormEuro = document.querySelector(".form .form-euro")
let elFormBtn = document.querySelector(".form .form-btn")
let elFormsom = document.querySelector(".form .form-som")


elFormBtn.addEventListener("click", (e) => {
    e.preventDefault()



    elFormsom.value = elFormEuro.value * 12820
})