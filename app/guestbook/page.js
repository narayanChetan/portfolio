'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import MenuBar from '@/components/MenuBar';
import { db, firebaseReady } from '@/lib/firebase';
import { playClickAlt } from '@/lib/sound';

export default function GuestbookPage() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | error

  async function load() {
    if (!firebaseReady) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const { collection, query, orderBy, limit, getDocs } = await import('firebase/firestore');
      const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'), limit(50));
      const snap = await getDocs(q);
      setEntries(
        snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
          createdAt: d.data().createdAt?.toDate?.().toISOString() ?? null,
        }))
      );
      setLoadError(false);
    } catch (err) {
      console.error(err);
      setLoadError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function submit(e) {
    e.preventDefault();
    if (!name.trim() || !message.trim() || !firebaseReady) return;
    setStatus('sending');
    try {
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
      await addDoc(collection(db, 'guestbook'), {
        name: name.trim().slice(0, 60),
        rating: Math.min(5, Math.max(1, Number(rating) || 5)),
        message: message.trim().slice(0, 500),
        createdAt: serverTimestamp(),
      });
      setName('');
      setMessage('');
      setRating(5);
      setStatus('idle');
      load();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <div className="h-screen flex flex-col desktop-bg-dark">
      <MenuBar dark />
      <div className="flex-1 overflow-y-auto p-2 md:p-8 flex justify-center">
        <div className="w-full max-w-2xl bevel-out-dark bg-[#0e0e0e] h-fit">
          <div className="relative h-6 flex items-center justify-center speed-lines-dark">
            <Link href="/" className="absolute left-1.5 w-3.5 h-3.5 btn-3d-dark" aria-label="Close" />
            <span className="relative bg-[#1c1b1b] px-2 font-grotesk font-bold text-[13px] text-[#e5e2e1] flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">reviews</span>
              Review Panel
            </span>
          </div>

          <div className="p-5 text-[#e5e2e1]">
            <h2 className="font-grotesk font-bold text-[20px] mb-1">System Feedback</h2>
            <p className="font-body text-[13px] text-[#c4c7c7] mb-5">
              Please submit your operational log review for terminal processing.
            </p>

            {!firebaseReady && (
              <div className="bevel-in-dark bg-[#1c1b1b] p-2 mb-4 font-mono text-[11px] text-[#ffb300]">
                Firebase isn&apos;t configured yet (missing NEXT_PUBLIC_FIREBASE_* env vars), so the
                guestbook is read-only in this preview. Add your Firebase project keys to .env.local —
                see README.md.
              </div>
            )}
            {firebaseReady && loadError && (
              <div className="bevel-in-dark bg-[#1c1b1b] p-2 mb-4 font-mono text-[11px] text-[#ffb4ab]">
                Couldn&apos;t load entries — check your Firestore security rules allow reads on
                &quot;guestbook&quot;.
              </div>
            )}

            <form onSubmit={submit} className="space-y-4 mb-6">
              <div>
                <label className="block font-mono text-[12px] mb-1">Operator ID / Name:</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={60}
                  required
                  disabled={!firebaseReady}
                  className="w-full bevel-in-dark bg-[#1c1b1b] px-2 py-1.5 font-body text-[14px] text-[#e5e2e1] outline-none disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block font-mono text-[12px] mb-1">Performance Rating:</label>
                <div className="flex gap-1" id="star-rating">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      type="button"
                      key={n}
                      disabled={!firebaseReady}
                      onMouseEnter={() => setHoverRating(n)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(n)}
                      className="material-symbols-outlined text-[24px] leading-none disabled:opacity-50"
                      style={{
                        fontVariationSettings: (hoverRating || rating) >= n ? "'FILL' 1" : "'FILL' 0",
                        color: (hoverRating || rating) >= n ? '#ffb300' : '#8e9192',
                      }}
                    >
                      star
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-mono text-[12px] mb-1">Diagnostic Comments:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={500}
                  required
                  rows={4}
                  disabled={!firebaseReady}
                  className="w-full bevel-in-dark bg-[#1c1b1b] px-2 py-1.5 font-body text-[14px] text-[#e5e2e1] outline-none resize-none disabled:opacity-50"
                />
              </div>
              {status === 'error' && (
                <div className="font-mono text-[12px] text-[#ffb4ab]">Submission failed. Try again.</div>
              )}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    playClickAlt();
                    setName('');
                    setMessage('');
                    setRating(5);
                  }}
                  className="btn-3d-dark px-4 py-1.5 font-grotesk text-[13px] font-bold text-[#e5e2e1]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === 'sending' || !firebaseReady}
                  className="btn-3d-dark px-4 py-1.5 font-grotesk text-[13px] font-bold text-[#e5e2e1] disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : 'Submit Log'}
                </button>
              </div>
            </form>

            <div className="border-t border-[#454545] pt-4">
              <h3 className="font-grotesk font-bold text-[14px] mb-3">Recent Logs ({entries.length})</h3>
              {loading ? (
                <div className="font-mono text-[12px] text-[#8e9192]">Loading...</div>
              ) : entries.length === 0 ? (
                <div className="font-mono text-[12px] text-[#8e9192]">No entries yet. Be the first.</div>
              ) : (
                <div className="space-y-3">
                  {entries.map((e) => (
                    <div key={e.id} className="bevel-in-dark bg-[#1c1b1b] p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-grotesk font-bold text-[13px]">{e.name}</span>
                        <span className="font-mono text-[11px] text-[#8e9192]">
                          {'★'.repeat(e.rating)}
                          {'☆'.repeat(5 - e.rating)}
                        </span>
                      </div>
                      <p className="font-body text-[13px] text-[#d1d1d1] whitespace-pre-wrap">{e.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
