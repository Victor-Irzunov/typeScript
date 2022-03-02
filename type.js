// string
var str = "Фродо Бэггинс";
// number
var age = 18;
// boolean
var hasRing = true;
var id = Symbol();
// undefined, null или boolean
var isSauronAlive = undefined;
isSauronAlive = null;
isSauronAlive = false;
// array
var friends = ["Гэндальф", "Сэм", "Мерри", "Пиппин"];
var enemies = ["Саурон", "Саруман"];
var sam = {
    fullName: "Сэмуайз Гэмджи",
    address: "Шир",
    age: 17
};
var pippin = {
    fullName: "Перегрин Тук",
    address: "Шир",
    age: 17
};
var gandalf = {
    fullName: "Гэндальф Серый",
    address: "Валинор"
};
var MapsService = /** @class */ (function () {
    function MapsService() {
    }
    MapsService.prototype.addMarker = function (latitude, longitude) {
        // Здесь какая-то реализация добавления
        // маркера на карту.
    };
    return MapsService;
}());
// Generic
//
// Описать тип для функции echo
// с помощью дженериков.
var echo = function (data) {
    return data;
};
var echoOutput = echo(42);
// Описать типы для функции myOwnMap
// с помощью дженериков.
// Типы в дженериках должны сами "подхватиться"
// на лету.
// В данном примере перменная myOwnMapOutput
// должна иметь тип 'string[]'.
function myOwnMap(data, callback) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
        result.push(callback(data[i]));
    }
    return result;
}
var myOwnMapOutput = myOwnMap([1, 2, 3], function (item) { return item.toString(); });
