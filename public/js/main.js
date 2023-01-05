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

// class objet {
//     constructor(nom, prix) {
//         this.nom = nom;
//         this.prix = prix;
//     }
// }

// let stylo = new objet("stylo", 500)
// let bic = new objet("bic", 300)

// let boite = [bic, stylo]

// class personnage {
//     constructor(nom, sac, argent) {
//         this.nom = nom;
//         this.sac = sac;
//         this.argent = argent;
//     }

   // prendre(objet) {
        //this.sac.push(objet); ma ligne

    //     this.sac.push(objet)
    //     this.argent -= objet.prix;
    // }

   // acheter(vendeur, objet) {
        // if (this.argent >= objet.prix) {                                                                 {mes lignes}
        //     this.sac.push(objet);
        //     this.argent -= objet.prix;
        //     vendeur.argent += objet.prix;
        // } else {
        //     console.log(`${this.nom} n'a pas assez d'argent pour acheter ${objet.nom}.`);
        // }
       // this.sac.push(vendeur.sac);                      lignes prof
        //this.argent -= objet.prix;
    //}


//}

// let Shahin = new personnage("Shahin", [], 4000)             mes lignes
// let vendeur = new personnage("vendeur", [], 1000)

// Shahin.prendre(boite[0])
// vendeur.prendre(boite[1])
// console.log(vendeur.sac);

// Shahin.acheter(vendeur,stylo)
// console.log(Shahin.sac);

// Shahin.prendre(bic);                              lignes caoch
// vendeur.prendre(stylo);               

// console.log('Shahin');
// console.log(Shahin.sac);
// console.log(Shahin.argent);

// console.log('vendeur');
// console.log(vendeur.sac);
// console.log(vendeur.argent);

// Shahin.acheter(vendeur, stylo);
// console.log('apres achat');




//EXO 05/01/23

// class lieu {
//     constructor(nom, personnes){
//         this.nom = nom;
//         this.personnes = personnes;
//     }
// }

// let molengeek = new lieu ("Molengeek",[])
// let snack = new lieu ("Snack",[])
// let maison = new lieu ("Maison",[])


// class Personne {
//     constructor(nom, prenom, argent){
//         this.nom = nom;
//         this.prenom = prenom;
//         this.argent = argent;
//     }

//     seDeplacer(lieu, bus){
//             bus.embarquer(this);
//             lieu.personnes.push(this);
//             bus.personne.splice(bus.personne.indexOf(this),1);
//     }
// }

// let shahin = new Personne("alemzadeh", "shahin", 200)

// class Bus {
//     constructor(personne, caisse){
//         this.personne = personne;
//         this.caisse = caisse;
        
//     }

//     embarquer(Shahin){
//             if (Shahin.argent >= prixBus) {

                
//                 Shahin.argent -= prixBus;
//                 this.caisse += prixBus;
//                 this.personne.push(Shahin);
                
//             } 
//             else {
//                 console.log(`${Shahin} n'a pas assez d'argent.`)
//             }
//     }
// }

// let bus = new Bus([], 0)
// let prixBus = 2.80

// shahin.seDeplacer(molengeek,bus)
// console.log(shahin.argent);
// console.log(bus.caisse);
// console.log(molengeek);

// shahin.seDeplacer(snack, bus)
// console.log(snack);

// molengeek.personnes.push(shahin)

// snack.personnes.splice(snack.personnes.indexOf(shahin),1);
// console.log(molengeek);
// shahin.seDeplacer(maison,bus);
// console.log(maison);
// console.log(bus.caisse.toFixed(2));


