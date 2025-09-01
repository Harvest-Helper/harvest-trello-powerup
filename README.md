# Harvest Helper - Trello Power-Up

A simple Trello Power-Up that adds a "Track Time" button next to other card actions (like SubTasks buttons), opening Harvest's hosted time tracking widget.

## Features

- ✅ **Prominent placement** - Button appears next to other card actions (not hidden in Power-Ups section)
- ✅ **Clean interface** - Uses Harvest's official hosted widget with `closable=false`
- ✅ **Auto-populated data** - Card name, URL, and ID automatically passed to Harvest
- ✅ **No authentication needed** - Harvest handles login/auth in their widget
- ✅ **Minimal setup** - No API keys, settings, or complex configuration

## Quick Setup

### 1. Host These Files
Upload these files to any web server (GitHub Pages, Netlify, etc.):
- `index.html` - Power-Up connector
- `client.js` - Main logic
- `manifest.json` - Configuration
- `helper-icon.png` - Button icon

### 2. Create Trello Power-Up
1. Go to [Trello Power-Ups Admin](https://trello.com/power-ups/admin)
2. Click "Create new Power-Up"
3. Set iframe connector URL to your hosted `index.html`
4. Enable capability: `card-detail-badges`

### 3. Add to Board
1. Open a Trello board
2. Add the Power-Up from the board menu
3. Done! "Track Time" buttons will appear next to other card actions

## How It Works

When you click "Track Time" on any card:
1. Opens Harvest's hosted timer widget in a modal (`380px` height)
2. **Card name** → Time entry description
3. **Card URL** → Reference link in Harvest
4. **Card ID** → External item ID for tracking
5. User can start timer, log time, and close modal with X button

## File Structure

```
harvest-trello-powerup/
├── index.html       # Power-Up connector (loads Trello client)
├── client.js        # Main Power-Up logic (~30 lines)
├── manifest.json    # Power-Up configuration & capabilities
├── helper-icon.png  # Button icon
├── styles.css       # Basic styling
└── README.md        # This documentation
```

## Technical Details

### Harvest Widget Integration
- **URL**: `https://platform.harvestapp.com/platform/timer`
- **Parameters**:
  - `app_name=Trello` - Integration attribution
  - `closable=false` - Removes Cancel button (users close via X)
  - `permalink` - Card URL for reference
  - `external_item_name` - Card name for time description
  - `external_item_id` - Card ID for tracking

### Button Placement
- Uses `card-detail-badges` capability for prominent placement
- Appears next to SubTasks/other action buttons
- Gray styling (`color: null`) for clean integration

## Why This Approach?

Since Harvest provides a hosted widget, there's no need to:
- ❌ Recreate time tracking interface
- ❌ Handle Harvest authentication
- ❌ Manage API tokens
- ❌ Build settings pages

Instead, we simply:
- ✅ Add the button in the perfect location
- ✅ Open Harvest's widget with card context
- ✅ Let Harvest handle everything else

## Development

For local testing:
```bash
# Serve files locally
python -m http.server 8000

# Use ngrok for HTTPS (required by Trello)
ngrok http 8000
```

Then use the ngrok HTTPS URL in your Power-Up settings.

---

**That's it!** This minimal approach leverages Harvest's existing infrastructure while seamlessly integrating with Trello.
