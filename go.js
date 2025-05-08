const y25 = new Date().getFullYear()
const yearS = new Date(`${y25}-01-01T00:00:00+00:00`).getTime()
const yearE = new Date(`${y25}-12-31T23:59:59+00:00`).getTime()
const proportion = (Date.now() - yearS) / (yearE - yearS)


const makeBar = () => {

    const N = 32
    const idx = parseInt(proportion * N)
    const bar = '@'.repeat(idx) + ' •'.repeat(N - idx)
    return `:: ${bar} ::`
}


const bar = makeBar()

const README = `\
# <p align="center">Go Slow, and Fix Things.</p>


## ⌛ &nbsp; Year progress bar 

- ２Ｏ２５ ${bar} ${(proportion * 100).toFixed(2)} %

<img style='display: block; margin-left: auto; margin-right: margin-right: auto; width: 50%;' src='https://github-readme-stats.vercel.app/api/top-langs/?username=nuoxoxo&layout=compact&hide=roff&langs_count=10'> \


## 🚴‍♂️ &nbsp; Currently working on:

***Snow Crash***
  - [solutions](https://github.com/nuoxoxo/snowcrash) 
  - [speedrun](https://github.com/nuoxoxo/snowcrash_speedrun) 

***AquaQ Challenge Hub*** 
  - [solutions](https://github.com/nuoxoxo/aquaq_challenge_hub) in Go - _finished **40/40**_
  - [aquaq](https://challenges.aquaq.co.uk/) site

***AquaQ Challenge Hub*** 
  - [solutions](https://github.com/nuoxoxo/codyssi) in Go - _incomplete **39/40**_
  - [codyssi](https://www.codyssi.com/challenge_set_2) - Codyssi's 2025 Contest Round

***Pythonchallenge*** 
  - [solutions](https://github.com/nuoxoxo/pythonlibrarychallenge-in-go) - _completed all 33 levels_
  - [site](https://www.pythonchallenge.com/) 


## 🎯 &nbsp; Recent assignments

Here's a showcase of recent projects that I've developed to tackle various tech interview tasks
- ***[AssemblyLine](https://nuoxoxo.github.io/interview_react_assembly_line)*** - Assembly line demo 
- ***[Live search](https://nuoxoxo.github.io/interview_react_search_filter)*** - A dynamic search filter 
- ***[Confirmation](https://nuoxoxo.github.io/interview_react_confirmation_component)*** - Button set featuring notification bars _(notistack/snackbar)_


## 🎨 &nbsp; Get to know me with these sites

- ***[Blog](https://geocities-nine.vercel.app)***
  - The place where I discuss _stuff_
  - \`Next.js\` \`Dynamic Routes\` \`React Native\` \`MDX Renderer\` \`Sass\` 
- ***[Gig](https://nuoxoxo.github.io/gig)***
  - Visual representations of Advent of Code outputs
  - \`React Native\` \`React Router\` \`Sass\` \`Dynamic programming\` & various algorithms
- ***[Dmd](https://nuoxoxo.github.io/dmd)***
  - Guess the *WeekDay* based on a given date
  - \`React Native\` \`React Router\` using John Conway's doomsday algorithm
- ***[Epoch](https://nuoxoxo.github.io/epoch)***
  - A simple _\`Age\`_ clock
  - Get your own countdown with a \`#\` : *https://nuoxoxo.github.io/epoch/#2025-12-25*
- ***[Words and Expressions](https://nuoxoxo.github.io/words_and_expressions)***
  - Help a friend learn Chinese 
- ***[Ranch](https://nuoxoxo.github.io/ranch)***
  - Simple CSS playground for experiments  


## 🧩 &nbsp; Long-term projects and codebases

- ***[LeetCode](https://github.com/nuoxoxo/leetcode)***
  - LeetCode isn't a goal; it's a stepping stone toward achieving your goals. I keep these for the pure sake of keeping, documenting my journey through algorithmic challenges and continuous improvement. Currently the repo amounts to 2500+ code snippets covering over 800 problems.
  - \`C++\` \`Go\` \`Python3\` \`TS/JS\` \`C\`
- ***[Advent of Code](https://github.com/nuoxoxo/advent-of-code)***
  - My solutions for Advent of Code challenges spanning 2015 - 2023 🌟🎄
  - \`C++\` \`Python3\` \`TypeScript\` \`Go\` \`C\`
- ***[Cryptopals](https://cryptopals.com/)***
  - A Set of Crypto Challenges
  - My [solutions](https://github.com/nuoxoxo/cryptopals) 
- ***[Hanukkah of Data](https://github.com/nuoxoxo/hanukkah-of-data)***
  - Writeups / solutions for _[Noah's Rug - 5784](https://hanukkah.bluebird.sh/)_ involving data probing and analytics, akin to a detective's investigation.
  - \`Jupyter Notebook\` 
- ***[Coding Quest](https://github.com/nuoxoxo/coding-quest)***
  - Solutions for _[codingquest.io](https://codingquest.io/)_ over the past 3 years, providing insights into my problem-solving approach.
  - \`Python\` \`Go\` and the intriguingly powerful \`Bash\` & \`AWK\`
- ***[April Fools 2O23](https://github.com/nuoxoxo/april_event_2O23)***
  - Solutions for April Fools Event @ 42 worldwide, Collaborating with some of my favorite colleagues made it an unforgettable time.
  - \`Perl\` \`PHP\` \`C++\` \`TypeScript\` 
- More ***[projects](https://github.com/nuoxoxo?tab=repositories)*** using \`Astro\` \`Deno\` \`Vanilla JavaScript\`  etc

---

![](https://github.com/nuoxoxo/nuoxoxo/blob/main/.github/assets/github-contribution-grid-snake.svg)

<!-- <img src='https://deno.com/images/artwork/HypnoDeno.gif?__frsh_c=dad2' width='50%'/> --> \

\
`


console.log(README)
