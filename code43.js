gdjs.EndStoryCode = {};
gdjs.EndStoryCode.localVariables = [];
gdjs.EndStoryCode.GDNarrationObjects1= [];
gdjs.EndStoryCode.GDNarrationObjects2= [];
gdjs.EndStoryCode.GDNarrationObjects3= [];
gdjs.EndStoryCode.GDNarrationObjects4= [];
gdjs.EndStoryCode.GDNarrationObjects5= [];
gdjs.EndStoryCode.GDNarrationObjects6= [];
gdjs.EndStoryCode.GDNarrationObjects7= [];
gdjs.EndStoryCode.GDNarrationObjects8= [];
gdjs.EndStoryCode.GDNarration2Objects1= [];
gdjs.EndStoryCode.GDNarration2Objects2= [];
gdjs.EndStoryCode.GDNarration2Objects3= [];
gdjs.EndStoryCode.GDNarration2Objects4= [];
gdjs.EndStoryCode.GDNarration2Objects5= [];
gdjs.EndStoryCode.GDNarration2Objects6= [];
gdjs.EndStoryCode.GDNarration2Objects7= [];
gdjs.EndStoryCode.GDNarration2Objects8= [];
gdjs.EndStoryCode.GDNarration3Objects1= [];
gdjs.EndStoryCode.GDNarration3Objects2= [];
gdjs.EndStoryCode.GDNarration3Objects3= [];
gdjs.EndStoryCode.GDNarration3Objects4= [];
gdjs.EndStoryCode.GDNarration3Objects5= [];
gdjs.EndStoryCode.GDNarration3Objects6= [];
gdjs.EndStoryCode.GDNarration3Objects7= [];
gdjs.EndStoryCode.GDNarration3Objects8= [];
gdjs.EndStoryCode.GDNarration4Objects1= [];
gdjs.EndStoryCode.GDNarration4Objects2= [];
gdjs.EndStoryCode.GDNarration4Objects3= [];
gdjs.EndStoryCode.GDNarration4Objects4= [];
gdjs.EndStoryCode.GDNarration4Objects5= [];
gdjs.EndStoryCode.GDNarration4Objects6= [];
gdjs.EndStoryCode.GDNarration4Objects7= [];
gdjs.EndStoryCode.GDNarration4Objects8= [];
gdjs.EndStoryCode.GDNarration5Objects1= [];
gdjs.EndStoryCode.GDNarration5Objects2= [];
gdjs.EndStoryCode.GDNarration5Objects3= [];
gdjs.EndStoryCode.GDNarration5Objects4= [];
gdjs.EndStoryCode.GDNarration5Objects5= [];
gdjs.EndStoryCode.GDNarration5Objects6= [];
gdjs.EndStoryCode.GDNarration5Objects7= [];
gdjs.EndStoryCode.GDNarration5Objects8= [];
gdjs.EndStoryCode.GDcontinueObjects1= [];
gdjs.EndStoryCode.GDcontinueObjects2= [];
gdjs.EndStoryCode.GDcontinueObjects3= [];
gdjs.EndStoryCode.GDcontinueObjects4= [];
gdjs.EndStoryCode.GDcontinueObjects5= [];
gdjs.EndStoryCode.GDcontinueObjects6= [];
gdjs.EndStoryCode.GDcontinueObjects7= [];
gdjs.EndStoryCode.GDcontinueObjects8= [];
gdjs.EndStoryCode.GDTransitionObjects1= [];
gdjs.EndStoryCode.GDTransitionObjects2= [];
gdjs.EndStoryCode.GDTransitionObjects3= [];
gdjs.EndStoryCode.GDTransitionObjects4= [];
gdjs.EndStoryCode.GDTransitionObjects5= [];
gdjs.EndStoryCode.GDTransitionObjects6= [];
gdjs.EndStoryCode.GDTransitionObjects7= [];
gdjs.EndStoryCode.GDTransitionObjects8= [];


