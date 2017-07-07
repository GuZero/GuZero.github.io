module.exports={
  getById:function(){
    if(id) return null;
    return document.getElementById(id);
  },
  showErrorTip:function(txt){
    if(!txt) return false;
    var mgAlert=this.getById("mgAlert");
    myAlert.style.top=35%;
    mgAlert.setAttribute('class','mgAlert center fixed f14 mgAlert-error showAlert');
    mgAlert.innerHTML=txt;
    if(window.errorTimer){
      clearTimeout(window.errorTimer);
      window.errorTimer = null;
    }
    window.errorTimer = setTimeout(function () {
           mgAlert.setAttribute('class', 'mgAlert center fixed f14');
           setTimeout(function () {
               mgAlert.style.top = '-35%';
           }, 300);
    }, 2000);
  },
  showSuccessTip: function (txt) {
        if (!txt) return false;
        var mgAlert = this.getById("mgAlert");
        mgAlert.style.top = '35%';
        mgAlert.setAttribute('class', 'mgAlert center fixed f14 mgAlert-success showAlert');
        mgAlert.innerHTML = txt;
        setTimeout(function () {
            mgAlert.setAttribute('class', 'mgAlert center fixed f14');
            setTimeout(function () {
                mgAlert.style.top = '-35%';
            }, 300);
        }, 2500);
    }
}
