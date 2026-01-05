const steps = [
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...[truncated base64 for Step 1]',
        explanation: 'Step 1: Place the ruler horizontally at the bottom of your paper (about 1 inch from the edge). Align it from the 1-inch mark to the 7-inch mark on the ruler. Draw a straight horizontal line 6 inches long. This forms the base of the chin and jawline.'
    },
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...[truncated base64 for Step 2]',
        explanation: 'Step 2: Place the protractor at the left end of the base line (at coordinates roughly 1 inch horizontal, 1 inch vertical on paper). Align the straight edge with the base line, then rotate counterclockwise to 63 degrees. Draw a line along the straight edge for 4.47 inches (calculated as sqrt((2 inches horizontal)^2 + (4 inches vertical)^2)). This forms the left jawline, angling upward to shape the cheek.'
    },
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...[truncated base64 for Step 3]',
        explanation: 'Step 3: Place the protractor at the right end of the base line (at 7 inches horizontal, 1 inch vertical). Align with the base line, rotate clockwise to 117 degrees (for symmetry). Draw a line along the straight edge for 4.47 inches. This forms the right jawline.'
    },
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...[truncated base64 for Step 4]',
        explanation: 'Step 4: Place the protractor center at the midpoint top of the jawlines (4 inches horizontal, 5 inches vertical), with the curved edge facing up. Spin counterclockwise and draw along the inside curve from 180 degrees to 360 degrees, using a 2-inch radius. This forms the rounded top of the head.'
    },
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...[truncated base64 for Step 5]',
        explanation: 'Step 5: Place the ruler horizontally at 4 inches vertical (eye level). Align from 2.5 inches to 5.5 inches horizontal. Draw a straight line 3 inches long. This sets the guideline for the eyes.'
    },
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...[truncated base64 for Step 6]',
        explanation: 'Step 6: Place the protractor center at left eye position (3.2 inches horizontal, 4 inches vertical). Use the curved edge to draw the upper eyelid arc from 0 to 180 degrees, with 0.5-inch radius. This shapes the top of the left eye, giving a slightly hooded look for age.'
    },
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...[truncated base64 for Step 7]',
        explanation: 'Step 7: Keep the protractor at the same center (3.2 inches horizontal, 4 inches vertical). Draw the lower eyelid arc from 180 to 360 degrees, with 0.5-inch radius. This completes the left eye almond shape.'
    },
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...[truncated base64 for Step 8]',
        explanation: 'Step 8: Place the protractor center at right eye position (4.8 inches horizontal, 4 inches vertical). Draw the upper eyelid arc from 0 to 180 degrees, with 0.5-inch radius. This shapes the top of the right eye.'
    },
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...[truncated base64 for Step 9]',
        explanation: 'Step 9: Keep the protractor at the same center (4.8 inches horizontal, 4 inches vertical). Draw the lower eyelid arc from 180 to 360 degrees, with 0.5-inch radius. This completes the right eye.'
    },
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...[truncated base64 for Step 10]',
        explanation: 'Step 10: Place the ruler vertically at the center (4 inches horizontal). Draw a straight line from 3.5 inches vertical down to 2.5 inches vertical (1 inch long). This forms the nose bridge.'
    },
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...[truncated base64 for Step 11]',
        explanation: 'Step 11: Place the ruler horizontally at 2 inches vertical. Draw from 3.5 to 4.5 inches horizontal (1 inch long). This forms the mouth line, slightly neutral for the expression.'
    },
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...[truncated base64 for Step 12]',
        explanation: 'Step 12: Place the protractor at left eyebrow area (3.15 inches horizontal, 4.25 inches vertical). Angle to 10 degrees and draw a short line along the straight edge for 0.7 inches. This forms the left eyebrow, arched slightly.'
    },
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...[truncated base64 for Step 13]',
        explanation: 'Step 13: Place the protractor at right eyebrow area (4.85 inches horizontal, 4.25 inches vertical). Angle to 170 degrees and draw a short line for 0.7 inches. This forms the right eyebrow.'
    },
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...[truncated base64 for Step 14]',
        explanation: 'Step 14: Place the ruler at nose bottom (3.5 inches horizontal, 2.5 inches vertical). Draw a short horizontal line to 4 inches horizontal (0.5 inches long). This adds the nose base.'
    },
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...[truncated base64 for Step 15]',
        explanation: 'Step 15: Place the protractor at left cheek (2.5 inches horizontal, 3.25 inches vertical). Angle to 45 degrees and draw a short wrinkle line for 1 inch. Repeat similar short lines for hair waves and additional wrinkles/earring (small circle at 2.5 inches horizontal, 3 inches vertical with 0.2-inch radius). This adds aging details and short gray hair texture.'
    }
];

let currentStep = -1;
const stepImage = document.getElementById('step-image');
const explanation = document.getElementById('explanation');
const nextBtn = document.getElementById('next-btn');

nextBtn.addEventListener('click', () => {
    currentStep++;
    if (currentStep >= steps.length) {
        currentStep = 0;  // Loop back or end
    }
    stepImage.src = steps[currentStep].image;
    explanation.textContent = steps[currentStep].explanation;
    nextBtn.textContent = (currentStep === steps.length - 1) ? 'Restart' : 'Next Step';
});
