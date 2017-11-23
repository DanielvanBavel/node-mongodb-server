import * as mongoose from 'mongoose';

before((done) => {
    mongoose.connect('mongodb://localhost/recipe_test');
    mongoose.connection
        .once('open', () => done())
        .on('error', (err) => {
            console.error('Error connecting to test database', err);
        });
});
