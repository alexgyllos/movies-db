use movies_hub;
db.dropDatabase();

db.movies.insertMany([
  {
    title: "Pulp Fiction",
    genre: "Crime",
    rating: 18,
    release_date: 1994,
    runtime: "2:58",
    crew: {
      director: "Quentin Tarantino",
      producer: "Stacey Sher"
    },
    plot: "Vincent Vega and Jules Winnfield are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace; his actress wife, Mia; struggling boxer Butch Coolidge; master fixer Winston Wolfe and a nervous pair of armed robbers, 'Pumpkin' and 'Honey Bunny'."
  },
  {
    title: "Fight Club",
    genre: "Drama",
    rating: 18,
    release_date: 1999,
    runtime: "2:31",
    crew: {
      director: "David Fincher",
      producer: "Art Linson"
    },
    plot: "Rule 1 of Fight Club is we never talk about Fight Club."
  }
]);
