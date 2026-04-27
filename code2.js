gdjs.SinglePlayerCode = {};
gdjs.SinglePlayerCode.localVariables = [];
gdjs.SinglePlayerCode.GDSelect_9595a_9595LevelObjects1= [];
gdjs.SinglePlayerCode.GDSelect_9595a_9595LevelObjects2= [];
gdjs.SinglePlayerCode.GDSelect_9595a_9595LevelObjects3= [];
gdjs.SinglePlayerCode.GDBackgroundObjects1= [];
gdjs.SinglePlayerCode.GDBackgroundObjects2= [];
gdjs.SinglePlayerCode.GDBackgroundObjects3= [];
gdjs.SinglePlayerCode.GDEasyObjects1= [];
gdjs.SinglePlayerCode.GDEasyObjects2= [];
gdjs.SinglePlayerCode.GDEasyObjects3= [];
gdjs.SinglePlayerCode.GDNormalObjects1= [];
gdjs.SinglePlayerCode.GDNormalObjects2= [];
gdjs.SinglePlayerCode.GDNormalObjects3= [];
gdjs.SinglePlayerCode.GDHardObjects1= [];
gdjs.SinglePlayerCode.GDHardObjects2= [];
gdjs.SinglePlayerCode.GDHardObjects3= [];
gdjs.SinglePlayerCode.GDChatbotObjects1= [];
gdjs.SinglePlayerCode.GDChatbotObjects2= [];
gdjs.SinglePlayerCode.GDChatbotObjects3= [];
gdjs.SinglePlayerCode.GDNewButtonObjects1= [];
gdjs.SinglePlayerCode.GDNewButtonObjects2= [];
gdjs.SinglePlayerCode.GDNewButtonObjects3= [];
gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects1= [];
gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects2= [];
gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects3= [];
gdjs.SinglePlayerCode.GDAR_9595switchObjects1= [];
gdjs.SinglePlayerCode.GDAR_9595switchObjects2= [];
gdjs.SinglePlayerCode.GDAR_9595switchObjects3= [];
gdjs.SinglePlayerCode.GDNewRealCameraObjects1= [];
gdjs.SinglePlayerCode.GDNewRealCameraObjects2= [];
gdjs.SinglePlayerCode.GDNewRealCameraObjects3= [];
gdjs.SinglePlayerCode.GDflipObjects1= [];
gdjs.SinglePlayerCode.GDflipObjects2= [];
gdjs.SinglePlayerCode.GDflipObjects3= [];
gdjs.SinglePlayerCode.GDTransitionObjects1= [];
gdjs.SinglePlayerCode.GDTransitionObjects2= [];
gdjs.SinglePlayerCode.GDTransitionObjects3= [];


gdjs.SinglePlayerCode.eventsList0 = function(runtimeScene) {

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


};gdjs.SinglePlayerCode.mapOfGDgdjs_9546SinglePlayerCode_9546GDBackgroundObjects2Objects = Hashtable.newFrom({"Background": gdjs.SinglePlayerCode.GDBackgroundObjects2});
gdjs.SinglePlayerCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("flip"), gdjs.SinglePlayerCode.GDflipObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SinglePlayerCode.GDflipObjects2.length;i<l;++i) {
    if ( gdjs.SinglePlayerCode.GDflipObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SinglePlayerCode.GDflipObjects2[k] = gdjs.SinglePlayerCode.GDflipObjects2[i];
        ++k;
    }
}
gdjs.SinglePlayerCode.GDflipObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewRealCamera"), gdjs.SinglePlayerCode.GDNewRealCameraObjects2);
{for(var i = 0, len = gdjs.SinglePlayerCode.GDNewRealCameraObjects2.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDNewRealCameraObjects2[i].ChangeCamera(1, null);
}
}
}

}


};gdjs.SinglePlayerCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects2.length;i<l;++i) {
    if ( gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects2[i].IsChecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects2[k] = gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects2[i];
        ++k;
    }
}
gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(83677388);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.SinglePlayerCode.GDBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewRealCamera"), gdjs.SinglePlayerCode.GDNewRealCameraObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;0;0");
}
{for(var i = 0, len = gdjs.SinglePlayerCode.GDNewRealCameraObjects2.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDNewRealCameraObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.SinglePlayerCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDBackgroundObjects2[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects1.length;i<l;++i) {
    if ( gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects1[i].HasJustBeenUnchecked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects1[k] = gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects1[i];
        ++k;
    }
}
gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(83679084);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.SinglePlayerCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewRealCamera"), gdjs.SinglePlayerCode.GDNewRealCameraObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}
{for(var i = 0, len = gdjs.SinglePlayerCode.GDNewRealCameraObjects1.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDNewRealCameraObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.SinglePlayerCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDBackgroundObjects1[i].setZOrder(-(100));
}
}
}

}


};gdjs.SinglePlayerCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewRealCamera"), gdjs.SinglePlayerCode.GDNewRealCameraObjects2);
gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects2);
gdjs.SinglePlayerCode.GDBackgroundObjects2.length = 0;

