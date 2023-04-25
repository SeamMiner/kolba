const tags = <const>["best", "mobile", "web", "arts", "posters", "other"]

const subtags = <const>['logos', 'polygraphy', 'cassette', 'different']

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
  dodui2023: {
    title_key: "dodui2023",
    image: "dodui2023",
    tags: ["other"],
    subtags: ['cassette'],
    info: {
      type: "Cassette",
      date: new Date('2023-03')
    }
  },
  dodui2022: {
    title_key: "dodui2022",
    image: "dodui2022",
    tags: ["other"],
    subtags: ['cassette'],
    info: {
      type: "Cassette",
      date: new Date('2022-03')
    }
  },
  pp2: {
    title_key: "pp2",
    image: "pp2",
    tags: ["posters", "best"],
    info: {
      type: "Poster",
      date: new Date('2023-03')
    }
  },
  pp1: {
    title_key: "pp1",
    image: "ppf1",
    tags: ["posters"],
    info: {
      type: "Poster",
      date: new Date('2023-01')
    }
  },
  cum: {
    title_key: "cum",
    image: "cum",
    tags: ["posters"],
    info: {
      type: "Poster",
      date: new Date('2022-12')
    }
  },
  ghost_dog: {
    title_key: "ghost_dog",
    image: "ghost_dog",
    tags: ["posters"],
    info: {
      type: "Poster",
      date: new Date('2021-10')
    }
  },
  zombi: {
    title_key: "zombi",
    image: "zombi",
    tags: ["posters"],
    info: {
      type: "Poster",
      date: new Date('2020-08')
    }
  },
  uretra: {
    title_key: "uretra",
    image: "uretra",
    tags: ["other", "best"],
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
    info: {
      type: "Logo",
      date: new Date('2022-11')
    }
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
  women: {
    title_key: "women",
    image: "women",
    tags: ["best", "web"],
    info: {
      type: "Web-design",
      date: new Date('2023-02-01'),
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
      type: "Mobile",
      date: new Date('2022-12-01')
    }
  },

  
  game: {
    title_key: "game",
    image: "game",
    tags: ["best", "arts"],
    info: {
      type: "Art",
      date: new Date('2022-10')
    }
  },
  
  casio: {
    title_key: "cassio",
    image: "casio",
    tags: ["web"],
    info: {
      type: "Web-design",
      date: new Date('2023-01')
    }
  },
  transport_co: {
    title_key: "transport_co",
    image: "transport_co",
    tags: ["web"],
    info: {
      type: "Web",
      date: new Date('2022-12')
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
    subtags: ['cassette'],
    info: {
      type: "Cassette",
      date: new Date('2021-07')
    }
  },
} as {
  [project: string]: Project
}

export { projects, tags, subtags }
