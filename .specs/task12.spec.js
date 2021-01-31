const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test12  #start_test", async() => {

  it("should contain source of video", async () => {
  
    let pathToFile = path.join(__dirname , "../brownBear.html");
    const dom = await createDom(pathToFile)
    let introduction = dom.window.document.getElementById("media")
    let hasTag = __isExist(introduction, "VIDEO", "src", "https://content.codecademy.com/courses/freelance-1/unit-1/lesson-2/htmlcss1-vid_brown-bear.mp4")
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
      if(node.nodeName===tag && node.attributes.getNamedItem(attribute).textContent===text) {return true}
    }
    return false
}