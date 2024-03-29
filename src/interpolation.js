import { readFileSync, writeFileSync } from "fs";
import template from "./template/scheda.js";
import moment from "moment";
import { exec as execCb } from "node:child_process";
import { promisify } from "node:util";

const exec = promisify(execCb);
// Leggi il file JSON
const data = JSON.parse(readFileSync("./src/data/data.json", "utf-8"));

// Sostituisci le variabili nel template con i dati del file JSON
const output = template(data);

// Scrivi il risultato in un nuovo file markdown
writeFileSync("./src/slides/scheda.md", output);

// Convertilo in HTML
exec("yarn marp", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

// Convertilo in PDF
exec("yarn marp --pdf", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
