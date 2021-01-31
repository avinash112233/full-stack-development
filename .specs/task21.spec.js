const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test21  #start_test", async() => {

  it("should contain <thead></thead> in table", async () => {
  
    let pathToFile = path.join(__dirname , "../table.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const table = __findTable(body, "TABLE")
    expect(table.children.item(0).nodeName).to.be.equal("THEAD")

  });

  it("should contain <tbody></tbody> in table", async () => {
  
    let pathToFile = path.join(__dirname , "../table.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const table = __findTable(body, "TABLE")
    expect(table.children.item(1).nodeName).to.be.equal("TBODY")

  });

  it("should contain <tfoot></tfoot> in table", async () => {
  
    let pathToFile = path.join(__dirname , "../table.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const table = __findTable(body, "TABLE")
    expect(table.children.item(2).nodeName).to.be.equal("TFOOT")

  });

  it("should contain table data in table heading", async () => {
  
    let pathToFile = path.join(__dirname , "../table.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const table = __findTable(body, "TABLE")
    expect(table.children.item(0).children.item(0).children.length).to.be.equal(3)
    expect(table.children.item(0).children.item(0).children.item(0).nodeName).to.be.equal("TH")
    expect(table.children.item(0).children.item(0).children.item(0).textContent).to.be.equal("Company Name")
    expect(table.children.item(0).children.item(0).children.item(1).nodeName).to.be.equal("TH")
    expect(table.children.item(0).children.item(0).children.item(1).textContent).to.be.equal("Number of Items to Ship")
    expect(table.children.item(0).children.item(0).children.item(2).nodeName).to.be.equal("TH")
    expect(table.children.item(0).children.item(0).children.item(2).textContent).to.be.equal("Next Action")

  });

  it("should contain table data in table body", async () => {
  
    let pathToFile = path.join(__dirname , "../table.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const table = __findTable(body, "TABLE")
    expect(table.children.item(1).children.length).to.be.equal(4)
    expect(table.children.item(1).children.item(0).children.item(0).nodeName).to.be.equal("TD")
    expect(table.children.item(1).children.item(0).children.item(0).textContent).to.be.equal("Adam’s Greenworks")
    expect(table.children.item(1).children.item(1).children.item(1).textContent).to.be.equal("2")
    expect(table.children.item(1).children.item(2).children.item(2).textContent).to.be.equal("Ship")
    expect(table.children.item(1).children.item(3).children.item(0).nodeName).to.be.equal("TD")
    expect(table.children.item(1).children.item(3).children.item(0).textContent).to.be.equal("Strike Fitness")
    
  });

  it("should contain table data in table footer", async () => {
  
    let pathToFile = path.join(__dirname , "../table.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const table = __findTable(body, "TABLE")
    expect(table.children.item(2).children.length).to.be.equal(1)
    expect(table.children.item(2).children.item(0).children.item(0).nodeName).to.be.equal("TD")
    expect(table.children.item(2).children.item(0).children.item(0).textContent).to.be.equal("Total")
    expect(table.children.item(2).children.item(0).children.item(1).textContent).to.be.equal("21")
    expect(table.children.item(2).children.item(0).children.item(1).nodeName).to.be.equal("TD")
    
  });

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