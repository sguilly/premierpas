var fs = require('fs')

fs.access('/storage/tmp/test.jpg', function(err_access) {
    if (!err_access) {
        console.log('le fichier existe')
        fs.readFile('/storage/tmp/test.jpg', 'utf8', function(err_read, data) {
            if (err_read) {
                return console.log(err_read);
            }
            console.log('done image');

            fs.access('file.js', function(err_access) {
                if (!err_access) {
                    console.log('le fichier existe')
                    fs.readFile('file.js', 'utf8', function(err_read, data) {
                        if (err_read) {
                            return console.log(err_read);
                        }
                        console.log('done file');
                    });
                } else {
                    console.log('le fichier n\'existe pas')
                }
            });
        });
    } else {
        console.log('le fichier n\'existe pas')
    }
});