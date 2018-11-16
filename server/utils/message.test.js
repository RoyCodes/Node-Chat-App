var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeTruthy();
    expect(message.from).toContain(from);
    expect(message.text).toContain(text);
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Bob';
    var latitude = 40.7484;
    var longitude = 73.9857;
    var url = 'https://www.google.com/maps?q=40.7484,73.9857';

    var message = generateMessage(from, latitude, longitude);

    expect(message.createdAt).toBeTruthy();
    expect(message.from).toContain(from);
    expect(message.url).toContain(url);

  });
});
