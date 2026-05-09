import { useMemo, useState } from "react";
import { QUESTIONS } from "./data/questions";
import { TYPE_INFO } from "./data/typeInfo";

type Phase = "intro" | "quiz" | "result";

type Scores = {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
};

const initialScores = (): Scores => ({
  E: 0,
  I: 0,
  S: 0,
  N: 0,
  T: 0,
  F: 0,
  J: 0,
  P: 0,
});

function scoresFromChoices(choices: ("A" | "B" | null)[]): Scores {
  const s = initialScores();
  choices.forEach((choice, i) => {
    if (choice === null) return;
    const q = QUESTIONS[i];
    const letter = choice === "A" ? q.optionA.letter : q.optionB.letter;
    s[letter]++;
  });
  return s;
}

function computeType(scores: Scores): string {
  const e = scores.E >= scores.I ? "E" : "I";
  const s = scores.S >= scores.N ? "S" : "N";
  const t = scores.T >= scores.F ? "T" : "F";
  const j = scores.J >= scores.P ? "J" : "P";
  return `${e}${s}${t}${j}`;
}

export default function App() {
  const total = QUESTIONS.length;
  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [choices, setChoices] = useState<("A" | "B" | null)[]>(() =>
    Array.from({ length: total }, () => null)
  );

  const scores = useMemo(() => scoresFromChoices(choices), [choices]);
  const current = QUESTIONS[index];
  const progressPct =
    phase === "quiz" ? Math.round((index / total) * 100) : 100;

  const resultCode = useMemo(() => computeType(scores), [scores]);
  const resultInfo = TYPE_INFO[resultCode];

  function start() {
    setChoices(Array.from({ length: total }, () => null));
    setIndex(0);
    setPhase("quiz");
  }

  function choose(side: "A" | "B") {
    setChoices((prev) => {
      const next = [...prev];
      next[index] = side;
      return next;
    });

    if (index + 1 >= total) {
      setPhase("result");
      return;
    }
    setIndex((i) => i + 1);
  }

  function back() {
    if (index === 0) {
      setPhase("intro");
      setChoices(Array.from({ length: total }, () => null));
      return;
    }
    setChoices((prev) => {
      const next = [...prev];
      next[index - 1] = null;
      return next;
    });
    setIndex((i) => i - 1);
  }

  return (
    <div className="app">
      <div className="shell">
        <header className="brand">
          <h1>MBTI 성향 체크</h1>
          <p>12개 문항으로 네 가지 성향을 간단히 살펴봅니다.</p>
        </header>

        {phase === "intro" && (
          <div className="card">
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>
              각 질문에 가장 가깝다고 느끼는 쪽을 고르세요. 정답은 없으며, 지금의
              느낌으로 선택하면 됩니다.
            </p>
            <div className="intro-actions">
              <button type="button" className="btn btn-primary btn-block" onClick={start}>
                시작하기
              </button>
            </div>
            <p className="disclaimer" style={{ borderTop: "none", paddingTop: "1rem" }}>
              본 서비스는 재미와 자기 이해를 위한 간이 체크이며, 임상·고용 등 공식
              목적의 검사를 대체하지 않습니다.
            </p>
          </div>
        )}

        {phase === "quiz" && current && (
          <div className="card">
            <div className="progress-wrap">
              <div className="progress-meta">
                <span>
                  질문 {index + 1} / {total}
                </span>
                <span>{progressPct}%</span>
              </div>
              <div className="progress-bar" aria-hidden>
                <div
                  className="progress-fill"
                  style={{ width: `${(index / total) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="question-title">{current.prompt}</h2>
            <div className="options">
              <button
                type="button"
                className="option-btn"
                onClick={() => choose("A")}
              >
                {current.optionA.label}
              </button>
              <button
                type="button"
                className="option-btn"
                onClick={() => choose("B")}
              >
                {current.optionB.label}
              </button>
            </div>

            <div className="quiz-footer">
              <button type="button" className="btn btn-ghost" onClick={back}>
                이전
              </button>
              <span className="muted">선택하면 다음으로 넘어갑니다</span>
            </div>
          </div>
        )}

        {phase === "result" && (
          <div className="card">
            <div className="progress-wrap">
              <div className="progress-meta">
                <span>완료</span>
                <span>100%</span>
              </div>
              <div className="progress-bar" aria-hidden>
                <div className="progress-fill" style={{ width: "100%" }} />
              </div>
            </div>

            <div className="result-type">
              <span className="result-code">{resultCode}</span>
              <span className="result-title">{resultInfo.title}</span>
            </div>
            <p className="result-summary">{resultInfo.summary}</p>
            <ul className="trait-list">
              {resultInfo.traits.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <button type="button" className="btn btn-primary btn-block" onClick={start}>
              다시 하기
            </button>
            <p className="disclaimer">
              동점이면 앞 글자(E, S, T, J) 쪽으로 계산됩니다. 참고용으로만
              활용해 주세요.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
