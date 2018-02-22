const database = require("./database-connection");

module.exports = {
    list(){
      return database("advanced");
    },
    read(id){
      return database("advanced")
      .select()
      .where("id", id)
      .first();
    },
    create(advanced){
      return database("advanced")
      .insert(advanced)
      .returning("*")
      .then(record => record[0]);
    },
    update(id, advanced){
      return database("advanced")
      .update(advanced)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
    },
    delete(id){
      return database("advanced")
      .delete()
      .where("id", id);
    }
};
