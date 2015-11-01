function Prompt(width, height, doc) {
  this.width = width,
  this.height = height
  this.doc = doc,
  this.display = function () {
    var dataStr =
        "width="+
        (this.width).toString()+
        ",height="+
        (this.height).toString();
    var promptWin = 
      window.open(
        "", 
        "", 
        dataStr
      );
    promptWin.document.write(this.doc);
  }  
}
