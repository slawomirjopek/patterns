var moduleWithPrivate = (function(){
    var privateVar = "privateVar";
    var publicVar = "publicVar";

    var publicSetPrivateVar = function(value) {
        privateVar = value;
    };

    var publicPrintPrivateVar = function() {
        console.log(privateVar);
    };

    var printPublicFunc = function() {
        publicPrintPrivateVar();
    };

    return {
        set: publicSetPrivateVar,
        print: publicPrintPrivateVar,
        printPublicFunc: printPublicFunc,
        publicVar: publicVar
    }
})();