export {};

// record型
// ２つのジェネリクス型の硬引数を持つ特殊な型

// Record<K, T>  // K:ユニオン型の型を指定

// ユニオンで指定したそれぞれの要素に対して繰り返し（再帰的に）ある共通のデータ型を持たせたい
type Prefectures = 'Hyogo' | 'Kyoto' | 'Chiba' | 'Kobe';

type Covid19InfectionInfo = {
  kanji_name: string; // Prefectureを漢字で
  confirmed_cases: number; // 感染者数
};
// Record<K, T>  // K:型を渡したい要素たち
const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Hyogo: { kanji_name: '兵庫', confirmed_cases: 1000 },
  Kyoto: { kanji_name: '京都', confirmed_cases: 900 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 1200 },
  Kobe: { kanji_name: '神戸', confirmed_cases: 1 },
};
