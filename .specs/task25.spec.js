const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test25  #start_test", async() => {

  it("should contain label for input field", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const input = __findTable(form, "INPUT")
    const firstInputIndex = __findIndex(form, "INPUT")
    const label = __findTagBeforeIndex(form, firstInputIndex, "LABEL")
    expect(input.attributes.getNamedItem("id").textContent).to.be.equal(label.attributes.getNamedItem("for").textContent)
    
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

function __findIndex(dom, tag){
    for(i=0; i<dom.children.length; i++){
        const node = dom.children.item(i)
        if(node.children.length){
            for(let y=0; y<node.children.length; y++){
                if(node.children.item(y).nodeName===tag) return [[i],[y]]
            }
        }
        if(node.nodeName===tag) return i
    }
    return null
}

function __findTagBeforeIndex(dom, index, tag){
    for(i=0; i<index; i++){
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