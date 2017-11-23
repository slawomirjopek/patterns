var moduleWithPrivate = (function(){
    var privateVar = "privateVar";
    var publicVar = "publicVar";

    var setPrivateVar = function(value) {
        privateVar = value;
    };

    var printPrivateVar = function() {
        console.log(privateVar);
    };

    return {
        set: function(value) {
            setPrivateVar(value)
        },
        print: function() {
            printPrivateVar()
        },
        publicVar: function() {
            return publicVar
        }
    }
})();

var moduleWithPrivateV2 = (function(){
    var object = {};

    var privateVar = "privateVar";
    var publicVar = "publicVar";

    var setPrivateVar = function(value) {
        privateVar = value;
    };

    var printPrivateVar = function() {
        console.log(privateVar);
    };

    object.set = function(value) {
        setPrivateVar(value)
    };

    object.print = function() {
        printPrivateVar()
    };

    object.publicVar = function() {
        return publicVar
    };

    return object;
})();

var moduleWithPrivateV3 = (function(){
    var privateVar = "privateVar";

    var privatePrintFunc = function() {
        console.log(privateVar);
    };

    return {
        printPrivateVar: function() {
            privatePrintFunc();
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