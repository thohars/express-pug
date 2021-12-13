module.exports = async (req, res) => {
  res.setHeader('content-type', 'text/xml')
  res.render('pages/rss', {
    title: 'RSS Feed',
    link: req.protocol+'://'+req.hostname+'/rss',
    content: 'Hello world!'
  });
};
