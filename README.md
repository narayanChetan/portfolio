## a portfolio website
A React (Next.js, static export)
Desktop home (with boot chime), Projects, Experience, Skills (tabs + progress bars), an
interactive Terminal, and a Guestbook / Review Panel — all with working buttons and synthesized
90s-Mac sound effects.

**No custom backend.** The site is a static export. The one dynamic feature — the guestbook —
talks directly to **Firebase Firestore** from the browser using the Firebase Web SDK, secured by
`firestore.rules`. Hosting is **Firebase Hosting**, free (Spark) plan.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Everything works without Firebase configured — the guestbook just
shows a "not configured yet" notice and stays read-only until you add your Firebase keys (step 2).

## 2. Set up Firebase (free Spark plan — no credit card needed)

1. Go to https://console.firebase.google.com → **Add project** (Google Analytics optional, skip it).
2. In the project, go to **Build → Firestore Database → Create database** → start in **production
   mode** → pick any region.
3. Go to **Project settings → General → Your apps → Web app (</>together icon)** → register an app
   (no Hosting setup needed here, you'll do that via CLI). Copy the `firebaseConfig` values.
4. Create `.env.local` (copy `.env.example`) and paste those values in as
   `NEXT_PUBLIC_FIREBASE_*`. These are safe to expose publicly — Firebase web config isn't a
   secret; `firestore.rules` is what actually protects your data.
5. Deploy the security rules in `firestore.rules` (already written for you — validated,
   append-only guestbook entries, no reads/writes to anything else):
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase use --add           # pick your project, or copy .firebaserc.example -> .firebaserc
   firebase deploy --only firestore:rules
   ```

Restart `npm run dev` after adding `.env.local` — the guestbook will now read/write for real.

## 3. Deploy to Firebase Hosting (free)

```bash
npm run build        # generates the static site into ./out
firebase deploy --only hosting
```

Your site goes live at `https://<your-project-id>.web.app`. Re-run those two commands any time you
update content.

*(First time only: `firebase init hosting` if you haven't run `firebase use --add` yet, and answer
"out" as the public directory, "Yes" to single-page rewrite = **No** since this is a static
multi-page export, not a SPA.)*

## Sound effects

All sounds in `lib/sound.js` are synthesized on the fly with the Web Audio API — no `.mp3`/`.wav`
files, nothing to license or host:
- **Startup chime** — plays once when you click "Click to power on" on the desktop (browsers
  block audio before a user gesture, so this doubles as your boot screen).
- **Click** — every button and link in the app plays a short click automatically
  (`components/SoundProvider.js` does this globally via event delegation — you don't need to wire
  it per-component).
- **Terminal open** — a little whir/chime when the Terminal page mounts.
- **Enter** — a key-beep every time you submit a terminal command.
- A mute toggle (speaker icon, top-right of the menu bar) persists via `localStorage`.

## Buttons that actually do something

- Menu bar **File/Edit/View/Special** open real (if decorative) dropdown menus; **Special →
  Restart** and the power icon → **Shut Down** confirm dialog both reload the "OS".
  **Settings gear** opens an "About This Mac" panel.
- Desktop **Cancel** dismisses the welcome dialog (a "Show Welcome" button reappears to bring it
  back); **OK** goes to Projects.
- **Skills** page tabs switch skill groups live.
- **Projects** "Repo Link" opens the real URL in a new tab, or shows a friendly toast if you
  haven't set one yet in `lib/data.js`.
- **Guestbook** Cancel clears the form; Submit writes to Firestore and the list refreshes.
- **Terminal** runs real commands (`help`, `about`, `projects`, `skills`, `experience`, `contact`,
  `clear`).

## Editing content

Everything text-based (name, bio, projects, experience, skills, certifications, nav) lives in
`lib/data.js` — no component code needs to change for normal updates.
