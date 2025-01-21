# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot

|        Mobile designed at 375px:         | Desktop designed at 1440px:               |
| :--------------------------------------: | ----------------------------------------- |
| ![](./screenshots/screenshot-mobile.png) | ![](./screenshots/screenshot-desktop.png) |

### Links

- Solution URL: [https://github.com/elisilk/bookmark-landing-page](https://github.com/elisilk/bookmark-landing-page)
- Live Site URL: [https://elisilk.github.io/bookmark-landing-page/](https://elisilk.github.io/bookmark-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- Accessibility
- [Tailwind CSS](https://tailwindcss.com/)

### What I learned

So many cool 😎 things.

The Frontend Mentor [Advanced CSS techniques](https://www.frontendmentor.io/learning-paths/advanced-css-techniques-vdOtKjIC4V) learning path, challenged me to select and use one of the three [CSS frameworks](https://www.frontendmentor.io/learning-paths/advanced-css-techniques-vdOtKjIC4V/steps/6747d0a9d54b5cb1dee3f399/article/read) they introduced (Bootstrap, Tailwind CSS, and Pure CSS). I hadn't worked with any of the frameworks before, so all would be new to me. But I ended up choosing to work with [Tailwind CSS](https://tailwindcss.com/), both because I wanted to get some exposure to a [utility-first approach](https://tailwindcss.com/docs/utility-first), and because I loved their [extensive and super-well-organized documentation](https://tailwindcss.com/docs/installation).

Here are some of the key resources I used:

- General Tailwind setup and use
  - [Get started with Tailwind CSS > Installation](https://tailwindcss.com/docs/installation) - The overall amazing documentation starts off great with this very clear explanation of how to get Tailwind up and running in your project. So nice!
  - [Tailwind > Typography > Font Family](https://tailwindcss.com/docs/font-family) - Especially as relates to [using custom fonts](https://tailwindcss.com/docs/font-family#using-custom-values).
  - [Tailwind > Customization > Configuration](https://tailwindcss.com/docs/configuration) - Definitely did some of this, with fonts, colors, shadows, font sizes, and grid templates. Not sure I used it perfectly as intended (or with all its capabilities), but I definitely found this useful.
  - [Tailwind CSS > Pseudo-elements > Before and after](https://tailwindcss.com/docs/hover-focus-and-other-states#before-and-after) - A nice example that uses a `span` element instead of a pseudo element to add a background behind some text. I modified this example to put the blue rounded pill shapes beind the illustration images, and I think it worked nicely. I also used a similar strategy for the icon error that comes up when the email form is invalid.
  - [Responsive Design](https://tailwindcss.com/docs/responsive-design)
  - [Padding](https://tailwindcss.com/docs/padding) - I looked at padding a lot just to get the correspondence between Tailwind's class names (numbers) and the pixel values (e.g., `p-4` = `padding: 1rem; /* 16px */`). And those same numbers can be used for margin and gap and things like that as well.
  - [How to use calc() in tailwind CSS?](https://stackoverflow.com/questions/65976223/how-to-use-calc-in-tailwind-css) - I do like how Tailwind allows you to put in "arbitrary" values, but sometimes you want something a little more, and so being able to utilize `calc` is also important, which I used a few times in this solution.
    - [How to use :not() in tailwind.css](https://stackoverflow.com/questions/61455473/how-to-use-not-in-tailwind-css) - Similarly for the [`:not()` pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)
- Mobile nav component
  - [Toggling the Navbar Links on Mobile](https://v1.tailwindcss.com/course/toggling-the-navbar-links-on-mobile)
- Slider component
  - [Using data attributes](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes) - I also relied on data attributes to help with the JavaScript and state changes involved in the slider.
  - [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) - I have been thinking about Interaction Observers for a little while, and I finally got around to implementing one in this solution. I use it to look for which of the slider slides is in view and then update the slider control buttons accordingly. I will definitely want to come back to this more, especially in thinking about more [scroll-driven animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll-driven_animations) and [all the possibilities for that](https://scroll-driven-animations.style/).
- FAQ component
  - [`<details`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) - I love using this element for accordion components rather then building something from scratch.
    - [How to style the <details> tag when open using Tailwind]() - And then learning how to utilize Tailwind specifically for the `details` element [like this](https://play.tailwindcss.com/UjxLorKs1S).
- Contact form component
  - [Floating Labels with Tailwind CSS](https://www.youtube.com/watch?v=nJzKi6oIvBA) - What a great video that helped me learn about Tailwind more generally, and helped me put in some cool effects and nice UI practice for the email form in this challenge.
  - [Is it possible to remove the focus from a text input when a page loads?](https://stackoverflow.com/questions/4276754/is-it-possible-to-remove-the-focus-from-a-text-input-when-a-page-loads) - In a previous solution, I looked into how to utilizie the `blur()` method after a form was submitted. I like this solution of just blurring whatever is the active element (i.e., `document.activeElement.blur();`); Very nice!
  - [Form input `:invalid` state](https://tailwindcss.com/docs/hover-focus-and-other-states#invalid)
  - [Tailwind UI > Input Groups](https://tailwindui.com/components/application-ui/forms/input-groups) - Although I didn't pay for full access to this site, it served as a bit of inspiration and direction about what is possible with Tailwind.
  - [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
    - [Adding Custom Validation to a Form with TailwindCSS](https://dev.to/deyemiobaa/adding-custom-validation-to-a-form-with-tailwindcss-1e7d) - Although I ended up moving away from this particular kind of implementation, this did help me get started with the form validation and connecting to Tailwind.
  - EXTRA: Dialog component to fully implement the frontend experience for the contact form (even though not called for in the design spec)
    - [`<dialog>`: The Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) - I can't decide which element I like better, this one or the `<details>` element. Both are great for common UI components and I'm so thankful they are available.
    - [Tailwind > Dialog backdrops](https://tailwindcss.com/docs/hover-focus-and-other-states#dialog-backdrops)
  - [HTMLDialogElement: close event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/close_event)

### Continued development

Specific areas that the solution should be improved (known issues):

- [x] In Safari on Mac OS, the details summary has the original marker (along with the added SVG marker), and the text seems to be centered. Possibly those two issues are related because the flex container has a `justify-between` setting.
  - [[Feature/Question] Does Tailwind support the html tag <details>?](https://github.com/tailwindlabs/tailwindcss/issues/924)
  - [Tailwind > Core Concepts > Hover, Focus, and Other States > Custom modifiers > Using arbitrary variants](https://tailwindcss.com/docs/hover-focus-and-other-states#using-arbitrary-variants)
- [ ] Address issues in the PageSpeed Insights related to accessibility
  - Initial solution - [PageSpeed Insights Report from Jan 21, 2025, 12:11:10 PM](https://pagespeed.web.dev/analysis/https-elisilk-github-io-bookmark-landing-page/3bcfnaaxfc)
    - ["Links must have discernible text"](https://dequeuniversity.com/rules/axe/4.6/link-name?application=axeAPI)
- [ ] The challenge calls for the user to receive an error message when the newsletter form is submitted if the input field is empty, but right now that is currently not working.
- [ ] At larger screen sizes, it seems that the intersection observer and/or the JavaScript for the slider are not keeping up with each other.
- [ ] [08: Optimizing for Production – Tailwind CSS v2.0: From Zero to Production](https://www.youtube.com/watch?v=HZn2LtBT59w)
- [ ] Consider hiding (or intentionally styling) the scroll bars for the slider.
- [ ] Move the "Contact Us" submit button down when the error validation is shown in the smaller viewport views.

More general ideas I want to consider:

Hmm 🤔 ...

### Useful resources

- [Tailwind CSS documentation](https://tailwindcss.com/docs/) - I can't say enough about the Tailwind documentation. As written in the Frontend Mentor learning path on [useful resources for Tailwind](https://www.frontendmentor.io/learning-paths/advanced-css-techniques-vdOtKjIC4V/steps/6747d0a9d54b5cb1dee3f399/article/read): "The Tailwind documentation is so good that we recommend just using that." I couldn't agree more!
- [Tailwind Labs](https://www.youtube.com/@TailwindLabs/videos) - In addition to the amazing documentation on their website, I found the YouTube explainer videos also super helpful. I used a few of them to really guide me in this solution.
- [Kevin Powell on YouTube](https://www.youtube.com/@KevinPowell) - He's the best.
- [Accessibility Developer Guide](https://www.accessibility-developer-guide.com/)
- [MDN Web Docs for CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Went here a lot to reference the different CSS properties and the shorthands, and all the great explanations about best practices.
- [The Clamp Calculator](https://royalfig.github.io/fluid-typography-calculator/) - Used for all of fluid typography and fluid spacing calculations. I didn't end up using it in this solution, but it's always there when I need it.

## Author

- Website - [Eli Silk](https://github.com/elisilk)
- Frontend Mentor - [@elisilk](https://www.frontendmentor.io/profile/elisilk)
