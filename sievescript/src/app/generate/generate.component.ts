import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css'],
})
export class GenerateComponent {
  AdresseSekre: string = 'sekretariat@sghm.eu';
  AdresseSchulleitung: string = 'schulleitung@sghm.eu';
  AdresseSchuelersprecher: string = 'schuelersprecher@sghm.eu';

  value: number = 10;
  EmailsSekre: boolean = true;
  EmailsSchulleitung: boolean = true;
  EmailsSchuelersprechern: boolean = true;
  Gambling: boolean = true;
  NSFW: boolean = true;
  Spam: boolean = true;
  inputText: string = '';
  inputTextTwo: string = '';
  generatedText: string | null = null;
  generatedTextTwo: string | null = null;

  generateFile(): void {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(this.inputText.trim()) && emailRegex.test(this.inputTextTwo.trim())) {
      this.generatedText = `
require ["fileinto", "reject", "imap4flags", "envelope", "enotify", "fileinto", "variables", "copy", "body"];\n
if size :over ${this.value}000K {\n
  reject "Bitte schreibe mir, bevor du mir grosse Dateien schickst!";\n
}\n
if envelope "from" "sekretariat@sghm.de" {\n
  setflag "\\\\Flagged";\n
  stop;\n
}\n
if envelope "from" "schuelersprecher@sghm.eu" {\n
  setflag "\\\\Flagged";\n
  stop;\n
}\n
if envelope "from" "jak@sghm.eu" {\n
  setflag "\\\\Flagged";\n
  stop;\n
}\n
if envelope "from" "schulleitung@sghm.eu" {\n
  setflag "\\\\Flagged";\n
  stop;\n
}\n
if anyof (\n
  body :contains "I RECORDED YOU",\n
  body :contains "VIRUS",\n
  body :contains "FREE MONEY",\n
  body :contains "ILLEGAL ACTIVITY",\n
  body :contains "ADULT SITES",\n
  body :contains "BITCOIN EQUIVALANT",\n
  body :contains "TROJAN",\n
  body :contains "18+ VIDEOS"\n
) {\n
  redirect :copy "phishing.email.notifier@sghm.eu";\n
  discard;\n
  stop;\n
}\n
if envelope "from" "${this.inputText}" {\n
  setflag "\\\\Flagged";\n
  stop;\n
}\n
if envelope "from" "${this.inputTextTwo}" {\n
  setflag "\\\\Flagged";\n
  stop;\n
}\n
`;

      this.generatedTextTwo = `
require ["fileinto", "reject", "imap4flags", "envelope", "enotify", "fileinto", "variables", "copy", "body"];\n
if size :over ${this.value}000K {\n

  reject "Bitte schreibe mir, bevor du mir grosse Dateien schickst!";\n

}\n
if envelope "from" "${this.inputText}" {\n
  setflag "\\\\Flagged";\n
  stop;\n
}\n
if envelope "from" "${this.inputTextTwo}" {\n
  setflag "\\\\Flagged";\n
  stop;\n
}\n
`

      if (this.EmailsSekre) {
        this.generatedTextTwo += `
if envelope "from" "${this.AdresseSekre}" {\n

  setflag "\\Flagged";\n

  stop;\n

}\n
`
      }
      if (this.EmailsSchulleitung) {
        this.generatedTextTwo += `
if envelope "from" "${this.AdresseSchulleitung}" {\n

  setflag "\\Flagged";\n

  stop;\n

}\n
`
      }
      if (this.EmailsSchuelersprechern) {
        this.generatedTextTwo += `
if envelope "from" "${this.AdresseSchuelersprecher}" {\n

  setflag "\\Flagged";\n

  stop;\n

}\n
`
      }

      if (this.Spam) {
        this.generatedTextTwo += `
if anyof (\n

  body :contains "I RECORDED YOU",\n
  body :contains "VIRUS",\n
  body :contains "FREE MONEY",\n
  body :contains "ILLEGAL ACTIVITY",\n
  body :contains "ADULT SITES",\n
  body :contains "BITCOIN EQUIVALENT",\n
  body :contains "TROJAN",\n
  body :contains "18+ VIDEOS",\n
  body :contains "URGENT ACTION REQUIRED",\n
  body :contains "UPDATE YOUR ACCOUNT",\n
  body :contains "SUSPICIOUS LOGIN",\n
  body :contains "VERIFY YOUR IDENTITY",\n
  body :contains "UNUSUAL ACTIVITY",\n
  body :contains "IMMEDIATE RESPONSE NEEDED",\n
  body :contains "YOUR ACCOUNT HAS BEEN SUSPENDED",\n
  body :contains "CLICK HERE TO REACTIVATE",\n
  body :contains "YOUR PASSWORD EXPIRES SOON",\n
  body :contains "ACCOUNT VERIFICATION REQUIRED",\n
  body :contains "YOU HAVE WON",\n
  body :contains "CONGRATULATIONS, YOU'RE A WINNER",\n
  body :contains "RESET YOUR PASSWORD",\n
  body :contains "FREE GIFT",\n
  body :contains "ACT NOW",\n
  body :contains "TRANSFER FUNDS",\n
  body :contains "LIMITED TIME OFFER",\n
  body :contains "BANK DETAILS REQUIRED",\n
  body :contains "SECURITY ALERT",\n
  body :contains "YOUR ACCOUNT IS ON HOLD",\n
  body :contains "CONFIRM PERSONAL INFORMATION",\n
  body :contains "UPGRADE YOUR SUBSCRIPTION",\n
  body :contains "FINAL NOTICE",\n
  body :contains "UNCLAIMED REWARD",\n
  body :contains "YOUR BILL IS DUE",\n
  body :contains "COMPROMISED ACCOUNT",\n
  body :contains "VERIFY YOUR PAYMENT INFORMATION",\n
  body :contains "CLAIM YOUR PRIZE NOW",\n
  body :contains "CONFIDENTIAL INFORMATION",\n
  body :contains "ATTENTION REQUIRED IMMEDIATELY",\n
  body :contains "PAYMENT DECLINED",\n
  body :contains "SECURE YOUR ACCOUNT",\n
  body :contains "IMMEDIATE VERIFICATION REQUIRED",\n
  body :contains "SECURITY WARNING",\n
  body :contains "UNUSUAL TRANSACTION DETECTED",\n
  body :contains "CLAIM YOUR GIFT CARD",\n
  body :contains "ACCESS YOUR ACCOUNT",\n

  body :contains "ICH HABE DICH AUFGEZEICHNET",\n
  body :contains "VIRUS",\n
  body :contains "KOSTENLOSES GELD",\n
  body :contains "ILLEGALE AKTIVITÄTEN",\n
  body :contains "ERWACHSENEN-SEITEN",\n
  body :contains "BITCOIN EQUIVALENT",\n
  body :contains "TROJANER",\n
  body :contains "18+ VIDEOS",\n
  body :contains "DRINGENDE AKTION ERFORDERLICH",\n
  body :contains "AKTUALISIEREN SIE IHR KONTO",\n
  body :contains "VERDÄCHTIGER LOGIN",\n
  body :contains "VERIFIZIEREN SIE IHRE IDENTITÄT",\n
  body :contains "UNGEWÖHNLICHE AKTIVITÄT",\n
  body :contains "SOFORTIGE ANTWORT BENÖTIGT",\n
  body :contains "IHR KONTO WURDE GESPERRT",\n
  body :contains "KLICKEN SIE HIER, UM ZU REAKTIVIEREN",\n
  body :contains "IHR PASSWORT LÄUFT BALD AB",\n
  body :contains "KONTO VERIFIZIERUNG ERFORDERLICH",\n
  body :contains "SIE HABEN GEWONNEN",\n
  body :contains "GLÜCKWUNSCH, SIE SIND EIN GEWINNER",\n
  body :contains "PASSWORT ZURÜCKSETZEN",\n
  body :contains "KOSTENLOSES GESCHENK",\n
  body :contains "JETZT HANDELN",\n
  body :contains "GELD ÜBERWEISEN",\n
  body :contains "ZEITLICH BEGRENZTES ANGEBOT",\n
  body :contains "BANKDATEN ERFORDERLICH",\n
  body :contains "SICHERHEITSWARNUNG",\n
  body :contains "IHR KONTO IST GESPERRT",\n
  body :contains "BESTÄTIGEN SIE PERSONENBEZOGENE DATEN",\n
  body :contains "UPGRADE IHR ABONNEMENT",\n
  body :contains "LETZTE MAHNUNG",\n
  body :contains "NICHT ABGEHOLTER GEWINN",\n
  body :contains "IHRE RECHNUNG IST FÄLLIG",\n
  body :contains "KONTO KOMPROMITTIERT",\n
  body :contains "ZAHLUNGSINFORMATIONEN VERIFIZIEREN",\n
  body :contains "JETZT IHREN PREIS EINLÖSEN",\n
  body :contains "VERTRAULICHE INFORMATIONEN",\n
  body :contains "SOFORTIGE AUFMERKSAMKEIT ERFORDERLICH",\n
  body :contains "ZAHLUNG ABGELEHNT",\n
  body :contains "KONTO SICHERN",\n
  body :contains "SOFORTIGE VERIFIZIERUNG ERFORDERLICH",\n
  body :contains "SICHERHEITSWARNUNG",\n
  body :contains "UNGEWÖHNLICHE TRANSAKTION ERKANNT",\n
  body :contains "IHRE GESCHENKKARTE EINLÖSEN",\n
  body :contains "KONTOZUGRIFF"\n
) {\n

  redirect :copy "some.email.to.receive.the.spam@sghm.de";\n

  discard;\n

  stop;\n

}\n

`
      }

      if (this.Gambling) {
        this.generatedTextTwo += `
if anyof (\n

  body :contains "ONLINE CASINO",\n
  body :contains "BIG JACKPOT",\n
  body :contains "FREE SPINS",\n
  body :contains "PLAY NOW",\n
  body :contains "HIGH STAKES",\n
  body :contains "WIN REAL MONEY",\n
  body :contains "GAMBLING OFFER",\n
  body :contains "BLACKJACK",\n
  body :contains "POKER TOURNAMENT",\n
  body :contains "RISK-FREE BET",\n
  body :contains "PLACE YOUR BETS",\n
  body :contains "SLOT MACHINES",\n
  body :contains "BETTING ODDS",\n
  body :contains "BONUS WINS",\n
  body :contains "WIN BIG",\n
  body :contains "BET NOW",\n
  body :contains "SPORTS BETTING",\n
  body :contains "JOIN THE TABLE",\n
  body :contains "WINNINGS GUARANTEED",\n
  body :contains "HIGH ROLLER",\n
  body :contains "WIN CASH PRIZES",\n
  body :contains "DOUBLE YOUR MONEY",\n
  body :contains "INSTANT WIN",\n
  body :contains "GET LUCKY",\n
  body :contains "SPIN TO WIN",\n
  body :contains "CASH REWARDS",\n
  body :contains "BINGO",\n
  body :contains "LOTTERY JACKPOT",\n
  body :contains "RISK FREE",\n
  body :contains "SLOTS BONUS",\n
  body :contains "NO DEPOSIT REQUIRED",\n
  body :contains "BETTING TIPS",\n
  body :contains "CASINO BONUS",\n
  body :contains "ONLINE GAMBLING",\n
  body :contains "WINNING STRATEGY",\n
  body :contains "FAST PAYOUTS",\n
  body :contains "ROLL THE DICE",\n
  body :contains "DAILY JACKPOT",\n
  body :contains "VEGAS STYLE GAMES",\n
  body :contains "CASINO GAMES",\n
  body :contains "HIGH PAYOUTS",\n
  body :contains "SPIN BONUS",\n
  body :contains "LUCKY WINNER",\n
  body :contains "PLAY TO WIN",\n
  body :contains "EXCLUSIVE BONUS",\n

  body :contains "ONLINE-CASINO",\n
  body :contains "GROSSER JACKPOT",\n
  body :contains "KOSTENLOSE DREHUNGEN",\n
  body :contains "JETZT SPIELEN",\n
  body :contains "HOHE EINSÄTZE",\n
  body :contains "ECHTES GELD GEWINNEN",\n
  body :contains "SPIELANGEBOT",\n
  body :contains "BLACKJACK",\n
  body :contains "POKER-TURNIER",\n
  body :contains "RISIKOLOSE WETTE",\n
  body :contains "SETZEN SIE IHRE WETTEN",\n
  body :contains "SPIELAUTOMATEN",\n
  body :contains "WETTQUOTE",\n
  body :contains "BONUSGEWINN",\n
  body :contains "GROSS GEWINNEN",\n
  body :contains "JETZT WETTEN",\n
  body :contains "SPORTWETTEN",\n
  body :contains "AM TISCH MITMACHEN",\n
  body :contains "GEWINNE GARANTIERT",\n
  body :contains "HIGH ROLLER",\n
  body :contains "GELDPREISE GEWINNEN",\n
  body :contains "GELD VERDOPPELN",\n
  body :contains "SOFORTIGER GEWINN",\n
  body :contains "GLÜCK HABEN",\n
  body :contains "DREHEN ZUM GEWINNEN",\n
  body :contains "BARPREISE",\n
  body :contains "BINGO",\n
  body :contains "LOTTERIE-JACKPOT",\n
  body :contains "RISIKOLOS",\n
  body :contains "SPIELAUTOMATEN-BONUS",\n
  body :contains "KEINE EINZAHLUNG ERFORDERLICH",\n
  body :contains "WETTTIPPS",\n
  body :contains "CASINO-BONUS",\n
  body :contains "ONLINE-GLÜCKSSPIEL",\n
  body :contains "GEWINNSTRATEGIE",\n
  body :contains "SCHNELLE AUSZAHLUNG",\n
  body :contains "WÜRFELN",\n
  body :contains "TÄGLICHER JACKPOT",\n
  body :contains "SPIELE WIE IN VEGAS",\n
  body :contains "CASINO-SPIELE",\n
  body :contains "HOHE AUSZAHLUNG",\n
  body :contains "DREH-BONUS",\n
  body :contains "GLÜCKLICHER GEWINNER",\n
  body :contains "SPIELEN UM ZU GEWINNEN",\n
  body :contains "EXKLUSIVER BONUS",\n

) {\n

  redirect :copy "some.email.to.receive.the.spam@sghm.de";\n

  discard;\n

  stop;\n

}\n

`
      }

      if (this.NSFW) {
        this.generatedTextTwo += `
if anyof (\n

  body :contains "EXPLICIT CONTENT",\n
  body :contains "NSFW",\n
  body :contains "MATURE AUDIENCE",\n
  body :contains "SEXUAL CONTENT",\n
  body :contains "CLICK HERE FOR PRIVATE",\n
  body :contains "ADULT CHAT",\n
  body :contains "EXPLICIT PHOTOS",\n
  body :contains "INTIMATE IMAGES",\n
  body :contains "PRIVATE SHOW",\n
  body :contains "LIVE CAM",\n
  body :contains "WATCH NOW 18+",\n
  body :contains "NAKED PICTURES",\n
  body :contains "LIVE NUDE",\n
  body :contains "HOT SINGLES",\n
  body :contains "ADULT ENTERTAINMENT",\n
  body :contains "18+ CONTENT",\n
  body :contains "XXX VIDEOS",\n
  body :contains "EXPLICIT MATERIAL",\n
  body :contains "MATURE CONTENT",\n
  body :contains "SEXUAL SERVICES",\n
  body :contains "INTIMATE CHAT",\n
  body :contains "VIEW UNCENSORED",\n
  body :contains "SUGAR DADDY OFFER",\n
  body :contains "WEB CAM GIRLS",\n
  body :contains "LIVE ADULT STREAM",\n
  body :contains "CLICK FOR MORE INTIMATE",\n
  body :contains "XXX STREAMING",\n
  body :contains "HOT LOCAL SINGLES",\n
  body :contains "FREE ADULT ACCESS",\n
  body :contains "UNFILTERED CONTENT",\n
  body :contains "SEX CHAT",\n
  body :contains "WATCH HOT VIDEOS",\n
  body :contains "MEET FOR FUN",\n
  body :contains "EXPLICIT PICS",\n
  body :contains "XXX PHOTOS",\n
  body :contains "SEXUAL FANTASIES",\n
  body :contains "EROTIC VIDEO",\n
  body :contains "XXX SITES",\n
  body :contains "XXX OFFERS",\n
  body :contains "R-RATED CONTENT",\n

  body :contains "EXPIZITER INHALT",\n
  body :contains "NSFW",\n
  body :contains "NUR FÜR ERWACHSENE",\n
  body :contains "SEXUELLER INHALT",\n
  body :contains "HIER KLICKEN FÜR PRIVAT",\n
  body :contains "ERWACHSENEN-CHAT",\n
  body :contains "EXPIZITE FOTOS",\n
  body :contains "INTIME BILDER",\n
  body :contains "PRIVATE SHOW",\n
  body :contains "LIVE-CAM",\n
  body :contains "JETZT ANSEHEN 18+",\n
  body :contains "NACKTBILDER",\n
  body :contains "LIVE NACKT",\n
  body :contains "HEIßE SINGLES",\n
  body :contains "ERWACHSENENUNTERHALTUNG",\n
  body :contains "18+ INHALT",\n
  body :contains "XXX VIDEOS",\n
  body :contains "EXPIZITES MATERIAL",\n
  body :contains "INHALT FÜR ERWACHSENE",\n
  body :contains "SEXUELLE DIENSTLEISTUNGEN",\n
  body :contains "INTIMER CHAT",\n
  body :contains "UNGESCHNITTEN ANSEHEN",\n
  body :contains "ZUCKERPAPA-ANGEBOT",\n
  body :contains "WEB-CAM-MÄDCHEN",\n
  body :contains "LIVE ERWACHSENEN-STREAM",\n
  body :contains "KLICKEN SIE FÜR INTIME DETAILS",\n
  body :contains "XXX STREAMING",\n
  body :contains "HEIßE LOKALE SINGLES",\n
  body :contains "KOSTENLOSER ERWACHSENENZUGANG",\n
  body :contains "UNZENSIERTER INHALT",\n
  body :contains "SEX-CHAT",\n
  body :contains "HEIßE VIDEOS ANSEHEN",\n
  body :contains "TREFFEN ZUM SPAß",\n
  body :contains "EXPIZITE BILDER",\n
  body :contains "XXX FOTOS",\n
  body :contains "SEXUELLE FANTASIEN",\n
  body :contains "EROTISCHES VIDEO",\n
  body :contains "XXX-SEITEN",\n
  body :contains "XXX-ANGEBOTE",\n
  body :contains "R-RATED INHALT",\n

) {\n

  redirect :copy "some.email.to.receive.the.spam@sghm.de";\n

  discard;\n

  stop;\n

}\n

`
      }

      const blob = new Blob([this.generatedTextTwo], { type: 'text/plain' });

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'sieve_skript.txt';
      a.click();

      window.URL.revokeObjectURL(url);
    } else {
      this.generatedText = null;
      alert("Bitte gebe gültige Email Adressen ein, um den Download zu starten.");
    }
  }

}
