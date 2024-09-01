document.addEventListener('DOMContentLoaded', () => {
    const subjectRows = document.querySelectorAll('.subject-row');

    subjectRows.forEach(row => {
        const studyButton = row.querySelector('.study-button');
        const circles = row.querySelectorAll('.circle');
        const hyphens = row.querySelectorAll('.hyphen');

        studyButton.addEventListener('click', () => {
            let totalProgress = 0;

            // Calculate current progress
            hyphens.forEach(hyphen => {
                if (hyphen.classList.contains('active')) {
                    totalProgress++;
                }
            });

            // Proceed only if totalProgress is less than 20
            if (totalProgress < hyphens.length) {
                // Activate next hyphen
                hyphens[totalProgress].classList.add('active', `level-${totalProgress + 1}`);
            }

            // Update circles based on progress
            const circleIndex = Math.floor((totalProgress + 1) / 5);

            circles.forEach((circle, index) => {
                if (index < circleIndex) {
                    circle.classList.add('active', `level-${(index + 1) * 5}`);
                } else {
                    circle.classList.remove('active');
                    for (let i = 1; i <= 20; i++) {
                        circle.classList.remove(`level-${i}`);
                    }
                }
            });

            // Check for completion
            if (totalProgress + 1 === hyphens.length) {
                circles[circles.length - 1].classList.add('completed');
                alert(`${row.dataset.subject} study completed!`);
            }
        });
    });
});
