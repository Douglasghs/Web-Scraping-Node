const express = require("express");
const app = express();
const port = process.env.PORT || 8081;
const server = require("http").createServer(app);
const puppeteer = require('puppeteer');

const Modules_BD = require('./modules/bd');

app.get("/", async (req, res) =>{
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
        args: ['--start-maximixed']
    });
    const page = await browser.newPage();
    await page.goto('https://www.google.com.br/', {waitUntil: 'networkidle0'});
  
    await page.type("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input", "dolar");
    //const form = await page.$('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b');
    //await form.$eval(form => form.click());

    const cssSelector = await page.evaluate(() => document.cssSelector('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b'))
    const isElement = async (page, cssSelector) =>{
        let visible = true;
        await page
        .waitForSelector(cssSelector, {visible: true, timeout: 2000})
        .catch(() =>{
            visible = false;
        });
        return visible;
    }

    let loadMoreVisible = await isElementVisible(page, cssSelector);
    while(loadMoreVisible){
        await page.click(cssSelector);
        loadMoreVisible = await isElementVisible(page, cssSelector);
    }


    await page.screenshot({ path: 'example.png' });
    await browser.close();
})

server.listen(port, () =>{
    console.log("Servidor rodando na porta :"+ port);
})
