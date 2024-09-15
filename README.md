# summAI: Your AI-Powered Article Summarizer 📰🤖

![App Design Mockup](src/assets/summAI-preview.png)

## 🌟 Overview

**summAI** is a web application created as a final exam project for React studies, offering an innovative service that summarizes and translates articles from any part of the web into Italian. With an intuitive user interface and advanced features, summAI is the perfect tool for obtaining concise summaries and accurate translations.

🔗 **Live Demo**: [summAI Demo](https://summai-carlo.netlify.app/)

## 🚀 Key Features

- **Multi-language Summarization**: Paste the URL of an article to receive a summary in Italian, regardless of the original language.
- **Seamless Navigation**: Easily navigate through the site’s pages: "Home" for service details and pricing plan, "Clients" to view fictional clients who use summAI, and "Demo" to test the summarization and translation feature.
- **Smart Caching**: Using Redux and RTK Query, summAI stores previous search states, avoiding redundant API calls and enhancing efficiency.
- **Search History**: Access previously searched articles from the list below the input area for quick retrieval.
- **Responsive Design**: Fully responsive interface optimized for mobile devices, featuring a handy hamburger menu.

## 🛠 Technologies Used

- **React**: For building dynamic and responsive user interfaces.
- **TypeScript**: For robust and type-safe code management.
- **Tailwind CSS**: For modern and customizable styling.
- **Framer Motion**: For smooth and engaging animations.
- **Redux & RTK Query**: For efficient state management and API calls.

## 🔧 Setup

To use summAI, you need to obtain an API key from RapidAPI:

1. Sign up at [RapidAPI](https://rapidapi.com).
2. Activate the free basic plan for the Article Extractor and Summarizer API at [Article Extractor and Summarizer Pricing](https://rapidapi.com/restyler/api/article-extractor-and-summarizer/pricing), which provides 50 free requests per month.
3. Insert your API key into the `.env` variable in the project code:

   ```env
   VITE_API_ARTICLE_KEY='API_KEY_HERE'
   ```

## 🎨 Design & Development

summAI, from UI design to the logo and code, has been personally created to ensure a cohesive and unique user experience. This project has also served as a valuable opportunity to learn new technologies and enhance my portfolio.

## 🙏 Credits

Thanks to [RapidAPI](https://rapidapi.com) for providing the API that powers this application.

---

Developed with ❤️ by **Carlo Caruso**
