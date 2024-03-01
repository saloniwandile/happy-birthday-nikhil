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
        animateImages(animatedImages1, delay);
        animateImages(animatedImages2, delay);
        animateImages(animatedImages3, delay);
        animateImages(animatedImages4, delay);
        animateImages(animatedImages5, delay);
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
        setTimeout(startAnimation, delay*0.25); // Adjusted to match the total duration of all animations
    }

    // Call the restartAnimation function after each round completes
    setInterval(restartAnimation, delay * 5); 
})
