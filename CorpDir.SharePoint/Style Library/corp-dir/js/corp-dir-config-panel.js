var corpDir = window.corpDir || {};
corpDir.config = (function () {

    var enableAdminToggle = function () {
        var clientContext = new SP.ClientContext.get_current();
        var user = clientContext.get_web().get_currentUser();
        clientContext.load(user);
        clientContext.executeQueryAsync(function () {
            if (user.get_isSiteAdmin()) {
                $jQCorpDir(corpDir.common.globals.corpDirConfigToggleId).removeClass('init-hide');
            }
        }, function (err) {
            log("Unable to set admin toggle", corpDir.common.messageType.error);
        });
    };

    var save = function () {
        var buttonColor = document.getElementById(corpDir.common.globals.corpDirButtonColorPickerId).jscolor.toHEXString();
        var buttonHoverColor = document.getElementById(corpDir.common.globals.corpDirButtonHoverColorPickerId).jscolor.toHEXString();
        var clientContext = new SP.ClientContext.get_current();
        var web = clientContext.get_web();
        var webPropertyBag = web.get_allProperties();
        webPropertyBag.set_item(corpDir.common.globals.corpDirButtonColorPropertyBagKey, buttonColor);
        webPropertyBag.set_item(corpDir.common.globals.corpDirButtonHoverColorPropertyBagKey, buttonHoverColor);
        web.update();
        clientContext.executeQueryAsync(function () {
            log("Saved Sucessfully.", corpDir.common.messageType.success);
            loadConfig();
        }, function (err) {
            log("Error Saving.", corpDir.common.messageType.success);
        });
    };

    var log = function (message, messageType) {
        if (!messageType) {
            messageType = corpDir.common.messageType.information;
        };
        $jQCorpDir(corpDir.common.globals.corpDirConfigPanelMessageId).attr("type", messageType).empty().text(message);
    };

    var toggle = function () {
        $jQCorpDir(corpDir.common.globals.corpDirConfigPanelId).slideToggle().toggleClass("opened");
    };

    var loadConfig = function () {
        var loadConfigDeferred = $jQCorpDir.Deferred();
        var clientContext = new SP.ClientContext.get_current();
        var web = clientContext.get_web();
        var webPropertyBag = web.get_allProperties();
        clientContext.load(webPropertyBag);
        clientContext.executeQueryAsync(function () {
            //Config Value 1 - Button Color Property
            var buttonColorPropertyBagValue = webPropertyBag.get_fieldValues()[corpDir.common.globals.corpDirButtonColorPropertyBagKey];
            if (buttonColorPropertyBagValue) {
                document.getElementById(corpDir.common.globals.corpDirButtonColorPickerId).jscolor.fromString(buttonColorPropertyBagValue);
                $jQCorpDir("<style/>", { "text": ".corp-dir-webpart .corp-dir-controls .letter { background-color: " + buttonColorPropertyBagValue + "}" }).appendTo("head");
            }
            //Config Value 2 - Button Hover Color Property
            var buttonHoverColorPropertyBagValue = webPropertyBag.get_fieldValues()[corpDir.common.globals.corpDirButtonHoverColorPropertyBagKey];
            if (buttonHoverColorPropertyBagValue) {
                document.getElementById(corpDir.common.globals.corpDirButtonHoverColorPickerId).jscolor.fromString(buttonHoverColorPropertyBagValue);
                $jQCorpDir("<style/>", { "text": ".corp-dir-webpart .corp-dir-controls .letter:hover,.corp-dir-webpart .corp-dir-controls .letter.active { background-color: " + buttonHoverColorPropertyBagValue + "}" }).appendTo("head");
            }
            loadConfigDeferred.resolve();
        }, function (err) {
            log("error retrieving property bag values", corpDir.common.messageType.success);
            loadConfigDeferred.reject();
        });
        return loadConfigDeferred.promise();
    };

    var init = function () {
        if ($jQCorpDir(corpDir.common.globals.corpDirConfigPanelId).length <= 0) return; //return if panel is not there exit
        var loadConfigPromise = loadConfig();
        $jQCorpDir.when(loadConfigPromise).always(function () {
            corpDir.controls.init();
        });
        enableAdminToggle();
    };

    return {
        toggle: toggle,
        save: save,
        init: init
    };

})();