onDocumentReady(styleTeasersWithoutAssetConfigured);
onNewTeaserComponentInsertedIntoDom(styleTeasersWithoutAssetConfigured);

// styles the teasers that don't have an asset configured, to be properly displayed in Page Editor and to have pretitle, title, description, link rendered in black text color
function styleTeasersWithoutAssetConfigured() {
    var teaserComponents = document.getElementsByClassName('cmp-teaser');
    if (teaserComponents.length) {
        for (var i = 0; i < teaserComponents.length; i++) {
            if (teaserComponents[i].querySelector(".cmp-teaser__image") === null) {
                var teaserContent = teaserComponents[i].querySelector(".cmp-teaser__content");
                if (teaserContent !== null) {
                    teaserContent.style.position = "relative";
                    teaserContent.style.left = "0px";
                    teaserContent.style.top = "0px";
                    teaserContent.style.transform = "none";
                    if (teaserContent.querySelector(".cmp-teaser__title") !== null) {
                        teaserContent.querySelector(".cmp-teaser__title").style.color = "#000000";
                    }
                    if (teaserContent.querySelector(".cmp-teaser__pretitle") !== null) {
                        teaserContent.querySelector(".cmp-teaser__pretitle").style.color = "#000000";
                    }
                    if (teaserContent.querySelector(".cmp-teaser__description") !== null) {
                        teaserContent.querySelector(".cmp-teaser__description").style.color = "#000000";
                    }
                    if (teaserContent.querySelector(".cmp-teaser__title-link") !== null) {
                        teaserContent.querySelector(".cmp-teaser__title-link").style.color = "#000000";
                    }
                }
            }
        }
    }
}

function onNewTeaserComponentInsertedIntoDom(callback) {
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                for (var i = 0; i < mutation.addedNodes.length; i++) {
                    if (mutation.addedNodes[i].classList && mutation.addedNodes[i].classList.contains("teaser")) {
                        callback();
                        break;
                    }
                }
            }
        });
    });
    observer.observe(document.body, {
        subtree: true,
        childList: true
    });
}

function onDocumentReady(callback) {
    if (document.readyState !== 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}









