module.exports = function filterOperations () {
  var $scope = {}

  $scope.filters = (
    { geographies: (
        [ { text: "United States"
          , enabled: false
          , active: false
          , qualities: ['chocolatey']
          , products: ['dove', 'snickers']
          }
        , { text: "Canada"
          , enabled: false
          , active: false
          , qualities: ['oneQuarterMoisturizer']
          , products: ['slingshot', 'snickers']
          }
        , { text: "China"
          , enabled: false
          , active: false
          , qualities: ['scented']
          , products: ['slingshot', 'marbles']
          }
        ]
      )
    , regions: (
        [ { text: "Europe"
          , enabled: false
          , active: false
          , qualities: ['creamy', 'brown']
          , products: ['bouncy balls', 'marbles']
          }
        , { text: "North America"
          , enabled: false
          , active: false
          , qualities: ['creamy', 'white']
          , products: ['snickers', 'lotion']
          }
        , { text: "Asia"
          , enabled: false
          , active: false
          , qualities: ['nougat']
          , products: ['mars', 'lotion']
          }
        ]
      )
    }
  )
  $scope.dataPoints = (
    [ { product: 'Dove'
      , qualities: (
          [ { creamy: true
            , smooth: true
            , oneQuarterMoisturizer: true
            }
          , { white: true
            , scented: true
            }
          ]
        )
      , studyInfo: (
          { studyGeography: ['North America', 'United States', 'Canada']
          , sampleSize: 1000
          , demographics: 'dove_demos.csv'
          }
        )
      }
    , { product: 'Mars'
      , qualities: (
          [ { creamy: true
            , smooth: true
            , chocolatey: true
            }
          , { brown: true
            , peanuts: true
            , nougat: false
            }
          ]
        )
      , studyInfo: (
          { studyGeography: ['Asia', 'China']
          , sampleSize: 1000
          , demographics: 'dove_demos.csv'
          }
        )
      }
    ]
  )

  /*
    Enables a particular geography filter so it's interactable
    Accepts the data type we're currently on (data points or research summaries)
  */
  $scope.activateGeographyFilters = function(type){
    var data = (type == "data") ? $scope.dataPoints : $scope.summaries, i = 0, len = data.length;
    for (; i < len; i++) {
      var j = 0, jlen = $scope.filters['geographies'].length;
      for (; j < jlen; j++) {
        var k = 0, klen = data[i].studyInfo.studyGeography.length;
        for (; k < klen; k++) {
          // If a category matches, let's enable it so we can filter
          if (data[i].studyInfo.studyGeography[k] == $scope.filters['geographies'][j].text ) {
            $scope.filters['geographies'][j].enabled = true;
          }
        }
      }
    }
  }

  $scope.activateGeographyFiltersByQuality = function(type){
    var data = (type == "data") ? $scope.dataPoints : $scope.summaries, i = 0, len = data.length;
    for (; i < len; i++) {
      var j = 0, jlen = $scope.filters['geographies'].length;
      for (; j < jlen; j++) {
        var k = 0, klen = data[i].qualities.length;
        for (; k < klen; k++) {
          var l = 0; llen = $scope.filters['geographies'][j].qualities.length;
          for(; l < llen; l++) {
            // If a category matches, let's enable it so we can filter
            if (data[i].qualities[k][$scope.filters['geographies'][j].qualities[l]]) {
              $scope.filters['geographies'][j].enabled = true;
            }
          }
        }
      }
    }
  }

  $scope.activateGeographyFiltersByProduct = function(type){
    /*
       this will activate filters
       based on whether or not
       their products are
       desirable within
       an area
    */
  }

  return $scope
}
