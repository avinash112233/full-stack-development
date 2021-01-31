const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test33  #start_test", async() => {
  
  it("should contain submit button in submission section inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let section = (dom.window.document.body.getElementsByClassName("submission"))[0]
    expect(section.children.item(0).nodeName).to.be.equal("INPUT")
    expect(section.children.item(0).attributes.getNamedItem("type").textContent).to.be.equal("submit")
    expect(section.children.item(0).attributes.getNamedItem("value").textContent).to.be.equal("Submit")

  })
  
});