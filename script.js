const words = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Web Enthusiast"
];

const typewriter = document.getElementById("typewriter");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // Typing speed in ms

function type() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
    typewriter.textContent = currentWord.substring(0, charIndex);
  } else {
    charIndex++;
    typewriter.textContent = currentWord.substring(0, charIndex);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    // Pause when word is fully typed
    isDeleting = true;
    setTimeout(type, 1500); // Slightly longer pause
  } else if (isDeleting && charIndex === 0) {
    // Move to next word
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, typingSpeed);
  }
}

// Start typing
type();


// THREE.JS BACKGROUND FOR BLUE THEME
const canvas = document.getElementById("bgCanvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 50;

const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// 1️⃣ PARTICLES (neon blue)
const particleCount = 150;
const particlesGeometry = new THREE.BufferGeometry();
const positions = [];

for (let i = 0; i < particleCount; i++) {
  positions.push((Math.random() - 0.5) * 200);
  positions.push((Math.random() - 0.5) * 200);
  positions.push((Math.random() - 0.5) * 200);
}

particlesGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(positions, 3)
);

const particlesMaterial = new THREE.PointsMaterial({
  color: 0x1e90ff,
  size: 1.5,
  transparent: true,
  opacity: 0.8
});

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// 2️⃣ CORNER CUBES (larger, light blue)
const cornerCubes = [];
const cubeGeometry = new THREE.BoxGeometry(6, 6, 6);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: 0x00bfff,
  wireframe: true,
  transparent: true,
  opacity: 0.6
});

// Define 4 corners
const corners = [
  [-40, 40, -20],   // top-left
  [-40, -40, -20],  // bottom-left
  [40, 40, -20],    // top-right
  [40, -40, -20],   // bottom-right
];

corners.forEach(pos => {
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(...pos);
  scene.add(cube);
  cornerCubes.push(cube);
});

// 3️⃣ SMALL TORUS (subtle, top-left)
const torusGeometry = new THREE.TorusGeometry(5, 0.8, 16, 100);
const torusMaterial = new THREE.MeshBasicMaterial({
  color: 0x8a2be2,
  wireframe: true,
  transparent: true,
  opacity: 0.4
});
const torus = new THREE.Mesh(torusGeometry, torusMaterial);
torus.position.set(-25, 30, -10); // corner-ish
scene.add(torus);

// 4️⃣ SPHERE CLUSTER (light neon blue, floating)
const spheres = [];
const sphereGeometry = new THREE.SphereGeometry(2.5, 16, 16);
const sphereMaterial = new THREE.MeshBasicMaterial({
  color: 0x1e90ff,
  wireframe: true,
  transparent: true,
  opacity: 0.5
});

for (let i = 0; i < 6; i++) {
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(
    (Math.random() - 0.5) * 70,
    (Math.random() - 0.5) * 70,
    (Math.random() - 0.5) * 70
  );
  scene.add(sphere);
  spheres.push(sphere);
}

// ANIMATION
function animate() {
  requestAnimationFrame(animate);

  particles.rotation.y += 0.0008;

  cornerCubes.forEach(cube => {
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
  });

  torus.rotation.x += 0.002;
  torus.rotation.y += 0.002;

  spheres.forEach(sphere => {
    sphere.position.y += Math.sin(Date.now() * 0.0005) * 0.02;
    sphere.rotation.x += 0.004;
    sphere.rotation.y += 0.004;
  });

  renderer.render(scene, camera);
}

animate();

// RESIZE HANDLER
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});










const header = document.querySelector('#header');
const home_nav = document.querySelector('.home_nav');
const home_per_jao = document.querySelector('.home_per_jao');
const hero_section = document.querySelector('.hero_section');
const about_for_me = document.querySelector('.about_for_me');
const about_me = document.querySelector('.about_me');
const about_section = document.querySelector('#about');
const skill_section = document.querySelector('#skill');
const skills_nav = document.querySelector('.skills_nav');
const skills_for_me = document.querySelector('.skills_for_me');

home_nav.addEventListener('click', ()=>{
    about_section.style.display = 'none';
    skill_section.style.display = 'none';
    hero_section.style.display = 'flex';
    project_section.style.display = 'none';
});
home_per_jao.addEventListener('click', ()=>{
    about_section.style.display = 'none';
    skill_section.style.display = 'none';
    hero_section.style.display = 'flex';
    project_section.style.display = 'none';
})


about_me.addEventListener('click', ()=>{
    hero_section.style.display = 'none';
    skill_section.style.display = 'none';
    about_section.style.display = 'flex';
    project_section.style.display = 'none';
})

about_for_me.addEventListener('click', ()=>{
    hero_section.style.display = 'none';
    skill_section.style.display = 'none';
    about_section.style.display = 'flex';
    project_section.style.display = 'none';
})

