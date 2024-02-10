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

### Get all albums of a specific artist based on artistId

Request components:

- Method: GET
- URL: /artists/:artistId/albums example `artists/1/albums`
- Headers: Content-Type: application/json
- Body: none

Response components:

- Status code: 200
- Headers: Content-Type: application/json
- Body:

```json
[
  {
    "name": "Stadium Arcadium",
    "albumId": 1,
    "artistId": 1
  }
]
```

### Get a specific album's details based on albumId

Request components:

- Method: GET
- URL: /albums/:albumId example:`/albums/1`
- Headers: Content-Type: application/json
- Body:

Response components:

- Status code: Content-Type: application/json
- Headers: Content-Type: application/json
- Body:

```json
{
  "name": "Stadium Arcadium",
  "albumId": 1,
  "artistId": 1,
  "artist": {
    "name": "Red Hot Chili Peppers",
    "artistId": 1
  },
  "songs": [
    {
      "name": "Dani California",
      "lyrics": "Getting born in the state of Mississippi\nPapa was a copper, and her mama was a hippy\nIn Alabama she would swing a hammer\nPrice you got to pay when you break the panorama\nShe never knew that there was anything more than poor\nWhat in the world does your company take me for?\nBlack bandanna, sweet Louisiana\nRobbing on a bank in the state of Indiana\nShe's a runner\nRebel, and a stunner\nOn her merry way saying baby, watcha gonna?\nLooking down the barrel of a hot metal forty-five\nJust another way to survive\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nShe's a lover, baby, and a fighter\nShould've seen it coming when I got a little brighter\nWith a name like Dani California\nDay was gonna come when I was gonna mourn ya\nA little loaded, she was stealing another breath\nI love my baby to death\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nWho knew the other side of you?\nWho knew that others died to prove?\nToo true to say goodbye to you\nToo true to say, say, say\nPushed the fader, gifted animator\nOne for the now, and eleven for the later\nNever made it up to Minnesota\nNorth Dakota man\nWasn't gunnin' for the quota\nDown in the Badlands she was saving the best for last\nIt only hurts when I laugh\nGone too fast\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah",
      "trackNumber": 1,
      "songId": 1,
      "createdAt": "2024-02-10T14:47:38.000Z",
      "updatedAt": "2024-02-10T14:47:38.000Z",
      "albumId": 1
    }
  ]
}
```

### Add an album to a specific artist based on artistId

Request components:

- Method: POST
- URL: /artists/:artistId/albums
- Headers: Content-Type: application/json
- Body:

```json
{
  "name": "Blood Sugar Sex Magik"
}
```

Response components:

- Status code: 201
- Headers: Content-Type: application/json
- Body:

```json
{
  "name": "Blood Sugar Sex Magik ",
  "albumId": 2,
  "artistId": 1
}
```

### Edit a specified album by albumId

Request components:

- Method: PATCH/PUT
- URL: /albums/:albumId example:`/albums/1`
- Headers:
- Body:

```json
{ "name": "The Red Hot Chilly Peppers Album" }
```

Response components:

- Status code: 200
- Headers: Content-Type: application/json
- Body:

```json
{
  "name": "The Red Hot Chilly Peppers Album",
  "albumId": 1,
  "artistId": 1,
  "updatedAt": "2024-02-10T17:05:47.552Z"
}
```

### Delete a specified album by albumId

Request components:

- Method: DELETE
- URL: /albums/:albumId example:`/albums/2`
- Headers: Content-Type: application/json
- Body:none

Response components:

- Status code: 200
- Headers: Content-Type: application/json
- Body:

```json
{ "message": "Sucessfully deleted" }
```

### Get all songs of a specific artist based on artistId

Request components:

- Method: GET
- URL: artists/:artistId/songs example:`/artists/1/songs`
- Headers: Content-Type: application/json
- Body: none

Response components:

- Status code: 200
- Headers: Content-Type: application/json
- Body:

```json
[
  {
    "name": "Dani California",
    "lyrics": "Getting born in the state of Mississippi\nPapa was a copper, and her mama was a hippy\nIn Alabama she would swing a hammer\nPrice you got to pay when you break the panorama\nShe never knew that there was anything more than poor\nWhat in the world does your company take me for?\nBlack bandanna, sweet Louisiana\nRobbing on a bank in the state of Indiana\nShe's a runner\nRebel, and a stunner\nOn her merry way saying baby, watcha gonna?\nLooking down the barrel of a hot metal forty-five\nJust another way to survive\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nShe's a lover, baby, and a fighter\nShould've seen it coming when I got a little brighter\nWith a name like Dani California\nDay was gonna come when I was gonna mourn ya\nA little loaded, she was stealing another breath\nI love my baby to death\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nWho knew the other side of you?\nWho knew that others died to prove?\nToo true to say goodbye to you\nToo true to say, say, say\nPushed the fader, gifted animator\nOne for the now, and eleven for the later\nNever made it up to Minnesota\nNorth Dakota man\nWasn't gunnin' for the quota\nDown in the Badlands she was saving the best for last\nIt only hurts when I laugh\nGone too fast\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah",
    "trackNumber": 1,
    "songId": 1,
    "albumId": 1
  }
]
```

