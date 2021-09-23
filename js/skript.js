///SVG logos that used to link socials
$("#graphide").load("assets/logos/graphide.svg")
$("#yessness").load("assets/logos/yessness.svg")
$("#discord").load("assets/logos/discord.svg")
$("#github").load("assets/logos/github.svg")
$("#twitter").load("assets/logos/twitter.svg")
$("#document").load("assets/logos/document.svg")

const toolbarOffset = document.querySelector("#tool-bar").offsetTop;

///fixed tool bar at top of screen
window.onscroll = function () {
///console.log(window.pageYOffset)

    if (window.pageYOffset > toolbarOffset) {
        document.querySelector("#tool-bar").style.position = "fixed"
    } else {
        document.querySelector("#tool-bar").style.position = "initial"
    }
}

function projectDropDow(element)
{
    if(element.nextElementSibling.style.display === "initial") {
        element.nextElementSibling.style.display = "none";
    } else {
        element.nextElementSibling.style.display = "initial";
    }

}