skills_nav.addEventListener('click', ()=>{
    hero_section.style.display = 'none';
    about_section.style.display = 'none';
    skill_section.style.display = 'flex';
    project_section.style.display = 'none';


    const canvas1 = document.getElementById('myCanvas');
const ctx = canvas1.getContext('2d');

const mainColor = "#00d9ffff";
const logoImg = new Image();
logoImg.src = 'ChatGPT_Image_Jan_8__2026__08_36_12_AM-removebg-preview-removebg-preview.png';

// Top Icons (Bezier Path wale)
const topIcons = [
    { char: "\uf13b", rot: 15, family: '"Font Awesome 6 Brands"' },    // HTML5
    { char: "\uf38b", rot: 11, family: '"Font Awesome 6 Brands"' },    // CSS3
    { char: "\uf3b8", rot: 7, family: '"Font Awesome 6 Brands"' },     // JS
    { char: "\uf41b", rot: 0, family: '"Font Awesome 6 Brands"' },     // React
    { char: "\uf3d3", rot: -8, family: '"Font Awesome 6 Brands"' },    // Node.js
    { char: "\uf1b2", rot: -11, family: '"Font Awesome 6 Free"' },     // Cube
    { char: "\uf836", rot: -15, family: '"Font Awesome 6 Brands"' }    // Bootstrap
];

// Bottom Orbital Icons (Jo orbits mein ghoomenge)
const orbitalIcons = [
    { char: "\uf8bb", family: '"Font Awesome 6 Brands"', orbit: 1, speed: 0.005 }, // Tailwind
    { char: "\uf41e", family: '"Font Awesome 6 Brands"', orbit: 2, speed: 0.008 }, // Sass
    { char: "\uf09b", family: '"Font Awesome 6 Brands"', orbit: 3, speed: 0.006 }  // GitHub
];

let animationProgress = 0; 
let angle = 0; // Orbits mein ghoomne ke liye

function resize() {
    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function drawArt() {
    ctx.clearRect(0, 0, canvas1.width, canvas1.height);

    const centerX = canvas1.width / 2;
    const centerY = canvas1.height / 2 + 50;
    const scale = Math.min(canvas1.width / 1000, canvas1.height / 800);

    angle += 0.015; // Animation speed for orbits

    // --- 1. Draw Orbits & Orbital Icons ---
    for (let i = 1; i <= 3; i++) {
        const radiusX = (130 * i) * scale;
        const radiusY = (50 * i) * scale;

        // Draw Orbit Line
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
        ctx.strokeStyle = mainColor;
        ctx.globalAlpha = 0.2;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();

        // Draw Icon on this Orbit
        const icon = orbitalIcons[i-1];
        const currentAngle = angle * (icon.speed * 100) + (i * 2); // Different starting points
        const ix = centerX + Math.cos(currentAngle) * radiusX;
        const iy = centerY + Math.sin(currentAngle) * radiusY;

        drawFAIcon(ctx, ix, iy, icon, scale * 0.8, true); // Chote icons for orbits
    }

    // --- 2. Upper Lines and Rising Icons ---
    for (let i = -3; i <= 3; i++) {
        const index = i + 3;
        const icon = topIcons[index];

        const startX = centerX;
        const startY = centerY - (30 * scale);
        const cp1X = centerX;
        const cp1Y = centerY - (150 * scale);
        const cp2X = centerX + (i * 150 * scale);
        const cp2Y = centerY - (220 * scale);
        const endX = centerX + (i * 120 * scale);
        const endY = centerY - (380 * scale);

        // Position Calculation
        const t = Math.min(animationProgress, 1); 
        let cx = Math.pow(1-t, 3)*startX + 3*Math.pow(1-t, 2)*t*cp1X + 3*(1-t)*Math.pow(t, 2)*cp2X + Math.pow(t, 3)*endX;
        let cy = Math.pow(1-t, 3)*startY + 3*Math.pow(1-t, 2)*t*cp1Y + 3*(1-t)*Math.pow(t, 2)*cp2Y + Math.pow(t, 3)*endY;

        // Floating loop at the end
        if (t >= 1) {
            cx += Math.sin(angle + index) * 5;
            cy += Math.cos(angle + index) * 5;
        }

        // Draw Line
        ctx.save();
        ctx.strokeStyle = mainColor;
        ctx.globalAlpha = 0.4;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY);
        ctx.stroke();
        ctx.restore();

        if (animationProgress > 0.05) {
            drawFAIcon(ctx, cx, cy, icon, scale, false);
        }
    }

    // --- 3. Center Logo ---
    ctx.save();
    ctx.shadowBlur = 30 + Math.sin(angle) * 10;
    ctx.shadowColor = mainColor;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 60 * scale, 0, Math.PI * 2);
    ctx.fillStyle = mainColor;
    ctx.fill();
    ctx.restore();

    if (logoImg.complete) {
        const imgSize = 80 * scale;
        ctx.drawImage(logoImg, centerX - imgSize/2, centerY - imgSize/2, imgSize, imgSize);
    }

    if (animationProgress < 1) animationProgress += 0.007;
    requestAnimationFrame(drawArt);
}

// Global function to draw any icon
function drawFAIcon(ctx, x, y, icon, scale, isSmall) {
    const boxSize = (isSmall ? 35 : 46) * scale;
    ctx.save();
    ctx.translate(x, y);
    if (icon.rot) ctx.rotate(icon.rot * Math.PI / 180);

    ctx.shadowBlur = isSmall ? 10 : 15;
    ctx.shadowColor = mainColor;
    ctx.fillStyle = mainColor;
    ctx.beginPath();
    ctx.roundRect(-boxSize/2, -boxSize/2, boxSize, boxSize, 6 * scale);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `900 ${ (isSmall ? 18 : 24) * scale}px ${icon.family}`; 
    ctx.fillText(icon.char, 0, 0);
    ctx.restore();
}

document.fonts.ready.then(() => {
    logoImg.onload = () => drawArt();
    setTimeout(drawArt, 1500);
});

})

