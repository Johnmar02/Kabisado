gdjs.Easy_32LevelCode = {};
gdjs.Easy_32LevelCode.localVariables = [];
gdjs.Easy_32LevelCode.GDLevelSelectButtonObjects1= [];
gdjs.Easy_32LevelCode.GDLevelSelectButtonObjects2= [];
gdjs.Easy_32LevelCode.GDLevelSelectButtonObjects3= [];
gdjs.Easy_32LevelCode.GDSelect_9595a_9595LevelObjects1= [];
gdjs.Easy_32LevelCode.GDSelect_9595a_9595LevelObjects2= [];
gdjs.Easy_32LevelCode.GDSelect_9595a_9595LevelObjects3= [];
gdjs.Easy_32LevelCode.GDNewTiledSpriteObjects1= [];
gdjs.Easy_32LevelCode.GDNewTiledSpriteObjects2= [];
gdjs.Easy_32LevelCode.GDNewTiledSpriteObjects3= [];
gdjs.Easy_32LevelCode.GDNewTiledSprite2Objects1= [];
gdjs.Easy_32LevelCode.GDNewTiledSprite2Objects2= [];
gdjs.Easy_32LevelCode.GDNewTiledSprite2Objects3= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects1= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects2= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects3= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects1= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects2= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects3= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects1= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects2= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects3= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects1= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects2= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects3= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects1= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects2= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects3= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects1= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects2= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects3= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects1= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects2= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects3= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects1= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects2= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects3= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects1= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects2= [];
gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects3= [];
gdjs.Easy_32LevelCode.GDSelect_9595a_9595Level2Objects1= [];
gdjs.Easy_32LevelCode.GDSelect_9595a_9595Level2Objects2= [];
gdjs.Easy_32LevelCode.GDSelect_9595a_9595Level2Objects3= [];
gdjs.Easy_32LevelCode.GDNewButtonObjects1= [];
gdjs.Easy_32LevelCode.GDNewButtonObjects2= [];
gdjs.Easy_32LevelCode.GDNewButtonObjects3= [];
gdjs.Easy_32LevelCode.GDARObjects1= [];
gdjs.Easy_32LevelCode.GDARObjects2= [];
gdjs.Easy_32LevelCode.GDARObjects3= [];
gdjs.Easy_32LevelCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs.Easy_32LevelCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs.Easy_32LevelCode.GDSmallGreenPlasticRoundSwitchObjects3= [];
gdjs.Easy_32LevelCode.GDTransitionObjects1= [];
gdjs.Easy_32LevelCode.GDTransitionObjects2= [];
gdjs.Easy_32LevelCode.GDTransitionObjects3= [];


gdjs.Easy_32LevelCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects2.length;i<l;++i) {
    if ( gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects2[k] = gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects2[i];
        ++k;
    }
}
gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EasyLevel2", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Easy_32LevelCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects2.length;i<l;++i) {
    if ( gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects2[k] = gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects2[i];
        ++k;
    }
}
gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EasyLevel3", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Easy_32LevelCode.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects2.length;i<l;++i) {
    if ( gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects2[k] = gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects2[i];
        ++k;
    }
}
gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EasyLevel4", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Easy_32LevelCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects2.length;i<l;++i) {
    if ( gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects2[k] = gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects2[i];
        ++k;
    }
}
gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EasyLevel5", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Easy_32LevelCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects2.length;i<l;++i) {
    if ( gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects2[k] = gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects2[i];
        ++k;
    }
}
gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EasyLevel6", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Easy_32LevelCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects2.length;i<l;++i) {
    if ( gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects2[k] = gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects2[i];
        ++k;
    }
}
gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EasyLevel7", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Easy_32LevelCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects2.length;i<l;++i) {
    if ( gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects2[k] = gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects2[i];
        ++k;
    }
}
gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EasyLevel8", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Easy_32LevelCode.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects2.length;i<l;++i) {
    if ( gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects2[k] = gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects2[i];
        ++k;
    }
}
gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EasyLevel9", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Easy_32LevelCode.eventsList8 = function(runtimeScene) {

