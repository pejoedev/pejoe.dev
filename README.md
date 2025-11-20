# Pejoe.dev - React TypeScript Template

A modern React TypeScript template with routing, built with Vite for fast development and optimized builds.

## 🚀 Features

- ⚛️ **React 18** - Latest React with hooks and concurrent features
- 📘 **TypeScript** - Full TypeScript support for better development experience
- 🛠️ **Vite** - Lightning fast build tool and development server
- 🛣️ **React Router** - Client-side routing with React Router DOM
- 🎨 **CSS Modules** - Component-scoped styling
- 📱 **Responsive Design** - Mobile-first responsive layouts
- 🔧 **ESLint** - Code linting for consistent code quality

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Layout.tsx      # Main layout component with navigation
│   └── Layout.css      # Layout component styles
├── pages/              # Individual page components
│   ├── Home.tsx        # Home page component
│   ├── Home.css        # Home page styles
│   ├── About.tsx       # About page component
│   ├── About.css       # About page styles
│   ├── Contact.tsx     # Contact page component
│   └── Contact.css     # Contact page styles
├── App.tsx             # Main application component
├── App.css             # Global application styles
├── main.tsx            # Application entry point
└── index.css           # Global CSS styles
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd pejoe.dev
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## 🗺️ Routing

This template includes three main routes:

- `/` - Home page with project overview and features
- `/about` - About page with project information and technologies
- `/contact` - Contact page with a working contact form

The routing is handled by React Router DOM with a shared Layout component that provides consistent navigation across all pages.

## 🎨 Styling

The project uses regular CSS with a modern approach:

- Component-scoped CSS files
- CSS custom properties for theming
- Responsive design with CSS Grid and Flexbox
- Dark/light mode support with `prefers-color-scheme`

## 🔧 Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Create corresponding CSS file
3. Add the route to `src/App.tsx`
4. Add navigation link in `src/components/Layout.tsx`

### Styling

- Global styles: `src/index.css`
- Component styles: Create `.css` file next to component
- Dark/light mode: Use `@media (prefers-color-scheme: light)` for light mode styles

### TypeScript

The project is configured with strict TypeScript settings for better type safety. All components are fully typed with proper interfaces and type definitions.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect it's a Vite project and deploy

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify
3. Or connect your GitHub repository to Netlify for automatic deployments

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Router Documentation](https://reactrouter.com)

---

Built with ❤️ using React, TypeScript, and Vite.