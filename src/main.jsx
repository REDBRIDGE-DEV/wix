import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HelloWorld from "./components/HelloWorld.jsx";
import reactToWebComponent from "react-to-webcomponent";

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// class HelloWorldElement extends HTMLElement {
//   connectedCallback() {
//     const mountPoint = document.createElement("div");
//     this.appendChild(mountPoint);
//     const root = createRoot(mountPoint);
//     root.render(<HelloWorld />);
//   }
// }

// customElements.define("bid-widget", HelloWorldElement);

const WebComponent = reactToWebComponent(HelloWorld, React, ReactDOM);
customElements.define("helloworld-widget", WebComponent);