{

/* Reuse gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects1.length;i<l;++i) {
    if ( gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects1[k] = gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects1[i];
        ++k;
    }
}
gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EasyLevel10", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}

}


};gdjs.Easy_32LevelCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton"), gdjs.Easy_32LevelCode.GDLevelSelectButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Easy_32LevelCode.GDLevelSelectButtonObjects2.length;i<l;++i) {
    if ( gdjs.Easy_32LevelCode.GDLevelSelectButtonObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Easy_32LevelCode.GDLevelSelectButtonObjects2[k] = gdjs.Easy_32LevelCode.GDLevelSelectButtonObjects2[i];
        ++k;
    }
}
gdjs.Easy_32LevelCode.GDLevelSelectButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EasyLevel1", false);
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() >= 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton2"), gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects2);
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects2.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects2[i].hide(false);
}
}

{ //Subevents
gdjs.Easy_32LevelCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() >= 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton3"), gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects2);
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects2.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects2[i].hide(false);
}
}

{ //Subevents
gdjs.Easy_32LevelCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() >= 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton4"), gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects2);
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects2.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects2[i].hide(false);
}
}

{ //Subevents
gdjs.Easy_32LevelCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() >= 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton5"), gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects2);
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects2.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects2[i].hide(false);
}
}

{ //Subevents
gdjs.Easy_32LevelCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() >= 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton6"), gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects2);
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects2.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects2[i].hide(false);
}
}

{ //Subevents
gdjs.Easy_32LevelCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() >= 7);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton7"), gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects2);
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects2.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects2[i].hide(false);
}
}

{ //Subevents
gdjs.Easy_32LevelCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() >= 8);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton8"), gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects2);
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects2.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects2[i].hide(false);
}
}

{ //Subevents
gdjs.Easy_32LevelCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() >= 9);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton9"), gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects2);
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects2.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects2[i].hide(false);
}
}

{ //Subevents
gdjs.Easy_32LevelCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() >= 10);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton10"), gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects1);
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects1.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects1[i].hide(false);
}
}

{ //Subevents
gdjs.Easy_32LevelCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Easy_32LevelCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "transition", 0);
}
}

}


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
{
gdjs.copyArray(runtimeScene.getObjects("Select_a_Level"), gdjs.Easy_32LevelCode.GDSelect_9595a_9595LevelObjects1);
gdjs.copyArray(runtimeScene.getObjects("Select_a_Level2"), gdjs.Easy_32LevelCode.GDSelect_9595a_9595Level2Objects1);
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDSelect_9595a_9595LevelObjects1.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDSelect_9595a_9595LevelObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDSelect_9595a_9595Level2Objects1.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDSelect_9595a_9595Level2Objects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton10"), gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton2"), gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton3"), gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton4"), gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton5"), gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton6"), gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton7"), gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton8"), gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelectButton9"), gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects1);
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects1.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects1.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects1.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects1.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects1.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects1.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects1.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects1.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects1.length ;i < len;++i) {
    gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.Easy_32LevelCode.GDNewButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Easy_32LevelCode.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.Easy_32LevelCode.GDNewButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Easy_32LevelCode.GDNewButtonObjects1[k] = gdjs.Easy_32LevelCode.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.Easy_32LevelCode.GDNewButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SinglePlayer", false);
}
}

}


{


gdjs.Easy_32LevelCode.eventsList9(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Easy_32LevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Easy_32LevelCode.GDLevelSelectButtonObjects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButtonObjects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButtonObjects3.length = 0;
gdjs.Easy_32LevelCode.GDSelect_9595a_9595LevelObjects1.length = 0;
gdjs.Easy_32LevelCode.GDSelect_9595a_9595LevelObjects2.length = 0;
gdjs.Easy_32LevelCode.GDSelect_9595a_9595LevelObjects3.length = 0;
gdjs.Easy_32LevelCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Easy_32LevelCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Easy_32LevelCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.Easy_32LevelCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Easy_32LevelCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.Easy_32LevelCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects3.length = 0;
gdjs.Easy_32LevelCode.GDSelect_9595a_9595Level2Objects1.length = 0;
gdjs.Easy_32LevelCode.GDSelect_9595a_9595Level2Objects2.length = 0;
gdjs.Easy_32LevelCode.GDSelect_9595a_9595Level2Objects3.length = 0;
gdjs.Easy_32LevelCode.GDNewButtonObjects1.length = 0;
gdjs.Easy_32LevelCode.GDNewButtonObjects2.length = 0;
gdjs.Easy_32LevelCode.GDNewButtonObjects3.length = 0;
gdjs.Easy_32LevelCode.GDARObjects1.length = 0;
gdjs.Easy_32LevelCode.GDARObjects2.length = 0;
gdjs.Easy_32LevelCode.GDARObjects3.length = 0;
gdjs.Easy_32LevelCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs.Easy_32LevelCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs.Easy_32LevelCode.GDSmallGreenPlasticRoundSwitchObjects3.length = 0;
gdjs.Easy_32LevelCode.GDTransitionObjects1.length = 0;
gdjs.Easy_32LevelCode.GDTransitionObjects2.length = 0;
gdjs.Easy_32LevelCode.GDTransitionObjects3.length = 0;

gdjs.Easy_32LevelCode.eventsList10(runtimeScene);
gdjs.Easy_32LevelCode.GDLevelSelectButtonObjects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButtonObjects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButtonObjects3.length = 0;
gdjs.Easy_32LevelCode.GDSelect_9595a_9595LevelObjects1.length = 0;
gdjs.Easy_32LevelCode.GDSelect_9595a_9595LevelObjects2.length = 0;
gdjs.Easy_32LevelCode.GDSelect_9595a_9595LevelObjects3.length = 0;
gdjs.Easy_32LevelCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Easy_32LevelCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Easy_32LevelCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.Easy_32LevelCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Easy_32LevelCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.Easy_32LevelCode.GDNewTiledSprite2Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton2Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton3Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton4Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton5Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton6Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton7Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton8Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton9Objects3.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects1.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects2.length = 0;
gdjs.Easy_32LevelCode.GDLevelSelectButton10Objects3.length = 0;
gdjs.Easy_32LevelCode.GDSelect_9595a_9595Level2Objects1.length = 0;
gdjs.Easy_32LevelCode.GDSelect_9595a_9595Level2Objects2.length = 0;
gdjs.Easy_32LevelCode.GDSelect_9595a_9595Level2Objects3.length = 0;
gdjs.Easy_32LevelCode.GDNewButtonObjects1.length = 0;
gdjs.Easy_32LevelCode.GDNewButtonObjects2.length = 0;
gdjs.Easy_32LevelCode.GDNewButtonObjects3.length = 0;
gdjs.Easy_32LevelCode.GDARObjects1.length = 0;
gdjs.Easy_32LevelCode.GDARObjects2.length = 0;
gdjs.Easy_32LevelCode.GDARObjects3.length = 0;
gdjs.Easy_32LevelCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs.Easy_32LevelCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs.Easy_32LevelCode.GDSmallGreenPlasticRoundSwitchObjects3.length = 0;
gdjs.Easy_32LevelCode.GDTransitionObjects1.length = 0;
gdjs.Easy_32LevelCode.GDTransitionObjects2.length = 0;
gdjs.Easy_32LevelCode.GDTransitionObjects3.length = 0;


return;

}

gdjs['Easy_32LevelCode'] = gdjs.Easy_32LevelCode;
