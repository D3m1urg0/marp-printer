import { readFileSync, writeFileSync } from "fs";
import { compileFile } from "pug";
import moment from "moment";

// Leggi il file JSON
const data = JSON.parse(readFileSync("./src/data/data.json", "utf-8"));

data.moment = moment;
// Compila il template con Pug
const compiledTemplate = compileFile("./src/template/template.pug");

// Sostituisci le variabili nel template con i dati del file JSON
const output = compiledTemplate(data);

// Scrivi il risultato in un nuovo file markdown
writeFileSync("./src/slides/scheda.md", output);
