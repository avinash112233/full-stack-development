const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const readFile = require("./createDom").readFile


describe("HTML Module test14  #start_test", async() => {

  it("should contain HTML tag", async () => {
  
    let pathToFile = path.join(__dirname , "../brownBear.html");
    let fileData = await readFile(pathToFile)
    const OpeningTag = "<html>"
    const ClosingTag = "</html>"
    const starting_index = fileData.indexOf(OpeningTag)+OpeningTag.length
    const ending_index = fileData.indexOf(ClosingTag)
    const middle_part = fileData.slice(starting_index,ending_index)
    expect(middle_part.indexOf("<h1>The Brown Bear</h1>")).to.be.greaterThan(0)
    expect(middle_part.indexOf("introduction")).to.be.greaterThan(0)
    expect(middle_part.indexOf("<h2>About Brown Bears</h2>")).to.be.greaterThan(0)
    expect(middle_part.indexOf("(<em>Ursus arctos</em>)")).to.be.greaterThan(0)
    expect(middle_part.indexOf("<li>Nelsoni (extinct)</li>")).to.be.greaterThan(0)
    expect(middle_part.indexOf("<h2>Media</h2>")).to.be.greaterThan(0)

  })

});