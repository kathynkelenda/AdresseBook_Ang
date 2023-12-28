# AdressBook/Angular Material prise en main
1. go to material.angular.io,
2. click on get started,
3. used this command to install it ion vs code: ng add @angular/material
4. Ds ce projet, on a répondu yes à ces 4 questions:
    - The package @angular/material@17.0.4 will be installed and executed. Would you like to proceed? 
    - ? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        
    - ? Set up global Angular Material typography styles? Yes
    - ? Include the Angular animations module? Include and enable animations
5. Génération du fichier app-routing par la cmd: ng generate module app-routing --flat --module.
6. Création manuelle du fichier app/module.ts.
7. Ds angular.material.io/component/xxx, you will see 3 things:
    - Overview: Donne une courte version de comment travailler avec cet élément.
    - Api: Donne une courte version de cmt travailler avec cet élément.
    - Examples: You can see different exemples and the code of each of them (and use it in your app).
  
#SUITE ADDRESS BOOK 

-Création d'un dossier service,
- Used commande "ng g s services/NomDuService" pr le créer ds le dossier services crée précédemment.

Utiliser "https://angular.io/cli/generate" pr trouver les commandes pr générer des éléments sur angular.

Pr le tb, ds le ng-container, le "matColumnDef ne doit pas  forcement etre nommé de la meme façon que la données ds le service. Il peut etre nommé autrement mais sur cette ligne
"<td mat-cell *matCellDef="let contact"> {{contact.reference}} </td>", la référence doit etre identique au vrai nom de la donnée que l'on veut afficher.

Note: Pr debug
  onCancel(){
    this.router.navigate(['/contacts']).then(()=>{
      console.log('success')
    }).catch((error)=>{
      console.log('The error is'+ error)
    })
  }


Un nouvel !opérateur d'expression post-fixe peut être utilisé pour affirmer que son opérande est non nul et non indéfini dans des contextes où le vérificateur de type est incapable de conclure ce fait. Ex: newcontact!: Contact;

