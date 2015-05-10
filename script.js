$ = document.getElementById.bind(document);
function ReverseDisplay(d) {
    e = $(d)
    e.style.display = e.style.display == "none" ? "block" : "none";
}

function gen_switch(ids) {
    var idl = ids.split(" ")
    return function(id){
        for(var i = 0; i < idl.length; i++){
	    $(idl[i]).style.display = "none";
	}
	$(id).style.display = "block";
    }
}

window.addEventListener('load', function(){
	var el = document.getElementById('sitelinks');
	var title = document.getElementById('othersites');
	var spacer = document.getElementById('spacer');
	var h;
	var cs = document.defaultView.getComputedStyle(title, '');
//	h = title.offsetHeight + parseFloat(cs.getPropertyValue('margin-top')) + parseFloat(cs.getPropertyValue('margin-bottom'))
	window.addEventListener('scroll', function(){
		if((window.pageYOffset || document.documentElement.scrollTop) > spacer.offsetTop){
			spacer.style.height = el.offsetHeight + 'px';
			el.style.position = 'fixed';
		}else{
			spacer.style.height = '';
			el.style.position = '';
		}
	});
});

