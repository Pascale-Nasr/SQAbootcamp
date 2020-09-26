describe('Users Management', function() {
    it('Open Angularjs WEbsite', function() {
      
        browser.get('https://juliemr.github.io/protractor-demo/');
      
        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('7').then(function(){

        element(by.id('gobutton')).click();}),

        //element(by.css("button[id='gobutton']")).click();
        //element(by.css("button[class='btn']")).click();
        //tagname[attributes'value']
        //don't use xpass :)
        //console.log(element(by.css("h2[class='ng-binding']")).getText()); // because is pending shows us the functions before the value and not the value 10

        element(by.css("h2[class='ng-binding']")).getText().then(function(result){

            console.log(result);
        }),

        
        browser.sleep(10000);

    });
    
  });