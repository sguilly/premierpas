var fs = require('fs')

var access = function(path) {

    return new Promise(function(resolve, reject) {
        fs.access(path, function(err_access) {

            if (err_access) {
                reject()
            } else {
                resolve()
            }
        })
    })
}

var read = function(path) {

    return new Promise(function(resolve, err) {
        fs.readFile(path, 'utf8', function(err_read, data) {
            if (err_read) {
                err('impossible de lire ' + path);
            }
            resolve('done ' + path)
        });
    })
}


// read('/storage/tmp/test1.jpg')
//     .then(function(data) {
//         console.log(data)
//     })
//     .catch(function(err) {
//         console.log('err', err)
//     })


// read('file.js')
//     .then(function(data) {
//         console.log('done file')
//     })
//     .catch(function(err) {
//         console.log('err', err)
//     })

// Promise.all([read('/storage/tmp/test1.jpg'), read('file.js')]).then(function(values) {

//         console.log('1->', values[0])
//         console.log('2->', values[1])

//     })
//     .catch(function(err) {
//         console.log('err', err)
//     })


var co = require('co')

co(function*() {

    var test = yield read('/storage/tmp/test.jpg')

    console.log('test=', test)

    var file1 = yield read('file.js')

    console.log('file1=', file1)

}).catch(function(err) {
    console.log('err', err)
})