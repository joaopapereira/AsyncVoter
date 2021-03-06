let expect = require('chai').expect;

module.exports = function() {

  this.World = require('../support/world').World;

  /*
    TODO: Do we interpret the "start_vote.feature" as the first or second of these scenarios


    GIVEN I send a POST request with a new story
    THEN the response to that request contains an ID of the new Story in the system

    ---

    GIVEN I send a POST request with a new story
    THEN if I check the available stories via a GET request I can see the
    story in the system

  */

  // start_vote.feature

  this.Given(/^that I submit the URL '([^']+)'$/, function(url, callback) {
    this.makeAndSendPost('/stories', {
      url: url
    });
    callback();
  });

  this.Then(/the bot should return an id of that new ballot/, function(callback) {
    this.send.end((err, res) => {

      // TODO: do we want to use these assertion types

      expect(res.status).to.equal(200);
      // expect(true).to.equal(false);
      // TODO: "TRUE does not equal FALSE" - would be a nicer message
      callback();

    });
  });

  // end of start_vote.feature steps


  // test.feature
  this.When(/^I make a GET request to "([^"]*)"$/, function(route, callback) {
    this.makeGetRequest(route);
    callback();
  });


  this.Then(/^the response status code should be "([^"]*)"$/, function(statusCode, callback) {

    this.get.end((err, res) => {
      expect(res.status).to.equal(Number(statusCode));

      callback();
    });
  });

  // end of test.feature

};
