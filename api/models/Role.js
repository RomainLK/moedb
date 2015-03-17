/**
* Role.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: { type: 'string' },
    edit : { type: 'array' },
    create : { type: 'array' },
    delete : { type: 'array' },
    read : { type: 'array' }
  }
};

