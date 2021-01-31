const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test20  #start_test", async() => {

  it("should contain unordered list before first div element", async () => {
  
    let pathToFile = path.join(__dirname , "../brownBear.html");
    const dom = await createDom(pathToFile)
    let body = dom.window.document.body
    let index1 = __getPosition(body, "UL", 3)
    const href = ["#introduction", "#habitat", "#media"]
    const arr = ["Introduction", "Habitat", "Media",]
    const result = __isExist(body.children.item(index1), "LI" ,href, arr)
    expect(result).to.be.equal(true)

  });

});


/**
 * Function return position of any tag element by searching across its tagName and text content
 * @param {*} dom Dom object
 * @param {*} tagName Tag name to be searched of
 * @param {*} context Context of node
 */
function __getPosition(dom, tagName, length){
    for(let i=0; i<dom.children.length; i++){
        const node = dom.children.item(i)
        if(node.nodeName===tagName && node.children.length===length) return i
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
function __isExist(dom, tag, href, arr){
    let count = 0
    for(let i=0; i<dom.children.length; i++){
        const node = dom.children.item(i)
        if(node.nodeName===tag && node.children.item(0).attributes.getNamedItem("href").textContent===href[i] && node.children.item(0).textContent===arr[i]){
            count++
        }
        if(count===href.length) return true
    }
    return false
}