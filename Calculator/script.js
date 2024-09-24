let str = ''
let keys = document.querySelectorAll('.key')

Array.from(keys).forEach((key) => {
    key.addEventListener('click', (e) => {

        if(e.target.innerHTML === '=') {
            if (str !== '') {
                str = eval(str)
                document.querySelector('.input').value = str
            }
        }
        else if (e.target.innerHTML === 'C') {
            str = ''
            document.querySelector('.input').value = str
        }
        else {
            str = str + e.target.innerHTML
            document.querySelector('.input').value = str
        }
    })
})