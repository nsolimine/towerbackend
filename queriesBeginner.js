const database = require("./database-connection");

module.exports = {
    list(){
      return database("beginner");
    },
    read(id){
      return database("beginner")
      .select()
      .where("id", id)
      .first();
    },
    create(beginner){
      return database("beginner")
      .insert(beginner)
      .returning("*")
      .then(record => record[0]);
    },
    update(id, beginner){
      return database("beginner")
      .update(beginner)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
    },
    delete(id){
      return database("beginner")
      .delete()
      .where("id", id);
    }
};
