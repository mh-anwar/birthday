# Birthday Card Generator
This project generates a relatively simple birthday card. 

It's purpose is not just to generate a birthday card, but to experiment with URL's and Github's hosting. The way it works, is that it takes parameters for a birthday card, then generates a URL at `b.anwar.app` for it. `b.anwar.app` redirects to `birthday.anwar.app` which is also hosted on Github Pages. At any point, in this routing process, Github Pages, _should_ throw a 404 Resource Not Found error, because the URL has a pathname. However, because the 404.html is customizable, it instead either redirects, in the case of `b.anwar.app` or shows the birthday card!

Note: This project is just a fun experiment, the 404 can be avoided simply by passing query parameters to the URL, but this way is more fun.

# Usage
- `npm run build` to build the app for production, using Vite
- `npm run deploy` to build and deploy the app to `/docs` for Github Pages