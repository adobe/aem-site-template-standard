// Stylesheets
import "./theme.scss";
import "./resources/images/favicon.png";

// Component Javascript
import "./components/form-options/form_dropdown.js";
import "./components/progressbar/progressbar.js";
import languageNavigation from "./components/languagenavigation/languagenavigation";
import xfHeader from "./components/experiencefragment/experiencefragment_header";

const documentReadyFunctions = () => {
  languageNavigation();
  xfHeader();
};

const runDocumentReadyFunctions = () => {
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    documentReadyFunctions();
  } else {
    requestAnimationFrame(runDocumentReadyFunctions);
  }
};

runDocumentReadyFunctions();
