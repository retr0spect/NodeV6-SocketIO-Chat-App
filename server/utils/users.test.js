/**
 * Created by Aditya on 1/18/2017.
 */

const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Aditya',
            room: 'Java'
        }, {
            id: '2',
            name: 'Jake',
            room: 'C#'
        }, {
            id: '3',
            name: 'Phil',
            room: 'Java'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: 1,
            name: 'Chris',
            room: 'Ruby'
        };

        users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should find a user', () => {
        var userId = '2';
        var user = users.getUser(userId);
        expect(userId).toBe(user.id);
    });

    it('should not find a user', () => {
        var userId = '666';
        var user = users.getUser(userId);
        expect(user).toNotExist();
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);
        expect(userId).toBe(user.id);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '555';
        var user = users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should return names for Java', () => {
        userList = users.getUserList('Java');
        expect(userList).toEqual(['Aditya', 'Phil']);
    });


});
