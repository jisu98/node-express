exports.index = (req,res) => {
    res.render('board');
}

exports.show = (req,res) => {
    const { id } = req.params;
    const contents = id + '번 게시글 내용입니다. ';

    res.render('article', {
        id, 
        contents, 
    });
}