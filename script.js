 const steps = [
    {
        image: '',
        explanation: 'Step 1: Draw the chin base line. Place your ruler horizontally near the bottom of the paper, about 1 inch up from the bottom edge. Align the ruler so it spans from the 1-inch mark on the left side of the paper to the 7-inch mark on the right side. Draw a straight horizontal line 6 inches long. This line represents the bottom of the chin and jawline.'
    },
    {
        image: '',
        explanation: 'Step 2: Construct the left jawline. At the left end of the chin base line (this point is at 1 inch across from the left edge, and 1 inch up from the bottom — written as coordinate (1,1)), place your protractor. Align the straight edge of the protractor with the chin base line, then rotate counterclockwise until the protractor reads 63 degrees. Using your straight edge, draw a line 4.5 inches long upward at this angle. This angled line forms the left jaw and cheek.'
    },
    {
        image: '',
        explanation: 'Step 3: Construct the right jawline. At the right end of the chin base line (this point is at 7 inches across from the left edge, and 1 inch up from the bottom — coordinate (7,1)), place your protractor. Align with the chin base line, then rotate clockwise until the protractor reads 117 degrees. Using your straight edge, draw a line 4.5 inches long upward at this angle. This angled line mirrors the left jawline, forming the right cheek.'
    },
    {
        image: '',
        explanation: 'Step 4: Round off the top of the head. Find the midpoint between the tops of the two jawlines (roughly at coordinate (4,5) — 4 inches across, 5 inches up). Place the center of your protractor here, with the curved edge facing upward. Draw a semicircle arc from 180° to 360° with a 2-inch radius. This arc connects the two jawlines and forms the rounded top of the head.'
    },
    {
        image: '',
        explanation: 'Step 5: Draw the eye guideline. Place your ruler horizontally at 4 inches vertical height (this means 4 inches up from the bottom edge of the paper). Draw a straight line from 2.5 inches across to 5.5 inches across (3 inches long). This horizontal line marks the level where the eyes will be placed.'
    },
    {
        image: '',
        explanation: 'Step 6: Shape the upper eyelid of the left eye. At coordinate (3.2,4) — 3.2 inches across, 4 inches up — place the center of your protractor. Draw an arc from 0° to 180° with a 0.5-inch radius. This arc forms the curved upper eyelid of the left eye.'
    },
    {
        image: '',
        explanation: 'Step 7: Shape the lower eyelid of the left eye. At the same center (3.2,4), draw another arc from 180° to 360° with a 0.5-inch radius. This arc completes the almond shape of the left eye.'
    },
    {
        image: '',
        explanation: 'Step 8: Shape the upper eyelid of the right eye. At coordinate (4.8,4) — 4.8 inches across, 4 inches up — place the protractor center. Draw an arc from 0° to 180° with a 0.5-inch radius. This arc forms the curved upper eyelid of the right eye.'
    },
    {
        image: '',
        explanation: 'Step 9: Shape the lower eyelid of the right eye. At the same center (4.8,4), draw another arc from 180° to 360° with a 0.5-inch radius. This arc completes the almond shape of the right eye.'
    },
    {
        image: '',
        explanation: 'Step 10: Draw the nose bridge. Place your ruler vertically at x=4 (the center of the face). Draw a straight line downward from y=3.5 to y=2.5 (1 inch long). This vertical line represents the nose bridge.'
    },
    {
        image: '',
        explanation: 'Step 11: Draw the mouth guideline. Place your ruler horizontally at y=2 (2 inches up from the bottom). Draw a line from x=3.5 to x=4.5 (1 inch long). This horizontal line marks the mouth position.'
    },
    {
        image: '',
        explanation: 'Step 12: Draw the left eyebrow. At coordinate (3.15,4.25), place your protractor. Rotate to 10°. Draw a short line 0.7 inches long. This angled line forms the left eyebrow arch.'
    },
    {
        image: '',
        explanation: 'Step 13: Draw the right eyebrow. At coordinate (4.85,4.25), place your protractor. Rotate to 170°. Draw a short line 0.7 inches long. This angled line forms the right eyebrow arch.'
    },
    {
        image: '',
        explanation: 'Step 14: Draw the nose base. At coordinate (3.5,2.5), place your ruler. Draw a short horizontal line to (4,2.5), 0.5 inches long. This line represents the base of the nose.'
    },
    {
        image: '',
        explanation: 'Step 15: Draw the chin contour. Place your ruler horizontally at y=1.5 (1.5 inches up from the bottom). Draw a short curved line upward at both ends to suggest the rounded chin.'
    },
    {
        image: '',
        explanation: 'Step 16: Add cheek detail. At coordinate (2.5,3.25), place your protractor. Rotate to 45°. Draw a short wrinkle line 1 inch long. Repeat similar angled lines to suggest cheek texture and hair strands.'
    },
    {
        image: '',
        explanation: 'Step 17: Draw the ears. At left side (1,3.5), sketch a small oval 0.5 inches tall. At right side (7,3.5), sketch a mirrored oval. These ovals represent the ears.'
    },
    {
        image: '',
        explanation: 'Step 18: Draw the hairline. Place your ruler slightly above the head arc (~4,6.5). Sketch short vertical strokes downward along the arc to suggest hair strands framing the face.'
    },
    {
        image: '',
        explanation: 'Step 19: Draw the neck. Place your ruler vertically at x=3 and x=5. Draw two parallel lines downward from y=1 to y=0. These lines represent the neck extending from the jawline.'
    },
    {
        image: '',
        explanation: 'Step 20: Add final details. Use your protractor to draw small arcs for smile lines near the mouth corners. Add short angled lines for wrinkles. Draw a small circle at (2.5,3) with a 0.2-inch radius for an earring. These finishing touches add realism and character.'
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
