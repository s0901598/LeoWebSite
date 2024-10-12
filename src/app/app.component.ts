import { Component, ElementRef, ViewChild } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  shutter:any;
  scrollIndicator:any;
  ngAfterViewInit(): void {
    this.shutter = new ShutterGSAP();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('start loading')
    this.createPlanets();
    this.createStars();
    const loadingContainer = document.getElementById('loadingContainer');
    const mainContainer = document.getElementById('mainContainer');
    const zoomOverlay = document.getElementById('zoomOverlay');
    this.scrollIndicator = document.querySelector('.scroll-indicator');

    // Show loading animation
    loadingContainer!.style.opacity = '1';

    // Simulate loading time (replace with actual loading if needed)
    setTimeout(() => {
        // Hide loading animation
        loadingContainer!.style.opacity = '0';
        loadingContainer!.classList.add('fade-out');
        setTimeout(() => {
            zoomOverlay!.style.opacity = '0';
            mainContainer!.classList.add('fade-in');
            mainContainer!.style.opacity = '1';
            document.body.style.overflow = ''
        }, 1500);
    }, 2000); // Adjust this time as needed

    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;

      mainContainer!.style.transform = `translateY(-${scrollPosition * 0.5}px)`;

      if (scrollPosition > 50) {
          this.scrollIndicator.style.opacity = '0';
      } else {
          this.scrollIndicator.style.opacity = '1';
      }

      if (scrollPosition > windowHeight / 2 && scrollPosition < windowHeight * 3.5) {
          const progress = (scrollPosition - windowHeight / 2) / (windowHeight * 3);
          this.shutter.animate(progress);
      } else if (scrollPosition <= windowHeight / 2) {
          this.shutter.animate(0);
      } else if (scrollPosition >= windowHeight * 3.5) {
          this.shutter.animate(1);
      }
  });
  }

 createStars() {
    const container = document.querySelector('.loader-container');
    for (let i = 0; i < 40; i++) { // Reduced number of stars
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2.5}s`;
        container!.appendChild(star);
    }
}

 createPlanets() {
    const container = document.querySelector('.loader-container');
    const colors = ['#ff9999', '#99ff99', '#9999ff'];
    for (let i = 0; i < 3; i++) {
        const planet = document.createElement('div');
        planet.className = 'planet';
        planet.style.backgroundColor = colors[i];
        planet.style.animationDelay = `${i * -2.5}s`;
        container!.appendChild(planet);
    }
}
}

declare var gsap: any;
export class ShutterGSAP {
  private shutterContainer:Element|null = null;
  private shutterSVG:Element|null = null;
  private shutters:any = null;
  private mainContainer:Element|null = null;
  private newContent:Element|null = null;
  private shutterTimeline:any = null;

  constructor() {
      this.shutterContainer = document.querySelector('.js-shutter');
      this.shutterSVG = document!.querySelector('svg#shutters_svg');
      this.shutters = document!.querySelectorAll('path');
      this.mainContainer = document!.getElementById('mainContainer');
      this.newContent = document!.getElementById('newContent');
      this.shutterTimeline = gsap.timeline({ paused: true });
      this.init();
  }

  init() {
      this.shutterTimeline!
          .to(this.shutters, {
              duration: 1,
              rotation: 90,
              scale: 0,
              opacity: 0,
              stagger: 0.05,
              transformOrigin: 'center center',
              ease: 'power2.inOut',
          })
          .to(this.mainContainer, { duration: 0.5, opacity: 0, ease: 'power2.inOut' }, 0.5)
          .to(document.body, { backgroundColor: '#ffffff', duration: 0.5, ease: 'power2.inOut' }, 0.75)
          .to(this.newContent, { duration: 0.5, opacity: 1, ease: 'power2.inOut' }, 1);
  }

  animate(progress:any) {
      if (progress > 0) {
          this.shutterContainer!.classList.add('is--active');
      } else {
          this.shutterContainer!.classList.remove('is--active');
      }
      this.shutterTimeline.progress(progress);
  }
}
