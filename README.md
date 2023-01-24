# Get Started with React and Contentful

- Fetch your data from Contentful, manage it in React
- Uses the [Contentful JavaScript SDK](https://www.npmjs.com/package/contentful) and [`swr`](https://swr.vercel.app/) to fetch your data.

## Quick Start

### Step 1. Get the source code and install dependencies

Clone this repository

```bash
git clone https://github.com/contentful/react-starter.git
```

Install dependencies.

```bash
npm install
```

### Step 2. Create an environment file

1. Rename the `.env.example` at the root of your project to `.env` (so it will be ignored by Git)
2. Find your Contentful [Space ID](https://www.contentful.com/help/find-space-id/), your [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/) access token, and [Content Management API](https://www.contentful.com/developers/docs/references/content-management-api/) access token
3. In the new `.env` file, replace `YOUR_SPACE_ID`, `YOUR_DELIVERY_TOKEN` and `YOUR_MANAGEMENT_ACCESS_TOKEN` with the correct values.

### Step 3. Import our content model

The project comes with a Contentful set up command that imports the required content model and adds sample content to your space.

Run the following command to import the content model.

```bash
npm run setup
```

### Step 4. Run the project locally

```bash
npm start
```

Open [http://localhost:1234](http://localhost:1234) to view it in your browser.

The page will reload when you make changes.

## Available Scripts

This project uses Parcel. In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm run build`

Builds the app for production to the `dist` folder.
