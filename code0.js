gdjs.Cena_32sem_32t_237tuloCode = {};
gdjs.Cena_32sem_32t_237tuloCode.GDNewTiledSpriteObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewTiledSpriteObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDStartButtonObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDStartButtonObjects2= [];
gdjs.Cena_32sem_32t_237tuloCode.GDPlayButtonObjects1= [];
gdjs.Cena_32sem_32t_237tuloCode.GDPlayButtonObjects2= [];


gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.Cena_32sem_32t_237tuloCode.GDPlayButtonObjects1});
gdjs.Cena_32sem_32t_237tuloCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.Cena_32sem_32t_237tuloCode.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Cena_32sem_32t_237tuloCode.mapOfGDgdjs_9546Cena_959532sem_959532t_9595237tuloCode_9546GDPlayButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "jogo", false);
}}

}


};

gdjs.Cena_32sem_32t_237tuloCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Cena_32sem_32t_237tuloCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDNewSpriteObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDStartButtonObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDStartButtonObjects2.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDPlayButtonObjects1.length = 0;
gdjs.Cena_32sem_32t_237tuloCode.GDPlayButtonObjects2.length = 0;

gdjs.Cena_32sem_32t_237tuloCode.eventsList0(runtimeScene);

return;

}

gdjs['Cena_32sem_32t_237tuloCode'] = gdjs.Cena_32sem_32t_237tuloCode;
