if (Meteor.isClient) {
    Template.create.helpers({
        teamList: []
    });

    Template.create.events({
        'click .btnAddTeam': function (event) {
            event.preventDefault();

            var teamName = document.getElementById('txtAddTeam');

            if (teamName.value !== '') {
                console.log(teamName.value);
                document.getElementById('txtAddTeam').value = '';
            } else {
                console.log('LOL! Silly human, you need a name on your team!');
            }
        }
    });
}