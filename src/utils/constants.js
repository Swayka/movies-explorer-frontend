const movies = [
    {
      id: 1,
      name: "Фильм 1",
      duration:  "1ч42м",
      link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
    },
    {
      id: 2,
      name: "Фильм 2",
      duration:  "1ч42м",
      link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
    },
    { 
      id: 3,  
      name: "Фильм 3",
      duration:  "1ч42м",
      link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
    },
    {
      id: 4, 
      name: "Фильм 4",
      duration:  "1ч42м",
      link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
    },
    {
      id: 5, 
      name: "Фильм 5",
      duration:  "1ч42м",
      link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
      
    },
    {
      id: 6,
      name: "Фильм 6",
      duration:  "1ч42м",
      link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
    },
    {
      id: 7,
      name: "Фильм 7",
      duration:  "1ч42м",
      link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
    },
    {
      id: 8,
      name: "Фильм 8",
      duration:  "1ч42м",
      link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
    },
    {
      id: 9,
      name: "Фильм 9",
      duration:  "1ч42м",
      link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
    },
    {
        id: 10,
        name: "Фильм 10",
        duration:  "1ч42м",
        link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
      },
      {
        id: 11, 
        name: "Фильм 11",
        duration:  "1ч42м",
        link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
        
      },
      {
        id: 12,
        name: "Фильм 12",
        duration:  "1ч42м",
        link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
      },
      {
        id: 13,
        name: "Фильм 13",
        duration:  "1ч42м",
        link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
      },
      {
        id: 14,
        name: "Фильм 14",
        duration:  "1ч42м",
        link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
      },
      {
        id: 15,
        name: "Фильм 15",
        duration:  "1ч42м",
        link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
      },
      {
          id: 16,
          name: "Фильм 16",
          duration:  "1ч42м",
          link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
        },
];

const savedmovies = [
    {
      id: 1111,
      name: "Фильм 1",
      duration:  "1ч42м",
      link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
    },
    {
      id: 2222,
      name: "Фильм 3",
      duration:  "1ч42м",
      link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
    },
    {
      id: 3333,
      name: "Фильм 6",
      duration:  "1ч42м",
      link:  "https://sun9-56.userapi.com/impg/gcNT916kAJHlLPZmEcMpX6LVQIvRY5oaV7eyQA/JdPdqIamN8o.jpg?size=1280x1024&quality=96&sign=b30a693f332047d1f1210072909989f2&c_uniq_tag=84G-gniy6VezZyi0DdPv-7rgz1xwJyTakzzaByoJSRU&type=album",
    },
];

export {movies, savedmovies};