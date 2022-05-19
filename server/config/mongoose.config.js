const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/piratasEsquema1",{
		useNewUrlParser: true,
		useUnifiedTopology:true
})
		.then(()=> console.log("Conectando con DB"))
		.catch(err => console.log("Error al conectarse con DB "+err))

