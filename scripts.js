const memulai = confirm("Mau main game gak?");

if (memulai == true) {
    do {
        let player = prompt("Pilih jari : Jempol, Telunjuk, kelingking");

        if (player == "Jempol" || player == "Telunjuk" || player == "Kelingking") {
            let computer = Math.random();

            if (computer < 0.44) {
                computer = "Jempol";
            } else if (computer < 0.88) {
                computer = "Telunjuk";
            } else {
                computer = "Kelingking";
            }

            if (player == "Jempol" && computer == "Kelingking") {
                alert("Yo kamu milih jari : " + player + "\nSedangkan computer milih jari: " + computer + "\nHasil : Masa sama computer kalah😒😑😐😐😑");
            } else if (player == "Jempol" && computer == "Telunjuk") {
                alert("Yo kamu milih jari : " + player + "\nSedangkan computer milih jari : " + computer + "\nHasil : Wow hebat kamu menang😨🥶😱😱😱🥶🥶");
            } else if (player == "Telunjuk" && computer == "Jempol") {
                alert("Yo kamu milih jari : " + player + "\nSedangkan computer milih jari : " + computer + "\nHasil : Masa sama computer kalah😭😭😭😭");
            } else if (player == "Telunjuk" && computer == "Kelingking") {
                alert("Yo kamu milih jari : " + player + "\nSedangkan computer milih jari : " + computer + "\nHasil : Wow hebat kamu menang🥶🥶🥶🥶🥶");
            } else if (player == "Kelingking" && computer == "Telunjuk") {
                alert("Yo kamu milih jari : " + player + "\nSedangkan computer milih jari : " + computer + "\nHasil : Masa sama computer kalah😒😒😒😒");
            } else if (player == "Kelingking" && computer == "Jempol") {
                alert("Yo kamu milih jari : " + player + "\nSedangkan computer milih jari : " + computer + "\nHasil : Wow hebat kamu menang😱😱😱😱😱");
            } else {
                alert("Yo kamu milih jari : " + player + "\nSedangkan computer milih jari : " + computer + "\nHasil : Waduh seri😮😮🤔🤔");
            }
            var ulangi = confirm("Mau main lagi gak?");
            if (ulangi == false) {
                alert("Masa gitu doang🤓🤓🤓");
            }
        } else {
            alert("Salah, bagian depan jawa nya pake huruf kapital!");
        }
    } while (ulangi == true);
} else {
    alert("Ah gaasik😒😒😒🤮🤮");
}

