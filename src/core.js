class MineWindow {
    constructor(title = "Mine Window", width = 800, height = 600) {
      this.title = title;
      this.width = width;
      this.height = height;
      this.elements = [];
      this.createWindow();
    }
  
    createWindow() {
      this.win = document.createElement("div");
      this.win.style.width = `${this.width}px`;
      this.win.style.height = `${this.height}px`;
      this.win.style.border = "1px solid black";
      this.win.style.position = "fixed";
      this.win.style.top = "50%";
      this.win.style.left = "50%";
      this.win.style.transform = "translate(-50%, -50%)";
      this.win.style.backgroundColor = "white";
      this.win.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
      
      const titleBar = document.createElement("div");
      titleBar.style.height = "30px";
      titleBar.style.backgroundColor = "#333";
      titleBar.style.color = "white";
      titleBar.style.display = "flex";
      titleBar.style.alignItems = "center";
      titleBar.style.justifyContent = "center";
      titleBar.innerText = this.title;
      
      this.win.appendChild(titleBar);
      document.body.appendChild(this.win);
    }
  
    addElement(element) {
      this.elements.push(element);
      this.win.appendChild(element.getElement());
    }
  }
  
  class MineButton {
    constructor(label, onClick) {
      this.label = label;
      this.onClick = onClick;
      this.createButton();
    }
  
    createButton() {
      this.btn = document.createElement("button");
      this.btn.innerText = this.label;
      this.btn.style.margin = "10px";
      this.btn.addEventListener("click", this.onClick);
    }
  
    getElement() {
      return this.btn;
    }
  }
  
  export { MineWindow, MineButton };