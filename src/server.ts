import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.get('/', (_, response) =>
  response.status(200).json({
    message: 'Meu server Express, Typescript e ESLint!',
  }),
);

app.listen(process.env.PORT || 5050, () => {
  console.log(`Back-end started in ${process.env.PORT} port!`);
});
