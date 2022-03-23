// Header Ul 

$(".burger-icons").click(function () {
    $(".header ul").slideToggle("2000")
})

let landingSpans = document.querySelectorAll(".landing .bullets span")
let landingVideo = document.querySelectorAll(".landing .video")

landingSpans.forEach((span) => {
    span.addEventListener("click", AddActiveClass)
    span.addEventListener("click", MangelandingImg)
})

function AddActiveClass() {
    landingSpans.forEach((span)=> {
        span.classList.remove("active")
        this.classList.add("active")
    })
}

function MangelandingImg() {
    landingVideo.forEach((div)=> {
        div.style.display = "none"
    })
    document.querySelectorAll(this.dataset.class).forEach((span)=> {
        span.style.display = "block"
    })
}

// Gallery Section 

let GalleryImg = document.querySelectorAll(".gallery img")

console.log(GalleryImg)

GalleryImg.forEach((img)=> {

    img.addEventListener("click" , function () {

        let overly = document.createElement("div")

        overly.className = "overly-box"

        document.body.appendChild(overly)

        let BoxImg = document.createElement("div")

        BoxImg.className = "box-img"

        overly.appendChild(BoxImg)

        if (img.alt !== " ") {

            let alt = document.createElement("h2")

            let altText = document.createTextNode(img.alt)

            alt.appendChild(altText)

            BoxImg.appendChild(alt)
        }

        let ImgBox = document.createElement("img")

        ImgBox.src = img.src 

        BoxImg.appendChild(ImgBox)

        let CloseButton = document.createElement("span")

        CloseButton.className = "close-button"

        BoxImg.appendChild(CloseButton)

        let CloseButtonText = document.createTextNode("X")

        CloseButton.appendChild(CloseButtonText)

        document.addEventListener("click" , function (el) {

            if (el.target.className === "close-button") {
                BoxImg.remove()

                overly.remove()

            }
        })

    })
})

// Fixed Header 

let Header = document.querySelector(".header")

let ButtonToTop = document.querySelector("span.to-top")
ButtonToTop.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}

window.onscroll = function () {

    // Fixed Header

    if (window.scrollY >=1000) {

        Header.classList.add("active")

        ButtonToTop.classList.add("active")

    } else {
        Header.classList.remove("active")
        ButtonToTop.classList.remove("active")
    }
}