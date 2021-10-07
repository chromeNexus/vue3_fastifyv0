const axios = require("axios");
var faker = require("faker");
// const rrad = require("rrad");
// const { nanoid } = require("nanoid");
const { customAlphabet } = require("nanoid");
// User
// create 3 users
const nanoid = customAlphabet(
  "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789",
  10
); // remove se-

/* const user = { // address verified easypost
  id: nanoid(), // faker.datatype.uuid(),
  name: faker.name.findName(),
  company: faker.company.catchPhraseDescriptor(),
  address1: "2203 7th Street Road",
  address2: "",
  city: "Louisville",
  state: "KY",
  postalCode: "40208",
  country: "US",
  phone: faker.phone.phoneNumber(),
  email: faker.internet.email(),
}; */

/*  // address verified easypost
const customer = {
  id: nanoid(),
  name: faker.name.findName(),
  company: faker.company.catchPhraseDescriptor(),
  address1: "6463 Vrain Street",
  address2: "",
  city: "Arvada",
  state: "CO",
  postalCode: "80003",
  country: "US",
  phone: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  store: "shopify",
}; 

// limit 2
// address verified easypost
const warehouse = {
  id: nanoid(),
  uid: "",
  warehouse_id: "se-28529731",
  warehouseName: "Zero Cool HQ",
  name: faker.name.findName(),
  company: faker.company.catchPhraseDescriptor(),
  address1: "22572 Toreador Drive",
  address2: "",
  city: "Salinas",
  state: "CA",
  postalCode: "93908",
  country: "US",
  phone: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  //  "address_residential_indicator": "no"
  return_name: faker.name.findName(),
  return_company: faker.company.catchPhraseDescriptor(),
  return_address1: "22572 Toreador Drive",
  return_address2: "",
  return_city: "Salinas",
  return_state: "CA",
  return_postalCode: "93908",
  return_country: "US",
  return_phone: faker.phone.phoneNumber(),
  return_email: faker.internet.email(),
  //  "address_residential_indicator": "no"
};
*/
const shipment = {
  id: nanoid(),
  uid: "",
  shipment_id: "se-28529731",
  carrier_id: "se-28529731",
  service_code: "usps_first_class_mail",
  items: [],
  ship_date: "2018-09-23T00:00:00.000Z",
  created_at: "2018-09-23T15:00:00.000Z",
  modified_at: "2018-09-23T15:00:00.000Z",
  shipment_status: "pending",
  ship_to: {
    name: "John Doe",
    phone: "+1 204-253-9411 ext. 123",
    company_name: "The Home Depot",
    address_line1: "1999 Bishop Grandin Blvd.",
    address_line2: "Unit 408",
    address_line3: "Building #7",
    city_locality: "Winnipeg",
    state_province: "Manitoba",
    postal_code: "78756-3717",
    country_code: "CA",
    residential: false,
  },
  ship_from: {
    name: "John Doe",
    phone: "+1 204-253-9411 ext. 123",
    company_name: "The Home Depot",
    address_line1: "1999 Bishop Grandin Blvd.",
    address_line2: "Unit 408",
    address_line3: "Building #7",
    city_locality: "Winnipeg",
    state_province: "Manitoba",
    postal_code: "78756-3717",
    country_code: "CA",
    residential: false,
  },
  warehouse_id: "se-28529731",
  return_to: {
    name: "John Doe",
    phone: "+1 204-253-9411 ext. 123",
    company_name: "The Home Depot",
    address_line1: "1999 Bishop Grandin Blvd.",
    address_line2: "Unit 408",
    address_line3: "Building #7",
    city_locality: "Winnipeg",
    state_province: "Manitoba",
    postal_code: "78756-3717",
    country_code: "CA",
    residential: false,
  },
  confirmation: "none",
  customs: {
    contents: "merchandise",
    non_delivery: "return_to_sender",
    customs_items: [],
  },
  advanced_options: {
    bill_to_account: null,
    bill_to_country_code: "CA",
    bill_to_party: "recipient",
    bill_to_postal_code: null,
    contains_alcohol: false,
    delivered_duty_paid: false,
    dry_ice: false,
    dry_ice_weight: {},
    non_machinable: false,
    saturday_delivery: false,
    use_ups_ground_freight_pricing: null,
    freight_class: 77.5,
    custom_field1: null,
    custom_field2: null,
    custom_field3: null,
    origin_type: "pickup",
    collect_on_delivery: {},
  },
  origin_type: "pickup",
  insurance_provider: "none",
  tags: [],
  order_source_code: "amazon_ca",
  packages: [
    {
      package_code: "small_flat_rate_box",
      weight: {
        wtlb: 0,
        unitlb: "pound",
        wtounce: 0,
        unit: "ounce",
      },
      dimensions: {
        unit: "inch",
        length: 0,
        width: 0,
        height: 0,
      },
      insured_value: {
        0: {},
        currency: "usd",
        amount: 0,
      },
      tracking_number: "1Z932R800392060079",
      label_messages: {
        reference1: null,
        reference2: null,
        reference3: null,
      },
      external_package_id: "string",
    },
  ],
  total_weight: {
    value: 0,
    unit: "pound",
  },
};

