gdjs.ParabuainsCode = {};
gdjs.ParabuainsCode.GDNewSpriteObjects1= [];
gdjs.ParabuainsCode.GDNewSpriteObjects2= [];
gdjs.ParabuainsCode.GDNewTextObjects1= [];
gdjs.ParabuainsCode.GDNewTextObjects2= [];
gdjs.ParabuainsCode.GDNewSprite2Objects1= [];
gdjs.ParabuainsCode.GDNewSprite2Objects2= [];
gdjs.ParabuainsCode.GDNewText2Objects1= [];
gdjs.ParabuainsCode.GDNewText2Objects2= [];
gdjs.ParabuainsCode.GDNewBBTextObjects1= [];
gdjs.ParabuainsCode.GDNewBBTextObjects2= [];
gdjs.ParabuainsCode.GDNewText3Objects1= [];
gdjs.ParabuainsCode.GDNewText3Objects2= [];


gdjs.ParabuainsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.ParabuainsCode.GDNewText3Objects1);
{for(var i = 0, len = gdjs.ParabuainsCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.ParabuainsCode.GDNewText3Objects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(18).getAsString() + " pontos");
}
}}

}


};

gdjs.ParabuainsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ParabuainsCode.GDNewSpriteObjects1.length = 0;
gdjs.ParabuainsCode.GDNewSpriteObjects2.length = 0;
gdjs.ParabuainsCode.GDNewTextObjects1.length = 0;
gdjs.ParabuainsCode.GDNewTextObjects2.length = 0;
gdjs.ParabuainsCode.GDNewSprite2Objects1.length = 0;
gdjs.ParabuainsCode.GDNewSprite2Objects2.length = 0;
gdjs.ParabuainsCode.GDNewText2Objects1.length = 0;
gdjs.ParabuainsCode.GDNewText2Objects2.length = 0;
gdjs.ParabuainsCode.GDNewBBTextObjects1.length = 0;
gdjs.ParabuainsCode.GDNewBBTextObjects2.length = 0;
gdjs.ParabuainsCode.GDNewText3Objects1.length = 0;
gdjs.ParabuainsCode.GDNewText3Objects2.length = 0;

gdjs.ParabuainsCode.eventsList0(runtimeScene);

return;

}

gdjs['ParabuainsCode'] = gdjs.ParabuainsCode;
