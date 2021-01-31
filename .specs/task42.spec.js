const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test42  #start_test", async() => {

  it("should contain figure tag below section inside main section", async () => {
  
    let pathToFile = path.join(__dirname , "../structure.html");
    const dom = await createDom(pathToFile)
    let main = dom.window.document.body.getElementsByTagName("MAIN")[0]
    const figure = main.children.item(1)
    expect(figure.tagName).to.be.equal("FIGURE")
    expect(figure.getElementsByTagName("IMG")[0].attributes.getNamedItem("src").textContent).to.be.equal("https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/cat.jpg")

  })
  
});