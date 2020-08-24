let homepage = require('../pages/homepage');

describe('demo calculator testa', function () {

    it('addition test', function () {

        homepage.get('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('2');

        homepage.enterSecondNumber('7');

        homepage.clickGo();

        homepage.verifyResult('9');

        browser.sleep(2000)
    });

    it('subtraction test', function () {

        homepage.get('https://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('2');

        homepage.enterSecondNumber('7');

        homepage.clickGo1();

        homepage.verifyResult('9');

        browser.sleep(2000)
    });


});