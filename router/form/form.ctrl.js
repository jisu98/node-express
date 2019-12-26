exports.submit = (req,res) => {
    console.log(req.body);
    const { id, password } = req.body;

    res.json({ // res.send와 비슷한데 json 형식으로 보내는 방법
        id,
        password, 
    });
}