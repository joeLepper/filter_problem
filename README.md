Activate Filters
================

Lucky you. You've inherited a code base. Your startup's CTO has left the company and you are in the enviable position of moving a prototype she had been developing forward. The prototype works through thousands of studies to slice and dice, generating useful business intelligence for your clients.

Today you are looking at a series of implementations that "activate" filters to act upon the UI. The code compares products to geographic areas and regions and then mutates the filters based upon the checks.

Your organization had previously been supporting IE8, meaning that ES5 language features were not available to developers (one of the main reasons that the CTO left). in the wake of her departure, product management has decided to no longer support IE8, meaning that ES5 features are now available.


Objective
---------
- implement a `activateGeographyFiltersByProduct` method
- DRY up the code
- test your implementation
- code with an eye toward long-term maintainability

Setup
-----
- clone this repo: `git clone git@github.com:joeLepper/filter_problem.git && cd filter_problem`
- install tape: `npm i`
- run the tests `npm run test` or `node test`