console.log(JSON.stringify(shipment));
//axios.get("https://fakestoreapi.com/carts/user/2").then((res) => console.log(res.data));
// axios.get("https://fakestoreapi.com/products").then((res) => console.log(res.data));

// https://fakestoreapi.com/docs
// https://github.com/EthanRBrown/rrad/blob/master/addresses-us-100.json

const address = [
  /* *********** users ****************
  {
                        "address1": "1745 T Street Southeast",
                        "address2": "",
                        "city": "Washington",
                        "state": "DC",
                        "postalCode": "20020",
                        "coordinates": {
                            "lat": 38.867033,
                            "lng": -76.979235
                        }
                    }, 
  {
    address1: "6007 Applegate Lane",
    address2: "",
    city: "Louisville",
    state: "KY",
    postalCode: "40219",
    coordinates: {
      lat: 38.1343013,
      lng: -85.6498512,
    },
  },
  {
    address1: "560 Penstock Drive",
    address2: "",
    city: "Grass Valley",
    state: "CA",
    postalCode: "95945",
    coordinates: {
      lat: 39.213076,
      lng: -121.077583,
    },
  },  *********** End of users **************** */
  /* *********** Customers ****************
  {
    address1: "150 Carter Street",
    address2: "",
    city: "Manchester",
    state: "CT",
    postalCode: "06040",
    coordinates: {
      lat: 41.76556000000001,
      lng: -72.473091,
    },
  },
  
  {
    address1: "2721 Lindsay Avenue",
    address2: "",
    city: "Louisville",
    state: "KY",
    postalCode: "40206",
    coordinates: {
      lat: 38.263793,
      lng: -85.700243,
    },
  },
  
  {
    address1: "18 Densmore Drive",
    address2: "",
    city: "Essex",
    state: "VT",
    postalCode: "05452",
    coordinates: {
      lat: 44.492953,
      lng: -73.101883,
    },
  },
  
  {
    address1: "637 Britannia Drive",
    address2: "",
    city: "Vallejo",
    state: "CA",
    postalCode: "94591",
    coordinates: {
      lat: 38.10476999999999,
      lng: -122.193849,
    },
  },
  
  {
    address1: "5601 West Crocus Drive",
    address2: "",
    city: "Glendale",
    state: "AZ",
    postalCode: "85306",
    coordinates: {
      lat: 33.6152469,
      lng: -112.179737,
    },
  },
 
  {
    address1: "5403 Illinois Avenue",
    address2: "",
    city: "Nashville",
    state: "TN",
    postalCode: "37209",
    coordinates: {
      lat: 36.157077,
      lng: -86.853827,
    },
  },
  
  {
    address1: "8821 West Myrtle Avenue",
    address2: "",
    city: "Glendale",
    state: "AZ",
    postalCode: "85305",
    coordinates: {
      lat: 33.5404296,
      lng: -112.2488391,
    },
  },
   
  {
    address1: "2203 7th Street Road",
    address2: "",
    city: "Louisville",
    state: "KY",
    postalCode: "40208",
    coordinates: {
      lat: 38.218107,
      lng: -85.779006,
    },
  },
  
  {
    address1: "6463 Vrain Street",
    address2: "",
    city: "Arvada",
    state: "CO",
    postalCode: "80003",
    coordinates: {
      lat: 39.814056,
      lng: -105.046913,
    },
  },
 ***********End of Customers ****************
 */
  /*
 *********** Warehouse ****************
  {
    address1: "87 Horseshoe Drive",
    address2: "",
    city: "West Windsor",
    state: "VT",
    postalCode: "05037",
    coordinates: {
      lat: 43.4731793,
      lng: -72.4967532,
    },
  },
  {
    address1: "60 Desousa Drive",
    address2: "",
    city: "Manchester",
    state: "CT",
    postalCode: "06040",
    coordinates: {
      lat: 41.7409259,
      lng: -72.5619104,
    },
  },
   
  {
    address1: "4 Old Colony Way",
    address2: "",
    city: "Yarmouth",
    state: "MA",
    postalCode: "02664",
    coordinates: {
      lat: 41.697168,
      lng: -70.189992,
    },
  },
  
  {
    address1: "314 South 17th Street",
    address2: "",
    city: "Nashville",
    state: "TN",
    postalCode: "37206",
    coordinates: {
      lat: 36.1719075,
      lng: -86.740228,
    },
  },
  
  {
    address1: "1649 Timberridge Court",
    address2: "",
    city: "Fayetteville",
    state: "AR",
    postalCode: "72704",
    coordinates: {
      lat: 36.084563,
      lng: -94.206082,
    },
  },
  
  {
    address1: "5461 West Shades Valley Drive",
    address2: "",
    city: "Montgomery",
    state: "AL",
    postalCode: "36108",
    coordinates: {
      lat: 32.296422,
      lng: -86.34280299999999,
    },
  },
  {
    address1: "629 Debbie Drive",
    address2: "",
    city: "Nashville",
    state: "TN",
    postalCode: "37076",
    coordinates: {
      lat: 36.208114,
      lng: -86.58621199999999,
    },
  },
  {
    address1: "22572 Toreador Drive",
    address2: "",
    city: "Salinas",
    state: "CA",
    postalCode: "93908",
    coordinates: {
      lat: 36.602449,
      lng: -121.699071,
    },
  },
  *********** End of Warehouse ****************
  */
  {
    address1: "3034 Mica Street",
    address2: "",
    city: "Fayetteville",
    state: "AR",
    postalCode: "72704",
    coordinates: {
      lat: 36.0807929,
      lng: -94.2066449,
    },
  },
  {
    address1: "3729 East Mission Boulevard",
    address2: "",
    city: "Fayetteville",
    state: "AR",
    postalCode: "72703",
    coordinates: {
      lat: 36.0919353,
      lng: -94.10654219999999,
    },
  },
  {
    address1: "5114 Greentree Drive",
    address2: "",
    city: "Nashville",
    state: "TN",
    postalCode: "37211",
    coordinates: {
      lat: 36.0618539,
      lng: -86.738508,
    },
  },
  {
    address1: "3466 Southview Avenue",
    address2: "",
    city: "Montgomery",
    state: "AL",
    postalCode: "36111",
    coordinates: {
      lat: 32.341227,
      lng: -86.2846859,
    },
  },
  {
    address1: "1513 Cathy Street",
    address2: "",
    city: "Savannah",
    state: "GA",
    postalCode: "31415",
    coordinates: {
      lat: 32.067416,
      lng: -81.125331,
    },
  },
  {
    address1: "600 West 19th Avenue",
    address2: "APT B",
    city: "Anchorage",
    state: "AK",
    postalCode: "99503",
    coordinates: {
      lat: 61.203115,
      lng: -149.894107,
    },
  },
  {
    address1: "1208 Elkader Court North",
    address2: "",
    city: "Nashville",
    state: "TN",
    postalCode: "37013",
    coordinates: {
      lat: 36.080049,
      lng: -86.60116099999999,
    },
  },
  {
    address1: "210 Green Road",
    address2: "",
    city: "Manchester",
    state: "CT",
    postalCode: "06042",
    coordinates: {
      lat: 41.7909099,
      lng: -72.51195129999999,
    },
  },
  {
    address1: "49548 Road 200",
    address2: "",
    city: "O'Neals",
    state: "CA",
    postalCode: "93645",
    coordinates: {
      lat: 37.153463,
      lng: -119.648192,
    },
  },
  {
    address1: "81 Seaton Place Northwest",
    address2: "",
    city: "Washington",
    state: "DC",
    postalCode: "20001",
    coordinates: {
      lat: 38.9149499,
      lng: -77.01170259999999,
    },
  },
  {
    address1: "1267 Martin Street",
    address2: "#203",
    city: "Nashville",
    state: "TN",
    postalCode: "37203",
    coordinates: {
      lat: 36.1404897,
      lng: -86.7695179,
    },
  },
  {
    address1: "7431 Candace Way",
    address2: "#1",
    city: "Louisville",
    state: "KY",
    postalCode: "40214",
    coordinates: {
      lat: 38.142768,
      lng: -85.7717132,
    },
  },
  {
    address1: "1407 Walden Court",
    address2: "",
    city: "Crofton",
    state: "MD",
    postalCode: "21114",
    coordinates: {
      lat: 39.019306,
      lng: -76.660653,
    },
  },
  {
    address1: "5906 Milton Avenue",
    address2: "",
    city: "Deale",
    state: "MD",
    postalCode: "20751",
    coordinates: {
      lat: 38.784451,
      lng: -76.54125499999999,
    },
  },
  {
    address1: "74 Springfield Street",
    address2: "B",
    city: "Agawam",
    state: "MA",
    postalCode: "01001",
    coordinates: {
      lat: 42.0894922,
      lng: -72.6297558,
    },
  },
  {
    address1: "2905 Stonebridge Court",
    address2: "",
    city: "Norman",
    state: "OK",
    postalCode: "73071",
    coordinates: {
      lat: 35.183319,
      lng: -97.40210499999999,
    },
  },
  {
    address1: "20930 Todd Valley Road",
    address2: "",
    city: "Foresthill",
    state: "CA",
    postalCode: "95631",
    coordinates: {
      lat: 38.989466,
      lng: -120.883108,
    },
  },
  {
    address1: "5928 West Mauna Loa Lane",
    address2: "",
    city: "Glendale",
    state: "AZ",
    postalCode: "85306",
    coordinates: {
      lat: 33.6204899,
      lng: -112.18702,
    },
  },
  {
    address1: "802 Madison Street Northwest",
    address2: "",
    city: "Washington",
    state: "DC",
    postalCode: "20011",
    coordinates: {
      lat: 38.9582381,
      lng: -77.0244287,
    },
  },
  {
    address1: "2811 Battery Place Northwest",
    address2: "",
    city: "Washington",
    state: "DC",
    postalCode: "20016",
    coordinates: {
      lat: 38.9256252,
      lng: -77.0982646,
    },
  },
  {
    address1: "210 Lacross Lane",
    address2: "",
    city: "Westmore",
    state: "VT",
    postalCode: "05860",
    coordinates: {
      lat: 44.771005,
      lng: -72.048664,
    },
  },
  {
    address1: "2010 Rising Hill Drive",
    address2: "",
    city: "Norman",
    state: "OK",
    postalCode: "73071",
    coordinates: {
      lat: 35.177281,
      lng: -97.411869,
    },
  },
  {
    address1: "388 East Main Street",
    address2: "",
    state: "VT",
    postalCode: "05753",
    coordinates: {
      lat: 43.9727945,
      lng: -73.1023187,
    },
  },
  {
    address1: "450 Kinhawk Drive",
    address2: "",
    city: "Nashville",
    state: "TN",
    postalCode: "37211",
    coordinates: {
      lat: 36.030927,
      lng: -86.71949099999999,
    },
  },
  {
    address1: "131 Westerly Street",
    address2: "",
    city: "Manchester",
    state: "CT",
    postalCode: "06042",
    coordinates: {
      lat: 41.7906813,
      lng: -72.53559729999999,
    },
  },
  {
    address1: "308 Woodleaf Court",
    address2: "",
    city: "Glen Burnie",
    state: "MD",
    postalCode: "21061",
    coordinates: {
      lat: 39.1425931,
      lng: -76.6238441,
    },
  },
  {
    address1: "8502 Madrone Avenue",
    address2: "",
    city: "Louisville",
    state: "KY",
    postalCode: "40258",
    coordinates: {
      lat: 38.1286407,
      lng: -85.8678042,
    },
  },
  {
    address1: "23 Sable Run Lane",
    address2: "",
    city: "Methuen",
    state: "MA",
    postalCode: "01844",
    coordinates: {
      lat: 42.759847,
      lng: -71.157721,
    },
  },
  {
    address1: "716 Waller Road",
    address2: "",
    city: "Brentwood",
    state: "TN",
    postalCode: "37027",
    coordinates: {
      lat: 35.998892,
      lng: -86.696529,
    },
  },
  {
    address1: "416 McIver Street",
    address2: "",
    city: "Nashville",
    state: "TN",
    postalCode: "37211",
    coordinates: {
      lat: 36.10436,
      lng: -86.74411599999999,
    },
  },
  {
    address1: "1508 Massachusetts Avenue Southeast",
    address2: "",
    city: "Washington",
    state: "DC",
    postalCode: "20003",
    coordinates: {
      lat: 38.887255,
      lng: -76.98318499999999,
    },
  },
  {
    address1: "5615 West Villa Maria Drive",
    address2: "",
    city: "Glendale",
    state: "AZ",
    postalCode: "85308",
    coordinates: {
      lat: 33.650988,
      lng: -112.180624,
    },
  },
  {
    address1: "3162 Martin Luther King Junior Boulevard",
    address2: "#2",
    city: "Fayetteville",
    state: "AR",
    postalCode: "72704",
    coordinates: {
      lat: 36.05233310000001,
      lng: -94.2056987,
    },
  },
  {
    address1: "5306 Ritchie Highway",
    address2: "",
    city: "Baltimore",
    state: "MD",
    postalCode: "21225",
    coordinates: {
      lat: 39.221978,
      lng: -76.614183,
    },
  },
  {
    address1: "109 Summit Street",
    address2: "",
    city: "Burlington",
    state: "VT",
    postalCode: "05401",
    coordinates: {
      lat: 44.4729749,
      lng: -73.2026566,
    },
  },
  {
    address1: "816 West 19th Avenue",
    address2: "",
    city: "Anchorage",
    state: "AK",
    postalCode: "99503",
    coordinates: {
      lat: 61.203221,
      lng: -149.898655,
    },
  },
];
