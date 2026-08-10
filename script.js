/* =====================================================
   NOVUS AI MUSEUM GUIDE
   PAPARAN 1 JAVASCRIPT
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const sleepVideo =
    document.getElementById("sleepVideo");


const beginTourButton =
    document.getElementById("beginTourButton");


const buttonText =
    document.getElementById("buttonText");


const spikeStatus =
    document.getElementById("spikeStatus");


const connectionText =
    document.getElementById("connectionText");


const wakeOverlay =
    document.getElementById("wakeOverlay");


const wakeText =
    document.getElementById("wakeText");



/* =====================================================
   SYSTEM STATE
===================================================== */

let spikeConnected = false;

let tourStarting = false;



/* =====================================================
   INITIAL STARTUP
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    initialiseNovus
);


function initialiseNovus() {

    console.log(
        "NOVUS AI Museum Guide Starting..."
    );


    /* Default:
       SPIKE Prime is NOT connected yet.
    */

    setSpikeDisconnected();


    /* Try to start sleep video */

    startSleepVideo();

}



/* =====================================================
   VIDEO
===================================================== */

function startSleepVideo() {

    if (!sleepVideo) {
        return;
    }


    sleepVideo.muted = true;


    const playPromise =
        sleepVideo.play();


    if (
        playPromise !== undefined
    ) {

        playPromise
            .then(() => {

                console.log(
                    "NOVUS sleep video playing."
                );

            })

            .catch(error => {

                console.log(
                    "Video autoplay waiting for user interaction.",
                    error
                );

            });

    }

}



/* =====================================================
   SPIKE PRIME STATUS
===================================================== */

function clearSpikeStatusClasses() {

    spikeStatus.classList.remove(
        "connected",
        "disconnected",
        "connecting"
    );

}



/* ------------------------------
   DISCONNECTED
------------------------------ */

function setSpikeDisconnected() {

    spikeConnected = false;


    clearSpikeStatusClasses();


    spikeStatus.classList.add(
        "disconnected"
    );


    connectionText.textContent =
        "SPIKE PRIME DISCONNECTED";


    console.log(
        "SPIKE Prime: DISCONNECTED"
    );

}



/* ------------------------------
   CONNECTING
------------------------------ */

function setSpikeConnecting() {

    spikeConnected = false;


    clearSpikeStatusClasses();


    spikeStatus.classList.add(
        "connecting"
    );


    connectionText.textContent =
        "CONNECTING TO SPIKE PRIME...";


    console.log(
        "SPIKE Prime: CONNECTING"
    );

}



/* ------------------------------
   CONNECTED
------------------------------ */

function setSpikeConnected() {

    spikeConnected = true;


    clearSpikeStatusClasses();


    spikeStatus.classList.add(
        "connected"
    );


    connectionText.textContent =
        "SPIKE PRIME CONNECTED";


    console.log(
        "SPIKE Prime: CONNECTED"
    );

}



/* =====================================================
   BEGIN TOUR BUTTON
===================================================== */

beginTourButton.addEventListener(
    "click",
    beginTour
);



function beginTour() {

    if (tourStarting) {

        return;

    }


    tourStarting = true;


    console.log(
        "NOVUS tour requested."
    );


    /* Pause sleep video */

    if (sleepVideo) {

        sleepVideo.pause();

    }


    buttonText.textContent =
        "NOVUS IS WAKING UP...";


    beginTourButton.disabled =
        true;


    /* Show wake screen */

    wakeOverlay.classList.add(
        "show"
    );


    wakeText.textContent =
        "WAKING UP...";


    /* Stage 1 */

    setTimeout(() => {

        wakeText.textContent =
            "INITIALISING NOVUS...";

    }, 900);



    /* Stage 2 */

    setTimeout(() => {

        wakeText.textContent =
            "PREPARING MUSEUM TOUR...";

    }, 1800);



    /* Stage 3 */

    setTimeout(() => {

        wakeText.textContent =
            "NOVUS IS READY";

    }, 2700);



    /* Paparan 2 will be connected here later */

    setTimeout(() => {

        /*
        NEXT DEVELOPMENT:

        window.location.href =
            "language.html";

        Paparan 2:
        CHOOSE YOUR LANGUAGE

        Bahasa Melayu
        English
        中文
        தமிழ்
        */


        wakeOverlay.classList.remove(
            "show"
        );


        buttonText.textContent =
            "TOUCH HERE TO BEGIN TOUR";


        beginTourButton.disabled =
            false;


        tourStarting = false;


        if (sleepVideo) {

            startSleepVideo();

        }


        console.log(
            "Paparan 2 not installed yet."
        );

    }, 3800);

}



/* =====================================================
   FUTURE BLUETOOTH FUNCTIONS
===================================================== */

/*
    IMPORTANT:

    Actual Bluetooth connection to LEGO
    SPIKE Prime will be added later.

    When Bluetooth successfully connects:

        setSpikeConnected();

    When Bluetooth disconnects:

        setSpikeDisconnected();

    While searching:

        setSpikeConnecting();

*/


/* =====================================================
   PREVENT DOUBLE TAP ZOOM
===================================================== */

let lastTouchEnd = 0;


document.addEventListener(
    "touchend",

    function(event) {

        const now =
            new Date().getTime();


        if (
            now - lastTouchEnd <= 300
        ) {

            event.preventDefault();

        }


        lastTouchEnd = now;

    },

    false
);
