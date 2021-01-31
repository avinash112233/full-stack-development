const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test40  #start_test", async() => {

  it("should contain section element inside main section", async () => {
  
    let pathToFile = path.join(__dirname , "../structure.html");
    const dom = await createDom(pathToFile)
    let main = dom.window.document.body.getElementsByTagName("MAIN")[0]
    expect(main.getElementsByTagName("SECTION").length).to.be.equal(1)

  })

  it("should contain heading inside main section", async () => {
  
    let pathToFile = path.join(__dirname , "../structure.html");
    const dom = await createDom(pathToFile)
    let main = dom.window.document.body.getElementsByTagName("MAIN")[0]
    let heading = main.getElementsByTagName("H2")[0]
    expect(heading.textContent).to.be.equal("Facts About Cats")

  })

  it("should contain article inside main section", async () => {
  
    let pathToFile = path.join(__dirname , "../structure.html");
    const dom = await createDom(pathToFile)
    let main = dom.window.document.body.getElementsByTagName("MAIN")[0]
    let paragraph = main.getElementsByTagName("ARTICLE")[0].getElementsByTagName("p")[0]
    expect(paragraph.textContent).to.be.equal("The cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family.")
    
  })
  
});