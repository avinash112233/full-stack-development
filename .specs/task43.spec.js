const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test43  #start_test", async() => {

  it("should contain source tag inside audio tag", async () => {
  
    let pathToFile = path.join(__dirname , "../structure.html");
    const dom = await createDom(pathToFile)
    const audio = dom.window.document.getElementsByTagName("AUDIO")[0]
    expect(audio.children.item(0).nodeName).to.be.equal("SOURCE")

  })

  it("should contain control attribute in audio tag", async () => {
  
    let pathToFile = path.join(__dirname , "../structure.html");
    const dom = await createDom(pathToFile)
    const audio = dom.window.document.getElementsByTagName("AUDIO")[0]
    expect(audio.getAttributeNames()).to.be.includes("controls")

  })

  it("should contain src and type in source tag inside audio tag", async () => {
  
    let pathToFile = path.join(__dirname , "../structure.html");
    const dom = await createDom(pathToFile)
    const audio = dom.window.document.getElementsByTagName("AUDIO")[0]
    expect(audio.children.item(0).attributes.getNamedItem("src").textContent).to.be.equal("https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/catSound.mp3")
    expect(audio.children.item(0).attributes.getNamedItem("type").textContent).to.be.equal("audio/mp3")

  })
  
});