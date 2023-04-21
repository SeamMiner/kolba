const tags = <const>["best", "mobile", "web", "arts", "other"]

const subtags = <const>['logos', 'posters', 'polygraphy', 'cassette']

type Project = {
  title_key: string,
  image: string,
  tags: typeof tags[number][],
  info?: {
    type: string,
    date: Date
  },
  subtags?: typeof subtags[number][]
}

const projects = {
  uretra: {
    title_key: "uretra",
    image: "uretra",
    tags: ["other", "best"],
    subtags: ['logos']
    info: {
      type: "Logo",
      date: new Date('2020-06')
    },
  ice_caves: {
    title_key: "ice_caves",
    image: "ice_caves",
    tags: ["web", "best"],
    info: {
      type: "Web-design",
      date: new Date('2023-01')
    }
  },
  vkusvill: {
    title_key: "vv",
    image: "vkusvill",
    tags: ["best", "mobile"],
    info: {
      type: "Web-design",
      date: new Date('2022-12-01')
    }
  },
  casio: {
    title_key: "cassio",
    image: "casio",
    tags: ["best", "web"],
  },
  honey: {
    title_key: "honey",
    image: "honey",
    tags: ["best"],
  },
  game: {
    title_key: "game",
    image: "game",
    tags: ["best", "mobile"],
  },
  women: {
    title_key: "women",
    image: "women",
    tags: ["best", "web"],
    info: {
      type: "Web-design",
      date: new Date('2022-12-01'),
      landing: "Online clothes store",
    }
  },
  cocktail: {
    title_key: "cocktail",
    image: "cocktail",
    tags: ["best", "arts"],
  },
  dodui: {
    title_key: "dodui",
    image: "dodui",
    tags: ["best", "other"],
    subtags: ['cassette']
  },
} as {
  [project: string]: Project
}

export { projects, tags, subtags }
