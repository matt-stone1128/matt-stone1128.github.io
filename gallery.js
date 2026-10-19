const galleries = {
  kitchens: {
    number: "01",
    title: "Kitchens",
    description: "Warm, welcoming kitchens designed around the everyday.",
    photos: [
      {
        src: "images/kitchens/kitchen-island.jpg",
        alt: "Contemporary kitchen with a generous island",
        caption: "A kitchen made for gathering",
      },
      {
        src: "images/kitchens/kitchen-detail.jpg",
        alt: "Thoughtfully finished kitchen renovation",
        caption: "Details that bring a room together",
      },
      {
        src: "images/kitchens/kitchen-cabinetry.jpg",
        alt: "Modern kitchen with refined cabinetry",
        caption: "Storage, considered",
      },
    ],
  },
  bathrooms: {
    number: "02",
    title: "Bathrooms",
    description:
      "Quiet, carefully finished spaces made for a fresh start to the day.",
    photos: [
      {
        src: "images/bathrooms/bathroom-finish.jpg",
        alt: "Calm bathroom with natural finishes",
        caption: "Everyday, a little more restful",
      },
      {
        src: "images/bathrooms/bathroom-retreat.jpg",
        alt: "Spa-inspired bathroom renovation",
        caption: "A room to reset",
      },
    ],
  },
  "whole-home": {
    number: "03",
    title: "Whole-home renovations",
    description:
      "A more connected home, thoughtfully renewed from room to room.",
    photos: [
      {
        src: "images/whole-home/open-plan-living.jpg",
        alt: "Open-plan living room with natural materials",
        caption: "Room to live together",
      },
      {
        src: "images/whole-home/connected-interiors.jpg",
        alt: "Sunlit, remodeled home interior",
        caption: "A brighter sense of home",
      },
      {
        src: "images/whole-home/home-exterior.jpg",
        alt: "Contemporary home exterior",
        caption: "A fresh perspective, inside and out",
      },
    ],
  },
  "additions-interiors": {
    number: "04",
    title: "Additions & interiors",
    description:
      "More room to grow, with details that feel at home from day one.",
    photos: [
      {
        src: "images/additions-interiors/home-addition.jpg",
        alt: "Contemporary home with a considered exterior",
        caption: "A natural extension of home",
      },
      {
        src: "images/additions-interiors/exterior-materials.jpg",
        alt: "Modern home with timber and glass finishes",
        caption: "Materials with a point of view",
      },
      {
        src: "images/additions-interiors/interior-finishes.jpg",
        alt: "Open living space with considered finishes",
        caption: "The finishing touches",
      },
    ],
  },
};

const category = new URLSearchParams(window.location.search).get("category");
const gallery = galleries[category];
const title = document.querySelector("#gallery-title");
const description = document.querySelector("#gallery-description");
const number = document.querySelector("#gallery-number");
const grid = document.querySelector("#gallery-grid");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");

if (gallery) {
  document.title = `${gallery.title} | Stone Construction`;
  title.textContent = gallery.title;
  description.textContent = gallery.description;
  number.textContent = gallery.number;

  gallery.photos.forEach((photo, index) => {
    const item = document.createElement("button");
    item.className = "gallery-item";
    item.type = "button";
    item.setAttribute(
      "aria-label",
      `View photo ${index + 1}: ${photo.caption}`,
    );

    const image = document.createElement("img");
    image.src = photo.src;
    image.alt = photo.alt;
    image.loading = "lazy";

    const caption = document.createElement("span");
    caption.className = "gallery-caption";
    caption.textContent = photo.caption;

    const count = document.createElement("span");
    count.className = "gallery-count";
    count.textContent = String(index + 1).padStart(2, "0");

    item.append(image, caption, count);
    item.addEventListener("click", () => {
      lightboxImage.src = photo.src;
      lightboxImage.alt = photo.alt;
      lightboxCaption.textContent = photo.caption;
      lightbox.showModal();
    });
    grid.append(item);
  });
} else {
  title.textContent = "Gallery not found";
  description.textContent = "Choose a service to explore its project gallery.";
  number.textContent = "SC";
  grid.innerHTML =
    '<a class="button button-dark gallery-services-link" href="index.html#services">Browse our services <span aria-hidden="true">↗</span></a>';
}

document
  .querySelector(".lightbox-close")
  .addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
