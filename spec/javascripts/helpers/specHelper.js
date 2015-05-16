//=require 'jasmine-ajax'

beforeEach(function() {
  jQuery('#jasmine_content').empty();
  jasmine.Ajax.install();
});

afterEach(function() {
  jasmine.Ajax.uninstall();
});
