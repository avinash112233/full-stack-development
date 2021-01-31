const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test07  #start_test", () => {
  
  it("should contain required paragraphs in the first div element of body", async () => {

    let pathToFile = path.join(__dirname , "../brownBear.html");
    const dom = await createDom(pathToFile)
    let introduction = dom.window.document.getElementById("introduction")
    let item1 = __getPosition(introduction, "H2", "About Brown Bears")
    let item2 = __getPosition(introduction, "H3", "Features")
    let flag1 = __isComeAfter(introduction, item1, "(Ursus arctos)")
    let flag2 = __isComeAfter(introduction, item2, "reddish or yellowish.")

    expect(flag1).to.be.equal(true)
    expect(flag2).to.be.equal(true)

  });

    it("should contain required paragraphs in the second div element of body", async () => {

        let pathToFile = path.join(__dirname , "../brownBear.html");
        const dom = await createDom(pathToFile)
        let habitat = dom.window.document.getElementById("habitat")
        let item1 = __getPosition(habitat, "H3", "Countries with Small Brown Bear Populations")
        let flag1 = __isComeAfter(habitat, item1, "Belarus, Bulgaria, China, Finland, France, Greece")

        expect(flag1).to.be.equal(true)
    })
  
  
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
}


/**
 * Function tells whether a context comes after any particular node in it's children or not
 * @param {*} dom Dom object
 * @param {*} index Index number of node child after which context has to be searched
 * @param {*} context Context of node
 */
function __isComeAfter(dom, index, context){
    for(let i=0; i<dom.children.length; i++){
        const node = dom.children.item(i)
        if(i>index && node.textContent.indexOf(context>0)) return true
    }
    return false
}