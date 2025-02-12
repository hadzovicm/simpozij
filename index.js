import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.render('index', {currentPage: 'index'});
});

app.get('/contact', (req, res) => {
    res.render('contact', {currentPage: 'contact'});
});

app.get('/newsletter', (req, res) => {
    res.render('newsletter', {currentPage: 'newsletter'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});