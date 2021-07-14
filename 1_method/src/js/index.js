const wrapper = document.querySelector('.wrapper')

let auto = true
let timerId = null

const changeImage = (event) => {
    const target = event.target
    if (!target.closest('button')) return
    
    if (auto) {
        auto = !auto
        clearInterval(timerId)
        setTimeout(() => autoChange(auto = true), 3000)
    }
    
    if (target.classList.contains('btn-left')) slidePrev()
    if (target.classList.contains('btn-right')) slideNext()
}

const slidePrev = () => {
    const images = Array.from(wrapper.querySelectorAll('.image'))
    const last   = images[images.length - 1]
    wrapper.prepend(last)
}

const slideNext = () => {
    const images = Array.from(wrapper.querySelectorAll('.image'))
    const first  = images[0]
    wrapper.append(first)
}

const autoChange = (flag, time = 1000) => {
    if (!flag) return
    
    timerId = setInterval(() => slideNext(), time)
}

autoChange(auto)
wrapper.addEventListener('click', changeImage)



