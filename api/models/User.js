var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' },
    role : { collection: 'Role', via: 'name' },
    apiToken : { collection: 'ApiToken', via: 'user' }
  }
};

module.exports = User;
