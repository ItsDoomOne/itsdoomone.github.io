gdjs.GameCode = {};
gdjs.GameCode.GDNewSpriteObjects1= [];
gdjs.GameCode.GDNewSpriteObjects2= [];
gdjs.GameCode.GDNewSpriteObjects3= [];
gdjs.GameCode.GDNewTiledSpriteObjects1= [];
gdjs.GameCode.GDNewTiledSpriteObjects2= [];
gdjs.GameCode.GDNewTiledSpriteObjects3= [];
gdjs.GameCode.GDMercuryPlayerObjects1= [];
gdjs.GameCode.GDMercuryPlayerObjects2= [];
gdjs.GameCode.GDMercuryPlayerObjects3= [];
gdjs.GameCode.GDBruhPlayerObjects1= [];
gdjs.GameCode.GDBruhPlayerObjects2= [];
gdjs.GameCode.GDBruhPlayerObjects3= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MercuryPlayer"), gdjs.GameCode.GDMercuryPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDMercuryPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMercuryPlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MercuryPlayer"), gdjs.GameCode.GDMercuryPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDMercuryPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMercuryPlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MercuryPlayer"), gdjs.GameCode.GDMercuryPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDMercuryPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMercuryPlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BruhPlayer"), gdjs.GameCode.GDBruhPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBruhPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBruhPlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BruhPlayer"), gdjs.GameCode.GDBruhPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBruhPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBruhPlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BruhPlayer"), gdjs.GameCode.GDBruhPlayerObjects1);
{for(var i = 0, len = gdjs.GameCode.GDBruhPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBruhPlayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__DiscordRichPresence__ConnectToDiscord.func(runtimeScene, "950530072417280042", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__DiscordRichPresence__UpdateRichPresence.func(runtimeScene, "In the game", "To Be Worked On", 1, 1, "LOLOGO", "The mf character", "LOLOGO", "LOL Enterprises", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDNewSpriteObjects1.length = 0;
gdjs.GameCode.GDNewSpriteObjects2.length = 0;
gdjs.GameCode.GDNewSpriteObjects3.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.GameCode.GDMercuryPlayerObjects1.length = 0;
gdjs.GameCode.GDMercuryPlayerObjects2.length = 0;
gdjs.GameCode.GDMercuryPlayerObjects3.length = 0;
gdjs.GameCode.GDBruhPlayerObjects1.length = 0;
gdjs.GameCode.GDBruhPlayerObjects2.length = 0;
gdjs.GameCode.GDBruhPlayerObjects3.length = 0;

gdjs.GameCode.eventsList1(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
