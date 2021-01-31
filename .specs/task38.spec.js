const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test38  #start_test", async() => {

  it("header should contain two elements", async () => {
  
    let pathToFile = path.join(__dirname , "../structure.html");
    const dom = await createDom(pathToFile)
    let header = dom.window.document.body.getElementsByTagName("HEADER")[0]
    expect(header.children.length).to.be.equal(2)

  })

  it("header should contain proper heading", async () => {
  
    let pathToFile = path.join(__dirname , "../structure.html");
    const dom = await createDom(pathToFile)
    let header = dom.window.document.body.getElementsByTagName("HEADER")[0]
    const heading = header.getElementsByTagName("H1")[0]
    expect(heading.textContent).to.be.equal("Navigational Links")

  })

  it("should contain proper nav inside header", async () => {
  
    let pathToFile = path.join(__dirname , "../structure.html");
    const dom = await createDom(pathToFile)
    let header = dom.window.document.body.getElementsByTagName("HEADER")[0]
    expect(header.children.item(1).nodeName).to.be.equal("NAV")

  })

  it("should contain unordered list in nav", async () => {
  
    let pathToFile = path.join(__dirname , "../structure.html");
    const dom = await createDom(pathToFile)
    let header = (dom.window.document.body.getElementsByTagName("HEADER"))[0]
    let UL = (header.children.item(1).getElementsByTagName("UL"))[0]
    expect(UL.children.length).to.be.equal(3)
    expect(UL.children.item(0).textContent).to.be.equal("Home")
    expect(UL.children.item(1).textContent).to.be.equal("About")
    expect(UL.children.item(2).textContent).to.be.equal("Contact")

  })

});