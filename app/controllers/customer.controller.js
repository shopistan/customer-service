const Customer = require('../modals/Customer');
const Address = require('../modals/Address');

const createCustomer = async ({ name, email, address }) => {
  try {
    const addressObj = await Address.create({
      street: address.street || '',
      city: address.city || '',
      country: address.country || '',
    });
    return Customer.create({ name, email, address: addressObj._id });
  } catch (e) {
    return null;
  }
};

const getCustomer = async (id) => {
  const customer = await Customer.findById(id);
  console.log(customer, id);
  return {
    ...customer.toJSON(),
    address: (await Address.findById(customer.address)).toJSON(),
  };
};

const getCustomerByEmail = async (email) => {
  return Customer.findOne({ email });
};

const createCustomerIfNotExist = async (customer) => {
  console.log(customer);
  let customerObj = await getCustomerByEmail(customer.email);
  if (!customerObj) {
    customerObj = await createCustomer(customer);
  }
  return {
    ...customerObj.toJSON(),
    address: (await Address.findById(customerObj.address)).toJSON(),
  };
};

module.exports = {
  getCustomer,
  createCustomer,
  createCustomerIfNotExist,
};
