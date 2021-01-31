const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test10  #start_test", async() => {

  it("should contain image with source in second div element", async () => {

    let pathToFile = path.join(__dirname , "../brownBear.html");
    const dom = await createDom(pathToFile)
    let introduction = dom.window.document.getElementById("media")
    let hasTag = __isExist(introduction, "IMG", "src" ,"https://s3.amazonaws.com/codecademy-content/courses/web-101/web101-image_brownbear.jpg")
    expect(hasTag).to.be.equal(true)

  });

});


/**
 *
 * @param {*} dom DOM object
 * @param {*} tag Tag name to be search
 * @param {*} text Full text content of that tag
 */
function __isExist(dom, tag, attribute ,text){
  for(let i=0; i<dom.children.length; i++){
    const node = dom.children.item(i)
    let flag = false
    if(node.children.length) {
      flag = __isExist(node, tag, attribute, text)
    }
    if(flag) return true
    if(node.nodeName===tag && node.attributes.getNamedItem(attribute).textContent===text) {return true}
  }
  return false
}
