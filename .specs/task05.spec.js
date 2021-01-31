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

describe("HTML Module test05  #start_test", () => {
  
  it("should contain required number of div element", async () => {
    let pathToFile = path.join(__dirname , "../brownBear.html");
    let file_data = await readData(pathToFile);
    const dom = new JSDOM(file_data);
    let document = dom.window.document.body.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "div")
    
    let arr = []
    for(let i=0; i<document.length; i++){
        if(document.item(i).parentNode.nodeName==="BODY"){
            const innerHTML = document.item(i).innerHTML
            if(innerHTML.includes("<h2>About Brown Bears</h2>")&&innerHTML.includes("<h3>Species</h3>")&&innerHTML.includes("<h3>Features</h3")){
                arr.push(0)
            }else if(innerHTML.includes("<h2>Habitat</h2>")&&innerHTML.includes("<h3>Countries with Large Brown Bear Populations</h3>")&&innerHTML.includes("<h3>Countries with Small Brown Bear Populations</h3>")){
                arr.push(1)
            }else if(innerHTML.includes("<h2>Media</h2>")){
                arr.push(2)
            }
        }
    }

    expect(arr[0]).to.be.equals(0)
    expect(arr[1]).to.be.equals(1)
    expect(arr[2]).to.be.equals(2)
    expect(arr.length).to.be.equal(3)

  });
  
  
});