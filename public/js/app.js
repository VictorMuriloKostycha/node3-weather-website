console.log('Client Side javascript is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
messageOne = document.querySelector('#message-1')
messageTwo = document.querySelector('#message-2')


//messageTwo.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) =>{
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
            messageOne.textContent = data.error
        }else{
            console.log(data)
            messageOne.textContent = data.location
            messageTwo.textContent = data.data
        }
    })
})


})
