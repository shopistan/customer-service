const Customer = require('../../modals/Customer');
const Address = require('../../modals/Address');

const createCustomer = async ({ name, email, address }) => {
  const addressObj = await Address.create({
    street: address.street || '',
    city: address.city || '',
    country: address.country || '',
  });
  return Customer.create({ name, email, address: addressObj._id });
};

const getCustomer = async (id) => {
  const customer = await Customer.findById(id).populate('address');
  return customer ? customer.toJSON() : null;
};

const getCustomerByEmail = async (email) => {
  return Customer.findOne({ email }).populate('address');
};

const createCustomerIfNotExist = async (customer) => {
  let customerObj = await getCustomerByEmail(customer.email);

  if (!customerObj) {
    await createCustomer(customer);
    return getCustomerByEmail(customer.email);
  }

  return customerObj;
};

module.exports = {
  getCustomer,
  createCustomer,
  getCustomerByEmail,
  createCustomerIfNotExist,
};