gdjs.EndStoryCode.mapOfGDgdjs_9546EndStoryCode_9546GDNarration2Objects3Objects = Hashtable.newFrom({"Narration2": gdjs.EndStoryCode.GDNarration2Objects3});
gdjs.EndStoryCode.mapOfGDgdjs_9546EndStoryCode_9546GDNarration3Objects5Objects = Hashtable.newFrom({"Narration3": gdjs.EndStoryCode.GDNarration3Objects5});
gdjs.EndStoryCode.mapOfGDgdjs_9546EndStoryCode_9546GDNarration4Objects6Objects = Hashtable.newFrom({"Narration4": gdjs.EndStoryCode.GDNarration4Objects6});
gdjs.EndStoryCode.mapOfGDgdjs_9546EndStoryCode_9546GDNarration5Objects7Objects = Hashtable.newFrom({"Narration5": gdjs.EndStoryCode.GDNarration5Objects7});
gdjs.EndStoryCode.asyncCallback95195484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndStoryCode.localVariables);
gdjs.EndStoryCode.localVariables.length = 0;
}
gdjs.EndStoryCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndStoryCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.EndStoryCode.asyncCallback95195484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndStoryCode.asyncCallback95194756 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndStoryCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Narration"), gdjs.EndStoryCode.GDNarrationObjects7);

gdjs.copyArray(asyncObjectsList.getObjects("Narration4"), gdjs.EndStoryCode.GDNarration4Objects7);

gdjs.EndStoryCode.GDNarration5Objects7.length = 0;

{for(var i = 0, len = gdjs.EndStoryCode.GDNarration4Objects7.length ;i < len;++i) {
    gdjs.EndStoryCode.GDNarration4Objects7[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.EndStoryCode.mapOfGDgdjs_9546EndStoryCode_9546GDNarration5Objects7Objects, (( gdjs.EndStoryCode.GDNarrationObjects7.length === 0 ) ? 0 :gdjs.EndStoryCode.GDNarrationObjects7[0].getX()), (( gdjs.EndStoryCode.GDNarrationObjects7.length === 0 ) ? 0 :gdjs.EndStoryCode.GDNarrationObjects7[0].getY()), "");
}

{ //Subevents
gdjs.EndStoryCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.EndStoryCode.localVariables.length = 0;
}
gdjs.EndStoryCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndStoryCode.localVariables);
for (const obj of gdjs.EndStoryCode.GDNarrationObjects6) asyncObjectsList.addObject("Narration", obj);
for (const obj of gdjs.EndStoryCode.GDNarration4Objects6) asyncObjectsList.addObject("Narration4", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.EndStoryCode.asyncCallback95194756(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndStoryCode.asyncCallback95193844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndStoryCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Narration"), gdjs.EndStoryCode.GDNarrationObjects6);

gdjs.copyArray(asyncObjectsList.getObjects("Narration3"), gdjs.EndStoryCode.GDNarration3Objects6);

gdjs.EndStoryCode.GDNarration4Objects6.length = 0;

{for(var i = 0, len = gdjs.EndStoryCode.GDNarration3Objects6.length ;i < len;++i) {
    gdjs.EndStoryCode.GDNarration3Objects6[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.EndStoryCode.mapOfGDgdjs_9546EndStoryCode_9546GDNarration4Objects6Objects, (( gdjs.EndStoryCode.GDNarrationObjects6.length === 0 ) ? 0 :gdjs.EndStoryCode.GDNarrationObjects6[0].getX()), (( gdjs.EndStoryCode.GDNarrationObjects6.length === 0 ) ? 0 :gdjs.EndStoryCode.GDNarrationObjects6[0].getY()), "");
}

{ //Subevents
gdjs.EndStoryCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.EndStoryCode.localVariables.length = 0;
}
gdjs.EndStoryCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndStoryCode.localVariables);
for (const obj of gdjs.EndStoryCode.GDNarrationObjects5) asyncObjectsList.addObject("Narration", obj);
for (const obj of gdjs.EndStoryCode.GDNarration3Objects5) asyncObjectsList.addObject("Narration3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.EndStoryCode.asyncCallback95193844(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndStoryCode.asyncCallback95193236 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndStoryCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Narration"), gdjs.EndStoryCode.GDNarrationObjects5);

gdjs.EndStoryCode.GDNarration3Objects5.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.EndStoryCode.mapOfGDgdjs_9546EndStoryCode_9546GDNarration3Objects5Objects, (( gdjs.EndStoryCode.GDNarrationObjects5.length === 0 ) ? 0 :gdjs.EndStoryCode.GDNarrationObjects5[0].getX()), (( gdjs.EndStoryCode.GDNarrationObjects5.length === 0 ) ? 0 :gdjs.EndStoryCode.GDNarrationObjects5[0].getY()), "");
}

