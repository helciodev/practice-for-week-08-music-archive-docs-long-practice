# Documentation

### Get all the artists

Request components:

- Method: GET
- URL: /artists
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: application/json
- Body: information about all the artists
  ```json
  [
    {
      "artistId": 1,
      "name": "Red Hot Chili Peppers"
    }
  ]
  ```

Test this in Postman or by using `fetch` in the browser.

### Get a specific artist's details based on artistId

Request components:

- Method: GET
- URL: /artists/:artistId example: `/artists/1`
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers: Content-Type: application/json
- Body:

```json
{
  "name": "Red Hot Chili Peppers",
  "artistId": 1,
  "albums": [
    {
      "name": "Stadium Arcadium",
      "albumId": 1,
      "artistId": 1
    }
  ]
}
```

### Add an artist

Request components:

- Method: POST
- URL: /artists/
- Headers: Content-Type: application/json
- Body:

```json
{
  "name": "Eminem"
}
```

Response components:

- Status code: 201
- Headers: Location: artists/artistId example `artists/2`
- Body:

```json
{ "name": "Eminem", "artistId": 2 }
```

### Edit a specified artist by artistId

Request components:

- Method: PATCH/PUT
- URL: /artists/:artistId example:`/artists/2`
- Headers: Content-Type: application/json
- Body:

```json
{ "name": "Marshall Bruce Mathers III" }
```

Response components:

- Status code: 200
- Headers: Content-Type: application/json
- Body:

```json
{
  "name": "Marshall Bruce Mathers III ",
  "artistId": 2,
  "updatedAt": "2024-02-10T15:18:28.516Z"
}
```

### Delete a specified artist by artistId

Request components:

- Method: DELETE
- URL: /artist/:artistId example: `/artists/2`
- Headers: Content-Type: application/json
- Body: none

Response components:

- Status code: 200
- Headers: Content-Type: application/json
- Body:

```json
{
  "message": "Sucessfully deleted"
}
```
