// SVG specific helpers

export function encodeSVG(data: string): string {
  const symbols = /[\r\n%#()<>?\[\\\]^`{|}]/g
  // Use single quotes instead of double to avoid encoding.
  data = data.replace(/'/g, '"')

  data = data.replace(/>\s{1,}</g, '><')
  data = data.replace(/\s{2,}/g, ' ')

  return data.replace(symbols, encodeURIComponent)
}

/**
 * @desc Checks if we have a valid svg element
 *
 * @param svg - SVG String
 * @return {boolean} - do we have a valid svg?
 */
export function checkIfValidSVG(svg: string): boolean {
  return svg.includes('<svg') && svg.includes('</svg>')
}

/**
 * @desc Inverts the quotes used in the string passed.
 *
 * @param {string} text - string - most likely an SVG string
 * @param {'single' | 'double'} type - What kind of quotes are we currently using?
 *
 * @return {string} - String with inverted quote types
 */
export function invertQuoteType(text: string, type: 'single' | 'double'): string {
  switch (type) {
    case 'single': {
      return text.replace(/"/g, "'")
    }
    case 'double': {
      return text.replace(/'/g, '"')
    }
    default:
      console.warn(`invalid text type of ${type} passed. returning an empty string.`)
      return ''
  }
}
