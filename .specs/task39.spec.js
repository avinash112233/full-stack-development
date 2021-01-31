const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test39  #start_test", async() => {

  it("should contain main section", async () => {
  
    let pathToFile = path.join(__dirname , "../structure.html");
    const dom = await createDom(pathToFile)
    let main = dom.window.document.body.getElementsByTagName("MAIN")
    expect(main.length).to.be.equal(1)

  })

  it("should place main section after header section", async ()=>{
  
    let pathToFile = path.join(__dirname , "../structure.html");
    const dom = await createDom(pathToFile)
    let header = dom.window.document.body.getElementsByTagName("HEADER")[0]
    const header_sibling = header.nextElementSibling
    expect(header_sibling.nodeName).to.be.equal("MAIN")
    
  })

  it("should contain footer section", async () => {
  
    let pathToFile = path.join(__dirname , "../structure.html");
    const dom = await createDom(pathToFile)
    let footer_p = dom.window.document.body.querySelector("FOOTER P")
    expect(footer_p.textContent).to.be.equal("Contact me at +1 234 567 8910")
    
  })

});