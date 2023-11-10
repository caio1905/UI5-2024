sap.ui.define([], function() {
    'use strict';
    return{
        changeCurrency: function(sValue){
            if(!sValue){
                return
            }
            if(sValue === 'BRL'){
             return 'sap-icon://currency'
            }else{
                return 'sap-icon://lead'
            }
        },
        changeState: function(sValue){
            if(!sValue){
                return
            }
            if(sValue === 'BRL'){
             return 'Success'
            }else{
                return 'Warning'
            }
        }
    }
});