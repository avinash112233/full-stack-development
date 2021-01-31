const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const readFile = require("./createDom").readFile


describe("HTML Module test13  #start_test", async() => {

  it("should contain type declaration of HTML", async () => {
  
    let pathToFile = path.join(__dirname , "../brownBear.html");
    let fileData = await readFile(pathToFile)
    expect(fileData.indexOf("<!DOCTYPE html>")).to.be.equal(0)
  })

});