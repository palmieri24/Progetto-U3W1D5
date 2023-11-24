interface Smartphone {
  ricarica(unaRicarica: number): void;
  chiamata(minutiDurata: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class User implements Smartphone {
  private carica: number;
  private numeroChiamate: number;

  constructor() {
    this.carica = 0;
    this.numeroChiamate = 0;
  }

  ricarica(unaRicarica: number): void {
    this.carica += unaRicarica;
  }

  chiamata(minutiDurata: number): void {
    const costoChiamata = minutiDurata * 0.2;
    if (this.carica >= costoChiamata) {
      this.carica -= costoChiamata;
      this.numeroChiamate++;
    } else {
      console.log("Saldo residuo non sufficiente per effettuare la chiamata");
    }
  }

  numero404(): number {
    return this.carica;
  }

  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const FirstUser: Smartphone = new User();
const SecondUser: Smartphone = new User();
const ThirdUser: Smartphone = new User();
//First User
FirstUser.ricarica(20);
FirstUser.chiamata(8);
FirstUser.chiamata(2);
console.log(`Saldo residuo: ${FirstUser.numero404()}€`);
console.log(`Numero di chiamate effettuate: ${FirstUser.getNumeroChiamate()} `);
FirstUser.azzeraChiamate();
console.log(`Numero di chiamate azzerate: ${FirstUser.getNumeroChiamate()} `);
//Second User
SecondUser.ricarica(10);
SecondUser.chiamata(3);
SecondUser.chiamata(4);
console.log(`Saldo residuo: ${SecondUser.numero404()}€`);
console.log(`Numero di chiamate effettuate: ${ThirdUser.getNumeroChiamate()} `);
ThirdUser.azzeraChiamate();
console.log(`Numero di chiamate azzerate: ${ThirdUser.getNumeroChiamate()} `);
//Third User
ThirdUser.ricarica(50);
ThirdUser.chiamata(25);
ThirdUser.chiamata(6);
console.log(`Saldo residuo: ${ThirdUser.numero404()}€`);
console.log(`Numero di chiamate effettuate: ${ThirdUser.getNumeroChiamate()} `);
ThirdUser.azzeraChiamate();
console.log(`Numero di chiamate azzerate: ${ThirdUser.getNumeroChiamate()} `);
