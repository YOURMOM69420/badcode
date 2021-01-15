module.exports = {
    name: 'linusmath',
    description: 'math',
    execute(message, args) {
        let method = args[0];
        let firstNumber = Number(args[1]);
        let secondNumber = Number(args[2]);
        const operations = ['add', 'subtract', 'multiply', 'divide'];


        if (!method) return message.reply('please provide a operation!');

        if (!operations.includes(method)) return message.reply('when chossing an operation choose add subtract multiply or divide!');
        
        if (!args[1]) return message.reply('please state two numbers!');

        if (!args[2]) return message.reply('please state a number!');

        if (isNaN(firstNumber)) return message.reply('the first number you stated is not a number!');

        if (isNaN(secondNumber)) return message.reply('the second number you stated is not a number!');

        if (method === 'add') {
            let doMath = firstNumber + secondNumber
            message.channel.send(`${firstNumber} + ${secondNumber} = ${doMath}`);
        }

        if (method === 'subtract') {
            let doMath = firstNumber - secondNumber
            message.channel.send(`${firstNumber} - ${secondNumber} = ${doMath}`);
        }

        if (method === 'multiply') {
            let doMath = firstNumber * secondNumber
            message.channel.send(`${firstNumber} × ${secondNumber} = ${doMath}`);
        }

        if (method === 'divide') {
            let doMath = firstNumber / secondNumber
            message.channel.send(`${firstNumber} ÷ ${secondNumber} = ${doMath}`);
        }
    }
}