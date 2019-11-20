const model=require('../models');
module.exports={

    store(req,res,userId) {
      model.Contractor.create({
        workSearch:'',
        enterprise:'',
        userId:userId,
      })
      .then(function(){ res.send(200,{message:'El usuario se ha creado correctamente'})})
      .catch(err => res.status(400).json('Error: ' + err));
    },

    profileInformation(req,res){
      model.User.findAll({
        where: {id: req.user.id}, 
        include: ['contractor'],
        include:['contractorProject']
      })
      .then(function(contractor){ res.send(contractor)})
      .catch(err => res.status(400).json('Error: ' + err));
    },

    update(req,res){
      model.Contractor.update({
        workSearch: req.body.workSearch,
        enterprise: req.body.enterprise,
      }, {where: {userId: req.user.id}})
      .then(function(){res.send({success:true});})
      .catch(err => res.status(400).send({error:err}));
    },

    delete (req,res){
        model.Contractor.destroy(   
         {where: {userId: req.user.id}}).then(function(){
           res.send({success:true});
        }).catch(err => {res.send({req: req}); 
        console.log(err)}
        );      
    },
  
}

