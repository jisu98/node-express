exports.getMain = (req,res) => {
    res.render('main');
}

exports.redirect = (req,res) => {
    console.log('필요한 로직을 처리합니다. ');
    
    res.redirect('/');
}

exports.render = (req,res) => {
    const data1 = "db에서 가져온 어떤 데이터 1";
    const data2 = "db에서 가져온 어떤 데이터 2";
    
    res.render('render', {
        data1,
        data2,  
    });
}

exports.send1 = (req,res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Demo</title>
        </head>
        <body>
            <h1>Send page1</h1>
            <p>백엔드에서 보내는 html 코드입니다. </p>
        </body>
        </html> 
    `);
}

exports.send2 = (req,res) => {
    res.send(`
        <script>
            alert("백엔드에서 보내는 script 코드입니다. "); 
            history.go(-1); // 뒤로가기
        </script>
    `);
}