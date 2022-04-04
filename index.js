const { name } = require('./package.json')
const { spawn } = require("child_process")


module.exports = (job, settings, { command }, type) => {
    if (type == 'postrender') {
        const file = job.output;
        command = command.replace('{file}', file)
    } else if (command.includes('{file}')) {
        const errorMessage = `'{file}' can only be passed to ${name} in postrender mode, you provided: ${type}.`;
        console.error("Error: ", errorMessage);
        throw new Error(errorMessage)
    }

    console.log(`running command: \n\t ${command}`)

    return new Promise((resolve, reject) => {
        const commandParts = command.split(' ')
        command = spawn(commandParts[0], commandParts.slice(1));

        command.on('close', (code, signal) => {
            resolve(job)
        });

        command.stdout.setEncoding('utf8');
        command.stdout.on('data', function (data) {
            console.log('action-run-command: ' + data);
        });

        command.stderr.setEncoding('utf8');
        command.stderr.on('data', function (data) {
            console.error("Error: ", data);
            return reject(new Error(data));
        });
    });
}
