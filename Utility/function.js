// find Last ID And Make New ID
const makeNewId = (obj) => {

    if(obj.length ){
        return (Number( obj[obj.length - 1].id ) + 1); 
    }else{
        return 1
    }
    
}

module.exports = makeNewId;