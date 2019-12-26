const express = require('express');
const path = require('path');
const ejs = require('ejs');
const router = require('./router');

const port = 3000; // 포트 넘버 바꾸시면 됩니다. 
const app = express();

app.engine('html', ejs.renderFile); // html 파일을 ejs로 읽겠다는 뜻입니다.  
app.set('views', path.join(__dirname, 'views')); // views 폴더에 있는 파일들을 바라봅니다. 
app.set('view engine', 'html'); // .html로 된 파일들을 읽어올 것입니다. 
app.use(express.static(path.join(__dirname, 'public'))); // public 폴더 안에 있는 파일들(css, images 등)을 가져올 수 있습니다. 

app.use(express.json());
app.use(express.urlencoded({ exteneded: false })); // form data를 body로 받아오기 위해서 필요한 부분입니다. 안 쓰면 빼도 됩니다. 

app.use('/', router); // router 폴더에서 라우팅을 담당합니다. 

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});