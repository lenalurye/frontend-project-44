#!/usr/bin/env node
import askUser from "../src/cli.js";
console.log("Welcome to the Brain Games!");
let name = askUser("May I have your name? ");
console.log("Hello, " + name + "!");
