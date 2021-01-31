const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test29  #start_test", async() => {

  it("should contain section inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const section = __findTable(form, "SECTION")
    expect(section.children.length).to.be.equal(4)

  })

  it("should contain gender class in section inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const section = __findTable(form, "SECTION")
    expect(section.className).to.include("gender")

  })

  it("should contain male label & radio in gender section inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const section = __findTable(form, "SECTION")
    const label  = __findTable(section, "LABEL")
    const input = __findTable(section, "INPUT", "radio", false, null, null)
    expect(label.attributes.getNamedItem("for").textContent).to.be.equal(input.attributes.getNamedItem("id").textContent)
    expect(input.attributes.getNamedItem("name").textContent).to.be.equal("gender")
    expect(input.attributes.getNamedItem("value").textContent).to.be.equal("male")

  })

  it("should contain female label & radio in gender section inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const section = __findTable(form, "SECTION")
    const input_index = __findTable(section, "INPUT", "radio", true)
    const label  = __findTable(section, "LABEL", null, false, input_index)
    const input = __findTable(section, "INPUT", "radio", false, input_index)
    expect(label.attributes.getNamedItem("for").textContent).to.be.equal(input.attributes.getNamedItem("id").textContent)
    expect(input.attributes.getNamedItem("name").textContent).to.be.equal("gender")
    expect(input.attributes.getNamedItem("value").textContent).to.be.equal("female")

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