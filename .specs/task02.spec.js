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

describe("HTML Module test02  #start_test", () => {
  
  it("should contain body tag", async () => {
    let pathToFile = path.join(__dirname , "../index.html");
    let file_data = await readData(pathToFile);
    const opening_position = file_data.indexOf("<body>")
    const closing_position = file_data.indexOf("</body>", opening_position)
    expect(opening_position).to.be.lessThan(closing_position)
  });

  it("should contain Heading", async () => {
      let pathToFile = path.join(__dirname , "../index.html");
      let file_data = await readData(pathToFile);
      const dom = new JSDOM(file_data);
      let document = dom.window.document.body.children.item(0)
      expect(document.nodeName).to.be.equal("H1")
  });
});