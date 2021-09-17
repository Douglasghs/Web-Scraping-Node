const puppeteer = require('puppeteer');
//const Modules_BD = require('./modules/bd');

exports.BotStart = async (req, res) =>{
    const browser = await puppeteer.launch({
        headless: true,
        defaultViewport: null,
        args: ['--start-maximixed']
    });
    const page = await browser.newPage();
    await page.goto('https://www.google.com.br/', {waitUntil: 'networkidle0'});
  
    await page.type("body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input", `${req.params.money}`);
    const form = await page.$('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b');
    await form.evaluate(form => form.click());

    await page.screenshot({ path: 'example.png' });
    await browser.close();
    
    res.status(204).json("Executado com sucesso");
}