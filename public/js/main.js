//EXO1


// class personnage {
//     constructor(age, nom, ville){
//         this.age = age 
//         this.nom = nom
//         this.ville = ville
//     }

//     sePresenter(){
//         console.log(`Bonjour je m'appel ${this.nom}`);
//     }


// }

// let Shahin = new personnage(22, "Shahin","Bxl")
// Shahin.sePresenter()

// let Gia = new personnage(24, "Gianni", "Ath")
// Gia.sePresenter()

//EXO2

class lieux {
    constructor(nom, contenu, ingrédient) {
        this.nom = nom;
        this.contenu = contenu;
        this.ingrédient = ingrédient;
    }
    seDeplacer(){
        console.log(`Je vais a ${this.lieux}`);
    }
}

let maison = new lieux("maison",[])
let epicerie = new lieux("epicerie",[],[])
let cuisine = new lieux ("cuisine", [], {})

class ingrédients {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }

    payer(){
        console.log(`Je vais payer ${this.prix}`);
    }
}

let poivron = new ingrédients("poivron","entier",1)
let oignon = new ingrédients("poivron","entier",2)
let oeuf = new ingrédients("poivron","entier",4)
let epice = new ingrédients("poivron","moulu",3.25)
let paprika = new ingrédients("poivron","moulu",1.5)
let fromage = new ingrédients("poivron","coupé",1.6)



class Personne {
    constructor(nom, lieu,argent,panier){
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.panier = panier;
    }

    }

let personnage = new Personne("maxime", "néant", 100, [])

