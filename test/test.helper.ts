import * as mongoose from 'mongoose';

before((done) => {
    mongoose.connect('mongodb://localhost/recipe_test');
    mongoose.connection
        .once('open', () => done())
        .on('error', (err) => {
            console.error('Error connecting to test database', err);
        });
});

beforeEach((done) => {
    const { users, recipes } = mongoose.connection.collections;
    users.drop(() => {
        recipes.drop(() => {
            done();
        });
    });
});
