# Inno News

## Introduction

Welcome to the Inno News! This project is built using Laravel for the backend, along with Vue.js, Vite, and Inertia.js for the frontend. It's a news application that fetches articles.

## How to Build

To build the project, follow these steps:

1. Open your terminal and run:
   ```bash
   cd innoscripta-bugra-sercan-seker
   
2. Build Docker
   ```bash
   docker compose build

## How to Run

To run the project, follow these steps:

1. Run Docker Containers
   ```bash
   docker compose up -d

2. Run Migrations and Seeds
   ```bash
   docker compose exec backend php artisan migrate:fresh --seed

## About Cron

Cron scheduled to run hourly, if you want to change, follow these steps

1. Open innoscripta-challenge-backend in your code editor.
   ```bash
   cd innoscripta-challenge-backend
   
   phpstorm .

2. Navigate into app->Console->Kernel.php and change hourly() with your preference
   ```bash
   $schedule->command('fetch:articles')->hourly();

3. If you don't want to wait for cron, execute this command
   ```bash
   docker compose exec backend php artisan fetch:articles

## Open Apps On Your Browser

1. Add this your etc/host(If needed)
   ```bash
   innoscripta-challenge.test          127.0.0.1
   backend.innoscripta-challenge.test  127.0.0.1
2. Backend & Vue
   ```bash
   http://backend.innoscripta-challenge.test:8080
   
3. React App(Not Completed)
   ```bash
   http://innoscripta-challenge.test:8081

## Important Note

While the requirements were clear, I realized I lack the experience to effectively use React. Despite my efforts, progress has been slow.

To ensure timely completion, I've decided to switch to Vue using Inertia.js, a stack I'm more comfortable with. Thanks for your understanding.

## TODO:
- [ ] Design UI
- [ ] Filter by Date
- [ ] Implement one more source to fit requirements(Create new Article Service and add it into FetchArticlesCommand.php)
- [ ] NewsApi.org API have limited content for article. Scrape article data from url.
- [ ] Code optimization and cache
- [ ] Write Test!