"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AccountSchema extends Schema {
  up() {
    this.create("accounts", table => {
      table.increments();
      table.integer("account_id");
      table.string("firstName");
      table.string("lastName");
      table.timestamps();
    });
  }

  down() {
    this.drop("accounts");
  }
}

module.exports = AccountSchema;
