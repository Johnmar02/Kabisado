gdjs.LobbyCode = {};
gdjs.LobbyCode.localVariables = [];
gdjs.LobbyCode.GDMultiplayerObjects1= [];
gdjs.LobbyCode.GDMultiplayerObjects2= [];
gdjs.LobbyCode.GDMultiplayerObjects3= [];
gdjs.LobbyCode.GDNewTiledSpriteObjects1= [];
gdjs.LobbyCode.GDNewTiledSpriteObjects2= [];
gdjs.LobbyCode.GDNewTiledSpriteObjects3= [];
gdjs.LobbyCode.GDNewTiledSprite2Objects1= [];
gdjs.LobbyCode.GDNewTiledSprite2Objects2= [];
gdjs.LobbyCode.GDNewTiledSprite2Objects3= [];
gdjs.LobbyCode.GDSingleObjects1= [];
gdjs.LobbyCode.GDSingleObjects2= [];
gdjs.LobbyCode.GDSingleObjects3= [];
gdjs.LobbyCode.GDNewButtonObjects1= [];
gdjs.LobbyCode.GDNewButtonObjects2= [];
gdjs.LobbyCode.GDNewButtonObjects3= [];
gdjs.LobbyCode.GDTransitionObjects1= [];
gdjs.LobbyCode.GDTransitionObjects2= [];
gdjs.LobbyCode.GDTransitionObjects3= [];


gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Easy", "EasyLevel");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Easy", "EasyLevel", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(3));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Normal", "NormalLevel");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Normal", "NormalLevel", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(4));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Hard", "HardLevel");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Hard", "HardLevel", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


};gdjs.LobbyCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Music", "Music");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Music", "Music", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music"));
}
}

}


};gdjs.LobbyCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.LobbyCode.GDMultiplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Single"), gdjs.LobbyCode.GDSingleObjects1);
{for(var i = 0, len = gdjs.LobbyCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDMultiplayerObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.LobbyCode.GDSingleObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDSingleObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}
{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(1);
}

{ //Subevents
gdjs.LobbyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Sound", "Sound");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Sound", "Sound", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound"));
}

{ //Subevents
gdjs.LobbyCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.LobbyCode.GDMultiplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Single"), gdjs.LobbyCode.GDSingleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDMultiplayerObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDMultiplayerObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDMultiplayerObjects1[k] = gdjs.LobbyCode.GDMultiplayerObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDMultiplayerObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDSingleObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDSingleObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDSingleObjects1[k] = gdjs.LobbyCode.GDSingleObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDSingleObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDMultiplayerObjects1 */
/* Reuse gdjs.LobbyCode.GDSingleObjects1 */
{for(var i = 0, len = gdjs.LobbyCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDMultiplayerObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.LobbyCode.GDSingleObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDSingleObjects1[i].enableEffect("Effect", true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.LobbyCode.GDMultiplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Single"), gdjs.LobbyCode.GDSingleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDMultiplayerObjects1.length;i<l;++i) {
    if ( !(gdjs.LobbyCode.GDMultiplayerObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDMultiplayerObjects1[k] = gdjs.LobbyCode.GDMultiplayerObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDMultiplayerObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDSingleObjects1.length;i<l;++i) {
    if ( !(gdjs.LobbyCode.GDSingleObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDSingleObjects1[k] = gdjs.LobbyCode.GDSingleObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDSingleObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LobbyCode.GDMultiplayerObjects1 */
/* Reuse gdjs.LobbyCode.GDSingleObjects1 */
{for(var i = 0, len = gdjs.LobbyCode.GDMultiplayerObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDMultiplayerObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.LobbyCode.GDSingleObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDSingleObjects1[i].enableEffect("Effect", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Multiplayer"), gdjs.LobbyCode.GDMultiplayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDMultiplayerObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDMultiplayerObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDMultiplayerObjects1[k] = gdjs.LobbyCode.GDMultiplayerObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDMultiplayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbiesWindowOpen(runtimeScene));
}
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustStarted();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameScene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Single"), gdjs.LobbyCode.GDSingleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDSingleObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDSingleObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDSingleObjects1[k] = gdjs.LobbyCode.GDSingleObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDSingleObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "StoryScript", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.LobbyCode.GDNewButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDNewButtonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDNewButtonObjects1[k] = gdjs.LobbyCode.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDNewButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
}

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDMultiplayerObjects1.length = 0;
gdjs.LobbyCode.GDMultiplayerObjects2.length = 0;
gdjs.LobbyCode.GDMultiplayerObjects3.length = 0;
gdjs.LobbyCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.LobbyCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.LobbyCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.LobbyCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.LobbyCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.LobbyCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.LobbyCode.GDSingleObjects1.length = 0;
gdjs.LobbyCode.GDSingleObjects2.length = 0;
gdjs.LobbyCode.GDSingleObjects3.length = 0;
gdjs.LobbyCode.GDNewButtonObjects1.length = 0;
gdjs.LobbyCode.GDNewButtonObjects2.length = 0;
gdjs.LobbyCode.GDNewButtonObjects3.length = 0;
gdjs.LobbyCode.GDTransitionObjects1.length = 0;
gdjs.LobbyCode.GDTransitionObjects2.length = 0;
gdjs.LobbyCode.GDTransitionObjects3.length = 0;

gdjs.LobbyCode.eventsList2(runtimeScene);
gdjs.LobbyCode.GDMultiplayerObjects1.length = 0;
gdjs.LobbyCode.GDMultiplayerObjects2.length = 0;
gdjs.LobbyCode.GDMultiplayerObjects3.length = 0;
gdjs.LobbyCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.LobbyCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.LobbyCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.LobbyCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.LobbyCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.LobbyCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.LobbyCode.GDSingleObjects1.length = 0;
gdjs.LobbyCode.GDSingleObjects2.length = 0;
gdjs.LobbyCode.GDSingleObjects3.length = 0;
gdjs.LobbyCode.GDNewButtonObjects1.length = 0;
gdjs.LobbyCode.GDNewButtonObjects2.length = 0;
gdjs.LobbyCode.GDNewButtonObjects3.length = 0;
gdjs.LobbyCode.GDTransitionObjects1.length = 0;
gdjs.LobbyCode.GDTransitionObjects2.length = 0;
gdjs.LobbyCode.GDTransitionObjects3.length = 0;


return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
