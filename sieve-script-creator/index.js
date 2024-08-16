var email1_text = undefined;
        var email2_text = undefined;
        var input_correct = 0;

        function show_code() {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('email1').value.toString())) {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById('email2').value.toString())) {
                    input_correct = 1;
                    email1_text = document.getElementById('email1').value.toString();
                    email2_text = document.getElementById('email2').value.toString();
                    var code_text = 'require ["fileinto", "reject","imap4flags","envelope","enotify","fileinto", "variables", "copy", "body"];' +
                        '<br> if size :over 10000K {' +
                        '<br>  reject "Bitte schreibe mir, bevor du mir grosse Dateien schickst!";' +
                        '<br> }' +
                        '<br> if envelope "from" "sekretariat@sghm.de" {' +
                        '<br>   setflag "\\Flagged";' +
                        '<br>   stop;' +
                        '<br> }' +
                        '<br> if envelope "from" "schuelersprecher@sghm.eu" {' +
                        '<br>   setflag "\\Flagged";' +
                        '<br>   stop;' +
                        '<br> }' +
                        '<br> if envelope "from" "jak@sghm.eu" {' +
                        '<br>   setflag "\\Flagged";' +
                        '<br>   stop;' +
                        '<br> }' +
                        '<br> if envelope "from" "schulleitung@sghm.eu" {' +
                        '<br>   setflag "\\Flagged";' +
                        '<br>   stop;' +
                        '<br> }' +
                        '<br> if anyof (' +
                        '<br>     body :contains  "I RECORDED YOU",' +
                        '<br>     body :contains  "VIRUS",' +
                        '<br>     body :contains  "FREE MONEY",' +
                        '<br>     body :contains  "ILLEGAL ACTIVITY",' +
                        '<br>     body :contains  "ADULT SITES",' +
                        '<br>     body :contains  "BITCOIN EQUIVALANT",' +
                        '<br>     body :contains  "TROJAN",' +
                        '<br>     body :contains  "18+ VIDEOS"' +
                        '<br> )' +
                        '<br> {' +
                        '<br>     redirect :copy "phishing.email.notifier@sghm.eu";' +
                        '<br>     discard;' +
                        '<br>     stop;' +
                        '<br> }' +
                        '<br> if envelope "from" "' + email1_text + '" {' +
                        '<br>   setflag "\\Flagged";' +
                        '<br>   stop;' +
                        '<br> }' +
                        '<br> if envelope "from" "' + email2_text + '" {' +
                        '<br>   setflag "\\Flagged";' +
                        '<br>   stop;' +
                        '<br> }';

                    document.getElementById("code_title").innerHTML = "Code";
                    document.getElementById("code").innerHTML = code_text;
                }
            }
            else {
                alert("Trage bitte echte Email Adressen in die Felder ein!");
            }
        }