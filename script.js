/**
* Makes an arrow open and close some text.
* How to use:
* Copy and paste the following, removing "*", and 
* inserting the correct ids
* document.getElementById("arrow").onclick = function(){
*    dropDownArrow("arrow", "text");
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

document.getElementById("arrow").onclick = function(){
   dropDownArrow("arrow", "probinfo");
