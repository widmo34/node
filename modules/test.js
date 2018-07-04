process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        if (instruction) {
            process.stdout.write('Quitting app!\n');
            process.stdout.write(instruction);
            process.exit();
        } else {
            process.stdout.write('Wrong instruction!\n');
        }
    }
});