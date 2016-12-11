/**
 * Created by Aditya on 12/10/2016.
 */

var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('Should generate correct message object', ()=> {
        var from = 'Aditya';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('Should generate correct location object', () => {
        var from = 'Aditya';
        var latitude = 10;
        var longitude = 20;
        var url = 'https://www.google.com/maps?q=10,20';
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    });
});