Router.configure({
    layoutTemplate: 'layout'
});

Router.onBeforeAction(function () {
    if (Router.current().route.getName() === 'create') {
        if (!Meteor.user()) {
            this.render('errorNotLoggedIn');
        } else {
            this.render('create');
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

Router.route('/search', function () {
    this.render('search');
});

Router.route('/three', function () {
    this.render('three');
});

Router.route('/four', function () {
    this.render('four');
});