class Link{
    constructor(from, to, linkType){
        if(from === undefined){
            throw new Error('link needs a source port');
        } else {
            this._from = from;
        }
        if(to === undefined){
            throw new Error('link needs a destination port');
        } else {
            this._to = to;
        }
        if(linkType === undefined){
            throw new Error('link needs a link type');
        } else {
            this._linkType = linkType;
        }
    }
}