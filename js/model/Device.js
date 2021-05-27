class Device{
    constructor(label, container){
        if(label === undefined){
            this._label = 'no label defined';
        } else {
            this._label = label;
        }
        if(container === undefined){
            this._conatiner = 'no container defined';
        } else {
            this._conatiner = container;
        }
    
    }

    get label(){
        return this._label;
    }
    get container(){
        return this._container;
    }

}