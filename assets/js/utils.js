/**
 * @param  {string} string
 */
const splitString = (string) => string.split('\n')

/**
 * @param  {string} link
 */
const getIdFromYouTubeLink = (link) => link.split('/').slice(-1)[0]

const getIdFromUrlParams = () => {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  return urlParams.get('id')
}

/**
 * @param  {[string]} authors
 * @returns {string}
 */
const getAuthorsHtmlContent = (authors) => {
  let htmlContent = 'Par '

  authors.forEach((author, i) => {
    if (i === 0)
      htmlContent += `<strong>${author}${
        authors.length > 2 ? ',' : ''
      }</strong>`
    else if (i < authors.length - 1 && i !== authors.length - 1)
      htmlContent += ` <strong>${author}${
        authors.length > 3 ? ',' : ''
      }</strong>`
    else htmlContent += ` et <strong>${author}</strong>`
  })

  return htmlContent
}

export {
  splitString,
  getIdFromYouTubeLink,
  getIdFromUrlParams,
  getAuthorsHtmlContent,
}