{for(var i = 0, len = gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects2.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects2[i].SetChecked(false, null);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SinglePlayerCode.mapOfGDgdjs_9546SinglePlayerCode_9546GDBackgroundObjects2Objects, -(100), 0, "");
}
{for(var i = 0, len = gdjs.SinglePlayerCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDBackgroundObjects2[i].getBehavior("Resizable").setSize(2000, 720);
}
}
{for(var i = 0, len = gdjs.SinglePlayerCode.GDNewRealCameraObjects2.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDNewRealCameraObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.SinglePlayerCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDBackgroundObjects2[i].setZOrder(-(99));
}
}
{for(var i = 0, len = gdjs.SinglePlayerCode.GDNewRealCameraObjects2.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDNewRealCameraObjects2[i].ChangeCamera(0, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(15).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.SinglePlayerCode.GDBackgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewRealCamera"), gdjs.SinglePlayerCode.GDNewRealCameraObjects2);
gdjs.copyArray(runtimeScene.getObjects("SmallGreenPlasticRoundSwitch"), gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects2);
{for(var i = 0, len = gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects2.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects2[i].SetChecked(true, null);
}
}
{for(var i = 0, len = gdjs.SinglePlayerCode.GDNewRealCameraObjects2.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDNewRealCameraObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.SinglePlayerCode.GDNewRealCameraObjects2.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDNewRealCameraObjects2[i].ChangeCamera(1, null);
}
}
{for(var i = 0, len = gdjs.SinglePlayerCode.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDBackgroundObjects2[i].hide();
}
}
}

}


{


gdjs.SinglePlayerCode.eventsList1(runtimeScene);
}


{


gdjs.SinglePlayerCode.eventsList2(runtimeScene);
}


};gdjs.SinglePlayerCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Easy Level", false);
}
}

}


};gdjs.SinglePlayerCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Normal Level", false);
}
}

}


};gdjs.SinglePlayerCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Hard Level", false);
}
}

}


};gdjs.SinglePlayerCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chatbot"), gdjs.SinglePlayerCode.GDChatbotObjects1);
gdjs.copyArray(runtimeScene.getObjects("Easy"), gdjs.SinglePlayerCode.GDEasyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Hard"), gdjs.SinglePlayerCode.GDHardObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewRealCamera"), gdjs.SinglePlayerCode.GDNewRealCameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("Normal"), gdjs.SinglePlayerCode.GDNormalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Select_a_Level"), gdjs.SinglePlayerCode.GDSelect_9595a_9595LevelObjects1);
{for(var i = 0, len = gdjs.SinglePlayerCode.GDSelect_9595a_9595LevelObjects1.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDSelect_9595a_9595LevelObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.SinglePlayerCode.GDEasyObjects1.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDEasyObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.SinglePlayerCode.GDNormalObjects1.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDNormalObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.SinglePlayerCode.GDHardObjects1.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDHardObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.SinglePlayerCode.GDChatbotObjects1.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDChatbotObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}
{for(var i = 0, len = gdjs.SinglePlayerCode.GDNewRealCameraObjects1.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDNewRealCameraObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "6f57e4470d65276f6e3b5a657da31d397a8b0d181336097cc189d32b2f456ad0_Adventure.aac", true, 100, 1);
}

{ //Subevents
gdjs.SinglePlayerCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


gdjs.SinglePlayerCode.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Easy"), gdjs.SinglePlayerCode.GDEasyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SinglePlayerCode.GDEasyObjects1.length;i<l;++i) {
    if ( gdjs.SinglePlayerCode.GDEasyObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SinglePlayerCode.GDEasyObjects1[k] = gdjs.SinglePlayerCode.GDEasyObjects1[i];
        ++k;
    }
}
gdjs.SinglePlayerCode.GDEasyObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.SinglePlayerCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.SinglePlayerCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}

