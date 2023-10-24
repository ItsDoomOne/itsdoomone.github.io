gdjs.jogoCode = {};
gdjs.jogoCode.GDNewTiledSpriteObjects1= [];
gdjs.jogoCode.GDNewTiledSpriteObjects2= [];
gdjs.jogoCode.GDNewTiledSpriteObjects3= [];
gdjs.jogoCode.GDNewTiledSpriteObjects4= [];
gdjs.jogoCode.GDNewTextObjects1= [];
gdjs.jogoCode.GDNewTextObjects2= [];
gdjs.jogoCode.GDNewTextObjects3= [];
gdjs.jogoCode.GDNewTextObjects4= [];
gdjs.jogoCode.GDjogador_9595lixoObjects1= [];
gdjs.jogoCode.GDjogador_9595lixoObjects2= [];
gdjs.jogoCode.GDjogador_9595lixoObjects3= [];
gdjs.jogoCode.GDjogador_9595lixoObjects4= [];
gdjs.jogoCode.GDArvore_9595megabemObjects1= [];
gdjs.jogoCode.GDArvore_9595megabemObjects2= [];
gdjs.jogoCode.GDArvore_9595megabemObjects3= [];
gdjs.jogoCode.GDArvore_9595megabemObjects4= [];
gdjs.jogoCode.GDArvore_9595megabem_9595SOQ_9595SEM_9595TRONCOObjects1= [];
gdjs.jogoCode.GDArvore_9595megabem_9595SOQ_9595SEM_9595TRONCOObjects2= [];
gdjs.jogoCode.GDArvore_9595megabem_9595SOQ_9595SEM_9595TRONCOObjects3= [];
gdjs.jogoCode.GDArvore_9595megabem_9595SOQ_9595SEM_9595TRONCOObjects4= [];
gdjs.jogoCode.GDQuest_9595o_95951Objects1= [];
gdjs.jogoCode.GDQuest_9595o_95951Objects2= [];
gdjs.jogoCode.GDQuest_9595o_95951Objects3= [];
gdjs.jogoCode.GDQuest_9595o_95951Objects4= [];
gdjs.jogoCode.GDQuest_9595o_95955Objects1= [];
gdjs.jogoCode.GDQuest_9595o_95955Objects2= [];
gdjs.jogoCode.GDQuest_9595o_95955Objects3= [];
gdjs.jogoCode.GDQuest_9595o_95955Objects4= [];
gdjs.jogoCode.GDQuest_9595o_95954Objects1= [];
gdjs.jogoCode.GDQuest_9595o_95954Objects2= [];
gdjs.jogoCode.GDQuest_9595o_95954Objects3= [];
gdjs.jogoCode.GDQuest_9595o_95954Objects4= [];
gdjs.jogoCode.GDQuest_9595o_95958Objects1= [];
gdjs.jogoCode.GDQuest_9595o_95958Objects2= [];
gdjs.jogoCode.GDQuest_9595o_95958Objects3= [];
gdjs.jogoCode.GDQuest_9595o_95958Objects4= [];
gdjs.jogoCode.GDQuest_9595o_95957Objects1= [];
gdjs.jogoCode.GDQuest_9595o_95957Objects2= [];
gdjs.jogoCode.GDQuest_9595o_95957Objects3= [];
gdjs.jogoCode.GDQuest_9595o_95957Objects4= [];
gdjs.jogoCode.GDQuest_9595o_95952Objects1= [];
gdjs.jogoCode.GDQuest_9595o_95952Objects2= [];
gdjs.jogoCode.GDQuest_9595o_95952Objects3= [];
gdjs.jogoCode.GDQuest_9595o_95952Objects4= [];
gdjs.jogoCode.GDQuest_9595o_95956Objects1= [];
gdjs.jogoCode.GDQuest_9595o_95956Objects2= [];
gdjs.jogoCode.GDQuest_9595o_95956Objects3= [];
gdjs.jogoCode.GDQuest_9595o_95956Objects4= [];
gdjs.jogoCode.GDQuest_9595o_95953Objects1= [];
gdjs.jogoCode.GDQuest_9595o_95953Objects2= [];
gdjs.jogoCode.GDQuest_9595o_95953Objects3= [];
gdjs.jogoCode.GDQuest_9595o_95953Objects4= [];
gdjs.jogoCode.GDQuest_9595o_95959Objects1= [];
gdjs.jogoCode.GDQuest_9595o_95959Objects2= [];
gdjs.jogoCode.GDQuest_9595o_95959Objects3= [];
gdjs.jogoCode.GDQuest_9595o_95959Objects4= [];
gdjs.jogoCode.GDBlocoLimitadorFodaObjects1= [];
gdjs.jogoCode.GDBlocoLimitadorFodaObjects2= [];
gdjs.jogoCode.GDBlocoLimitadorFodaObjects3= [];
gdjs.jogoCode.GDBlocoLimitadorFodaObjects4= [];
gdjs.jogoCode.GDNewSpriteObjects1= [];
gdjs.jogoCode.GDNewSpriteObjects2= [];
gdjs.jogoCode.GDNewSpriteObjects3= [];
gdjs.jogoCode.GDNewSpriteObjects4= [];
gdjs.jogoCode.GDNewSprite2Objects1= [];
gdjs.jogoCode.GDNewSprite2Objects2= [];
gdjs.jogoCode.GDNewSprite2Objects3= [];
gdjs.jogoCode.GDNewSprite2Objects4= [];
gdjs.jogoCode.GDNewSprite3Objects1= [];
gdjs.jogoCode.GDNewSprite3Objects2= [];
gdjs.jogoCode.GDNewSprite3Objects3= [];
gdjs.jogoCode.GDNewSprite3Objects4= [];
gdjs.jogoCode.GDNewText2Objects1= [];
gdjs.jogoCode.GDNewText2Objects2= [];
gdjs.jogoCode.GDNewText2Objects3= [];
gdjs.jogoCode.GDNewText2Objects4= [];


