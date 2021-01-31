const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test37  #start_test", async() => {

  it("should contain pattern in username input inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let username = dom.window.document.getElementById("username")
    expect(username.attributes.getNamedItem("pattern").textContent).to.be.equal("[a-zA-Z0-9]+")

  })

});