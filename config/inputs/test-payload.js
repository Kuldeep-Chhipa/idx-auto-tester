
const _ = require('underscore');

module.exports = function (objOrType) {
    /*
    * @Param {string} type - Values sample|required|extended
    */

    // Default User will be a verified User

    const Chance = require('chance');
    const chance = new Chance();

    let word = chance.word({ length: 15 });
    let lname = chance.last();
    let fname = chance.first();
    let year = chance.year();
    let email = word + "." + year + '@mail7.io';

    let sampleBody = {
        'Email': [{
            'Value': email, 'Type': 'Primary'
        }],
        'Password': '12345678',
        "UserName": chance.word({ length: 12 }),
        'Prefix': chance.prefix(),
        'FirstName': fname,
        'MiddleName': chance.last(),
        'LastName': lname,
        'Suffix': chance.prefix(),
        'NickName': chance.last(),
        'EmailVerified': true,
        'PlacesLived': [{ 'Name': chance.word(), 'IsPrimary': chance.bool() }],
        'BirthDate': '12/05/1990',
        'Gender': chance.pick(['M', 'F']),
        'PhoneNumbers': [{ 'PhoneNumber': chance.phone(), 'PhoneType': chance.word() }],
        'Addresses': [{ 'Address1': chance.word(), 'Type': chance.word() }],
        'Languages': [{ 'Id': chance.hash(), 'Name': chance.word(), 'Proficiency': chance.word() }],
        'Sports': [{ 'Id': chance.hash(), 'Name': chance.word() }],
        'InspirationalPeople': [{ 'Id': chance.hash(), 'Name': chance.name() }]
    };

    if (objOrType) return Object.assign(sampleBody, objOrType);

    else return sampleBody;
};
