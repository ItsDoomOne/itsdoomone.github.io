gdjs.questionVATCode = {};
gdjs.questionVATCode.GDNewTextObjects1= [];
gdjs.questionVATCode.GDNewTextObjects2= [];
gdjs.questionVATCode.GDNewSpriteObjects1= [];
gdjs.questionVATCode.GDNewSpriteObjects2= [];
gdjs.questionVATCode.GD_95951simObjects1= [];
gdjs.questionVATCode.GD_95951simObjects2= [];
gdjs.questionVATCode.GD_95950naoObjects1= [];
gdjs.questionVATCode.GD_95950naoObjects2= [];
gdjs.questionVATCode.GDGreenButton3Objects1= [];
gdjs.questionVATCode.GDGreenButton3Objects2= [];
gdjs.questionVATCode.GDNewText2Objects1= [];
gdjs.questionVATCode.GDNewText2Objects2= [];
gdjs.questionVATCode.GDNewText3Objects1= [];
gdjs.questionVATCode.GDNewText3Objects2= [];
gdjs.questionVATCode.GDNewText4Objects1= [];
gdjs.questionVATCode.GDNewText4Objects2= [];


gdjs.questionVATCode.mapOfGDgdjs_9546questionVATCode_9546GD_959595951simObjects1Objects = Hashtable.newFrom({"_1sim": gdjs.questionVATCode.GD_95951simObjects1});
gdjs.questionVATCode.mapOfGDgdjs_9546questionVATCode_9546GD_959595951simObjects1Objects = Hashtable.newFrom({"_1sim": gdjs.questionVATCode.GD_95951simObjects1});
gdjs.questionVATCode.mapOfGDgdjs_9546questionVATCode_9546GD_959595950naoObjects1Objects = Hashtable.newFrom({"_0nao": gdjs.questionVATCode.GD_95950naoObjects1});
gdjs.questionVATCode.mapOfGDgdjs_9546questionVATCode_9546GD_959595950naoObjects1Objects = Hashtable.newFrom({"_0nao": gdjs.questionVATCode.GD_95950naoObjects1});
gdjs.questionVATCode.mapOfGDgdjs_9546questionVATCode_9546GDGreenButton3Objects1Objects = Hashtable.newFrom({"GreenButton3": gdjs.questionVATCode.GDGreenButton3Objects1});
gdjs.questionVATCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs.questionVATCode.GDGreenButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.questionVATCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.questionVATCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.questionVATCode.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.questionVATCode.GDNewText4Objects1);
{for(var i = 0, len = gdjs.questionVATCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDNewText2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.questionVATCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDNewTextObjects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}{for(var i = 0, len = gdjs.questionVATCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDNewText3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.questionVATCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDNewText4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.questionVATCode.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDGreenButton3Objects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_1sim"), gdjs.questionVATCode.GD_95951simObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.questionVATCode.mapOfGDgdjs_9546questionVATCode_9546GD_959595951simObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) == "0";
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs.questionVATCode.GDGreenButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.questionVATCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.questionVATCode.GDNewText4Objects1);
{for(var i = 0, len = gdjs.questionVATCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDNewText2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.questionVATCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDNewText2Objects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setString("1");
}{for(var i = 0, len = gdjs.questionVATCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDNewText4Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.questionVATCode.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDGreenButton3Objects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(18).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_1sim"), gdjs.questionVATCode.GD_95951simObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.questionVATCode.mapOfGDgdjs_9546questionVATCode_9546GD_959595951simObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) == "0";
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs.questionVATCode.GDGreenButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.questionVATCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.questionVATCode.GDNewText3Objects1);
{for(var i = 0, len = gdjs.questionVATCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDNewText2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.questionVATCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDNewText2Objects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setString("1");
}{for(var i = 0, len = gdjs.questionVATCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDNewText3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.questionVATCode.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDGreenButton3Objects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(18).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_0nao"), gdjs.questionVATCode.GD_95950naoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.questionVATCode.mapOfGDgdjs_9546questionVATCode_9546GD_959595950naoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) == "0";
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs.questionVATCode.GDGreenButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.questionVATCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.questionVATCode.GDNewText3Objects1);
{for(var i = 0, len = gdjs.questionVATCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDNewText2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.questionVATCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDNewText2Objects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setString("1");
}{for(var i = 0, len = gdjs.questionVATCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDNewText3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.questionVATCode.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDGreenButton3Objects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(18).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("_0nao"), gdjs.questionVATCode.GD_95950naoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.questionVATCode.mapOfGDgdjs_9546questionVATCode_9546GD_959595950naoObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(4)) == "0";
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs.questionVATCode.GDGreenButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.questionVATCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.questionVATCode.GDNewText4Objects1);
{for(var i = 0, len = gdjs.questionVATCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDNewText2Objects1[i].setString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString());
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setString("1");
}{for(var i = 0, len = gdjs.questionVATCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDNewText2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.questionVATCode.GDGreenButton3Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDGreenButton3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.questionVATCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.questionVATCode.GDNewText4Objects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(18).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButton3"), gdjs.questionVATCode.GDGreenButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.questionVATCode.mapOfGDgdjs_9546questionVATCode_9546GDGreenButton3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "jogo", false);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setString("0");
}}

}


};

gdjs.questionVATCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.questionVATCode.GDNewTextObjects1.length = 0;
gdjs.questionVATCode.GDNewTextObjects2.length = 0;
gdjs.questionVATCode.GDNewSpriteObjects1.length = 0;
gdjs.questionVATCode.GDNewSpriteObjects2.length = 0;
gdjs.questionVATCode.GD_95951simObjects1.length = 0;
gdjs.questionVATCode.GD_95951simObjects2.length = 0;
gdjs.questionVATCode.GD_95950naoObjects1.length = 0;
gdjs.questionVATCode.GD_95950naoObjects2.length = 0;
gdjs.questionVATCode.GDGreenButton3Objects1.length = 0;
gdjs.questionVATCode.GDGreenButton3Objects2.length = 0;
gdjs.questionVATCode.GDNewText2Objects1.length = 0;
gdjs.questionVATCode.GDNewText2Objects2.length = 0;
gdjs.questionVATCode.GDNewText3Objects1.length = 0;
gdjs.questionVATCode.GDNewText3Objects2.length = 0;
gdjs.questionVATCode.GDNewText4Objects1.length = 0;
gdjs.questionVATCode.GDNewText4Objects2.length = 0;

gdjs.questionVATCode.eventsList0(runtimeScene);

return;

}

gdjs['questionVATCode'] = gdjs.questionVATCode;
