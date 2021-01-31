const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test34  #start_test", async() => {

  it("should require all inputs inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let input = (dom.window.document.body.getElementsByTagName("INPUT"))
    let count = 0
    for(let i=0; i<input.length; i++){
        if(input[i].getAttributeNames().includes("required")) count++
    }
    expect(count).to.be.equal(10)
    expect(count).to.be.equal(input.length)
  })

});