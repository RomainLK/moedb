module.exports = {

  attributes: {
    client: { type: 'string' },
    token : { type: 'string' },
    user: { model: 'User', required: true }
  }
  
};

