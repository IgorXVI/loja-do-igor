module.exports = class ClinetesDAO {
    constructor(connection){
        this._connection = connection
    }

    add(cliente){
        return new Promise((resolve, reject)=>{
            this._connection.query("INSERT INTO ")
        })
    }
}