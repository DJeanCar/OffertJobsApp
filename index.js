import express from 'express';
import routes from './src/actions'

const app = express();

app.use(routes);

app.listen(3000, () => {
  console.log('>>App runnig at 3000');
});
