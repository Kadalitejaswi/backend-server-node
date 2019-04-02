
const port =4080;
const host = '127.0.0.1';
const dburl = 'mongodb://ds151820.mlab.com:51820/hotelmanagement';
const user = 'hotel';
const pass = 'hotel1';
const authSource = 'hotelmanagement';
const secret = 'supersecret';

module.exports={
  PORT : port,
  HOST : host,
  DBURL : dburl,
  USER:user,
  PASS:pass,
  AUTH:authSource,
  AUTHKEY:secret
   };