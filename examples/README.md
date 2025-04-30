![2captcha-ts-examples](https://github.com/user-attachments/assets/0f254c08-7783-41e3-a3eb-4477c7b3c9ca)

# Examples for 2captcha-ts

This directory contains usage examples for solving various types of CAPTCHAs using the [`2captcha-ts`](https://github.com/dzmitry-duboyski/2captcha-ts) library.

Each file demonstrates how to solve a specific CAPTCHA type via 2Captcha API.

## 📂 Available Examples

| CAPTCHA Type         | Filename                                     | Description                                   |
|----------------------|----------------------------------------------|-----------------------------------------------|
| Amazon WAF           | [`amazonWaf.js`](./amazonWaf.js)             | Solving Amazon WAF CAPTCHA                    |
| Bounding Box         | [`boundingBox.js`](./boundingBox.js)         | Image with bounding box task                  |
| Capy Puzzle          | [`capyPuzzle.js`](./capyPuzzle.js)           | Capy CAPTCHA (drag-and-drop style)            |
| Coordinates          | [`coordinates.js`](./coordinates.js)         | Click on specific coordinates in an image     |
| CyberSiARA           | [`cyberSiARA.js`](./cyberSiARA.js)           | CyberSiARA CAPTCHA support                    |
| DataDome             | [`dataDome.js`](./dataDome.js)               | Solving DataDome CAPTCHA                      |
| Friendly Captcha     | [`friendlyCaptcha.js`](./friendlyCaptcha.js) | FriendlyCaptcha challenge                     |
| Funcaptcha           | [`funcaptcha.js`](./funcaptcha.js)           | Arkose Labs / FunCaptcha                      |
| GeeTest              | [`geetest.js`](./geetest.js)                 | GeeTest v3 classic                            |
| GeeTest v4           | [`geetestV4.js`](./geetestV4.js)             | GeeTest v4 support                            |
| hCaptcha             | [`hcaptcha.js`](./hcaptcha.js)               | Standard hCaptcha                             |
| Image CAPTCHA        | [`imageCaptcha.js`](./imageCaptcha.js)       | Basic image-to-text challenge                 |
| Lemin CAPTCHA        | [`lemin.js`](./lemin.js)                     | Lemin CAPTCHA                                 |
| mtCaptcha            | [`mtCaptcha.js`](./mtCaptcha.js)             | mtCaptcha support                             |
| reCAPTCHA v2         | [`recaptcha.js`](./recaptcha.js)             | Google reCAPTCHA v2                           |
| reCAPTCHA v3         | [`recaptcha_v3.js`](./recaptcha_v3.js)       | Google reCAPTCHA v3                           |
| Cloudflare Turnstile | [`turnstile.js`](./turnstile.js)             | Cloudflare Turnstile CAPTCHA                  |
| Yandex Smart CAPTCHA | [`yandexSmart.js`](./yandexSmart.js)         | Yandex smart CAPTCHA support                  |
| CutCaptcha           | [`cutcaptcha.js`](./cutcaptcha.js)           | CutCaptcha support                            |

## 🛠 How to Run

Set your API key in code:

```ts
const solver = new Solver('YOUR_2CAPTCHA_API_KEY');
```

Then run the script using:

```bash
node examples/[example-file].js
```

For example:

```bash
node examples/hcaptcha.js
```

> [!WARNING]  
> These examples are meant for testing and integration purposes. Do not abuse CAPTCHA services on production sites you don’t control.

---

For full API documentation, visit: [2captcha.com/api-docs](https://2captcha.com/api-docs)
