var User = /** @class */ (function () {
    function User() {
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    User.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    User.prototype.chiamata = function (minutiDurata) {
        var costoChiamata = minutiDurata * 0.2;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else {
            console.log("Saldo residuo non sufficiente per effettuare la chiamata");
        }
    };
    User.prototype.numero404 = function () {
        return this.carica;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var FirstUser = new User();
var SecondUser = new User();
var ThirdUser = new User();
//First User
FirstUser.ricarica(20);
FirstUser.chiamata(8);
FirstUser.chiamata(2);
console.log("Saldo residuo: ".concat(FirstUser.numero404(), "\u20AC"));
console.log("Numero di chiamate effettuate: ".concat(FirstUser.getNumeroChiamate(), " "));
FirstUser.azzeraChiamate();
console.log("Numero di chiamate azzerate: ".concat(FirstUser.getNumeroChiamate(), " "));
//Second User
SecondUser.ricarica(10);
SecondUser.chiamata(3);
SecondUser.chiamata(4);
console.log("Saldo residuo: ".concat(SecondUser.numero404(), "\u20AC"));
console.log("Numero di chiamate effettuate: ".concat(ThirdUser.getNumeroChiamate(), " "));
ThirdUser.azzeraChiamate();
console.log("Numero di chiamate azzerate: ".concat(ThirdUser.getNumeroChiamate(), " "));
//Third User
ThirdUser.ricarica(50);
ThirdUser.chiamata(25);
ThirdUser.chiamata(6);
console.log("Saldo residuo: ".concat(ThirdUser.numero404(), "\u20AC"));
console.log("Numero di chiamate effettuate: ".concat(ThirdUser.getNumeroChiamate(), " "));
ThirdUser.azzeraChiamate();
console.log("Numero di chiamate azzerate: ".concat(ThirdUser.getNumeroChiamate(), " "));
