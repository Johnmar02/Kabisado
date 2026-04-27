gdjs.InstructionsCode = {};
gdjs.InstructionsCode.localVariables = [];
gdjs.InstructionsCode.GDNewTiledSpriteObjects1= [];
gdjs.InstructionsCode.GDNewTiledSpriteObjects2= [];
gdjs.InstructionsCode.GDUserInputBoxObjects1= [];
gdjs.InstructionsCode.GDUserInputBoxObjects2= [];
gdjs.InstructionsCode.GDSendBtnObjects1= [];
gdjs.InstructionsCode.GDSendBtnObjects2= [];
gdjs.InstructionsCode.GDNewSpriteObjects1= [];
gdjs.InstructionsCode.GDNewSpriteObjects2= [];
gdjs.InstructionsCode.GDBotAnswerObjects1= [];
gdjs.InstructionsCode.GDBotAnswerObjects2= [];
gdjs.InstructionsCode.GDNewTextObjects1= [];
gdjs.InstructionsCode.GDNewTextObjects2= [];
gdjs.InstructionsCode.GDMain_9595MenuObjects1= [];
gdjs.InstructionsCode.GDMain_9595MenuObjects2= [];
gdjs.InstructionsCode.GDNewPanelSpriteObjects1= [];
gdjs.InstructionsCode.GDNewPanelSpriteObjects2= [];
gdjs.InstructionsCode.GDNewPanelSprite2Objects1= [];
gdjs.InstructionsCode.GDNewPanelSprite2Objects2= [];
gdjs.InstructionsCode.GDNewButtonObjects1= [];
gdjs.InstructionsCode.GDNewButtonObjects2= [];
gdjs.InstructionsCode.GDTransitionObjects1= [];
gdjs.InstructionsCode.GDTransitionObjects2= [];


