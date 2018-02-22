const database = require("./database-connection");

module.exports = {
    list(){
      return database("intermediate");
    },
    read(id){
      return database("intermediate")
      .select()
      .where("id", id)
      .first();
    },
    create(intermediate){
      return database("intermediate")
      .insert(intermediate)
      .returning("*")
      .then(record => record[0]);
    },
    update(id, intermediate){
      return database("intermediate")
      .update(intermediate)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
    },
    delete(id){
      return database("intermediate")
      .delete()
      .where("id", id);
    }
};
