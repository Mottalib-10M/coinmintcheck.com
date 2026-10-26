/**
 * Coin grading quiz: one question at a time, immediate explanation, score. Only the best score is kept,
 * in this browser (localStorage); nothing is sent. First render = question 1, unanswered (§17.5).
 */
import { useEffect, useState } from 'react';
import { GRADING_QUIZ as Q } from '../../data/grading-quiz';
import { PRIVACY } from './fields';

const KEY = 'ucv-grading-best';
interface Props { primary?: boolean; idPrefix?: string }
export default function GradingQuiz({ primary = false, idPrefix = 'gq' }: Props) {
  const [i, setI] = useState(0);
  const [pick, setPick] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState<number | null>(null);
  useEffect(() => { try { const b = localStorage.getItem(KEY); if (b) setBest(Number(b)); } catch { /* private mode */ } }, []);
  const done = i >= Q.length;
  const item = Q[Math.min(i, Q.length - 1)];
  const answer = (k: number) => { if (pick !== null) return; setPick(k); if (k === item.answer) setScore((s) => s + 1); };
  const next = () => {
    const ni = i + 1;
    setI(ni); setPick(null);
    if (ni >= Q.length) { try { const b = Math.max(score, best ?? 0); localStorage.setItem(KEY, String(b)); setBest(b); } catch { /* ignore */ } }
  };
  const restart = () => { setI(0); setPick(null); setScore(0); };
  return (
    <div data-chrome className={`not-prose rounded-xl border border-accent-200 bg-white p-4 sm:p-5 ${primary ? 'my-2' : 'my-8'}`}>
      <div className="grid gap-5 lg:grid-cols-2">
        <form className="grid content-start gap-3" onSubmit={(e) => e.preventDefault()} {...(primary ? {} : { 'data-simulateur-secondaire': '' })}>
          {!done ? (
            <fieldset>
              <legend className="mb-2 text-base font-semibold text-navy-900">Question {i + 1} of {Q.length}: {item.q}</legend>
              <div className="grid gap-2">
                {item.choices.map((c, k) => {
                  const state = pick === null ? '' : k === item.answer ? 'border-emerald-500 bg-emerald-50' : k === pick ? 'border-red-400 bg-red-50' : 'opacity-70';
                  return (
                    <button key={k} id={`${idPrefix}-${i}-${k}`} type="button" aria-pressed={pick === k} onClick={() => answer(k)} className={`flex min-h-12 w-full cursor-pointer items-center gap-3 rounded-lg border border-navy-300 bg-white px-3 py-2 text-left text-navy-900 ${state}`}>
                      <span aria-hidden="true" className={`inline-block h-4 w-4 shrink-0 rounded-full border-2 ${pick === k ? 'border-accent-600 bg-accent-600' : 'border-navy-400'}`} />
                      <span>{c}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
          ) : (
            <div><p className="text-base font-semibold text-navy-900">Quiz finished</p><p className="mt-1 text-navy-700">Start again to review the explanations.</p></div>
          )}
          <div className="flex gap-3">
            {!done && <button type="button" onClick={next} disabled={pick === null} className="h-12 rounded-lg bg-accent-600 px-5 font-medium text-white disabled:opacity-40">{i + 1 < Q.length ? 'Next question' : 'See my score'}</button>}
            <button type="button" onClick={restart} className="h-12 rounded-lg border border-navy-300 px-5 font-medium text-navy-800">Start again</button>
          </div>
        </form>
        <div aria-live="polite" {...(primary ? { 'data-resultat': '' } : {})} className="rounded-lg bg-navy-50 p-4">
          <p className="text-sm font-medium text-navy-600">Your score</p>
          <p className="tabular-nums mt-1 text-3xl font-bold text-navy-900">{score} / {Q.length}</p>
          {pick !== null && !done && <p className="mt-3 text-sm text-navy-800"><strong>{pick === item.answer ? 'Right.' : 'Not quite.'}</strong> {item.why}</p>}
          {pick === null && !done && <p className="mt-3 text-sm text-navy-700">Pick an answer: the explanation appears here.</p>}
          {done && <p className="mt-3 text-sm text-navy-800">{score >= 8 ? 'You know what to look for before showing a coin to anyone.' : 'Read the guide below, then try again: each question has its explanation.'}</p>}
          {best !== null && <p className="mt-2 text-xs text-navy-600">Best score in this browser: {best} / {Q.length}</p>}
        </div>
      </div>
      <p className="mt-3 text-xs text-navy-500">{PRIVACY} Only your best score is kept, in this browser.</p>
    </div>
  );
}
