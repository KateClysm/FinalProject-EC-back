import express from 'express';
import cors from 'cors'; 
import cookieParser from 'cookie-parser';
import userRoutes from "./routes/users";
import authRoutes from './routes/auth';

const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(cookieParser());
app.use(express.json());
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Content-Type, Authorization',
};
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`The server of Midnight Mysteries is working! running in port:  ${port}`);
});


// routes
app.use('/midnightmysteries/users', userRoutes);
app.use('/midnightmysteries/auth', authRoutes);


app.get('/midnightmysteries/conection', (req, res) => {
  res.send('Conexión exitosa con el front');
});