const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test08  #start_test", async() => {

  it("should contain em tag in first paragraph", async () => {
  
    let pathToFile = path.join(__dirname , "../brownBear.html");
    const dom = await createDom(pathToFile)
    let introduction = dom.window.document.getElementById("introduction")
    let item1 = __getPosition(introduction, "P", "Ursus arctos")
    const innerDOM = introduction.children.item(item1)
    const first = __isExist(innerDOM, "EM", "Ursus arctos")
    expect(first).to.be.equal(true)
    
  });

  it("should contain strong tag in first paragraph", async () => {
    
    let pathToFile = path.join(__dirname , "../brownBear.html");
    const dom = await createDom(pathToFile)
    let introduction = dom.window.document.getElementById("introduction")
    let item1 = __getPosition(introduction, "P", "Ursus arctos")
    const innerDOM = introduction.children.item(item1)
    const second = __isExist(innerDOM, "STRONG", "Least Concern")
    expect(second).to.be.equal(true)

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
        if(node.nodeName===tagName && node.textContent.indexOf(context)>0) return i
    }
    return null
}


/**
 * 
 * @param {*} dom DOM object
 * @param {*} tag Tag name to be search
 * @param {*} text Full text content of that tag
 */
function __isExist(dom, tag, text){
  for(let i=0; i<dom.children.length; i++){
    const node = dom.children.item(i)
    if(node.nodeName===tag && node.textContent===text) {return true}
  }
  return false
}