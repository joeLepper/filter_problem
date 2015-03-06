var test = require('tape')
var filterOperations = require('../')

test('activate geography filters', function (t) {
  var f = filterOperations()
  t.plan(2)

  t.notOk(f.filters.geographies[0].enabled, 'the first geography should not be enabled before activateGeographyFilters')
  f.activateGeographyFilters('data')
  t.ok(f.filters.geographies[0].enabled, 'the first geography should be enabled after activateGeographyFilters')
})