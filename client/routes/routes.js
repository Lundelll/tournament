Router.configure({
  layoutTemplate: 'layout'
});

Router.onBeforeAction(function() {
  if(Router.current().route.getName() === 'create') {
    if(!Meteor.user()) {
      this.render('errorNotLoggedIn');
    } else {
      this.next();
    }
  } else {
    this.next();
  }
});

Router.route('/', function () {
  this.render('news');
});

Router.route('/news', function () {
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