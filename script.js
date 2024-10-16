TweenLite.defaultEase = Linear.easeNone;
const content = document.querySelectorAll(".content");
const controller = new ScrollMagic.Controller();

const t1 = new TimelineMax();

// Adjusted for three sections
t1.to("#js-slideContainer", 1, { xPercent: -66.66 });
t1.from(content[1], 0.5, { opacity: 0, scale: 2.5 });
t1.from(content[2], 0.5, { opacity: 0, scale: 2.5 });

new ScrollMagic.Scene({
  triggerElement: "#js-wrapper",
  triggerHook: "onLeave",
  duration: "300%", // Adjusted duration for three sections
})
  .setPin("#js-wrapper")
  .setTween(t1)
  // .addIndicators({
  //   colorTrigger: "White",
  //   colorStart: "black",
  //   colorEnd: "red",
  // })
  .addTo(controller);

/********************************************** Globe Plugin *******************************************************/

const locations = [ 
  { lat: 51.5007, lng: -0.1246, image: 'images/download.jpeg', name: 'John Smith', color: 'white', id: '1a3424' }, // UK
  { lat: 40.6892, lng: -74.0445, image: 'images/download1.jpeg', name: 'Emma Johnson', color: 'white', id: '2a3424'}, // USA
  { lat: -22.9519, lng: -43.2105, image: 'images/download2.jpeg', name: 'Michael Williams', color: 'white', id: '3a3424' }, // Brazil
  { lat: 35.6895, lng: 139.6917, image: 'images/download3.jpeg', name: 'Sophia Brown', color: 'white' , id: '4a3424' }, // Japan
  { lat: 55.7558, lng: 37.6173, image: 'images/download4.jpeg', name: 'Liam Jones', color: 'white' , id: '5a3424'}, // Russia
  { lat: -33.8568, lng: 151.2153, image: 'images/download5.jpeg', name: 'Olivia Garcia', color: 'white' , id: '6a3424'}, // Australia
  { lat: 48.2023, lng: 16.3738, image: 'images/download1.jpeg', name: 'Noah Miller', color: 'white' , id: '7a3424'}, // Austria
  { lat: 41.9028, lng: 12.4964, image: 'images/download.jpeg', name: 'Ava Davis', color: 'white' , id: '8a3424'}, // Italy
  { lat: 37.7749, lng: -122.4194, image: 'images/download5.jpeg', name: 'James Martinez', color: 'white' , id: '9a3424'}, // USA

  // India Locations
  { lat: 28.6139, lng: 77.2090, image: 'images/download4.jpeg', name: 'Aryan Singh', color: 'white' , id: '1a1424'}, // New Delhi, India
  { lat: 19.0760, lng: 72.8777, image: 'images/download3.jpeg', name: 'Isha Patel', color: 'white', id: '1a2424' }, // Mumbai, India
  { lat: 13.0827, lng: 80.2707, image: 'images/download2.jpeg', name: 'Vikram Reddy', color: 'white' , id: '1a3424'}, // Chennai, India
  { lat: 12.9716, lng: 77.5946, image: 'images/download1.jpeg', name: 'Nisha Rao', color: 'white', id: '1a4424' }, // Bangalore, India
  { lat: 22.5726, lng: 88.3639, image: 'images/download.jpeg', name: 'Rahul Gupta', color: 'white' , id: '1a5424'}, // Kolkata, India
  { lat: 26.9124, lng: 75.7873, image: 'images/download5.jpeg', name: 'Pooja Mehta', color: 'white', id: '1a6424' }, // Jaipur, India
  { lat: 21.1702, lng: 72.8311, image: 'images/download4.jpeg', name: 'Anil Desai', color: 'white', id: '1a7424' }, // Surat, India
  { lat: 23.0225, lng: 72.5714, image: 'images/download3.jpeg', name: 'Sanya Bhatia', color: 'white', id: '1a8424' }, // Ahmedabad, India

  // France Locations
  { lat: 48.8566, lng: 2.3522, image: 'images/download2.jpeg', name: 'Luc Dubois', color: 'white' , id: '1a3124'}, // Paris, France
  { lat: 43.7102, lng: 7.2620, image: 'images/download3.jpeg', name: 'Chloe Moreau', color: 'white' , id: '1a3224'}, // Nice, France
  { lat: 45.7640, lng: 4.8357, image: 'images/download4.jpeg', name: 'Adrien Lefevre', color: 'white' , id: '1a3324'}, // Lyon, France
  { lat: 44.8378, lng: -0.5792, image: 'images/download5.jpeg', name: 'Marie Garnier', color: 'white' , id: '1a3424'}, // Bordeaux, France
  { lat: 50.6292, lng: 3.0573, image: 'images/download1.jpeg', name: 'Antoine Fontaine', color: 'white' , id: '1a3524'}, // Lille, France
  { lat: 43.2965, lng: 5.3698, image: 'images/download.jpeg', name: 'Juliette Martin', color: 'white', id: '1a3624' }, // Marseille, France
  { lat: 48.5734, lng: 7.7521, image: 'images/download2.jpeg', name: 'Hugo Bernard', color: 'white' , id: '1a3724'}, // Strasbourg, France
  { lat: 47.2184, lng: -1.5536, image: 'images/download3.jpeg', name: 'Camille Laurent', color: 'white', id: '1a3824'}, // Nantes, France
  { lat: 49.4944, lng: 0.1079, image: 'images/download4.jpeg', name: 'Louise Dupont', color: 'white' , id: '1a3924'}, // Le Havre, France

  // More global locations (mix of other random countries)
  { lat: 52.5200, lng: 13.4050, image: 'images/download1.jpeg', name: 'Luca Meyer', color: 'white' , id: '1b3424'}, // Berlin, Germany
  { lat: -34.6037, lng: -58.3816, image: 'images/download2.jpeg', name: 'Gabriel Fernandez', color: 'white' , id: '1c3424'}, // Buenos Aires, Argentina
  { lat: 34.0522, lng: -118.2437, image: 'images/download3.jpeg', name: 'Jack Thompson', color: 'white' , id: '1d3424'}, // Los Angeles, USA
  { lat: 40.4168, lng: -3.7038, image: 'images/download4.jpeg', name: 'Paula Gutierrez', color: 'white', id: '1e3424' }, // Madrid, Spain
  { lat: -37.8136, lng: 144.9631, image: 'images/download5.jpeg', name: 'Oliver Wright', color: 'white', id: '1f3424' }, // Melbourne, Australia
  { lat: 43.6532, lng: -79.3832, image: 'images/download.jpeg', name: 'Ella Campbell', color: 'white' , id: '1g3424'}, // Toronto, Canada
  { lat: 31.2304, lng: 121.4737, image: 'images/download1.jpeg', name: 'Lily Chen', color: 'white', id: '1h3424' }, // Shanghai, China
  { lat: -1.2921, lng: 36.8219, image: 'images/download2.jpeg', name: 'Brian Omondi', color: 'white', id: '1i3424' }, // Nairobi, Kenya
  { lat: 39.9042, lng: 116.4074, image: 'images/download3.jpeg', name: 'Meng Zhang', color: 'white', id: '1j3424' }, // Beijing, China
  { lat: 50.8503, lng: 4.3517, image: 'images/download4.jpeg', name: 'Lucas Van den Berg', color: 'white', id: '1k3424' }, // Brussels, Belgium

  
  { lat: 51.5007, lng: -0.1246, image: 'images/download.jpeg', name: 'John Smith', color: 'white' , id: '1l3424'},
  { lat: 40.6892, lng: -74.0445, image: 'images/download1.jpeg', name: 'Emma Johnson', color: 'white', id: '1m3424' },
  { lat: -22.9519, lng: -43.2105, image: 'images/download2.jpeg', name: 'Michael Williams', color: 'white', id: '1n3424' },
  { lat: 35.6895, lng: 139.6917, image: 'images/download3.jpeg', name: 'Sophia Brown', color: 'white', id: '1o3424' },
  { lat: 55.7558, lng: 37.6173, image: 'images/download4.jpeg', name: 'Liam Jones', color: 'white', id: '1p3424' },
  { lat: -33.8568, lng: 151.2153, image: 'images/download5.jpeg', name: 'Olivia Garcia', color: 'white' , id: '1q3424'},
  { lat: 48.2023, lng: 16.3738, image: 'images/download1.jpeg', name: 'Noah Miller', color: 'white' , id: '1r3424'},
  { lat: 41.9028, lng: 12.4964, image: 'images/download.jpeg', name: 'Ava Davis', color: 'white', id: '1s3424' },
  { lat: 37.7749, lng: -122.4194, image: 'images/download5.jpeg', name: 'James Martinez', color: 'white' , id: '1t3424'},
  
  { lat: 48.8566, lng: 2.3522, image: 'images/download2.jpeg', name: 'Mia Hernandez', color: 'white' , id: '1u3424'},
  { lat: 52.5200, lng: 13.4050, image: 'images/download3.jpeg', name: 'Benjamin Wilson', color: 'white' , id: '1v3424'},
  { lat: 34.0522, lng: -118.2437, image: 'images/download4.jpeg', name: 'Isabella Thomas', color: 'white' , id: '1w3424'},
  { lat: -34.6037, lng: -58.3816, image: 'images/download5.jpeg', name: 'Lucas Martinez', color: 'white', id: '1x3424' },
  { lat: 40.7128, lng: -74.0060, image: 'images/download1.jpeg', name: 'Amelia Anderson', color: 'white' , id: '1y3424'},
  { lat: 51.1657, lng: 10.4515, image: 'images/download2.jpeg', name: 'Elijah Taylor', color: 'white' , id: '1z3424'},
  { lat: 35.6762, lng: 139.6503, image: 'images/download3.jpeg', name: 'Charlotte White', color: 'white', id: 'aa3424' },
  { lat: 19.4326, lng: -99.1332, image: 'images/download4.jpeg', name: 'Mason Harris', color: 'white' , id: 'ba3424'},
  { lat: 55.3781, lng: -3.4360, image: 'images/download5.jpeg', name: 'Ella Clark', color: 'white' , id: 'ca3424'},
  { lat: -37.8136, lng: 144.9631, image: 'images/download.jpeg', name: 'Alexander Lee', color: 'white' , id: 'images/da3424'},
  
  { lat: 43.6532, lng: -79.3832, image: 'images/download1.jpeg', name: 'Harper Scott', color: 'white' , id: 'ea3424'},
  { lat: 45.5017, lng: -73.5673, image: 'images/download2.jpeg', name: 'Ethan Turner', color: 'white' , id: 'fa3424'},
  { lat: -23.5505, lng: -46.6333, image: 'images/download3.jpeg', name: 'Grace Lewis', color: 'white' , id: 'ga3424'},
  { lat: 51.509865, lng: -0.118092, image: 'images/download4.jpeg', name: 'Logan Walker', color: 'white' , id: 'ha3424'},
  { lat: 41.3851, lng: 2.1734, image: 'images/download5.jpeg', name: 'Sofia King', color: 'white' , id: 'i3424'},
  { lat: 48.2082, lng: 16.3738, image: 'images/download1.jpeg', name: 'Jacob Hill', color: 'white' , id: 'ja3424'},
  { lat: 40.4168, lng: -3.7038, image: 'images/download2.jpeg', name: 'Scarlett Wright', color: 'white' , id: 'ka3424'},
  { lat: 34.6937, lng: 135.5023, image: 'images/download3.jpeg', name: 'Daniel Green', color: 'white' , id: 'la3424'},
  { lat: 55.9533, lng: -3.1883, image: 'images/download4.jpeg', name: 'Victoria Adams', color: 'white' , id: 'ma3424'},
  { lat: 59.3293, lng: 18.0686, image: 'images/download5.jpeg', name: 'Matthew Baker', color: 'white' , id: 'na3424'},

  // Continue adding 170 more entries with random names and coordinates
  { lat: 50.8503, lng: 4.3517, image: 'images/download.jpeg', name: 'Emily Nelson', color: 'white' , id: 'oa3424'},
  { lat: 39.9042, lng: 116.4074, image: 'images/download1.jpeg', name: 'Henry Mitchell', color: 'white', id: 'pa3424' },
  { lat: -15.7801, lng: -47.9292, image: 'images/download2.jpeg', name: 'Zoe Perez', color: 'white' , id: 'qa3424'},
  { lat: 25.2048, lng: 55.2708, image: 'images/download3.jpeg', name: 'William Roberts', color: 'white', id: 'ra3424' },
  { lat: 28.6139, lng: 77.2090, image: 'images/download4.jpeg', name: 'Lily Carter', color: 'white' , id: 'sa3424'},
  { lat: -1.2921, lng: 36.8219, image: 'images/download5.jpeg', name: 'Samuel Phillips', color: 'white' , id: 'ta3424'},
  { lat: -33.9249, lng: 18.4241, image: 'images/download1.jpeg', name: 'Leah Campbell', color: 'white' , id: 'ua3424'},
  { lat: 52.2297, lng: 21.0122, image: 'images/download2.jpeg', name: 'David Parker', color: 'white' , id: 'va3424'},
  { lat: 31.2304, lng: 121.4737, image: 'images/download3.jpeg', name: 'Ellie Evans', color: 'white' , id: 'wa3424'},
  { lat: 52.3667, lng: 4.8945, image: 'images/download4.jpeg', name: 'Aiden Collins', color: 'white' , id: 'xa3424'},

  
];
let camera;

