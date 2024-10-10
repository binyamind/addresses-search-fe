# React App with Vite

This is a React application built with Vite that consumes an API to retrieve and display data. It utilizes **Shadcn UI** for the UI components, **Zustand** for state management, **React Query** for data fetching, and **Tailwind CSS** for styling.

## Prerequisites

- **Node.js** installed 
- **npm** or **yarn** for managing packages
- **Backend API** must be running

## Getting Started

### 1. Clone the repository

- **SSH:**
  ```bash
  git clone git@github.com:binyamind/addresses-search-fe.git
  ```
- **https:**  
   ```bash
  git clone https://github.com/binyamind/addresses-search-fe.git
    ```
```bash
cd to the repo
```  
# 2. Install dependencies
```
npm install
```

# 3. Environment Variables
An .env file is already included in the project for simplicity. The following variables are used:
```
VITE_API_BASE_URL

```
- VITE_API_BASE_URL: The port number for fetching data from the api.

These values are pre-configured, but you can adjust them as needed.

# 4. Run the application
To start the development server, run:
```bash
npm run dev
```
Open your browser and navigate to http://localhost:5173 (or the port specified in the terminal) to view your app.

## Features

- UI components powered by Shadcn UI
- State management with Zustand
- Data fetching with React Query
- Styling with Tailwind CSS

## Dependencies

- **React**: JavaScript library for building user interfaces
- **Vite**: Next-generation frontend tooling
- **Shadcn UI**: A library for UI components
- **Zustand**: A minimal state management solution
- **React Query**: For data fetching and synchronization
- **Tailwind CSS**: A utility-first CSS framework