skills_for_me.addEventListener('click', ()=>{
    hero_section.style.display = 'none';
    about_section.style.display = 'none';
    skill_section.style.display = 'flex';
    project_section.style.display = 'none';



     const canvas1 = document.getElementById('myCanvas');
const ctx = canvas1.getContext('2d');

const mainColor = "#00d9ffff";
const logoImg = new Image();
logoImg.src = 'ChatGPT_Image_Jan_8__2026__08_36_12_AM-removebg-preview-removebg-preview.png';

// Top Icons (Bezier Path wale)
const topIcons = [
    { char: "\uf13b", rot: 15, family: '"Font Awesome 6 Brands"' },    // HTML5
    { char: "\uf38b", rot: 11, family: '"Font Awesome 6 Brands"' },    // CSS3
    { char: "\uf3b8", rot: 7, family: '"Font Awesome 6 Brands"' },     // JS
    { char: "\uf41b", rot: 0, family: '"Font Awesome 6 Brands"' },     // React
    { char: "\uf3d3", rot: -8, family: '"Font Awesome 6 Brands"' },    // Node.js
    { char: "\uf1b2", rot: -11, family: '"Font Awesome 6 Free"' },     // Cube
    { char: "\uf836", rot: -15, family: '"Font Awesome 6 Brands"' }    // Bootstrap
];

// Bottom Orbital Icons (Jo orbits mein ghoomenge)
const orbitalIcons = [
    { char: "\uf8bb", family: '"Font Awesome 6 Brands"', orbit: 1, speed: 0.005 }, // Tailwind
    { char: "\uf41e", family: '"Font Awesome 6 Brands"', orbit: 2, speed: 0.008 }, // Sass
    { char: "\uf09b", family: '"Font Awesome 6 Brands"', orbit: 3, speed: 0.006 }  // GitHub
];

let animationProgress = 0; 
let angle = 0; // Orbits mein ghoomne ke liye

function resize() {
    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function drawArt() {
    ctx.clearRect(0, 0, canvas1.width, canvas1.height);

    const centerX = canvas1.width / 2;
    const centerY = canvas1.height / 2 + 50;
    const scale = Math.min(canvas1.width / 1000, canvas1.height / 800);

    angle += 0.015; // Animation speed for orbits

    // --- 1. Draw Orbits & Orbital Icons ---
    for (let i = 1; i <= 3; i++) {
        const radiusX = (130 * i) * scale;
        const radiusY = (50 * i) * scale;

        // Draw Orbit Line
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
        ctx.strokeStyle = mainColor;
        ctx.globalAlpha = 0.2;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();

        // Draw Icon on this Orbit
        const icon = orbitalIcons[i-1];
        const currentAngle = angle * (icon.speed * 100) + (i * 2); // Different starting points
        const ix = centerX + Math.cos(currentAngle) * radiusX;
        const iy = centerY + Math.sin(currentAngle) * radiusY;

        drawFAIcon(ctx, ix, iy, icon, scale * 0.8, true); // Chote icons for orbits
    }

    // --- 2. Upper Lines and Rising Icons ---
    for (let i = -3; i <= 3; i++) {
        const index = i + 3;
        const icon = topIcons[index];

        const startX = centerX;
        const startY = centerY - (30 * scale);
        const cp1X = centerX;
        const cp1Y = centerY - (150 * scale);
        const cp2X = centerX + (i * 150 * scale);
        const cp2Y = centerY - (220 * scale);
        const endX = centerX + (i * 120 * scale);
        const endY = centerY - (380 * scale);

        // Position Calculation
        const t = Math.min(animationProgress, 1); 
        let cx = Math.pow(1-t, 3)*startX + 3*Math.pow(1-t, 2)*t*cp1X + 3*(1-t)*Math.pow(t, 2)*cp2X + Math.pow(t, 3)*endX;
        let cy = Math.pow(1-t, 3)*startY + 3*Math.pow(1-t, 2)*t*cp1Y + 3*(1-t)*Math.pow(t, 2)*cp2Y + Math.pow(t, 3)*endY;

        // Floating loop at the end
        if (t >= 1) {
            cx += Math.sin(angle + index) * 5;
            cy += Math.cos(angle + index) * 5;
        }

        // Draw Line
        ctx.save();
        ctx.strokeStyle = mainColor;
        ctx.globalAlpha = 0.4;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY);
        ctx.stroke();
        ctx.restore();

        if (animationProgress > 0.05) {
            drawFAIcon(ctx, cx, cy, icon, scale, false);
        }
    }

    // --- 3. Center Logo ---
    ctx.save();
    ctx.shadowBlur = 30 + Math.sin(angle) * 10;
    ctx.shadowColor = mainColor;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 60 * scale, 0, Math.PI * 2);
    ctx.fillStyle = mainColor;
    ctx.fill();
    ctx.restore();

    if (logoImg.complete) {
        const imgSize = 80 * scale;
        ctx.drawImage(logoImg, centerX - imgSize/2, centerY - imgSize/2, imgSize, imgSize);
    }

    if (animationProgress < 1) animationProgress += 0.007;
    requestAnimationFrame(drawArt);
}

// Global function to draw any icon
function drawFAIcon(ctx, x, y, icon, scale, isSmall) {
    const boxSize = (isSmall ? 35 : 46) * scale;
    ctx.save();
    ctx.translate(x, y);
    if (icon.rot) ctx.rotate(icon.rot * Math.PI / 180);

    ctx.shadowBlur = isSmall ? 10 : 15;
    ctx.shadowColor = mainColor;
    ctx.fillStyle = mainColor;
    ctx.beginPath();
    ctx.roundRect(-boxSize/2, -boxSize/2, boxSize, boxSize, 6 * scale);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `900 ${ (isSmall ? 18 : 24) * scale}px ${icon.family}`; 
    ctx.fillText(icon.char, 0, 0);
    ctx.restore();
}

document.fonts.ready.then(() => {
    logoImg.onload = () => drawArt();
    setTimeout(drawArt, 1500);
});

})

const experience = document.getElementById('exp');
const ufo_my = document.getElementById('ufo_my');

