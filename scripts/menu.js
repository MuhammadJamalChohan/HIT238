// Sort By (From: https://www.w3schools.com/howto/howto_js_sort_list.asp)
// NOTE: THESE FUNCTIONS ARE A WORK IN PROGRESS.

function sortPriceAsc() {
    var itemList, priceList, switching, i
    
    itemList = document.getElementsByClassName("sort-by");
    priceList = document.getElementsByClassName("card-price");
    
    switching = true;
    while (switching) {
        switching = false;

        for (i = 0; i < (priceList.length - 1); i++) {
            if (Number(priceList[i].innerHTML) > Number(priceList[i + 1].innerHTML)) {
                priceList[i].parentNode.insertBefore(priceList[i + 1], priceList[i]);
                switching = true;
                break;
            }
        }
    }
}

function sortPriceDesc() {
    var itemList, priceList, switching, i
    
    itemList = document.getElementsByClassName("sort-by");
    priceList = document.getElementsByClassName("card-price");
    
    switching = true;
    while (switching) {
        switching = false;

        for (i = 0; i < (priceList.length - 1); i++) {
            if (Number(priceList[i].innerHTML) < Number(priceList[i + 1].innerHTML)) {
                priceList[i].parentNode.insertBefore(priceList[i + 1], priceList[i]);
                switching = true;
                break;
            }
        }
    }
}

function sortAlphaAsc() {
    var itemList, alphaList, switching, i
    
    itemList = document.getElementsByClassName("sort-by");
    alphaList = document.getElementsByClassName("card-title");
    
    switching = true;
    while (switching) {
        switching = false;

        for (i = 0; i < (alphaList.length - 1); i++) {
            if (alphaList[i].innerHTML.toLowerCase() > alphaList[i + 1].innerHTML.toLowerCase()) {
                alphaList[i].parentNode.insertBefore(alphaList[i + 1], alphaList[i]);
                switching = true;
                break;
            }
        }
    }
}

function sortAlphaDesc() {
    var itemList, alphaList, switching, i
    
    itemList = document.getElementsByClassName("sort-by");
    alphaList = document.getElementsByClassName("card-title");
    
    switching = true;
    while (switching) {
        switching = false;

        for (i = 0; i < (alphaList.length - 1); i++) {
            if (alphaList[i].innerHTML.toLowerCase() < alphaList[i + 1].innerHTML.toLowerCase()) {
                alphaList[i].parentNode.insertBefore(alphaList[i + 1], alphaList[i]);
                switching = true;
                break;
            }
        }
    }
}

// Filter By (From: https://www.w3schools.com/howto/howto_js_filter_elements.asp)

filterToggle("all")

function filterToggle(criteria) {
    /* By default, all items are shown. */
    if (criteria == "all") {
        criteria = "";
    }

    var itemList, item

    itemList = document.getElementsByClassName("filter-out");
    
    for (item = 0; item < itemList.length; item++) {
        removeItem(itemList[item], "show");
        if (itemList[item].className.indexOf(criteria) > -1) {
            addItem(itemList[item], "show");
        }
    }
}

// Show Items

function addItem(item, action) {
    var filterInList, actionList, i

    filterInList = item.className.split(" ");
    actionList = action.split(" ");

    for (i = 0; i < actionList.length; i++) {
        if (filterInList.indexOf(actionList[i]) == -1) {
            item.className += " " + actionList[i]; // This adds the specified class (in this case, "show") to the item.
        }
    }
}

// Hide Items

function removeItem(item, action) {
    var filterOutList, actionList, i

    filterOutList = item.className.split(" ");
    actionList = action.split(" ");

    for (i = 0; i < actionList.length; i++) {
        while (filterOutList.indexOf(actionList[i]) > -1) {
            filterOutList.splice(filterOutList.indexOf(actionList[i]), 1); // This removes the specified class (in this case, "show") from the item.
        }
    }

    item.className = filterOutList.join(" ")
}