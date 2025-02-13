# JC Web API - Landing Page

This is a **Next.js** landing page for the **JC Web API** project, built with **Tailwind CSS** and **Axios** for API integration.

## 🚀 Features
- **Hero Section**: API introduction + Call-to-Action
- **Features Section**: Highlights API services (users, payments, analytics, WebSockets)
- **API Status Check**: Fetches live API health status
- **Interactive API Docs**: Links to Swagger documentation
- **Footer**: GitHub link and copyright

## 📦 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/jc9mm/jc-web-landing.git
   cd jc-web-landing
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

## ⚙️ Configuration

- Update **API URL** in `components/ApiDocs.js`:
  ```js
  axios.get('https://your-api-url.com/api/health')
  ```

## 🚀 Deployment

### **Vercel (Recommended)**
1. Install Vercel CLI:
   ```sh
   npm i -g vercel
   ```
2. Deploy:
   ```sh
   vercel
   ```

### **Netlify**
1. Install Netlify CLI:
   ```sh
   npm i -g netlify-cli
   ```
2. Deploy:
   ```sh
   netlify deploy
   ```

## 📄 License

This project is licensed under the MIT License.
