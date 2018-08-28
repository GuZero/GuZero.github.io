Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
}

var fade = function (node) {
    var level = 1;
    var step = function () {
        var hex = level.toString(16);
        node.style.backgroundColor = '#ffff' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100)
        }
    }
    setTimeout(step, 100);
}
String.method('deentityify', function () {
    var entity = {
        quot: '"',
        lt: '<',
        gt: '>',
    }
    return function () {
        return this.replace(/&([^&;]+);/g, function (a, b) {
            console.log(a, 'a');
            console.log(b);
            var r = entity[b];
            return typeof r === 'string' ? r : a;
        })
    }
}())

var fibonacci = function () {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    }
    return fib
}();
for (let i = 0; i < 10; i++) {
    document.writeln(fibonacci(i))
}

if (typeof Object.beget !== 'function') {
    Object.beget = function (o) {
        var f = function () {};
        f.prototype = o;
        return new f();
    }
}

var is_array = function (value) {
    return value && typeof value === 'object' && typeof value.length === 'number' && typeof value.splice === 'function' && !(value.propertyIsEnumerable('length'))
}
var is_array_1=function(value){
    return Object.prototype.toString.call(value)==='[object Array]';
}

Array.method('_push',function(){
    console.log(this);
    this.splice.apply(this,[this.length,0].concat(Array.prototype.slice.apply(arguments)))
    return this.length;
})
var arr=[1,2,3];
arr._push(4)
console.log(arr)