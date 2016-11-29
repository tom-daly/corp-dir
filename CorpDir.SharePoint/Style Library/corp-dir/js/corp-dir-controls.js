var corpDir = window.corpDir || {};
corpDir.controls = (function() {

    var clearSelectedLetter = function() {
        var corpDirControls = document.getElementById(corpDir.common.globals.corpDirControlsId);
        var activeLetterId = corpDirControls.getAttribute(corpDir.common.globals.corpDirActiveLetterAttr);
        if (activeLetterId) {
            var activeLetter = document.getElementById(activeLetterId);
            if (activeLetter) {
                activeLetter.className = activeLetter.className.split(' ')[0];
            }
        }
    };

    var search = function(letter) {
        var corpDirControls = document.getElementById(corpDir.common.globals.corpDirControlsId);
        var currentLetterId = "letter-" + letter;
        var activeLetterId = corpDirControls.getAttribute(corpDir.common.globals.corpDirActiveLetterAttr);
        var updateParts, filter;
        clearSelectedLetter();
        if (letter === "" || letter.length === 0 || currentLetterId === activeLetterId) {
            filter = "*";
            corpDirControls.setAttribute(corpDir.common.globals.corpDirActiveLetterAttr, "");
        } else {
            //if not the same letter - set a new letter
            var currentLetter = document.getElementById(currentLetterId);
            currentLetter.className = currentLetter.className + " active";
            corpDirControls.setAttribute(corpDir.common.globals.corpDirActiveLetterAttr, currentLetterId);
            filter = "LastName:" + letter + "*";
        }
        var prefix = "Default=";
        var existingSearch = window.location.hash.substring(1);
        if (existingSearch.length > 0 && existingSearch.indexOf(prefix) !== -1) {
            var decodedHash = decodeURIComponent(existingSearch.replace(/\+/g, " "));
            var hashObj = JSON.parse(decodedHash.substring(decodedHash.indexOf(prefix) + prefix.length));
            hashObj.k = filter;
            updateParts = {
                Default: JSON.stringify(hashObj)
            };
        } else {
            updateParts = {
                Default: "{\"k\": \"" + filter + "\"}"
            };
        }
        ajaxNavigate.update(null, updateParts);
    }

    var init = function() {
        var corpDirControls = document.getElementById(corpDir.common.globals.corpDirControlsId);
        if (!corpDirControls) return; //if the controls are not on the page exit
        corpDirControls.className = corpDirControls.className.split(" ")[0];
    };

    return {
        init: init,
        search: search
    };

})();