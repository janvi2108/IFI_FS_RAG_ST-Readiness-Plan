# Day 4: Node.js + Express + TypeScript

## 📚 Learning Objectives
- Node.js fundamentals
- Express framework
- TypeScript integration
- REST APIs
- JSON format
- HTTP Request/Response

---

## 📁 Project Structure

```
day4-node-typescript/
├── src/
│   └── server.ts          # Main application entry point
├── dist/                  # Compiled JavaScript (generated after build)
├── node_modules/          # Installed dependencies (generated after npm install)
├── package.json           # Project configuration and dependencies
├── tsconfig.json          # TypeScript configuration
├── .gitignore            # Files to ignore in version control
└── README.md             # This file
```

---

## 📄 File Explanations

### **package.json**
This is the **heart of your Node.js project**. It contains:

- **Project metadata**: name, version, description
- **Dependencies**: Libraries your project needs to run
- **DevDependencies**: Tools needed only during development
- **Scripts**: Commands to run your project

**Key sections:**
- `"main": "dist/server.js"` - The entry point after compilation
- `"scripts"` - Custom commands you can run with `npm run <script-name>`

---

### **tsconfig.json**
This tells TypeScript **how to compile** your `.ts` files to JavaScript.

**Important settings explained:**

| Setting | What it does |
|---------|--------------|
| `"target": "ES2020"` | Compile to modern JavaScript |
| `"module": "commonjs"` | Use Node.js module system |
| `"rootDir": "./src"` | Source code is in the `src/` folder |
| `"outDir": "./dist"` | Compiled code goes to `dist/` folder |
| `"strict": true"` | Enable strict type checking (catches more errors) |
| `"esModuleInterop": true"` | Better compatibility with ES6 imports |
| `"sourceMap": true"` | Generate map files for easier debugging |

---

### **src/ folder**
Contains all your **TypeScript source code**. This is where you write your application logic.

- `server.ts` - The main entry point of your application

---

### **server.ts**
This is your **main application file**. Here's what each part does:

```typescript
import express, { Request, Response } from 'express';
```
- Imports Express framework and TypeScript types for type safety

```typescript
const app = express();
```
- Creates an Express application instance

```typescript
const PORT = process.env.PORT || 3000;
```
- Sets the port number (uses environment variable or defaults to 3000)

```typescript
app.use(express.json());
```
- **Middleware** that parses incoming JSON data in requests

```typescript
app.get('/', (req: Request, res: Response) => { ... });
```
- Defines a **GET route** at the root URL (`/`)
- `req` = request object (contains data from client)
- `res` = response object (used to send data back to client)

```typescript
app.listen(PORT, () => { ... });
```
- Starts the server and listens for incoming requests

---

## 📦 Package Explanations

### **Dependencies** (needed to run the app):

#### `express`
- **What**: A web framework for Node.js
- **Why**: Makes it easy to create web servers and APIs
- **What it does**: Handles routing, middleware, request/response

---

### **DevDependencies** (needed only during development):

#### `typescript`
- **What**: The TypeScript compiler
- **Why**: Converts your TypeScript code to JavaScript
- **What it does**: Adds type safety and catches errors before runtime

#### `@types/express`
- **What**: TypeScript type definitions for Express
- **Why**: Enables autocomplete and type checking for Express
- **What it does**: Tells TypeScript what Express functions expect

#### `@types/node`
- **What**: TypeScript type definitions for Node.js
- **Why**: Enables type checking for Node.js built-in modules
- **What it does**: Provides types for `process`, `__dirname`, etc.

#### `ts-node-dev`
- **What**: Development tool that runs TypeScript files directly
- **Why**: No need to compile manually during development
- **What it does**: 
  - Watches for file changes
  - Automatically restarts the server
  - Transpiles TypeScript on-the-fly

---

## 🚀 NPM Scripts Explained

Run these commands in your terminal:

### `npm run dev`
**Command**: `ts-node-dev --respawn --transpile-only src/server.ts`

- **Purpose**: Start the development server
- **What it does**:
  - Runs your TypeScript code directly (no build step needed)
  - `--respawn`: Automatically restarts when you save changes
  - `--transpile-only`: Skips type checking for faster restarts
- **When to use**: During development while coding

---

### `npm run build`
**Command**: `tsc`

- **Purpose**: Compile TypeScript to JavaScript
- **What it does**:
  - Runs the TypeScript compiler
  - Reads `tsconfig.json` configuration
  - Creates compiled JavaScript files in `dist/` folder
- **When to use**: Before deploying to production

---

### `npm start`
**Command**: `node dist/server.js`

- **Purpose**: Run the compiled JavaScript version
- **What it does**:
  - Runs the compiled code from `dist/server.js`
  - No TypeScript compilation (runs pure JavaScript)
- **When to use**: In production or after running `npm run build`

---

## 🏁 Getting Started

### 1. Install dependencies
```bash
npm install
```
This downloads all packages listed in `package.json`

### 2. Start development server
```bash
npm run dev
```
Server will start at `http://localhost:3000`

### 3. Test the server
Open your browser and visit:
```
http://localhost:3000/
```
You should see a JSON response!

### 4. Make changes
- Edit `src/server.ts`
- Save the file
- Server automatically restarts (hot reload)

---

## 🧪 What You'll Learn Next

- ✅ **Day 4 Setup Complete**: Node.js + Express + TypeScript basics
- 🔜 **Next Steps**: 
  - Create REST API routes (GET, POST, PUT, DELETE)
  - Understand request parameters and body
  - Work with JSON data
  - Handle different response types

---

## 🆘 Troubleshooting

### Port already in use?
If you see `EADDRINUSE`, another app is using port 3000.

**Solution**: Change the port in `server.ts`:
```typescript
const PORT = 3001; // or any other port
```

### Module not found errors?
Run `npm install` to install dependencies.

### TypeScript errors?
Check your `tsconfig.json` settings and ensure all files are in the `src/` folder.

---

## 📖 Key Concepts

### **Node.js**
JavaScript runtime that lets you run JavaScript on your computer (not just in browsers)

### **Express**
A minimal web framework that makes building servers easy

### **TypeScript**
JavaScript with types - catches errors before you run your code

### **REST API**
A way to create web services that clients can interact with using HTTP methods

### **JSON**
JavaScript Object Notation - a format for sending data between client and server

### **Request/Response**
- **Request**: Data sent FROM client TO server
- **Response**: Data sent FROM server TO client

---

Happy Learning! 🚀
