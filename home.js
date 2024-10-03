const bmi = localStorage.getItem('bmi');

if (bmi < 18.5) {
    result2.innerHTML += ` 
        <div class="col-5">
            <img src="https://thumbs.dreamstime.com/b/skinny-guy-n-gym-vector-illustration-cool-cartoon-style-geometrical-flat-isolated-white-background-70243123.jpg" height="700px" width="600px" alt="Slim Person Image">
        </div>
        <div class="col-7">
            <h1 style="color:gold ;font-size:70px">You are classified as Under Weight</h1>
            <p style="font-size:32px">Your BMI is less than 18.5, which is categorized as underweight. It's important to maintain a balanced diet and take care of your health.</p>
             <img src="https://i.pinimg.com/originals/ae/38/a8/ae38a886a698251557f018084e437dae.gif" alt="" height="300px" width="300px">
            </div>
    `;
} else if (bmi >= 18.5 && bmi < 25) {
    result2.innerHTML += `<div class="col-5">
            <img src="https://img.freepik.com/premium-vector/man-is-balancing-flat-vector-illustration_343215-133.jpg" height="500px" width="400px" alt="Slim Person Image">
        </div>
        <div class="col-7">
            <h1 style="color:gold ;font-size:70px">You are classified as Normal Weight</h1>
            <p style="font-size:32px">Your BMI falls between 18.5 and 24.9, which is considered a healthy weight. Keep up the good work by maintaining a balanced diet and regular exercise.</p>
             <img src="https://i.pinimg.com/originals/ae/38/a8/ae38a886a698251557f018084e437dae.gif" alt="" height="300px" width="300px">
            </div>
      `
} else if (bmi >= 25 && bmi < 30) {
    result2.innerHTML += `
    <div class="col-5">
            <img src="https://static.vecteezy.com/system/resources/previews/042/681/974/non_2x/happy-fat-man-cartoon-character-isolated-on-white-background-vector.jpg" height="500px" width="400px" alt="Slim Person Image">
        </div>
        <div class="col-7">
            <h1 style="color:gold ;font-size:70px">You are classified as Over Weight</h1>
        <p style="font-size:32px">Your BMI is between 25 and 29.9, which is classified as overweight. It's important to manage your weight through diet and exercise to avoid health risks.</p>
             <img src="https://i.pinimg.com/originals/cd/51/26/cd5126eff8572af57bd33219712337f7.gif" alt="" height="300px" width="300px">
            </div>
       
    `;
} else if (bmi >= 30 && bmi < 35) {
    result2.innerHTML += `
     
    <div class="col-5">
            <img src="https://static.vecteezy.com/system/resources/previews/042/681/974/non_2x/happy-fat-man-cartoon-character-isolated-on-white-background-vector.jpg" height="500px" width="400px" alt="Slim Person Image">
        </div>
        <div class="col-7">
            <h1 style="color:gold ;font-size:70px">You are classified as Obese</h1>
        <p style="font-size:32px">Your BMI is between 30 and 34.9, which is considered obese. Consult a healthcare provider for advice on weight management and overall health.</p>
             <img src="https://i.pinimg.com/originals/cd/51/26/cd5126eff8572af57bd33219712337f7.gif" alt="" height="300px" width="300px">
            </div>

    `;
} else {
    result2.innerHTML += `
       
            
            
            <div style="display:flex" class="running-character">
             <div class="col-5">
            <img src="https://png.pngtree.com/png-clipart/20230912/original/pngtree-obesity-clipart-cartoon-cartoon-fat-man-on-a-white-background-vector-png-image_11052892.png" height="500px" width="400px" alt="Slim Person Image">
        </div>
        <div class="col-7">
            <h1 style="color:gold ;font-size:70px">You are classified as Extremely Obese</h1>
        <p style="font-size:32px">Your BMI is above 35, which is classified as extreme obesity. It is highly recommended to seek medical advice to manage your weight and reduce health risks.</p>
<h1 style="color:black ;font-size:25px">It's Never Too Late to Take the First Step!<br>Start Running Daily</h1>

        </div>
            
                <img id="runner" src="https://i.pinimg.com/originals/8a/6b/19/8a6b1994f66c2d5e6967ad1655300762.gif" alt="Running Character" style="position: absolute; bottom: 0; height: 250px; width: 500px;">
            </div>
        
    `;

    // Delay animation until the DOM is updated and the GIF is loaded
    setTimeout(() => {
        gsap.to("#runner", {
            x: 1020, // Move the GIF across the screen
            duration: 3,  // Duration of the animation
            repeat: -1,   // Repeat indefinitely
            ease: "power1.inOut", // Easing function for smooth movement
            onStart: function() {
                console.log("Running GIF animation started!");
            }
        });
    }, 100); // Delay of 100ms to ensure the GIF is fully loaded
}

