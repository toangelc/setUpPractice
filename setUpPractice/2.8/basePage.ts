import {Builder, By, Capabilities, until, WebDriver, WebElement} from 'selenium-webdriver'
import { getSyntheticLeadingComments, getTextOfJSDocComment } from 'typescript';
const chromedriver = require('chromedriver')

interface option {
    driver?: WebDriver;
    url?: string;
}

export class BasePage {
driver: WebDriverurl: string

constructor(options?: Options) {
    if(options && options.driver) this.driver = options.driverelse
    this.driver = new Builder().withCapabilities
    if(options && options.url) this.url = options.url
}

}

async navigate(url?: string): Promise<void> {
    if (url) return await this.driver.get(url)
    else if (this.url) return await this this.driver.get(this.url)
    else return Promise.reject('You need a url to visit the page please add one in the')

}

async getElement(elementBy: By): Promise<WebElement> {
await this.driver.wait(until.elementLocated(elementBy))
let element = await this.driver.findElement.(elementBy)
await this.driver.wait(until.elementIsVisible(element))
return element
}

async click(elementBy: By): promise<void> {
    return(await this.getElement(elementBy)).click()
}
async setInput(elementBy:By, keys: any): Promise<void> {
    let input = await this.getElement(elementBy)
    await input.clear()
    return input.sendKeys(keys)
}

async getText(elementBy: By): Promise<string> {
    return (await this.getElement(elementBy)).getText()
}

async getAttribute(elementBy: By, attribute: string) {
    return (await this.getElement(elementBy)).getAttribute(attribute)
}