{ //Subevents
gdjs.SinglePlayerCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Normal"), gdjs.SinglePlayerCode.GDNormalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SinglePlayerCode.GDNormalObjects1.length;i<l;++i) {
    if ( gdjs.SinglePlayerCode.GDNormalObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SinglePlayerCode.GDNormalObjects1[k] = gdjs.SinglePlayerCode.GDNormalObjects1[i];
        ++k;
    }
}
gdjs.SinglePlayerCode.GDNormalObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.SinglePlayerCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.SinglePlayerCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}

{ //Subevents
gdjs.SinglePlayerCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Hard"), gdjs.SinglePlayerCode.GDHardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SinglePlayerCode.GDHardObjects1.length;i<l;++i) {
    if ( gdjs.SinglePlayerCode.GDHardObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SinglePlayerCode.GDHardObjects1[k] = gdjs.SinglePlayerCode.GDHardObjects1[i];
        ++k;
    }
}
gdjs.SinglePlayerCode.GDHardObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.SinglePlayerCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.SinglePlayerCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}

{ //Subevents
gdjs.SinglePlayerCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chatbot"), gdjs.SinglePlayerCode.GDChatbotObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SinglePlayerCode.GDChatbotObjects1.length;i<l;++i) {
    if ( gdjs.SinglePlayerCode.GDChatbotObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SinglePlayerCode.GDChatbotObjects1[k] = gdjs.SinglePlayerCode.GDChatbotObjects1[i];
        ++k;
    }
}
gdjs.SinglePlayerCode.GDChatbotObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.SinglePlayerCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.SinglePlayerCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.SinglePlayerCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.SinglePlayerCode.GDNewButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SinglePlayerCode.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.SinglePlayerCode.GDNewButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SinglePlayerCode.GDNewButtonObjects1[k] = gdjs.SinglePlayerCode.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.SinglePlayerCode.GDNewButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}
}

}


};

gdjs.SinglePlayerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SinglePlayerCode.GDSelect_9595a_9595LevelObjects1.length = 0;
gdjs.SinglePlayerCode.GDSelect_9595a_9595LevelObjects2.length = 0;
gdjs.SinglePlayerCode.GDSelect_9595a_9595LevelObjects3.length = 0;
gdjs.SinglePlayerCode.GDBackgroundObjects1.length = 0;
gdjs.SinglePlayerCode.GDBackgroundObjects2.length = 0;
gdjs.SinglePlayerCode.GDBackgroundObjects3.length = 0;
gdjs.SinglePlayerCode.GDEasyObjects1.length = 0;
gdjs.SinglePlayerCode.GDEasyObjects2.length = 0;
gdjs.SinglePlayerCode.GDEasyObjects3.length = 0;
gdjs.SinglePlayerCode.GDNormalObjects1.length = 0;
gdjs.SinglePlayerCode.GDNormalObjects2.length = 0;
gdjs.SinglePlayerCode.GDNormalObjects3.length = 0;
gdjs.SinglePlayerCode.GDHardObjects1.length = 0;
gdjs.SinglePlayerCode.GDHardObjects2.length = 0;
gdjs.SinglePlayerCode.GDHardObjects3.length = 0;
gdjs.SinglePlayerCode.GDChatbotObjects1.length = 0;
gdjs.SinglePlayerCode.GDChatbotObjects2.length = 0;
gdjs.SinglePlayerCode.GDChatbotObjects3.length = 0;
gdjs.SinglePlayerCode.GDNewButtonObjects1.length = 0;
gdjs.SinglePlayerCode.GDNewButtonObjects2.length = 0;
gdjs.SinglePlayerCode.GDNewButtonObjects3.length = 0;
gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects3.length = 0;
gdjs.SinglePlayerCode.GDAR_9595switchObjects1.length = 0;
gdjs.SinglePlayerCode.GDAR_9595switchObjects2.length = 0;
gdjs.SinglePlayerCode.GDAR_9595switchObjects3.length = 0;
gdjs.SinglePlayerCode.GDNewRealCameraObjects1.length = 0;
gdjs.SinglePlayerCode.GDNewRealCameraObjects2.length = 0;
gdjs.SinglePlayerCode.GDNewRealCameraObjects3.length = 0;
gdjs.SinglePlayerCode.GDflipObjects1.length = 0;
gdjs.SinglePlayerCode.GDflipObjects2.length = 0;
gdjs.SinglePlayerCode.GDflipObjects3.length = 0;
gdjs.SinglePlayerCode.GDTransitionObjects1.length = 0;
gdjs.SinglePlayerCode.GDTransitionObjects2.length = 0;
gdjs.SinglePlayerCode.GDTransitionObjects3.length = 0;

