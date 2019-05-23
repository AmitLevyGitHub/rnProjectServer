const Owner = require("../models/owner");
const Dog = require("../models/dog");
const errobj = require("../errObj");

exports.getOwnerinfoByEmail = (req, res) => {
  const email = req.query.email;

  Owner.find({
    Email: email
  })
    .then(result => {
      return res.send(
        result.length > 0 ? result : errobj(404, "Owner not found")
      );
    })
    .catch(err => {
      return res.send(errobj(500, err));
    });
};

exports.addOwnerToDog = (req, res) => {
  const { email, nickName } = req.query;

  Owner.findOneAndUpdate(
    {
      Email: email
    },
    {
      $push: { Dogs: nickName }
    }
  ).catch(err => {
    return res.send(errobj(500, err));
  });

  Dog.findOneAndUpdate(
    {
      Name: nickName
    },
    {
      $push: { Owners: email }
    }
  ).catch(err => {
    return res.send(errobj(500, err));
  });

  return res.json("Dog added to Owner");
};
