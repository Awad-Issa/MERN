const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const {faker} = require('@faker-js/faker');

const createUser = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
}

const createCompany = () => {
    return{
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        }
    }
}


app.get("/api/user", (req, res) => {
    res.send(createUser());
    console.log(createUser());
});

app.get("/api/company", (req, res) => {
    res.send(createCompany());
    console.log(createCompany());
});

app.get("/api/oday", (req, res) => {
    res.send({
        user: createUser(),
        company: createCompany()
    });
});
// this needs to be below the other code blocks
app.listen(8000, () => {
});

