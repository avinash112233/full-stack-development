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

describe("HTML Module test03  #start_test", () => {
  
  it("should contain div tag", async () => {
    let pathToFile = path.join(__dirname , "../index.html");
    let file_data = await readData(pathToFile);
    const dom = new JSDOM(file_data);
    let document = dom.window.document.body.children.item(1)
    expect(document.nodeName).to.be.equal("DIV")
  });
  
  it("should contain p tag inside div tag", async () => {
    let pathToFile = path.join(__dirname , "../index.html");
    let file_data = await readData(pathToFile);
    const dom = new JSDOM(file_data);
    let document = dom.window.document.body.children.item(1).children.item(0)
    expect(document.nodeName).to.be.equal("P")
  });
  
  it("should contain required data inside paragraph", async () => {
    let pathToFile = path.join(__dirname , "../index.html");
    let file_data = await readData(pathToFile);
    const dom = new JSDOM(file_data);
    let document = dom.window.document.body.children.item(1).children.item(0)
    expect(document.innerHTML).to.be.equal("This paragraph is a child of the div element and a grandchild of the body element")
  });
  
});