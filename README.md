##	Coding exercise:   For frontend engineer: Healthcare providers request to be part of the Availity system.  Using a modern JavaScript framework (React preferred, or Vue or Angular), create a registration user interface so healthcare providers can electronically join Availity.  The following data points should be collected:
•	First Name
•	Last Name
•	NPI number
•	Business Address
•	Telephone Number
•	Email address


## GET http://localhost:1337/api/users/pepp
The table is set up to search providers by last name...even if you only get close to the correct spelling

## RESPONSE:
{
"id":2,
"nameFirst":"Chili",
"nameLast":"Pepper",
"NPI":1,
"teleNumber":"3103967825",
"email":"drpepper@gmail.com"
}

## POST  http://localhost:1337/api/users/
The table is set up to accept new users in this structure:

{
    "nameFirst":"Carrye",
    "nameLast":"Gaulin",
    "NPI":3,
    "teleNumber":"9103367845",
    "email":"carryegaulin111@gmail.com"
}

## RESPONSE:

{
    "id": null,
    "nameFirst": "Carrye",
    "nameLast": "Gaulin",
    "NPI": "31",
    "teleNumber": "9103367845",
    "email": "carryegaulin033178@gmail.com",
    "updatedAt": "2021-06-15T07:23:15.811Z",
    "createdAt": "2021-06-15T07:23:15.811Z"
}

Unfortunately I have some sort of bug going on with my computer and it took up alot of time and stopped me here.  Finally got some of the front working that Client doesn't seem to want to run bu itself or concurrently with the server.