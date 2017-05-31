function Lib1(opts) {

    console.log('constructor', opts)

    this.name = opts

}

Lib1.prototype.read = function() {
    console.log('read from lib', this.name)
}

Lib1.prototype.write = function() {
    console.log('write from lib', this.name)
}

module.exports = Lib1