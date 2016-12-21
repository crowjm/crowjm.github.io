document.addEventListener('DOMContentLoaded', function() {
    function toggle() {
	  
	  var mainNav = document.getElementById('nav--main');
	  var mainNavToggle = mainNav.dataset.state;
	  var menu = document.getElementById('menu');
	  
	  if (mainNavToggle==="open") { 
	    mainNav.dataset.state = "closed"; 
	  } else {
	    mainNav.dataset.state = "open";
	  }
	  mainNavToggle = mainNav.dataset.state;
	};

	menu.onclick = toggle;
}, false);