var body = document.createElement("div");
body.setAttribute("class", "body");
var container = document.createElement("div");
container.setAttribute("class", "container");
var row = document.createElement("div");
row.setAttribute("class", "row");
var column = document.createElement("div");
column.setAttribute("class", "col-md-12");
column.innerHTML = "<h1>Search for Nationality based on Name</h1>";
body.append(container);
container.append(row);
row.append(column);
document.body.append(body);



var row1 = document.createElement("div");
row1.setAttribute("class", "row");
var column1 = document.createElement("div");
column1.setAttribute("class", "col-md-12");
var div = document.createElement("div");
div.setAttribute("class", "div");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "name");
input.setAttribute("placeholder", "Enter a Name");
var button = document.createElement("button");
button.setAttribute = ("type", "button");
button.setAttribute = ("class", "name1");
button.innerHTML = "Search";
button.addEventListener("click", foo);

var content = document.createElement("div");
content.setAttribute("class", "content");
content.setAttribute("id", "active");
var content1 = document.createElement("div");
content1.setAttribute("class", "content");
content1.setAttribute("id", "active1");
var content2 = document.createElement("div");
content2.setAttribute("class", "content");
content2.setAttribute("id", "active2");
var content3 = document.createElement("div");
content3.setAttribute("class", "content");
content3.setAttribute("id", "active2");





body.append(row1);
row1.append(column1);
column1.append(div);
div.append(input);
div.append(button);
div.append(content);
div.append(content1);
div.append(content2);
div.append(content3);
document.body.append(body);

async function foo() {
  let res = document.getElementById("name").value;
  var url = `https://api.nationalize.io?name=${res}`;
  let result = await fetch(url);
  let result1 = await result.json();
  console.log(result1.country[0].country_id);


  content.innerHTML = `<b>1).First Possible Name of Country Based On Name : <span style="color: green">${result1.country[0].country_id}</span></b>`;
  content1.innerHTML = `<b>2).Second Possible Name of Country Based On Name : <span style="color:green">${result1.country[1].country_id}</span></b>`;
  content2.innerHTML = `<b>3).First Probability value is : <span style="color:green">${result1.country[0].probability}</span></b>`;
  content3.innerHTML = `<b>4). Second Probability value is :<span style="color:green"> ${result1.country[1].probability}</span></b>`;
}




