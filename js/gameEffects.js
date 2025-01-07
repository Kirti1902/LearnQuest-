// Function to show confetti
function showConfetti() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.classList.add('canvas-container');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    // Confetti settings
    const particles = [];
    const colors = ['#ff0', '#ff6347', '#3cb371', '#00bfff', '#ff1493'];
  
    // Particle constructor
    function Particle() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height - canvas.height;
      this.size = Math.random() * 10 + 5;
      this.speedX = Math.random() * 2 - 1;
      this.speedY = Math.random() * 3 + 2;
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
  
    // Add particles
    for (let i = 0; i < 500; i++) {
      particles.push(new Particle());
    }
  
    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.y += particle.speedY;
        particle.x += particle.speedX;
        if (particle.y > canvas.height) {
          particles.splice(index, 1);
          particles.push(new Particle());
        }
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }
  
    animate();
  }
  