experience.addEventListener('click', ()=>{
    hero_section.style.display = 'none';
    about_section.style.display = 'none';
    skill_section.style.display = 'none';
    header.style.zIndex = '30';
    ufo_my.style.display = 'block';
    project_section.style.display = 'none';


    
    // Main UFO canvas
    const ufoStage = document.getElementById('ufoStage');
    const ufoArtist = ufoStage.getContext('2d');
    
    // Particles canvas
    const particlesCanvas = document.getElementById('particles');
    const particlesCtx = particlesCanvas.getContext('2d');
    
    const page = document.getElementById('pageContent');
    const scanLine = document.getElementById('scanLine');
    
    // Set canvas dimensions
    ufoStage.width = particlesCanvas.width = window.innerWidth;
    ufoStage.height = particlesCanvas.height = window.innerHeight;
    
    // UFO animation variables
    let progress = 0; 
    let speed = 0.0025; 
    let isArrived = false;
    let beamActive = true;
    let emergencyMode = false;
    let audioInitialized = false;
    
    // Audio context for sound effects
    let audioContext;
    let gainNode;
    let oscillator;
    
    // Initialize audio system
    function initAudio() {
        if (audioInitialized) return;
        
        try {
            // Create audio context
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            gainNode = audioContext.createGain();
            gainNode.connect(audioContext.destination);
            gainNode.gain.value = 0.3; // Set volume to 30%
            audioInitialized = true;
            console.log("Audio system initialized");
        } catch (error) {
            console.log("Audio not supported:", error);
            audioInitialized = false;
        }
    }
    
    // Play UFO engine sound
    function playEngineSound() {
        if (!audioInitialized) return;
        
        try {
            // Stop previous oscillator if exists
            if (oscillator) {
                oscillator.stop();
            }
            
            oscillator = audioContext.createOscillator();
            oscillator.connect(gainNode);
            
            // Set frequency based on progress
            let baseFreq = 80 + (progress * 40); // Frequency increases as UFO approaches
            oscillator.frequency.setValueAtTime(baseFreq, audioContext.currentTime);
            
            // Add some frequency modulation for engine effect
            oscillator.frequency.exponentialRampToValueAtTime(
                baseFreq + 10, 
                audioContext.currentTime + 0.1
            );
            
            oscillator.type = 'sawtooth'; // Deep engine sound
            oscillator.start();
            
            // Schedule frequency changes for dynamic sound
            setInterval(() => {
                if (oscillator && audioContext) {
                    const variation = Math.sin(Date.now() * 0.005) * 5;
                    oscillator.frequency.setValueAtTime(
                        baseFreq + variation, 
                        audioContext.currentTime
                    );
                }
            }, 50);
            
        } catch (error) {
            console.log("Error playing engine sound:", error);
        }
    }
    
    // Play UFO arrival sound
    function playArrivalSound() {
        if (!audioInitialized) return;
        
        try {
            // Create arrival sound (whoosh and hum)
            const arrivalOscillator = audioContext.createOscillator();
            const arrivalGain = audioContext.createGain();
            
            arrivalOscillator.connect(arrivalGain);
            arrivalGain.connect(gainNode);
            
            // Whoosh effect
            arrivalOscillator.frequency.setValueAtTime(300, audioContext.currentTime);
            arrivalOscillator.frequency.exponentialRampToValueAtTime(60, audioContext.currentTime + 1);
            
            arrivalGain.gain.setValueAtTime(0.5, audioContext.currentTime);
            arrivalGain.gain.exponentialRampToValueAtTime(0.1, audioContext.currentTime + 2);
            
            arrivalOscillator.type = 'sine';
            arrivalOscillator.start();
            arrivalOscillator.stop(audioContext.currentTime + 2);
            
            // Add hum sound after arrival
            setTimeout(() => {
                if (audioInitialized) {
                    const humOscillator = audioContext.createOscillator();
                    const humGain = audioContext.createGain();
                    
                    humOscillator.connect(humGain);
                    humGain.connect(gainNode);
                    
                    humOscillator.frequency.setValueAtTime(120, audioContext.currentTime);
                    humOscillator.type = 'triangle';
                    
                    humGain.gain.setValueAtTime(0.2, audioContext.currentTime);
                    
                    humOscillator.start();
                    
                    // Keep hum sound continuous
                    setInterval(() => {
                        if (humOscillator) {
                            const humVariation = Math.sin(Date.now() * 0.002) * 2;
                            humOscillator.frequency.setValueAtTime(
                                120 + humVariation, 
                                audioContext.currentTime
                            );
                        }
                    }, 100);
                }
            }, 1000);
            
        } catch (error) {
            console.log("Error playing arrival sound:", error);
        }
    }
    
    // Play beam activation sound
    function playBeamSound() {
        if (!audioInitialized) return;
        
        try {
            const beamOscillator = audioContext.createOscillator();
            const beamGain = audioContext.createGain();
            
            beamOscillator.connect(beamGain);
            beamGain.connect(gainNode);
            
            // Beam activation sound
            beamOscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            beamOscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.5);
            
            beamGain.gain.setValueAtTime(0.4, audioContext.currentTime);
            beamGain.gain.exponentialRampToValueAtTime(0.05, audioContext.currentTime + 1);
            
            beamOscillator.type = 'sawtooth';
            beamOscillator.start();
            beamOscillator.stop(audioContext.currentTime + 1);
            
        } catch (error) {
            console.log("Error playing beam sound:", error);
        }
    }
    
    // Play warning sound
    function playWarningSound() {
        if (!audioInitialized) return;
        
        try {
            const warningOscillator = audioContext.createOscillator();
            const warningGain = audioContext.createGain();
            
            warningOscillator.connect(warningGain);
            warningGain.connect(gainNode);
            
            // Warning alarm sound
            warningOscillator.frequency.setValueAtTime(600, audioContext.currentTime);
            warningOscillator.frequency.setValueAtTime(400, audioContext.currentTime + 0.1);
            warningOscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.2);
            warningOscillator.frequency.setValueAtTime(400, audioContext.currentTime + 0.3);
            
            warningGain.gain.setValueAtTime(0.3, audioContext.currentTime);
            warningGain.gain.setValueAtTime(0, audioContext.currentTime + 0.1);
            warningGain.gain.setValueAtTime(0.3, audioContext.currentTime + 0.2);
            warningGain.gain.setValueAtTime(0, audioContext.currentTime + 0.4);
            
            warningOscillator.type = 'square';
            warningOscillator.start();
            warningOscillator.stop(audioContext.currentTime + 0.4);
            
        } catch (error) {
            console.log("Error playing warning sound:", error);
        }
    }
    
    // Create starfield
    const stars = Array.from({length: 600}, () => ({
        x: Math.random() * ufoStage.width,
        y: Math.random() * ufoStage.height,
        size: Math.random() * 3,
        blink: Math.random() * 0.05,
        speed: Math.random() * 0.3 + 0.1
    }));
    
    // Create particles for effects
    const particles = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * ufoStage.width,
            y: Math.random() * ufoStage.height,
            size: Math.random() * 4 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 200 + 55)}, 255, ${Math.random() * 0.5 + 0.3})`,
            life: Math.random() * 100 + 50
        });
    }
    
    // Create debris particles
    const debris = [];
    for (let i = 0; i < 30; i++) {
        debris.push({
            x: Math.random() * ufoStage.width,
            y: Math.random() * ufoStage.height,
            size: Math.random() * 8 + 2,
            speedX: (Math.random() - 0.5) * 0.8,
            speedY: (Math.random() - 0.5) * 0.8,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.02
        });
    }
    
    function drawUFO(x, y) {
        ufoArtist.save();
        ufoArtist.translate(x, y);
        
        // Add rotation effect when arrived
        if (isArrived) {
            ufoArtist.rotate(Math.sin(Date.now() * 0.0005) * 0.02);
        }
        
        // --- 1. GIGANTIC ABDUCTION BEAM ---
        if (beamActive) {
            let beamPulse = isArrived ? Math.sin(Date.now() * 0.003) * 0.2 + 0.5 : 0.3;
            let beamGrd = ufoArtist.createLinearGradient(0, 0, 0, 1200);
            beamGrd.addColorStop(0, `rgba(0, 255, 255, ${beamPulse})`);
            beamGrd.addColorStop(0.2, `rgba(0, 200, 255, ${beamPulse * 0.8})`);
            beamGrd.addColorStop(0.4, `rgba(0, 150, 255, ${beamPulse * 0.6})`);
            beamGrd.addColorStop(0.8, `rgba(0, 100, 255, ${beamPulse * 0.3})`);
            beamGrd.addColorStop(1, "rgba(0, 0, 0, 0)");
            
            ufoArtist.fillStyle = beamGrd;
            ufoArtist.beginPath();
            ufoArtist.moveTo(-150, 40); 
            ufoArtist.lineTo(150, 40);
            ufoArtist.lineTo(800, 1400); 
            ufoArtist.lineTo(-800, 1400);
            ufoArtist.fill();
            
            // Beam energy particles
            for (let i = 0; i < 20; i++) {
                let px = (Math.random() - 0.5) * 300;
                let py = Math.random() * 1200 + 40;
                let psize = Math.random() * 4 + 1;
                
                ufoArtist.fillStyle = `rgba(100, 200, 255, ${Math.random() * 0.7 + 0.3})`;
                ufoArtist.beginPath();
                ufoArtist.arc(px, py, psize, 0, Math.PI * 2);
                ufoArtist.fill();
            }
        }
        
        
        for (let i = 0; i < 8; i++) {
            let angle = (i * Math.PI) / 4;
            let sx = Math.cos(angle) * 280;
            let sy = Math.sin(angle) * 60;
            let ex = Math.cos(angle) * 340;
            let ey = Math.sin(angle) * 80;
            
            ufoArtist.beginPath();
            ufoArtist.moveTo(sx, sy);
            ufoArtist.lineTo(ex, ey);
            ufoArtist.stroke();
        }
        
        // --- 3. THE GIANT DOME ---
        let domeGlow = ufoArtist.createRadialGradient(0, -50, 20, 0, -50, 140);
        domeGlow.addColorStop(0, "#ffffff");
        domeGlow.addColorStop(0.4, emergencyMode ? "#ff4444" : "#00bfff");
        domeGlow.addColorStop(0.8, emergencyMode ? "#aa0000" : "#0044aa");
        domeGlow.addColorStop(1, "#001a33");
        ufoArtist.fillStyle = domeGlow;
        ufoArtist.beginPath();
        ufoArtist.arc(0, -40, 130, Math.PI, 0); 
        ufoArtist.fill();
        
        // Dome interior details
        ufoArtist.strokeStyle = "rgba(255, 255, 255, 0.3)";
        ufoArtist.lineWidth = 1;
        for (let i = 0; i < 5; i++) {
            let radius = 100 - i * 15;
            ufoArtist.beginPath();
            ufoArtist.arc(0, -40, radius, Math.PI, 0);
            ufoArtist.stroke();
        }
        
        // --- 4. LIGHTS SYSTEM ---
        const numLights = 24; 
        for (let i = 0; i < numLights; i++) {
            let angle = (Date.now() * 0.001) + (i * (Math.PI * 2) / numLights);
            let lx = Math.cos(angle) * 340;
            let ly = Math.sin(angle) * 40;
            
            ufoArtist.shadowBlur = 40;
            ufoArtist.shadowColor = emergencyMode ? "red" : "cyan";
            ufoArtist.fillStyle = (i % 3 === 0) ? "#ffffff" : ((i % 2 === 0) ? "#00ffff" : "#0088ff");
            ufoArtist.beginPath();
            ufoArtist.arc(lx, ly, 12, 0, Math.PI * 2);
            ufoArtist.fill();
        }
        
        // Additional rotating lights
        for (let i = 0; i < 6; i++) {
            let angle = (Date.now() * 0.002) + (i * (Math.PI * 2) / 6);
            let lx = Math.cos(angle) * 200;
            let ly = Math.sin(angle) * 10;
            
            ufoArtist.shadowBlur = 30;
            ufoArtist.shadowColor = "#ff0000";
            ufoArtist.fillStyle = "#ff0000";
            ufoArtist.beginPath();
            ufoArtist.arc(lx, ly, 8, 0, Math.PI * 2);
            ufoArtist.fill();
        }
        
        // --- 5. CORE EXHAUST ---
        let exhaustPulse = Math.sin(Date.now() * 0.01) * 0.2 + 0.8;
        ufoArtist.fillStyle = `rgba(255, 255, 255, ${exhaustPulse})`;
        ufoArtist.shadowBlur = 70;
        ufoArtist.shadowColor = emergencyMode ? "#ff5500" : "#00bfff";
        ufoArtist.beginPath();
        ufoArtist.ellipse(0, 25, 140, 30, 0, 0, Math.PI * 2);
        ufoArtist.fill();
        
        // Exhaust particles
        for (let i = 0; i < 15; i++) {
            let angle = (Math.random() - 0.5) * Math.PI * 0.5;
            let distance = Math.random() * 100 + 50;
            let px = Math.sin(angle) * distance;
            let py = Math.cos(angle) * distance + 25;
            let psize = Math.random() * 6 + 2;
            
            ufoArtist.fillStyle = `rgba(255, ${emergencyMode ? '100' : '200'}, ${emergencyMode ? '100' : '255'}, ${Math.random() * 0.5 + 0.3})`;
            ufoArtist.beginPath();
            ufoArtist.arc(px, py, psize, 0, Math.PI * 2);
            ufoArtist.fill();
        }
        
        ufoArtist.restore();
    }
    
    function drawStars() {
        ufoArtist.fillStyle = "white";
        stars.forEach(s => {
            ufoArtist.globalAlpha = Math.abs(Math.sin(Date.now() * s.blink));
            ufoArtist.beginPath();
            ufoArtist.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ufoArtist.fill();
            
            // Move stars for parallax effect
            if (isArrived) {
                s.x += s.speed * 0.5;
                if (s.x > ufoStage.width) s.x = 0;
            }
        });
        ufoArtist.globalAlpha = 1;
    }
    
    function drawParticles() {
        particlesCtx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
        
        // Update and draw particles
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.life -= 0.5;
            
            // Wrap around screen
            if (p.x < 0) p.x = particlesCanvas.width;
            if (p.x > particlesCanvas.width) p.x = 0;
            if (p.y < 0) p.y = particlesCanvas.height;
            if (p.y > particlesCanvas.height) p.y = 0;
            
            // Draw particle
            particlesCtx.fillStyle = p.color;
            particlesCtx.beginPath();
            particlesCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            particlesCtx.fill();
            
            // Reset if dead
            if (p.life <= 0) {
                p.x = Math.random() * particlesCanvas.width;
                p.y = Math.random() * particlesCanvas.height;
                p.life = Math.random() * 100 + 50;
            }
        });
        
        // Draw debris
        debris.forEach(d => {
            d.x += d.speedX;
            d.y += d.speedY;
            d.rotation += d.rotationSpeed;
            
            // Wrap around screen
            if (d.x < -50) d.x = particlesCanvas.width + 50;
            if (d.x > particlesCanvas.width + 50) d.x = -50;
            if (d.y < -50) d.y = particlesCanvas.height + 50;
            if (d.y > particlesCanvas.height + 50) d.y = -50;
            
            // Draw debris
            particlesCtx.save();
            particlesCtx.translate(d.x, d.y);
            particlesCtx.rotate(d.rotation);
            particlesCtx.fillStyle = "rgba(100, 100, 150, 0.7)";
            particlesCtx.fillRect(-d.size/2, -d.size/2, d.size, d.size);
            particlesCtx.strokeStyle = "rgba(150, 150, 200, 0.9)";
            particlesCtx.lineWidth = 1;
            particlesCtx.strokeRect(-d.size/2, -d.size/2, d.size, d.size);
            particlesCtx.restore();
        });
    }
    
    function animateScanLine() {
        if (!isArrived) return;
        
        let scanPos = Math.sin(Date.now() * 0.001) * 0.5 + 0.5;
        scanLine.style.top = (scanPos * 100) + "%";
        scanLine.style.opacity = Math.abs(Math.sin(Date.now() * 0.005)) * 0.7 + 0.3;
    }
    
    function animate() {
        ufoArtist.clearRect(0, 0, ufoStage.width, ufoStage.height);
        drawStars();
        drawParticles();
        animateScanLine();
        
        if (progress < 1) {
            progress += speed;
            const startX = -800, startY = -400;
            const controlX = ufoStage.width * 0.8, controlY = 0;
            const endX = ufoStage.width / 2, endY = ufoStage.height * 0.3;
            
            // Bezier curve for smoother entrance
            const t = progress;
            const x = Math.pow(1 - t, 2) * startX + 2 * (1 - t) * t * controlX + Math.pow(t, 2) * endX;
            const y = Math.pow(1 - t, 2) * startY + 2 * (1 - t) * t * controlY + Math.pow(t, 2) * endY;
            
            drawUFO(x, y);
            
            // Play engine sound when UFO starts moving
            if (progress > 0.05 && progress < 0.1 && !isArrived) {
                initAudio();
                playEngineSound();
                playWarningSound(); // Warning sound at start
            }
            
            // Create trail particles during flight
            if (progress > 0.1 && progress < 0.9) {
                particles.push({
                    x: x + (Math.random() - 0.5) * 100,
                    y: y + 50,
                    size: Math.random() * 5 + 2,
                    speedX: (Math.random() - 0.5) * 2,
                    speedY: Math.random() * 2 + 1,
                    color: `rgba(100, 200, 255, ${Math.random() * 0.5 + 0.3})`,
                    life: Math.random() * 50 + 30
                });
            }
        } else {
            if (!isArrived) {
                isArrived = true;
                page.classList.add('active');
                
                // Play arrival sounds
                playArrivalSound();
                playBeamSound();
                
                // Trigger scan line animation
                setTimeout(() => {
                    scanLine.style.transition = "top 8s linear";
                }, 500);
            }
            
            // Hover effect with subtle rotation
            const hover = Math.sin(Date.now() * 0.001) * 20;
            const sway = Math.sin(Date.now() * 0.0003) * 10;
            drawUFO(ufoStage.width / 2 + sway, (ufoStage.height * 0.3) + hover);
            
            // Add occasional particles
            if (Math.random() < 0.1) {
                particles.push({
                    x: ufoStage.width / 2 + (Math.random() - 0.5) * 400,
                    y: ufoStage.height * 0.3 + 100,
                    size: Math.random() * 4 + 1,
                    speedX: (Math.random() - 0.5) * 0.5,
                    speedY: Math.random() * 1 + 0.5,
                    color: beamActive ? `rgba(100, 200, 255, ${Math.random() * 0.5 + 0.3})` : `rgba(255, 100, 100, ${Math.random() * 0.5 + 0.3})`,
                    life: Math.random() * 100 + 50
                });
            }
        }
        
        // Limit particles array size
        if (particles.length > 200) {
            particles.splice(0, 20);
        }
        
        requestAnimationFrame(animate);
    }
    
    // Control functions
    document.getElementById('speedUp').addEventListener('click', () => {
        if (progress < 1) speed = Math.min(speed * 1.5, 0.02);
    });
    
    document.getElementById('speedDown').addEventListener('click', () => {
        if (progress < 1) speed = Math.max(speed * 0.7, 0.0005);
    });
    
    document.getElementById('toggleBeam').addEventListener('click', () => {
        beamActive = !beamActive;
        document.getElementById('toggleBeam').innerHTML = beamActive ? "Beam: ON" : "Beam: OFF";
        
        // Play beam sound when toggled
        if (beamActive) {
            playBeamSound();
        }
    });
    
    // Mouse interaction - particles follow mouse
    document.addEventListener('mousemove', (e) => {
        if (isArrived && Math.random() < 0.3) {
            particles.push({
                x: e.clientX,
                y: e.clientY,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 1,
                speedY: (Math.random() - 0.5) * 1,
                color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(Math.random() * 200 + 55)}, 255, ${Math.random() * 0.5 + 0.3})`,
                life: Math.random() * 50 + 30
            });
        }
    });
    
    // Click interaction - explosion effect
    document.addEventListener('click', (e) => {
        if (isArrived) {
            for (let i = 0; i < 20; i++) {
                particles.push({
                    x: e.clientX,
                    y: e.clientY,
                    size: Math.random() * 4 + 2,
                    speedX: (Math.random() - 0.5) * 5,
                    speedY: (Math.random() - 0.5) * 5,
                    color: `rgba(255, ${Math.floor(Math.random() * 100 + 100)}, 100, ${Math.random() * 0.7 + 0.3})`,
                    life: Math.random() * 60 + 40
                });
            }
        }
    });
    
    // Resize handler
    window.addEventListener('resize', () => {
        ufoStage.width = particlesCanvas.width = window.innerWidth;
        ufoStage.height = particlesCanvas.height = window.innerHeight;
    });
    
    // Clean up function to stop all sounds when leaving section
    function cleanupUFO() {
        if (oscillator) {
            oscillator.stop();
            oscillator = null;
        }
        if (audioContext && audioContext.state !== 'closed') {
            audioContext.close();
            audioInitialized = false;
        }
    }
    
    // Initialize animation
    animate();
    
    // Initialize audio on user interaction (required by browsers)
    document.addEventListener('click', function initAudioOnClick() {
        if (!audioInitialized) {
            initAudio();
            // Play initial sound to test
            if (audioInitialized) {
                playWarningSound();
            }
        }
        // Remove listener after first click
        document.removeEventListener('click', initAudioOnClick);
    }, { once: true });
});


