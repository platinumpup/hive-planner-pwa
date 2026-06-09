# Hive Planner — Clean Toolbar Build

This is a lightweight GitHub Pages-ready version of the Hive Planner.

## What changed

- Cleaner top toolbar:
  - Pan
  - Draw dropdown
  - Icons dropdown
  - Text
  - Undo
  - More menu
- Context actions only appear when something is selected:
  - Lock / Unlock
  - Back
  - Front
  - Delete
- Bottom toolbar stays focused on:
  - cursor x/y
  - zoom percentage
  - jump-to coordinates
  - PNG export
- PNG exports the current visible planner view.
- Draw/Icons dropdowns still close after selecting an option.
- Kept the existing visual style and rectangle preview behavior.

## Performance notes

This version avoids extra libraries and keeps the toolbar update logic simple. The interface cleanup is mostly HTML/CSS and small JavaScript event changes, so it should stay light on slower computers.

## Updating GitHub

Copy these files into the root of your GitHub Pages repo, then run:

```bash
git status
git add .
git commit -m "Clean up Hive Planner toolbar"
git push
```

If GitHub rejects the push because the remote has changes first:

```bash
git pull --rebase
git push
```
