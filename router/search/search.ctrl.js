exports.search = (req,res) => {
    const { keyword } = req.query;
    const result = keyword + '에 대한 검색 결과';

    res.render('search', {
        keyword, 
        result, 
    });
}