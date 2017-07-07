module.exports={
  getById:function(){
    if(id) return null;
    return document.getElementById(id);
  },
  showErrorTip:function(txt){
    if(!txt) return false;
    var mgAlert=this.getById("mgAlert");
    myAlert.style.top=35%
  }
}
