gdjs.You_32WonCode = {};
gdjs.You_32WonCode.localVariables = [];
gdjs.You_32WonCode.GDBackgroundObjects1= [];
gdjs.You_32WonCode.GDBackgroundObjects2= [];
gdjs.You_32WonCode.GDBackgroundObjects3= [];
gdjs.You_32WonCode.GDcongratsObjects1= [];
gdjs.You_32WonCode.GDcongratsObjects2= [];
gdjs.You_32WonCode.GDcongratsObjects3= [];
gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1= [];
gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects2= [];
gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects3= [];
gdjs.You_32WonCode.GDBackground2Objects1= [];
gdjs.You_32WonCode.GDBackground2Objects2= [];
gdjs.You_32WonCode.GDBackground2Objects3= [];
gdjs.You_32WonCode.GDLevelSelectObjects1= [];
gdjs.You_32WonCode.GDLevelSelectObjects2= [];
gdjs.You_32WonCode.GDLevelSelectObjects3= [];
gdjs.You_32WonCode.GDUI_9595HighscoreObjects1= [];
gdjs.You_32WonCode.GDUI_9595HighscoreObjects2= [];
gdjs.You_32WonCode.GDUI_9595HighscoreObjects3= [];
gdjs.You_32WonCode.GDCreditsObjects1= [];
gdjs.You_32WonCode.GDCreditsObjects2= [];
gdjs.You_32WonCode.GDCreditsObjects3= [];
gdjs.You_32WonCode.GDTransitionObjects1= [];
gdjs.You_32WonCode.GDTransitionObjects2= [];
gdjs.You_32WonCode.GDTransitionObjects3= [];


gdjs.You_32WonCode.eventsList0 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("UI_Highscore"), gdjs.You_32WonCode.GDUI_9595HighscoreObjects1);
{gdjs.evtTools.storage.writeNumberInJSONFile("Highscore", "1", runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber());
}
{for(var i = 0, len = gdjs.You_32WonCode.GDUI_9595HighscoreObjects1.length ;i < len;++i) {
    gdjs.You_32WonCode.GDUI_9595HighscoreObjects1[i].getBehavior("Text").setText("Your New High Score:" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber()));
}
}
}

}


};gdjs.You_32WonCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(95079292);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Back_to_Main_Menu"), gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.You_32WonCode.GDCreditsObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelect"), gdjs.You_32WonCode.GDLevelSelectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.You_32WonCode.GDTransitionObjects1);
gdjs.copyArray(runtimeScene.getObjects("UI_Highscore"), gdjs.You_32WonCode.GDUI_9595HighscoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("congrats"), gdjs.You_32WonCode.GDcongratsObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "transition", 0);
}
{for(var i = 0, len = gdjs.You_32WonCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.You_32WonCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0,0,0", 1, "Circular", "Backward", 0, null);
}
}
{for(var i = 0, len = gdjs.You_32WonCode.GDcongratsObjects1.length ;i < len;++i) {
    gdjs.You_32WonCode.GDcongratsObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1.length ;i < len;++i) {
    gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.You_32WonCode.GDLevelSelectObjects1.length ;i < len;++i) {
    gdjs.You_32WonCode.GDLevelSelectObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.You_32WonCode.GDUI_9595HighscoreObjects1.length ;i < len;++i) {
    gdjs.You_32WonCode.GDUI_9595HighscoreObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.You_32WonCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.You_32WonCode.GDCreditsObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Sineskwela (PaoLul Outro) - Winxy Lofi Remix [swe8cTM5MAs].mp3", true, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back_to_Main_Menu"), gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.You_32WonCode.GDCreditsObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelect"), gdjs.You_32WonCode.GDLevelSelectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.You_32WonCode.GDLevelSelectObjects1.length;i<l;++i) {
    if ( gdjs.You_32WonCode.GDLevelSelectObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.You_32WonCode.GDLevelSelectObjects1[k] = gdjs.You_32WonCode.GDLevelSelectObjects1[i];
        ++k;
    }
}
gdjs.You_32WonCode.GDLevelSelectObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1.length;i<l;++i) {
    if ( gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1[k] = gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1[i];
        ++k;
    }
}
gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.You_32WonCode.GDCreditsObjects1.length;i<l;++i) {
    if ( gdjs.You_32WonCode.GDCreditsObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.You_32WonCode.GDCreditsObjects1[k] = gdjs.You_32WonCode.GDCreditsObjects1[i];
        ++k;
    }
}
gdjs.You_32WonCode.GDCreditsObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1 */
/* Reuse gdjs.You_32WonCode.GDCreditsObjects1 */
/* Reuse gdjs.You_32WonCode.GDLevelSelectObjects1 */
{for(var i = 0, len = gdjs.You_32WonCode.GDLevelSelectObjects1.length ;i < len;++i) {
    gdjs.You_32WonCode.GDLevelSelectObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1.length ;i < len;++i) {
    gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.You_32WonCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.You_32WonCode.GDCreditsObjects1[i].enableEffect("Effect", true);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back_to_Main_Menu"), gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.You_32WonCode.GDCreditsObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelSelect"), gdjs.You_32WonCode.GDLevelSelectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.You_32WonCode.GDLevelSelectObjects1.length;i<l;++i) {
    if ( !(gdjs.You_32WonCode.GDLevelSelectObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.You_32WonCode.GDLevelSelectObjects1[k] = gdjs.You_32WonCode.GDLevelSelectObjects1[i];
        ++k;
    }
}
gdjs.You_32WonCode.GDLevelSelectObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1.length;i<l;++i) {
    if ( !(gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1[k] = gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1[i];
        ++k;
    }
}
gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.You_32WonCode.GDCreditsObjects1.length;i<l;++i) {
    if ( !(gdjs.You_32WonCode.GDCreditsObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.You_32WonCode.GDCreditsObjects1[k] = gdjs.You_32WonCode.GDCreditsObjects1[i];
        ++k;
    }
}
gdjs.You_32WonCode.GDCreditsObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1 */
/* Reuse gdjs.You_32WonCode.GDCreditsObjects1 */
/* Reuse gdjs.You_32WonCode.GDLevelSelectObjects1 */
{for(var i = 0, len = gdjs.You_32WonCode.GDLevelSelectObjects1.length ;i < len;++i) {
    gdjs.You_32WonCode.GDLevelSelectObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1.length ;i < len;++i) {
    gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.You_32WonCode.GDCreditsObjects1.length ;i < len;++i) {
    gdjs.You_32WonCode.GDCreditsObjects1[i].enableEffect("Effect", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back_to_Main_Menu"), gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1.length;i<l;++i) {
    if ( gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1[k] = gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1[i];
        ++k;
    }
}
gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelSelect"), gdjs.You_32WonCode.GDLevelSelectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.You_32WonCode.GDLevelSelectObjects1.length;i<l;++i) {
    if ( gdjs.You_32WonCode.GDLevelSelectObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.You_32WonCode.GDLevelSelectObjects1[k] = gdjs.You_32WonCode.GDLevelSelectObjects1[i];
        ++k;
    }
}
gdjs.You_32WonCode.GDLevelSelectObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SinglePlayer", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.You_32WonCode.GDCreditsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.You_32WonCode.GDCreditsObjects1.length;i<l;++i) {
    if ( gdjs.You_32WonCode.GDCreditsObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.You_32WonCode.GDCreditsObjects1[k] = gdjs.You_32WonCode.GDCreditsObjects1[i];
        ++k;
    }
}
gdjs.You_32WonCode.GDCreditsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
}

}


