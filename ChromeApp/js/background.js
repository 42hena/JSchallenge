const images = [
    "winter1.jpg", "winter2.jpg","winter3.jpg","winter4.jpg","winter5.jpg","winter6.jpg","winter7.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src=`img/${chosenImage}`
bgImage.style.Width="100%"
bgImage.style.Height="100%"
bgImage.style.left = "0"
bgImage.style.right = "0"
bgImage.style.top = "0"
bgImage.style.bottom = "0"
bgImage.style.margin = "0"

bgImage.style.position="fixed"
bgImage.style.zIndex="-1"
document.body.appendChild(bgImage);