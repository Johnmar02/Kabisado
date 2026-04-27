gdjs.Hard_32LevelCode = {};
gdjs.Hard_32LevelCode.localVariables = [];
gdjs.Hard_32LevelCode.GDLevelSelectButtonObjects1= [];
gdjs.Hard_32LevelCode.GDLevelSelectButtonObjects2= [];
gdjs.Hard_32LevelCode.GDLevelSelectButtonObjects3= [];
gdjs.Hard_32LevelCode.GDSelect_9595a_9595LevelObjects1= [];
gdjs.Hard_32LevelCode.GDSelect_9595a_9595LevelObjects2= [];
gdjs.Hard_32LevelCode.GDSelect_9595a_9595LevelObjects3= [];
gdjs.Hard_32LevelCode.GDNewTiledSpriteObjects1= [];
gdjs.Hard_32LevelCode.GDNewTiledSpriteObjects2= [];
gdjs.Hard_32LevelCode.GDNewTiledSpriteObjects3= [];
gdjs.Hard_32LevelCode.GDNewTiledSprite2Objects1= [];
gdjs.Hard_32LevelCode.GDNewTiledSprite2Objects2= [];
gdjs.Hard_32LevelCode.GDNewTiledSprite2Objects3= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects1= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects2= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects3= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects1= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects2= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects3= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects1= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects2= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects3= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects1= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects2= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects3= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects1= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects2= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects3= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects1= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects2= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects3= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects1= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects2= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects3= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects1= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects2= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects3= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects1= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects2= [];
gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects3= [];
gdjs.Hard_32LevelCode.GDSelect_9595a_9595Level2Objects1= [];
gdjs.Hard_32LevelCode.GDSelect_9595a_9595Level2Objects2= [];
gdjs.Hard_32LevelCode.GDSelect_9595a_9595Level2Objects3= [];
gdjs.Hard_32LevelCode.GDNewButtonObjects1= [];
gdjs.Hard_32LevelCode.GDNewButtonObjects2= [];
gdjs.Hard_32LevelCode.GDNewButtonObjects3= [];
gdjs.Hard_32LevelCode.GDTransitionObjects1= [];
gdjs.Hard_32LevelCode.GDTransitionObjects2= [];
gdjs.Hard_32LevelCode.GDTransitionObjects3= [];


gdjs.Hard_32LevelCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Normal", "HardLevel");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Hard", "HardLevel", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(5));
}
}

}


};gdjs.Hard_32LevelCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects2.length;i<l;++i) {
    if ( gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects2[k] = gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects2[i];
        ++k;
    }
}
gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HardLevel2", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Hard_32LevelCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects2.length;i<l;++i) {
    if ( gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects2[k] = gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects2[i];
        ++k;
    }
}
gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HardLevel3", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Hard_32LevelCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects2.length;i<l;++i) {
    if ( gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects2[k] = gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects2[i];
        ++k;
    }
}
gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HardLevel4", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Hard_32LevelCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects2.length;i<l;++i) {
    if ( gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects2[k] = gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects2[i];
        ++k;
    }
}
gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HardLevel5", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Hard_32LevelCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects2.length;i<l;++i) {
    if ( gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects2[k] = gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects2[i];
        ++k;
    }
}
gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HardLevel6", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Hard_32LevelCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects2.length;i<l;++i) {
    if ( gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects2[k] = gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects2[i];
        ++k;
    }
}
gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HardLevel7", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Hard_32LevelCode.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects2.length;i<l;++i) {
    if ( gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects2[k] = gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects2[i];
        ++k;
    }
}
gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HardLevel8", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Hard_32LevelCode.eventsList8 = function(runtimeScene) {

