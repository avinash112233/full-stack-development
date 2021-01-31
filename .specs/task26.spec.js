const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test26  #start_test", async() => {

  it("should contain password field inside form", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const pass_input = __findTable(form, "INPUT", "password")
    expect(pass_input.nodeName).to.be.equal("INPUT")

  })

  it("should contain name attribute in password input field", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const pass_input = __findTable(form, "INPUT", "password")
    expect(pass_input.attributes.getNamedItem("name").textContent).to.be.equal("user-pw")

  })

  it("should contain label for password input field", async () => {
  
    let pathToFile = path.join(__dirname , "../form.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    const form = __findTable(body, "FORM")
    const pass_input = __findTable(form, "INPUT", "password")
    const first_input_index = __findTable(form, "INPUT", "text", true)
    const first_pass_input_index = __findTable(form, "INPUT", "password", true)
    const label = __findTable(form, "LABEL", null, false, first_input_index, first_pass_input_index)
    expect(pass_input.attributes.getNamedItem("id").textContent).to.be.equal(label.attributes.getNamedItem("for").textContent)
    
  })

});

function __findTable(dom, tag, type=null, want_index=false, startingIndex=null, endingIndex=null){
    for(i=startingIndex?startingIndex+1:0; i<endingIndex?endingIndex:dom.children.length; i++){
        const node = dom.children.item(i)
        if(node.children.length){
            for(let y=0; y<node.children.length; y++){
                if(type && node.children.item(y).nodeName===tag && node.children.item(y).attributes.getNamedItem("type").textContent===type) 
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

        if(type && node.nodeName===tag && node.attributes.getNamedItem("type").textContent===type)
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