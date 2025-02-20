const myName = 'Carlos';
const myAge = 22;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(2, 3);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {}
  getSummary() {
    return `My name is ${this.name} and my name age ${this.age}`;
  }
}

const nicolas = new Persona(23, 'Nicolas');
