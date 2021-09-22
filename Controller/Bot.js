const puppeteer = require('puppeteer');
const Modules_BD = require('../modules/bd');

exports.BotStart = async (req, res) => {
    try {

        // Criando tabela referente a moeda escolhida
        Modules_BD.query("use fuso_horarios", (err) => {
            if (err) {
                console.log("ERRO : use fuso_horarios : " + err);
            }
            else {
                Modules_BD.query(`create table IF NOT EXISTS ${req.params.money} (valor integer not null,
                    Data date NOT NULL)`, (erro, result) => {
                        if (erro) {
                            console.log(`ERRO : Create table ${req.params.money} : ` + erro);
                        }
                        else {
                            console.log(`Tabela ${req.params.money} crianda com sucesso \n` + result);
                        }
                    })
            }
        })

        const browser = await puppeteer.launch({
            headless: true,
            defaultViewport: null,
            args: ['--start-maximixed']
        });
        const page = await browser.newPage();
        await page.goto('https://economia.uol.com.br/cotacoes/', { waitUntil: 'networkidle0' });

        const form = await page.$('body > section.currency-exchange > section > div > div > div.currency-field1 > div > div > div');
        await page.waitForTimeout(4000);
        await form.evaluate(form => form.click());
        await page.waitForTimeout(4000);
        await page.type("body > section.currency-exchange > section > div > div > div.currency-field1 > div > div > div > div > div > input", `${req.params.money}`);
        await page.waitForTimeout(4000);
        await page.keyboard.press('Enter');
        await page.waitForTimeout(4000);

        const valorA = await page.$eval("body > section.currency-exchange > section > div > div > div.currency-field2 > div > input", el => el.textContent);
        console.log(valorA);

        await page.screenshot({ path: 'example.png' });
        await browser.close();

        res.status(204).json("Executado com sucesso");
    } catch (error) {
        console.log(error);
    }
}