const root = document.documentElement

let hue = 0
const getNewHue = () => (hue += Math.random() * 120 - 240)

window.setInterval(() => root.style.setProperty('--hue', getNewHue()), 15000)