gdjs.jogoCode.asyncCallback11027580 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects2);

{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].setX(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(13)));
}
}{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].setY(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)));
}
}}
gdjs.jogoCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.jogoCode.GDjogador_9595lixoObjects1) asyncObjectsList.addObject("jogador_lixo", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.05), (runtimeScene) => (gdjs.jogoCode.asyncCallback11027580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.jogoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects1);
{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setString("0");
}
{ //Subevents
gdjs.jogoCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.jogoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects2);
{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].setY(gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getY() - (6));
}
}{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getBehavior("Animation").setAnimationName("Norte (N)");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects2);
{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getBehavior("Animation").pauseAnimation();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects2);
{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].setX(gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getX() - (6));
}
}{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getBehavior("Animation").setAnimationName("Oeste (A)");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects2);
{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getBehavior("Animation").pauseAnimation();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects2);
{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].setY(gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getY() + (6));
}
}{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getBehavior("Animation").setAnimationName("Sul (S)");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects2);
{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getBehavior("Animation").pauseAnimation();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects2);
{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].setX(gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getX() + (6));
}
}{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getBehavior("Animation").setAnimationName("Leste (D)");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects1);
{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects1[i].getBehavior("Animation").pauseAnimation();
}
}}

}


};gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDNewTiledSpriteObjects1Objects = Hashtable.newFrom({"NewTiledSprite": gdjs.jogoCode.GDNewTiledSpriteObjects1});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects1Objects = Hashtable.newFrom({"jogador_lixo": gdjs.jogoCode.GDjogador_9595lixoObjects1});
gdjs.jogoCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.jogoCode.GDNewTiledSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDNewTiledSpriteObjects1Objects, gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.jogoCode.GDjogador_9595lixoObjects1 */
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.jogoCode.GDjogador_9595lixoObjects1.length !== 0 ? gdjs.jogoCode.GDjogador_9595lixoObjects1[0] : null), 0, 0, 3072, 2304, true, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.75, "", 0);
}}

}


};gdjs.jogoCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) == "blue";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_2"), gdjs.jogoCode.GDQuest_9595o_95952Objects3);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95952Objects3.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95952Objects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).setString("1");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) == "yellow";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_1"), gdjs.jogoCode.GDQuest_9595o_95951Objects3);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95951Objects3.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95951Objects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setString("1");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) == "green";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_3"), gdjs.jogoCode.GDQuest_9595o_95953Objects3);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95953Objects3.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95953Objects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(12).setString("1");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) == "red";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_4"), gdjs.jogoCode.GDQuest_9595o_95954Objects3);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95954Objects3.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95954Objects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(9).setString("1");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) == "orange";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_5"), gdjs.jogoCode.GDQuest_9595o_95955Objects3);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95955Objects3.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95955Objects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(17).setString("1");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) == "pink";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_8"), gdjs.jogoCode.GDQuest_9595o_95958Objects3);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95958Objects3.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95958Objects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(16).setString("1");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) == "purple";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_7"), gdjs.jogoCode.GDQuest_9595o_95957Objects3);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95957Objects3.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95957Objects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(11).setString("1");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) == "lightblue";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_6"), gdjs.jogoCode.GDQuest_9595o_95956Objects3);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95956Objects3.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95956Objects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(10).setString("1");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) == "pirateado";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_9"), gdjs.jogoCode.GDQuest_9595o_95959Objects2);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95959Objects2.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95959Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setString("1");
}}

}


};gdjs.jogoCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) == "1";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_1"), gdjs.jogoCode.GDQuest_9595o_95951Objects2);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95951Objects2.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95951Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)) == "1";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_3"), gdjs.jogoCode.GDQuest_9595o_95953Objects2);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95953Objects2.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95953Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)) == "1";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_4"), gdjs.jogoCode.GDQuest_9595o_95954Objects2);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95954Objects2.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95954Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "1";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_2"), gdjs.jogoCode.GDQuest_9595o_95952Objects2);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95952Objects2.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95952Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) == "1";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_6"), gdjs.jogoCode.GDQuest_9595o_95956Objects2);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95956Objects2.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95956Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(11)) == "1";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_7"), gdjs.jogoCode.GDQuest_9595o_95957Objects2);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95957Objects2.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95957Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)) == "1";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_9"), gdjs.jogoCode.GDQuest_9595o_95959Objects2);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95959Objects2.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95959Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(17)) == "1";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_5"), gdjs.jogoCode.GDQuest_9595o_95955Objects2);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95955Objects2.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95955Objects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(16)) == "1";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_8"), gdjs.jogoCode.GDQuest_9595o_95958Objects1);
{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95958Objects1.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95958Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.jogoCode.eventsList6 = function(runtimeScene) {

{


gdjs.jogoCode.eventsList4(runtimeScene);
}


{


gdjs.jogoCode.eventsList5(runtimeScene);
}


};gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595956Objects2Objects = Hashtable.newFrom({"Quest_o_6": gdjs.jogoCode.GDQuest_9595o_95956Objects2});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects2Objects = Hashtable.newFrom({"jogador_lixo": gdjs.jogoCode.GDjogador_9595lixoObjects2});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595957Objects2Objects = Hashtable.newFrom({"Quest_o_7": gdjs.jogoCode.GDQuest_9595o_95957Objects2});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects2Objects = Hashtable.newFrom({"jogador_lixo": gdjs.jogoCode.GDjogador_9595lixoObjects2});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595958Objects2Objects = Hashtable.newFrom({"Quest_o_8": gdjs.jogoCode.GDQuest_9595o_95958Objects2});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects2Objects = Hashtable.newFrom({"jogador_lixo": gdjs.jogoCode.GDjogador_9595lixoObjects2});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595955Objects2Objects = Hashtable.newFrom({"Quest_o_5": gdjs.jogoCode.GDQuest_9595o_95955Objects2});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects2Objects = Hashtable.newFrom({"jogador_lixo": gdjs.jogoCode.GDjogador_9595lixoObjects2});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595952Objects2Objects = Hashtable.newFrom({"Quest_o_2": gdjs.jogoCode.GDQuest_9595o_95952Objects2});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects2Objects = Hashtable.newFrom({"jogador_lixo": gdjs.jogoCode.GDjogador_9595lixoObjects2});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595954Objects2Objects = Hashtable.newFrom({"Quest_o_4": gdjs.jogoCode.GDQuest_9595o_95954Objects2});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects2Objects = Hashtable.newFrom({"jogador_lixo": gdjs.jogoCode.GDjogador_9595lixoObjects2});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595953Objects2Objects = Hashtable.newFrom({"Quest_o_3": gdjs.jogoCode.GDQuest_9595o_95953Objects2});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects2Objects = Hashtable.newFrom({"jogador_lixo": gdjs.jogoCode.GDjogador_9595lixoObjects2});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595951Objects2Objects = Hashtable.newFrom({"Quest_o_1": gdjs.jogoCode.GDQuest_9595o_95951Objects2});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects2Objects = Hashtable.newFrom({"jogador_lixo": gdjs.jogoCode.GDjogador_9595lixoObjects2});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595959Objects1Objects = Hashtable.newFrom({"Quest_o_9": gdjs.jogoCode.GDQuest_9595o_95959Objects1});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects1Objects = Hashtable.newFrom({"jogador_lixo": gdjs.jogoCode.GDjogador_9595lixoObjects1});
gdjs.jogoCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Quest_o_6"), gdjs.jogoCode.GDQuest_9595o_95956Objects2);
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595956Objects2Objects, gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.jogoCode.GDjogador_9595lixoObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Correto! A cultura da região Centro Oeste representa a união de influências portuguesas e indígenas. Nas manifestações culturais, estão presentes a Cavalhada e o Siriri.");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Você está errado. A cultura desta região é, na verdade, uma união de influencias tanto portuguesa, tanto indigena. Um exemplo é a Cavalhada e o Siriri.");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "questionVAT", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString("A cultura da região Centro Oeste representa a união de influências portuguesas e indígenas.");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("lightblue");
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects2.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects2[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects2.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects2[0].getPointX("")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quest_o_7"), gdjs.jogoCode.GDQuest_9595o_95957Objects2);
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595957Objects2Objects, gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.jogoCode.GDjogador_9595lixoObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Você está correto! o Centro-Oeste tem 1.612.000 km², e não 1.012.000 km².");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Você está errado! O centro-Oeste tem como\nárea territorial, 1.612.000 km² segundo IBGE em 2019");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "questionVAT", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString("A área territorial da região centro-oeste é de : 1.012.000 km² (IBGE, 2019)");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("purple");
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects2.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects2[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects2.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects2[0].getPointX("")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quest_o_8"), gdjs.jogoCode.GDQuest_9595o_95958Objects2);
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595958Objects2Objects, gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.jogoCode.GDjogador_9595lixoObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Você está errado! São exemplos de atividades\nterciárias: escolas, hospitais, comércios em geral, serviçosfinanceiros e turismo.");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Você está correto! A economia da região está baseada nas atividades primárias, com destaque para a agricultura e a pecuária.");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "questionVAT", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString("A economia da região Centro-Oeste está baseada nas atividades terciárias.");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("pink");
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects2.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects2[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects2.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects2[0].getPointX("")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quest_o_5"), gdjs.jogoCode.GDQuest_9595o_95955Objects2);
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595955Objects2Objects, gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.jogoCode.GDjogador_9595lixoObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Correto! A população do Centro-Oeste é composta por somente 16.504.303 habitantes.");
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString("A população do Centro-Oeste\né considerada pequena, quando comparada ao total populacional nacional.");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("A região brasileira mais populosa\né a sudeste, com mais de 87 milhões de habitantes.");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "questionVAT", false);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("orange");
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects2.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects2[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects2.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects2[0].getPointY("")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quest_o_2"), gdjs.jogoCode.GDQuest_9595o_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595952Objects2Objects, gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.jogoCode.GDjogador_9595lixoObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Correto! A região centro-oeste brasileira é a maior produtora de soja do Brasil por causa de seu clima e relevo favoráveis, que são ideais para o cultivo da soja.");
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString("A região centro-oeste brasileira é a maior produtora de soja do Brasil.");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Errado! A região centro-oeste brasileira é a maior produtora de soja do Brasil por causa de seu clima e relevo favoráveis, que são ideais para o cultivo da soja.");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "questionVAT", false);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("blue");
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects2.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects2[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects2.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects2[0].getPointY("")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quest_o_4"), gdjs.jogoCode.GDQuest_9595o_95954Objects2);
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595954Objects2Objects, gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.jogoCode.GDjogador_9595lixoObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Você está correto! Neste periodo destacou-se a implementação do telégrafo e da ferrovia Novo Oeste que liga São Paulo a Mato Grosso do Sul");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Você está errado! O centro oeste houve, na verdade, um aumento de ocupação nesta época, principalmente por causa do incentivo governamental, do telégrafo e da ferrovia Novo Oeste, que ligava São Paulo a Mato Grosso do sul.");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "questionVAT", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString("No final do século 20, houve um aumento no processo de ocupação da região do centro-oeste e a criação de novos centros urbanos.");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("red");
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects2.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects2[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects2.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects2[0].getPointX("")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quest_o_3"), gdjs.jogoCode.GDQuest_9595o_95953Objects2);
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595953Objects2Objects, gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.jogoCode.GDjogador_9595lixoObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Você está correto! Os portugueses chegaram pelo litoral, e já que o centro-oeste se localiza no meio do Brasil, chegaram lá por ultimo.");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Você está errado! O centro-oeste se localiza no meio do Brasil mas os portugueses ocuparam primeiramente as localidades do litoral");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "questionVAT", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Devido a sua localização, o centro-oeste foi uma das primeiras regiões colonizadas no Brasil.");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("green");
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects2.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects2[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects2.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects2[0].getPointX("")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quest_o_1"), gdjs.jogoCode.GDQuest_9595o_95951Objects2);
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595951Objects2Objects, gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.jogoCode.GDjogador_9595lixoObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Correto! O centro oeste brasileiro apresenta uma vegetação e biodiversidade complexa quando comparada a outras regiões brasileiras");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Você está errado! O centro-oeste brasileiro é o lar do bioma Cerrado, que é conhecido por sua grande biodiversidade. O Cerrado é composto por uma variedade de tipos de vegetação, incluindo campos, savanas, florestas e matas ciliares.");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "questionVAT", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString("O centro-oeste do Brasil apresente uma vegetação complexa quando comparada a outros estados");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("yellow");
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects2.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects2[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects2.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects2[0].getPointX("")));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quest_o_9"), gdjs.jogoCode.GDQuest_9595o_95959Objects1);
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595959Objects1Objects, gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.jogoCode.GDjogador_9595lixoObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Correto! O clima da região Centro-Oeste é\npredominantemente Tropical. Há na região, ainda, a ocorrência\ndo tipo climático Equatorial, no norte do Mato Grosso.");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Você está errado! O clima da região Centro-Oeste é predominantemente Tropical. Há na região, ainda, a ocorrência do tipo climático Equatorial, no norte do Mato Grosso.");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "questionVAT", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString("O clima da região centro oeste é predominantemente\ndesértico.");
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setString("pirateado");
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects1.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects1[0].getPointY("")));
}{runtimeScene.getGame().getVariables().getFromIndex(13).setNumber((( gdjs.jogoCode.GDjogador_9595lixoObjects1.length === 0 ) ? 0 :gdjs.jogoCode.GDjogador_9595lixoObjects1[0].getPointX("")));
}}

}


};gdjs.jogoCode.eventsList8 = function(runtimeScene) {

{


gdjs.jogoCode.eventsList7(runtimeScene);
}


};gdjs.jogoCode.eventsList9 = function(runtimeScene) {

{


gdjs.jogoCode.eventsList1(runtimeScene);
}


{


gdjs.jogoCode.eventsList2(runtimeScene);
}


{


gdjs.jogoCode.eventsList3(runtimeScene);
}


{


gdjs.jogoCode.eventsList6(runtimeScene);
}


{


gdjs.jogoCode.eventsList8(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "1";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)) == "1";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)) == "1";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)) == "1";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(11)) == "1";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)) == "1";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)) == "1";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(16)) == "1";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(17)) == "1";
}
}
}
}
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Parabuains", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.jogoCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.jogoCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.jogoCode.GDNewSprite3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.jogoCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.jogoCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDNewSpriteObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.jogoCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.jogoCode.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.jogoCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.jogoCode.GDNewSprite3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.jogoCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.jogoCode.GDNewText2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.jogoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.jogoCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.jogoCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.jogoCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.jogoCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.jogoCode.GDNewTextObjects1.length = 0;
gdjs.jogoCode.GDNewTextObjects2.length = 0;
gdjs.jogoCode.GDNewTextObjects3.length = 0;
gdjs.jogoCode.GDNewTextObjects4.length = 0;
gdjs.jogoCode.GDjogador_9595lixoObjects1.length = 0;
gdjs.jogoCode.GDjogador_9595lixoObjects2.length = 0;
gdjs.jogoCode.GDjogador_9595lixoObjects3.length = 0;
gdjs.jogoCode.GDjogador_9595lixoObjects4.length = 0;
gdjs.jogoCode.GDArvore_9595megabemObjects1.length = 0;
gdjs.jogoCode.GDArvore_9595megabemObjects2.length = 0;
gdjs.jogoCode.GDArvore_9595megabemObjects3.length = 0;
gdjs.jogoCode.GDArvore_9595megabemObjects4.length = 0;
gdjs.jogoCode.GDArvore_9595megabem_9595SOQ_9595SEM_9595TRONCOObjects1.length = 0;
gdjs.jogoCode.GDArvore_9595megabem_9595SOQ_9595SEM_9595TRONCOObjects2.length = 0;
gdjs.jogoCode.GDArvore_9595megabem_9595SOQ_9595SEM_9595TRONCOObjects3.length = 0;
gdjs.jogoCode.GDArvore_9595megabem_9595SOQ_9595SEM_9595TRONCOObjects4.length = 0;
gdjs.jogoCode.GDQuest_9595o_95951Objects1.length = 0;
gdjs.jogoCode.GDQuest_9595o_95951Objects2.length = 0;
gdjs.jogoCode.GDQuest_9595o_95951Objects3.length = 0;
gdjs.jogoCode.GDQuest_9595o_95951Objects4.length = 0;
gdjs.jogoCode.GDQuest_9595o_95955Objects1.length = 0;
gdjs.jogoCode.GDQuest_9595o_95955Objects2.length = 0;
gdjs.jogoCode.GDQuest_9595o_95955Objects3.length = 0;
gdjs.jogoCode.GDQuest_9595o_95955Objects4.length = 0;
gdjs.jogoCode.GDQuest_9595o_95954Objects1.length = 0;
gdjs.jogoCode.GDQuest_9595o_95954Objects2.length = 0;
gdjs.jogoCode.GDQuest_9595o_95954Objects3.length = 0;
gdjs.jogoCode.GDQuest_9595o_95954Objects4.length = 0;
gdjs.jogoCode.GDQuest_9595o_95958Objects1.length = 0;
gdjs.jogoCode.GDQuest_9595o_95958Objects2.length = 0;
gdjs.jogoCode.GDQuest_9595o_95958Objects3.length = 0;
gdjs.jogoCode.GDQuest_9595o_95958Objects4.length = 0;
gdjs.jogoCode.GDQuest_9595o_95957Objects1.length = 0;
gdjs.jogoCode.GDQuest_9595o_95957Objects2.length = 0;
gdjs.jogoCode.GDQuest_9595o_95957Objects3.length = 0;
gdjs.jogoCode.GDQuest_9595o_95957Objects4.length = 0;
gdjs.jogoCode.GDQuest_9595o_95952Objects1.length = 0;
gdjs.jogoCode.GDQuest_9595o_95952Objects2.length = 0;
gdjs.jogoCode.GDQuest_9595o_95952Objects3.length = 0;
gdjs.jogoCode.GDQuest_9595o_95952Objects4.length = 0;
gdjs.jogoCode.GDQuest_9595o_95956Objects1.length = 0;
gdjs.jogoCode.GDQuest_9595o_95956Objects2.length = 0;
gdjs.jogoCode.GDQuest_9595o_95956Objects3.length = 0;
gdjs.jogoCode.GDQuest_9595o_95956Objects4.length = 0;
gdjs.jogoCode.GDQuest_9595o_95953Objects1.length = 0;
gdjs.jogoCode.GDQuest_9595o_95953Objects2.length = 0;
gdjs.jogoCode.GDQuest_9595o_95953Objects3.length = 0;
gdjs.jogoCode.GDQuest_9595o_95953Objects4.length = 0;
gdjs.jogoCode.GDQuest_9595o_95959Objects1.length = 0;
gdjs.jogoCode.GDQuest_9595o_95959Objects2.length = 0;
gdjs.jogoCode.GDQuest_9595o_95959Objects3.length = 0;
gdjs.jogoCode.GDQuest_9595o_95959Objects4.length = 0;
gdjs.jogoCode.GDBlocoLimitadorFodaObjects1.length = 0;
gdjs.jogoCode.GDBlocoLimitadorFodaObjects2.length = 0;
gdjs.jogoCode.GDBlocoLimitadorFodaObjects3.length = 0;
gdjs.jogoCode.GDBlocoLimitadorFodaObjects4.length = 0;
gdjs.jogoCode.GDNewSpriteObjects1.length = 0;
gdjs.jogoCode.GDNewSpriteObjects2.length = 0;
gdjs.jogoCode.GDNewSpriteObjects3.length = 0;
gdjs.jogoCode.GDNewSpriteObjects4.length = 0;
gdjs.jogoCode.GDNewSprite2Objects1.length = 0;
gdjs.jogoCode.GDNewSprite2Objects2.length = 0;
gdjs.jogoCode.GDNewSprite2Objects3.length = 0;
gdjs.jogoCode.GDNewSprite2Objects4.length = 0;
gdjs.jogoCode.GDNewSprite3Objects1.length = 0;
gdjs.jogoCode.GDNewSprite3Objects2.length = 0;
gdjs.jogoCode.GDNewSprite3Objects3.length = 0;
gdjs.jogoCode.GDNewSprite3Objects4.length = 0;
gdjs.jogoCode.GDNewText2Objects1.length = 0;
gdjs.jogoCode.GDNewText2Objects2.length = 0;
gdjs.jogoCode.GDNewText2Objects3.length = 0;
gdjs.jogoCode.GDNewText2Objects4.length = 0;

gdjs.jogoCode.eventsList9(runtimeScene);

return;

}

gdjs['jogoCode'] = gdjs.jogoCode;
