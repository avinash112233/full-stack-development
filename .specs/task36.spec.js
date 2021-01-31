const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test36  #start_test", async() => {

  it("should contain minlength-maxlength attributes in username input inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let username = dom.window.document.getElementById("username")
    expect(username.attributes.getNamedItem("minlength").textContent).to.be.equal("3")
    expect(username.attributes.getNamedItem("maxlength").textContent).to.be.equal("15")

  })

  it("should contain minlength-maxlength attributes in password input inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let password = dom.window.document.querySelector("input[type='password']")
    expect(password.attributes.getNamedItem("minlength").textContent).to.be.equal("8")
    expect(password.attributes.getNamedItem("maxlength").textContent).to.be.equal("15")

  })

});