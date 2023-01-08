import { games } from './data.js'

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get('id')

const titleElement = document.querySelector('h1')
const descriptionElement = document.querySelector('.description')
const scratchGameElement = document.querySelector('.scratch-game')

const game = games.find((g) => g.id === id)
const { title, description, controls } = game

titleElement.innerText = title
descriptionElement.innerText = description
scratchGameElement.src = `https://scratch.mit.edu/projects/${id}/embed`

// if (
//   /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
//     navigator.userAgent
//   )
// )
//   alert('MOBILE!')
// else alert('DESKTOP!')