const project_nav = document.getElementById('project_nav');
const project_icon = document.getElementById('project_icon');
const project_section = document.getElementById('project');

project_nav.addEventListener('click', ()=>{
    hero_section.style.display = 'none';
    about_section.style.display = 'none';
    skill_section.style.display = 'none';
    ufo_my.style.display = 'none';
    project_section.style.display = 'flex';

    (function() {
        const canvas = document.getElementById('cp-ufo-canvas');
        const ctx = canvas.getContext('2d');
        const wrapper = document.getElementById('cp-wrapper');
        let state = 'idle';
        let particles = [];
        let shockwave = 0;

        function resize() {
            canvas.width = wrapper.offsetWidth;
            canvas.height = wrapper.offsetHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        const s1 = { x: -100, y: canvas.height/2, vx: 12, size: 50, color: '#00bfff' };
        const s2 = { x: canvas.width + 100, y: canvas.height/2, vx: -12, size: 50, color: '#00f2ff' };

        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Keep background transparent

            if (state === 'moving' || state === 'impact') {
                ctx.shadowBlur = 30; ctx.shadowColor = s1.color;
                ctx.fillStyle = s1.color;
                ctx.beginPath(); ctx.arc(s1.x, s1.y, s1.size, 0, Math.PI*2); ctx.fill();
                ctx.shadowColor = s2.color;
                ctx.beginPath(); ctx.arc(s2.x, s2.y, s2.size, 0, Math.PI*2); ctx.fill();

                if (state === 'moving') {
                    s1.x += s1.vx; s2.x += s2.vx;
                    if (s1.x >= s2.x - 20) {
                        state = 'impact';
                        wrapper.classList.add('cp-impact-shake');
                        createExp(canvas.width/2, canvas.height/2);
                        setTimeout(() => {
                            document.querySelectorAll('.cp-card').forEach((c, i) => {
                                setTimeout(() => c.classList.add('cp-show'), i * 150);
                            });
                        }, 300);
                    }
                }
            }

            if (state === 'impact') {
                shockwave += 15;
                ctx.strokeStyle = `rgba(0, 191, 255, ${1 - shockwave/1000})`;
                ctx.beginPath(); ctx.arc(canvas.width/2, canvas.height/2, shockwave, 0, Math.PI*2); ctx.stroke();
            }

            particles.forEach((p, i) => {
                p.x += p.vx; p.y += p.vy; p.life -= 0.02;
                ctx.fillStyle = `rgba(255, 255, 255, ${p.life})`;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill();
                if (p.life <= 0) particles.splice(i, 1);
            });
            requestAnimationFrame(render);
        }

        function createExp(x, y) {
            for (let i = 0; i < 80; i++) {
                particles.push({ x, y, vx: (Math.random()-0.5)*25, vy: (Math.random()-0.5)*25, r: Math.random()*3, life: 1 });
            }
        }

        // Auto trigger after 1.5s
        setTimeout(() => { state = 'moving'; }, 1500);
        render();
    })();

    
});
project_icon.addEventListener('click', ()=>{
    hero_section.style.display = 'none';
    about_section.style.display = 'none';
    skill_section.style.display = 'none';
    ufo_my.style.display = 'none';
    contact.style.display = 'none';
    project_section.style.display = 'flex';

    (function() {
        const canvas = document.getElementById('cp-ufo-canvas');
        const ctx = canvas.getContext('2d');
        const wrapper = document.getElementById('cp-wrapper');
        let state = 'idle';
        let particles = [];
        let shockwave = 0;

        function resize() {
            canvas.width = wrapper.offsetWidth;
            canvas.height = wrapper.offsetHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        const s1 = { x: -100, y: canvas.height/2, vx: 12, size: 50, color: '#00bfff' };
        const s2 = { x: canvas.width + 100, y: canvas.height/2, vx: -12, size: 50, color: '#00f2ff' };

        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Keep background transparent

            if (state === 'moving' || state === 'impact') {
                ctx.shadowBlur = 30; ctx.shadowColor = s1.color;
                ctx.fillStyle = s1.color;
                ctx.beginPath(); ctx.arc(s1.x, s1.y, s1.size, 0, Math.PI*2); ctx.fill();
                ctx.shadowColor = s2.color;
                ctx.beginPath(); ctx.arc(s2.x, s2.y, s2.size, 0, Math.PI*2); ctx.fill();

                if (state === 'moving') {
                    s1.x += s1.vx; s2.x += s2.vx;
                    if (s1.x >= s2.x - 20) {
                        state = 'impact';
                        wrapper.classList.add('cp-impact-shake');
                        createExp(canvas.width/2, canvas.height/2);
                        setTimeout(() => {
                            document.querySelectorAll('.cp-card').forEach((c, i) => {
                                setTimeout(() => c.classList.add('cp-show'), i * 150);
                            });
                        }, 300);
                    }
                }
            }

            if (state === 'impact') {
                shockwave += 15;
                ctx.strokeStyle = `rgba(0, 191, 255, ${1 - shockwave/1000})`;
                ctx.beginPath(); ctx.arc(canvas.width/2, canvas.height/2, shockwave, 0, Math.PI*2); ctx.stroke();
            }

            particles.forEach((p, i) => {
                p.x += p.vx; p.y += p.vy; p.life -= 0.02;
                ctx.fillStyle = `rgba(255, 255, 255, ${p.life})`;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill();
                if (p.life <= 0) particles.splice(i, 1);
            });
            requestAnimationFrame(render);
        }

        function createExp(x, y) {
            for (let i = 0; i < 80; i++) {
                particles.push({ x, y, vx: (Math.random()-0.5)*25, vy: (Math.random()-0.5)*25, r: Math.random()*3, life: 1 });
            }
        }

        // Auto trigger after 1.5s
        setTimeout(() => { state = 'moving'; }, 1500);
        render();
    })();
});


