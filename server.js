var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articals={
 'artical-one' : {
      title:'artical-one|kishore',
      heading:'artical one',
      date:'15 dec 1996',
      content: `<p>this is my first para</p>
            <p> This page was created on Sat Oct 09 2010 and last changed on Thu Nov 16 2017.

This lists similar commands between Windows and Unix command lines.

To get help on a Windows command, use the /? option, for example date /?.</p>
<p>Date on Unix prints the current date and time. Date and time on Windows print the date and time respectively, and prompt for a new date or time.
del	rm	</p>`
},


 'artical-two' :{
     title:'artical-two|lp',
      heading:'artical two',
      date:'09 apr 1997',
      content: `<p>this is my first para</p>
            <p> This page was created on Sat Oct 09 2010 and last changed on Thu Nov 16 2017.

This lists similar commands between Windows and Unix command lines.

To get help on a Windows command, use the /? option, for example date /?.</p>
<p>Date on Unix prints the current date and time. Date and time on Windows print the date and time respectively, and prompt for a new date or time.
del	rm	</p>`
},

 'artical-three' :{
     title:'artical-one|web',
      heading:'artical three',
      date:'23 nov 1994',
      content: `<p>this is my first para</p>
            <p> This page was created on Sat Oct 09 2010 and last changed on Thu Nov 16 2017.

This lists similar commands between Windows and Unix command lines.

To get help on a Windows command, use the /? option, for example date /?.</p>
<p>Date on Unix prints the current date and time. Date and time on Windows print the date and time respectively, and prompt for a new date or time.
del	rm	</p>`
}



};

function createTemplate(data){

var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmlTemplate=`
    
    <html>
  <head>
      <title>
         ${title}
      </title> 
       <link href="/ui/style.css" rel="stylesheet" />
  </head>
       <body>
           <div class="container">
           
           <div>
            <a  href="/">home</a>
            </div>
            <hr/>
        <h3>
           ${heading}
        </h3>
        <div>
           ${date}
        </div>
        <div>
            ${content}
        </div>
            </div>    
       </body>      
           
  </html>         
           
 `;  
 return htmlTemplate;
}
           
           




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});




app.get('/:articalname',function(req,res){
     var articalename=req.params.articalname;
     res.send(createTemplate(articals[articalname]));
});






app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
