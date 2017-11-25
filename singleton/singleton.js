var Singleton = (function(){
    var instance;

    function initialize() {
        var _privateVariable = "Private variable";

        var _privateMethod = function() {
            console.log("Private method, ", _privateVariable)
        };

        return {
            publicProperty: "Public property",
            publicMethod: function() {
                _privateMethod()
            }
        }
    }

    return  {
        getInstance: function() {
            if (!instance) {
                instance = initialize();
            }

            return instance;
        }
    }
})();

var notSingleton = (function(){
    var instance;

    function initialize() {
        // ...

        return {
            data: "data..."
        }
    }

    return  {
        getInstance: function() {
            return instance = initialize();
        }
    }
})();