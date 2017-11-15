function Subject() {
    var observerList = [];

    var add = function(object) {
        object.id = observerList.length;
        observerList.push(object);
    };

    var remove = function(object) {
        delete object.id;
        observerList.splice(object.id, 1);
    };

    this.observerAdd = function(object) {
        add(object);
    };

    this.observerRemove = function(object) {
        remove(object);
    };

    this.emit = function(data) {
        for (var i = 0; i < observerList.length; i++) {
            observerList[i].printData(data);
        }
    }
}

function printData(someData) {
    console.log(this, "received data: ", someData);
}