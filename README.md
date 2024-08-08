# Book Finder Application

This application is a simple web-based tool that allows users to search for books using multiple criteria such as title, author, ISBN, and publisher. It leverages the Google Books API to fetch and display book details based on the user's input.

## Features

- **Multi-Query Integration**: Users can search for books by providing a combination of the following parameters:
  - **Title**: Search for books by title.
  - **Author**: Search for books by author.
  - **ISBN**: Search for books using the ISBN number.
  - **Publisher**: Search for books by publisher name.
- The application combines these queries to fetch the most relevant results from the Google Books API.
- **Express.js**: The application uses Express.js to handle routing and server-side logic.
- **EJS Templating**: EJS is used to render dynamic content on the web pages.

## Installation

1. **Install Dependencies**:
    ```bash
    npm install
    ```
2. **Start the Server**:
    ```bash
    npm start
    ```
    The server will start on `http://localhost:3000`.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. You can perform a search by entering the desired book details (title, author, ISBN, or publisher) and submitting the form.
3. The application will send a request to the Google Books API and display the results on a new page.

## Multi-Query Integration

This application allows users to search for books using one or more search parameters. The parameters are intelligently combined to create a comprehensive search query. Here’s how it works:

- **Title Search**: If a title is provided, the application searches for books that match the title.
- **Author Search**: If an author is provided, the application searches for books written by that author.
- **ISBN Search**: If an ISBN is provided, the application searches for books that match the ISBN.
- **Publisher Search**: If a publisher is provided, the application searches for books published by that publisher.

These queries are combined into a single search string, allowing for precise and flexible searches.

## Example Queries

- Searching for a book titled "The Great Gatsby" by "F. Scott Fitzgerald":
    ```bash
    intitle:The+Great+Gatsby+inauthor:F.+Scott+Fitzgerald
    ```
- Searching for books published by "Penguin" with ISBN "9780143127741":
    ```bash
    isbn:9780143127741+inpublisher:Penguin
    ```

## Dependencies

- **Express**: A minimal and flexible Node.js web application framework.
- **EJS**: A simple templating language that lets you generate HTML markup with plain JavaScript.
- **Axios**: A promise-based HTTP client for making requests to the Google Books API.
- **Body-Parser**: Middleware to parse incoming request bodies in a middleware before your handlers.

---
