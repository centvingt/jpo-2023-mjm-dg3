import { games } from './data.js'

const container = document.querySelector('.gallery')

const getInnerHtml = (game) => `
<div>
    <iframe
        width="100%"
        src="https://www.youtube.com/embed/${game.youtube}"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
    </iframe>
    <a href="./game.html?id=${game.scratch}" class="link-to-game"><span>Tester le prototype</span></a>
</div>
`

games.forEach((game) => {
  container.innerHTML += getInnerHtml(game)
})
