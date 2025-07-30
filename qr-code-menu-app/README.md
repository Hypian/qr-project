# QR Code Menu Application

This project implements a QR code menu system that allows clients to scan a QR code and access a menu in their browser. The menu is designed for easy selection and highlighting of choices.

## Project Structure

```
qr-code-menu-app
├── src
│   ├── server.ts          # Entry point of the application, sets up the Express server
│   ├── qr
│   │   └── generate.ts    # Function to generate QR codes
│   ├── menu
│   │   └── menu.ts        # Function to retrieve and format menu items
│   ├── public
│   │   ├── index.html      # Main HTML file for displaying the menu
│   │   └── styles.css      # Styles for the HTML menu
│   └── types
│       └── index.ts       # TypeScript interfaces for menu items
├── package.json           # npm configuration file
├── tsconfig.json          # TypeScript configuration file
└── README.md              # Documentation for the project
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd qr-code-menu-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Access the menu:**
   Scan the generated QR code to open the menu in your browser.

## Usage

- The application serves a menu that can be accessed via a QR code.
- Clients can highlight and select their choices directly from the browser interface.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.