gdjs.InstructionsCode.userFunc0x282bdf8 = function GDJSInlineCode(runtimeScene) {
"use strict";
const inputObjects = runtimeScene.getObjects("UserInputBox");
const answerObjects = runtimeScene.getObjects("BotAnswer");
const questionList = runtimeScene.getObjects("NewText"); // ✅ The questions list

if (inputObjects.length > 0 && answerObjects.length > 0) {
  const userPrompt = inputObjects[0].getString().toLowerCase();
  const chatBox = answerObjects[0];

  // Clear user input
  inputObjects[0].setString("");

  let fixedResponse = "";

  // RULE-BASED RESPONSES
  if (userPrompt.includes("ano ang kabisado?") || userPrompt.includes("ano ang kabisado") || userPrompt.includes("kabisado") || userPrompt.includes("kabisado?")) {
    fixedResponse = "Ang Kabisado ay isang 2D adventure quiz game na parang Super Mario, ngunit para talunin ang mga kalaban at bosses kailangan mong sagutin ng tama ang mga tanong.";
  } else if (userPrompt.includes("paano ito laruin?") || userPrompt.includes("how to play")) {
    fixedResponse = "Sa Kabisado, gagalaw ka sa 2D world. Para talunin ang boss, sagutin mo ang multiple choice questions.\n Tama = Attack, Mali = Bawas Buhay!";
  } else if (userPrompt.includes("topics")) {
    fixedResponse = "Ang mga topics sa Kabisado ay: Bayani ng Pilipinas, Lalawigan, Kultura at Tradisyon, at Mga Festival.";
  } else if (userPrompt.includes("controls") || userPrompt.includes("paano gumalaw")) {
    fixedResponse = "Controls:\n⬅️ ➡️ = Galaw\n⬆️ = Talon\n⬇️ = Baba.";
  } else if (userPrompt.includes("multiplayer") || userPrompt.includes("2 player")) {
    fixedResponse = "Ang Kabisado Multiplayer ay 2-player adventure quiz game kung saan kailangan ng teamwork! Kailangan ninyong mag-ipon ng coins at sagutin ang mga tanong upang makalabas sa bawat level.";
  } else if (userPrompt.includes("objective") || userPrompt.includes("layunin")) {
    fixedResponse = "Layunin ninyo ay kolektahin ang lahat ng coins sa bawat level, sagutin ang mga tanong ng tama, at gamitin ang teamwork upang mabuksan ang mga pinto at tapusin ang laro!";
  } else if (userPrompt.includes("coins")) {
    fixedResponse = "Ang mga coins ay kailangan para makakuha ng puntos at minsan para ma-activate ang susunod na tanong o level. Kolektahin lahat bago pumunta sa pintuan!";
  } else if (userPrompt.includes("door") || userPrompt.includes("pinto")) {
    fixedResponse = "Para mabuksan ang pinto, dapat tama ang sagot ninyo sa tanong at pindutin ang A o B. tapakan nyo ang switch ng pintuan.";
  } else if (userPrompt.includes("tanong") || userPrompt.includes("quiz")) {
    fixedResponse = "Sa bawat level may tanong. Kapag tama ang sagot, bubukas ang pintuan. Kapag mali, babalik ka sa pinanggalingan mo.";
  } else if (userPrompt.includes("teamwork") || userPrompt.includes("magkasama")) {
    fixedResponse = "Sa Multiplayer Kabisado, mahalaga ang teamwork! Kailangan ninyong magtulungan sa pagsagot at tapakan niyo ang button upang mabuksan ang mga pinto para makausad sa level.";
  }

  // ✅ Typing effect function
  function typeWriter(text) {
    let i = 0;
    let typedText = "";

    function typingStep() {
      if (i < text.length) {
        typedText += text.charAt(i);
        chatBox.setBBText(typedText);
        i++;
        setTimeout(typingStep, 30);
      }
    }
    typingStep();
  }

  // ✅ If a known response was found
  if (fixedResponse !== "") {
    typeWriter(fixedResponse + "\n\n💡 Pindutin mo ang 'Questions?' para sa dagdag na katanungan");
    return;
  }

  // ✅ Otherwise, call Ollama AI
  chatBox.setBBText(" AI is thinking...");

  fetch("http://localhost:11434/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gemma:2b",
      prompt: userPrompt,
      stream: false
    })
  })
  .then(res => res.json())
  .then(data => {
    const responseText = data.response;
    chatBox.setBBText(""); 
    typeWriter(responseText + "");
  })
  .catch(err => {
    console.error("Pasensya na hindi ko masasagot 'yan ngayon...\n Mag tanong ka tungkol sa Kabisado");
    chatBox.setBBText("Pasensya na hindi ko masasagot 'yan ngayon...\n Mag tanong ka tungkol sa Kabisado\n\n💡 Click 'Questions?' for more instruction");
  });
}

};
gdjs.InstructionsCode.eventsList0 = function(runtimeScene) {

{


gdjs.InstructionsCode.userFunc0x282bdf8(runtimeScene);

}


};gdjs.InstructionsCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Main_Menu"), gdjs.InstructionsCode.GDMain_9595MenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstructionsCode.GDMain_9595MenuObjects1.length;i<l;++i) {
    if ( gdjs.InstructionsCode.GDMain_9595MenuObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.InstructionsCode.GDMain_9595MenuObjects1[k] = gdjs.InstructionsCode.GDMain_9595MenuObjects1[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDMain_9595MenuObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SinglePlayer", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SendBtn"), gdjs.InstructionsCode.GDSendBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstructionsCode.GDSendBtnObjects1.length;i<l;++i) {
    if ( gdjs.InstructionsCode.GDSendBtnObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.InstructionsCode.GDSendBtnObjects1[k] = gdjs.InstructionsCode.GDSendBtnObjects1[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDSendBtnObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BotAnswer"), gdjs.InstructionsCode.GDBotAnswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.InstructionsCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.InstructionsCode.GDBotAnswerObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDBotAnswerObjects1[i].setBBText("");
}
}
{for(var i = 0, len = gdjs.InstructionsCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDNewTextObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.InstructionsCode.GDBotAnswerObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDBotAnswerObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.InstructionsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewButton"), gdjs.InstructionsCode.GDNewButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InstructionsCode.GDNewButtonObjects1.length;i<l;++i) {
    if ( gdjs.InstructionsCode.GDNewButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.InstructionsCode.GDNewButtonObjects1[k] = gdjs.InstructionsCode.GDNewButtonObjects1[i];
        ++k;
    }
}
gdjs.InstructionsCode.GDNewButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BotAnswer"), gdjs.InstructionsCode.GDBotAnswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.InstructionsCode.GDNewTextObjects1);
{for(var i = 0, len = gdjs.InstructionsCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDNewTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.InstructionsCode.GDBotAnswerObjects1.length ;i < len;++i) {
    gdjs.InstructionsCode.GDBotAnswerObjects1[i].hide();
}
}
}

}


};

