Template.top_menu.helpers({
  active: function(routeName) {
    return Router.current().route.getName() === routeName ? 'active' : '';
  }
});