const servicesModel = require("../models/services.model");

module.exports.addServices = async(req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  if (!title || !description) {
    return res.send({ code: 400, message: "Bad Request" });
  }

  const entry = new servicesModel({ title: title, description: description });
  const success = await entry.save();

  if(success){
    return res.send({code:200 , message : 'add success'});
  }else{
    return res.send({code:500 , message : 'service error'});
  }
};

module.exports.getServices = async(req, res) => {
  const _data = await servicesModel.find({});
  if(_data){
    return res.send({ code: 200, message: "success", data: _data });
  }else{
    return res.send({code:500 , message : 'service error'});
  }
    
};
