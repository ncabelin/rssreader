# RSS Feed Reader Testing

## Project Overview

In this project I've been given a web-based application that reads RSS feeds. I used the Jasmine behavior driven testing framework to test numerous features of the application.

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

The app is live at http://cabelin.com/rssreader

![screenshot](http://cabelin.com/rssreader/images/screenshot.jpg)

## Tests done :

1. Written a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. Written a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. Written a new test suite named "The menu".
4. Written a test that ensures the menu element is hidden by default. Analyzed the HTML and the CSS to determine how the hiding/showing of the menu element is performed.
5. Written a test that ensures the menu changes visibility when the menu icon is clicked. This test has two expectations: does the menu display when clicked and does it hide when clicked again.
6. Written a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. loadFeed() is asynchronous so this test required the use of Jasmine's beforeEach and asynchronous done() function.
7. Written a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

