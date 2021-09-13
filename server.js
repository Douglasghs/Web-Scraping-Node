const express = require("express");
const app = express();
const port = process.env.PORT || 8081;
const server = require("http").createServer(app);
const puppeteer = require('puppeteer');

app.get("/", async (req, res) =>{
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
        args: ['--start-maximixed']
    });
    const page = await browser.newPage();
    await page.goto('https://www.google.com.br/', {waitUntil: 'networkidle0'});
  
    await page.type("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input", "dolar");
    await page.click("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b");
    
    await page.screenshot({ path: 'example.png' });
    await browser.close();
})

server.listen(port, () =>{
    console.log("Servidor rodando na porta :"+ port);
})