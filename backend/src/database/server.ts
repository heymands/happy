import express from 'express';

import './database/connection';
import Orphanage from '../models/Orphanage';

const app = express();

app.use(express.json());

app.listen(3333);