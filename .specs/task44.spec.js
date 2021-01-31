const chai = require("chai");
const expect = chai.expect;
const path = require("path")
const createDom = require("./createDom").createDOM


describe("HTML Module test44  #start_test", async() => {

  it("should contain source & controls attributes inside video tag", async () => {
  
    let pathToFile = path.join(__dirname , "../structure.html");
    const dom = await createDom(pathToFile)
    const video = dom.window.document.getElementsByTagName("VIDEO")[0]
    expect(video.attributes.getNamedItem("src").textContent).to.be.equal("https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/catVideo.mp4")
    expect(video.getAttributeNames()).to.be.includes("controls")

  })

  it("should contain src in embed tag", async () => {
  
    let pathToFile = path.join(__dirname , "../structure.html");
    const dom = await createDom(pathToFile)
    const embed = dom.window.document.getElementsByTagName("EMBED")[0]
    expect(embed.attributes.getNamedItem("src").textContent).to.be.equal("https://course-assets-workspace.s3.ap-south-1.amazonaws.com/html/cat.gif")

  })
  
});