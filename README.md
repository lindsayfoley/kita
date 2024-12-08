# Kita Tech Test

Hello 👋 and thank you for giving me the opportunity to work on this tech test! I really enjoyed it, it was refreshing to work on something different from my usual projects, which are mainly components for retail sites. Exploring a UI for EdTech was a nice challenge.

So I got carried away and spent more time on this than planned! I spent about 6 hours coding the components yesterday, and today I spent a couple more hours reviewing everything I’d written, making tweaks, creating the README and putting together an index page to render the components grouped together. Prior to this, I had focused on creating the components in Storybook, so they were built and tested in isolation.

---

## **Technologies Used**

- **Next.js**: Used as the framework for the app
- **TypeScript**: For type safety and robust code
- **Storybook**: To develop and document UI components in isolation
- **React Testing Library**: For writing unit tests
- **Jest**: For running tests
- **CSS Modules**: To create reusable, scoped styles

---

## **Running the App Locally**

To start the app in development mode:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

---

## **Running Storybook**

To view the components in isolation:

```bash
npm run storybook
```

The Storybook will be available at [http://localhost:6006](http://localhost:6006)

---

## **Running the Tests**

To run the unit tests:

```bash
npm test
```

---

## **Implementation Notes**

My main focus was on building out reusable components because the original job spec I saw on LinkedIn mentioned experience with design systems so I wanted to demonstrate this.

I also wanted to:

- Include unit tests using Jest and RTL
- Leverage Storybook as my preferred method for creating and reviewing components
- Use CSS Modules for clean/modular styling

---

## **If I Had More Time**

If I’d had more time, I would have:

- Worked more on the index page to componentise it and add more functionality
- Catered for mobile/small screen views, as I’ve only focused on desktop based on the brief screenshots
- Built a **Heading** component (atom) to manage all headings across the app
- Built a **Typography** component (atom) for general text styles, which could be used in components like `ListItem`
- Wired up pre-commit and pre-push hooks to automatically run the linter and tests
- Added more test coverage e.g. for the Index page and components I would have used there
- Added either Storybook docs or a README for each component created

---

Thank you again for the opportunity and looking forward to hearing from you!
