import { games } from './data.js'
/** @typedef {import('./data.js').Game} Game */

const container = document.querySelector('.gallery')

/**
 * @param  {Game} game
 */
const getInnerHtml = (game) => `
<div>
    <iframe
        width="100%"
        src="https://www.youtube.com/embed/${game.youtubeId}?loop=1&playlist=${game.youtubeId}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
    </iframe>
    <a href="./game.html?id=${game.scratchId}" class="link-to-game"><span>Tester le prototype</span></a>
</div>
`

games.forEach((game) => {
  container.innerHTML += getInnerHtml(game)
})
