/**
* Artist.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    
    name: {
     type: 'string'
    },

    pixivId: {
      type: 'integer',
      unique: true
    },

    romanji: {
      type: 'string'
    },
    
    alternative: {
      type:'array'
    },
    
    details: {
      type: 'json'
    },
    
    createdBy : {
      model: 'User'
    },
    
    updatedBy : {
      model: 'User'
    },
    
    wiki: {
      type: 'string'
    },
    
    site: {
      type: 'array'
    },
    
    twitterHandle: {
      type: 'string'
    },
    
    circleWebCatalog: {
      type: 'string'
    },
    
    circles: {
      collection: 'Circles',
      via: 'members',
      dominant: true
    },
    
    
    misc: {
      type:'string'
    },
    
    works: {
      type:'string'
    }
    // _pixivHitNumber: {
    //   type: Number,
    //   default: 0
    // },
    // _timestamp: {
    //   type: 'date',
    //   defaultsTo: Date.now
    // },
    // _updater: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'User',
    //   set: strToObjectId
    // }
  }
};
