class Port{
    constructor(label, portType, container){
        if(portType === undefined){
            this._portType = new NType();
        } else {
            this._portType = portType;
        }
        if(label === undefined){
            this._label = 'name of port not defined';
        } else{
            this._label = label;
        }
        this._conatiner = container;
    }

    get type(){
        return this._portType;
    }
    get label(){
        return this._label;
    }
    get container(){
        return this._container;
    }
}