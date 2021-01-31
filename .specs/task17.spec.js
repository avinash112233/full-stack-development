const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test17  #start_test", () => {
  
  it("should contain anchor to brownBear.html", async () => {

    let pathToFile = path.join(__dirname , "../brownBear.html");
    const dom = await createDom(pathToFile)
    let item1 = __getPosition(dom.window.document.body, "H1", "The Brown Bear")
    const first_index = __isComeBefore(0, dom.window.document.body, item1, "href", "./brownBear.html", "Brown Bear")
    expect(typeof(first_index)).to.be.equal("number")
    
  });

  it("should contain anchor to aboutme.html", async () => {

    let pathToFile = path.join(__dirname , "../brownBear.html");
    const dom = await createDom(pathToFile)
    let item1 = __getPosition(dom.window.document.body, "H1", "The Brown Bear")
    let count = 0
    const first_index = __isComeBefore(0, dom.window.document.body, item1, "href", "./brownBear.html", "Brown Bear")
    if(typeof(first_index)==="number") count++
    const second_index = __isComeBefore(first_index+1, dom.window.document.body, item1, "href", "./aboutme.html", "About Me")
    if(typeof(second_index)==="number") count++
    expect(count).to.be.equal(2)
    
  });

});


/**
 * Function return position of any tag element by searching across its tagName and text content
 * @param {*} dom Dom object
 * @param {*} tagName Tag name to be searched of
 * @param {*} context Context of node
 */
function __getPosition(dom, tagName, context){
    for(let i=0; i<dom.children.length; i++){
        const node = dom.children.item(i)
        if(node.nodeName===tagName && node.textContent===context) return i
    }
    return null
}


/**
 * Function tells whether a context comes after any particular node in it's children or not
 * @param {*} dom Dom object
 * @param {*} index Index number of node child after which context has to be searched
 * @param {*} context Context of node
 */
function __isComeBefore(initial, dom, index, attribute, attributeContext, textContent){
    for(let i=initial; i<index; i++){
        const node = dom.children.item(i)
        if(node.attributes.getNamedItem(attribute).textContent===attributeContext && node.textContent===textContent) return i
    }
    return null
}
