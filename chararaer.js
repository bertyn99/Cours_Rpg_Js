class Character {
    constructor(name, hpMax, atk, magicAtk, def, res) {
        this.name = name;
        this.hp = hpMax;
        this.hpMax = hpMax;
        this.atk = atk;
        this.magicAtk = magicAtk
        this.def = def;
        this.res = res;
        this.weapon = null;
        this.aarmor = null;
        this.defending = false;

    }

    attack(otherCharacter) {
        this.defending = false
        let damage = Math.max(0, this.atk + this.weapon.atk - otherCharacter.def)
        damage = otherCharacter.defending ? damage / 2 : damage;
        otherCharacter.hp -= damage;
    }

    defend() {
        this.defending = true
    }

    drinkPotion(tailleP) {
        if (tailleP == "big") {
            this.hp += 500
        } else if (tailleP == "medium") {
            this.hp += 350
        } else {
            this.hp += 250
        }
        this.defending = false
    }


}

class Warrior extends Character {
    constructor() {
        this.powerMultiplicator = 1.1;
    }

    powerAttack() {

        let random = Math.random()
        this.atk = random == 1 ? this.atk * this.powerMultiplicator : this.atk
    }
}

class Mage extends Character {
    constructor(accuracy) {
        this.accuracy = accuracy
    }
    MagicAttack() {

    }

}