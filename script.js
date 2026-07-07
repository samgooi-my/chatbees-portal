var PORTAL_URL = "";
  if (PORTAL_URL) {
    document.getElementById('redirecting').style.display = 'block';
    document.getElementById('manualBtn').setAttribute('href', PORTAL_URL);
    setTimeout(function(){ window.location.replace(PORTAL_URL); }, 900);
  } else {
    document.getElementById('comingSoon').style.display = 'block';
  }