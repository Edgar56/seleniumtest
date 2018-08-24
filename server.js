var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

// input_fname = driver.findElement(By.name('firstname'));
// input_lname = driver.findElement(By.name('lastname'));


driver.get('http://mangirdas.com/instarem-qa/');
driver.findElement(By.name('firstname')).sendKeys('abc');
driver.findElement(By.name('lastname')).sendKeys('abc');
driver.findElement(By.css('input[value="Submit"]')).click();
driver.wait(check_inputs,500);



function check_inputs(input_fname,input_lname) {
    input_fname = driver.findElement(By.className('firstname'));
    input_lname = driver.findElement(By.className('lastname'));
// var promise = driver.getTitle().then( function (title) {
console.log('firstname'+input_fname);
console.log('lastname' +input_lname);

    {
        if (input_lname === input_fname) {
    console.log('values is the same')
    return true;
}
else {
    console.log('fail --' + input_fname);
}
    }

// });
// return promise;
}