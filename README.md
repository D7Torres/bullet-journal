# Mini Bullet Journal

To run this application, please follow the instructions:

- Run `npm install`
- Run `npm run dev`
- The app is available in `http://localhost:5173/`, if it's not available there, check the terminal output and the URL should be specified there.

## Improvements

- Use `new Date(Date.UTC(...))` to create the dates, and read them also as UTC so the days don't change if you travel.
- Add tests to for /api/items.tsx
