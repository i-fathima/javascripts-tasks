const tasks = [
  {
    "id": "task01",
    "file": "task01.js"
  },
  {
    "id": "task02",
    "file": "task02.js"
  },
  {
    "id": "task03",
    "file": "task03.js"
  },
  {
    "id": "task04",
    "file": "task04.js"
  },
  {
    "id": "task05",
    "file": "task05.js"
  },
  {
    "id": "task06",
    "file": "task06.js"
  },
  {
    "id": "task07",
    "file": "task07.js"
  },
  {
    "id": "task08",
    "file": "task08.js"
  },
  {
    "id": "task09",
    "file": "task09.js"
  },
  {
    "id": "task10",
    "file": "task10.js"
  },
  {
    "id": "task11",
    "file": "task11.js"
  },
  {
    "id": "task12",
    "file": "task12.js"
  },
  {
    "id": "task13",
    "file": "task13.js"
  },
  {
    "id": "task14",
    "file": "task14.js"
  },
  {
    "id": "task15",
    "file": "task15.js"
  },
  {
    "id": "task16",
    "file": "task16.js"
  },
  {
    "id": "task17",
    "file": "task17.js"
  },
  {
    "id": "task18",
    "file": "task18.js"
  },
  {
    "id": "task19",
    "file": "task19.js"
  },
  {
    "id": "task20",
    "file": "task20.js"
  },
  {
    "id": "task21",
    "file": "task21.js"
  },
  {
    "id": "task22",
    "file": "task22.js"
  },
  {
    "id": "task23",
    "file": "task23.js"
  },
  {
    "id": "task24",
    "file": "task24.js"
  },
  {
    "id": "task25",
    "file": "task25.js"
  },
  {
    "id": "task26",
    "file": "task26.js"
  },
  {
    "id": "task27",
    "file": "task27.js"
  },
  {
    "id": "task28",
    "file": "task28.js"
  },
  {
    "id": "task29",
    "file": "task29.js"
  },
  {
    "id": "task30",
    "file": "task30.js"
  },
  {
    "id": "task31",
    "file": "task31.js"
  },
  {
    "id": "task32",
    "file": "task32.js"
  },
  {
    "id": "task33",
    "file": "task33.js"
  },
  {
    "id": "task34",
    "file": "task34.js"
  },
  {
    "id": "task35",
    "file": "task35.js"
  },
  {
    "id": "task36",
    "file": "task36.js"
  },
  {
    "id": "task37",
    "file": "task37.js"
  },
  {
    "id": "task38",
    "file": "task38.js"
  },
  {
    "id": "task39",
    "file": "task39.js"
  },
  {
    "id": "task40",
    "file": "task40.js"
  },
  {
    "id": "task41",
    "file": "task41.js"
  },
  {
    "id": "task42",
    "file": "task42.js"
  },
  {
    "id": "task43",
    "file": "task43.js"
  },
  {
    "id": "task44",
    "file": "task44.js"
  },
  {
    "id": "task45",
    "file": "task45.js"
  },
  {
    "id": "task46",
    "file": "task46.js"
  },
  {
    "id": "task47",
    "file": "task47.js"
  },
  {
    "id": "task48",
    "file": "task48.js"
  },
  {
    "id": "task49",
    "file": "task49.js"
  },
  {
    "id": "task50",
    "file": "task50.js"
  },
  {
    "id": "task51",
    "file": "task51.js"
  },
  {
    "id": "task52",
    "file": "task52.js"
  },
  {
    "id": "task53",
    "file": "task53.js"
  },
  {
    "id": "task54",
    "file": "task54.js"
  },
  {
    "id": "task55",
    "file": "task55.js"
  },
  {
    "id": "task56",
    "file": "task56.js"
  },
  {
    "id": "task57",
    "file": "task57.js"
  },
  {
    "id": "task58",
    "file": "task58.js"
  },
  {
    "id": "task59",
    "file": "task59.js"
  },
  {
    "id": "task60",
    "file": "task60.js"
  },
  {
    "id": "task61",
    "file": "task61.js"
  },
  {
    "id": "task62",
    "file": "task62.js"
  },
  {
    "id": "task63",
    "file": "task63.js"
  },
  {
    "id": "task64",
    "file": "task64.js"
  },
  {
    "id": "task65",
    "file": "task65.js"
  },
  {
    "id": "task66",
    "file": "task66.js"
  },
  {
    "id": "task67",
    "file": "task67.js"
  },
  {
    "id": "task68",
    "file": "task68.js"
  },
  {
    "id": "task69",
    "file": "task69.js"
  },
  {
    "id": "task70",
    "file": "task70.js"
  },
  {
    "id": "task71",
    "file": "task71.js"
  },
  {
    "id": "task72",
    "file": "task72.js"
  },
  {
    "id": "task73",
    "file": "task73.js"
  },
  {
    "id": "task74",
    "file": "task74.js"
  },
  {
    "id": "task75",
    "file": "task75.js"
  }
];

window.addEventListener('DOMContentLoaded', () => {
  tasks.forEach(task => {
    const button = document.getElementById(task.id);
    if (!button) return;
    button.addEventListener('click', () => {
      import(`./${task.file}`)
        .then(module => {
          if (typeof module[task.id] === 'function') {
            module[task.id]();
          } else {
            alert(`Unable to find function ${task.id} in ${task.file}`);
          }
        })
        .catch(error => {
          alert(`Error loading ${task.file}: ${error}`);
        });
    });
  });
});
