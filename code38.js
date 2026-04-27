gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.GDBackgroundObjects1= [];
gdjs.Game_32OverCode.GDBackgroundObjects2= [];
gdjs.Game_32OverCode.GDBackgroundObjects3= [];
gdjs.Game_32OverCode.GDGame_9595OverObjects1= [];
gdjs.Game_32OverCode.GDGame_9595OverObjects2= [];
gdjs.Game_32OverCode.GDGame_9595OverObjects3= [];
gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1= [];
gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects2= [];
gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects3= [];
gdjs.Game_32OverCode.GDBackground2Objects1= [];
gdjs.Game_32OverCode.GDBackground2Objects2= [];
gdjs.Game_32OverCode.GDBackground2Objects3= [];
gdjs.Game_32OverCode.GDLevelSelectObjects1= [];
gdjs.Game_32OverCode.GDLevelSelectObjects2= [];
gdjs.Game_32OverCode.GDLevelSelectObjects3= [];
gdjs.Game_32OverCode.GDNew_9595ScoreObjects1= [];
gdjs.Game_32OverCode.GDNew_9595ScoreObjects2= [];
gdjs.Game_32OverCode.GDNew_9595ScoreObjects3= [];
gdjs.Game_32OverCode.GDTransitionObjects1= [];
gdjs.Game_32OverCode.GDTransitionObjects2= [];
gdjs.Game_32OverCode.GDTransitionObjects3= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("New_Score"), gdjs.Game_32OverCode.GDNew_9595ScoreObjects1);
{gdjs.evtTools.storage.writeNumberInJSONFile("Highscore", "1", runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber());
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDNew_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDNew_9595ScoreObjects1[i].getBehavior("Text").setText("Your New Score:" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}
}

}


};gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(95011572);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back_to_Main_Menu"), gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("Game_Over"), gdjs.Game_32OverCode.GDGame_9595OverObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelect"), gdjs.Game_32OverCode.GDLevelSelectObjects1);
gdjs.copyArray(runtimeScene.getObjects("New_Score"), gdjs.Game_32OverCode.GDNew_9595ScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.Game_32OverCode.GDTransitionObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "transition", 0);
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0,0,0", 1, "Circular", "Backward", 0, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "2c046ba3425c30917cf6dde24ffc831c778d47d0dea9721eff72517c824b2370_Lose 10.aac", false, 50, 1);
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDGame_9595OverObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDGame_9595OverObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Game_32OverCode.GDLevelSelectObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDLevelSelectObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Game_32OverCode.GDNew_9595ScoreObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDNew_9595ScoreObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back_to_Main_Menu"), gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelect"), gdjs.Game_32OverCode.GDLevelSelectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDLevelSelectObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDLevelSelectObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDLevelSelectObjects1[k] = gdjs.Game_32OverCode.GDLevelSelectObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDLevelSelectObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1[k] = gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1 */
/* Reuse gdjs.Game_32OverCode.GDLevelSelectObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDLevelSelectObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDLevelSelectObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1[i].enableEffect("Effect", true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back_to_Main_Menu"), gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelect"), gdjs.Game_32OverCode.GDLevelSelectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDLevelSelectObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32OverCode.GDLevelSelectObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDLevelSelectObjects1[k] = gdjs.Game_32OverCode.GDLevelSelectObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDLevelSelectObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1[k] = gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1 */
/* Reuse gdjs.Game_32OverCode.GDLevelSelectObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDLevelSelectObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDLevelSelectObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1[i].enableEffect("Effect", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back_to_Main_Menu"), gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1[k] = gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelSelect"), gdjs.Game_32OverCode.GDLevelSelectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDLevelSelectObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDLevelSelectObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDLevelSelectObjects1[k] = gdjs.Game_32OverCode.GDLevelSelectObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDLevelSelectObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SinglePlayer", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
}

}


{


gdjs.Game_32OverCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects3.length = 0;
gdjs.Game_32OverCode.GDGame_9595OverObjects1.length = 0;
gdjs.Game_32OverCode.GDGame_9595OverObjects2.length = 0;
gdjs.Game_32OverCode.GDGame_9595OverObjects3.length = 0;
gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1.length = 0;
gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects2.length = 0;
gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects3.length = 0;
gdjs.Game_32OverCode.GDBackground2Objects1.length = 0;
gdjs.Game_32OverCode.GDBackground2Objects2.length = 0;
gdjs.Game_32OverCode.GDBackground2Objects3.length = 0;
gdjs.Game_32OverCode.GDLevelSelectObjects1.length = 0;
gdjs.Game_32OverCode.GDLevelSelectObjects2.length = 0;
gdjs.Game_32OverCode.GDLevelSelectObjects3.length = 0;
gdjs.Game_32OverCode.GDNew_9595ScoreObjects1.length = 0;
gdjs.Game_32OverCode.GDNew_9595ScoreObjects2.length = 0;
gdjs.Game_32OverCode.GDNew_9595ScoreObjects3.length = 0;
gdjs.Game_32OverCode.GDTransitionObjects1.length = 0;
gdjs.Game_32OverCode.GDTransitionObjects2.length = 0;
gdjs.Game_32OverCode.GDTransitionObjects3.length = 0;

gdjs.Game_32OverCode.eventsList1(runtimeScene);
gdjs.Game_32OverCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects3.length = 0;
gdjs.Game_32OverCode.GDGame_9595OverObjects1.length = 0;
gdjs.Game_32OverCode.GDGame_9595OverObjects2.length = 0;
gdjs.Game_32OverCode.GDGame_9595OverObjects3.length = 0;
gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects1.length = 0;
gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects2.length = 0;
gdjs.Game_32OverCode.GDBack_9595to_9595Main_9595MenuObjects3.length = 0;
gdjs.Game_32OverCode.GDBackground2Objects1.length = 0;
gdjs.Game_32OverCode.GDBackground2Objects2.length = 0;
gdjs.Game_32OverCode.GDBackground2Objects3.length = 0;
gdjs.Game_32OverCode.GDLevelSelectObjects1.length = 0;
gdjs.Game_32OverCode.GDLevelSelectObjects2.length = 0;
gdjs.Game_32OverCode.GDLevelSelectObjects3.length = 0;
gdjs.Game_32OverCode.GDNew_9595ScoreObjects1.length = 0;
gdjs.Game_32OverCode.GDNew_9595ScoreObjects2.length = 0;
gdjs.Game_32OverCode.GDNew_9595ScoreObjects3.length = 0;
gdjs.Game_32OverCode.GDTransitionObjects1.length = 0;
gdjs.Game_32OverCode.GDTransitionObjects2.length = 0;
gdjs.Game_32OverCode.GDTransitionObjects3.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
