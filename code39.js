gdjs.Game_32EndCode = {};
gdjs.Game_32EndCode.localVariables = [];
gdjs.Game_32EndCode.GDGame_9595ENDObjects1= [];
gdjs.Game_32EndCode.GDGame_9595ENDObjects2= [];
gdjs.Game_32EndCode.GDBack_9595to_9595Main_9595MenuObjects1= [];
gdjs.Game_32EndCode.GDBack_9595to_9595Main_9595MenuObjects2= [];
gdjs.Game_32EndCode.GDNewTiledSpriteObjects1= [];
gdjs.Game_32EndCode.GDNewTiledSpriteObjects2= [];
gdjs.Game_32EndCode.GDShadowObjects1= [];
gdjs.Game_32EndCode.GDShadowObjects2= [];
gdjs.Game_32EndCode.GDFireObjects1= [];
gdjs.Game_32EndCode.GDFireObjects2= [];
gdjs.Game_32EndCode.GDCameraCenterObjects1= [];
gdjs.Game_32EndCode.GDCameraCenterObjects2= [];
gdjs.Game_32EndCode.GDPlayerObjects1= [];
gdjs.Game_32EndCode.GDPlayerObjects2= [];
gdjs.Game_32EndCode.GDNewSpriteObjects1= [];
gdjs.Game_32EndCode.GDNewSpriteObjects2= [];
gdjs.Game_32EndCode.GDTransitionObjects1= [];
gdjs.Game_32EndCode.GDTransitionObjects2= [];


gdjs.Game_32EndCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fire"), gdjs.Game_32EndCode.GDFireObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32EndCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32EndCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32EndCode.GDPlayerObjects1[i].getX() == (( gdjs.Game_32EndCode.GDFireObjects1.length === 0 ) ? 0 :gdjs.Game_32EndCode.GDFireObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32EndCode.GDPlayerObjects1[k] = gdjs.Game_32EndCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32EndCode.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CameraCenter"), gdjs.Game_32EndCode.GDCameraCenterObjects1);
{for(var i = 0, len = gdjs.Game_32EndCode.GDCameraCenterObjects1.length ;i < len;++i) {
    gdjs.Game_32EndCode.GDCameraCenterObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "74;74;74");
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Game_32EndCode.GDCameraCenterObjects1.length !== 0 ? gdjs.Game_32EndCode.GDCameraCenterObjects1[0] : null), true, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Sineskwela (PaoLul Outro) - Winxy Lofi Remix [swe8cTM5MAs].mp3", false, 50, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CameraCenter"), gdjs.Game_32EndCode.GDCameraCenterObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Game_32EndCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32EndCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Game_32EndCode.GDCameraCenterObjects1.length ;i < len;++i) {
    gdjs.Game_32EndCode.GDCameraCenterObjects1[i].hide();
}
}
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.5, "", 0);
}
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Game_32EndCode.GDCameraCenterObjects1.length !== 0 ? gdjs.Game_32EndCode.GDCameraCenterObjects1[0] : null), true, "", 0);
}
{for(var i = 0, len = gdjs.Game_32EndCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32EndCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationSpeedScale(0.9);
}
}
{for(var i = 0, len = gdjs.Game_32EndCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Game_32EndCode.GDNewSpriteObjects1[i].getBehavior("Animation").setAnimationSpeedScale(0.9);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Shadow"), gdjs.Game_32EndCode.GDShadowObjects1);
{for(var i = 0, len = gdjs.Game_32EndCode.GDShadowObjects1.length ;i < len;++i) {
    gdjs.Game_32EndCode.GDShadowObjects1[i].getBehavior("Opacity").setOpacity(100);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back_to_Main_Menu"), gdjs.Game_32EndCode.GDBack_9595to_9595Main_9595MenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32EndCode.GDBack_9595to_9595Main_9595MenuObjects1.length;i<l;++i) {
    if ( gdjs.Game_32EndCode.GDBack_9595to_9595Main_9595MenuObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32EndCode.GDBack_9595to_9595Main_9595MenuObjects1[k] = gdjs.Game_32EndCode.GDBack_9595to_9595Main_9595MenuObjects1[i];
        ++k;
    }
}
gdjs.Game_32EndCode.GDBack_9595to_9595Main_9595MenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Game_32EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32EndCode.GDGame_9595ENDObjects1.length = 0;
gdjs.Game_32EndCode.GDGame_9595ENDObjects2.length = 0;
gdjs.Game_32EndCode.GDBack_9595to_9595Main_9595MenuObjects1.length = 0;
gdjs.Game_32EndCode.GDBack_9595to_9595Main_9595MenuObjects2.length = 0;
gdjs.Game_32EndCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32EndCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Game_32EndCode.GDShadowObjects1.length = 0;
gdjs.Game_32EndCode.GDShadowObjects2.length = 0;
gdjs.Game_32EndCode.GDFireObjects1.length = 0;
gdjs.Game_32EndCode.GDFireObjects2.length = 0;
gdjs.Game_32EndCode.GDCameraCenterObjects1.length = 0;
gdjs.Game_32EndCode.GDCameraCenterObjects2.length = 0;
gdjs.Game_32EndCode.GDPlayerObjects1.length = 0;
gdjs.Game_32EndCode.GDPlayerObjects2.length = 0;
gdjs.Game_32EndCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32EndCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32EndCode.GDTransitionObjects1.length = 0;
gdjs.Game_32EndCode.GDTransitionObjects2.length = 0;

gdjs.Game_32EndCode.eventsList0(runtimeScene);
gdjs.Game_32EndCode.GDGame_9595ENDObjects1.length = 0;
gdjs.Game_32EndCode.GDGame_9595ENDObjects2.length = 0;
gdjs.Game_32EndCode.GDBack_9595to_9595Main_9595MenuObjects1.length = 0;
gdjs.Game_32EndCode.GDBack_9595to_9595Main_9595MenuObjects2.length = 0;
gdjs.Game_32EndCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32EndCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Game_32EndCode.GDShadowObjects1.length = 0;
gdjs.Game_32EndCode.GDShadowObjects2.length = 0;
gdjs.Game_32EndCode.GDFireObjects1.length = 0;
gdjs.Game_32EndCode.GDFireObjects2.length = 0;
gdjs.Game_32EndCode.GDCameraCenterObjects1.length = 0;
gdjs.Game_32EndCode.GDCameraCenterObjects2.length = 0;
gdjs.Game_32EndCode.GDPlayerObjects1.length = 0;
gdjs.Game_32EndCode.GDPlayerObjects2.length = 0;
gdjs.Game_32EndCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32EndCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32EndCode.GDTransitionObjects1.length = 0;
gdjs.Game_32EndCode.GDTransitionObjects2.length = 0;


return;

}

gdjs['Game_32EndCode'] = gdjs.Game_32EndCode;
