let carouselArr = [];

class Carousel {

    constructor(image, title, url) {
        this.Image = image;
        this.Title = title;
        this.Url = url;
    }

    static Start(arr) {
        if (arr) {

            if (arr.length > 0) {

                carouselArr = arr;

                Carousel._sequence = 0;
                Carousel._size = arr.length;

                Carousel.CreateButtons();

                Carousel.Show(Carousel._sequence);

                Carousel._interval = setInterval(function () {
                    Carousel.Next();
                }, 2000);
            }

        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next() {

        if (Carousel._size === 0) {
            return;
        }

        Carousel._sequence++;

        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }

        Carousel.Show(Carousel._sequence);
    }

    static Previous() {

        if (Carousel._size === 0) {
            return;
        }

        Carousel._sequence--;

        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }

        Carousel.Show(Carousel._sequence);
    }

    static Show(position) {

        const carousel = document.getElementById("carousel");
        const carouselTitle = document.getElementById("carousel-title");

        if (!carousel || !carouselTitle) {
            return;
        }

        const item = carouselArr[position];

        const oldImage = carousel.querySelector("img");

        if (oldImage) {
            oldImage.remove();
        }

        const image = document.createElement("img");

        image.src = "img/" + item.Image;
        image.alt = item.Title;

        
        image.style.width = "70%";
        image.style.height = "auto";
        image.style.display = "block";
        image.style.margin = "0 auto";

        carousel.insertBefore(image, carousel.firstChild);

        carouselTitle.innerHTML = "";

        const link = document.createElement("a");

        link.href = item.Url;
        link.textContent = item.Title;

        carouselTitle.appendChild(link);
    }

    static CreateButtons() {

        const carousel = document.getElementById("carousel");

        if (!carousel) {
            return;
        }

        if (document.getElementById("carousel-previous")) {
            return;
        }

        carousel.style.position = "relative";

        const previousButton = document.createElement("button");

        previousButton.id = "carousel-previous";
        previousButton.textContent = "‹";
        previousButton.title = "Imagem anterior";

        previousButton.style.position = "absolute";
        previousButton.style.left = "20px";
        previousButton.style.top = "50%";
        previousButton.style.transform = "translateY(-50%)";
        previousButton.style.width = "45px";
        previousButton.style.height = "45px";
        previousButton.style.fontSize = "30px";
        previousButton.style.cursor = "pointer";
        previousButton.style.zIndex = "10";

        previousButton.onclick = function () {
            Carousel.Previous();
        };

        const nextButton = document.createElement("button");

        nextButton.id = "carousel-next";
        nextButton.textContent = "›";
        nextButton.title = "Próxima imagem";

        nextButton.style.position = "absolute";
        nextButton.style.right = "20px";
        nextButton.style.top = "50%";
        nextButton.style.transform = "translateY(-50%)";
        nextButton.style.width = "45px";
        nextButton.style.height = "45px";
        nextButton.style.fontSize = "30px";
        nextButton.style.cursor = "pointer";
        nextButton.style.zIndex = "10";

        nextButton.onclick = function () {
            Carousel.Next();
        };

        carousel.appendChild(previousButton);
        carousel.appendChild(nextButton);
    }
}