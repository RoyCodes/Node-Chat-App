const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Roy',
            room: 'Test Room 1'
        },
        {
            id: '2',
            name: 'Bob',
            room: 'Test Room 2'
        },
        {
            id: '3',
            name: 'Jane',
            room: 'Test Room 1'
        }
        ]
    })
    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Roy',
            room: 'Test'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId);
    
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
      });

    it('should not remove user', () => {
        var userId = 55;
        var user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '2';
        var user = users.getUser(userId);
    
        expect(user.id).toBe(userId);
      });
    
      it('should not find user', () => {
        var userId = '55';
        var user = users.getUser(userId);
    
        expect(user).toBeFalsy();
      });

    it('should return names for Test Room 1', () => {
        var userList = users.getUserList('Test Room 1');

        expect(userList).toEqual(['Roy', 'Jane']);
    });

    it('should return names for Test Room 2', () => {
        var userList = users.getUserList('Test Room 2');

        expect(userList).toEqual(['Bob']);
    });
});