gdjs.InstructionsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstructionsCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.InstructionsCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.InstructionsCode.GDUserInputBoxObjects1.length = 0;
gdjs.InstructionsCode.GDUserInputBoxObjects2.length = 0;
gdjs.InstructionsCode.GDSendBtnObjects1.length = 0;
gdjs.InstructionsCode.GDSendBtnObjects2.length = 0;
gdjs.InstructionsCode.GDNewSpriteObjects1.length = 0;
gdjs.InstructionsCode.GDNewSpriteObjects2.length = 0;
gdjs.InstructionsCode.GDBotAnswerObjects1.length = 0;
gdjs.InstructionsCode.GDBotAnswerObjects2.length = 0;
gdjs.InstructionsCode.GDNewTextObjects1.length = 0;
gdjs.InstructionsCode.GDNewTextObjects2.length = 0;
gdjs.InstructionsCode.GDMain_9595MenuObjects1.length = 0;
gdjs.InstructionsCode.GDMain_9595MenuObjects2.length = 0;
gdjs.InstructionsCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.InstructionsCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.InstructionsCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.InstructionsCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.InstructionsCode.GDNewButtonObjects1.length = 0;
gdjs.InstructionsCode.GDNewButtonObjects2.length = 0;
gdjs.InstructionsCode.GDTransitionObjects1.length = 0;
gdjs.InstructionsCode.GDTransitionObjects2.length = 0;

gdjs.InstructionsCode.eventsList1(runtimeScene);
gdjs.InstructionsCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.InstructionsCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.InstructionsCode.GDUserInputBoxObjects1.length = 0;
gdjs.InstructionsCode.GDUserInputBoxObjects2.length = 0;
gdjs.InstructionsCode.GDSendBtnObjects1.length = 0;
gdjs.InstructionsCode.GDSendBtnObjects2.length = 0;
gdjs.InstructionsCode.GDNewSpriteObjects1.length = 0;
gdjs.InstructionsCode.GDNewSpriteObjects2.length = 0;
gdjs.InstructionsCode.GDBotAnswerObjects1.length = 0;
gdjs.InstructionsCode.GDBotAnswerObjects2.length = 0;
gdjs.InstructionsCode.GDNewTextObjects1.length = 0;
gdjs.InstructionsCode.GDNewTextObjects2.length = 0;
gdjs.InstructionsCode.GDMain_9595MenuObjects1.length = 0;
gdjs.InstructionsCode.GDMain_9595MenuObjects2.length = 0;
gdjs.InstructionsCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.InstructionsCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.InstructionsCode.GDNewPanelSprite2Objects1.length = 0;
gdjs.InstructionsCode.GDNewPanelSprite2Objects2.length = 0;
gdjs.InstructionsCode.GDNewButtonObjects1.length = 0;
gdjs.InstructionsCode.GDNewButtonObjects2.length = 0;
gdjs.InstructionsCode.GDTransitionObjects1.length = 0;
gdjs.InstructionsCode.GDTransitionObjects2.length = 0;


return;

}

gdjs['InstructionsCode'] = gdjs.InstructionsCode;
