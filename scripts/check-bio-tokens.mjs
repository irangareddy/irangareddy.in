import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { intro } from '../src/content.js'

const data = JSON.parse(readFileSync(new URL('../src/bio-tokens.json', import.meta.url), 'utf8'))
const source = intro.map(paragraph => paragraph.map(part => part.text).join('')).join('\n\n')
assert.equal(data.source, source, 'Bio changed: run npm run tokenize:bio to regenerate GPT tokens.')
assert.equal(data.tokens.map(token => token.text).join(''), source)
let offset = 0
for (const token of data.tokens) {
  assert.equal(token.start, offset)
  assert.equal(token.end, offset + token.text.length)
  assert.equal(source.slice(token.start, token.end), token.text)
  offset = token.end
}
console.log(`Verified ${data.tokens.length} ${data.encoding} bio tokens.`)
