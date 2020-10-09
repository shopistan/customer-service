if (process.env.NODE_ENV === 'production') require('dotenv').config();

module.exports = {
  mongodb:
    process.env.mongodb ||
    'mongodb://commercejs:prisonbreak321@ds241298.mlab.com:41298/commercejs',
  secret: process.env.secret || 'c6aSsUzQBACrdWoWy6g7BkuxwKfkPbmB',
  mongodbTest: process.env.mongodbTest || 'mongodb://localhost:27017/test',
};
