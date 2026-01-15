# GitHub Readme Stats (Simplified)

This is a simplified version of the [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) project, keeping only the essential features:

- GitHub Stats Card
- Top Languages Card

## How to use

### 1. Deploy to Vercel
Push this repository to your GitHub account and connect it to Vercel.

### 2. Configure Environment Variables
In your Vercel project settings, add a `PERSONAL_ACCESS_TOKEN` environment variable. You can generate one from your [GitHub Settings](https://github.com/settings/tokens).

### 3. Add to your README
Replace `YOUR_USERNAME` with your GitHub username.

#### GitHub Stats Card
```markdown
[![GitHub stats](https://your-vercel-domain.vercel.app/api?username=YOUR_USERNAME&show_icons=true&theme=radical)](https://github.com/YOUR_USERNAME)
```

#### Top Languages Card
```markdown
[![Top Languages](https://your-vercel-domain.vercel.app/api/top-langs/?username=YOUR_USERNAME&layout=compact&langs_count=8&theme=radical)](https://github.com/YOUR_USERNAME)
```

## Credits
Original project by [Anurag Hazra](https://github.com/anuraghazra/github-readme-stats).
