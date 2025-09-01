// Harvest Time Tracking Trello Power-Up - Simple Integration
var TrelloPowerUp = window.TrelloPowerUp;

TrelloPowerUp.initialize({
    'card-buttons': function(t, options) {
        return [{
            icon: './helper-icon.png',
            text: 'Track Time',
            callback: function(t) {
                return t.card('name', 'url', 'id', 'desc', 'due', 'labels')
                    .then(function(card) {
                        var harvestUrl = 'https://platform.harvestapp.com/platform/timer?' + 
                            'app_name=' + encodeURIComponent('Trello') +
                            '&permalink=' + encodeURIComponent(card.url) +
                            '&external_item_name=' + encodeURIComponent(card.name) +
                            '&external_item_id=' + encodeURIComponent(card.id);
                        
                        return t.modal({
                            url: harvestUrl,
                            height: 420,
                            fullscreen: false,
                            title: 'Track Time with Harvest'
                        });
                    });
            }
        }];
    },
    
    // Card-back-section button that appears on the card itself
    'card-back-section': function(t, options) {
        return {
            title: '',  // Remove the title
            icon: '',   // Remove the icon
            content: {
                type: 'iframe',
                url: t.signUrl('./harvest-section.html'),
                height: 50  // Keep it small
            }
        };
    }
});
