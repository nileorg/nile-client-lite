# nile-client

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Nile Repository

basically it works like this
shop page (list of products)
```
[
  {
    "name": "Tonkotsu Ramen",
    "image": "",
    "description": "Ramen di Maiale (spaghetti di grano, uovo, spinaci, carne di maiale, soia)",
    "price": 15,
    "tags": [
      "ramen"
    ]
  },
...
]
```
you publish this file on IPFS and save the CID
then you have the page of the city
```
[
  ...
  {
    "IPFS_LINK": "LINK TO IPFS CID OF PREVIOUSLY ADDED SHOP"
    "uid": "sosushi",
    "name": "Sosushi Plus",
    "description": "Sushi a Piacenza",
    "image": "https://www.vitaincentroapiacenza.com/wp-content/uploads/2020/02/sosushi-piacenza-cucina-giapponese-848x566.jpg",
    "logo": "https://www.sosushiplus.it/wp-content/uploads/2020/07/logo-sosushi-plus-piacenza-sushi-restaurant-300x131-1.png",
    "tags": [
      "hamburger",
      "vegan"
    ],
    "contacts": [
      {
        "type": "whatsapp",
        "value": "+393393193687"
      },
      {
        "type": "sms",
        "value": "+393393193687"
      },
      {
        "type": "call",
        "value": "+393393193687"
      }
    ],
    "paymentMethods": [
      {
        "type": "cash",
        "value": ""
      }
    ]
  },
...
]
```
and then publish this file on ipfs and save the CID
do the same thing with the main repository
```
[
  {
    "IPFS_LINK": "LINK TO IPFS CID OF PREVIOUSLY ADDED CITY"
    "uid": "piacenza",
    "name": "Piacenza",
    "description": "La primogenita",
    "image": "https://www.eventicapodanno.com/wp-content/uploads/2016/12/Piacenza-nuova-2.jpg",
    "logo": "https://www.informafamiglie.it/immagini-newsletter/logo_comune_piacenza.jpg/@@images/image.jpeg"
  }
]
```
so from the file of the cities you can find the file of the city and from there you can find the file of the single shop

this use to be done automatically when updating this repo https://github.com/nileorg/nile-repository

because there was a CI calling a server that had this service: https://github.com/nileorg/nile-publisher
