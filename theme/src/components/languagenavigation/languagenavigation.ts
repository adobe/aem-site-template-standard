const getLanguageFromLangCode = (langCode: string) => {
  let language = langCode;
  switch (langCode) {
    case "en":
      language = "English";
      break;
    case "fr":
      language = "française";
      break;
    case "de":
      language = "Deutsch";
      break;
    case "it":
      language = "Italian";
      break;
    case "ru":
      language = "Russian";
      break;
    case "es":
      language = "Español";
      break;
    case "da":
      language = "Danish";
      break;
    case "ga":
      language = "Irish";
      break;
    case "pt":
      language = "Portuguese";
      break;
    case "ro":
      language = "Romanian";
      break;
    case "sv":
      language = "Swedish";
      break;
    case "tr":
      language = "Turkish";
      break;
  }
  return language;
};

const languageNavigation = () => {
  const $elements = document.querySelectorAll(".languagenavigation");

  $elements.forEach(($el) => {
    const $active = $el.querySelector(".cmp-languagenavigation__item--active");
    let langCode = "";
    let language = "language";
    const classes = [];
    if ($active) {
      $active.classList.forEach((className) => {
        if (!className.includes("active")) {
          if (className.includes("langcode")) {
            langCode = className.split("langcode-")[1];
            language = getLanguageFromLangCode(langCode);
          }
          classes.push(className);
        }
      });
    }

    const $toggleButton = document.createElement("button");
    const $activeText = document.createElement("span");

    const openLanguageNav = () => {
      $el.classList.toggle("open");
      requestAnimationFrame(() => {
        document.addEventListener("click", closeLanguageNav);
      });
    };

    const closeLanguageNav = (e) => {
      if (!$el.contains(e.target) && e.target !== $toggleButton) {
        $el.classList.remove("open");
      }
      document.removeEventListener("click", closeNavigationGroup);
    };

    $toggleButton.classList.add(...classes);
    $activeText.innerText = language;
    $toggleButton.classList.add("cmp-languagenavigation__button");
    $toggleButton.appendChild($activeText);
    $toggleButton.addEventListener("click", openLanguageNav);
    $el.querySelector(".cmp-languagenavigation").prepend($toggleButton);
  });
};

export default languageNavigation;
