import {greeting} from "./greeting.js";
import "./style.css";
import odinImage from "./images/odin.png";

console.log(greeting);


const image = document.createElement("img");
image.src = odinImage;
   
document.body.appendChild(image);