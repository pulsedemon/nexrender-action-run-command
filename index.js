const { name } = require('./package.json')
const { spawn } = require("child_process")


module.exports = (job, settings, { command }, type) => {
    return new Promise((resolve, reject) => {
        file = job.output;
        command = command.replace('{file}', file)
        console.log(`running command: \n\t ${command}`)

        command_parts = command.split(' ')
        command = spawn(command_parts[0], command_parts.slice(1));

        command.on('close', (code, signal) => {
            resolve(job)
        });

        command.stdout.setEncoding('utf8');
        command.stdout.on('data', function(data) {
            console.log('action-run-command: ' + data);
        });

        command.stderr.setEncoding('utf8');
        command.stderr.on('data', function(data) {
            console.error("Error: ", data);
            return reject(new Error(data));
        });
    });
}