### Get all songs of a specific album based on albumId

Request components:

- Method: GET
- URL: /albums/:albumId/songs example:`/albums/1/songs`
- Headers: Content-Type: application/json
- Body: none

Response components:

- Status code: 200
- Headers: Content-Type: application/json
- Body:

```json
[
  {
    "name": "Dani California",
    "lyrics": "Getting born in the state of Mississippi\nPapa was a copper, and her mama was a hippy\nIn Alabama she would swing a hammer\nPrice you got to pay when you break the panorama\nShe never knew that there was anything more than poor\nWhat in the world does your company take me for?\nBlack bandanna, sweet Louisiana\nRobbing on a bank in the state of Indiana\nShe's a runner\nRebel, and a stunner\nOn her merry way saying baby, watcha gonna?\nLooking down the barrel of a hot metal forty-five\nJust another way to survive\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nShe's a lover, baby, and a fighter\nShould've seen it coming when I got a little brighter\nWith a name like Dani California\nDay was gonna come when I was gonna mourn ya\nA little loaded, she was stealing another breath\nI love my baby to death\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nWho knew the other side of you?\nWho knew that others died to prove?\nToo true to say goodbye to you\nToo true to say, say, say\nPushed the fader, gifted animator\nOne for the now, and eleven for the later\nNever made it up to Minnesota\nNorth Dakota man\nWasn't gunnin' for the quota\nDown in the Badlands she was saving the best for last\nIt only hurts when I laugh\nGone too fast\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah",
    "trackNumber": 1,
    "songId": 1,
    "albumId": 1
  }
]
```

### Get all songs of a specified trackNumber

**Note: This one is meant to be a little more challenging, but should still
follow a similar pattern to those above.**

Can you see a pattern between this endpoint and the two previous endpoints?

Hint: Think of how you solved getting all songs by a specific artist and by a
specific album. What is resource that you wanted to get back for those
endpoints? What information was that resource constrained by for each of those
endpoints? Now think about getting all songs by a specific `trackNumber`.
What is the resource you want to get? What information is the resource
constrained by for this endpoint?

Request components:

- Method:GET
- URL: /tracknumbers/:trackNumber/songs example:`/tracknumbers/1/songs`
- Headers: Content-Type: application/json
- Body: none

Response components:

- Status code: 200
- Headers: Content-Type: application/json
- Body:

```json
[
  {
    "name": "Dani California",
    "lyrics": "Getting born in the state of Mississippi\nPapa was a copper, and her mama was a hippy\nIn Alabama she would swing a hammer\nPrice you got to pay when you break the panorama\nShe never knew that there was anything more than poor\nWhat in the world does your company take me for?\nBlack bandanna, sweet Louisiana\nRobbing on a bank in the state of Indiana\nShe's a runner\nRebel, and a stunner\nOn her merry way saying baby, watcha gonna?\nLooking down the barrel of a hot metal forty-five\nJust another way to survive\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nShe's a lover, baby, and a fighter\nShould've seen it coming when I got a little brighter\nWith a name like Dani California\nDay was gonna come when I was gonna mourn ya\nA little loaded, she was stealing another breath\nI love my baby to death\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nWho knew the other side of you?\nWho knew that others died to prove?\nToo true to say goodbye to you\nToo true to say, say, say\nPushed the fader, gifted animator\nOne for the now, and eleven for the later\nNever made it up to Minnesota\nNorth Dakota man\nWasn't gunnin' for the quota\nDown in the Badlands she was saving the best for last\nIt only hurts when I laugh\nGone too fast\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah",
    "trackNumber": 1,
    "songId": 1,
    "albumId": 1
  }
]
```

### Get a specific song's details based on songId

Request components:

- Method: GET
- URL: /songs/:songId/ example: `/songs/1`
- Headers: Content-Type: application/json
- Body: none

Response components:

- Status code: 200
- Headers: Content-Type: application/json
- Body:

```json
{
  "name": "Dani California",
  "lyrics": "Getting born in the state of Mississippi\nPapa was a copper, and her mama was a hippy\nIn Alabama she would swing a hammer\nPrice you got to pay when you break the panorama\nShe never knew that there was anything more than poor\nWhat in the world does your company take me for?\nBlack bandanna, sweet Louisiana\nRobbing on a bank in the state of Indiana\nShe's a runner\nRebel, and a stunner\nOn her merry way saying baby, watcha gonna?\nLooking down the barrel of a hot metal forty-five\nJust another way to survive\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nShe's a lover, baby, and a fighter\nShould've seen it coming when I got a little brighter\nWith a name like Dani California\nDay was gonna come when I was gonna mourn ya\nA little loaded, she was stealing another breath\nI love my baby to death\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nWho knew the other side of you?\nWho knew that others died to prove?\nToo true to say goodbye to you\nToo true to say, say, say\nPushed the fader, gifted animator\nOne for the now, and eleven for the later\nNever made it up to Minnesota\nNorth Dakota man\nWasn't gunnin' for the quota\nDown in the Badlands she was saving the best for last\nIt only hurts when I laugh\nGone too fast\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah\nCalifornia, rest in peace\nSimultaneous release\nCalifornia, show your teeth\nShe's my priestess\nI'm your priest\nYeah, yeah, yeah",
  "trackNumber": 1,
  "songId": 1,
  "albumId": 1
}
```

