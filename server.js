const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const server = require("http").createServer(app);
const puppeteer = require('puppeteer');

app.get("/", async (req, res) =>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com.br/');
  
    await page.$$eval('input[name="q"]', el => el.value = "Youtube");
    //await page.click('input[name="btnK"]')

    await page.screenshot({ path: 'example.png' });
    await browser.close();
})

server.listen(port, () =>{
    console.log("Servidor rodando na porta :"+ port);
})