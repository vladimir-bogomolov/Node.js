const express = require('express')
const app = express();
const fs = require('fs');


// YOUR CODE GOES IN HERE
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.post('/blogs', (req, res) => {
    let title = req.body.title;
    let content = req.body.content;
    fs.writeFileSync(title, content);
    res.end('ok');
});

app.put('/posts/:title', (req, res) => {
  // How to get the title and content from the request?
  let title = req.params.title;
  let content = req.body.content;
  // What if the request does not have a title and/or content?
  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end('ok')
  }
  else {
    res.status(400).json({msg: `There is no post with title ${title}`});
  }
});

app.delete('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  let title = req.params.title;
  if (fs.existsSync(title)) { // Add condition here
    fs.unlinkSync(title);
    res.end('ok');
  } else {
    // Respond with message here
    res.status(400).json({msg: `There is no post with title ${title}`});
  }
});

app.get('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  let title = req.params.title;
  // check if post exists
  if (fs.existsSync(title)) { // Add condition here
    const post = fs.readFileSync(title);
    res.end(post);
  } else {
    res.status(400).json({msg: `There is no post with title ${title}`});
  }
});

app.get('/blogs', (req, res) => {
  // how to get the file names of all files in a folder??
  const folder = '.';
  
  fs.readdir(folder, (err, files) => {
    if (err) {return res.status(400).json({msg: `Error: ${err}`})};
    files = files.filter(file => {
      return (file != 'node_modules' && !file.includes('.js'));
    });
    res.end(JSON.stringify(files));
  });
  
});
 
app.listen(3000);