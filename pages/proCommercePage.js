function proCommercePage (){

 

    this.name = element(by.name(name));

    this.email = element(by.name(email));

    this.pass = element(by.id(exampleInputPassword1));

    this.check = element(by.id(examplecheck1));

    this.genderm = element(by.id(exampleFormControlSelect1)).element(by.css('option:nth-child(1)'));

    this.genderf = element(by.id(exampleFormControlSelect1)).element(by.css('option:nth-child(2)'));

    this.employstatstud = element(by.id(inlineRadio1));

    this.employstatemploy= element(by.id(inlineRadio2));

    this.employstatentre= element(by.id(inlineRadio3));

 

}

 

module.exports = new proCommercePage();