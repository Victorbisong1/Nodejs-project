const generator = require('generate-password');

function generateMyPassword() {
    const password = generator.generate({
        length: 10,
        numbers: true,
        symbols: true
    });
    console.log('Generated Password:', password);
}

generateMyPassword();