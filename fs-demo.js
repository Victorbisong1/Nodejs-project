const fs = require('fs');

// 1. Create and write to "welcome.txt"
fs.writeFileSync('welcome.txt', 'Hello Node');
console.log('welcome.txt created!');

// 2. Read from "hello.txt" (Make sure a file named hello.txt exists in your folder!)
fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err.message);
        return;
    }
    console.log('Data from hello.txt:', data);
});