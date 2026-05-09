export type Axis = "EI" | "SN" | "TF" | "JP";

export type Question = {
  id: number;
  axis: Axis;
  prompt: string;
  optionA: { label: string; letter: "E" | "S" | "T" | "J" };
  optionB: { label: string; letter: "I" | "N" | "F" | "P" };
};

/** 각 축당 3문항, 총 12문항 */
export const QUESTIONS: Question[] = [
  {
    id: 1,
    axis: "EI",
    prompt: "주말에 에너지를 채우는 방법은?",
    optionA: { label: "사람들과 만나서 활동한다", letter: "E" },
    optionB: { label: "혼자 조용히 쉰다", letter: "I" },
  },
  {
    id: 2,
    axis: "EI",
    prompt: "새로운 사람을 만날 때 나는?",
    optionA: { label: "먼저 말을 걸고 분위기를 만든다", letter: "E" },
    optionB: { label: "상대가 말하면 편하게 응한다", letter: "I" },
  },
  {
    id: 3,
    axis: "EI",
    prompt: "생각을 정리할 때 더 편한 방식은?",
    optionA: { label: "말로 이야기하며 정리한다", letter: "E" },
    optionB: { label: "머릿속으로 곱씹는다", letter: "I" },
  },
  {
    id: 4,
    axis: "SN",
    prompt: "일을 시작할 때 더 중요한 것은?",
    optionA: { label: "지금 당장 필요한 사실과 경험", letter: "S" },
    optionB: { label: "가능성과 전체 그림", letter: "N" },
  },
  {
    id: 5,
    axis: "SN",
    prompt: "설명을 들을 때 더 끌리는 것은?",
    optionA: { label: "구체적인 예시와 단계", letter: "S" },
    optionB: { label: "비유와 큰 흐름", letter: "N" },
  },
  {
    id: 6,
    axis: "SN",
    prompt: "문제를 볼 때 나는?",
    optionA: { label: "지금 보이는 것에 집중한다", letter: "S" },
    optionB: { label: "앞으로 어떻게 될지 상상한다", letter: "N" },
  },
  {
    id: 7,
    axis: "TF",
    prompt: "갈등이 생겼을 때 우선하는 것은?",
    optionA: { label: "논리와 공정함", letter: "T" },
    optionB: { label: "관계와 감정", letter: "F" },
  },
  {
    id: 8,
    axis: "TF",
    prompt: "누군가 실수했을 때 나는?",
    optionA: { label: "원인과 개선점을 말한다", letter: "T" },
    optionB: { label: "기분을 먼저 살핀다", letter: "F" },
  },
  {
    id: 9,
    axis: "TF",
    prompt: "칭찬할 때 더 자연스러운 표현은?",
    optionA: { label: "결과와 역량을 구체적으로", letter: "T" },
    optionB: { label: "노력과 마음을 따뜻하게", letter: "F" },
  },
  {
    id: 10,
    axis: "JP",
    prompt: "일정을 잡을 때 나는?",
    optionA: { label: "미리 계획하고 지키려 한다", letter: "J" },
    optionB: { label: "상황에 맞춰 유연하게 움직인다", letter: "P" },
  },
  {
    id: 11,
    axis: "JP",
    prompt: "마감이 다가올 때 나는?",
    optionA: { label: "미리 끝내 두고 여유를 둔다", letter: "J" },
    optionB: { label: "임박하면 집중해서 처리한다", letter: "P" },
  },
  {
    id: 12,
    axis: "JP",
    prompt: "여행을 갈 때 나는?",
    optionA: { label: "코스와 시간을 짜는 편이다", letter: "J" },
    optionB: { label: "그날 기분에 맡기는 편이다", letter: "P" },
  },
];
