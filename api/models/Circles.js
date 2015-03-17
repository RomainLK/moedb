module.exports = {

  attributes: {
    name: { type: 'string' },
    members : { collection: 'Artist', via :'circles' }
  }
  
};

