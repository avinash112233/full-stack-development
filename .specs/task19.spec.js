const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test19  #start_test", () => {
  
  it("should provide _blank target to the link", async () => {

    let pathToFile = path.join(__dirname , "../brownBear.html");
    const dom = await createDom(pathToFile)
    const introduction = dom.window.document.getElementById("introduction")
    let index1 = __getPosition1(introduction, "H3", "Species")
    let hasAnchor = __isComeBefore(introduction, index1, "target", "_blank", "Learn More")
    expect(hasAnchor!==null).to.be.equal(true)
    
  });
  
  it("should wrap image with a link", async () => {

    let pathToFile = path.join(__dirname , "../brownBear.html");
    const dom = await createDom(pathToFile)
    const media = dom.window.document.getElementById("media")
    let index1 = __getPosition(media, "A", "href", "https://en.wikipedia.org/wiki/Brown_bear", "target", "_blank")
    let hasAnchor = __isExist(media.children.item(index1), "IMG", "src","https://s3.amazonaws.com/codecademy-content/courses/web-101/web101-image_brownbear.jpg")
    expect(hasAnchor).to.be.equal(true)
    
  });

});




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

/**
 * Function return position of any tag element by searching across its tagName and text content
 * @param {*} dom Dom object
 * @param {*} tagName Tag name to be searched of
 * @param {*} context Context of node
 */
function __getPosition(dom, tagName, attribute1, attributeContext1, attribute2, attributeContext2){
    for(let i=0; i<dom.children.length; i++){
        const node = dom.children.item(i)
        if(node.nodeName===tagName && node.attributes.getNamedItem(attribute1) && node.attributes.getNamedItem(attribute1).textContent===attributeContext1 && node.attributes.getNamedItem(attribute2) && node.attributes.getNamedItem(attribute2).textContent===attributeContext2) return i
    }
    return null
}


/**
 * Function tells whether a context comes after any particular node in it's children or not
 * @param {*} dom Dom object
 * @param {*} index Index number of node child after which context has to be searched
 * @param {*} context Context of node
 */
function __isExist(dom, tag, attribute, attributeContext){
    for(let i=0; i<dom.children.length; i++){
        const node = dom.children.item(i)
        if(node.nodeName===tag && node.attributes.getNamedItem(attribute) && node.attributes.getNamedItem(attribute).textContent===attributeContext) return true
    }
    return false
}


/**
 * Function return position of any tag element by searching across its tagName and text content
 * @param {*} dom Dom object
 * @param {*} tagName Tag name to be searched of
 * @param {*} context Context of node
 */
function __getPosition1(dom, tagName, context){
  for(let i=0; i<dom.children.length; i++){
      const node = dom.children.item(i)
      if(node.nodeName===tagName && node.textContent===context) return i
  }
  return null
}