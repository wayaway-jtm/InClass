class Mammal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.givesLiveBirth = true;
        this.isWarmBlooded = true;
    }
}

class FelisCatus extends Mammal {
    constructor(name, age) {
        super(name, age);
        this.eyes = 2;
        this.legs = 4;
        this.hasRetractableClaws = true;
        this.clawsExtended = true;
    }

    speak() { console.log("Meow"); }
    breathe() { console.log("<breathing sounds>"); }
    engageBattleMode() { this.clawsExtended = true; }
    standDown() { this.clawsExtended = false; }
    getPet() {
        if (Math.round(Math.random()) === 0)
        {
            console.log("Hiss");
            this.engageBattleMode();
        } else {
            console.log("Purr");
            this.standDown();
        }
    }
}

class Platypus extends Mammal {
    constructor(name, age) {
        super(name, age);
        this.givesLiveBirth = false;
    }
}