if (Meteor.isClient) {

    var teamList = [];

    Template.create.helpers({
        showTeamList: function () {
            // ToDo: Fix this so when a team is added to the list, present it on the page.
        }
    });

    Template.create.events({
        'click .btnAddTeam': function (event) {
            event.preventDefault();

            var teamName = document.getElementById('txtAddTeam');

            if (teamName.value !== '') {
                $('.error-msg-addTeam').text('');
                console.log('Added team: ' + teamName.value);
                teamList.push(teamName.value);
                console.log('teamList length = ' + teamList.length);
                document.getElementById('txtAddTeam').value = '';
                if (teamList.length > 0) {
                    for (var i = 0; i < teamList.length; i++) {
                        console.log(i + ". " + teamList[i]);
                    }
                }
            } else {
                $('.error-msg-addTeam').text('You need a name for the team you want to add.');
            }
        },

        'submit .team-list': function (event) {
            event.preventDefault();

            var tournamentName = event.target.tournamentName.value;

            if (teamList.length >= 2 && tournamentName) {
                var tournamentInfo = [tournamentName, teamList];
                // ToDo: fix this on the server.
                Meteor.call("createTournament", tournamentInfo);
                event.target.tournamentName.value = '';
            } else {
                if (teamList.length < 2) {
                    $('.error-msg-addTeam').text('You need at least 2 teams to create a tournament.');
                } else if (!tournamentName) {
                    $('.error-msg-tournamentName').text('You need a name for your tournament.');
                }
            }
        }
    });
}