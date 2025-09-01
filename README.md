# Harvest Time Tracking - Trello Power-Up

A simple Trello Power-Up that adds a "Track Time" button to each card, opening Harvest's hosted time tracking widget.

## Features

- ✅ Adds "Track Time" button to each Trello card
- ✅ Opens Harvest's official hosted widget in a popup
- ✅ Automatically passes card name and URL to Harvest
- ✅ No authentication setup required (handled by Harvest)
- ✅ No hosting of time tracking interface needed

## Quick Setup

### 1. Host These Files
Upload just 2 files to any web server (GitHub Pages, Netlify, etc.):
- `index.html`
- `client.js`

### 2. Create Trello Power-Up
1. Go to [Trello Power-Ups Admin](https://trello.com/power-ups/admin)
2. Click "Create new Power-Up"
3. Set iframe connector URL to your hosted `index.html`
4. Enable capability: `card-buttons`

### 3. Add to Board
1. Open a Trello board
2. Add the Power-Up from the board menu
3. Done! "Track Time" buttons will appear on all cards

## How It Works

When you click "Track Time" on any card:
1. Opens Harvest's hosted timer widget in a popup
2. Card name is automatically filled as the time entry description
3. Card URL is passed for reference
4. User logs into Harvest (if needed) and tracks time normally

## File Structure

```
harvest-trello-powerup/
├── index.html    # Power-Up connector (5 lines)
├── client.js     # Power-Up logic (30 lines)
├── manifest.json # Power-Up configuration
└── README.md     # This file
```

## Why This Approach?

Since Harvest already provides a hosted widget at `https://platform.harvestapp.com/platform/timer`, there's no need to:
- ❌ Recreate time tracking interface
- ❌ Handle Harvest authentication
- ❌ Manage API tokens
- ❌ Build settings pages

Instead, we simply:
- ✅ Add the button to Trello cards
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
