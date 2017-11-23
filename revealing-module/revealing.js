var moduleWithPrivate = (function(){
    var _privateVar = "privateVar";
    var publicVar = "publicVar";

    var publicSetPrivateVar = function(value) {
        _privateVar = value;
    };

    var publicPrintPrivateVar = function() {
        console.log(_privateVar);
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