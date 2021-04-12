var jsn = [
  {
    "_id": "1",
    "name": "reprehenderit",
    "children": [
      {
        "_id": "1.1",
        "name": "est",
        "children": [
          {
            "_id": "1.1.1",
            "name": "occaecat"
          },
          {
            "_id": "1.1.2",
            "name": "esse"
          }
        ]
      },
      {
        "_id": "1.2",
        "name": "ut",
        "children": [
          {
            "_id": "1.2.1",
            "name": "est"
          },
          {
            "_id": "1.2.2",
            "name": "non"
          }
        ]
      },
      {
        "_id": "1.3",
        "name": "culpa"
      }
    ]
  },
  {
    "_id": "2",
    "name": "reprehenderit",
    "children": [
      {
        "_id": "2.1",
        "name": "reprehenderit",
        "children": [
          {
            "_id": "2.1.1",
            "name": "in"
          }
        ]
      },
      {
        "_id": "2.2",
        "name": "eu",
        "children": [
          {
            "_id": "2.2.1",
            "name": "ea"
          },
          {
            "_id": "2.2.2",
            "name": "proident"
          },
          {
            "_id": "2.2.3",
            "name": "tempor"
          },
          {
            "_id": "2.2.4",
            "name": "dolore"
          }
        ]
      }
    ]
  },
  {
    "_id": "3",
    "name": "quis",
    "children": [
      {
        "_id": "3.1",
        "name": "labore",
        "children": [
          {
            "_id": "3.1.1",
            "name": "cupidatat"
          },
          {
            "_id": "3.1.2",
            "name": "culpa"
          }
        ]
      }
    ]
  },
  {
    "_id": "4",
    "name": "consectetur",
    "children": [
      {
        "_id": "4.1",
        "name": "pariatur",
        "children": [
          {
            "_id": "4.1.1",
            "name": "anim"
          }
        ]
      },
      {
        "_id": "4.2",
        "name": "voluptate",
        "children": [
          {
            "_id": "4.2.1",
            "name": "minim"
          },
          {
            "_id": "4.2.2",
            "name": "culpa"
          },
          {
            "_id": "4.2.3",
            "name": "incididunt"
          },
          {
            "_id": "4.2.4",
            "name": "labore"
          },
          {
            "_id": "4.2.5",
            "name": "magna"
          }
        ]
      }
    ]
  },
  {
    "_id": "6",
    "name": "veniam",
    "children": [
      {
        "_id": "6.1",
        "name": "quis",
        "children": [
          {
            "_id": "6.1.1",
            "name": "amet"
          }
        ]
      },
      {
        "_id": "6.2",
        "name": "est",
        "children": [
          {
            "_id": "6.2.1",
            "name": "esse"
          }
        ]
      },
      {
        "_id": "6.3",
        "name": "nulla"
      }
    ]
  }
];

function dest(jsonObject){
  arr = []  
  function rec(a){ 
    for (const n of a){   
      arr.push({name: n.name, _id: n._id})  
      if(n.children){
        rec(n.children)      
      }
    }
  }
  rec(jsonObject);
  return arr  
}
console.log(jsn);


console.log(dest(jsn))
