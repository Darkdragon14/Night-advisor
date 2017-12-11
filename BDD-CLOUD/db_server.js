//Require
var express = require('express');
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var port = 3000;
<<<<<<< HEAD
var hostname = 'localhost'; 
=======
var hostname = 'db_server';
>>>>>>> c7866c56e00269c4be81d74a2ac12b231fdcc4ad
var app = express();
var myRouter = express.Router(); 



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://mongo/nightadvisor') ;

//Modèles Mongoose
var avisUsers = mongoose.Schema({
    idUser: String,
    idBar: String,
    note: Number,
});

<<<<<<< HEAD
var temperature = mongoose.Schema({
    idBar: String,
    moyTemp: String      
}); 

var dataLive = mongoose.Schema({
    idBar: String, 
    temperature: Number, 
    bar: String,
    musique: String,    
    occupation: Number 
}); 

var recommandations = mongoose.Schema({
    IDUser: String,
    IDBar: String,
    Probability: Number
}); 

var Avis = mongoose.model('Avis', avisUsers); 
var Temperature = mongoose.model('Temperature', temperature); 
var DataLive = mongoose.model('DataLive', dataLive); 
var Recommandations = mongoose.model('Recommandations', recommandations); 

=======
var Avis = mongoose.model('Avis', avisUsers);
var myRouter = express.Router();
>>>>>>> c7866c56e00269c4be81d74a2ac12b231fdcc4ad

//ROUTES

//Principale
myRouter.route('/')
.all(function(req,res){
      res.json({message : "Bienvenue sur la base de donnée de Night Advisor"});
});

<<<<<<< HEAD
//Avis
myRouter.route('/avis')
.get(function(req,res){ 
=======
myRouter.route('/avis/')
.get(function(req,res){
>>>>>>> c7866c56e00269c4be81d74a2ac12b231fdcc4ad
	Avis.find(function(err, avis){
        if (err){
            res.send(err);
        }
        res.json(avis);
    });
})
.post(function(req,res){
      var avis = new Avis();
      avis.idUser = req.body.idUser;
      avis.idBar = req.body.idBar;
      avis.note = req.body.note;
      avis.save(function(err){
        if(err){
          res.send(err);
        }
        res.json({message : "L'avis est maintenant enregistré"});
<<<<<<< HEAD
      }); 
}); 


myRouter.route('/avis/:idBar')
.get(function(req,res){ 
            Avis.findById(req.params.idBar, function(err, avis) {
=======
      });
});

myRouter.route('/avis/:avis_id')
.get(function(req,res){
            Avis.findById(req.params.avis_id, function(err, avis) {
>>>>>>> c7866c56e00269c4be81d74a2ac12b231fdcc4ad
            if (err)
                res.send(err);
            res.json(avis);
        });
<<<<<<< HEAD
})/* 
.put(function(req,res){ 
=======
})
.put(function(req,res){
>>>>>>> c7866c56e00269c4be81d74a2ac12b231fdcc4ad
                Avis.findById(req.params.avis_id, function(err, avis) {
                if (err){
                    res.send(err);
                }
                        avis.idUser = req.body.idUser;
                        avis.idBar = req.body.idBar;
                        avis.note = req.body.note;
                        avis.save(function(err){
                          if(err){
                            res.send(err);
                          }
                          res.json({message : "Avis mis à jour"});
                        });
                });
})
.delete(function(req,res){

    Avis.remove({_id: req.params.avis_id}, function(err, avis){
        if (err){
            res.send(err);
        }
<<<<<<< HEAD
        res.json({message:"Avis supprimé"}); 
    }); 
    
});*/

//Température
myRouter.route('/temperature')
.get(function(req,res){ 
  Temperature.find(function(err, temperature){
        if (err){
            res.send(err); 
        }
        res.json(temperature);  
    }); 
})
.post(function(req,res){
      var temperature = new Temperature();
      temperature.idBar = req.body.idBar;
      temperature.moyTemp = req.body.moyTemp;
      temperature.save(function(err){
        if(err){
          res.send(err);
        }
        res.json({message : "La temperature est maintenant enregistrée"});
      }); 
}); 


//Recherche température par bar (avec l'idBar)
myRouter.route('/temperature/:temperature.moyTemp')
.get(function(req,res){ 
            Temperature.find({ 'moyTemp': 'variable' }, function(err, temperature) {
            if (err)
                res.send(err);
            res.json(temperature);
        });
})


//DataLive
myRouter.route('/getDataLive')
.get(function(req,res){ 
  DataLive.find(function(err, dataLive){
        if (err){
            res.send(err); 
        }
        res.json(dataLive);  
    }); 
})
.post(function(req,res){
      var dataLive = new DataLive();
      dataLive.idBar = req.body.idBar;
      dataLive.temperature = req.body.temperature;
      dataLive.bar = req.body.bar;
      dataLive.musique = req.body.musique;
      dataLive.occupation = req.body.occupation;
      dataLive.save(function(err){
        if(err){
          res.send(err);
        }
        res.json({message : "L'avis est maintenant enregistré"});
      }); 
}); 

//DataLive
myRouter.route('/sendRecommandations')
.post(function(req,res){
      var recommandations = new Recommandations();
      recommandations.IDUser = req.body.IDuser;
      recommandations.IDBar = req.body.IDbar;
      recommandations.Probability = req.body.Probability;
      recommandations.save(function(err){
        if(err){
          res.send(err);
        }
        res.json({message : "Recommandation enregistrée"});
      }); 
}); 


app.use(myRouter);   
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port); 
});



//Recommandations
//POST avec IDuser, IDbar et Probability
/*[
  { idBar: "bar1", temperature: 18, bar: "Biere", musique: "pop", occupation: 11},
  { idBar: "bar2", temperature: 25, bar: "Vin", musique: "rap", occupation: 15 },
  { idBar: "bar3", temperature: 20, bar: "Wisky", musique: "dance", occupation: 20 },
  { idBar: "bar4", temperature: 19, bar: "Biere", musique: "electro", occupation: 30 },
  { idBar: "bar5", temperature: 22, bar: "Biere", musique: "rap", occupation: 5 },
  { idBar: "bar6", temperature: 15, bar: "Wisky", musique: "classique", occupation: 12 },
];*/


=======
        res.json({message:"Avis supprimé"});
    });

});

app.use(myRouter);
app.listen(port, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
});
>>>>>>> c7866c56e00269c4be81d74a2ac12b231fdcc4ad
