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

var Singleton2 = (function(){
    var Instance = function() {
        if (!(this instanceof Instance)) {
            return new Instance();
        }

        var counter = 0;

        this.increment = function() {
            counter++;
        };

        this.getCounter = function() {
            return counter;
        };
    };

    return Instance();
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

var notSingleton2 = (function(){
    var counter = 0;

    var Instance = function() {
        this.increment = function() {
            counter++;
        };

        this.getCounter = function() {
            return counter;
        };
    };

    return new Instance();
});