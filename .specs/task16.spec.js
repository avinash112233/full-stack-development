const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const readFile = require("./createDom").readFile
const craeteDOM = require("./createDom").createDOM


describe("HTML Module test16  #start_test", async() => {

  it("should contain index of HTML page", async () => {
  
    let pathToFile = path.join(__dirname , "../brownBear.html");
    const dom = await craeteDOM(pathToFile)
    expect(dom.window.document.title).to.be.equal("Brown Bears")
  })

});