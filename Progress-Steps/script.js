const prev = document.getElementById('prev')
const next = document.getElementById('next')
const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')

let curr = 1
next.addEventListener('click', () => {
    curr++
    if (curr > 4) {
        curr = 4
    }
    update()
    console.log(curr)
})

prev.addEventListener('click', () => {
    curr--
    update()
    console.log(curr)
})

function update() {
    circles.forEach((circle, i) => {
        if (i < curr) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    //Distance between one circle to another is 33% width
    progress.style.width = (curr - 1) * 33 + '%'
    let disabled = true
    curr > 1 ? disabled = false : true
    prev.disabled = disabled
}