gdjs.SinglePlayerCode.eventsList7(runtimeScene);
gdjs.SinglePlayerCode.GDSelect_9595a_9595LevelObjects1.length = 0;
gdjs.SinglePlayerCode.GDSelect_9595a_9595LevelObjects2.length = 0;
gdjs.SinglePlayerCode.GDSelect_9595a_9595LevelObjects3.length = 0;
gdjs.SinglePlayerCode.GDBackgroundObjects1.length = 0;
gdjs.SinglePlayerCode.GDBackgroundObjects2.length = 0;
gdjs.SinglePlayerCode.GDBackgroundObjects3.length = 0;
gdjs.SinglePlayerCode.GDEasyObjects1.length = 0;
gdjs.SinglePlayerCode.GDEasyObjects2.length = 0;
gdjs.SinglePlayerCode.GDEasyObjects3.length = 0;
gdjs.SinglePlayerCode.GDNormalObjects1.length = 0;
gdjs.SinglePlayerCode.GDNormalObjects2.length = 0;
gdjs.SinglePlayerCode.GDNormalObjects3.length = 0;
gdjs.SinglePlayerCode.GDHardObjects1.length = 0;
gdjs.SinglePlayerCode.GDHardObjects2.length = 0;
gdjs.SinglePlayerCode.GDHardObjects3.length = 0;
gdjs.SinglePlayerCode.GDChatbotObjects1.length = 0;
gdjs.SinglePlayerCode.GDChatbotObjects2.length = 0;
gdjs.SinglePlayerCode.GDChatbotObjects3.length = 0;
gdjs.SinglePlayerCode.GDNewButtonObjects1.length = 0;
gdjs.SinglePlayerCode.GDNewButtonObjects2.length = 0;
gdjs.SinglePlayerCode.GDNewButtonObjects3.length = 0;
gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects1.length = 0;
gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects2.length = 0;
gdjs.SinglePlayerCode.GDSmallGreenPlasticRoundSwitchObjects3.length = 0;
gdjs.SinglePlayerCode.GDAR_9595switchObjects1.length = 0;
gdjs.SinglePlayerCode.GDAR_9595switchObjects2.length = 0;
gdjs.SinglePlayerCode.GDAR_9595switchObjects3.length = 0;
gdjs.SinglePlayerCode.GDNewRealCameraObjects1.length = 0;
gdjs.SinglePlayerCode.GDNewRealCameraObjects2.length = 0;
gdjs.SinglePlayerCode.GDNewRealCameraObjects3.length = 0;
gdjs.SinglePlayerCode.GDflipObjects1.length = 0;
gdjs.SinglePlayerCode.GDflipObjects2.length = 0;
gdjs.SinglePlayerCode.GDflipObjects3.length = 0;
gdjs.SinglePlayerCode.GDTransitionObjects1.length = 0;
gdjs.SinglePlayerCode.GDTransitionObjects2.length = 0;
gdjs.SinglePlayerCode.GDTransitionObjects3.length = 0;


return;

}

gdjs['SinglePlayerCode'] = gdjs.SinglePlayerCode;
