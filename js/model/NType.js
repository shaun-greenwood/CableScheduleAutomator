class NType{
    constructor(impedance){
        if(impedance === undefined){
            this._impedance = 50;
        } else {
            this._impedance = impedance;
        }
    }
}