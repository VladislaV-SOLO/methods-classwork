const answers = ['1','2','3'];

const cards = [
    {
        input: document.querySelector('.input1'),
        btn: document.querySelector('.btn1'),
    },
    {
        input: document.querySelector('.input2'),
        btn: document.querySelector('.btn2'),
    },
    {
        input: document.querySelector('.input3'),
        btn: document.querySelector('.btn3'),
    }
]

const getAnswer = (index) => {
    return answers[index]
}

let count = 0

const handlerCheckAnswer = function (index) {

    if (this.input.value === getAnswer(index)) {
        this.input.disabled = true
        this.btn.disabled = true
        count++
        if (count === 3) {
            alert('вы ответили правильно')
            window.location.href = 'https://google.com'
        }
    }else {
        this.input.value = ''
        alert('ответ неверныйб попробуйте угадать 1, 2 или 3')
    }
}



cards
.sort(() => Math.random() - 0.5)
.forEach((card, index) => {
    card.btn.addEventListener('click', handlerCheckAnswer.bind(card, index))
})
