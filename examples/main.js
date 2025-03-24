import { MineWindow, MineButton } from '../src/core.js';

const myWindow = new MineWindow("My First Mine App");
const myButton = new MineButton("Click Me!", () => alert("Button Clicked!"));

myWindow.addElement(myButton);