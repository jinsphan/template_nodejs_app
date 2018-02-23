var checkTokenExpiry = (req, res, next) => {
  var expiry = req.userDecoded.exp;
  var expiried = (new Date().getTime()) - expiry;
  if (expiried > 0) console.log("Het han", expiried);
  else console.log("Con han", expiried);
  next();
}

module.exports = checkTokenExpiry;