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
    tags: ["other"],
    subtags: ['logos'],
    info: {
      type: "Logo",
      date: new Date('2020-06')
    }
  },
  honey: {
    title_key: "honey",
    image: "honey",
    tags: ["best", "other"],
    subtags: ['logos'],
  },
  
  disthymia: {
    title_key: "disthymia",
    image: "disthymia",
    tags: ["other"],
    subtags: ['logos'],
    info: {
      type: "Logo",
      date: new Date('2020-07')
    }
  },
  transport_co: {
    title_key: "transport_co",
    image: "transport_co",
    tags: ["web"],
    info: {
      type: "Web",
      date: new Date('2023-01')
    }
  },
  mfa: {
    title_key: "mfa",
    image: "mfa",
    tags: ["other"],
    subtags: ['logos'],
    info: {
      type: "Logo",
      date: new Date('2020-04')
    }
  },
  brain_wash: {
    title_key: "brain_wash",
    image: "brain_wash",
    tags: ["other"],
    subtags: ['logos'],
    info: {
      type: "Logo",
      date: new Date('2020-08')
    }
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
    tags: ["mobile"],
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
  
  game: {
    title_key: "game",
    image: "game",
    tags: ["best", "arts"],
  },
  women: {
    title_key: "women",
    image: "women",
    tags: ["best", "web"],
    info: {
      type: "Web-design",
      date: new Date('2022-12-01'),
    }
  },
  cocktail: {
    title_key: "cocktail",
    image: "cocktail",
    tags: ["best", "other"],
    subtags: ['polygraphy'],
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
