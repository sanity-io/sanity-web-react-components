export function encodeHTMLEntities(str: string) {
  return str.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
    return '&#' + i.charCodeAt(0) + ';'
  })
}

export function decodeHTMLEntities(str: string) {
  const translate_re = /&(nbsp|amp|quot|lt|gt);/g
  const translate: { [key: string]: string } = {
    nbsp: ' ',
    amp: '&',
    quot: '"',
    lt: '<',
    gt: '>',
  }
  return str
    .replace(translate_re, (_, entity) => {
      return translate[entity]
    })
    .replace(/&#(\d+);/gi, (_, numStr) => {
      var num = parseInt(numStr, 10)
      return String.fromCharCode(num)
    })
}
