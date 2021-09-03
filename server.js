const express = require("express");
const app = express();
const port = process.env.PORT || 8081;
const server = require("http").createServer(app);
const puppeteer = require('puppeteer');

app.get("/", async (req, res) =>{
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('https://pt-br.facebook.com/');
  
    await page.type(id="#email", "lalallalala@facebook.com");
    //await page.click('input[name="btnK"]')

    await page.screenshot({ path: 'example.png' });
    await browser.close();
})

server.listen(port, () =>{
    console.log("Servidor rodando na porta :"+ port);
})