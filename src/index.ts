import express from 'express';

import router from './routes';

const App = express();

App.use(express.json());
App.use(router);


App.listen(5000, () => {
    console.log('Server is running on port 3000');
}); 