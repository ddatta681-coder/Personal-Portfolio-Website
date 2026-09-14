# Maintenance Check list for the Tour details and Tour Dashboard

## This is for the Tours dashboard 

```json
{
  "tours": [
    {
      "id": "",
      "title": "",
      "location": "",
      "banner": "",
      "price": "",
      "date": "",
      "duration": "",
      "seatsTotal": "",
      "seatsAvailable": true,
      "highlights": [
        "",
        "",
        ""
      ]
    }
  ]
}
```
### `seatsAvailable` is a boolean (`true` / `false`, not a number). When `true`, the tour details page shows a green "Seats Available" message in the Quick Info section; when `false`, it shows a red "Seats Not Available" message.

## This is for the Tour Details Page

```json
{
  "tours": [
    {
      "id": "",
      "overview": "",
      "itinerary": [
        {
          "day": "",
          "title": "",
          "description": ""
        }
      ],
      "accommodation": "",
      "meals": "",
      "transportation": "",
      "thingsToCarry": [
        ""
      ],
      "importantNotes": [
        ""
      ],
      "pdfItinerary": "",
      "bookingInfo": {
        "advance": "",
        "balance": "",
        "cancellationPolicy": "",
        "contactEmail": "",
        "contactPhone": ""
      }
    }
  ]
}
```

## Just fill the data in the skeleton file and append the final snippets in the main files at src/data/[your-respective-file].json