import express, { Request, Response } from 'express';

// Interface: Defines the structure of an Item object
interface Item {
  id: number;
  name: string;
}

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: Parse JSON request bodies
app.use(express.json());

// GET / - Welcome route
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to Day 4 - Node.js + Express + TypeScript!',
    timestamp: new Date().toISOString(),
    learningTopics: [
      'Node.js',
      'Express',
      'TypeScript',
      'REST APIs',
      'JSON',
      'Request/Response'
    ]
  });
});

// GET /health - Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    service: 'Day 4 API',
    timestamp: new Date().toISOString()
  });
});

// GET /items - Return list of items
app.get('/items', (req: Request, res: Response) => {
  const items: Item[] = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Keyboard' },
    { id: 3, name: 'Mouse' }
  ];

  res.json(items);
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
  console.log(`📚 Day 4 Learning Project - Node.js + Express + TypeScript`);
  console.log(`🔗 Visit http://localhost:${PORT}/ to see your first route`);
});
