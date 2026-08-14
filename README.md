# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
# Ride Records Dashboard

This project is a simple React ride-management webpage built with **React and Tailwind CSS**, using dummy ride data without a backend.
The application displays ride records in a responsive table with rider, driver, vehicle, status, fare, and date information.
A search box filters rides by **Rider Name in real time**, while the status dropdown filters rides by Completed, Ongoing, or Cancelled.
Ride statuses are color-coded using green for Completed, yellow for Ongoing, and red for Cancelled.
I used **expandable table rows** for additional ride details because they keep the interface clean while allowing users to view pickup, destination, distance, and duration without opening a separate popup.
The UI is divided into reusable components such as `RideTable`, `RideRow`, `SearchBar`, and `StatusFilter` for better organization and maintainability.
