const fs = require("fs");
const chai = require("chai");
const expect = chai.expect;
const path = require("path")

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const readData = path => {
  return new Promise((res, rej) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        rej("Error in reading");
      } else {
        res(data);
      }
    });
  });
};

describe("HTML Module test06  #start_test", () => {
  
  it("should contain id attribute in child div element of body", async () => {

    let pathToFile = path.join(__dirname , "../brownBear.html");
    let file_data = await readData(pathToFile);
    const dom = new JSDOM(file_data);
    let document = dom.window.document.body.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "div")
    let flag = false
    for(let i=0; i<document.length; i++){
        if(document.item(i).parentNode.nodeName==="BODY"){

            if(document.item(i).getAttributeNames().includes("id")) flag=true
            
        }
    }
    expect(flag).to.be.equal(true)

  });

  it("ID should be there in DIV element only", async () => {

    let pathToFile = path.join(__dirname , "../brownBear.html");
    let file_data = await readData(pathToFile);
    const dom = new JSDOM(file_data);
    let document1 = dom.window.document.body.children.namedItem("introduction")
    expect(document1.nodeName).to.be.equal("DIV")
    expect(document1.parentElement.nodeName).to.be.equal("BODY")
    let document2 = dom.window.document.body.children.namedItem("habitat")
    expect(document2.nodeName).to.be.equal("DIV")
    expect(document2.parentElement.nodeName).to.be.equal("BODY")
    let document3 = dom.window.document.body.children.namedItem("media")
    expect(document3.nodeName).to.be.equal("DIV")
    expect(document3.parentElement.nodeName).to.be.equal("BODY")

  });
  
  
});