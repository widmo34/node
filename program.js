// here I include ans os module 
var os = require('os');

console.log(os.EOL);




process.stdin.on('readable', function() {
// metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
        var input = process.stdin.read();
        if (input !== null) {
            var instruction = input.toString().trim();
            if (instruction === '/exit') {
                process.stdout.write('Quitting app!\n');
                console.log('your os language is ' +  process.env['lang'] + '/n/n');
                console.log('your node version is ' + process.versions['node'] + '/n/n/n');
                process.exit();
        } else {
            process.stderr.write('Wrong instruction!\n');
        }
    }
});


