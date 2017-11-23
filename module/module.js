var moduleWithPrivate = (function(){
    var _privateVar = "privateVar";
    var publicVar = "publicVar";

    var _setPrivateVar = function(value) {
        _privateVar = value;
    };

    var _printPrivateVar = function() {
        console.log(_privateVar);
    };

    return {
        set: function(value) {
            _setPrivateVar(value)
        },
        print: function() {
            _printPrivateVar()
        },
        publicVar: function() {
            return publicVar
        }
    }
})();

var moduleWithPrivateV2 = (function(){
    var object = {};

    var _privateVar = "privateVar";
    var publicVar = "publicVar";

    var _setPrivateVar = function(value) {
        _privateVar = value;
    };

    var _printPrivateVar = function() {
        console.log(_privateVar);
    };

    object.set = function(value) {
        _setPrivateVar(value)
    };

    object.print = function() {
        _printPrivateVar()
    };

    object.publicVar = function() {
        return publicVar
    };

    return object;
})();

var moduleWithPrivateV3 = (function(){
    var _privateVar = "privateVar";

    var _privatePrintFunc = function() {
        console.log(_privateVar);
    };

    return {
        printPrivateVar: function() {
            _privatePrintFunc();
        },
        printPublicFunc: function() {
            printPrivateVar();  // error! this refers to object literal not function
        },
        printPublicFuncV2: function() {
            this.printPrivateVar();
            moduleWithPrivateV3.printPrivateVar();
        }
    }
})();