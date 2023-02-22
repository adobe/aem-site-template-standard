const xfHeader = () => {
  const $header = document.querySelector("#main-header");
  const $btn = document.createElement("button");
  const $elements = document.querySelectorAll(
    ".navigation, .search, .languagenavigation"
  );

  $btn.id = "mobile-header-button";
  $btn.setAttribute("aria-label", "Toggle Navigation");
  $header.appendChild($btn);

  $elements.forEach((el) => el.classList.add("hide"));

  const toggle = () => {
    $header.classList.toggle("open");
    $btn.classList.toggle("openbtn");
    $elements.forEach((el) => el.classList.toggle("hide"));
    document.body.classList.toggle("overflow-hidden");
  };

  $btn.addEventListener("click", toggle);
};

export default xfHeader;
