# Jonathan Cruz Jara — Portfolio

Personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Tech Stack

- **Next.js 14** (App Router, Static Export)
- **TypeScript**
- **Tailwind CSS**

## 🌐 Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` branch — it deploys automatically

Your site will be live at: `https://<your-username>.github.io/<repo-name>/`

> If deploying to a subfolder (not root domain), update `next.config.js`:
> ```js
> const nextConfig = {
>   output: 'export',
>   basePath: '/<repo-name>',
>   assetPrefix: '/<repo-name>/',
> }
> ```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## ✏️ Customization

All content is in the component files under `/components`. Edit them to update your info, experience, or skills.