{ //Subevents
gdjs.EndStoryCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.EndStoryCode.localVariables.length = 0;
}
gdjs.EndStoryCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndStoryCode.localVariables);
/* Don't save Narration as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.EndStoryCode.asyncCallback95193236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndStoryCode.asyncCallback95192924 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndStoryCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Narration2"), gdjs.EndStoryCode.GDNarration2Objects4);

{for(var i = 0, len = gdjs.EndStoryCode.GDNarration2Objects4.length ;i < len;++i) {
    gdjs.EndStoryCode.GDNarration2Objects4[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.EndStoryCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.EndStoryCode.localVariables.length = 0;
}
gdjs.EndStoryCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndStoryCode.localVariables);
for (const obj of gdjs.EndStoryCode.GDNarrationObjects3) asyncObjectsList.addObject("Narration", obj);
for (const obj of gdjs.EndStoryCode.GDNarration2Objects3) asyncObjectsList.addObject("Narration2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.EndStoryCode.asyncCallback95192924(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndStoryCode.asyncCallback95192356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndStoryCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Narration"), gdjs.EndStoryCode.GDNarrationObjects3);

gdjs.EndStoryCode.GDNarration2Objects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.EndStoryCode.mapOfGDgdjs_9546EndStoryCode_9546GDNarration2Objects3Objects, (( gdjs.EndStoryCode.GDNarrationObjects3.length === 0 ) ? 0 :gdjs.EndStoryCode.GDNarrationObjects3[0].getX()), (( gdjs.EndStoryCode.GDNarrationObjects3.length === 0 ) ? 0 :gdjs.EndStoryCode.GDNarrationObjects3[0].getY()), "");
}

{ //Subevents
gdjs.EndStoryCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.EndStoryCode.localVariables.length = 0;
}
gdjs.EndStoryCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndStoryCode.localVariables);
for (const obj of gdjs.EndStoryCode.GDNarrationObjects2) asyncObjectsList.addObject("Narration", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.EndStoryCode.asyncCallback95192356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndStoryCode.asyncCallback95192140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.EndStoryCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Narration"), gdjs.EndStoryCode.GDNarrationObjects2);
{for(var i = 0, len = gdjs.EndStoryCode.GDNarrationObjects2.length ;i < len;++i) {
    gdjs.EndStoryCode.GDNarrationObjects2[i].hide();
}
}

{ //Subevents
gdjs.EndStoryCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.EndStoryCode.localVariables.length = 0;
}
gdjs.EndStoryCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.EndStoryCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.EndStoryCode.asyncCallback95192140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndStoryCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "de0fe8d42aebd1dc02c6eda7af3e60e4cad68a1cc68a47356d87106b1a2c7637_Funky Energy Loop.aac", true, 50, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(95191980);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.EndStoryCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Narration"), gdjs.EndStoryCode.GDNarrationObjects1);
gdjs.copyArray(runtimeScene.getObjects("Narration2"), gdjs.EndStoryCode.GDNarration2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Narration3"), gdjs.EndStoryCode.GDNarration3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Narration4"), gdjs.EndStoryCode.GDNarration4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Narration5"), gdjs.EndStoryCode.GDNarration5Objects1);
{for(var i = 0, len = gdjs.EndStoryCode.GDNarration2Objects1.length ;i < len;++i) {
    gdjs.EndStoryCode.GDNarration2Objects1[i].getBehavior("Scale").setScale((( gdjs.EndStoryCode.GDNarrationObjects1.length === 0 ) ? 0 :gdjs.EndStoryCode.GDNarrationObjects1[0].getBehavior("Scale").getScale()));
}
}
{for(var i = 0, len = gdjs.EndStoryCode.GDNarration3Objects1.length ;i < len;++i) {
    gdjs.EndStoryCode.GDNarration3Objects1[i].getBehavior("Scale").setScale((( gdjs.EndStoryCode.GDNarrationObjects1.length === 0 ) ? 0 :gdjs.EndStoryCode.GDNarrationObjects1[0].getBehavior("Scale").getScale()));
}
}
{for(var i = 0, len = gdjs.EndStoryCode.GDNarration4Objects1.length ;i < len;++i) {
    gdjs.EndStoryCode.GDNarration4Objects1[i].getBehavior("Scale").setScale((( gdjs.EndStoryCode.GDNarrationObjects1.length === 0 ) ? 0 :gdjs.EndStoryCode.GDNarrationObjects1[0].getBehavior("Scale").getScale()));
}
}
{for(var i = 0, len = gdjs.EndStoryCode.GDNarration5Objects1.length ;i < len;++i) {
    gdjs.EndStoryCode.GDNarration5Objects1[i].getBehavior("Scale").setScale((( gdjs.EndStoryCode.GDNarrationObjects1.length === 0 ) ? 0 :gdjs.EndStoryCode.GDNarrationObjects1[0].getBehavior("Scale").getScale()));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("continue"), gdjs.EndStoryCode.GDcontinueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.EndStoryCode.GDcontinueObjects1.length;i<l;++i) {
    if ( gdjs.EndStoryCode.GDcontinueObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.EndStoryCode.GDcontinueObjects1[k] = gdjs.EndStoryCode.GDcontinueObjects1[i];
        ++k;
    }
}
gdjs.EndStoryCode.GDcontinueObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "You Won", false);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "confirmation_001.ogg", false, 50, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.EndStoryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndStoryCode.GDNarrationObjects1.length = 0;
gdjs.EndStoryCode.GDNarrationObjects2.length = 0;
gdjs.EndStoryCode.GDNarrationObjects3.length = 0;
gdjs.EndStoryCode.GDNarrationObjects4.length = 0;
gdjs.EndStoryCode.GDNarrationObjects5.length = 0;
gdjs.EndStoryCode.GDNarrationObjects6.length = 0;
gdjs.EndStoryCode.GDNarrationObjects7.length = 0;
gdjs.EndStoryCode.GDNarrationObjects8.length = 0;
gdjs.EndStoryCode.GDNarration2Objects1.length = 0;
gdjs.EndStoryCode.GDNarration2Objects2.length = 0;
gdjs.EndStoryCode.GDNarration2Objects3.length = 0;
gdjs.EndStoryCode.GDNarration2Objects4.length = 0;
gdjs.EndStoryCode.GDNarration2Objects5.length = 0;
gdjs.EndStoryCode.GDNarration2Objects6.length = 0;
gdjs.EndStoryCode.GDNarration2Objects7.length = 0;
gdjs.EndStoryCode.GDNarration2Objects8.length = 0;
gdjs.EndStoryCode.GDNarration3Objects1.length = 0;
gdjs.EndStoryCode.GDNarration3Objects2.length = 0;
gdjs.EndStoryCode.GDNarration3Objects3.length = 0;
gdjs.EndStoryCode.GDNarration3Objects4.length = 0;
gdjs.EndStoryCode.GDNarration3Objects5.length = 0;
gdjs.EndStoryCode.GDNarration3Objects6.length = 0;
gdjs.EndStoryCode.GDNarration3Objects7.length = 0;
gdjs.EndStoryCode.GDNarration3Objects8.length = 0;
gdjs.EndStoryCode.GDNarration4Objects1.length = 0;
gdjs.EndStoryCode.GDNarration4Objects2.length = 0;
gdjs.EndStoryCode.GDNarration4Objects3.length = 0;
gdjs.EndStoryCode.GDNarration4Objects4.length = 0;
gdjs.EndStoryCode.GDNarration4Objects5.length = 0;
gdjs.EndStoryCode.GDNarration4Objects6.length = 0;
gdjs.EndStoryCode.GDNarration4Objects7.length = 0;
gdjs.EndStoryCode.GDNarration4Objects8.length = 0;
gdjs.EndStoryCode.GDNarration5Objects1.length = 0;
gdjs.EndStoryCode.GDNarration5Objects2.length = 0;
gdjs.EndStoryCode.GDNarration5Objects3.length = 0;
gdjs.EndStoryCode.GDNarration5Objects4.length = 0;
gdjs.EndStoryCode.GDNarration5Objects5.length = 0;
gdjs.EndStoryCode.GDNarration5Objects6.length = 0;
gdjs.EndStoryCode.GDNarration5Objects7.length = 0;
gdjs.EndStoryCode.GDNarration5Objects8.length = 0;
gdjs.EndStoryCode.GDcontinueObjects1.length = 0;
gdjs.EndStoryCode.GDcontinueObjects2.length = 0;
gdjs.EndStoryCode.GDcontinueObjects3.length = 0;
gdjs.EndStoryCode.GDcontinueObjects4.length = 0;
gdjs.EndStoryCode.GDcontinueObjects5.length = 0;
gdjs.EndStoryCode.GDcontinueObjects6.length = 0;
gdjs.EndStoryCode.GDcontinueObjects7.length = 0;
gdjs.EndStoryCode.GDcontinueObjects8.length = 0;
gdjs.EndStoryCode.GDTransitionObjects1.length = 0;
gdjs.EndStoryCode.GDTransitionObjects2.length = 0;
gdjs.EndStoryCode.GDTransitionObjects3.length = 0;
gdjs.EndStoryCode.GDTransitionObjects4.length = 0;
gdjs.EndStoryCode.GDTransitionObjects5.length = 0;
gdjs.EndStoryCode.GDTransitionObjects6.length = 0;
gdjs.EndStoryCode.GDTransitionObjects7.length = 0;
gdjs.EndStoryCode.GDTransitionObjects8.length = 0;

gdjs.EndStoryCode.eventsList7(runtimeScene);
gdjs.EndStoryCode.GDNarrationObjects1.length = 0;
gdjs.EndStoryCode.GDNarrationObjects2.length = 0;
gdjs.EndStoryCode.GDNarrationObjects3.length = 0;
gdjs.EndStoryCode.GDNarrationObjects4.length = 0;
gdjs.EndStoryCode.GDNarrationObjects5.length = 0;
gdjs.EndStoryCode.GDNarrationObjects6.length = 0;
gdjs.EndStoryCode.GDNarrationObjects7.length = 0;
gdjs.EndStoryCode.GDNarrationObjects8.length = 0;
gdjs.EndStoryCode.GDNarration2Objects1.length = 0;
gdjs.EndStoryCode.GDNarration2Objects2.length = 0;
gdjs.EndStoryCode.GDNarration2Objects3.length = 0;
gdjs.EndStoryCode.GDNarration2Objects4.length = 0;
gdjs.EndStoryCode.GDNarration2Objects5.length = 0;
gdjs.EndStoryCode.GDNarration2Objects6.length = 0;
gdjs.EndStoryCode.GDNarration2Objects7.length = 0;
gdjs.EndStoryCode.GDNarration2Objects8.length = 0;
gdjs.EndStoryCode.GDNarration3Objects1.length = 0;
gdjs.EndStoryCode.GDNarration3Objects2.length = 0;
gdjs.EndStoryCode.GDNarration3Objects3.length = 0;
gdjs.EndStoryCode.GDNarration3Objects4.length = 0;
gdjs.EndStoryCode.GDNarration3Objects5.length = 0;
gdjs.EndStoryCode.GDNarration3Objects6.length = 0;
gdjs.EndStoryCode.GDNarration3Objects7.length = 0;
gdjs.EndStoryCode.GDNarration3Objects8.length = 0;
gdjs.EndStoryCode.GDNarration4Objects1.length = 0;
gdjs.EndStoryCode.GDNarration4Objects2.length = 0;
gdjs.EndStoryCode.GDNarration4Objects3.length = 0;
gdjs.EndStoryCode.GDNarration4Objects4.length = 0;
gdjs.EndStoryCode.GDNarration4Objects5.length = 0;
gdjs.EndStoryCode.GDNarration4Objects6.length = 0;
gdjs.EndStoryCode.GDNarration4Objects7.length = 0;
gdjs.EndStoryCode.GDNarration4Objects8.length = 0;
gdjs.EndStoryCode.GDNarration5Objects1.length = 0;
gdjs.EndStoryCode.GDNarration5Objects2.length = 0;
gdjs.EndStoryCode.GDNarration5Objects3.length = 0;
gdjs.EndStoryCode.GDNarration5Objects4.length = 0;
gdjs.EndStoryCode.GDNarration5Objects5.length = 0;
gdjs.EndStoryCode.GDNarration5Objects6.length = 0;
gdjs.EndStoryCode.GDNarration5Objects7.length = 0;
gdjs.EndStoryCode.GDNarration5Objects8.length = 0;
gdjs.EndStoryCode.GDcontinueObjects1.length = 0;
gdjs.EndStoryCode.GDcontinueObjects2.length = 0;
gdjs.EndStoryCode.GDcontinueObjects3.length = 0;
gdjs.EndStoryCode.GDcontinueObjects4.length = 0;
gdjs.EndStoryCode.GDcontinueObjects5.length = 0;
gdjs.EndStoryCode.GDcontinueObjects6.length = 0;
gdjs.EndStoryCode.GDcontinueObjects7.length = 0;
gdjs.EndStoryCode.GDcontinueObjects8.length = 0;
gdjs.EndStoryCode.GDTransitionObjects1.length = 0;
gdjs.EndStoryCode.GDTransitionObjects2.length = 0;
gdjs.EndStoryCode.GDTransitionObjects3.length = 0;
gdjs.EndStoryCode.GDTransitionObjects4.length = 0;
gdjs.EndStoryCode.GDTransitionObjects5.length = 0;
gdjs.EndStoryCode.GDTransitionObjects6.length = 0;
gdjs.EndStoryCode.GDTransitionObjects7.length = 0;
gdjs.EndStoryCode.GDTransitionObjects8.length = 0;


return;

}

gdjs['EndStoryCode'] = gdjs.EndStoryCode;
