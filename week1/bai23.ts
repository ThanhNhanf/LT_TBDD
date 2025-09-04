interface Payment {
  pay(amount: number): void;
}

class CashPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paying ${amount} by cash`);
  }
}

class CardPayment implements Payment {
  pay(amount: number): void {
    console.log(`Paying ${amount} by card`);
  }
}

new CashPayment().pay(100);
new CardPayment().pay(200);