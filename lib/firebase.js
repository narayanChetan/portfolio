// ============================================================
// Firebase client init. This runs entirely in the browser — there
// is NO custom backend/server. The site is a static export, and
// the guestbook talks to Firestore directly using this SDK.
// Security is enforced by firestore.rules, not by server code.
//
// Fill in real values in .env.local (see .env.example) before
// building/deploying. These NEXT_PUBLIC_ values are safe to expose
// publicly — that's how Firebase web apps are designed to work.
// ============================================================

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const firebaseReady = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

let app;
let db;

if (firebaseReady) {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  db = getFirestore(app);
}

export { db };
