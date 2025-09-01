// Harvest Time Tracking Trello Power-Up - Simple Integration
var TrelloPowerUp = window.TrelloPowerUp;

TrelloPowerUp.initialize({
    'card-buttons': function(t, options) {
        return [{
            icon: './helper-icon.png',
            text: 'Track Time',
            callback: function(t) {
                return t.card('name', 'url', 'id')
                    .then(function(card) {
                        var harvestUrl = 'https://platform.harvestapp.com/platform/timer?' + 
                            'external_item_name=' + encodeURIComponent(card.name) +
                            '&external_item_id=' + encodeURIComponent(card.id) +
                            '&external_item_url=' + encodeURIComponent(card.url);
                        
                        return t.popup({
                            title: 'Track Time with Harvest',
                            url: harvestUrl,
                            height: 500,
                            width: 400
                        });
                    });
            }
        }];
    },
    
    // Try card-detail-badges as well for different placement
    'card-detail-badges': function(t, options) {
        return [{
            title: 'Harvest',
            text: 'Track Time',
            icon: './helper-icon.png',
            callback: function(t) {
                return t.card('name', 'url', 'id')
                    .then(function(card) {
                        var harvestUrl = 'https://platform.harvestapp.com/platform/timer?' + 
                            'external_item_name=' + encodeURIComponent(card.name) +
                            '&external_item_id=' + encodeURIComponent(card.id) +
                            '&external_item_url=' + encodeURIComponent(card.url);
                        
                        return t.popup({
                            title: 'Track Time with Harvest',
                            url: harvestUrl,
                            height: 500,
                            width: 400
                        });
                    });
            }
        }];
    }
});
