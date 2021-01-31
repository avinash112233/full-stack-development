const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test09  #start_test", async() => {

  it("should contain unordered list in first div element", async () => {
  
    let pathToFile = path.join(__dirname , "../brownBear.html");
    console.log("<------You also have to create ordered list in second div element------>")
    console.log("<------Will get to know in next wiki page------>")
    const dom = await createDom(pathToFile)
    let introduction = dom.window.document.getElementById("introduction")
    let index1 = __getPosition(introduction, "H3", "Species")
    const arr = ["Arctos", "Collarus", "Horribilis", "Nelsoni (extinct)"]
    const result = __isComeAfter(introduction, index1, "UL", arr)
    expect(result).to.be.equal(true)

  });

  it("should contain ordered list in second div element", async () => {
  
    let pathToFile = path.join(__dirname , "../brownBear.html");
    const dom = await createDom(pathToFile)
    let introduction = dom.window.document.getElementById("habitat")
    let index1 = __getPosition(introduction, "H3", "Countries with Large Brown Bear Populations")
    const arr = ["Russia", "United States", "Canada"]
    const result = __isComeAfter(introduction, index1, "OL", arr)
    expect(result).to.be.equal(true)

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
 * Function tells whether a context comes after any particular node in it's children or not
 * @param {*} dom Dom object
 * @param {*} index Index number of node child after which context has to be searched
 * @param {*} tag Tag element to be searched
 * @param {*} arrLI Array list containing textContent within HTMLlist
 */
function __isComeAfter(dom, index, tag, arrLI){
    for(let i=index+1; i<dom.children.length; i++){
        const node = dom.children.item(i)
            if(node.nodeName===tag && node.children.length===arrLI.length){
                let count = 0
                for(let y=0; y<node.children.length; y++){
                    const InnerNode = node.children.item(y)
                    if(arrLI[y]===InnerNode.textContent) count++
                }
                if(count===arrLI.length) return true
            }
    }
    return false
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