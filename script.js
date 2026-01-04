document.addEventListener('DOMContentLoaded', () => {
    const steps = [
        {
            image: 'images/step1.png',
            explanation: 'Step 1: Place the ruler at the bottom of the page. Draw a straight line 1 inch up across the bottom. This forms the baseline for the jawline.'
        },
        {
            image: 'images/step2.png',
            explanation: 'Step 2: Angle the protractor from the top at 25 cm onto the 3 inch mark on the ruler. Draw a line from 1 inch to 5 inches on the straight edge of the protractor. This creates the outside edge of the left cheek.'
        },
        {
            image: 'images/step3.png',
            explanation: 'Step 3: Move to 20 cm on the outside count of the protractor, align with inch 7 on the ruler. Draw a line on the inside from 7 inches to 8 inches. This makes the indent for the eye line.'
        },
        {
            image: 'images/step4.png',
            explanation: 'Step 4: Move the protractor straight up 1 inch with the straight edge, then spin counterclockwise. Draw the curved line on the inside from 160 cm to 180 cm. This adds curvature to the eye.'
        }
        // Add more steps here...
    ];

    let currentStep = 0;
    const stepImage = document.getElementById('step-image');
    const stepExplanation = document.getElementById('step-explanation');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    function updateStep() {
        stepImage.style.opacity = 0; // Fade out
        setTimeout(() => {
            stepImage.src = steps[currentStep].image;
            stepExplanation.textContent = steps[currentStep].explanation;
            stepImage.style.opacity = 1; // Fade in
        }, 500);
    }

    prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            updateStep();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateStep();
        }
    });

    // Initial load
    updateStep();

    // Submission Analysis (Basic placeholder - expand with canvas/image processing)
    const uploadInput = document.getElementById('image-upload');
    const analyzeBtn = document.getElementById('analyze-btn');
    const resultDiv = document.getElementById('analysis-result');

    analyzeBtn.addEventListener('click', () => {
        const file = uploadInput.files[0];
        if (file) {
            // Placeholder: In real version, use Canvas to detect edges/lines/angles
            // For now, simulate output
            resultDiv.textContent = 'Analyzing... Detected: Horizontal baseline (use ruler at bottom, draw 1 inch up). Diagonal cheek line (protractor at 25 cm to 3 inches, draw 1-5 inches). Add more detection logic here.';
        } else {
            resultDiv.textContent = 'Please upload an image.';
        }
    });
});