{

/* Reuse gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects2.length;i<l;++i) {
    if ( gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects2[k] = gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects2[i];
        ++k;
    }
}
gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HardLevel9", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Hard_32LevelCode.eventsList9 = function(runtimeScene) {

{

/* Reuse gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects1.length;i<l;++i) {
    if ( gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects1[k] = gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects1[i];
        ++k;
    }
}
gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HardLevel10", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Hard_32LevelCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton"), gdjs.Hard_32LevelCode.GDLevelSelectButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hard_32LevelCode.GDLevelSelectButtonObjects2.length;i<l;++i) {
    if ( gdjs.Hard_32LevelCode.GDLevelSelectButtonObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Hard_32LevelCode.GDLevelSelectButtonObjects2[k] = gdjs.Hard_32LevelCode.GDLevelSelectButtonObjects2[i];
        ++k;
    }
}
gdjs.Hard_32LevelCode.GDLevelSelectButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "HardLevel1", false);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() >= 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton2"), gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects2);
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects2.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects2[i].hide(false);
}
}

{ //Subevents
gdjs.Hard_32LevelCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() >= 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton3"), gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects2);
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects2.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects2[i].hide(false);
}
}

{ //Subevents
gdjs.Hard_32LevelCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() >= 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton4"), gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects2);
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects2.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects2[i].hide(false);
}
}

{ //Subevents
gdjs.Hard_32LevelCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() >= 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton5"), gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects2);
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects2.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects2[i].hide(false);
}
}

{ //Subevents
gdjs.Hard_32LevelCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() >= 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton6"), gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects2);
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects2.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects2[i].hide(false);
}
}

{ //Subevents
gdjs.Hard_32LevelCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() >= 7);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton7"), gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects2);
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects2.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects2[i].hide(false);
}
}

{ //Subevents
gdjs.Hard_32LevelCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() >= 8);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton8"), gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects2);
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects2.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects2[i].hide(false);
}
}

{ //Subevents
gdjs.Hard_32LevelCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() >= 9);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton9"), gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects2);
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects2.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects2[i].hide(false);
}
}

{ //Subevents
gdjs.Hard_32LevelCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton10"), gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects1);
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects1.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects1[i].hide(false);
}
}

{ //Subevents
gdjs.Hard_32LevelCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.Hard_32LevelCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "transition", 0);
}

{ //Subevents
gdjs.Hard_32LevelCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.Hard_32LevelCode.GDNewButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Hard_32LevelCode.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.Hard_32LevelCode.GDNewButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Hard_32LevelCode.GDNewButtonObjects1[k] = gdjs.Hard_32LevelCode.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.Hard_32LevelCode.GDNewButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SinglePlayer", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Select_a_Level"), gdjs.Hard_32LevelCode.GDSelect_9595a_9595LevelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Select_a_Level2"), gdjs.Hard_32LevelCode.GDSelect_9595a_9595Level2Objects1);
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDSelect_9595a_9595LevelObjects1.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDSelect_9595a_9595LevelObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDSelect_9595a_9595Level2Objects1.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDSelect_9595a_9595Level2Objects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton10"), gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton2"), gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton3"), gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton4"), gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton5"), gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton6"), gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton7"), gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton8"), gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton9"), gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects1);
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects1.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects1.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects1.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects1.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects1.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects1.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects1.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects1.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects1.length ;i < len;++i) {
    gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects1[i].hide();
}
}
}

}


{


gdjs.Hard_32LevelCode.eventsList10(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Hard_32LevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Hard_32LevelCode.GDLevelSelectButtonObjects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButtonObjects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButtonObjects3.length = 0;
gdjs.Hard_32LevelCode.GDSelect_9595a_9595LevelObjects1.length = 0;
gdjs.Hard_32LevelCode.GDSelect_9595a_9595LevelObjects2.length = 0;
gdjs.Hard_32LevelCode.GDSelect_9595a_9595LevelObjects3.length = 0;
gdjs.Hard_32LevelCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Hard_32LevelCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Hard_32LevelCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.Hard_32LevelCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Hard_32LevelCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.Hard_32LevelCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects3.length = 0;
gdjs.Hard_32LevelCode.GDSelect_9595a_9595Level2Objects1.length = 0;
gdjs.Hard_32LevelCode.GDSelect_9595a_9595Level2Objects2.length = 0;
gdjs.Hard_32LevelCode.GDSelect_9595a_9595Level2Objects3.length = 0;
gdjs.Hard_32LevelCode.GDNewButtonObjects1.length = 0;
gdjs.Hard_32LevelCode.GDNewButtonObjects2.length = 0;
gdjs.Hard_32LevelCode.GDNewButtonObjects3.length = 0;
gdjs.Hard_32LevelCode.GDTransitionObjects1.length = 0;
gdjs.Hard_32LevelCode.GDTransitionObjects2.length = 0;
gdjs.Hard_32LevelCode.GDTransitionObjects3.length = 0;

gdjs.Hard_32LevelCode.eventsList11(runtimeScene);
gdjs.Hard_32LevelCode.GDLevelSelectButtonObjects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButtonObjects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButtonObjects3.length = 0;
gdjs.Hard_32LevelCode.GDSelect_9595a_9595LevelObjects1.length = 0;
gdjs.Hard_32LevelCode.GDSelect_9595a_9595LevelObjects2.length = 0;
gdjs.Hard_32LevelCode.GDSelect_9595a_9595LevelObjects3.length = 0;
gdjs.Hard_32LevelCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Hard_32LevelCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Hard_32LevelCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.Hard_32LevelCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Hard_32LevelCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.Hard_32LevelCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton2Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton3Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton4Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton5Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton6Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton7Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton8Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton9Objects3.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects1.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects2.length = 0;
gdjs.Hard_32LevelCode.GDLevelSelectButton10Objects3.length = 0;
gdjs.Hard_32LevelCode.GDSelect_9595a_9595Level2Objects1.length = 0;
gdjs.Hard_32LevelCode.GDSelect_9595a_9595Level2Objects2.length = 0;
gdjs.Hard_32LevelCode.GDSelect_9595a_9595Level2Objects3.length = 0;
gdjs.Hard_32LevelCode.GDNewButtonObjects1.length = 0;
gdjs.Hard_32LevelCode.GDNewButtonObjects2.length = 0;
gdjs.Hard_32LevelCode.GDNewButtonObjects3.length = 0;
gdjs.Hard_32LevelCode.GDTransitionObjects1.length = 0;
gdjs.Hard_32LevelCode.GDTransitionObjects2.length = 0;
gdjs.Hard_32LevelCode.GDTransitionObjects3.length = 0;


return;

}

gdjs['Hard_32LevelCode'] = gdjs.Hard_32LevelCode;
