

class Lang {

    constructor(props){
        this.itemID = props.itemID;        
        this.itemClass = props.itemClass;        
        this.itemName = props.itemName;        
    }

    get itemID(){ return this._itemID;}
    set itemID(value){this._itemID = value;}

    get itemClass(){ return this._itemClass;}
    set itemClass(value){this._itemClass = value;}

    get itemName(){ return this._itemName;}
    set itemName(value){this._itemName = value;}
}

export default Lang;