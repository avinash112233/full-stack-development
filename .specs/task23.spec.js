const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test23  #start_test", async() => {

  it("should contain action attributes in form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    expect(form.attributes.getNamedItem("action").textContent).to.be.equal("/practice.html")

  });

  it("should contain method attributes in form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    expect(form.attributes.getNamedItem("method").textContent.toLowerCase()).to.be.equal("post")

  })

  it("should contain heading inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    expect(form.children.item(0).nodeName).to.be.equal("H1")
    expect(form.children.item(0).textContent).to.be.equal("Welcome to the Konfinity application!")

  })

  it("should contain paragraph inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    expect(form.children.item(1).nodeName).to.be.equal("P")
    expect(form.children.item(1).textContent).to.be.equal("Let’s get started by creating your account")

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