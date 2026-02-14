# Neobrutalism Portfolio

A high-performance, interactive portfolio website built with React, Vite, and Framer Motion, featuring a distinct Neobrutalist design aesthetic.

## Features

- **Modern Tech Stack**: Built with React, Vite, and Framer Motion for optimal performance and smooth interactions.
- **Neobrutalist Design**: unique, bold visual style with high contrast, raw shapes, and vibrant accents.
- **Responsive Layout**: Fully responsive design that looks great on all devices, from mobile to desktop.
- **Custom Animations**:
  - **Typewriter Effect**: Dynamic text typing with a custom blinking cursor.
  - **Scramble Text**: Hacker-style text scrambling effect on hover and load.
  - **Scroll Animations**: Smooth reveal animations as you scroll through the page.
- **Interactive Elements**:
  - **3D Shapes**: Geometric shapes and patterns that react to user interaction.
  - **Hover Effects**: Engaging hover states on buttons, cards, and links.
- **Optimized Performance**: Fast loading times and smooth 60fps animations.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  **Build for production:**
    ```bash
    npm run build
    ```

## Project Structure

```
portfolio-2/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and icons
│   ├── components/
│   │   ├── canvas/      # 3D/Canvas components
│   │   ├── sections/    # Page sections (Hero, About, Projects, etc.)
│   │   └── ui/          # Reusable UI components (Buttons, Cards, Text effects)
│   ├── hooks/           # Custom React hooks
│   ├── styles/          # Global styles
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global CSS variables and resets
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
```

## Technologies Used

- **React**
- **Vite**
- **Framer Motion**
- **CSS Modules / Vanilla CSS**
- **ESLint**