const contact = document.getElementById('contact');
const contact_icon = document.getElementById('contact_icon');
const contact_nav = document.querySelector('.contact_nav');


contact_nav.addEventListener('click', ()=>{
    hero_section.style.display = 'none';
    about_section.style.display = 'none';
    skill_section.style.display = 'none';
    ufo_my.style.display = 'none';
    project_section.style.display = 'none';
    contact.style.display = 'grid';
    
    
});



contact_icon.addEventListener('click', ()=>{
    hero_section.style.display = 'none';
    about_section.style.display = 'none';
    skill_section.style.display = 'none';
    ufo_my.style.display = 'none';
    project_section.style.display = 'none';
    contact.style.display = 'grid';
    
    
});



const contact_submit = document.getElementById('contact_submit');
contact_submit.addEventListener('click', ()=>{
    async function contact_submition() {
   const conatct_inputs = document.querySelectorAll('.contact_input');
   if(conatct_inputs[0].value === '' || conatct_inputs[1].value === '' || conatct_inputs[2].value === ''){
    let div = document.createElement('div');
    div.className = 'contact_alert';
    let h2 = document.createElement('h2');
    h2.innerText = 'Please fill in all fields.';
    div.style.backgroundColor = '#101828';
    div.style.padding = '20px';
    div.style.borderRadius = '10px';
    div.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';

    div.appendChild(h2);
    contact.appendChild(div);
    
        
    }
    else{
    let div = document.createElement('div');
    div.className = 'contact_alert';
    let h2 = document.createElement('h2');
    h2.innerText = 'Message sent successfully!';
    div.style.backgroundColor = '#101828';
    div.style.padding = '20px';
    div.style.borderRadius = '10px';
    div.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    div.appendChild(h2);
    contact.appendChild(div);
    }
    
   
}
contact_submit();
})