(function(){
  var app = angular.module('Converter', []);
  
  //Grabs array
  app.controller('mCtrl', function(){
    this.measurement = measurements;
  });
  
  //Controls Measurement Panels
  app.controller('PanelCtrl', function($scope){
    this.tab = 0;
    this.one = "active1";
    this.two = "inactive";
    this.three = "inactive";
    this.four = "inactive";
    this.selectTab = function(setTab){
      this.tab = setTab;
      this.one = "inactive";
      if(setTab === 0){
        this.one = "active1"
        this.two = "inactive";
        this.three = "inactive";
        this.four = "inactive";
      }else{
        if(setTab === 1){
          this.one = "inactive"
          this.two = "active2";
          this.three = "inactive";
          this.four = "inactive";
        } else{
          if(setTab === 2){
            this.one = "inactive"
            this.two = "inactive";
            this.three = "active3";
            this.four = "inactive";
          }else{
            if(setTab === 3){
              this.one = "inactive"
              this.two = "inactive";
              this.three = "inactive";
              this.four = "active4";
            }
          }
        }
      }
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
    
  });
  
  //Converts Temperature inputs
  app.controller('converterTemp',function($scope){
    $scope.	Cels = "";
    $scope.	Fahr = "";
    $scope.	Kelv = "";
    this.Convert = function(name, value){
      if(value === ""){
        $scope.Cels = "";
        $scope.Fahr = "";
        $scope.Kelv = "";
      }else{
        if(name === "Cels"){
          $scope.Fahr = ((value * 9) /5) + 32;
          $scope.Kelv = parseInt(value) + 273.15;
        } else{
          if(name === "Fahr"){
              $scope.Cels = ((value - 32) * 5) /9;
            $scope.Kelv = (((value -32)*5)/9) + 273.15;
          } else{
            if(name === "Kelv"){
              $scope.Cels = value - 273.15;
              $scope.Fahr = (((value -273.15)*9)/5) + 32;
            }
          }
        }
      }
    };
  });
  
  //Converts Length inputs
  app.controller('converterLength',function($scope){
    $scope.	Kilom = "";
    $scope.	Meter = "";
    $scope.	Centi = "";
    $scope.	Milli = "";
    $scope.	Mile = "";
    $scope.	Yard = "";
    $scope.	Foot = "";
    $scope.	Inch = "";
    $scope.	Naut = "";
    this.Convert = function(name, value){
      if(value === ""){
  	      $scope.	Kilom = "";
        $scope.	Meter = "";
        $scope.	Centi = "";
        $scope.	Milli = "";
        $scope.	Mile = "";
        $scope.	Yard = "";
        $scope.	Foot = "";
        $scope.	Inch = "";
        $scope.	Naut = "";
      }else{
        if(name === "Kilom"){
          $scope.	Meter = value * 1000;
          $scope.	Centi = value * 100000;
          $scope.	Milli = value * 1000000;
          $scope.	Mile = value * 0.62137;
          $scope.	Yard = value * 1093.6;
          $scope.	Foot = value * 3280.8399;
          $scope.	Inch = value * 39370;
          $scope.	Naut = value * 0.53996;
        } else{
          if(name === "Meter"){
  	          $scope.	Kilom = value * 1000;
            $scope.	Centi = value * 100;
            $scope.	Milli = value * 1000;
            $scope.	Mile = value * 0.000621371;
       		     $scope.	Yard = value * 1.09361;
        		    $scope.	Foot = value * 3.28084;
            $scope.	Inch = value * 39.3701;
            $scope.	Naut = value * 0.000539957;
          } else{
            if(name === "Centi"){
              $scope.	Kilom = value / 100000;
              $scope.	Meter = value / 100;
              $scope.	Milli = value * 10;
              $scope.	Mile = value * 0.00000621371;
       		       $scope.	Yard = value * 0.0109361;
        		      $scope.	Foot = value * 0.0328084;
              $scope.	Inch = value * 0.393701;
              $scope.	Naut = value * 0.000005399568;
            } else{
              if(name === "Milli"){
                $scope.	Kilom = value / 1000000;
                $scope.	Meter = value / 1000;
                $scope.	Centi = value / 10;
                $scope.	Mile = value * 0.00000062;
       		         $scope.	Yard = value * 0.00109361;
        		        $scope.	Foot = value * 0.00328084;
                $scope.	Inch = value * 0.0393701;
                $scope.	Naut = value * 0.00000054;
           	 	  } else{
                if(name === "Mile"){
                  $scope.	Kilom = value * 1.60934;
                  $scope.	Meter = value * 1609.34;
                  $scope.	Centi = value * 160934;
                  $scope.	Milli = value * 1609344;
       		           $scope.	Yard = value * 1760;
        		          $scope.	Foot = value * 5280;
                  $scope.	Inch = value * 63360;
                  $scope.	Naut = value * 0.868976;                  
                }else{
                  if(name === "Yard"){
                    $scope.	Kilom = value * 0.0009144;
                    $scope.	Meter = value * 0.9144;
                    $scope.	Centi = value * 91.44;
                    $scope.	Milli = value * 914.4;
       		             $scope.	Mile = value * 0.000568182;
        		            $scope.	Foot = value * 3;
                    $scope.	Inch = value * 36;
                    $scope.	Naut = value * 0.000493737;   
                  } else{
                    if(name === "Foot"){
                      $scope.	Kilom = value * 0.0003048;
                      $scope.	Meter = value * 0.3048;
                      $scope.	Centi = value * 30.48;
                      $scope.	Milli = value * 304.8;
       		               $scope.	Mile = value * 0.000189394;
        		              $scope.	Yard = value * 0.333333;
                      $scope.	Inch = value * 12;
                      $scope.	Naut = value * 0.000164579;   
                    } else{
                      if(name === "Inch"){
                        $scope.	Kilom = value * 0.0000254;
                        $scope.	Meter = value * 0.0254;
                        $scope.	Centi = value * 2.54;
                        $scope.	Milli = value * 25.4;
       		                 $scope.	Mile = value * 0.0000157828;
        		                $scope.	Yard = value * 0.0277778;
                        $scope.	Foot = value * 0.0833333;
                        $scope.	Naut = value * 0.0000137149;   
                      } else{
                        if(name === "Naut"){
                          $scope.	Kilom = value * 1.852;
                          $scope.	Meter = value * 1852;
                          $scope.	Centi = value * 185200;
                          $scope.	Milli = value * 1852000;
       		                   $scope.	Mile = value * 1.15078;
        		                  $scope.	Yard = value * 2025.37;
                          $scope.	Foot = value * 6076.12;
                          $scope.	Inch = value * 72913.4;                            
                        }
                      }
                    }
                  }
                }
              }
            }
       	   }
        }
      }
    };
  });
  
    //Converts Speed inputs
  app.controller('converterSpeed',function($scope){
    $scope.	MilesH = "";
    $scope.	FeetS = "";
    $scope.	MetersS = "";
    $scope.	Kmh = "";
    $scope.	Knot = "";
    this.Convert = function(name, value){
      if(value === ""){
        $scope.	MilesH = "";
        $scope.	FeetS = "";
        $scope.	MetersS = "";
        $scope.	Kmh = "";
        $scope.	Knot = "";
      }else{
        if(name === "MilesH"){
          $scope.	FeetS = value * 1.46667;
          $scope.	MetersS = value * 0.44704;
          $scope.	Kmh = value * 1.60934;
          $scope.	Knot = value * 0.868976;
        } else{
          if(name === "FeetS"){
            $scope.	MilesH = value * 0.681818;
            $scope.	MetersS = value * 0.3048;
            $scope.	Kmh = value * 1.09728;
            $scope.	Knot = value * 0.592484;
          } else{
            if(name === "MetersS"){
              $scope.	MilesH = value * 2.23694;
              $scope.	FeetS = value * 3.28084;
              $scope.	Kmh = value * 3.6;
              $scope.	Knot = value * 1.94384;
            }else{
              if(name === "Kmh"){
                $scope.	MilesH = value * 0.621371;
                $scope.	FeetS = value * 0.911344;
                $scope.	MetersS = value * 0.277778;
                $scope.	Knot = value * 0.539957;
              } else{
                if(name === "Knot"){
                  $scope.	MilesH = value * 1.15078;
                  $scope.	FeetS = value * 1.68781;
                  $scope.	MetersS = value * 0.514444;
                  $scope.	Kmh = value * 1.852;
                }
              }
            }
          }
        }
      }
    };
  });
  
    //Converts Mass inputs
  app.controller('converterMass',function($scope){
    $scope.	MetricT = "";
    $scope.	Kilog = "";
    $scope.	Gram = "";
    $scope.	Millig = "";
    $scope.	mcG = "";
    $scope.	LongT = "";
    $scope.	ShortT = "";
    $scope.	Stone = "";
    $scope.	Pound = "";
    $scope.	Ounce = "";
    this.Convert = function(name, value){
      if(value === ""){
        $scope.	MetricT = "";
        $scope.	Kilog = "";
        $scope.	Gram = "";
        $scope.	Millig = "";
        $scope.	mcG = "";
        $scope.	LongT = "";
        $scope.	ShortT = "";
        $scope.	Stone = "";
        $scope.	Pound = "";
        $scope.	Ounce = "";
      }else{
        if(name === "MetricT"){
          $scope.	Kilog = value * 1000;
          $scope.	Gram = value * 1000000;
          $scope.	Millig = value * 1000000000;
          $scope.	mcG = value * 1000000000000;
          $scope.	LongT = value * 0.984207;
          $scope.	ShortT = value * 1.10231;
          $scope.	Stone = value * 157.473;
          $scope.	Pound = value * 2204.62;
          $scope.	Ounce = value * 35274;
        } else{
          if(name === "Kilog"){
            $scope.	MetricT = value * 0.001;
            $scope.	Gram = value * 1000;
            $scope.	Millig = value * 1000000;
            $scope.	mcG = value * 1000000000;
            $scope.	LongT = value * 0.000984207;
            $scope.	ShortT = value * 0.00110231;
            $scope.	Stone = value * 0.157473;
            $scope.	Pound = value * 2.20462;
            $scope.	Ounce = value * 35.274;
          } else{
            if(name === "Gram"){
              $scope.	MetricT = value * 0.000001;
              $scope.	Kilog = value * 0.001;
              $scope.	Millig = value * 1000;
              $scope.	mcG = value * 1000000;
              $scope.	LongT = value * 0.0000009842065276;
              $scope.	ShortT = value * 0.000001102;
              $scope.	Stone = value * 0.000157473;
              $scope.	Pound = value * 0.00220462;
              $scope.	Ounce = value * 0.035274;
            }else{
              if(name === "Millig"){
                $scope.	MetricT = value * 0.000000001;
                $scope.	Kilog = value * 0.000001;
                $scope.	Gram = value * 0.001;
                $scope.	mcG = value * 1000;
                $scope.	LongT = value * 	0.009842065;
                $scope.	ShortT = value * 0.0000000011;
                $scope.	Stone = value * 0.00000016;
                $scope.	Pound = value * 0.0000022;
                $scope.	Ounce = value * 0.000035;
              }else{
                if(name === "mcG"){
                  $scope.	MetricT = value * 0.000000000001;
                  $scope.	Kilog = value * 0.000000001;
                  $scope.	Gram = value * 0.000001;
                  $scope.	Millig = value * 0.001;
                  $scope.	LongT = value * 0.000000000000984;
                  $scope.	ShortT = value * 0.0000000000011023;
                  $scope.	Stone = value * 0.000000000157473;
                  $scope.	Pound = value * 0.0000000022046226;
                  $scope.	Ounce = value * 0.0000000352739619;
                }else{
                  if(name === "LongT"){
                    $scope.	MetricT = value * 1.01605;
                    $scope.	Kilog = value * 1016.05;
                    $scope.	Gram = value * 1016046.9083984781;
                    $scope.	Millig = value * 1016046908.398478;
                    $scope.	mcG = value * 1016046908398.478;
                    $scope.	ShortT = value * 1.12;
                    $scope.	Stone = value * 160;
                    $scope.	Pound = value * 2240;
                    $scope.	Ounce = value * 35840;
                  } else{
                    if(name === "ShortT"){
                      $scope.	MetricT = value * 0.907185;
                      $scope.	Kilog = value * 907.185;
                      $scope.	Gram = value * 907185;
                      $scope.	Millig = value * 907184740.7607566;
                      $scope.	mcG = value * 907184740760.7566;
                      $scope.	LongT = value * 0.892857;
                      $scope.	Stone = value * 142.857;
                      $scope.	Pound = value * 2000;
                      $scope.	Ounce = value * 32000;
                    } else{
                      if(name === "Stone"){
                        $scope.	MetricT = value * 0.00635029;
                        $scope.	Kilog = value * 6.35029;
                        $scope.	Gram = value * 6350.29;
                        $scope.	Millig = value * 6350293.17991006;
                        $scope.	mcG = value * 6350293179.91006;
                        $scope.	LongT = value * 0.00625;
                        $scope.	ShortT = value * 0.007;
                        $scope.	Pound = value * 14;
                        $scope.	Ounce = value * 224;
                      }else{
                        if(name === "Pound"){
                          $scope.	MetricT = value * 0.000453592;
                          $scope.	Kilog = value * 0.453592;
                          $scope.	Gram = value * 453.592;
                          $scope.	Millig = value * 453592;
                          $scope.	mcG = value * 0.0714286;
                          $scope.	LongT = value * 0.000446429;
                          $scope.	ShortT = value * 0.0005;
                          $scope.	Stone = value * 0.0714286;
                          $scope.	Ounce = value * 16;
                        }else{
                          if(name === "Ounce"){
                            $scope.	MetricT = value * 0.00002834952316484755;
                            $scope.	Kilog = value * 0.0283495;
                            $scope.	Gram = value * 28.3495;
                            $scope.	Millig = value * 28349.5;
                            $scope.	mcG = value * 28349523.16484755;
                            $scope.	LongT = value * 0.000027901785764530176;
                            $scope.	ShortT = value * 0.000031250000017718446;
                            $scope.	Stone = value * 0.00446429;
                            $scope.	Pound = value * 0.0625;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
  });
  
  
  //array for measurements
  var measurements = [{
    name:"Temperature", in: [
      "Celsius",
      "Fahrenheit",
      	"Kelvin"
    ]
  },{
    name:"Length", in:[
      "Kilometer",
      "Meter",
      "Centimeter",
      "Millimeter",
      "Mile",
      "Yard",
      "Foot",
      "Inch",
      "Nautical Mile"
    ]
  },{
    name:"Speed", in: [
      "Miles/hour",
      "Feet/sec",
      	"Meters/sec",
      "Km/hour",
      "Knot"
    ]
  },{
    name:"Mass", in: [
      "Metric ton",
      "Kilogram",
      	"Gram",
      "Milligram",
      "Mcg",
      "Long ton",
      "Short ton",
      "Stone",
      "Pound",
      "Ounce"
    ]
  }                  
  ];
})();