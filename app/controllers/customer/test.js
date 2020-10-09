const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-as-promised'));
const faker = require('faker');
const CustomerController = require('./customer.controller');
const testHelper = require('../../utils/test.helper');
const mongoose = require('mongoose');

beforeEach(testHelper.setupTest);

const getFakeCustomer = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: {
      city: faker.address.city(),
      street: faker.address.streetAddress(),
      country: faker.address.country(),
    },
  };
};

describe('Customer', () => {
  const fakeCustomer = getFakeCustomer();
  describe('Create', () => {
    it('should return a customer', async () => {
      const result = await CustomerController.createCustomerIfNotExist(
        fakeCustomer
      );
      console.log('createCustomerIfNotExist', result);
      expect(typeof result).to.equal('object');
    });
    it('should return a customer object', async () => {
      const result = await CustomerController.getCustomerByEmail(
        fakeCustomer.email
      );
      console.log('getCustomer', result);
      expect(typeof result).to.equal('object');
    });
  });
});
