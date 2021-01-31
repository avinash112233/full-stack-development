const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test32  #start_test", async() => {

  it("should contain section with extra-info class inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let section = (dom.window.document.body.getElementsByClassName("extra-info"))[0]
    expect(section.children.length).to.be.equal(2)

  })

  it("should contain label in extra-info section inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let section = (dom.window.document.body.getElementsByClassName("extra-info"))[0]
    expect(section.children.item(0).attributes.getNamedItem("for").textContent).to.be.equal(section.children.item(1).attributes.getNamedItem("id").textContent)
    expect(section.children.item(0).nodeName).to.be.equal("LABEL")

  })

  it("should contain textarea in extra-info section inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let section = (dom.window.document.body.getElementsByClassName("extra-info"))[0]
    expect(section.children.item(1).attributes.getNamedItem("name").textContent).to.be.equal("extra")
    expect(section.children.item(1).attributes.getNamedItem("id").textContent).to.be.equal("extra")
    expect(section.children.item(1).attributes.getNamedItem("cols").textContent).to.be.equal("40")
    expect(section.children.item(1).attributes.getNamedItem("rows").textContent).to.be.equal("3")
    expect(section.children.item(1).nodeName).to.be.equal("TEXTAREA")

  })

});