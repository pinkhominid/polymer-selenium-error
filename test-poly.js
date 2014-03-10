
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

var wd = require('wd');
chaiAsPromised.transferPromiseness = wd.transferPromiseness;
var browser = wd.promiseChainRemote();

browser
  .init({browserName:'chrome'})
  .get("http://localhost:3000/poly.html")
  .title()
    .should.become('Poly')
  .elementByCss('h1')
  .text()
    .should.become('Que pasa contigo?')
  .fin(function() { return browser.quit(); })
  .done();
