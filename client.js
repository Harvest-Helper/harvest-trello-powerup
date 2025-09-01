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
                        
                        // Create wrapper URL with Harvest widget embedded
                        var wrapperUrl = t.signUrl('./harvest-wrapper.html?harvest_url=' + encodeURIComponent(harvestUrl));
                        
                        return t.modal({
                            url: wrapperUrl,
                            height: 380,
                            fullscreen: false,
                            title: 'Harvest Helper'
                        });
                    });
            }
        }];
    },
    
    // Track Time button positioned next to SubTasks buttons!
    'card-detail-badges': function(t, options) {
        return [{
            title: 'Harvest Helper',
            text: 'Track Time',
            color: null,
            callback: function(t, opts) {
                return t.card('name', 'url', 'id', 'desc', 'due', 'labels')
                    .then(function(card) {
                        var harvestUrl = 'https://platform.harvestapp.com/platform/timer?' + 
                            'app_name=' + encodeURIComponent('Trello') +
                            '&permalink=' + encodeURIComponent(card.url) +
                            '&external_item_name=' + encodeURIComponent(card.name) +
                            '&external_item_id=' + encodeURIComponent(card.id);
                        
                        // Create wrapper URL with Harvest widget embedded
                        var wrapperUrl = t.signUrl('./harvest-wrapper.html?harvest_url=' + encodeURIComponent(harvestUrl));
                        
                        return t.modal({
                            url: wrapperUrl,
                            height: 380,
                            fullscreen: false,
                            title: 'Harvest Helper'
                        });
                    });
            }
        }];
    }
});
