console.log("************** DELIVERABLE 05 *********************");

// Slot Machine

class SlotMachine {

    constructor() {
        this.coinCounter = 0;
    }

    play() {
        this.coinCounter++;
        (this.randomBoolean() && this.randomBoolean() && this.randomBoolean()) === true ?
         console.log("Congratulations!!!. You won " + this.coinCounter + " coins!!") : 
         console.log("Good luck next time!!");
    }

    randomBoolean() {
        return Math.random() >= 0.5;
    }
    
}

const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
