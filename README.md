# Rishish Pradhan Studios Portfolio

A modern, responsive developer portfolio website for an indie Android game developer studio.

## Features
- **Modern Minimal Design**: Clean UI with soft gradients and glassmorphism.
- **Responsive Layout**: Mobile-first design that works on all screen sizes.
- **Games Showcase**: Card-based layout for showcasing Android apps.
- **Privacy Policy**: Dedicated page for app privacy requirements.
- **SEO Optimized**: Proper meta tags for search engines.

## Hosting on GitHub Pages

To host this website on GitHub Pages:

1. **Build the project**:
   ```bash
   npm run build
   ```
2. **Push to GitHub**:
   - Create a new repository on GitHub.
   - Push your code to the `main` branch.
3. **Enable GitHub Pages**:
   - Go to your repository **Settings** > **Pages**.
   - Under **Build and deployment**, set the source to **GitHub Actions**.
   - Use the "Static HTML" or "Vite" workflow if available, or simply push the contents of the `dist` folder to a `gh-pages` branch.

### Manual Deployment (Simple)
If you want to deploy the static files directly:
1. Copy the contents of the `dist` folder after running `npm run build`.
2. Paste them into the root of your repository or a `docs` folder.
3. Set GitHub Pages to serve from that location.

## Project Structure
- `src/pages/HomePage.tsx`: Main landing page.
- `src/pages/PrivacyPage.tsx`: Privacy policy content.
- `src/index.css`: Tailwind CSS configuration and global styles.
- `index.html`: SEO meta tags and entry point.
