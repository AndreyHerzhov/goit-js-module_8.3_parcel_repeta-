import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/feedback-form.css';

// console.log(localStorage)

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea')
}

refs.form.addEventListener('submit', onFormSubmit)
refs.textarea.addEventListener('input', throttle(onTextAreaInput, 1000) )

populateTextarea()
/*
 * - Останавливаем поведение по умолчанию
 * - Убираем сообщение из хранилища
 * - Очищаем форму
 */

function onFormSubmit(evt) {
    evt.preventDefault();
    // console.log('Sending form')
    evt.currentTarget.reset()
}

/*
 * - Получаем значение поля
 * - Сохраняем его в хранилище
 * - Можно добавить throttle
 */

function onTextAreaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem('feedback-msg', message)
    // console.log(message)
}

/*
 * - Получаем значение из хранилища
 * - Если там что-то было, обновляем DOM
 */

function populateTextarea() {
    const savedMessage = localStorage.getItem('feedback-msg')
    if(savedMessage) {
        console.log(savedMessage)
        refs.textarea.value = savedMessage
   }
} 



// Домой
// сделать так чтобы сохраняло не только сообщение но и имя, и все в одном обьекте

// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });