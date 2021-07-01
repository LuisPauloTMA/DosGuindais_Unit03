var APP_DATA = {
  "scenes": [
    {
      "id": "0-unit03_hall",
      "name": "Unit03_Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03494434809390512,
          "pitch": 0.6329759338561427,
          "rotation": 0,
          "target": "1-unit03_living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-unit03_living",
      "name": "Unit03_Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2843437815069763,
          "pitch": 0.5267143599150295,
          "rotation": 0,
          "target": "2-unit03_bedroom"
        },
        {
          "yaw": -2.7924841852134,
          "pitch": 0.4881452028930653,
          "rotation": 0,
          "target": "0-unit03_hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-unit03_bedroom",
      "name": "Unit03_Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.0013192725131041527,
        "pitch": 0.13583703285991078,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.546188908631752,
          "pitch": 0.6267855196702765,
          "rotation": 0,
          "target": "1-unit03_living"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "DosGuindais_Unit03",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
