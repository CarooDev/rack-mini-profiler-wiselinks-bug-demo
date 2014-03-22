This demo app demonstrates the issue https://github.com/MiniProfiler/rack-mini-profiler/pull/69.

Given I am using Chromium 33
When I go to /products
And I click on the Category checkbox
Then the result will be returned via ajax
When I click the Home link
And I click the back button
Then I should still see the Home link
But instead it's no longer visible
Because the page partial has been reloaded from the cache.
