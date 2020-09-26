const object = require('./object.js');

describe('Users Management', function() {

    var obj = require('./superCalculatorPage.js');
    it('Open Angularjs WEbsite', function() {

        function add(a,b){

            
        obj.input1.sendKeys(a);
        obj.input2.sendKeys(b);
        obj.button1.click();

        };
        
        browser.get('https://juliemr.github.io/protractor-demo/');

        add(3,7);
        add(3,9);
        add(9,6);

        obj.res.count().then(function(result){
            console.log(result);
        });

        var sum= ['15','12','10'];
        var i = 0;        

        obj.res.each(function(answer){

           answer.element(by.css("td:nth-child(3)")).then(function(result){

                console.log(result);
                expect(result).toBe(sum[i]);
                i = i + 1;
            });
        });
    });


    
});