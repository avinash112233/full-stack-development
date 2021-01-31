const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const readFile = require("./createDom").readFile


describe("HTML Module test15  #start_test", async() => {

  it("should contain proper opening & closing of head tag", async () => {
  
    let pathToFile = path.join(__dirname , "../brownBear.html");
    let fileData = await readFile(pathToFile)
    const OpeningTag = "<head>"
    const ClosingTag = "</head>"
    const starting_index = fileData.indexOf(OpeningTag)+OpeningTag.length
    const ending_index = fileData.indexOf(ClosingTag)
    const middle_part = fileData.slice(starting_index,ending_index)
    expect(middle_part.indexOf("<h1>The Brown Bear</h1>")).to.be.lessThan(0)
    expect(middle_part.indexOf("introduction")).to.be.lessThan(0)
    expect(middle_part.indexOf("<h2>About Brown Bears</h2>")).to.be.lessThan(0)
    expect(middle_part.indexOf("(<em>Ursus arctos</em>)")).to.be.lessThan(0)
    expect(middle_part.indexOf("<li>Nelsoni (extinct)</li>")).to.be.lessThan(0)
    expect(middle_part.indexOf("<h2>Media</h2>")).to.be.lessThan(0)
    expect(starting_index).to.be.greaterThan(0)
    expect(starting_index).to.be.greaterThan(fileData.indexOf("<html>")+"<html>".length)

  })

  it("should contain head tag after html tag", async () => {
  
    let pathToFile = path.join(__dirname , "../brownBear.html");
    let fileData = await readFile(pathToFile)
    const opening_token = "<html>"
    const OpeningTag = "<head>"
    const starting_index = fileData.indexOf(OpeningTag)+OpeningTag.length
    const opening_token_index = fileData.indexOf(opening_token)+opening_token.length
    expect(opening_token_index).to.be.lessThan(starting_index)

  })

});