import { games } from './data.js'
import { getIdFromUrlParams, getAuthorsHtmlContent } from './utils.js'

const header = document.querySelector('header')
const titleElement = document.querySelector('h1')
/** @type {HTMLIFrameElement} */ const gameIframe =
  document.querySelector('.scratch-game')
const scratchContainer = document.querySelector('.scratch')
const gameContainer = document.querySelector('.scratch__game-container')
const controlsUl = document.querySelector('.controls')
const screenshotsContainer = document.querySelector('.screenshots')
/** @type {HTMLElement} */ const scratchMobileWarning = document.querySelector(
  '.scratch__mobile-warning'
)
const authorsContainer = document.querySelector('h4')
const conceptionUl = document.querySelector('.conception')
const figmaIframe = document.querySelector('.figma > iframe')

const id = getIdFromUrlParams()
const game = games.find((g) => g.scratchId === id) ?? {
  title: '',
  descriptionParagraphs: [''],
  controls: [''],
  screenshots: [''],
  figmaId: '',
  youtubeId: '',
  scratchId: '',
}

const {
  title,
  descriptionParagraphs,
  controls,
  screenshots,
  authors,
  figmaId,
  pdfLink,
} = game

titleElement.innerText = title

authorsContainer.innerHTML = getAuthorsHtmlContent(authors)

gameIframe.src = `https://scratch.mit.edu/projects/${id}/embed`

descriptionParagraphs.forEach((p) => {
  header.innerHTML += `<p>${p}</p>`
})

controls.forEach((control) => (controlsUl.innerHTML += `<li>${control}</li>`))

conceptionUl.innerHTML = `
<li><a href="${pdfLink}" target="_blank">Télécharger le PDF du dossier de coneption</a></li>
<li><a href="#figma" target="_blank">Voir le travail de conception sur Figma</a></li>
`
/* <li><a href="https://www.figma.com/file/${figmaId}" target="_blank">Voir les maquettes sur le site de Figma</a></li> */

figmaIframe.src = `https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F${figmaId}`

const youtubeScreenshots = screenshots.filter((s) => !s.startsWith('https://'))
const imagesScreenshots = screenshots.filter((s) => s.startsWith('https://'))

youtubeScreenshots.forEach((youtubeId) => {
  const content = `
<iframe
  width="100%"
  src="https://www.youtube.com/embed/${youtubeId}?loop=1&playlist=${youtubeId}"
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
  scratchMobileWarning.style.setProperty('transform', `scale(${scale})`)

  gameContainer.style.setProperty(
    'height',
    `${gameIframe.clientHeight * scale}px`
  )
}

resize()
window.addEventListener('resize', resize)

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  )
)
  scratchMobileWarning.style.display = 'grid'
