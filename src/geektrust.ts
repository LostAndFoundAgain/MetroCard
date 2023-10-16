import fs = require("fs")

const inputFilePath = process.argv[2] || 'sample_input/input1.txt'

fs.readFile(inputFilePath, "utf8", (err, data) => {
    if (err) throw err
    const inputLines = data.toString().split("\n")
    // Add your code here to process input commands
    inputLines.forEach(line => {
        const commands = line.split(" ");
        const typeOfCommand = commands[0];
        switch (typeOfCommand) {
            case "BALANCE": 
        }
        console.log(commands[0] + " " + commands[1]  + " " + commands[2])
    })

})
