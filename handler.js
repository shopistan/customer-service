'use strict';
const db = require('./app/config/db');
const send = require('./app/utils/response');

const CustomerController = require('./app/controllers/customer/customer.controller');

module.exports.getCustomer = async (event) => {
  try {
    const customer = await CustomerController.getCustomer(
      event.pathParameters.id
    );
    return send(customer);
  } catch (err) {
    return send(err, 404);
  }
};

module.exports.createCustomerIfNotExist = async (event) => {
  console.log('creating customer');
  const { body } = event;

  try {
    const customer = await CustomerController.createCustomerIfNotExist(
      JSON.parse(body)
    );

    return send(customer);
  } catch (e) {
    // console.log(e);
    return send(e, 500);
  }
};

// module.exports.snsLamdbaTriggered = (event, context, callback) => {
//   var topic = event.Records[0].Sns.TopicArn;
//   var message = event.Records[0].Sns.Message;
//   console.log(topic + '  ' + message);
//   callback(null, {
//     message:
//       'SNS lamdba was triggered from the topic ' +
//       topic +
//       ' with message ' +
//       message,
//     event,
//   });
// };
