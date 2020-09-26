var using = require('jasmine-data-provider');

 

describe('ProCommerce', function() {

 

    var proCommerceData=require("../data/proCommerceData.js");

    var proCommerce = require("../pages/proCommerce copy.js");

 

    using(proCommerceData.test,function(info,description){

 

      it('Fill out form', function() {

        browser.get('https://rahulshettyacademy.com/angularpractice/');

      

      

        proCommerce.email.sendKeys(proCommerceData.test.email); 

        proCommerce.name.sendKeys(proCommerceData.test.name);   

 

      

    });

  });

});