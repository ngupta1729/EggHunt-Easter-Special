# Egg Hunt

An Easter-themed interactive browser puzzle game built with React, TypeScript, and Framer Motion.

---

## Egg Hunt (`/egg-hunt`)

A pattern puzzle game where one of nine animated eggs secretly follows a hidden rule — the others try to fool you.

### How it works

- 9 eggs appear on screen, each changing color, pattern, text, symbols, and rotation independently every 0.5–1.5 seconds
- One **real egg** always obeys a hidden rule (e.g. "never changes color", "always has stripes")
- The other 8 **fake eggs** mimic the rule most of the time but eventually break it
- You have **3 attempts** to click the real egg
- A **clue** is available to reveal the rule, but using it reduces your coin score
- Score is based on speed, attempts used, and whether you used the clue

### Scoring

| Component | Coins |
|---|---|
| Speed | 50–300 🪙 (based on time taken, max at 0s) |
| Attempts | 300 (1st try) · 150 (2nd try) · 50 (3rd try) |
| Clue used | × 0.8 multiplier on total |

**Max score: 600 🪙** — ≥ 450 = Excellent · 250–449 = Good · < 250 = Keep Trying

### Rules (12 total, one picked randomly each game)

| Type | Examples |
|---|---|
| Static | Never has text · Never rotates · Always solid color · Always has a symbol · Always tilted · Always has text |
| Parameterised | Always has [random pattern] · Always shows [random symbol] · Always stays in [warm/cool/purple] tones · Never has [random pattern] |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | Framer Motion |
| State | Zustand |
| Routing | React Router v6 |

---

## Running locally

```bash
npm install
npm run dev
```

Navigate to `http://localhost:5173/egg-hunt`

```bash
npm run build      # production build
npm run type-check # TypeScript check
```
