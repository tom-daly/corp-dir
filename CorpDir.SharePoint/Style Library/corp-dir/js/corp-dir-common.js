var corpDir = window.corpDir || {};
corpDir.common = (function () {

    var globals = {
        "corpDirWebPartId": "corp-dir-webpart",
        "corpDirControlsId": "corp-dir-controls",
        "corpDirActiveLetterAttr": "data-active-letter",
        "corpDirConfigToggleId": "#corp-dir-config-toggle",
        "corpDirConfigPanelId": "#corp-dir-config-panel",
        "corpDirConfigPanelMessageId": "#corp-dir-config-panel-message",
        "corpDirButtonColorPickerId": "button-color-picker", //standard js 
        "corpDirButtonHoverColorPickerId": "button-hover-color-picker", //standard js
        "corpDirButtonColorPropertyBagKey": "CorpDirButtonColor",
        "corpDirButtonHoverColorPropertyBagKey": "CorpDirButtonHoverColor"
    };

    var messageType = {
        "information": "information",
        "success": "success",
        "error": "error"
    };

    return {
        globals: globals,
        messageType: messageType
    };

})();