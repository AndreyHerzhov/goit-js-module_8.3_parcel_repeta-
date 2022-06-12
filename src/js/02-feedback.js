import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';


const STORAGE_KEY = 'feedback-msg'
const STORAGE_NAME = 'feedback-name'

const formData = {
    name: '',
    message: ''
}
// console.log(localStorage)

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
    nameinput: document.querySelector('.js-feedback-form input')
}


refs.form.addEventListener('submit', onFormSubmit)
refs.textarea.addEventListener('input', throttle(onTextAreaInput, 1000) )
refs.form.addEventListener('input', onFormData)
refs.nameinput.addEventListener('input', onNameData)


populateTextarea()
populateName()

function onFormData (e) {
    // console.log(e.target.name)
    formData[e.target.name] = e.target.value
    console.log(formData)
}


/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset()
    localStorage.removeItem("formData")
    // console.log('Sending form')
}

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */

function onNameData(evt) {
    const name = evt.target.value
    localStorage.setItem(STORAGE_NAME, name)
}

function onTextAreaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY, message)
    // console.log(message)
}

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY)
    if(savedMessage) {
        // console.log(savedMessage)
        refs.textarea.value = savedMessage
   }
} 

function populateName() {
    const savedName = localStorage.getItem(STORAGE_NAME)
    if(savedName) {
        // console.log(savedName)
        refs.nameinput.value = savedName
    }
}


// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

// const formData = {};

// refs.form.addEventListener('input', evt => {
// //   console.log(evt.target.name);
// //   console.log(evt.target.value);
//   formData[evt.target.name] = evt.target.value
//   window.localStorage.setItem("formData", JSON.stringify(formData))
// });

// function populateTextarea() {
//     const savedMessage = window.localStorage.getItem("formData")
//     const parsedMessage = JSON.parse(savedMessage)
//     if(parsedMessage) {
//         refs.textarea.value = parsedMessage.message
//    }
// } 

// function populateName() {
//     const savedName = window.localStorage.getItem("formData")
//     const parsedName = JSON.parse(savedName)
//     if(parsedName) {
//         refs.nameinput.value = parsedName.name
//     }
// }