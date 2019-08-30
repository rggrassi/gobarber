# GoBarber Sample Project API

This API was written in NodeJS (ExpressJS + JWT + Postgres + MongoDB). The idea is to provide an API to handle data in a beauty salon service scheduling app. So basically, we need to handle two entities/endpoints: users and appointments.

> **Obs**: Projeto sendo desenvolvido durante o Bootcamp da RocketSeat.

## Authentication:

All the authentication happens using JWT. For protected endpoints you need to send the token using the Header
Authorization, like this:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlR1bGlvIEZhcmlhIiwiZW1haWwiOiJ0dWxpb2ZhcmlhQGRldnBsZW5vLmNvbSIsInJvbGUiOiJhZG1pbiIsInVuaXQiOiJtZXRyaWMiLCJ0aW1lem9uZSI6IkFtZXJpY2EvU2FvX1BhdWxvIiwiaWF0IjoxNTIwNDY5MzUwfQ.kr678zxP5TdRAZrww4bcuKCpE7JX0m_mObjwVXKwP8U
```

# Enpoints

## Users:

### Authenticate/login:

Gets a new Token/JWT for the required user.

``POST /session`` (public): generates a new token for the required user.

**Body example:**

```
{
	"email": "rgrassi1@gmail.com",
	"password": "123456"
}
```

### Create a new user:

This endpoint can be used for a new user to sign up for the application.

``POST /users`` (public): creates a new user.

**Body example:**

```
{
	"name": "Rodrigo Grassi",
	"email": "rgrassi1@gmail.com",
	"password": "123456"
}
```

### Update user by id:

``PUT /users`` (authentication required): update data for a specific user.


## Appointments:

### Create a new appointment:

This endpoint can be used for an authenticated customer or user to schedule an appointment with a service provider.

``POST /appointments`` (authentication required): creates a new appointment to logged user.

**Body example:**

```
{
	"provider_id": 1,
	"date": "2019-09-02T13:00:00-03:00"
}
````

### Get appointments:

``GET /appointments`` (authentication required): get all appointments from logged in user.

``GET /appointments?page=1`` (authentication required): get logged-in user appointments by segmenting by page.

> **Obs:** paged search of 20 elements.

### Remove a appointment:

``DELETE /appointments/:id`` (authentication required): removes a appointment.


## Schedule:

### Get schedule:

``GET /schedule`` (authentication required): get day appointments for a service provider.

