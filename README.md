# What's in your cupboard?

A food recipe finder based on React and Edamam API

This was the final project we did for Manchester Codes. As a whole group we brainstormed ideas for apps, voted on our favourite ideas, and were assigned to groups of 3-4 students. Our app was a Recipe-finding app based on what you had available; the idea being that you could enter the ingredients that you had in your cupboards and the app would return recipe ideas based on those. You can also search for a specific recipe (e.g., carbonara) and the app will return recipes.

To begin with our MVP (minimum viable product) was very basic. We wanted to have a textbox where ingredients or recipe searches could be entered and a `Search` button, which would make the call to the API and return the recipes. We decided to use a pre-made API as we felt that it would provide more options for recipe ideas.

We decided to add upon our MVP by creating a filter dropdown menu where people could select dietary preferences (e.g., Vegan, Peanut-free). We also added a Random Recipe button, which would generate a random recipe for inspiration.

We decided to build our App in React and used the pre-built Edamam API for our backend calls.

## Technologies

- React
- React-Testing-Library / Jest
- React-Select
- Axios

---

## Getting Starting - cloning the app, installing the dependencies, running it locally, and running the tests!

Clone the project using this command in the terminal: `git clone https://github.com/samcbride/food-app` and move into the project directory `cd food-app`.

Install the depedencies via `npm install` and `npm install axios`.

Run `npm test` to ensure all tests are passing.

Start up the server with this command `npm start` - this will allow you to see the app in action!

## Run Deployed at

The app is also deployed on Vercel via this URL: `https://food-app.vercel.app/`

---

## Features

- Random recipe button
- Health labels for nutritional dietary restrictions
  - The API we used (Edamam) had pre-built in health-labels, which categorized the recipes according to which health-label criteria they met, such as Vegan or Peanut-free. There were a large number of options within these health labels and to avoid making the app bogged down with too many options we decided to select the most common dietary preferences and allergies. We created an array of objects with the values and labels of the health options and then passed this into our dropdown menu. We decided to use a package, which contained a pre-made dropdown menu, as this package contained a dropdown menu that allowed for multiple inputs to be added. Therefore, someone who was vegan and also had a peanut-allergy could filter the results based on this criteria and not be inconvenienced having to look through all the options to see if they were suitable.
- Totally responsive to all screen and devices
  - The app can be used on a variety of screen sizes to ensure it can be enjoyed on any device

## Authors and Acknowledgement

- [@Shona](https://github.com/samcbride)
- [@James](https://github.com/JamesWoodhead1)
- [@Jasmin](https://github.com/jasminbateman)
- [@Alex](https://github.com/Alex-003)

Thanks to the [Manchester Codes](https://manchestercodes.com/software-engineer-fasttrack) team for all the support and knowledge that you have passed on. This has been a fantastic course!

## Feedback

If you have any feedback, please reach out to us at Whatsinyourcupboard@gmail.com
