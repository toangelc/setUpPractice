import {Google} from './baseGooglePage'
import {Driver} from 'selenium-webdriver/chrome'
const fs = require('fs')
const google = new Google()

test('do a search'), async () => {
    await google.navigate()
    await google.search('Friends')
    let text = await google.getResults()
    expect(text).toContain('Friends')
await fs.writeFile(`${__dirname}/google.png`),
await google.driver.takeScreenshot(), "base64", 
(e) => {
    if (e) console.error(e)
    else console.log('Save Successful')
}
)
fs.writeFile(`${__dirname}/test/txt`, Text, (e) => {
if (e) console.error(e)
else console.log('Save Successful')
})
})
afterAll(async () => {
    await google.driver.quit()
})