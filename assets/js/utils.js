/**
 * @param  {string} string
 */
const splitString = (string) => string.split('\n')

/**
 * @param  {string} link
 */
const getIdFromYouTubeLink = (link) => link.split('/').slice(-1)[0]

export { splitString, getIdFromYouTubeLink }
