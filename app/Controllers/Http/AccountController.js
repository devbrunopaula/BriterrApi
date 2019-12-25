"use strict";
const uuid = require("uuid/v1");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with accounts
 */

const Customer = use("App/Models/Account");

class AccountController {
  /**
   * Show a list of all accounts.
   * GET accounts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const customers = await Customer.all();
    return customers;
  }

  /**
   * Render a form to be used for creating a new account.
   * GET accounts/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new account.
   * POST accounts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ params, request, response }) {
    const { firstName, lastName } = request.body;
    const customer = new Customer();

    customer.account_id = uuid();
    customer.firstName = firstName;
    customer.lastName = lastName;

    await customer.save();

    response.status(201).json({
      message: "Sucessfully created a new Customer",
      data: customer
    });
  }

  /**
   * Display a single account.
   * GET accounts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const customer = Customer.find(params.account_id);

    if (!customer) {
      response.json({
        data: "Customer not Found"
      });
    } else {
      return customer;
    }
  }

  /**
   * Render a form to update an existing account.
   * GET accounts/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update account details.
   * PUT or PATCH accounts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a account with id.
   * DELETE accounts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = AccountController;
