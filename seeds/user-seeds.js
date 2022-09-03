const { User } = require('../models');

const userData = [
    {
        username: "Cloud_Strife",
        email: "bigsword@soldier.gov",
        password: "Omnislash"
    },
    {
        username: "Tifa_Lockhart",
        email: "comboqueen@avalanche.com",
        password: "FinalHeaven"
    },
    {
        username: "Barret_Wallace",
        email: "missing_score@avalanche.com",
        password: "Catastrophe"
    },
    {
        username: "Aerith_Gainsborough",
        email: "flowergirl@ancients.org",
        password: "GreatGospel"
    },
    {
        username: "RedXIII",
        email: "nanaki@redacted.com",
        password: "CosmoMemory"
    },
    {
        username: "Cait_Sith",
        email: "do_not_reply@midgar.gov",
        password: "GameOver"
    },
    {
        username: "Cid_Highwind",
        email: "rocket_man@SSA.gov",
        password: "Highwind"
    },
    {
        username: "Yuffie_Kisaragi",
        email: "materia_thief@avalance.com",
        password: "AllCreation"
    },
    {
        username: "Vincent_Valentine",
        email: "edgelord@turks.gov",
        password: "ChaosSaber"
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;
