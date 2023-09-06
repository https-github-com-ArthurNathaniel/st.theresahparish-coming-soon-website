
        // Function to update the countdown
        function updateCountdown() {
            const now = new Date().getTime();
            const targetDate = localStorage.getItem("targetDate");

            if (!targetDate) {
                // Set the target date 10 days from now if it's not stored in localStorage
                const newTargetDate = new Date();
                newTargetDate.setDate(newTargetDate.getDate() + 10);
                localStorage.setItem("targetDate", newTargetDate.getTime().toString());
                updateCountdown();
                return;
            }

            const timeLeft = targetDate - now;

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("days").textContent = days;
            document.getElementById("hours").textContent = hours;
            document.getElementById("minutes").textContent = minutes;
            document.getElementById("seconds").textContent = seconds;

            if (timeLeft <= 0) {
                document.getElementById("countdown").textContent = "Countdown expired!";
            }
        }

        // Update the countdown every second
        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);
    

        //  var options = {
        //    strings: ["COMING SOON"],
        //    typeSpeed: 10, // Typing speed in milliseconds
        //    backSpeed: 25, // Backspacing speed in milliseconds
        //    backDelay: 2000, // Delay before starting to backspace
        //    startDelay: 0, // Delay before starting to type
        //    loop: true, // Loop the animation indefinitely,
        //    showCursor: false, // Hide the cursor
        //    onComplete: function () {
        //      // Add any additional actions when the animation completes
        //    },
        //  };

        //  var typed = new Typed("#typed-output", options);