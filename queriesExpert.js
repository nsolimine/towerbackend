const database = require("./database-connection");

module.exports = {
    list(){
      return database("expert");
    },
    read(id){
      return database("expert")
      .select()
      .where("id", id)
      .first();
    },
    create(expert){
      return database("expert")
      .insert(expert)
      .returning("*")
      .then(record => record[0]);
    },
    update(id, expert){
      return database("expert")
      .update(expert)
      .where("id", id)
      .returning("*")
      .then(record => record[0]);
    },
    delete(id){
      return database("expert")
      .delete()
      .where("id", id);
    }
};
