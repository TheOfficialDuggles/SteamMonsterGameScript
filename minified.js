function startAutoClicker(){return autoClicker?void console.log("Autoclicker is already running!"):(autoClicker=setInterval(function(){var e=Math.floor(Math.random()*autoClickerVariance*2)-autoClickerVariance,a=clicksPerSecond+e;g_Minigame.m_CurrentScene.m_nClicks=a,debug&&console.log("clicking "+a+" times this second.")},autoClickerFreq),void console.log("autoClicker has been started."))}function startAutoRespawner(){return autoRespawner?void console.log("autoRespawner is already running!"):(autoRespawner=setInterval(function(){debug&&console.log("Checking if the player is dead."),g_Minigame.m_CurrentScene.m_bIsDead&&(debug&&console.log("Player is dead. Respawning."),RespawnPlayer())},respawnCheckFreq),void console.log("autoRespawner has been started."))}function startAutoTargetSwapper(){return autoTargetSwapper?void console.log("autoTargetSwapper is already running!"):(autoTargetSwapper=setInterval(function(){var e=!1,a=!1,t=-1,r=-1,o=null;g_Minigame.m_CurrentScene.m_rgEnemies.each(function(n){e||(2==n.m_data.type?(e=!0,o=n):t>0&&0===n.m_data.type&&n.m_data.hp<t?(t=n.m_data.hp,o=n):0>t&&0===n.m_data.type?(t=n.m_data.hp,a=!0,o=n):r>0&&!a&&n.m_data.hp<r?(r=n.m_data.hp,o=n):0>r&&!a&&(r=n.m_data.hp,o=n))}),o&&g_Minigame.m_CurrentScene.m_rgPlayerData.current_lane!=o.m_nLane&&g_Minigame.CurrentScene().TryChangeLane(o.m_nLane),g_Minigame.CurrentScene().TryChangeTarget(o.m_nID)},targetSwapperFreq),void console.log("autoTargetSwapper has been started."))}function startAllAutos(){startAutoClicker(),startAutoRespawner(),startAutoTargetSwapper()}function stopAutoClicker(){autoClicker?(clearInterval(autoClicker),autoClicker=null,console.log("autoClicker has been stopped.")):console.log("No autoClicker is running to stop.")}function stopAutoRespawner(){autoRespawner?(clearInterval(autoRespawner),autoRespawner=null,console.log("autoRespawner has been stopped.")):console.log("No autoRespawner is running to stop.")}function stopAutoTargetSwapper(){autoTargetSwapper?(clearInterval(autoTargetSwapper),autoTargetSwapper=null,console.log("autoTargetSwapper has been stopped.")):console.log("No autoTargetSwapper is running to stop.")}function stopAllAutos(){stopAutoClicker(),stopAutoRespawner(),stopAutoTargetSwapper()}var debug=!1,clicksPerSecond=100,autoClickerVariance=Math.floor(clicksPerSecond/10),respawnCheckFreq=5e3,targetSwapperFreq=1e3,autoClickerFreq=1e3,autoRespawner,autoClicker,autoTargetSwapper;startAllAutos();