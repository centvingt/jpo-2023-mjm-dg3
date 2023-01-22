import { games } from './data.js'

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get('id')

const header = document.querySelector('header')
const titleElement = document.querySelector('h1')
/** @type {HTMLIFrameElement} */ const gameIframe =
  document.querySelector('.scratch-game')
const scratchContainer = document.querySelector('.scratch')
const gameContainer = document.querySelector('.scratch__game-container')
const controlsUl = document.querySelector('.controls')
const screenshotsContainer = document.querySelector('.screenshots')

const game = games.find((g) => g.scratch === id) ?? {
  title: '',
  description: [],
  controls: [],
  screenshots: [],
  figma: '',
  youtube: '',
  scratch: '',
}

const { title, description, controls, screenshots } = game

titleElement.innerText = title
gameIframe.src = `https://scratch.mit.edu/projects/${id}/embed`

description.forEach((p) => {
  header.innerHTML += `<p>${p}</p>`
})

controls.forEach((control) => (controlsUl.innerHTML += `<li>${control}</li>`))

const youtubeScreenshots = screenshots.filter((s) => !s.startsWith('https://'))
const imagesScreenshots = screenshots.filter((s) => s.startsWith('https://'))

youtubeScreenshots.forEach((youtubeId) => {
  const content = `
<iframe
  width="100%"
  src="https://www.youtube.com/embed/${youtubeId}"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>
`
  screenshotsContainer.innerHTML += content
})
imagesScreenshots.forEach((src) => {
  const content = `<img src="${src}" alt="Capture d’écran">`
  screenshotsContainer.innerHTML += content
})

const resize = () => {
  let scale = gameContainer.clientWidth / 485

  if (scale === 1) scale = (scratchContainer.clientWidth - 40) / 485

  gameIframe.style.setProperty('transform', `scale(${scale})`)

  gameContainer.style.setProperty(
    'height',
    `${gameIframe.clientHeight * scale}px`
  )
}

resize()
window.addEventListener('resize', resize)

// if (
//   /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
//     navigator.userAgent
//   )
// )
//   alert('MOBILE!')
// else alert('DESKTOP!')
