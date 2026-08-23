# Ease Lab

Ease Lab is a static easing reference and motion editor built with plain HTML, CSS, and JavaScript. It can be hosted directly with GitHub Pages and does not require a build step.

## Features

- Browse and compare easing families in the **Ease Gallery**.
- Preview transform, scale, and rotation easing.
- Select multiple easing families at once.
- Build multi-point animations in the **Motion Editor**.
- Configure transform, scale, and rotation easing independently for each point.
- Edit point position, scale, rotation, and incoming duration.
- Reorder points by dragging their rows.
- Move points and adjust scale or rotation with the canvas gizmo.
- Use a responsive display backed by a logical `1600 × 900` coordinate system.
- Scrub and control playback with the timeline.
- Undo and redo editing operations.

## Controls

| Action | Control |
| --- | --- |
| Play or pause | `Space` |
| Delete selected point | `Delete` |
| Undo | `Ctrl/Cmd + Z` |
| Redo | `Ctrl/Cmd + Shift + Z` or `Ctrl/Cmd + Y` |
| Align while adding or dragging | Hold `Shift` |

## Run locally

Open `index.html` directly, or serve the folder with a local HTTP server:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Push the project files to a GitHub repository.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch containing the site and the `/ (root)` folder.
5. Save the configuration and open the generated Pages URL.

## Project structure

```text
index.html    Page structure
styles.css   Layout and visual styling
script.js    Easing, animation, editor, and history logic
favicon.svg  Browser icon
```
