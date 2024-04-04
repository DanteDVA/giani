var APP_DATA = {
  "scenes": [
    {
      "id": "0-ingressodisimpegno",
      "name": "INGRESSO/DISIMPEGNO",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -2.644353473484326,
        "pitch": 0.04952622139240148,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 3.0276910636258805,
          "pitch": 0.11910175448877425,
          "rotation": 0,
          "target": "2-cucinapranzo"
        },
        {
          "yaw": -2.186932616357666,
          "pitch": 0.12693749619719696,
          "rotation": 0,
          "target": "4-camera-1"
        },
        {
          "yaw": -1.5210235545975301,
          "pitch": 0.13100354476622833,
          "rotation": 0,
          "target": "6-bagno"
        },
        {
          "yaw": -1.036692707485786,
          "pitch": 0.1135268255599371,
          "rotation": 0,
          "target": "5-camera-2"
        },
        {
          "yaw": 0.03013942113031831,
          "pitch": 0.19806264856360656,
          "rotation": 0,
          "target": "1-soggiorno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-soggiorno",
      "name": "SOGGIORNO",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.10046873443096516,
        "pitch": 0.456097462220308,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": -2.811514230279389,
          "pitch": 0.16185047608578707,
          "rotation": 0,
          "target": "0-ingressodisimpegno"
        },
        {
          "yaw": -0.011776136460436959,
          "pitch": 0.02347316486624962,
          "rotation": 0,
          "target": "3-balcone"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cucinapranzo",
      "name": "CUCINA/PRANZO",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -1.592096114382116,
        "pitch": 0.0011665967209921746,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 2.9117830854019564,
          "pitch": 0.07807466022428144,
          "rotation": 0,
          "target": "0-ingressodisimpegno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-balcone",
      "name": "BALCONE",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 1.6815117603102925,
        "pitch": 0.3745330591483089,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 0.8019907508159001,
          "pitch": 0.23190769364533814,
          "rotation": 0,
          "target": "1-soggiorno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-camera-1",
      "name": "CAMERA 1",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.1259853170929972,
        "pitch": 0.11165460253020854,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 0.90287731779949,
          "pitch": 0.05330627101422536,
          "rotation": 0,
          "target": "0-ingressodisimpegno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-camera-2",
      "name": "CAMERA 2",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.9271507031058395,
        "pitch": 0.11594155924869476,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": -2.4877651957851956,
          "pitch": 0.1192622973104136,
          "rotation": 0,
          "target": "0-ingressodisimpegno"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bagno",
      "name": "BAGNO",
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
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.00704583872986575,
        "pitch": 0.07501945900527218,
        "fov": 1.3075341612089257
      },
      "linkHotspots": [
        {
          "yaw": 3.028964558057737,
          "pitch": -0.006736220709086638,
          "rotation": 0,
          "target": "0-ingressodisimpegno"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
