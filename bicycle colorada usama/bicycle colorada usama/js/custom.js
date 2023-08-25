const searchBar = document.querySelector(".searchbar-outer");
const openMenu = document.querySelector(".submenu-content");

openSearch = () => {
  searchBar.style.visibility = "visible";
  searchBar.style.height = "320px";
};
closeSearch = () => {
  searchBar.style.visibility = "hidden";
  searchBar.style.height = "0px";
};
menuToggle = () => {
  openMenu.style.display =
    openMenu.style.display === "block" ? "none" : "block";
};
$(".slider-content").slick({
  scenterMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
});
