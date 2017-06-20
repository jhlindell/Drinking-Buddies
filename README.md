
# Q2-Project: The Misterfits present: Drinking Buddies!!

## What is this application?
Drinking Buddies database (DBdb) is a full-stack web application layering a social-sharing component over a party-planning tool with access to a cocktail recipe database.

## What problem does DBdb solve?
Planning a get-together with friends should be an utterly enjoyable experience focused on the mixology craft and quality company. Too often, searching myriad sources for recipes, or recalling where they were stashed, or what whom should bring or when that party even was, keep us from concocting our libations and drinking life. By simplifying all aspects of cocktail party-planning, from recipe research and menu creation, to alerting friends and finding new connections, DBdb provides a refreshing entertaining solution.

## What technologies does DBdb use?
HTML5, Bootstrap CSS, ES6 & jQuery, Node & Express, PostgreSQL & Knex, Heroku

## Deployed Full-Stack application link (Heroku)
<https://drinking-buddies.herokuapp.com>

## Screenshots and Walkthrough
Upon first visiting [Drinking Buddies](https://drinking-buddies.herokuapp.com), users are greeted by a login page:
![D-B_login](screenshots/1-login.png)


In order to proceed, users must register - to push the social agenda of connecting with others, as well as to restrict access to those of legal drinking age:
![D-B_signup](screenshots/2-signup.png)


Upon successful login, token authentication is created to populate the users' various profiles, such as Social, the first secure page:
![D-B_social](screenshots/3-social.png)


## Minimum Viable Product goals
1. a RESTful server with routes for user authorization, and database CRUD
2. a 3NF database of cocktail recipes and users
3. a reasonably intelligible website to display the database
4. must-be-mobile

## Project Management tool (Trello)
<https://trello.com/b/w2uDPrnh/the-misterfits-present-drinking-buddies>

## Stretch goals
1. a more robust social component allowing:
  * responsibility sharing based on bar contents
  * searchable open party to engage local users outside one's immediate network
  * gamify user accomplishments - parties hosted, cocktails submitted, invites sent

2. eye-catching visualizations of cocktail recipes, both logged and in-process:
  * standard templates for ratios of liquor, liqueur, acid // sour, sweet, bitter


3. a tag system to categorize cocktail themes allowing:
  * narrowed recipe search
  * recipe suggestions
  * CSS-themes
