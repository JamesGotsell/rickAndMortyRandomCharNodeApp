#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const fetch = require('node-fetch');

const yargs = require("yargs");

const options = yargs
.usage("Usage: -n <name>")
.option("n", { alias: "name", describe: "Your name", type: "string", demandOption: true })
.argv;


const greeting = chalk.white.bold(`Hello, ${options.name}!`);

console.log(greeting)
 
const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#555555"
};

const msgBox = boxen( greeting, boxenOptions );

const get_data = async () => {

  console.log("Here's a random character from rickandmortyapi :");

  const response = await fetch('https://rickandmortyapi.com/api/character')

  const json = await response.json()
  
  const char_num = json.info.count

  var randomNumber = Math.floor((Math.random() *  char_num));

  const response_char = await fetch(`https://rickandmortyapi.com/api/character/${randomNumber}`)

  const json_char = await response_char.json()

  const msgBox = boxen( json_char.name, boxenOptions );

  console.log(msgBox);
 
}
get_data()
