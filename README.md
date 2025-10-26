# Archfendus Turborepo

A high-performance monorepo for creating lightning-fast sites using modern web technologies. Built with Nuxt.js, Vue 3, and TypeScript, this skeleton allows developers to rapidly deploy premium platforms with beautiful, responsive designs.

## 🚀 Live Demos

- **Gold Site**: [https://archfendus-gold.vercel.app/](https://archfendus-gold.vercel.app/)
- **Silver Site**: [https://archfendus-silver.vercel.app/](https://archfendus-silver.vercel.app/)

## 🏗️ What's Inside?

This Turborepo includes the following packages and applications:

### Apps

- **`gold`**: Premium gold-themed site with luxury UI
- **`silver`**: Elegant silver-themed site with sophisticated design

### Packages

- **`nuxt-base`**: Shared Nuxt.js base package with common functionality
- **`ui`**: Reusable Vue 3 component library for the site elements
- **`styles`**: Centralized SCSS styles with 7-1 architecture pattern
- **`shared-types`**: TypeScript type definitions shared across all apps
- **`eslint-config-custom`**: ESLint configurations for TypeScript and Vue
- **`tsconfig`**: TypeScript configurations used throughout the monorepo

## ✨ Features

- **🎨 Multiple Themes**: Gold and Silver color schemes with CSS custom properties
- **📱 Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **⚡ Performance**: Optimized with Nuxt.js SSR, lazy loading, and modern build tools
- **🔧 TypeScript**: Full type safety across the entire monorepo
- **🎯 Component Library**: Reusable UI components for rapid development
- **📦 Monorepo**: Shared packages and efficient dependency management
- **🎨 SCSS Architecture**: Organized styles following 7-1 pattern and Sass Guidelines

## 📁 Project Structure

```
archfendus-turborepo/
├── apps/
│   ├── gold/                # Gold-themed site
│   └── silver/              # Silver-themed site
├── packages/
│   ├── nuxt-base/           # Shared Nuxt.js functionality
│   ├── ui/                  # Vue 3 component library
│   ├── styles/              # SCSS styles (7-1 pattern)
│   ├── shared-types/        # TypeScript definitions
└── turbo.json              # Turborepo configuration
```

## 🗺️ App Schema

![Picture 1](./schema.webp)

## 🛠️ Tech Stack

- **Framework**: [Nuxt.js 3](https://nuxt.com/)
- **Frontend**: [Vue 3](https://vuejs.org/) with Composition API
- **Styling**: SCSS with 7-1 architecture
- **TypeScript**: Full type safety
- **Monorepo**: [Turborepo](https://turborepo.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🔧 Advanced Features

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

To enable Remote Caching:

```bash
cd archfendus-turborepo
npx turbo login
npx turbo link
```

## 📚 Learn More

### Turborepo Resources

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)

### Framework Documentation

- [Nuxt.js Documentation](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/guide/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using Turborepo, Nuxt.js, and Vue 3**
