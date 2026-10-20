# Dosefold — website and legal pages

Public product website, Terms of Use and Privacy Policy for the Dosefold iPhone app.

- App Store name: **Dosefold — GLP-1 Tracker**
- In-app display name: **Dosefold**
- Category phrase: GLP-1 tracker

## Pages

- Home: https://dosefold-site.pages.dev/
- Terms: https://dosefold-site.pages.dev/terms/
- Privacy: https://dosefold-site.pages.dev/privacy/

Deployed with Cloudflare Pages project `dosefold-site`; production branch `main`.

The site is static, uses no advertising cookies or tracking pixels, and has no app build step. `functions/_middleware.js` forwards only `/v1/*` to the FoodScan Worker so the native app can use the Pages hostname on networks where `workers.dev` is blocked; it stores no request content. Open `index.html` directly or serve this directory with any static file server.

## Structure

```text
index.html          Product website
styles.css          Shared visual system
assets/             App logo and favicon
terms/index.html    Terms of Use
privacy/index.html  Privacy Policy
functions/          /v1/* FoodScan relay to the existing Worker
```

## Subscription copy

The Terms include a subscription section (auto-renewal, billing through Apple, cancellation, restore, refunds, trials, price shown before purchase, deleting the app does not cancel) and the Privacy Policy documents RevenueCat as subscription infrastructure. The current commercial model is free download/browsing, with Pro required for creating/updating actual records, AI food analysis and interactive statistics. Existing records remain viewable; Restore Purchases, privacy/legal information, local data export/deletion and support are not locked. Weekly and one-time Lifetime are offered with the real price shown by Apple; no trial length or unlimited service is promised. This copy does not certify App Review, real purchase lifecycle or DSA verification.

## Contact

Dosefold — Huiru Gao  
erchen735@gmail.com
