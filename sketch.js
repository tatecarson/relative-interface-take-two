/* eslint-disable no-undef, no-unused-vars */

// TODO: see this as an example for a more complex layout:
// https://www.w3schools.com/css/tryit.asp?filename=trycss_website_layout_blog

// This example shows a way of organizing a GUI with two sections
// there are two containers each with their own interface elements
// each container is positioned with absolute coordiantes
// precentages are used to align the interface elements within the containers

function setup() {
  let superBigBox = createDiv();

  let bigBox = createDiv();
  bigBox.class("leftrow");
  bigBox.parent(superBigBox);
  bigBox.position(100, 100);

  bigBox.style("background-color: orange");

  let osc1 = createDiv("stuff");

  osc1.style("background-color: red");
  osc1.class("column");
  let osc2 = createDiv();

  osc2.class("column");
  osc2.style("background-color: blue");

  let box3 = createDiv("some text");
  box3.class("column");
  box3.style("background-color: green");

  osc1.parent(bigBox);
  osc2.parent(bigBox);
  box3.parent(bigBox);

  let checkboxes = [];
  for (let i = 0; i < 6; i++) {
    checkboxes[i] = createCheckbox();
    checkboxes[i].parent(osc1);
  }

  let sliders = [];

  for (let i = 0; i < 6; i++) {
    sliders[i] = createSlider(0, 1, 1, 0);
    sliders[i].size(100, 25);
    sliders[i].parent(osc2);
  }

  let secondBox = createDiv();
  secondBox.class("leftrow");
  secondBox.style("background-color:  #66ff33");
  secondBox.parent(superBigBox);
  secondBox.position(100, 250);

  let radioBox = createDiv().parent(secondBox);
  radioBox.style("background-color:   #ffcc33");
  radioBox.class("two-column");
  let radios = [];

  for (let i = 0; i < 5; i++) {
    radios[i] = createRadio();
    radios[i].option("sup?");
    radios[i].parent(radioBox);
  }

  let inputsBox = createDiv().parent(secondBox);
  inputsBox.style("background-color: #cc66ff");
  inputsBox.class("two-column");
  let inputs = [];

  for (let i = 0; i < 10; i++) {
    inputs[i] = createInput().parent(inputsBox);
  }
}

function draw() {}
