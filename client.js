// Harvest Time Tracking Trello Power-Up - Simple Integration
var TrelloPowerUp = window.TrelloPowerUp;

TrelloPowerUp.initialize({
    // Board button - appears in top navigation bar
    'board-buttons': function(t, options) {
        return [{
            icon: './helper-icon.png',
            text: 'Harvest Helper',
            callback: function(t) {
                return t.popup({
                    title: 'Harvest Helper',
                    url: './helper-popup.html',
                    height: 200
                });
            }
        }];
    },
    
    // Track Time button positioned next to SubTasks buttons
    'card-detail-badges': function(t, options) {
        return [{
            title: 'Harvest Helper',
            text: 'Track Time',
            color: null,
            icon: './helper-icon.png',
            callback: function(t, opts) {
                return t.card('name', 'url', 'id', 'desc', 'due', 'labels')
                    .then(function(card) {
                        var harvestUrl = 'https://platform.harvestapp.com/platform/timer?' + 
                            'app_name=' + encodeURIComponent('Trello') +
                            '&closable=false' +
                            '&permalink=' + encodeURIComponent(card.url) +
                            '&external_item_name=' + encodeURIComponent(card.name) +
                            '&external_item_id=' + encodeURIComponent(card.id);
                        
                        return t.modal({
                            url: harvestUrl,
                            height: 380,
                            fullscreen: false,
                            title: 'Harvest Helper'
                        });
                    });
            }
        }];
    }
});
