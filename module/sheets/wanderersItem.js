export default class WanderersItem extends ItemSheet {
    get template() {
        return `systems/wanderers/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        console.log("wanderers-item.js | getData() triggered");
        const baseData = super.getData();
        let sheetData = {
            owner: this.item.isOwner,
            editable: this.isEditable,
            item: baseData.item,
            data: baseData.item.data.data,
            config: CONFIG.wanderers,
        };
        
        return sheetData;
    }
}