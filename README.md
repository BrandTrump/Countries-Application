# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Links

- Live Site URL: [live site](https://countries-application-rosy.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind](https://tailwindcss.com/docs/guides/nextjs) - For styles
- [HeadlessUI](https://headlessui.com/)

### What I learned

Nextjs 13 server actions - used for searching the API response for country names.

```js
async function search(search: string) {
    "use server";
    const data = await fetchAllCountries();

    return data.filter((country: Country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
  }
```

### Continued development

Add pagination

### Useful resources

- [Server Actions](https://www.youtube.com/watch?v=W6V91VeghjI&t=557s) - This helped me understand server actions. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Brandon Trump](https://www.brandontrump.dev)
- Frontend Mentor - [@BrandTrump](https://www.frontendmentor.io/profile/BrandTrump)
