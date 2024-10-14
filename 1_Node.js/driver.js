// const { write, read } = require('fs');
// const { appendFile } = require('fs');
const fs = require('fs/promises')
// const path = '1_Node.js/sample.txt'

const path = require('path');
// Use __dirname to resolve the correct path dynamically
const filePath = path.join(__dirname, 'sample.txt');

async function readSampleFile(){
    try{
        const data = await fs.readFile(filePath, 'utf-8');
        console.log(data);
    }catch(error){
        console.log("Error in handling the file: "+error);
    }
}

async function writeSampleFile(){
    const data = await fs.writeFile(filePath, 'Hello there, my name is Vinay');
}

async function apppendSampleFile(){
    await fs.appendFile(filePath, ', Vinay Duryodhan')
}

writeSampleFile()
apppendSampleFile()
readSampleFile()