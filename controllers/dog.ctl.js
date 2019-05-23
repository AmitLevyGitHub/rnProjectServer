const Dog = require("../models/dog");
const errobj = require("../errObj");

exports.isNickExists = (req, res) => {
  const nickName = req.query.nickName;

  Dog.find({
    Name: nickName
  })
    .then(result => {
      res.send(result.length > 0 ? true : false);
    })
    .catch(err => {
      return res.send(errobj(500, err));
    });
};

exports.getDogInfoBynickName = (req, res) => {
  const nickName = req.query.nickName;

  Dog.find({
    Name: nickName
  })
    .then(result => {
      console.log(result);
      res.send(result.length > 0 ? result : errobj(404, "Dog not found"));
    })
    .catch(err => {
      return res.send(errobj(500, err));
    });
};
