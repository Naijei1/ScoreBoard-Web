let homeNode = document.getElementById("home-score");
let guestNode = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

function updateHomeScore() {
    homeNode.textContent = homeScore;
    updateLeader();
}

function incrementHome1() {
    homeScore += 1;
    updateHomeScore();
}

function incrementHome2() {
    homeScore += 2;
    updateHomeScore();
}

function incrementHome3() {
    homeScore += 3;
    updateHomeScore();
}

function updateGuestScore(){
    guestNode.textContent = guestScore;
    updateLeader();
}

function incrementGuest1() {
    guestScore += 1;
    updateGuestScore();
}

function incrementGuest2() {
    guestScore += 2;
    updateGuestScore();
}

function incrementGuest2() {
    guestScore += 2;
    updateGuestScore();
}

function updateLeader() {
    if(homeScore > guestScore){
        homeNode.style.color = "#FFB703";
        guestNode.style.color = "#F94F6D";

    }else if(guestScore > homeScore){
        guestNode.style.color = "#FFB703";
        homeNode.style.color = "#F94F6D";
    }else{
        guestNode.style.color = "#F94F6D";
        homeNode.style.color = "#F94F6D";
    }
}