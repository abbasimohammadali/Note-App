let inputfield = document.querySelector('#input-field');
let colorbox = document.querySelectorAll('.color-box');
let savebtn = document.querySelector('#btn-save');
let deletebtn = document.querySelector('#btn-delete');
let NewNoteListed = document.querySelector('#listed');

deletebtn.addEventListener('click' , function() {
    inputfield.value = ''
    inputfield.style.backgroundColor = '#fff'
})

colorbox.forEach(function(colorbox) {
    colorbox.addEventListener('click' , function(event) {
        let background = event.target.style.backgroundColor
        inputfield.style.backgroundColor = background
    })
})

savebtn.addEventListener('click' , function() {
    let inputvalue = inputfield.value
    let background = inputfield.style.backgroundColor 

    let NewDivElem = document.createElement('div')
    NewDivElem.className = 'card shadow-sm rounded'
    NewDivElem.style.backgroundColor = background

    NewDivElem.addEventListener('click' , function(event) {
        event.target.parentElement.remove()
    })

    let NewPElem = document.createElement('p')
    NewPElem.className = 'card-text p-3'
    NewPElem.innerHTML = inputvalue

    NewDivElem.append(NewPElem)
    NewNoteListed.append(NewDivElem) 
    
    inputfield.value = ''
    inputfield.style.backgroundColor = '#fff'
})