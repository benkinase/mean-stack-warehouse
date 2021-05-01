module.exports = {
  async up(db, client) {
    return db
      .collection("warehouses")
      .updateMany({}, { $set: { decommissioned: false } });
  },

  async down(db, client) {
    return db
      .collection("warehouses")
      .updateMany({}, { $set: { decommissioned: false } });
  },
};
