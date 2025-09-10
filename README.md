# CNAPP Dashboard
A responsive, dynamic dashboard web application built with React, Vite, and Bootstrap, featuring customizable widgets and clean UI design inspired by CNAPP dashboards.

## Features 
- Dynamic categories and widgets with add/remove functionality

- Custom multi-tab Add Widget modal with checkboxes

- Responsive layout optimized for desktop and mobile devices

- Clean, modern card design with rounded corners and shadows

- Search bar to filter widgets globally

- Custom top navigation with breadcrumb, search, and action buttons

- Hosted on GitHub Pages via automated build and deployment

## Demo

Check the live demo on GitHub Pages: 

https://Donuts-procodes.github.io/dashboard

## Installation and Development

- ### Clone the repository:

```bash
git clone https://github.com/Donuts-procodes/dashboard.git 
cd dashboard
```
- ### Install dependencies:
```bash
npm install
```
### Start the development server:

```bash
npm run dev
```
- Open your browser at http://localhost:5173 to view the app locally.

## Build and Deploy

#### This project uses gh-pages to deploy to GitHub Pages.

### Build for production and deploy:

```bash
npm run deploy
```
- This command builds the app and publishes the dist folder to the gh-pages branch.

- Make sure package.json includes the correct homepage field:
```json
"homepage": "https://Donuts-procodes.github.io/dashboard" 
```
- Also, to ensure proper asset referencing, the vite.config.js contains:

```js
export default defineConfig({
  base: "/dashboard/",
  plugins: [react()]
});
```
### After deploy, your app will be available at:

```text
https://Donuts-procodes.github.io/dashboard/
```
## Project Structure
```text
src/
  components/         # React components (Widgets, Dashboard, Modals, etc.)
  context/            # React Context API for global state management
  App.jsx             # Main app component with layout and topbar
  main.jsx            # Entry point — renders app and imports global styles
  index.css           # Custom CSS styles overriding Bootstrap defaults

package.json          # Project metadata and scripts
vite.config.js        # Vite config with base URL for GitHub Pages
```
### Customization
- Modify widget lists and categories in DashboardContext.jsx
- Add real charts using libraries like Chart.js or Recharts

- Extend topbar navigation or search functionality as needed

## License
This project is open-source and free to use.

## Contact
For questions or contributions, please contact Ayush at ayushbudhiraja2003@gmail.com.
