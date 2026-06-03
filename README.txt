Hive Planner PWA
================

Hive Planner is a lightweight offline-friendly map planning tool for building and testing hive layouts on a 1000 x 1000 coordinate grid.

It is designed for X-Clash style hive planning where castles, cities, labels, coordinate markers, and temporary layout ideas need to be placed quickly on a shared map.

What this app is for
--------------------

Use Hive Planner to:

- plan hive formations
- mark castle positions
- test 3x3 and 5x5 spacing
- mark important coordinates
- copy, paste, and move sections of a layout
- export and import layouts as JSON
- use it from desktop or install it on iPhone as a PWA

Installing on iPhone
--------------------

1. Open the hosted app link in Safari.
2. Tap the Share button.
3. Tap Add to Home Screen.
4. Open Hive Planner from the new home-screen icon.

Important: iPhone needs the app to be hosted online through HTTPS for proper PWA behavior. GitHub Pages, Cloudflare Pages, Netlify, or a normal website will work.

Basic controls
--------------

Pan mode
--------

Pan is the main working mode.

In Pan mode:

- drag empty map space to move around the map
- drag an object to move it
- click/tap an object to select it
- double tap or long press a cell to open the Show Coords popup
- right-click an item on desktop to delete it

Rectangles
----------

Tap the Rects button to open the rectangle menu.

Available rectangle types:

- Blue Rect
- Green Rect
- Red Rect
- Yellow Rect
- Outline Rect

To draw a rectangle:

1. Tap Rects.
2. Choose a rectangle color/style.
3. Tap the first corner on the map.
4. Tap the opposite corner.
5. The rectangle will snap to the grid.

Common uses:

- 3x3 rectangles for castles
- 5x5 rectangles for furnace/city/large structures
- Outline rectangles for marking zones, boundaries, or test areas

Icons
-----

Tap the Icons button to open the icon menu.

Current icons include:

- Location
- Land Level
- Blue Hex

To place an icon:

1. Tap Icons.
2. Choose an icon.
3. Tap the map where you want to place it.

Icons can be moved, copied, pasted, layered, or deleted like other items.

Text
----

Tap Text to place a floating text label.

To add text:

1. Tap Text.
2. Type the label.
3. Tap Set Text.
4. Tap the map where the text should appear.

Text can be moved after placing it.

Coordinate labels
-----------------

To place a coordinate label:

1. Make sure you are in Pan mode.
2. Double tap or long press the cell you want.
3. Tap Show Coords in the popup.
4. A permanent coordinate label will appear in that cell.

Coordinate labels are live labels. If you move one to a new cell, the numbers update to match the new position.

Multi-select and shortcuts
--------------------------

On desktop:

- Shift + click = add/remove item from selection
- Ctrl + click = add/remove item from selection
- Ctrl + C = copy selected items
- Ctrl + V = paste copied items
- Ctrl + Z = undo
- Ctrl + A = select all items
- Delete or Backspace = delete selected items
- Escape = clear selection
- Right-click an item = delete it

Moving multiple selected items
------------------------------

When multiple items are selected, drag one selected item to move the whole selected group.

The group keeps the same structure and spacing while moving.

Layer controls
--------------

Use Back and Front to change layer order.

- Back sends the selected item or group behind other items of the same type.
- Front brings the selected item or group forward.

Save, load, and JSON
--------------------

The JSON button opens the layout data panel.

Use JSON for:

- copying a layout
- backing up a layout
- sharing a layout
- loading a saved layout

Buttons in the JSON panel:

- Copy: copies the current JSON
- Load JSON: loads pasted JSON into the planner
- Save Local: saves the current layout in this browser/device
- Load Local: reloads the saved local layout
- Close: closes the JSON panel

Local save note
---------------

Save Local stores the layout only in the browser/device you are using.

If you clear browser data, switch devices, or open a different browser, local saves may not be there.

For permanent backups, use JSON Copy and save the JSON somewhere safe.

Recommended workflow
--------------------

1. Use Rects to place castles, zones, and major structures.
2. Use Icons for special markers.
3. Use Text for labels.
4. Use Show Coords for exact coordinate notes.
5. Use Shift/Ctrl-click to multi-select sections.
6. Use Ctrl+C and Ctrl+V to duplicate repeated structures.
7. Use JSON Copy to back up or share the finished layout.

Troubleshooting
---------------

If the app feels slow:

- zoom in closer before editing dense layouts
- avoid leaving thousands of objects on the map
- use JSON backups before making major changes
- reload the page if touch or drag behavior feels stuck

If Add to Home Screen does not behave like an app:

- make sure the app is opened in Safari
- make sure it is hosted through HTTPS
- remove the old home-screen copy and add it again after updates
