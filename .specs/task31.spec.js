const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test31  #start_test", async() => {

  it("should contain section with location-selection class inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const first_section_index = __findTable(form, "SECTION", null, true)
    const second_section_index = __findTable(form, "SECTION", null, true, first_section_index)
    const section = __findTable(form, "SECTION", null, false, second_section_index)
    expect(section.className).to.includes("location-selection")
    expect(section.children.length).to.be.equal(3)

  })

  it("should contain label in location-selection section inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const first_section_index = __findTable(form, "SECTION", null, true)
    const second_section_index = __findTable(form, "SECTION", null, true, first_section_index)
    const section = __findTable(form, "SECTION", null, false, second_section_index)
    const label = __findTable(section, "LABEL")
    const input = __findTable(section, "INPUT")
    expect(label.attributes.getNamedItem("for").textContent).to.be.equal(input.attributes.getNamedItem("id").textContent)

  })

  it("should contain all option in datalist element of location-selection section inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const first_section_index = __findTable(form, "SECTION", null, true)
    const second_section_index = __findTable(form, "SECTION", null, true, first_section_index)
    const section = __findTable(form, "SECTION", null, false, second_section_index)
    const input = __findTable(section, "INPUT")
    const datalist = __findTable(section, "DATALIST")
    expect(input.attributes.getNamedItem("list").textContent).to.be.equal(datalist.attributes.getNamedItem("id").textContent)
    expect(datalist.children.item(0).attributes.getNamedItem("value").textContent).to.be.equal("India")
    expect(datalist.children.item(1).attributes.getNamedItem("value").textContent).to.be.equal("Russia")
    expect(datalist.children.item(2).textContent.length).to.be.greaterThan(0)
    
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