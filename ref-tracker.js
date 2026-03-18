(function(){
  var ref = new URLSearchParams(window.location.search).get('ref');
  if(ref){
    localStorage.setItem('lp_ref', ref);
    fetch('https://command.luminapath.ca/api/affiliate/click?code='+encodeURIComponent(ref)+'&page='+encodeURIComponent(window.location.pathname)).catch(function(){});
  }
})();
