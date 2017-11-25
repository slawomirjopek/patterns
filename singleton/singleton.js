var Singleton = (function(){
    var instance;

    function initialize() {
        var _privateCounter = 0;

        var _privateIncrement = function() {
            _privateCounter++;
        };

        return {
            increment: function() {
                _privateIncrement();
            },
            getCounter: function() {
                return _privateCounter;
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
        var _privateCounter = 0;

        var _privateIncrement = function() {
            _privateCounter++;
        };

        return {
            increment: function() {
                _privateIncrement();
            },
            getCounter: function() {
                return _privateCounter;
            }
        }
    }

    return  {
        getInstance: function() {
            return instance = initialize();
        }
    }
})();