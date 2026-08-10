const beginTourButton =
    document.getElementById(
        "beginTourButton"
    );

const sleepVideo =
    document.getElementById(
        "sleepVideo"
    );


beginTourButton.addEventListener(
    "click",
    beginTour
);


function beginTour() {

    if (sleepVideo) {

        sleepVideo.pause();

    }


    beginTourButton.innerHTML =
        "NOVUS IS WAKING UP...";


    beginTourButton.disabled =
        true;


    document.body.classList.add(
        "waking-up"
    );


    setTimeout(() => {

        /*
        PAPARAN 2 AKAN KITA
        SAMBUNG KEMUDIAN.

        Nanti kita tukar kepada:

        window.location.href =
        "language.html";
        */

        alert(
            "NOVUS IS READY"
        );


        beginTourButton.innerHTML =
            "TOUCH HERE TO BEGIN TOUR";


        beginTourButton.disabled =
            false;


        if (sleepVideo) {

            sleepVideo.play();

        }

    }, 1500);

}
