class Lib2 {

    constructor(opts) {
        this.name = opts
    }

    read() {
        console.log('read from lib', this.name)
    }
}

module.exports = Lib2