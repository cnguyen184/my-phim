export type Movie = {
  id: number;
  title: string;
  name?: string; // optional, nếu muốn dùng series
  poster_path: string;   // URL trực tiếp
  backdrop_path: string; // URL trực tiếp
  overview: string;
};