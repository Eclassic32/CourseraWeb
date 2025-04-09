/*Name this external file gallery.js*/

function upDate(previewPic) {
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
    */
    console.log("upDate function triggered");
    console.log("Image source:", previewPic.src);
    console.log("Alt text:", previewPic.alt);

    // Change the text of the div with id "image" to the alt text of the preview image
    document.getElementById("image").innerHTML = previewPic.alt;

    // Change the background image of the div with id "image" to the source of the preview image
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the original image. You can use the CSS code to see what that original URL was
       
       2) Change the text of the div with the id = "image" 
       back to the original text. You can use the HTML code to see what that original text was
    */
    console.log("unDo function triggered");

    // Reset the background image to the original empty URL
    document.getElementById("image").style.backgroundImage = "url('')";

    // Reset the text to the original text
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

function focusUpdate(previewPic) {
    /* Similar to upDate, but triggered on focus */
    console.log("focusUpdate function triggered");
    upDate(previewPic);
}

function blurUndo() {
    /* Similar to unDo, but triggered on blur */
    console.log("blurUndo function triggered");
    unDo();
}

function addTabFocus() {
    /* Add tabindex attributes and event listeners for focus and blur */
    console.log("addTabFocus function triggered");

    // Get all images with the class "preview"
    const images = document.querySelectorAll(".preview");

    // Loop through each image
    for (let i = 0; i < images.length; i++) {
        // Add tabindex attribute
        images[i].setAttribute("tabindex", "0");

        // Add event listeners for focus and blur
        images[i].addEventListener("focus", function () {
            focusUpdate(images[i]);
        });
        images[i].addEventListener("blur", blurUndo);
    }
}

// Add the onload event listener to call addTabFocus
window.onload = addTabFocus;