"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrdersSchema extends Schema {
  up() {
    this.create("orders", table => {
      // table.increments();
      table
        .string("order_id")
        .unsigned()
        .notNullable()
        .references("account_id")
        .inTable("accounts")
        .onDelete("CASCADE");
      table.string("group");
      table.timestamps();
    });
  }

  down() {
    this.drop("orders");
  }
}

module.exports = OrdersSchema;
