/*
Website Name: OpenDraw - Feras Al Masri
Website URL: ?????????
Version: 1.0
Author: N/A
Author URL: N/A

1.  Basics
2.  Header
3.  Footer
4.  Elements
5.  Portfolio
6.  Pages
7.  Blog
8.  Transitions
9.  Media Quieries
*/


  (function () {

  	console.log("sasass")

  	//	Variables
	  	const loader_el = document.querySelector("#loader-cont");
	  	const loader_svg_el = document.querySelector("#loader-cont svg");






	// Remove Loading and enable scrolling after document loaded
		window.onload = function() {
			setTimeout(function() {
			    // loader_el.classList.add('hide');
			}, 1000);


      startGSAP(); // Call your function after scroll to top
		};




	// GSAP Main Function (this function called after making sure the page is scrolled to top)

		function startGSAP() {

			//	GSAP Set
		  	gsap.set("#left-green-logo", 
		  		{ 
		  			x: -100,
		  			y: -100,
		  			scale: 5,
		  			autoAlpha: 0
		  		});

		  	gsap.set("#right-green-logo", 
		  		{ 
		  			x: -100,
		  			y: 100,
		  			scale: 5,
		  			autoAlpha: 0
		  		});

		  	gsap.set("#left-yellow-logo", 
		  		{ 
		  			x: 100,
		  			y: -100,
		  			scale: 5,
		  			autoAlpha: 0
		  		});

		  	gsap.set("#right-yellow-logo", 
		  		{ 
		  			x: 100,
		  			y: 100,
		  			scale: 5,
		  			autoAlpha: 0
		  		});

		  	gsap.set("#Word_Letters g", {
		  		autoAlpha: 0,
		  		y: 50
		  	});


		  //	Intro Timeline
		  	const logo_tl = gsap.timeline({ 
              // repeat: -1,
              // paused: true
          });

        logo_tl.to(["#left-green-logo", "#right-green-logo", "#left-yellow-logo", "#right-yellow-logo"], {
          duration: 2,
          y: 0,
          x: 0,
          scale: 1,
		  		autoAlpha: 1,
          ease: "power3.inOut",
          stagger: {
            each: 0.1,
          },
        });

        logo_tl.to("#Logo_Parts", {
          duration: 2,
          scale: 14,
          autoAlpha: 0,
          transformOrigin: "50% 50%",
          ease: "power3.inOut",
        });

        logo_tl.to("#Word_Letters g", {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power3.inOut",
          stagger: {
            each: 0.1,
          },
        }, "<20%");

        logo_tl.to("#Word_Letters g", {
          duration: 1,
          autoAlpha: 0,
          y: -50,
          ease: "power3.inOut",
          stagger: {
            each: 0.1,
            from: "end"
          },
        }, "<95%");

        logo_tl.to(loader_el, {
          duration: 1,
          autoAlpha: 0,
          ease: "power3.inOut",
        }, "<40%");


      //	Section Logo Timeline
		  	// const section_tl = gsap.timeline({ 
        //       repeat: -1,
        //       // paused: true
        //   });

        // section_tl.to("#grad_1", {
        //   attr: { offset: 400 }, // Move to the start
			  //   duration: 2, 
			  //   repeat: -1, 
			  //   yoyo: true
        // });

        




		}




	



  })();