// Harvest Time Tracking Trello Power-Up - Simple Integration
TrelloPowerUp.initialize({
    // Add card buttons capability to show Track Time button on each card
    'card-buttons': function(t, options) {
        return [{
            icon: 'https://d2q2c5ljc9sa3c.cloudfront.net/assets/harvest-icon-32x32-3e35e94b.png',
            text: 'Track Time',
            callback: function(t) {
                // Get card details to pass to Harvest widget
                return t.card('name', 'url')
                    .then(function(card) {
                        // Build Harvest widget URL with card context
                        var harvestUrl = 'https://platform.harvestapp.com/platform/timer?' + 
                            'external_item_name=' + encodeURIComponent(card.name) +
                            '&external_item_id=' + encodeURIComponent(card.id) +
                            '&external_item_url=' + encodeURIComponent(card.url);
                        
                        // Open Harvest widget in popup
                        return t.popup({
                            title: 'Track Time with Harvest',
                            url: harvestUrl,
                            height: 500,
                            width: 400
                        });
                    });
            },
            condition: 'edit' // Only show when user can edit the card
        }];
    }
});
