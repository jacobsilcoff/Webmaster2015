/**
* Makes an arrow open and close some text.
* How to use:
* document.getElementById("arrow name").onclick = function(){
*    dropDownArrow("arrow name", "text name");
* };
* @param arrow The id of the arrow being clicked (a string)
* @param elId The id of the element being toggled (a string)
*/
function dropDownArrow(arrow, elId)
{
    var element = document.getElementById(arrow);
    
    console.log("element.innerHTML == " + element.innerHTML);
    if (element.innerHTML === "❮")
    {
        document.getElementById(elId).style.visibility =
            "visible";
        element.innerHTML = "&#10095";
    }
    else
    {
        document.getElementById(elId).style.visibility =
            "hidden";
        element.innerHTML = "&#10094;"
    }
}
