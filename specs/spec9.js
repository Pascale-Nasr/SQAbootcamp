describe('Users Management', function() {

    function add(a,b){
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element.all(by.repeater('result in operator')).each(function(){
        element(by.model('operator')).click();
        element(by.id('gobutton')).click();});
    };


    it('Open Angularjs WEbsite', function() {
        
        browser.get('https://juliemr.github.io/protractor-demo/');

        add(3,4);
        add(6,7);
        add(2,3);

        element.all(by.repeater('result in memory')).count().then(function(result){
            console.log(result);
        });

        element.all(by.repeater('result in memory')).each(function(answer){
            answer.element(by.css("td:nth-child(3)")).getText().then(function(result){
                console.log(result);

            });
        });

        element.all(by.repeater('result in memory')).get(2).element(by.css("td:nth-child(3)")).getText().then(function(result){
            console.log(result);

        });
    
        browser.sleep(10000);

      
    });
  });
