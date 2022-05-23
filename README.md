# Half Day Tech Challenge - Crypto Trading App

### Installation

```
npm install
```

```
npm start
```

---

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

- I did not entirely understand the language used when describing ‘GJNumbersView and GJNumberLabel components’, so I went ahead and implemented the UI and functionality in the most appropriate way I could think of. If there was more time and under different circumstances, I would have emailed you for more clarification.

- I was not able to use the Nivo library as there were issues with the npm install with react 18, which you can read about here: https://github.com/plouc/nivo/issues/1964
  I spent a great deal of time trying to debug the issue before finding that thread, and even then, the proposed fix did not work for me. Instead of wasting more time on it, I used
  reCharts.js and managed to fulfil the requirements with it. Under different circumstances, I would have asked for help and carried on debugging the issue.

---

### Live-link

crypto-trading-pairs-app.netlify.app
