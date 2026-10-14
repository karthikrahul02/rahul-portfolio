# Rahul K — Personal Portfolio

A responsive Next.js + React + TypeScript portfolio using a black, yellow, and green visual system inspired by the original site.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build check

```bash
npm run build
```

## Personalize before deploying

1. Replace `public/profile-placeholder.svg` with your portrait (recommended: square or 4:5 crop). You can save it as `public/profile.jpg`, then change the image source in `app/page.tsx` from `/profile-placeholder.svg` to `/profile.jpg`.
2. Verify contact details in `app/page.tsx` (`rahul002b@gmail.com` and `+91 84317 85448`).
3. Verify the education title and dates.
4. Check each project description and metric against the actual repository before publishing. Add actual project-specific GitHub and demo URLs; the two non-payment projects currently point to your GitHub profile as temporary destinations.
5. Add the official research publication URL when available.
6. The CGPA is intentionally omitted until the correct official figure is confirmed.

## Deploy to Vercel

Push this project to a new GitHub repository, import that repository into Vercel, and leave the framework preset as **Next.js** and the output directory at its default. Vercel should run `npm run build` automatically.
