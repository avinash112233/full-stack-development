const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test11  #start_test", async() => {

  it("should contain alt attribute in IMAGE", async () => {
  
    let pathToFile = path.join(__dirname , "../brownBear.html");
    const dom = await createDom(pathToFile)
    let introduction = dom.window.document.getElementById("media")
    let hasTag = __isExist(introduction, "IMG", "alt")
    expect(hasTag).to.be.equal(true)
    
  });

});


/**
 * 
 * @param {*} dom DOM object
 * @param {*} tag Tag name to be search
 * @param {*} text Full text content of that tag
 */

function __isExist(dom, tag, attribute){
  for(let i=0; i<dom.children.length; i++){
    const node = dom.children.item(i)
    let flag = false
    if(node.children.length) {
      flag = __isExist(node, tag, attribute)
    }
    if(flag) return true
    if(node.nodeName===tag && node.attributes.getNamedItem(attribute).textContent.trim().length>0) {return true}
  }
  return false
}