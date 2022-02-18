export {};

// pick
// 型をいざ使おうと思ったとき必要なメンバがnameとweightだけだった場合に使用
type DetailProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailProfile, 'name' | 'weight'>;

// omit  除外する
type SmallProfile = Omit<DetailProfile, 'height'>;
