const input = document.querySelector('input')
const h1 = document.querySelector('h1')
const choices = document.querySelector('.choices')
const choiceArr = []
const overlay = document.querySelector('.overlay')
const btn = document.querySelector('.btn')

input.focus()

window.addEventListener('keydown', () => {
    input.focus()
})


input.addEventListener('input', () => {
    overlay.style.display = 'block'
    input.style.maxWidth = '100%'
    input.size = input.value.length
    h1.textContent = 'Press enter to create choice' 
})

window.addEventListener('keydown', evt => {
    if(evt.key === 'Enter') {
        h1.style.display = 'none'
        const choice = document.createElement('div')
        choice.classList.add('choice')
        choice.textContent = input.value

        choices.appendChild(choice)
        choiceArr.push(choice)

        choiceArr.forEach(item => {
            item.addEventListener('click', () => {
                item.remove()
            })
        })

        input.value = " "
        input.size = input.value.length
        overlay.style.display = 'none'
        document.activeElement.blur()
    }
})

btn.addEventListener('click', () => {

    
    const interval = setInterval(() => {
        const randomChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)]
        

        randomChoice.classList.add('highlight')

        setTimeout(() => {
            randomChoice.classList.remove('highlight')
        }, 100)

    }, 100)

    setTimeout(() => {
        clearInterval(interval)
        choiceArr[Math.floor(Math.random() * choiceArr.length)].classList.add('highlight')
    }, 3000)
})