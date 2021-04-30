const axios = require('axios');


exports.homeRoutes = (req, res) => {
    
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_tache = (req, res) =>{
    res.render('add_tache');
}

exports.update_tache = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_tache", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}