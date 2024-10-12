  class ShutterGSAP {
            constructor() {
                this.shutterContainer = document.querySelector('.js-shutter');
                this.shutterSVG = this.shutterContainer.querySelector('svg#shutters_svg');
                this.shutters = this.shutterSVG.querySelectorAll('path');
                this.mainContainer = document.getElementById('mainContainer');
                this.newContent = document.getElementById('newContent');
                this.shutterTimeline = gsap.timeline({ paused: true });
                this.init();
            }

            init() {
                this.shutterTimeline
                    .to(this.shutters, {
                        duration: 1,
                        rotation: ROTATION_DEG,
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

            animate(progress) {
                if (progress > 0) {
                    this.shutterContainer.classList.add('is--active');
                } else {
                    this.shutterContainer.classList.remove('is--active');
                }
                this.shutterTimeline.progress(progress);
            }
        }
