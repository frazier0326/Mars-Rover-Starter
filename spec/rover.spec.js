const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  // 7 tests here!
  it("constructor sets position and default values for mode and generatorWatts", function () {
    let rover = new Rover(2500);
    expect(rover.position).toBe(2500);
    expect(rover.mode).toBe('NORMAL');
    expect(rover.generatorWatts).toBe(110);
  });
  //8 
  it("response returned by receiveMessage contains the name of the message", function() {
    let rover = new Rover(2500);
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message("test name", commands);
    let receiveMessage = rover.receiveMessage(message).message;
    expect(receiveMessage).toBe(message.name);
  });
  //9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let rover = new Rover(2500);
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message("test name", commands);
    let receiveMessage = rover.receiveMessage(message).results.length;
    expect(receiveMessage).toEqual(2);
  });
  //10
  it("responds correctly to the status check command", function() {
    let rover = new Rover(2500);
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('STATUS_CHECK', commands);
    let receiveMessage = rover.receiveMessage(message).results;
    expect(receiveMessage[0]).toEqual({"completed": true});
    expect(receiveMessage[1]).toEqual({"completed": true, "roverStatus": {generatorWatts: 110, mode: "LOW_POWER", position: 2500}});
    
  });
  // //11
  it("responds correctly to the mode change command", function() {
    let rover = new Rover(2500);
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let message = new Message('MODE_CHANGE', commands);
    let receiveMessage = rover.receiveMessage(message).results;
    expect(receiveMessage[0]).toEqual({"completed": true});

  });
  // //12
  it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
    let rover = new Rover(2500);
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 500)];
    let message = new Message('MOVE', commands);
    let receiveMessage = rover.receiveMessage(message).results;
    expect(receiveMessage[1]).toEqual({"completed": false});

  });
  // // //13
  it("responds with the position for the move command", function() {
    let rover = new Rover(2500);
    let commands = [new Command('MODE_CHANGE', 'NORMAL'), new Command('MOVE', 500)];
    let message = new Message('MOVE', commands);
    let receiveMessage = rover.receiveMessage(message);
    expect(receiveMessage.results[0]).toEqual({"completed": true});
    expect(rover.position).toEqual(500);
  });
});
