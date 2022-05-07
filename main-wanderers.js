import { wanderers } from "./module/config.js"
import WanderersItem from "./module/sheets/wanderersItem.js";

Hooks.once("init", function(){
    console.log("main-wanderers.js | Initialising Pasha Drifters System");

    CONFIG.wanderers = wanderers;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("wanderers", WanderersItem, { makeDefault : true });
})