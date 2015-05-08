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
