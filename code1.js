gdjs.jogoCode = {};
gdjs.jogoCode.GDNewTiledSpriteObjects1= [];
gdjs.jogoCode.GDNewTiledSpriteObjects2= [];
gdjs.jogoCode.GDNewTiledSpriteObjects3= [];
gdjs.jogoCode.GDNewTextObjects1= [];
gdjs.jogoCode.GDNewTextObjects2= [];
gdjs.jogoCode.GDNewTextObjects3= [];
gdjs.jogoCode.GDPrimeira_9595tela_9595vacil_9595oObjects1= [];
gdjs.jogoCode.GDPrimeira_9595tela_9595vacil_9595oObjects2= [];
gdjs.jogoCode.GDPrimeira_9595tela_9595vacil_9595oObjects3= [];
gdjs.jogoCode.GDSegunda_9595tela_9595vacil_9595oObjects1= [];
gdjs.jogoCode.GDSegunda_9595tela_9595vacil_9595oObjects2= [];
gdjs.jogoCode.GDSegunda_9595tela_9595vacil_9595oObjects3= [];
gdjs.jogoCode.GDjogador_9595lixoObjects1= [];
gdjs.jogoCode.GDjogador_9595lixoObjects2= [];
gdjs.jogoCode.GDjogador_9595lixoObjects3= [];
gdjs.jogoCode.GDArvore_9595megabemObjects1= [];
gdjs.jogoCode.GDArvore_9595megabemObjects2= [];
gdjs.jogoCode.GDArvore_9595megabemObjects3= [];
gdjs.jogoCode.GDArvore_9595megabem_9595SOQ_9595SEM_9595TRONCOObjects1= [];
gdjs.jogoCode.GDArvore_9595megabem_9595SOQ_9595SEM_9595TRONCOObjects2= [];
gdjs.jogoCode.GDArvore_9595megabem_9595SOQ_9595SEM_9595TRONCOObjects3= [];
gdjs.jogoCode.GDQuest_9595o_95951Objects1= [];
gdjs.jogoCode.GDQuest_9595o_95951Objects2= [];
gdjs.jogoCode.GDQuest_9595o_95951Objects3= [];


gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDSegunda_95959595tela_95959595vacil_95959595oObjects1Objects = Hashtable.newFrom({"Segunda_tela_vacil_o": gdjs.jogoCode.GDSegunda_9595tela_9595vacil_9595oObjects1});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects1Objects = Hashtable.newFrom({"jogador_lixo": gdjs.jogoCode.GDjogador_9595lixoObjects1});
gdjs.jogoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects2);
{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects2.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].setY(gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getY() + (-(4)));
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
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].setX(gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getX() + (-(4)));
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
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].setY(gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getY() + (4));
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
    gdjs.jogoCode.GDjogador_9595lixoObjects2[i].setX(gdjs.jogoCode.GDjogador_9595lixoObjects2[i].getX() + (4));
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


};gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595951Objects1Objects = Hashtable.newFrom({"Quest_o_1": gdjs.jogoCode.GDQuest_9595o_95951Objects1});
gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects1Objects = Hashtable.newFrom({"jogador_lixo": gdjs.jogoCode.GDjogador_9595lixoObjects1});
gdjs.jogoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) == "1";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_1"), gdjs.jogoCode.GDQuest_9595o_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects1);
{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setString("0");
}{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95951Objects1.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95951Objects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)) == "0";
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Quest_o_1"), gdjs.jogoCode.GDQuest_9595o_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects1);
{for(var i = 0, len = gdjs.jogoCode.GDjogador_9595lixoObjects1.length ;i < len;++i) {
    gdjs.jogoCode.GDjogador_9595lixoObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setString("0");
}{for(var i = 0, len = gdjs.jogoCode.GDQuest_9595o_95951Objects1.length ;i < len;++i) {
    gdjs.jogoCode.GDQuest_9595o_95951Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Segunda_tela_vacil_o"), gdjs.jogoCode.GDSegunda_9595tela_9595vacil_9595oObjects1);
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDSegunda_95959595tela_95959595vacil_95959595oObjects1Objects, gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.jogoCode.GDjogador_9595lixoObjects1 */
{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 1024, 1024, 1024, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.jogoCode.GDjogador_9595lixoObjects1.length !== 0 ? gdjs.jogoCode.GDjogador_9595lixoObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.jogoCode.eventsList0(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Quest_o_1"), gdjs.jogoCode.GDQuest_9595o_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("jogador_lixo"), gdjs.jogoCode.GDjogador_9595lixoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDQuest_95959595o_959595951Objects1Objects, gdjs.jogoCode.mapOfGDgdjs_9546jogoCode_9546GDjogador_95959595lixoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("Correto! O centro oeste brasileiro apresenta uma vegetação e biodiversidade complexa quando comparada a outras regiões brasileiras");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Você está errado! O centro-oeste brasileiro é o lar do bioma Cerrado, que é conhecido por sua grande biodiversidade. O Cerrado é composto por uma variedade de tipos de vegetação, incluindo campos, savanas, florestas e matas ciliares.");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "questionVAT", false);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString("O centro-oeste do Brasil apresente uma vegetação complexa quando comparada a outros estados");
}}

}


};

gdjs.jogoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.jogoCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.jogoCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.jogoCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.jogoCode.GDNewTextObjects1.length = 0;
gdjs.jogoCode.GDNewTextObjects2.length = 0;
gdjs.jogoCode.GDNewTextObjects3.length = 0;
gdjs.jogoCode.GDPrimeira_9595tela_9595vacil_9595oObjects1.length = 0;
gdjs.jogoCode.GDPrimeira_9595tela_9595vacil_9595oObjects2.length = 0;
gdjs.jogoCode.GDPrimeira_9595tela_9595vacil_9595oObjects3.length = 0;
gdjs.jogoCode.GDSegunda_9595tela_9595vacil_9595oObjects1.length = 0;
gdjs.jogoCode.GDSegunda_9595tela_9595vacil_9595oObjects2.length = 0;
gdjs.jogoCode.GDSegunda_9595tela_9595vacil_9595oObjects3.length = 0;
gdjs.jogoCode.GDjogador_9595lixoObjects1.length = 0;
gdjs.jogoCode.GDjogador_9595lixoObjects2.length = 0;
gdjs.jogoCode.GDjogador_9595lixoObjects3.length = 0;
gdjs.jogoCode.GDArvore_9595megabemObjects1.length = 0;
gdjs.jogoCode.GDArvore_9595megabemObjects2.length = 0;
gdjs.jogoCode.GDArvore_9595megabemObjects3.length = 0;
gdjs.jogoCode.GDArvore_9595megabem_9595SOQ_9595SEM_9595TRONCOObjects1.length = 0;
gdjs.jogoCode.GDArvore_9595megabem_9595SOQ_9595SEM_9595TRONCOObjects2.length = 0;
gdjs.jogoCode.GDArvore_9595megabem_9595SOQ_9595SEM_9595TRONCOObjects3.length = 0;
gdjs.jogoCode.GDQuest_9595o_95951Objects1.length = 0;
gdjs.jogoCode.GDQuest_9595o_95951Objects2.length = 0;
gdjs.jogoCode.GDQuest_9595o_95951Objects3.length = 0;

gdjs.jogoCode.eventsList1(runtimeScene);

return;

}

gdjs['jogoCode'] = gdjs.jogoCode;
