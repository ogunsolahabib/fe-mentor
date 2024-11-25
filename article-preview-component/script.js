
function handleShareButtonClick(e) {
    e.stopPropagation();

    const shareContent = document.querySelector(".article__share-content");

    const { display } = shareContent.style;


    if (display === "none") {

        shareContent.style.display = "flex";
    } else {
        shareContent.style.display = "none";

    }

}

document.body.addEventListener("click", () => {
    const shareContent = document.querySelector(".article__share-content")

    if (shareContent.style.display !== "none") {
        shareContent.style.display = "none"
    }
})

document.querySelector(".article__share-button").addEventListener('click', handleShareButtonClick)