# GoBarber Sample Project API

This API was written in NodeJS (ExpressJS + JWT + Postgres + MongoDB). The idea is to provide an API to handle data in a beauty salon service scheduling app. So basically, we need to handle two entities/endpoints: users and appointments.

## Authentication:

All the authentication happens using JWT. For protected endpoints you need to send the token using the Header
Authorization, like this:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlR1bGlvIEZhcmlhIiwiZW1haWwiOiJ0dWxpb2ZhcmlhQGRldnBsZW5vLmNvbSIsInJvbGUiOiJhZG1pbiIsInVuaXQiOiJtZXRyaWMiLCJ0aW1lem9uZSI6IkFtZXJpY2EvU2FvX1BhdWxvIiwiaWF0IjoxNTIwNDY5MzUwfQ.kr678zxP5TdRAZrww4bcuKCpE7JX0m_mObjwVXKwP8U
```

Obs: Projeto sendo desenvolvido durante o Bootcamp da RocketSeat.
