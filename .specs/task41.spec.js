const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test41  #start_test", async() => {

  it("should contain aside tag with paragraph element inside main section", async () => {
  
    let pathToFile = path.join(__dirname , "../structure.html");
    const dom = await createDom(pathToFile)
    let main = dom.window.document.body.getElementsByTagName("MAIN")[0]
    let aside = main.getElementsByTagName("ASIDE")[0]
    let p = aside.getElementsByTagName("P")[0]
    expect(p.textContent.split(" ")).to.include("vocalizations")

  })
  
});