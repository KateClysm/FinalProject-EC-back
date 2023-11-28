import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, Express with TypeScript!');
// });

app.listen(port, () => {
  console.log(`The server of Midnight Mysteries is working! running in port:  ${port}`);
});