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
FirstUser.ricarica(20);
FirstUser.chiamata(8);
FirstUser.chiamata(2);
console.log("Saldo residuo: ".concat(FirstUser.numero404(), "\u20AC"));
console.log("Numero di chiamate effettuate: ".concat(FirstUser.getNumeroChiamate(), " "));
FirstUser.azzeraChiamate();
console.log("Numero di chiamate azzerate: ".concat(FirstUser.getNumeroChiamate(), " "));
