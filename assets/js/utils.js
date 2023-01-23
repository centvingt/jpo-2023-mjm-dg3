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

export { splitString, getIdFromYouTubeLink, getIdFromUrlParams }
