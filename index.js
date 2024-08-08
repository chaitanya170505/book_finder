import bodyParser from 'body-parser';
import express from 'express';
const app = express();
import axios from'axios';

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
  

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
	res.render('index1');
})

app.get('/about',(req,res)=>{
	res.render('about');
})

app.get('/contact',(req,res)=>{
	res.render('contact');
})

app.get('/source-code',(req,res)=>{
	res.render('source');
})


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-form', async (req, res) => {
      const title =req.body.title;
      const author =req.body.author;
      const isbn =req.body.isbn;
      const publisher =req.body.publisher;
      console.log(title+' '+author+' '+isbn+' '+publisher);

      let query = '';
      if (title) {
        query += `intitle:${title}`;
      }
      if (author) {
        query += (query?'+': '') + `inauthor:${author}`;
      }
      if (isbn) {
        query += (query ? '+' : '') + `isbn:${isbn}`;
      }
      if (publisher) {
        query += (query ? '+' : '') + `inpublisher:${publisher}`;
      }

      if (!query) {
        return res.status(400).send('No search parameters provided.');
      }
        
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=39&printType=books`);
        console.log('API Response:', response.data);
        const data=response.data;
        res.render('index2',{apidata:data})
      } catch (error) {
        console.error('Failed to make request:', error.message);
        res.status(500).send('Failed to fetch activity. Please try again.');
      }
  
});

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  console.log(name,email,message);

  res.send("sent succesfully")
  
});