### Add a song to a specific album based on albumId

Request components:

- Method: POST
- URL: /albums/:albumId/songs
- Headers: Content-Type: application/json
- Body:

```json
{
  "name": "Charlie",
  "lyrics": "All aboard, stitch in time\\nGet yours, got mine\\nIn a minute I'll be there\\nSit tight, get square\\nYou can do it at the Hippodrome\\nSlide back, trombone\\nAnybody got a TV tome?\\nThat's right, unknown\\nWhen I pick up on that smell\\nPick it up and run like hell\\nLittle woman save me some\\nBetter get up on your run\\nSo much more than Charlie's wakin' me\\nTo my core and Charlie's shakin' me\\nTell my story and Charlie's makin' me\\nAnd Charlie's makin' me smile, oh now\\nEverybody, do the twist\\nGet the message on Flea's fist\\nMove around like a scientist\\nLay down, get kissed\\nBig picture and it never lies\\nBig daddy will advise\\nEveready in disguise\\nSunset, sunrise\\nWhen I pick up on that smell\\nPick it up and run like hell\\nLittle woman save me some\\nBetter get up on your run\\nSo much more than Charlie's wakin' me\\nTo my core and Charlie's shakin' me\\nTell my story and Charlie's makin' me\\nAnd Charlie's makin' me smile, whoa, now\\nMy heart, your skin, this love I'm in\\nWe don't arrive without a suprise\\nYou're right, I'm wrong, be free, belong\\nIntimate sight has come in to light\\nWhen I pick up on that smell\\nPick it up and run like hell\\nLittle woman save me some\\nBetter get up on your run\\nAll I ever wanted to\\nWas pick it up and run with you\\nSlip it into a summer spell\\nDouble up and run like hell\\nSo much more than Charlie's wakin' me\\nTo my core and Charlie's shakin' me\\nTell my story and Charlie's makin' me\\nAnd Charlie's makin' me smile, whoa, now\\nMy heart, your skin, this love I'm in\\nWe don't arrive without a suprise\\nYou're right, I'm wrong, be free, belong\\nIntimate sight has come in to light\\nMy heart, your skin, this love I'm in\\nWe don't arrive without a suprise\\nYou're right, I'm wrong, be free, belong\\nIntimate sight has come in to light",
  "trackNumber": 2
}
```

Response components:

- Status code: 201
- Headers: Content-Type: application/json
- Body:

```json
{
  "name": "Charlie",
  "lyrics": "All aboard, stitch in time\\nGet yours, got mine\\nIn a minute I'll be there\\nSit tight, get square\\nYou can do it at the Hippodrome\\nSlide back, trombone\\nAnybody got a TV tome?\\nThat's right, unknown\\nWhen I pick up on that smell\\nPick it up and run like hell\\nLittle woman save me some\\nBetter get up on your run\\nSo much more than Charlie's wakin' me\\nTo my core and Charlie's shakin' me\\nTell my story and Charlie's makin' me\\nAnd Charlie's makin' me smile, oh now\\nEverybody, do the twist\\nGet the message on Flea's fist\\nMove around like a scientist\\nLay down, get kissed\\nBig picture and it never lies\\nBig daddy will advise\\nEveready in disguise\\nSunset, sunrise\\nWhen I pick up on that smell\\nPick it up and run like hell\\nLittle woman save me some\\nBetter get up on your run\\nSo much more than Charlie's wakin' me\\nTo my core and Charlie's shakin' me\\nTell my story and Charlie's makin' me\\nAnd Charlie's makin' me smile, whoa, now\\nMy heart, your skin, this love I'm in\\nWe don't arrive without a suprise\\nYou're right, I'm wrong, be free, belong\\nIntimate sight has come in to light\\nWhen I pick up on that smell\\nPick it up and run like hell\\nLittle woman save me some\\nBetter get up on your run\\nAll I ever wanted to\\nWas pick it up and run with you\\nSlip it into a summer spell\\nDouble up and run like hell\\nSo much more than Charlie's wakin' me\\nTo my core and Charlie's shakin' me\\nTell my story and Charlie's makin' me\\nAnd Charlie's makin' me smile, whoa, now\\nMy heart, your skin, this love I'm in\\nWe don't arrive without a suprise\\nYou're right, I'm wrong, be free, belong\\nIntimate sight has come in to light\\nMy heart, your skin, this love I'm in\\nWe don't arrive without a suprise\\nYou're right, I'm wrong, be free, belong\\nIntimate sight has come in to light",
  "trackNumber": 2,
  "songId": 2,
  "albumId": 1
}
```

### Delete a specified song by songId

Request components:

- Method: DELETE
- URL: /songs/:songId
- Headers: Content-Type: application/json
- Body: none

Response components:

- Status code: 200
- Headers: Content-Type: application/json
- Body:

```json
{ "message": "Sucessfully deleted" }
```
