module.exports = {
  async up(db, client) {
    return db.collection("warehouses").updateMany({}, { $set: { books: [] } });
  },

  async down(db, client) {
    return db.collection("warehouses").updateMany({}, { $set: { books: [] } });
  },
};
