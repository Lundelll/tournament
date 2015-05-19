Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('news');
});

Router.route('/create', function () {
  this.render('create');
});

Router.route('/two', function () {
  this.render('two');
});

Router.route('/three', function () {
  this.render('three');
});

Router.route('/four', function () {
  this.render('four');
});