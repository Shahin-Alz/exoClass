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

// class lieux {
//     constructor(nom, contenu, ingrédient) {
//         this.nom = nom;
//         this.contenu = contenu;
//         this.ingrédient = ingrédient;
//     }
//     seDeplacer(){
//         console.log(`Je vais a ${this.lieux}`);
//     }
// }

// let maison = new lieux("maison",[])
// let epicerie = new lieux("epicerie",[],[])
// let cuisine = new lieux ("cuisine", [], {})

// class ingrédients {
//     constructor(nom, etat, prix) {
//         this.nom = nom;
//         this.etat = etat;
//         this.prix = prix;
//     }

//     payer(){
//         console.log(`Je vais payer ${this.prix}`);
//     }
// }

// let poivron = new ingrédients("poivron","entier",1)
// let oignon = new ingrédients("poivron","entier",2)
// let oeuf = new ingrédients("poivron","entier",4)
// let epice = new ingrédients("poivron","moulu",3.25)
// let paprika = new ingrédients("poivron","moulu",1.5)
// let fromage = new ingrédients("poivron","coupé",1.6)



// class Personne {
//     constructor(nom, lieu,argent,panier){
//         this.nom = nom;
//         this.lieu = lieu;
//         this.argent = argent;
//         this.panier = panier;
//     }

//     console.log(``);

//     }

// let personnage = new Personne("maxime", "néant", 100, [])



// EXO3

class objet {
    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
}

let stylo = new objet("stylo", 5)
let bic = new objet("bic", 3)

let boite = [bic, stylo]

class personnage {
    constructor(nom, sac, argent) {
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
    }

    prendre(objet) {
        this.sac.push(objet);
        //console.log(this.sac);
    }

    acheter(vendeur, objet) {
        if (this.argent >= objet.prix) {
            this.sac.push(objet);
            this.argent -= objet.prix;
            vendeur.argent += objet.prix;
        } else {
            console.log(`${this.nom} n'a pas assez d'argent pour acheter ${objet.nom}.`);
        }

    }

   // console.log(`j'achete un ${boite} a ${vendeur}`);
}

let Shahin = new personnage("Shahin", [], 4000)
let vendeur = new personnage("vendeur", [], 1000)

Shahin.prendre(boite[0])
vendeur.prendre(boite[1])
console.log(vendeur.sac);

Shahin.acheter(vendeur,stylo)
console.log(Shahin.sac);