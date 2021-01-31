const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test35  #start_test", async() => {

  it("should contain min-max attributes in number input inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const input = __findTable(form, "INPUT", "number")
    expect(input.attributes.getNamedItem("min").textContent).to.be.equal("1")
    expect(input.attributes.getNamedItem("max").textContent).to.be.equal("10")

  })

});

function __findTable(dom, tag, type=null, want_index=false, startingIndex=null, endingIndex=null, id=null){
    for(i=startingIndex?startingIndex+1:0; i<endingIndex?endingIndex:dom.children.length; i++){
        const node = dom.children.item(i)
        if(node.children.length){
            for(let y=0; y<node.children.length; y++){
                if(type && node.children.item(y).nodeName===tag && node.children.item(y).attributes.getNamedItem("type").textContent===type && (id?(node.children.item(y).attributes.getNamedItem("id").textContent===id):true)) 
                if(want_index){
                    return [[i],[y]]
                }else{
                    return node.children.item(y)
                }

                if(!type && node.children.item(y).nodeName===tag)
                if(want_index){
                    return [[i],[y]]
                }else{
                    return node.children.item(y)
                }
            }
        }

        if(type && node.nodeName===tag && node.attributes.getNamedItem("type").textContent===type && (id?(node.attributes.getNamedItem("id").textContent===id):true))
        if(want_index){
            return i
        }else{
            return node
        }

        if(!type && node.nodeName===tag)
        if(want_index){
            return i
        }else{
            return node
        }
    }
    return null
}