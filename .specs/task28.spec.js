const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test28  #start_test", async() => {

  it("should contain job checkbox with label inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const num_input_index = __findTable(form, "INPUT", "number", true)
    const label = __findTable(form, "LABEL", null, false, num_input_index, null)
    const check_input = __findTable(form, "INPUT", "checkbox")
    expect(label.attributes.getNamedItem("for").textContent).to.be.equal(check_input.attributes.getNamedItem("id").textContent)
    expect(check_input.attributes.getNamedItem("value").textContent).to.be.equal("job")
  })

  it("should contain college checkbox with label inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const check_input_index = __findTable(form, "INPUT", "checkbox", true)
    const label = __findTable(form, "LABEL", null, false, check_input_index, null)
    const check_input = __findTable(form, "INPUT", "checkbox", false, check_input_index)
    expect(label.attributes.getNamedItem("for").textContent).to.be.equal(check_input.attributes.getNamedItem("id").textContent)
    expect(check_input.attributes.getNamedItem("value").textContent).to.be.equal("college")
  })

  it("should contain school checkbox with label inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const check_input_index = __findTable(form, "INPUT", "checkbox", true, null, null, "college")
    const label = __findTable(form, "LABEL", null, false, check_input_index)
    const check_input = __findTable(form, "INPUT", "checkbox", false, check_input_index)
    expect(label.attributes.getNamedItem("for").textContent).to.be.equal(check_input.attributes.getNamedItem("id").textContent)
    expect(check_input.attributes.getNamedItem("value").textContent).to.be.equal("school")
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