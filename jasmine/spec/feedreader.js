/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    *
    * The first one tests whether allFeeds array is defined and the array
    * is not empty.
    */
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

    /* This second test looks at each url in the array and tests if it
    * is defined or if it is empty.
    */
        it('url exists', function() {
            allFeeds.forEach(function(data) {
                expect(data.url).toBeDefined();
                expect(data.url).not.toBe('');
            })
        });

     /* This third test looks at each name in the array and tests if it
    * is defined or if it is empty.
    */
        it('name exists', function() {
            allFeeds.forEach(function(data) {
                expect(data.name).toBeDefined();
                expect(data.name).not.toBe('');
            })
        });

    });


    describe('The menu', function() {

        /* This first test ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

         /* This second test ensures the menu changes
          * visibility when the menu icon is clicked. It
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes when clicked', function() {
            $(".menu-icon-link").trigger("click");
            expect($("body").hasClass("menu-hidden")).toBe(false);
            $(".menu-icon-link").trigger("click");
            expect($("body").hasClass("menu-hidden")).toBe(true);
        });

    });

    describe('Initial Entries', function() {

        /* This is a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('has at least a single .entry element within .feed container', function(done) {
            expect($(".feed .entry").length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {

        /* This test ensures that when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

        var first, second;

        beforeEach(function(done) {
            loadFeed(0, function() {
                first = $('.entry').text();
                loadFeed(1, function() {
                  second = $('.entry').text();
                  done();
                });
            });
        });

        it('content changes upon loading new feed', function() {
            expect(first).not.toEqual(second);
        });

    });


}());
