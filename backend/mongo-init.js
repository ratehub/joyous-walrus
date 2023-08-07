db = db.getSiblingDB('todo');

db.createUser({
    user: 'todo',
    pwd: 'todo',
    roles: ['readWrite']
});

db.createCollection('todos');
