var moduleWithPrivate = (function(){
    var privateVar = "privateVar";
    var publicVar = "publicVar";

    var privateFunction = function() {
        console.log("privateMethod: ", privateVar);
    };

    var publicSetPrivateVar = function(value) {
        privateVar = value;
    };

    var publicPrintPrivateVar = function() {
        console.log(privateVar);
    };

    return {
        set: publicSetPrivateVar,
        print: publicPrintPrivateVar,
        publicVar: publicVar
    }
})();