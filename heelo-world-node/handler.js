'use strict';

module.exports.hello = async (event, context) => {
  console.log("THIS IS A CONSOLE LOG FROM THE FUN FUN FUNCTION");
  return "HELLO, guv";

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
