# Tanıt

## Features

- Built with Astro 5.7
- Responsive design using Tailwind CSS
- Smooth & subtle micro-interactions
- Optimized images with Astro's built-in image optimization
- Modern SEO practices
- Accessibility-friendly components
- Fast page transitions with View Transitions API

[<img width="609" height="500" alt="home-page" src="https://github.com/user-attachments/assets/1e311553-3314-4c40-96f6-50daa5cf36f0" />](https://payflo.corytrimm.com)

## Project Structure

```
/
├── public/               # Static assets like images and favicons
├── src/
│   ├── assets/           # Images processed by Astro
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Page components and routes
│   ├── scripts/          # Client-side JavaScript
│   └── styles/           # Global CSS and utility styles
├── .gitignore
├── astro.config.mjs      # Astro configuration
├── package.json          # Project dependencies
├── tailwind.config.mjs   # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v18.14.1 or higher)
- npm or yarn or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ctrimm/astro-payroll-solution-theme.git
cd astro-payroll-solution-theme
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## Building for Production

To build the site for production, run:

```bash
npm run build
```

The build output will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the styles by modifying:

- `tailwind.config.mjs` - For theme configuration
- `src/styles/global.css` - For global styles and custom utility classes

### Content

Update the content of the site by modifying the components in the `src/components/` directory and the pages in the `src/pages/` directory.

### Images

- Place static images that don't need processing in the `public/` directory
- Place images that need optimization in the `src/assets/` directory

## Adding New Pages

To add a new page, create a new `.astro` file in the `src/pages/` directory. The file path will determine the route.

For example:
- `src/pages/blog.astro` will be accessible at `/blog`
- `src/pages/blog/[slug].astro` will create dynamic routes for blog posts

## Animations

The site uses a combination of:

1. CSS animations defined in `src/styles/global.css`
2. Intersection Observer for triggering animations on scroll, implemented in `src/scripts/animations.js`

## License

This project is open source and available under the [MIT License](LICENSE).
