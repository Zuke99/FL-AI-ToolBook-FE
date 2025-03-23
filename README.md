# EVPE WEBSITE V2

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MaxMatik-Evpe/website-v2.git
   cd website-v2
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development Server

To start the development server, run:

```bash
pnpm run dev
```

The app will be available at `http://localhost:/3000` (default Vite port).

### Build for Production

To build the project, run:

```bash
pnpm run build
```

### Preview Production Build

After building, you can preview the production build with:

```bash
pnpm run preview
```

### Linting

To check for linting errors, run:

```bash
pnpm run lint
```

### Folder Structure

Follow this folder structure 

```bash
EVPE-WEBSITE-V2/
│── public/               # Static files
│── src/                  # Main source folder
│   ├── assets/           # Images, icons, fonts
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components (Home, About, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── contexts/         # Context API for global state management
│   ├── services/         # API calls and business logic
│   ├── utils/            # Helper functions
│   ├── routes/           # Centralized app routing
│   ├── styles/           # Tailwind utility classes and global styles
│   ├── App.js            # Main app component
│   ├── index.js          # Entry point
│── .gitignore            
│── package.json          
│── tailwind.config.js    
│── postcss.config.js     
│── README.md  
```

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

### License

MIT

---
