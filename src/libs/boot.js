module.exports = app =>{
    
    app.listen(app.get('port'),()=>{
        console.log("SERVER:")
        console.log('Server on port', app.get('port'));
    });

};