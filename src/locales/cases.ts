const tags = <const>["best",  "web", "mobile", "posters", "arts", "other"]

const subtags = <const>['logos', 'cassette', 'polygraphy', 'different']

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
  
  prostor2023: {
    title_key: "prostor2023",
    image: "prostor2023/card.png",
    thumbnail: "prostor2023/view.png",
    tags: ["best", "other"],
    subtags: ['different'],
    info: {
      type: "Education",
      date: new Date('2023-04-01'),
    }
  },

  ppf3: {
    title_key: "ppf3",
    image: "ppf3/card.png",
    thumbnail: "ppf3/view.png",
    tags: ["posters"],
    info: {
      type: "Poster",
      date: new Date('2023-06-01'),
    }
  },

  women: {
    title_key: "women",
    image: "women/card.png",
    thumbnail: "women/view.png",
    tags: ["best", "web"],
    info: {
      type: "Web-design",
      date: new Date('2023-02-01'),
    }
  },
  
  casio: {
    title_key: "cassio",
    image: "casio/card.png",
    thumbnail: "casio/view.png",
    tags: ["web"],
    info: {
      type: "Web-design",
      date: new Date('2023-01')
    }
  },
  ice_caves: {
    title_key: "ice_caves",
    image: "ice_caves/card.png",
    thumbnail: "ice_caves/view.png",
    tags: ["web", "best"],
    info: {
      type: "Web-design",
      date: new Date('2023-01')
    }
  },
  transport_co: {
    title_key: "transport_co",
    image: "transport_co/card.png",
    thumbnail: "transport_co/view.png",
    tags: ["web"],
    info: {
      type: "Web",
      date: new Date('2022-12')
    }
  },
  myplants: {
    title_key: "myplants",
    image: "myplants/card.png",
    thumbnail: "myplants/view.png",
    tags: ["best", "mobile"],
    info: {
      type: "Mobile",
      date: new Date('2023-03'),
    }
  },
  vkusvill: {
    title_key: "vv",
    image: "vkusvill/card.png",
    thumbnail: "vkusvill/view.png",
    tags: ["mobile"],
    info: {
      type: "Mobile",
      date: new Date('2022-06')
    }
  },
  confectionery: {
    title_key: "confectionery",
    image: "confectionery/card.png",
    thumbnail: "confectionery/view.png",
    tags: ["web"],
    info: {
      type: "Web",
      date: new Date('2019-11')
    }
  },
  dodui2023: {
    title_key: "dodui2023",
    image: "dodui2023/card.png",
    thumbnail: "dodui2023/view.png",
    tags: ["other"],
    subtags: ['cassette'],
    info: {
      type: "Cassette",
      date: new Date('2023-03')
    }
  },
  dodui2022: {
    title_key: "dodui2022",
    image: "dodui2022/card.png",
    thumbnail: "dodui2022/view.png",
    tags: ["other"],
    subtags: ['cassette'],
    info: {
      type: "Cassette",
      date: new Date('2022-03')
    }
  },
  pp2: {
    title_key: "pp2",
    image: "pp2/card.png",
    thumbnail: "pp2/view.png",
    tags: ["posters", "best"],
    info: {
      type: "Poster",
      date: new Date('2023-03')
    }
  },
  pp1: {
    title_key: "pp1",
    image: "ppf1/card.png",
    thumbnail: "ppf1/view.png",
    tags: ["posters"],
    info: {
      type: "Poster",
      date: new Date('2023-01')
    }
  },
  cum: {
    title_key: "cum",
    image: "cum/card.png",
    thumbnail: "cum/view.png",
    tags: ["posters"],
    info: {
      type: "Poster",
      date: new Date('2022-12')
    }
  },
  ghost_dog: {
    title_key: "ghost_dog",
    thumbnail: "ghost_dog/view.png",
    image: "ghost_dog/card.png",
    tags: ["posters"],
    info: {
      type: "Poster",
      date: new Date('2021-10')
    }
  },
  zombi: {
    title_key: "zombi",
    image: "zombi/card.png",
    thumbnail: "zombi/view.png",
    tags: ["posters"],
    info: {
      type: "Poster",
      date: new Date('2020-08')
    }
  },
  uretra: {
    title_key: "uretra",
    image: "uretra/card.png",
    thumbnail: "uretra/view.png",
    tags: ["other", "best"],
    subtags: ['logos'],
    info: {
      type: "Logo",
      date: new Date('2020-06')
    }
  },
  honey: {
    title_key: "honey",
    image: "honey/card.png",
    thumbnail: "honey/view.png",
    tags: ["best", "other"],
    subtags: ['logos'],
    info: {
      type: "Logo",
      date: new Date('2022-11')
    }
  },
  
  disthymia: {
    title_key: "disthymia",
    image: "disthymia/card.png",
    thumbnail: "disthymia/view.png",
    tags: ["other"],
    subtags: ['logos'],
    info: {
      type: "Logo",
      date: new Date('2020-07')
    }
  },

  mfa: {
    title_key: "mfa",
    image: "mfa/card.png",
    thumbnail: "mfa/view.png",
    tags: ["other"],
    subtags: ['logos'],
    info: {
      type: "Logo",
      date: new Date('2020-04')
    }
  },
  brain_wash: {
    title_key: "brain_wash",
    image: "brain_wash/card.png",
    thumbnail: "brain_wash/view.png",
    tags: ["other"],
    subtags: ['logos'],
    info: {
      type: "Logo",
      date: new Date('2020-08')
    }
  },
  
  game: {
    title_key: "game",
    image: "game/card.png",
    thumbnail: "game/view.png",
    tags: ["best", "arts"],
    info: {
      type: "Art",
      date: new Date('2022-10')
    }
  }, 
  cocktail: {
    title_key: "cocktail",
    image: "cocktail/card.png",
    thumbnail: "cocktail/view.png",
    tags: ["best", "other"],
    subtags: ['polygraphy'],
    info: {
      type: "Polygraphy",
      date: new Date('2023-01')
    }
  },
  menu: {
    title_key: "menu",
    image: "menu/card.png",
    thumbnail: "menu/view.png",
    tags: ["other"],
    subtags: ['polygraphy'],
    info: {
      type: "Polygraphy",
      date: new Date('2022-11')
    }
  },
  dodui: {
    title_key: "dodui",
    image: "dodui/card.png",
    thumbnail: "dodui/view.png",
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
