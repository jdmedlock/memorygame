# Memory Game Project

[![MemoryGame last commit](https://img.shields.io/github/last-commit/google/skia.svg)](https://github.com/jdmedlock/memorygame)
<br/>
[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://github.com/jdmedlock/memorygame/)

## Table of Contents

* [Overview](#overview)
* [How to Play](#how-to-play)
* [Player UI Feature](#player-ui-features)
* [Dependencies](#dependencies)
* [Change Log](#change-log)
* [Contributing](#contributing)
* [Authors](#authors)
* [License](#license)

## Overview

The Memory Game project was created as part of the Web Programming with
Javascript section of the [Udacity Front-End Web Developer Nanodegree Program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001). The
purpose of this assignment is to demonstrate mastery of the core web
development skills - HTML, CSS, and JavaScript.

You can play the game here --> [Memory Game](https://jdmedlock.github.io/memorygame/)

## How to Play

This game is a browser-based card matching game that presents the player with
cards arranged in a 4x4 grid. On one side of each card is a common design
shared by all cards. On the other is a distinctive symbol shared by one pair
of cards in the deck, thus there are 8 unique symbols shared by 8 pairs of cards
in the deck.

The objective of the Memory Game is for the play to turn over pairs of matching
cards across eight successive turns. In a turn if the player selects two cards
whose symbols match those cards, along with those successfully matched in
previous turns, will remain up. However, if the player chooses two cards with
different symbols they will both be flipped back over.

The game ends when all eight pairs of matching cards have been revealed.

## Player UI Features

In addition to the basic game play several UI components have been implemented
to provide the player with features to improve the overall experience.

* Restart Button - This button give the player the means to reset the game
board, timer, and star rating.

* Star Rating - From 1 to 3 stars are displayed to provide the player with
a visual indication of his or her performance. Three stars are displayed at the
start of the first turn and will be decremented by one star when the player
fails to match cards in a turn. A star will be added when a turn is "won",
but at any point in time a minimum of 0 stars and a maximum of 3 stars will
be displayed.

* Timer - A timer displaying the number of minutes and seconds that have
elapsed. The timer is stopped when the player wins the game.

* Move Counter - Displays the number of turns the player has taken, starting
with one at the first turn.

## Dependencies

This app has the following dependencies

| Module/Library | Environment | Description | Related Files |
|:---------------|:------------|:------------|:--------------|
| NPM            | Development | Package manager | package.json |
| WebPack        | Development | Bundler     | webpack.config.js |

To build the production application bundle, `/dist/bundle-app.js` issue the
command `npm run build` from the command line. This bundle must be referenced
in the file `index.html` using the `<script src="dist/bundle-app.js"></script>`
tag at the bottom of the `<body>` section of the source page.

## Change Log

For more information see [Change Log](https://github.com/jdmedlock/memorygame/blob/development/CHANGELOG.md)

## Contributing

See [Contributing](https://github.com/jdmedlock/memorygame/blob/development/CONTRIBUTING.md)
and our [Collaborator Guide](https://github.com/jdmedlock/memorygame/blob/development/COLLABORATOR_GUIDE.md).

## Authors

Developers on this project can be found on the [Contributors](https://github.com/jdmedlock/memorygame/graphs/contributors) page of this repo.

## License

[MIT](https://tldrlegal.com/license/mit-license)

