# Junji Ito Macabre Calculator Demo

A spooky, visually striking web-based calculator inspired by **Junji Ito**.
Features a **background video**, **ambient audio**, and a **transparent, macabre-style calculator**.

---

## 🖼 Features

* **Background video** (`junji.mp4`) with a dark overlay for eerie effect.
* **Looping ambient audio** (`junji.mp3`) with a clickable toggle button.
* **Custom Junji Ito-style calculator**:

  * Responsive number buttons
  * Basic arithmetic: `+`, `-`, `*`, `/`
  * Decimal support
  * Clear (`C`) button
* **Stylized with Google Font "Creepster"** for a horror theme.
* Smooth hover and button press effects.

---

## 📁 Project Structure

```
project-demo/
│
├─ index.html       # Main HTML page
├─ styles.css       # Calculator and page styling
├─ script.js        # Calculator logic + audio toggle
├─ server.js        # Runs on http://localhost:3000
├─ junji.mp4        # Background video
├─ junji.mp3        # Background audio
├─ tomie.jpg        # Audio button image
```

---

## ⚡ How to Run

1. Clone or download the project.
2. Make sure all files are in the same folder.
3. Open `index.html` in your browser or Run the server http://localhost:3000
4. Enjoy the macabre calculator!
5. Click the audio icon to toggle the background music.

---

## 🎨 Customization

* **Change background video**: Replace `junji.mp4` with your own `.mp4` file (keep the same filename or update the `<source>` in HTML).
* **Change audio**: Replace `junji.mp3` with any `.mp3` file.
* **Change audio button image**: Replace `tomie.jpg` with your own image.

---

## 📝 Notes

* This project is purely **client-side**: no server required.
* Works best on modern browsers (Chrome, Firefox, Edge).
* Ensure media files are present and correctly named, otherwise the video or audio may not load.

---

## 🎯 Future Improvements

* Dynamically toggle the audio button image when playing vs paused.
* Add keyboard support for calculator input.
* Add more “Junji Ito” horror visual effects.
