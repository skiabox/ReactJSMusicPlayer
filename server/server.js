import express from 'express';
import path from 'path';

const app = express();

// mimic __dirname for using it with es modules (it is used so far with commonjs)
const __dirname = path.resolve();

// assign a port
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

// Serving React
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
