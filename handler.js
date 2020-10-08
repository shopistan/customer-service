'use strict';
const db = require('./app/config/db');

const CustomerController = require('./app/controllers/customer.controller');

module.exports.getCustomer = async (event) => {
  console.log('i am here', event.pathParameters.id);
  const customer = await CustomerController.getCustomer(
    event.pathParameters.id
  );

  return {
    statusCode: 200,
    body: JSON.stringify(customer),
  };
};

module.exports.createCustomerIfNotExist = async (event) => {
  console.log('creating customer');
  const { body } = event;
  let customer = await CustomerController.createCustomerIfNotExist(
    JSON.parse(body)
  );

  return {
    statusCode: 200,
    body: JSON.stringify(customer),
  };
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