{


gdjs.You_32WonCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.You_32WonCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.You_32WonCode.GDBackgroundObjects1.length = 0;
gdjs.You_32WonCode.GDBackgroundObjects2.length = 0;
gdjs.You_32WonCode.GDBackgroundObjects3.length = 0;
gdjs.You_32WonCode.GDcongratsObjects1.length = 0;
gdjs.You_32WonCode.GDcongratsObjects2.length = 0;
gdjs.You_32WonCode.GDcongratsObjects3.length = 0;
gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1.length = 0;
gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects2.length = 0;
gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects3.length = 0;
gdjs.You_32WonCode.GDBackground2Objects1.length = 0;
gdjs.You_32WonCode.GDBackground2Objects2.length = 0;
gdjs.You_32WonCode.GDBackground2Objects3.length = 0;
gdjs.You_32WonCode.GDLevelSelectObjects1.length = 0;
gdjs.You_32WonCode.GDLevelSelectObjects2.length = 0;
gdjs.You_32WonCode.GDLevelSelectObjects3.length = 0;
gdjs.You_32WonCode.GDUI_9595HighscoreObjects1.length = 0;
gdjs.You_32WonCode.GDUI_9595HighscoreObjects2.length = 0;
gdjs.You_32WonCode.GDUI_9595HighscoreObjects3.length = 0;
gdjs.You_32WonCode.GDCreditsObjects1.length = 0;
gdjs.You_32WonCode.GDCreditsObjects2.length = 0;
gdjs.You_32WonCode.GDCreditsObjects3.length = 0;
gdjs.You_32WonCode.GDTransitionObjects1.length = 0;
gdjs.You_32WonCode.GDTransitionObjects2.length = 0;
gdjs.You_32WonCode.GDTransitionObjects3.length = 0;

gdjs.You_32WonCode.eventsList1(runtimeScene);
gdjs.You_32WonCode.GDBackgroundObjects1.length = 0;
gdjs.You_32WonCode.GDBackgroundObjects2.length = 0;
gdjs.You_32WonCode.GDBackgroundObjects3.length = 0;
gdjs.You_32WonCode.GDcongratsObjects1.length = 0;
gdjs.You_32WonCode.GDcongratsObjects2.length = 0;
gdjs.You_32WonCode.GDcongratsObjects3.length = 0;
gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects1.length = 0;
gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects2.length = 0;
gdjs.You_32WonCode.GDBack_9595to_9595Main_9595MenuObjects3.length = 0;
gdjs.You_32WonCode.GDBackground2Objects1.length = 0;
gdjs.You_32WonCode.GDBackground2Objects2.length = 0;
gdjs.You_32WonCode.GDBackground2Objects3.length = 0;
gdjs.You_32WonCode.GDLevelSelectObjects1.length = 0;
gdjs.You_32WonCode.GDLevelSelectObjects2.length = 0;
gdjs.You_32WonCode.GDLevelSelectObjects3.length = 0;
gdjs.You_32WonCode.GDUI_9595HighscoreObjects1.length = 0;
gdjs.You_32WonCode.GDUI_9595HighscoreObjects2.length = 0;
gdjs.You_32WonCode.GDUI_9595HighscoreObjects3.length = 0;
gdjs.You_32WonCode.GDCreditsObjects1.length = 0;
gdjs.You_32WonCode.GDCreditsObjects2.length = 0;
gdjs.You_32WonCode.GDCreditsObjects3.length = 0;
gdjs.You_32WonCode.GDTransitionObjects1.length = 0;
gdjs.You_32WonCode.GDTransitionObjects2.length = 0;
gdjs.You_32WonCode.GDTransitionObjects3.length = 0;


return;

}

gdjs['You_32WonCode'] = gdjs.You_32WonCode;
