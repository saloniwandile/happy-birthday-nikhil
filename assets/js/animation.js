// document.addEventListener("DOMContentLoaded", function() {
//     var animatedImages = document.querySelectorAll('.animated-image');
//     var delay = 500; // Delay between each image animation in milliseconds

//     // Function to animate each image with a delay
//     function animateImages(images, delay) {
//         images.forEach(function(image, index) {
//             setTimeout(function() {
//                 image.style.opacity = '1';
//             }, index * delay);
//         });
//     }

//     // Call the animateImages function after a delay
//     setTimeout(function() {
//         animateImages(animatedImages, delay);
//     }, 500); // Delay before starting animations in milliseconds
// });

document.addEventListener("DOMContentLoaded", function() {
    var animatedImages1 = document.querySelectorAll('#animation-grid1 .animated-image');
    var animatedImages2 = document.querySelectorAll('#animation-grid2 .animated-image');
    var animatedImages3 = document.querySelectorAll('#animation-grid3 .animated-image');
    var animatedImages4 = document.querySelectorAll('#animation-grid4 .animated-image');
    var animatedImages5 = document.querySelectorAll('#animation-grid5 .animated-image');
    var delay = 2500;

    // Function to animate all images at once
    function animateImages(images, delay) {
        images.forEach(function(image, index) {
            setTimeout(function() {
                image.style.opacity = '1';
            }, index * delay);
        });
    }

    // Call the animateImages function for each section
    function startAnimation() {
        setTimeout(function() {
            animateImages(animatedImages1, delay);
        }, delay);
        setTimeout(function() {
            animateImages(animatedImages2, delay);
        }, delay);
        setTimeout(function() {
            animateImages(animatedImages3, delay);
        }, delay);
        setTimeout(function() {
            animateImages(animatedImages4, delay);
        }, delay);
        setTimeout(function() {
            animateImages(animatedImages5, delay);
        }, delay);
    }

    // Call the startAnimation function to begin the animation
    startAnimation();

    // Function to restart the animation after one round completes
    function restartAnimation() {
        // Reset opacity for all images
        document.querySelectorAll('.animated-image').forEach(function(image) {
            image.style.opacity = '0';
        });
        // Call startAnimation again after a delay
        setTimeout(startAnimation, delay);
    }

    // Call the restartAnimation function after each round completes
    setInterval(restartAnimation, delay * 2);
});