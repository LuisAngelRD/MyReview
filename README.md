# MyReview

A personal review website where I share my honest takes on **Games**, **Movies**, **TV Shows**, and **Books**.

Live site: [myreview-site.web.app](https://myreview-site.web.app)

## About

MyReview is a single-page application designed as a personal catalog of reviews. Each review includes a synopsis, personal opinion, highlights, category-specific ratings, trailer (when available), and a link to the official site. The homepage features a curated carousel, category filters, and a search bar to browse through all reviews.

## Features

- **Landing page** with animated particles and parallax background
- **Review catalog** with category filtering (Games, Movies, Series, Books) and search
- **Detailed review pages** with banner, poster, synopsis, highlights, rating breakdowns, embedded YouTube trailers, and personal opinion
- **Full CRUD system** — create, edit, and delete reviews through a built-in form accessible from the sidebar
- **Featured carousel** — manually select which reviews appear in the homepage hero slider
- **User authentication** — only the admin can create, edit, or delete reviews; visitors can browse freely
- **Dark theme UI** with smooth transitions and animations

## Tech Stack

- **Frontend**: HTML, CSS, and vanilla JavaScript (no frameworks)
- **Database**: Firebase Firestore for persistent data storage
- **Authentication**: Firebase Authentication (email/password)
- **Hosting**: Firebase Hosting
- **Fonts**: Google Fonts (Inter)
- **Videos**: YouTube embedded iframes for trailers

## How It Works

The app is a framework-free SPA (Single Page Application) — all navigation between views (landing, home, detail, form) is handled with JavaScript DOM manipulation, without page reloads. Reviews are stored in Firebase Firestore, so data persists across sessions and devices. Firebase Authentication ensures that only the admin can modify content, while anyone can browse and read reviews.

## Author

**Luis Diaz**
