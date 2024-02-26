const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  // 7 tests here!
  it("constructor sets position and default values for mode and generatorWatts", function () {
    let rover = new Rover(1);
    expect(rover.position).toBe(1);
    expect(rover.mode).toBe('NORMAL');
    expect(rover.generatorWatts).toBe(110);
  });
  //8 “response returned by receiveMessage contains the name of the message”
  it("response returned by receiveMessage contains the name of the message", function() {

  })
  //9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {

  });
  //10
  it("responds correctly to the status check command", function() {

  });
  //11
  it("responds correctly to the mode change command", function() {

  });
  //12
  it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {

  });
  //13
  it("responds with the position for the move command", function() {

  });
});
