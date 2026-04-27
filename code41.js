gdjs.CreditsCode = {};
gdjs.CreditsCode.localVariables = [];
gdjs.CreditsCode.GDNewBitmapTextObjects1= [];
gdjs.CreditsCode.GDNewBitmapTextObjects2= [];
gdjs.CreditsCode.GDNewTiledSpriteObjects1= [];
gdjs.CreditsCode.GDNewTiledSpriteObjects2= [];
gdjs.CreditsCode.GDNewButtonObjects1= [];
gdjs.CreditsCode.GDNewButtonObjects2= [];
gdjs.CreditsCode.GDTransitionObjects1= [];
gdjs.CreditsCode.GDTransitionObjects2= [];


gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewBitmapText"), gdjs.CreditsCode.GDNewBitmapTextObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDNewBitmapTextObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDNewBitmapTextObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "Sineskwela (PaoLul Outro) - Winxy Lofi Remix [swe8cTM5MAs]2.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.CreditsCode.GDNewButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDNewButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDNewButtonObjects1[k] = gdjs.CreditsCode.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDNewButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDNewBitmapTextObjects1.length = 0;
gdjs.CreditsCode.GDNewBitmapTextObjects2.length = 0;
gdjs.CreditsCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.CreditsCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.CreditsCode.GDNewButtonObjects1.length = 0;
gdjs.CreditsCode.GDNewButtonObjects2.length = 0;
gdjs.CreditsCode.GDTransitionObjects1.length = 0;
gdjs.CreditsCode.GDTransitionObjects2.length = 0;

gdjs.CreditsCode.eventsList0(runtimeScene);
gdjs.CreditsCode.GDNewBitmapTextObjects1.length = 0;
gdjs.CreditsCode.GDNewBitmapTextObjects2.length = 0;
gdjs.CreditsCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.CreditsCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.CreditsCode.GDNewButtonObjects1.length = 0;
gdjs.CreditsCode.GDNewButtonObjects2.length = 0;
gdjs.CreditsCode.GDTransitionObjects1.length = 0;
gdjs.CreditsCode.GDTransitionObjects2.length = 0;


return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
