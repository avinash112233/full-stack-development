const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test30  #start_test", async() => {

  it("should contain section with qualification class inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const first_section_index = __findTable(form, "SECTION", null, true)
    const section = __findTable(form, "SECTION", null, false, first_section_index)
    expect(section.className).to.includes("qualification")
    expect(section.children.length).to.be.equal(2)

  })

  it("should contain label in qualification section inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const first_section_index = __findTable(form, "SECTION", null, true)
    const section = __findTable(form, "SECTION", null, false, first_section_index)
    const label = __findTable(section, "LABEL")
    const select = __findTable(section, "SELECT")
    expect(label.attributes.getNamedItem("for").textContent).to.be.equal(select.attributes.getNamedItem("id").textContent)
    expect(select.attributes.getNamedItem("id").textContent).to.be.equal("qualification")
    expect(select.attributes.getNamedItem("name").textContent).to.be.equal("qualification")

  })

  it("should contain all option in select element of qualification section inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const first_section_index = __findTable(form, "SECTION", null, true)
    const section = __findTable(form, "SECTION", null, false, first_section_index)
    const select = __findTable(section, "SELECT")
    expect(select.children.item(0).tagName).to.be.equal("OPTION")
    expect(select.children.item(0).textContent).to.be.equal("Underqualified")
    expect(select.children.item(1).tagName).to.be.equal("OPTION")
    expect(select.children.item(1).textContent).to.be.equal("Graduate")
    expect(select.children.item(2).tagName).to.be.equal("OPTION")
    expect(select.children.item(2).attributes.getNamedItem("value").textContent).to.be.equal("Postgraduate")

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