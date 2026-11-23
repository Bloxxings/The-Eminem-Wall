// Source - https://stackoverflow.com/a/67307183
// Posted by Liftoff, modified by community. See post 'Timeline' for change history
// Retrieved 2026-11-23, License - CC BY-SA 4.0

window.onload = function(){
  var viewmode = getCookie("viewmode");
  if(viewmode)
    document.getElementById('pagestyle').setAttribute('href', viewmode);
}

function swapStyleSheet(sheet){
  document.getElementById('pagestyle').setAttribute('href', sheet);
  setCookie("viewmode", sheet, 30);
}

function setCookie(name, value, days)
{
  var d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + value + "; expires=" + d.toUTCString() + "; path=/";
}

function getCookie(name)
{
  var cookies = document.cookie.split(";");
  for(var i = 0; i < cookies.length; i++)
  {
    var ck = cookies[i].trim().split("=");
    if(ck[0] == name)
      return ck[1];
  }
  
  return false;
}