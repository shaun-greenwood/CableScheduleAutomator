class Location{
    constructor(label, container){
        if(label === undefined){
            this._Label = '';
        } else {
            this._label = label;
        }
        this._container = container;
    }
}