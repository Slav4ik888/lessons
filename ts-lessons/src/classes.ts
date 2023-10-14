
class Animal {
  protected voice: string = ``;
  public color: string = `black`;
  public name: string;

  constructor(name: string) {
    this.name = name;
    this.go();
  }

  private go() {
    console.log(`Go`);
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat(`Musysa`);

// ====== Abstruct

abstract class Comp {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Comp {

  render(): void {
    console.log(`On Render`);
  }
  info(): string {
    console.log(`Info`);
    return `Info`
  }
}