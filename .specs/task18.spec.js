const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test18  #start_test", () => {
  
  it("should contain Learn More link", async () => {

    let pathToFile = path.join(__dirname , "../brownBear.html");
    const dom = await createDom(pathToFile)
    const introduction = dom.window.document.getElementById("introduction")
    let index1 = __getPosition(introduction, "H3", "Species")
    let hasAnchor = __isComeBefore(introduction, index1, "href", "https://en.wikipedia.org/wiki/Brown_bear", "Learn More")
    expect(typeof(hasAnchor)).to.be.equal("number")
    
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
function __isComeBefore(dom, index, attribute, attributeContext, textContent){
    for(let i=0; i<index; i++){
        const node = dom.children.item(i)
        if(node.attributes.getNamedItem(attribute) && node.attributes.getNamedItem(attribute).textContent===attributeContext && node.textContent===textContent) return i
    }
    return null
}