Résumé de la création du formulaire(ds l'ordre):
-utilisation des matérials pr le construire,
-création du service contact,
-création de l'interface contacts pr le respect de la stucture des données,
-création de la structure du formulaire,
-Injection du nom du form ds la balise html ouvrante du formulaire,
- création de la méth onCancel pr être rédirigé à la page des contacts existants: Injection du router ds le constructeur et usage de ma meth navigate( ),
- création ds le contactsService de la meth updateContacts pr pusher un nouveau contact ds le tb,
- On Implémentation ds le ts de la meth onSumit() où l'on récupère tous les cghamps saisies du formulaire pr les rajouter ds le tb des contacts. Pe cela, on va créer une var (newcontact ici) qui contiendra ts ces éléments récupérés du formulaire et l'on va call la meth updateContacts du service pr MAJ les données du tb.


On installe le "MatDialogModule"pr utiliser les boites de dialogue pui:
-Rajoout du code suivant ds le contact component pr créer une boite de dialogue:
 onUpdate(contact: Contact){
    let dialogRef = this.dialog.open(UpdateDialogComponent, {
      height: '600px',
      width: '500px',
      data: contact, //Est rajouté après injection ds data.
    });
  }
-Puis ds le html on créé un click event sur le bouton update: (click)="onUpdate(contact)
- création d'un dossier dialogs,
-création d'un update dialog par la cmd "ng g c dialogs/update-dialog".
- création d'un delete dialog par la cmd "ng g c dialogs/delete-dialog"
-Injection du dialog service ds le constructeur( "private dialog: MatDialog") de ContactsComponent
-Injection des data ds le dialog component qu'on veut utiliser en insérant ds le constructeur cette ligne: " @Inject(MAT_DIALOG_DATA) public data: NomInterfaceToUse", NomInterfaceToUse étant le nom de l'interface précisant le type de données que ns allons injecter. Attention, il faudra importer inject et MAT_DIALOG_DATA : 
import {Inject} from '@angular/core';
import {MAT_DIALOG_DATA } from '@angular/material/dialog';

Après tout ceci, quand on click sur update, il se passe ceci:
- Envoi des info du contact (de la ligne spécifique sur laquelle on a cliqué) de la meth onUpdate() call ds le html contact,
-Et ces infos seront affectées ds le ts à l'objet contact de la rubrique data de la meth onUpdate(),
-Et ces data seront injectées ds le constructeur de l'update-dialog,
-Puis ces data seront assignées à l'objet que ns avons crée (ici "contactToUpdate"),
-Puis pr le moment ns l'afficherons sur la console.
-Ds la meth ngOnInit(), l'on va préremplir les champs du formulaire de MAJ avec les données du contact que l'on veut modifier. Ex:     this.updateForm.controls['FirstName'].setValue(this.contactToUpdate.FirstName);

Note: la propriété "mat-dialog-close" ferme la boite de dialogue ouverte. On n'a dc pas besoin de créer une methode onCancel() pour la boite de dialogue.

Attention, ds le service contact et le ts de newcomponent, ns avons renommé updateContacts en createContact car l'on va créer une nouvelle méthode chargée de la MAJ des info d'un contact existant.Cette dernière sera call updateContact.

MAJ des infos:
-Ds le service, créer une meth updateContact() où l'on va:             a.retrouver l'index de chaque élément du tb et par cela ns allons MAJ les info de ce conatct. Ex:"const index =  this.contacts.findIndex(contact =>contact.Id == updateContact.Id);"
b.On va MAJ les valeurs du form en utilisant cet index. Ex:"this.contacts[index].FirstName = updateContact.FirstName;"
- Ds le ts update-dialog.Component:
   a. On va injecter le contact service ds le constructeur,
   b. Ds la meth onSubmit, on va call la meth updateContact() crée précédemment.
Ex: this.ContactService.updateContact(paramètre)
   c.Les données à call ds updateContact en paramètre seront un objet (call updateContact ici) contenant les différentes données recuperées du formulaire et que ns devons enregistré coè nouvelle valeurs.

Ex: this.updatecontact = {
      Id: this.contactToUpdate.Id,//On garde le meme Id.
      FirstName: this.updateForm.controls['FirstName'].value as string,
      LastName: this.updateForm.controls['LastName'].value as string,
      PhoneNumber: this.updateForm.controls['PhoneNumber'].value as string,
      Address: this.updateForm.controls['Address'].value as string
    }


DELETE COMPONENT:

-Très similaire ds le code à update-dialog.Component sauf que:
   a. Ds le contact service, on a crée une nouvelle meth deleteContact,
   b. Ds le html du delete-dialog.Component
       1. On a renommé contactToUpdate par contactToDelete,
       2. On a modifié la méthode onSubmit. Ns avons only besoin de l'id pr supprimer.
    c. Ds le ts du delete-dialog.Component:
       1. On a désactivé tous les champs du formulaire(en modifiant le contenu de chak formControl par {value:'',disabled:true}.

!!!! Style form input non fxnel.

DATASOURCE(Ds ts de contact component)

Il y'a +ieurs manières de créer les datasources. 
La plus simple est d'utiliser un simple tb (COMME NS L'AVONS FAIT JUSK LA. EX: contactsDataArray: Contact[] = []; du fichier ts de contact component)sauf qu'avec cela vs ne pourrez pas faire plus après. 
Si vs voulez implémenter des fxtionnalités avancées coè par ex la pagination, le trie,la recherche, vs devez utiliser le Datasource class qui ns donne +ieurs methodes pr rajouter ttes sortes de fxtionalités.
On va dc modifier notre datasource actuel qui est un simple tb en créant une instance de cette datasource class:
-On aura tjrs notre tb,
-Mais on va rajouter une datasource séparée qui sera une instance de MatTableDataSource. 
Ex: dataSource = new MatTableDataSource<Contact>;
-Ds la meth ngOnInit, on va on va passer à cette instance le tb de données que l'on avait avant.
Ex: this.dataSource = new MatTableDataSource<Contact>(this.contactsDataArray);
-Ds le html, on va remplacer l'ancienne datasource par la nouvelle.
Ex/ Ici on remplace "contactsDataArray" par "dataSouce" qui est le nom de la nouvelle source de données.


Ds ts de contact component : 

Il y'a +ieurs avis sur la manière de refresh angular material table.(cfr recherche sur google "angular material datasource update" où existe +ieurs opinions).
Mais ns ferons ceci:
- updateDataSource(dataArray: Contact[]){
    this.dataSource.connect().next(dataArray);
  }
- dataSource est notre nouvelle dataSource, l'instance de dataSource class que nous avions créé.
-data class dispose de +ieurs meth dont la méthode connect() qui va retourner a behaviorSubject(du tb des contact. Ce behaviorSubject is one of the unit's of the RX JS library).
- Après obtention  du behaviorSubject, on a la meth next qui va MAJ notre dtaSource. Et next prend en paramètre la dataArray en paramètre de la méthode.


Suite de la méthode onDelete() ds ts de contact component:
- On va utiliser une meth afterclose() qu'on va créer où l'on call la meth updateDataSource qui prend en paramètre notre ancienne datasource qui constitue la liste de ts nos contacts càd contactsDataArray.
Ex: dialogRef.afterClosed().subscribe(result => {
      this.updateDataSource(this.contactsDataArray);
    });

- Pour la page d'acueil, cfr son git.


MM pr créer un formulaire réactif:
-création du template avec angular material, css, boostrap,
-création du form ds le ts,
-création de la méth onSubmit() ds le ts,
-création de la méth onCancelt() ds le ts si besoin ou autres meth.




     
