# Phase 2 Code Challenge: Plantsy

## Demo

Use this gif as an example of how the app should work.

![Demo GIF](./demo.gif)

## Instructions

Welcome to Plantsy! You've been tasked with building out some features for the
admin side of a plant store. The designers have put together the components and
CSS. Now it's up to you to bring the features to life by adding stateful logic
as well as persisting data to the backend via our API.

Your job will be to make our app work according to the user stories you will
find the [Deliverables](#Deliverables) section.

## Setup

1. Run `npm install` in your terminal.
2. Run `npm run server`. This will run your backend on port `6001`.
3. In a new terminal, run `npm run dev`.

Make sure to open [http://localhost:6001/plants](http://localhost:6001/plants)
in the browser to verify that your backend is working before you proceed!

## Endpoints

The base URL for your backend is: `http://localhost:6001`

## Deliverables

As a user:

1. When the app starts, I can see all plants.
2. I can add a new plant to the page by submitting the form.
3. I can mark a plant as "sold out".
4. I can search for plants by their name and see a filtered list of plants.

## Completed Features

The following functionality has been implemented:

- **Fetch all plants on load** – `useEffect` in `App` fetches `GET /plants` and stores them in state.
- **Add a new plant** – `NewPlantForm` submits `POST /plants` and adds the created plant to state so it renders immediately.
- **Mark sold out** – `PlantCard` toggles a plant's sold-out status, conditionally rendering "In Stock" vs "Out of Stock".
- **Search** – `Search` tracks its input value and `App` filters the plant list by name using a case-insensitive `includes()`.

## Running Tests

Run `npm run test` to execute the full test suite (vitest).

## Demo

![Demo GIF](./demo.gif)

### Endpoints for Core Deliverables

#### GET /plants

Example Response:

```json
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }
]
```

#### POST `/plants`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "name": "string",
  "image": "string",
  "price": number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
```
