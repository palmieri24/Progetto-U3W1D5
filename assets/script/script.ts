interface Smartphone {
  userName: string;
  ricarica(unaRicarica: number): void;
  chiamata(minutiDurata: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class User implements Smartphone {
  userName: string;
  private carica: number;
  private numeroChiamate: number;

  constructor(_userName: string) {
    this.carica = 0;
    this.numeroChiamate = 0;
    this.userName = _userName;
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

const FirstUser: Smartphone = new User("Alessia");
const SecondUser: Smartphone = new User("Mauro");
const ThirdUser: Smartphone = new User("Lucia");
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

const divMain = document.querySelector(".divMain") as HTMLBodyElement;
const h1 = document.querySelector(".greet") as HTMLBodyElement;
h1.innerText = `Ciao ${FirstUser.userName} !`;

divMain!.appendChild(h1);

const divSaldo = document.querySelector(".saldo") as HTMLBodyElement;
const pSaldo = document.querySelector(".saldo > p") as HTMLBodyElement;
pSaldo.innerText = `Saldo residuo ${FirstUser.numero404()}€`;

divSaldo!.appendChild(pSaldo);

const btnRicarica = document.querySelector(".btnRicarica") as HTMLButtonElement;
