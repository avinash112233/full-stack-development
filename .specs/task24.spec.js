const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test24  #start_test", async() => {

  it("should contain input field inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const firstInput = __findTable(form, "INPUT")
    expect(firstInput.nodeName).to.be.equal("INPUT")

  })

  it("should contain name attribute in input field", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const firstInput = __findTable(form, "INPUT")
    expect(firstInput.attributes.getNamedItem("name").textContent).to.be.equal("username")

  })

  it("should contain value attribute in input field", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const firstInput = __findTable(form, "INPUT")
    expect(firstInput.attributes.getNamedItem("value").textContent).to.be.equal("UserName")

  })

});

function __findTable(dom, tag){
    for(i=0; i<dom.children.length; i++){
        const node = dom.children.item(i)
        if(node.children.length){
            for(let y=0; y<node.children.length; y++){
                if(node.children.item(y).nodeName===tag) return node.children.item(y)
            }
        }
        if(node.nodeName===tag) return node
    }
    return null
}