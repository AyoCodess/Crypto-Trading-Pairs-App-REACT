# Half Day Tech Challenge - Crypto Trading App

### Installation

```
npm install
```

```
npm start
```

### Update CORS FIX

I created my own CORS proxy sever using heroku

#### ~~Note:~~

~~Download, install and turn off CORS via the Moesif CORS chrome extension to test the live link.~~

### About & User Story

Create a small frontend application using any framework that allows users to select a trading pair from an API, display information about the trading pair and its live price change every 10 seconds and view the Bitcoin average price from 3 different exchanges.

---

### Technologies

- React.js - Front-end framework
- Tailwind CSS - CSS framework with some standard SASS
- Axios - Data fetching
- reCharts.js - Chart

---

### Features

All User story requirements were met.

---

### My Experience - FAQs

#### 1) Did you encounter any problems and how did you overcome them?

### ~~CORS~~

~~This is what a user would encounter in production.~~
![CorsIsssue](https://i.imgur.com/I4w1OkM.png)

- ~~As I understand it, theres nothing we can do on the front-end when it comes to the production version. We either have to build or use a proxy, or fix the API at the backend. I used the Moesif CORS chrome extension circumvent this issue locally due to time constraints. If I had more time I would of looked for alternative API's to use or build my own proxy server. If there a solution I am mussing please let me know.~~

- I did not entirely understand the language used when describing ‘GJNumbersView and GJNumberLabel components’, so I went ahead and implemented the UI and functionality in the most appropriate way I could think of. If there was more time and under different circumstances, I would have emailed you for more clarification.

- I was not able to use the Nivo library as there were issues with the npm install with react 18, which others are experiencing too, you can read about here: https://github.com/plouc/nivo/issues/1964
  I spent a great deal of time trying to debug the issue before finding that thread, and even then, the proposed fix did not work for me. Instead of wasting more time on it, I used
  reCharts.js and managed to fulfil the requirements with it. Under different circumstances, I would have asked for help and carried on debugging the issue.

---

### Live-link

https://crypto-trading-pairs-app.netlify.app