function showGlobe(locations){

  if (!camera) {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
  }
  console.log(locations['0']['lat']);


const lat = locations['0']['lat']; 
const lon = locations['0']['lng']; 
const alt = 0.1; 


const latRad = lat * (Math.PI / 180);
const lonRad = lon * (Math.PI / 180);



const R = 6551;


const x = (R + alt) * Math.cos(latRad) * Math.cos(lonRad);
console.log('value of x:',x);
const y = (R + alt) * Math.sin(latRad);
const z = (R + alt) * Math.cos(latRad) * Math.sin(lonRad);



    const myGlobe = Globe()
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
    .htmlElementsData(locations)
    .htmlElement(d => {
      const el = document.createElement('div');
      const im = d.image;
      el.className = 'marker';
      el.innerHTML = `
      <img src=${im} alt="Location" /><br>
      <span>${d.name}</span>
       `
      ;
      el.style.color = d.color;
      el.style['pointer-events'] = 'auto';
      el.style.cursor = 'pointer';
      el.autofocus = 'true';

      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.innerText = d.name; // Set tooltip text
      tooltip.style.position = 'absolute';
      tooltip.style.display = 'block'; // Initially hidden
      tooltip.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
      tooltip.style.border = '1px solid black';
      tooltip.style.padding = '5px';
      tooltip.style.borderRadius = '4px';
      tooltip.style.whiteSpace = 'nowrap'; // Prevent line breaks
      tooltip.style.zIndex = '1000'; // Ensure it's above other elements

      el.appendChild(tooltip); // Append tooltip to marker

      el.onmouseover = (event) => {
        console.log(el);
        tooltip.style.display = 'block'; 
        tooltip.style.left = `${event.clientX + 10}px`; 
        tooltip.style.top = `${event.clientY + 10}px`;
      };

      el.onmouseout = () => {
        tooltip.style.display = 'hidden'; 
      };

      el.onclick = () => {
        window.location.href = `legecies/index.html?name=${encodeURIComponent(d.name)}`;
      };
      return el;
    })
    
  (document.getElementById('globeViz'));
    console.log(myGlobe.camera());
        myGlobe.camera().position.x =x;
        myGlobe.camera().position.y =y;
        myGlobe.camera().position.z =z;
        myGlobe.camera().zoom =15;
        myGlobe.camera().lookAt( 0, 0, 1000 );
        myGlobe.controls().minDistance = 50; 
        myGlobe.controls().maxDistance = 7000; 



  function rotateGlobe() {
    myGlobe.controls().autoRotate = true;
    myGlobe.controls().autoRotateSpeed = 0.3; 
  }
  // myGlobe.controls().autoFocus = true;

  rotateGlobe();
    const zoomThreshold = 2500; 
    const level = 0;
    myGlobe.controls().minDistance=100;
   myGlobe.controls().addEventListener('change', () => {
   
    const zoomLevel = myGlobe.controls().getDistance(); 
    console.log(zoomLevel);
    if (zoomLevel < zoomThreshold) {
      myGlobe.controls().autoRotate = false;
    } else {
      myGlobe.controls().autoRotate = true; 
    }

    if(zoomLevel > 4500){
      filteredLocations = locations.slice(0,10); 
      myGlobe.htmlElementsData(filteredLocations);
      console.log(filteredLocations.length)
    }
    else if(zoomLevel > 2000 && zoomLevel <= 4500)
    {
      filteredLocations = locations.slice(0,25);
      myGlobe.htmlElementsData(filteredLocations);
    }

    else if(zoomLevel > 900 && zoomLevel < 2000)
    {
      filteredLocations = locations.slice(0,75); 
      myGlobe.htmlElementsData(filteredLocations);
    }
    else {
      myGlobe.htmlElementsData(locations);
    }

  });
}

window.onload = () => {
  showGlobe(locations);
};

 
 document.getElementById('searchBtn').addEventListener('click', () => {
 event.preventDefault()
 const searchTerm = document.getElementById('searchBox').value.trim().toLowerCase();
 const locate = locations.filter(location => 
  location.name.toLowerCase().includes(searchTerm) || location.id.includes(searchTerm)
);
    console.log(locate);
    showGlobe(locate);

});

document.getElementById('searchcodeBtn').addEventListener('click', () => {
 const searchTerm = document.getElementById('searchcode').value.trim();
 console.log(searchTerm.length);
 if(searchTerm.length == '6'){
 const locate = locations.filter(location => location.id.includes(searchTerm));
    console.log(locate);
    showGlobe(locate);
 }else{
  document.getElementById('code_err').innerHTML = 'Enter a valid 6 digit code.';
 }
});