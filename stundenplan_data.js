// stundenplan_data.js
// Zentrales Datenmodell für die BAD-Stundenplan-App
const weeks6Monatskurs = [

  // WOCHE 1 – 13.10. bis 17.10.2025
  {
    id: 1,
    label: "Woche 1 · 13.10.2025 – 17.10.2025",
    days: [
      {
        weekday: "Montag",
        module: "Recht der öffentlichen Sicherheit und Ordnung",
        units: [
          { ue: 1, time: "09:00–09:45", topic: "Begrüßung und Einweisung in den Ablauf der Maßnahme" },
          { ue: 2, time: "09:45–10:30", topic: "Erläuterung der Maßnahme, der Hausordnung und allgemeine Regeln" },
          { ue: 3, time: "10:45–11:30", topic: "Einweisung in das Lernportal, Jobbörse sowie Lehrmaterial" },
          { ue: 4, time: "11:30–12:15", topic: "Einweisung in das Lernportal, Jobbörse sowie Lehrmaterial" },
          { ue: 5, time: "13:00–13:45", topic: "Polizei & Ordnungsbehörden – Zuständigkeiten und Aufgaben" },
          { ue: 6, time: "13:45–14:30", topic: "Gewaltenteilung – Exekutive & Judikative Legislative" },
          { ue: 7, time: "14:45–15:30", topic: "Aufbau der BRD – Bund Länder Kommunen" },
          { ue: 8, time: "15:30–16:15", topic: "Staatsgewalten & deren Kompetenzen" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Recht der öffentlichen Sicherheit und Ordnung",
        units: [
          { ue: 9, time: "09:00–09:45", topic: "Grundgesetz – Bedeutung & Entstehung" },
          { ue: 10, time: "09:45–10:30", topic: "Grundgesetz – Artikelübersicht" },
          { ue: 11, time: "10:45–11:30", topic: "Ewigkeitsklausel" },
          { ue: 12, time: "11:30–12:15", topic: "Drittwirkung des Grundgesetzes" },
          { ue: 13, time: "13:00–13:45", topic: "Gefahrenabwehr – Grundlagen" },
          { ue: 14, time: "13:45–14:30", topic: "Gefahrenabwehr – präventive Maßnahmen" },
          { ue: 15, time: "14:45–15:30", topic: "Zuständigkeiten bei Störungen" },
          { ue: 16, time: "15:30–16:15", topic: "Zuständigkeiten bei Störungen" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Recht der öffentlichen Sicherheit und Ordnung",
        units: [
          { ue: 17, time: "09:00–09:45", topic: "Zusammenarbeit Sicherheitsdienst – Polizei" },
          { ue: 18, time: "09:45–10:30", topic: "Zusammenarbeit Sicherheitsdienst – Kommunen" },
          { ue: 19, time: "10:45–11:30", topic: "Dokumentation & Berichterstattung" },
          { ue: 20, time: "11:30–12:15", topic: "Rechtliche Eingriffs- & Handlungsmöglichkeiten" },
          { ue: 21, time: "13:00–13:45", topic: "Praxisfall: Gefahrenabwehr im Objekt" },
          { ue: 22, time: "13:45–14:30", topic: "Praxisfall: Gefahrenabwehr im öffentlichen Raum" },
          { ue: 23, time: "14:45–15:30", topic: "Zusammenfassung & Übung" },
          { ue: 24, time: "15:30–16:15", topic: "Fragen & Wiederholung" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Recht der öffentlichen Sicherheit und Ordnung",
        units: [
          { ue: 25, time: "09:00–09:45", topic: "Rechtliche Eingriffsoptionen bei Sicherheitsstörungen" },
          { ue: 26, time: "09:45–10:30", topic: "Zusammenarbeit mit Polizei bei besonderen Lagen" },
          { ue: 27, time: "10:45–11:30", topic: "Prävention & Gefahrenmanagement" },
          { ue: 28, time: "11:30–12:15", topic: "Dokumentationspflichten & Berichterstattung" },
          { ue: 29, time: "13:00–13:45", topic: "Praxis: Gefahrenanalyse in Objekten" },
          { ue: 30, time: "13:45–14:30", topic: "Praxis: Gefahrenanalyse in öffentlichen Bereichen" },
          { ue: 31, time: "14:45–15:30", topic: "Übungen zu rechtlichen Handlungsmöglichkeiten" },
          { ue: 32, time: "15:30–16:15", topic: "Wiederholung & Vertiefung" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Recht der öffentlichen Sicherheit und Ordnung",
        units: [
          { ue: 33, time: "09:00–09:45", topic: "Zusammenfassung Lernfeld 1 – Teil 1" },
          { ue: 34, time: "09:45–10:30", topic: "Zusammenfassung Lernfeld 1 – Teil 2" },
          { ue: 35, time: "10:45–11:30", topic: "Praxisfall: Zusammenarbeit Sicherheitsdienst – Polizei" },
          { ue: 36, time: "11:30–12:15", topic: "Praxisfall: Zusammenarbeit Sicherheitsdienst – Kommunen" },
          { ue: 37, time: "13:00–13:45", topic: "Gefahrenabwehr – Übungen" },
          { ue: 38, time: "13:45–14:30", topic: "Dokumentation & Berichterstattung" },
          { ue: 39, time: "14:45–15:30", topic: "Rechtliche Eingriffs- & Handlungsmöglichkeiten – Wiederholung" },
          { ue: 40, time: "15:30–16:15", topic: "Fragen & Abschluss Lernfeld 1" }
        ]
      }
    ]
  },

  // WOCHE 2 – 20.10. bis 24.10.2025
  {
    id: 2,
    label: "Woche 2 · 20.10.2025 – 24.10.2025",
    days: [
      {
        weekday: "Montag",
        module: "Recht der öffentlichen Sicherheit und Ordnung",
        units: [
          { ue: 41, time: "09:00–09:45", topic: "Gefahrenabwehr – Fortgeschrittene Methoden" },
          { ue: 42, time: "09:45–10:30", topic: "Rechtliche Handlungsmöglichkeiten bei Störungen" },
          { ue: 43, time: "10:45–11:30", topic: "Zusammenarbeit Sicherheitsdienst – Polizei, komplexe Fälle" },
          { ue: 44, time: "11:30–12:15", topic: "Zusammenarbeit Sicherheitsdienst – Kommunen, komplexe Fälle" },
          { ue: 45, time: "13:00–13:45", topic: "Dokumentation & Berichterstattung – Vertiefung" },
          { ue: 46, time: "13:45–14:30", topic: "Praxis: Gefahrenanalyse im Objekt" },
          { ue: 47, time: "14:45–15:30", topic: "Praxis: Gefahrenanalyse im öffentlichen Raum" },
          { ue: 48, time: "15:30–16:15", topic: "Übungen: rechtliche Eingriffsmöglichkeiten" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Recht der öffentlichen Sicherheit und Ordnung",
        units: [
          { ue: 49, time: "09:00–09:45", topic: "Praxisfall: Gefahrenabwehr & Prävention" },
          { ue: 50, time: "09:45–10:30", topic: "Übungen: Zusammenwirken Polizei – Sicherheitsdienst" },
          { ue: 51, time: "10:45–11:30", topic: "Dokumentation & Berichterstattung – praktische Übung" },
          { ue: 52, time: "11:30–12:15", topic: "Rechtliche Handlungsmöglichkeiten – Fallbearbeitung" },
          { ue: 53, time: "13:00–13:45", topic: "Vertiefung: Gefahrenabwehr bei Objekten" },
          { ue: 54, time: "13:45–14:30", topic: "Vertiefung: Gefahrenabwehr im öffentlichen Raum" },
          { ue: 55, time: "14:45–15:30", topic: "Zusammenfassung Lernfeld 1 – Übungen" },
          { ue: 56, time: "15:30–16:15", topic: "Wiederholung & Fragen" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Recht der öffentlichen Sicherheit und Ordnung",
        units: [
          { ue: 57, time: "09:00–09:45", topic: "Praxisfall: besondere Gefahrenlagen" },
          { ue: 58, time: "09:45–10:30", topic: "Dokumentation & Berichterstattung – Übung" },
          { ue: 59, time: "10:45–11:30", topic: "Rechtliche Eingriffsoptionen – Übungen" },
          { ue: 60, time: "11:30–12:15", topic: "Gefahrenabwehr – Abschlussfälle" },
          { ue: 61, time: "13:00–13:45", topic: "Übungen: Zusammenarbeit Sicherheitsdienst – Polizei" },
          { ue: 62, time: "13:45–14:30", topic: "Übungen: Zusammenarbeit Sicherheitsdienst – Kommunen" },
          { ue: 63, time: "14:45–15:30", topic: "Zusammenfassung Lernfeld 1 – letzte Vertiefung" },
          { ue: 64, time: "15:30–16:15", topic: "Fragen & Abschluss Lernfeld 1" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Gewerberecht",
        units: [
          { ue: 65, time: "09:00–09:45", topic: "§34a GewO – Befugnisse & Grundlagen" },
          { ue: 66, time: "09:45–10:30", topic: "Pflichten & Voraussetzungen für Bewachungsunternehmen" },
          { ue: 67, time: "10:45–11:30", topic: "Bewacherregister – Erläuterung" },
          { ue: 68, time: "11:30–12:15", topic: "Sachkundeprüfung & U40-Erläuterung" },
          { ue: 69, time: "13:00–13:45", topic: "Gewerbeordnung – Anzeige- & Auskunftspflichten" },
          { ue: 70, time: "13:45–14:30", topic: "BewachV §§14, 15, 17–21 – Grundlagen" },
          { ue: 71, time: "14:45–15:30", topic: "Aufsichtspflichten & Kontrollmechanismen" },
          { ue: 72, time: "15:30–16:15", topic: "Anmeldung & Dokumentationspflichten" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Gewerberecht",
        units: [
          { ue: 73, time: "09:00–09:45", topic: "Praxisfall: Gewerbe & Bewachung" },
          { ue: 74, time: "09:45–10:30", topic: "Fragen & Wiederholung" },
          { ue: 75, time: "10:45–11:30", topic: "Aufsichtspflichten & Verantwortlichkeiten" },
          { ue: 76, time: "11:30–12:15", topic: "Dokumentationspflichten & Formulare" },
          { ue: 77, time: "13:00–13:45", topic: "Praxis: Anmeldung von Tätigkeiten" },
          { ue: 78, time: "13:45–14:30", topic: "Kontrollmechanismen – Übungen" },
          { ue: 79, time: "14:45–15:30", topic: "Zusammenfassung Lernfeld 2 – Teil 1" },
          { ue: 80, time: "15:30–16:15", topic: "Fragen & Vertiefung" }
        ]
      }
    ]
  }
,  // WOCHE 3 – 27.10. bis 31.10.2025
  {
    id: 3,
    label: "Woche 3 · 27.10.2025 – 31.10.2025",
    days: [
      {
        weekday: "Montag",
        module: "Gewerberecht",
        units: [
          { ue: 81, time: "09:00–09:45", topic: "Aufsichtspflichten – Vertiefung" },
          { ue: 82, time: "09:45–10:30", topic: "Dokumentationspflichten – praktische Übung" },
          { ue: 83, time: "10:45–11:30", topic: "Anmeldung von Tätigkeiten – Praxisfall" },
          { ue: 84, time: "11:30–12:15", topic: "Kontrollmechanismen – Übung" },
          { ue: 85, time: "13:00–13:45", topic: "Zusammenfassung Lernfeld 2 – Teil 1" },
          { ue: 86, time: "13:45–14:30", topic: "Fragen & Wiederholung" },
          { ue: 87, time: "14:45–15:30", topic: "Abschluss Lernfeld 2 – Übung" },
          { ue: 88, time: "15:30–16:15", topic: "Abschluss Lernfeld 2 – Diskussion" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Gewerberecht",
        units: [
          { ue: 89, time: "09:00–09:45", topic: "Aufsichtspflichten – Praxisbeispiele" },
          { ue: 90, time: "09:45–10:30", topic: "Dokumentationspflichten – Vertiefung" },
          { ue: 91, time: "10:45–11:30", topic: "Anmeldung von Tätigkeiten – Fallbearbeitung" },
          { ue: 92, time: "11:30–12:15", topic: "Kontrollmechanismen – Übung" },
          { ue: 93, time: "13:00–13:45", topic: "Praxisfall – Gewerbe & Bewachung" },
          { ue: 94, time: "13:45–14:30", topic: "Fragen & Wiederholung" },
          { ue: 95, time: "14:45–15:30", topic: "Übungen – Aufsicht & Dokumentation" },
          { ue: 96, time: "15:30–16:15", topic: "Abschluss Tagesübungen" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Gewerberecht",
        units: [
          { ue: 97, time: "09:00–09:45", topic: "Anmeldung & Kontrollmechanismen – Praxis" },
          { ue: 98, time: "09:45–10:30", topic: "Praxis: Anträge & Dokumentation" },
          { ue: 99, time: "10:45–11:30", topic: "Aufsichtspflichten – Fallbearbeitung" },
          { ue: 100, time: "11:30–12:15", topic: "Kontrollmechanismen – Vertiefung" },
          { ue: 101, time: "13:00–13:45", topic: "Zusammenfassung Gewerberecht – Teil 2" },
          { ue: 102, time: "13:45–14:30", topic: "Fragen & Vertiefung" },
          { ue: 103, time: "14:45–15:30", topic: "Praxisübungen – Anmeldung & Kontrolle" },
          { ue: 104, time: "15:30–16:15", topic: "Abschluss Lernfeld 2 – Reflexion" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Gewerberecht",
        units: [
          { ue: 105, time: "09:00–09:45", topic: "Wiederholung: §34a GewO & BewachV" },
          { ue: 106, time: "09:45–10:30", topic: "Aufsichtspflichten – Zusammenfassung" },
          { ue: 107, time: "10:45–11:30", topic: "Dokumentation & Praxisfall" },
          { ue: 108, time: "11:30–12:15", topic: "Anmeldung von Tätigkeiten – Übung" },
          { ue: 109, time: "13:00–13:45", topic: "Kontrollmechanismen – Fallbearbeitung" },
          { ue: 110, time: "13:45–14:30", topic: "Abschluss Lernfeld 2 – Zusammenfassung & Fragen" },
          { ue: 111, time: "14:45–15:30", topic: "Praxisübungen – Anmeldung & Kontrolle" },
          { ue: 112, time: "15:30–16:15", topic: "Abschluss Lernfeld 2 – Reflexion" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Bürgerliches Recht",
        units: [
          { ue: 113, time: "09:00–09:45", topic: "Fundrecht – Einführung" },
          { ue: 114, time: "09:45–10:30", topic: "Privatrecht – Grundlagen" },
          { ue: 115, time: "10:45–11:30", topic: "Rechtsfähigkeit – Personen & Organisationen" },
          { ue: 116, time: "11:30–12:15", topic: "Schikaneverbot – Erklärung & Beispiele" },
          { ue: 117, time: "13:00–13:45", topic: "Gefährdungshaftung – verschuldensunabhängig" },
          { ue: 118, time: "13:45–14:30", topic: "Gefährdungshaftung – verschuldensabhängig" },
          { ue: 119, time: "14:45–15:30", topic: "Besitz, Eigentum, Besitzdiener – Grundlagen" },
          { ue: 120, time: "15:30–16:15", topic: "Sachen und Tiere – rechtliche Behandlung" }
        ]
      }
    ]
  },

  // WOCHE 4 – 03.11. bis 07.11.2025
  {
    id: 4,
    label: "Woche 4 · 03.11.2025 – 07.11.2025",
    days: [
      {
        weekday: "Montag",
        module: "Bürgerliches Recht",
        units: [
          { ue: 121, time: "09:00–09:45", topic: "Besitz und übertragene Rechte" },
          { ue: 122, time: "09:45–10:30", topic: "Vertragsrecht – Abschluss & Voraussetzungen" },
          { ue: 123, time: "10:45–11:30", topic: "Vertragsrecht – Rechte & Pflichten" },
          { ue: 124, time: "11:30–12:15", topic: "Vertragsverletzungen & Konsequenzen" },
          { ue: 125, time: "13:00–13:45", topic: "Schadensersatz – Grundlagen" },
          { ue: 126, time: "13:45–14:30", topic: "Haftung – Grenzen privater Eingriffe" },
          { ue: 127, time: "14:45–15:30", topic: "Unerlaubte Handlung – Einführung" },
          { ue: 128, time: "15:30–16:15", topic: "Abgrenzung rechtmäßiges Handeln vs. strafbare Handlung" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Bürgerliches Recht",
        units: [
          { ue: 129, time: "09:00–09:45", topic: "Praxisbeispiele Sicherheitsdienst – Hausrecht" },
          { ue: 130, time: "09:45–10:30", topic: "Praxisbeispiele Sicherheitsdienst – Zutrittskontrollen" },
          { ue: 131, time: "10:45–11:30", topic: "Jedermannsrechte BGB §227 Notwehr" },
          { ue: 132, time: "11:30–12:15", topic: "Jedermannsrechte BGB §228 Verteidigungsnotstand" },
          { ue: 133, time: "13:00–13:45", topic: "Jedermannsrechte BGB §229 Selbsthilfe" },
          { ue: 134, time: "13:45–14:30", topic: "Jedermannsrechte BGB §859 Selbsthilfe des Besitzers" },
          { ue: 135, time: "14:45–15:30", topic: "Jedermannsrechte BGB §860 Selbsthilfe des Besitzdieners" },
          { ue: 136, time: "15:30–16:15", topic: "Jedermannsrechte BGB §904 Angriffsnotstand" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Bürgerliches Recht",
        units: [
          { ue: 137, time: "09:00–09:45", topic: "Praxisbeispiele Sicherheitsdienst – Notfälle" },
          { ue: 138, time: "09:45–10:30", topic: "Praxisübungen – Eingriff in Notfällen" },
          { ue: 139, time: "10:45–11:30", topic: "Wiederholung §§227–904 – Übungen" },
          { ue: 140, time: "11:30–12:15", topic: "Fallbeispiele – Hausrecht & Notwehr" },
          { ue: 141, time: "13:00–13:45", topic: "Wiederholung Vertragsrecht – Übungen" },
          { ue: 142, time: "13:45–14:30", topic: "Wiederholung Schadensersatz – Übungen" },
          { ue: 143, time: "14:45–15:30", topic: "Abgrenzung privatrechtlicher vs. strafbarer Eingriffe" },
          { ue: 144, time: "15:30–16:15", topic: "Fragen & Vertiefung" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Bürgerliches Recht",
        units: [
          { ue: 145, time: "09:00–09:45", topic: "Zusammenfassung Lernfeld 3 – Teil 1" },
          { ue: 146, time: "09:45–10:30", topic: "Zusammenfassung Lernfeld 3 – Teil 2" },
          { ue: 147, time: "10:45–11:30", topic: "Praxisfall – Hausrecht & Zutrittskontrollen" },
          { ue: 148, time: "11:30–12:15", topic: "Praxisfall – Notwehr & Eingriffsrechte" },
          { ue: 149, time: "13:00–13:45", topic: "Übungsfälle – Vertragsverletzungen & Schadensersatz" },
          { ue: 150, time: "13:45–14:30", topic: "Übungsfälle – Gefährdungshaftung" },
          { ue: 151, time: "14:45–15:30", topic: "Wiederholung & Fragen" },
          { ue: 152, time: "15:30–16:15", topic: "Abschluss Lernfeld 3" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Bürgerliches Recht",
        units: [
          { ue: 153, time: "09:00–09:45", topic: "Vertiefung Schuldrecht – Leistungsstörungen" },
          { ue: 154, time: "09:45–10:30", topic: "Rücktritt & Schadensersatz" },
          { ue: 155, time: "10:45–11:30", topic: "Fallbeispiele – Vertragsrecht" },
          { ue: 156, time: "11:30–12:15", topic: "Übungen & Fragen" },
          { ue: 157, time: "13:00–13:45", topic: "Sachenrecht – Eigentum & Besitz" },
          { ue: 158, time: "13:45–14:30", topic: "Besitzschutz – Vertiefung" },
          { ue: 159, time: "14:45–15:30", topic: "Übung – Herausgabeansprüche" },
          { ue: 160, time: "15:30–16:15", topic: "Fragen & Zusammenfassung" }
        ]
      }
    ]
  } 
  , // WOCHE 5 – 10.11. bis 14.11.2025
  {
    id: 5,
    label: "Woche 5 · 10.11.2025 – 14.11.2025",
    days: [
      {
        weekday: "Montag",
        module: "Bürgerliches Recht",
        units: [
          { ue: 161, time: "09:00–09:45", topic: "Abgrenzung rechtmäßiges Handeln vs. strafbare Handlung – Grundlagen" },
          { ue: 162, time: "09:45–10:30", topic: "Abgrenzung rechtmäßiges Handeln vs. strafbare Handlung – Fallbeispiele" },
          { ue: 163, time: "10:45–11:30", topic: "Praxisbeispiele Sicherheitsdienst – Hausrecht" },
          { ue: 164, time: "11:30–12:15", topic: "Praxisbeispiele Sicherheitsdienst – Zutrittskontrollen" },
          { ue: 165, time: "13:00–13:45", topic: "Jedermannsrechte BGB §227 – Notwehr" },
          { ue: 166, time: "13:45–14:30", topic: "Jedermannsrechte BGB §228 – Verteidigungsnotstand" },
          { ue: 167, time: "14:45–15:30", topic: "Jedermannsrechte BGB §229 – Selbsthilfe" },
          { ue: 168, time: "15:30–16:15", topic: "Jedermannsrechte BGB §859 – Selbsthilfe des Besitzers" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Bürgerliches Recht",
        units: [
          { ue: 169, time: "09:00–09:45", topic: "Jedermannsrechte BGB §860 – Selbsthilfe des Besitzdieners" },
          { ue: 170, time: "09:45–10:30", topic: "Jedermannsrechte BGB §904 – Angriffsnotstand" },
          { ue: 171, time: "10:45–11:30", topic: "Praxisbeispiele Sicherheitsdienst – Hausrecht" },
          { ue: 172, time: "11:30–12:15", topic: "Praxisbeispiele Sicherheitsdienst – Zutrittskontrollen" },
          { ue: 173, time: "13:00–13:45", topic: "Praxisbeispiele Sicherheitsdienst – Eingreifen in Notfällen" },
          { ue: 174, time: "13:45–14:30", topic: "Fallbeispiele – Abgrenzung rechtmäßiges Handeln vs. strafbare Handlung" },
          { ue: 175, time: "14:45–15:30", topic: "Übung – Jedermannsrechte anwenden" },
          { ue: 176, time: "15:30–16:15", topic: "Fragen & Zusammenfassung" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Bürgerliches Recht",
        units: [
          { ue: 177, time: "09:00–09:45", topic: "Praxisfall – Hausrecht & Zutrittskontrollen" },
          { ue: 178, time: "09:45–10:30", topic: "Praxisfall – Eingreifen in Notfällen" },
          { ue: 179, time: "10:45–11:30", topic: "Übungen – Notwehr & Verteidigungsnotstand" },
          { ue: 180, time: "11:30–12:15", topic: "Übungen – Selbsthilfe & Besitzdienerrechte" },
          { ue: 181, time: "13:00–13:45", topic: "Fallbearbeitung – Angriffsnotstand" },
          { ue: 182, time: "13:45–14:30", topic: "Vertiefung – Abgrenzung rechtmäßiges Handeln vs. strafbare Handlung" },
          { ue: 183, time: "14:45–15:30", topic: "Praxis – Sicherheitsdienst & Eingriffsrechte" },
          { ue: 184, time: "15:30–16:15", topic: "Fragen & Wiederholung" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Bürgerliches Recht",
        units: [
          { ue: 185, time: "09:00–09:45", topic: "Zusammenfassung Jedermannsrechte – Teil 1" },
          { ue: 186, time: "09:45–10:30", topic: "Zusammenfassung Jedermannsrechte – Teil 2" },
          { ue: 187, time: "10:45–11:30", topic: "Praxisfall – Hausrecht & Zutrittskontrollen" },
          { ue: 188, time: "11:30–12:15", topic: "Praxisfall – Eingreifen in Notfällen" },
          { ue: 189, time: "13:00–13:45", topic: "Übungsfälle – Notwehr & Selbsthilfe" },
          { ue: 190, time: "13:45–14:30", topic: "Übungsfälle – Abgrenzung rechtmäßiges Handeln vs. strafbare Handlung" },
          { ue: 191, time: "14:45–15:30", topic: "Zusammenfassung & Vertiefung" },
          { ue: 192, time: "15:30–16:15", topic: "Abschluss Lernfeld Bürgerliches Recht" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 193, time: "09:00–09:45", topic: "Erklärung materielles Strafrecht – Tatbestand, Schuld, Vorsatz, Fahrlässigkeit" },
          { ue: 194, time: "09:45–10:30", topic: "Versuch und Rechtsfolgen" },
          { ue: 195, time: "10:45–11:30", topic: "Aufbau einer Straftat – Tatbestandsmerkmale" },
          { ue: 196, time: "11:30–12:15", topic: "Rechtswidrigkeit und Schuld" },
          { ue: 197, time: "13:00–13:45", topic: "Verbrechen und Vergehen – Unterschiede & Strafrahmen" },
          { ue: 198, time: "13:45–14:30", topic: "Verbrechen und Vergehen – Praxisbeispiele" },
          { ue: 199, time: "14:45–15:30", topic: "Garantenstellung – Pflichten zur Abwendung von Schäden" },
          { ue: 200, time: "15:30–16:15", topic: "Zusammenhang echtes und unechtes Unterlassungsdelikt" }
        ]
      }
    ]
  },

  // WOCHE 6 – 17.11. bis 21.11.2025
  {
    id: 6,
    label: "Woche 6 · 17.11.2025 – 21.11.2025",
    days: [
      {
        weekday: "Montag",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 201, time: "09:00–09:45", topic: "Strafverfahrensrecht – Ablauf eines Strafverfahrens" },
          { ue: 202, time: "09:45–10:30", topic: "Rechte und Pflichten von Beschuldigten" },
          { ue: 203, time: "10:45–11:30", topic: "Rechte und Pflichten von Zeugen" },
          { ue: 204, time: "11:30–12:15", topic: "Aufbau des StGB – Allgemeiner Teil" },
          { ue: 205, time: "13:00–13:45", topic: "Aufbau des StGB – Besonderer Teil" },
          { ue: 206, time: "13:45–14:30", topic: "Geltungsbereich des Allgemeinen Teils und Nebengesetze (StPO, BtMG, JuSchG)" },
          { ue: 207, time: "14:45–15:30", topic: "Besonderer Teil StGB – Einführung" },
          { ue: 208, time: "15:30–16:15", topic: "Besonderer Teil StGB – Diebstahl §242" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 209, time: "09:00–09:45", topic: "Besonders schwerer Diebstahl §243" },
          { ue: 210, time: "09:45–10:30", topic: "Diebstahl mit Waffen / Bandendiebstahl §244" },
          { ue: 211, time: "10:45–11:30", topic: "Unterschlagung §246" },
          { ue: 212, time: "11:30–12:15", topic: "Leichtfertige Unterschlagung geringwertiger Sachen §248a" },
          { ue: 213, time: "13:00–13:45", topic: "Raub §249, Räuberischer Diebstahl §252" },
          { ue: 214, time: "13:45–14:30", topic: "Erpressung §253" },
          { ue: 215, time: "14:45–15:30", topic: "Hehlerei §259" },
          { ue: 216, time: "15:30–16:15", topic: "Betrug §263" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 217, time: "09:00–09:45", topic: "Computerbetrug §263a" },
          { ue: 218, time: "09:45–10:30", topic: "Untreue §266" },
          { ue: 219, time: "10:45–11:30", topic: "Veruntreuung §265a" },
          { ue: 220, time: "11:30–12:15", topic: "Körperverletzung §223" },
          { ue: 221, time: "13:00–13:45", topic: "Sachbeschädigung §303" },
          { ue: 222, time: "13:45–14:30", topic: "Brandstiftung §306" },
          { ue: 223, time: "14:45–15:30", topic: "Schadensersatz §281" },
          { ue: 224, time: "15:30–16:15", topic: "Unterlassungsdelikte §323c" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 225, time: "09:00–09:45", topic: "Notwehr §32" },
          { ue: 226, time: "09:45–10:30", topic: "Rechtfertigender Notstand §34" },
          { ue: 227, time: "10:45–11:30", topic: "Aggressiver Notstand §35" },
          { ue: 228, time: "11:30–12:15", topic: "Verhältnismäßigkeit & Erforderlichkeit bei der Anwendung der Jedermannsrechte" },
          { ue: 229, time: "13:00–13:45", topic: "StPO – Rechte & Pflichten der Sicherheitskraft" },
          { ue: 230, time: "13:45–14:30", topic: "Festnahme durch Privatperson §127 StPO" },
          { ue: 231, time: "14:45–15:30", topic: "Beweissicherung" },
          { ue: 232, time: "15:30–16:15", topic: "Anzeigeerstattung" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 233, time: "09:00–09:45", topic: "Praxis: Fallanalysen" },
          { ue: 234, time: "09:45–10:30", topic: "Praxis: Simulationen" },
          { ue: 235, time: "10:45–11:30", topic: "Praxis: schriftliche Übungen" },
          { ue: 236, time: "11:30–12:15", topic: "Fragen & Vertiefung" },
          { ue: 237, time: "13:00–13:45", topic: "Wiederholung – Diebstahl & Raub" },
          { ue: 238, time: "13:45–14:30", topic: "Wiederholung – Betrug & Untreue" },
          { ue: 239, time: "14:45–15:30", topic: "Wiederholung – Körperverletzung & Sachbeschädigung" },
          { ue: 240, time: "15:30–16:15", topic: "Abschluss Woche 8 – Fragen & Zusammenfassung" }
        ]
      }
    ]
  } 
  , // WOCHE 7 – 24.11. bis 28.11.2025
  {
    id: 7,
    label: "Woche 7 · 24.11.2025 – 28.11.2025",
    days: [
      {
        weekday: "Montag",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 241, time: "09:00–09:45", topic: "Praxis: Notwehrfälle §32" },
          { ue: 242, time: "09:45–10:30", topic: "Praxis: Rechtfertigender Notstand §34" },
          { ue: 243, time: "10:45–11:30", topic: "Praxis: Aggressiver Notstand §35" },
          { ue: 244, time: "11:30–12:15", topic: "Verhältnismäßigkeit & Erforderlichkeit bei Jedermannsrechten – Fallbeispiele" },
          { ue: 245, time: "13:00–13:45", topic: "StPO – Rechte & Pflichten der Sicherheitskraft – Vertiefung" },
          { ue: 246, time: "13:45–14:30", topic: "Festnahme durch Privatperson §127 StPO – Praxisfälle" },
          { ue: 247, time: "14:45–15:30", topic: "Beweissicherung – Übungen" },
          { ue: 248, time: "15:30–16:15", topic: "Anzeigeerstattung – Fallbearbeitung" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 249, time: "09:00–09:45", topic: "Diebstahl & Raub – Wiederholung & Vertiefung" },
          { ue: 250, time: "09:45–10:30", topic: "Betrug & Untreue – Wiederholung & Übungen" },
          { ue: 251, time: "10:45–11:30", topic: "Körperverletzung §223 – Vertiefung" },
          { ue: 252, time: "11:30–12:15", topic: "Sachbeschädigung §303 – Vertiefung" },
          { ue: 253, time: "13:00–13:45", topic: "Brandstiftung §306 – Übungen" },
          { ue: 254, time: "13:45–14:30", topic: "Schadensersatz §281 – Fallbearbeitung" },
          { ue: 255, time: "14:45–15:30", topic: "Unterlassungsdelikte §323c – Fallbeispiele" },
          { ue: 256, time: "15:30–16:15", topic: "Zusammenfassung & Fragen" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 257, time: "09:00–09:45", topic: "Aufbau einer Straftat: Tatbestandsmerkmale" },
          { ue: 258, time: "09:45–10:30", topic: "Aufbau einer Straftat: Rechtswidrigkeit & Schuld" },
          { ue: 259, time: "10:45–11:30", topic: "Tatbestand & Vorsatz – Übungen" },
          { ue: 260, time: "11:30–12:15", topic: "Fahrlässigkeit & Versuch – Fallbearbeitung" },
          { ue: 261, time: "13:00–13:45", topic: "Verbrechen & Vergehen – Unterschiede & Beispiele" },
          { ue: 262, time: "13:45–14:30", topic: "Strafrahmen & Rechtsfolgen" },
          { ue: 263, time: "14:45–15:30", topic: "Garantenstellung – Pflichten zur Abwendung von Schäden" },
          { ue: 264, time: "15:30–16:15", topic: "Echtes vs. unechtes Unterlassungsdelikt – Praxis" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 265, time: "09:00–09:45", topic: "Praxis: Fallanalysen zu Delikten" },
          { ue: 266, time: "09:45–10:30", topic: "Simulationen – Strafrechtliche Entscheidungen" },
          { ue: 267, time: "10:45–11:30", topic: "Praxis: schriftliche Übungen" },
          { ue: 268, time: "11:30–12:15", topic: "Fragen & Vertiefung" },
          { ue: 269, time: "13:00–13:45", topic: "Wiederholung – Diebstahl & Raub" },
          { ue: 270, time: "13:45–14:30", topic: "Wiederholung – Betrug & Untreue" },
          { ue: 271, time: "14:45–15:30", topic: "Wiederholung – Körperverletzung & Sachbeschädigung" },
          { ue: 272, time: "15:30–16:15", topic: "Wiederholung – Brandstiftung & Schadensersatz" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 273, time: "09:00–09:45", topic: "Notwehr & Rechtfertigender Notstand – Praxisfälle" },
          { ue: 274, time: "09:45–10:30", topic: "Aggressiver Notstand – Übungen" },
          { ue: 275, time: "10:45–11:30", topic: "Jedermannsrechte – Übungsfälle" },
          { ue: 276, time: "11:30–12:15", topic: "Festnahme durch Privatperson §127 StPO – Praxis" },
          { ue: 277, time: "13:00–13:45", topic: "Beweissicherung – Übung" },
          { ue: 278, time: "13:45–14:30", topic: "Anzeigeerstattung – Praxis" },
          { ue: 279, time: "14:45–15:30", topic: "Zusammenfassung Woche 9 – Fallbearbeitung" },
          { ue: 280, time: "15:30–16:15", topic: "Fragen & Abschluss Woche 9" }
        ]
      }
    ]
  },

  // WOCHE 8 – 01.12. bis 05.12.2025
  {
    id: 8,
    label: "Woche 8 · 01.12.2025 – 05.12.2025",
    days: [
      {
        weekday: "Montag",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 281, time: "09:00–09:45", topic: "Aufbau StGB – Allgemeiner Teil & Besonderer Teil" },
          { ue: 282, time: "09:45–10:30", topic: "Geltungsbereich StGB, StPO, BtMG, JuSchG" },
          { ue: 283, time: "10:45–11:30", topic: "Besonderer Teil StGB – Einführung" },
          { ue: 284, time: "11:30–12:15", topic: "Diebstahl §242 – Fallbearbeitung" },
          { ue: 285, time: "13:00–13:45", topic: "Besonders schwerer Diebstahl §243 – Praxis" },
          { ue: 286, time: "13:45–14:30", topic: "Diebstahl mit Waffen / Bandendiebstahl §244 – Übungen" },
          { ue: 287, time: "14:45–15:30", topic: "Unterschlagung §246 – Vertiefung" },
          { ue: 288, time: "15:30–16:15", topic: "Leichtfertige Unterschlagung geringwertiger Sachen §248a – Praxis" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 289, time: "09:00–09:45", topic: "Raub §249, Räuberischer Diebstahl §252 – Vertiefung" },
          { ue: 290, time: "09:45–10:30", topic: "Erpressung §253 – Fallbearbeitung" },
          { ue: 291, time: "10:45–11:30", topic: "Hehlerei §259 – Praxisfälle" },
          { ue: 292, time: "11:30–12:15", topic: "Betrug §263 – Übungen" },
          { ue: 293, time: "13:00–13:45", topic: "Computerbetrug §263a – Vertiefung" },
          { ue: 294, time: "13:45–14:30", topic: "Untreue §266 – Praxis" },
          { ue: 295, time: "14:45–15:30", topic: "Veruntreuung §265a – Fallbearbeitung" },
          { ue: 296, time: "15:30–16:15", topic: "Körperverletzung §223 – Vertiefung" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 297, time: "09:00–09:45", topic: "Sachbeschädigung §303 – Praxisfälle" },
          { ue: 298, time: "09:45–10:30", topic: "Brandstiftung §306 – Übungen" },
          { ue: 299, time: "10:45–11:30", topic: "Schadensersatz §281 – Fallbearbeitung" },
          { ue: 300, time: "11:30–12:15", topic: "Unterlassungsdelikte §323c – Praxis" },
          { ue: 301, time: "13:00–13:45", topic: "Notwehr §32 – Fallbeispiele" },
          { ue: 302, time: "13:45–14:30", topic: "Rechtfertigender Notstand §34 – Übungen" },
          { ue: 303, time: "14:45–15:30", topic: "Aggressiver Notstand §35 – Fallbearbeitung" },
          { ue: 304, time: "15:30–16:15", topic: "Verhältnismäßigkeit & Erforderlichkeit bei Jedermannsrechten – Praxis" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 305, time: "09:00–09:45", topic: "StPO – Rechte & Pflichten der Sicherheitskraft – Vertiefung" },
          { ue: 306, time: "09:45–10:30", topic: "Festnahme durch Privatperson §127 StPO – Praxisfälle" },
          { ue: 307, time: "10:45–11:30", topic: "Beweissicherung – Übungen" },
          { ue: 308, time: "11:30–12:15", topic: "Anzeigeerstattung – Praxis" },
          { ue: 309, time: "13:00–13:45", topic: "Praxis: Fallanalysen – Strafrecht" },
          { ue: 310, time: "13:45–14:30", topic: "Simulationen – Strafrechtliche Entscheidungen" },
          { ue: 311, time: "14:45–15:30", topic: "Schriftliche Übungen – Strafrecht" },
          { ue: 312, time: "15:30–16:15", topic: "Fragen & Vertiefung" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 313, time: "09:00–09:45", topic: "Wiederholung – Diebstahl, Raub, Betrug" },
          { ue: 314, time: "09:45–10:30", topic: "Wiederholung – Untreue, Veruntreuung" },
          { ue: 315, time: "10:45–11:30", topic: "Wiederholung – Körperverletzung, Sachbeschädigung" },
          { ue: 316, time: "11:30–12:15", topic: "Wiederholung – Brandstiftung & Schadensersatz" },
          { ue: 317, time: "13:00–13:45", topic: "Wiederholung – Notwehr & Notstand" },
          { ue: 318, time: "13:45–14:30", topic: "Jedermannsrechte – Übungen" },
          { ue: 319, time: "14:45–15:30", topic: "StPO – Rechte & Pflichten – Wiederholung" },
          { ue: 320, time: "15:30–16:15", topic: "Fragen & Abschluss Woche 10" }
        ]
      }
    ]
  } 
  , // WOCHE 9 – 08.12. bis 12.12.2025
  {
    id: 9,
    label: "Woche 9 · 08.12.2025 – 12.12.2025",
    days: [
      {
        weekday: "Montag",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 321, time: "09:00–09:45", topic: "Aufbau StGB – Wiederholung & Vertiefung" },
          { ue: 322, time: "09:45–10:30", topic: "Besonderer Teil StGB – Diebstahl, Raub" },
          { ue: 323, time: "10:45–11:30", topic: "Erpressung, Hehlerei – Fallbeispiele" },
          { ue: 324, time: "11:30–12:15", topic: "Betrug & Computerbetrug – Übung" },
          { ue: 325, time: "13:00–13:45", topic: "Untreue & Veruntreuung – Vertiefung" },
          { ue: 326, time: "13:45–14:30", topic: "Körperverletzung §223 – Praxis" },
          { ue: 327, time: "14:45–15:30", topic: "Sachbeschädigung §303 – Fallbearbeitung" },
          { ue: 328, time: "15:30–16:15", topic: "Brandstiftung §306 – Übung" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 329, time: "09:00–09:45", topic: "Schadensersatz §281 – Vertiefung" },
          { ue: 330, time: "09:45–10:30", topic: "Unterlassungsdelikte §323c – Praxis" },
          { ue: 331, time: "10:45–11:30", topic: "Notwehr §32 – Fallbearbeitung" },
          { ue: 332, time: "11:30–12:15", topic: "Rechtfertigender Notstand §34 – Übungen" },
          { ue: 333, time: "13:00–13:45", topic: "Aggressiver Notstand §35 – Praxis" },
          { ue: 334, time: "13:45–14:30", topic: "Verhältnismäßigkeit & Erforderlichkeit bei Jedermannsrechten" },
          { ue: 335, time: "14:45–15:30", topic: "StPO – Rechte & Pflichten der Sicherheitskraft" },
          { ue: 336, time: "15:30–16:15", topic: "Festnahme durch Privatperson §127 StPO – Übungen" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 337, time: "09:00–09:45", topic: "Beweissicherung – Praxis" },
          { ue: 338, time: "09:45–10:30", topic: "Anzeigeerstattung – Fallbeispiele" },
          { ue: 339, time: "10:45–11:30", topic: "Fallanalysen – Strafrechtliche Prüfung" },
          { ue: 340, time: "11:30–12:15", topic: "Simulationen – Strafrechtliche Entscheidungen" },
          { ue: 341, time: "13:00–13:45", topic: "Schriftliche Übungen – Strafrecht" },
          { ue: 342, time: "13:45–14:30", topic: "Fragen & Vertiefung" },
          { ue: 343, time: "14:45–15:30", topic: "Wiederholung – Diebstahl, Raub, Betrug" },
          { ue: 344, time: "15:30–16:15", topic: "Wiederholung – Untreue, Veruntreuung, Körperverletzung" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Straf- und Strafverfahrensrecht",
        units: [
          { ue: 345, time: "09:00–09:45", topic: "Wiederholung – Sachbeschädigung, Brandstiftung" },
          { ue: 346, time: "09:45–10:30", topic: "Wiederholung – Schadensersatz & Unterlassung" },
          { ue: 347, time: "10:45–11:30", topic: "Wiederholung – Notwehr & Notstand" },
          { ue: 348, time: "11:30–12:15", topic: "Verhältnismäßigkeit & Erforderlichkeit – Übungen" },
          { ue: 349, time: "13:00–13:45", topic: "StPO – Rechte & Pflichten – Vertiefung" },
          { ue: 350, time: "13:45–14:30", topic: "Festnahme §127 StPO – Fallanalysen" },
          { ue: 351, time: "14:45–15:30", topic: "Praxis – Strafrechtliche Entscheidungen" },
          { ue: 352, time: "15:30–16:15", topic: "Abschluss Lernfeld Straf- und Strafverfahrensrecht" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Jedermannsrechte-Ausnahmerechte",
        units: [
          { ue: 353, time: "09:00–09:45", topic: "Einführung – Erklärung, Definitionen und Anwendungsbereich der Jedermannsrechte-Ausnahmerechte" },
          { ue: 354, time: "09:45–10:30", topic: "Festnahmerechte §127 (1) StPO & §229 BGB – Grundlagen" },
          { ue: 355, time: "10:45–11:30", topic: "Jedermannsrechte StGB §§32, 33, 34, 35 – Übersicht" },
          { ue: 356, time: "11:30–12:15", topic: "Jedermannsrechte BGB §§227, 228, 859, 860, 904 – Übersicht" },
          { ue: 357, time: "13:00–13:45", topic: "Jedermannsrechte OWiG §15 – Grundlagen" },
          { ue: 358, time: "13:45–14:30", topic: "Abgrenzung Rechtfertigungsgründe vs. Entschuldigungsgründe" },
          { ue: 359, time: "14:45–15:30", topic: "Fallbeispiele – Anwendung der Jedermannsrechte" },
          { ue: 360, time: "15:30–16:15", topic: "Unterscheidung Festnahmerechte §127 (1) StPO vs. §229 BGB" }
        ]
      }
    ]
  },

  // WOCHE 10 – 15.12. bis 19.12.2025
  {
    id: 10,
    label: "Woche 10 · 15.12.2025 – 19.12.2025",
    days: [
      {
        weekday: "Montag",
        module: "Jedermannsrechte-Ausnahmerechte",
        units: [
          { ue: 361, time: "09:00–09:45", topic: "Defensiver vs. aggressiver Notstand – Abgrenzung" },
          { ue: 362, time: "09:45–10:30", topic: "Rechtfertigender vs. entschuldigender Notstand – Abgrenzung" },
          { ue: 363, time: "10:45–11:30", topic: "Notwehr BGB vs. StGB – Abgrenzung" },
          { ue: 364, time: "11:30–12:15", topic: "Putativnotwehr – Grundlagen" },
          { ue: 365, time: "13:00–13:45", topic: "Notwehrexzess – Grundlagen" },
          { ue: 366, time: "13:45–14:30", topic: "Praxisbeispiele Sicherheitsdienst – Hausrecht & Zutrittskontrollen" },
          { ue: 367, time: "14:45–15:30", topic: "Praxisbeispiele – Eingreifen in Notfällen" },
          { ue: 368, time: "15:30–16:15", topic: "Theorieübungen – Eingriffsrechte, Notwehrsituationen" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Jedermannsrechte-Ausnahmerechte",
        units: [
          { ue: 369, time: "09:00–09:45", topic: "Theorieübungen – Selbsthilfe" },
          { ue: 370, time: "09:45–10:30", topic: "Fallbeispiele – Anwendung Jedermannsrechte" },
          { ue: 371, time: "10:45–11:30", topic: "Abgrenzung Festnahmerechte und Notstand – Übung" },
          { ue: 372, time: "11:30–12:15", topic: "Abgrenzung Rechtfertigungs- und Entschuldigungsgründe – Übung" },
          { ue: 373, time: "13:00–13:45", topic: "Notwehr & Notstand – Praxisfälle" },
          { ue: 374, time: "13:45–14:30", topic: "Putativnotwehr & Notwehrexzess – Praxis" },
          { ue: 375, time: "14:45–15:30", topic: "Übungen – Eingriffsrechte, Selbsthilfe" },
          { ue: 376, time: "15:30–16:15", topic: "Zusammenfassung & Fragen" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Jedermannsrechte-Ausnahmerechte",
        units: [
          { ue: 377, time: "09:00–09:45", topic: "Vertiefung – Festnahmerechte §127 (1) StPO & §229 BGB" },
          { ue: 378, time: "09:45–10:30", topic: "Vertiefung – Jedermannsrechte BGB & StGB" },
          { ue: 379, time: "10:45–11:30", topic: "Übungen – Anwendung Notwehr & Notstand" },
          { ue: 380, time: "11:30–12:15", topic: "Praxisbeispiele Sicherheitsdienst – Fallanalysen" },
          { ue: 381, time: "13:00–13:45", topic: "Simulationen – Eingriffsrechte & Selbsthilfe" },
          { ue: 382, time: "13:45–14:30", topic: "Schriftliche Übungen – Jedermannsrechte" },
          { ue: 383, time: "14:45–15:30", topic: "Fragen & Vertiefung" },
          { ue: 384, time: "15:30–16:15", topic: "Zusammenfassung – praktische Übungen" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Jedermannsrechte-Ausnahmerechte",
        units: [
          { ue: 385, time: "09:00–09:45", topic: "Wiederholung – Notwehr, Notstand, Selbsthilfe" },
          { ue: 386, time: "09:45–10:30", topic: "Übungsfälle – Jedermannsrechte in der Praxis" },
          { ue: 387, time: "10:45–11:30", topic: "Fallanalysen – Sicherheitsdienstübungen" },
          { ue: 388, time: "11:30–12:15", topic: "Simulationen – Notwehrsituationen" },
          { ue: 389, time: "13:00–13:45", topic: "Theorie & Praxis – Zusammenfassung" },
          { ue: 390, time: "13:45–14:30", topic: "Übungen – Eingriffsrechte" },
          { ue: 391, time: "14:45–15:30", topic: "Fragen & Fallbearbeitung" },
          { ue: 392, time: "15:30–16:15", topic: "Abschluss Lernfeld – Jedermannsrechte-Ausnahmerechte" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Datenschutz",
        units: [
          { ue: 393, time: "09:00–09:45", topic: "Einführung Datenschutz – DSGVO & BDSG, Rechte Betroffener" },
          { ue: 394, time: "09:45–10:30", topic: "Datenschutz im Sicherheitsdienst – Videoüberwachung, Zutrittskontrollen" },
          { ue: 395, time: "10:45–11:30", topic: "Datenerfassung und -speicherung – Grundlagen" },
          { ue: 396, time: "11:30–12:15", topic: "Schweigepflicht, Datenweitergabe, Dokumentationspflichten" },
          { ue: 397, time: "13:00–13:45", topic: "Datenschutzbeauftragter – Aufgaben, Voraussetzungen, Anwendungsbereich" },
          { ue: 398, time: "13:45–14:30", topic: "Technische Maßnahmen – Zugriffskontrollen, Verschlüsselung" },
          { ue: 399, time: "14:45–15:30", topic: "Technische Maßnahmen – Protokollierung, Datensicherung, Updates" },
          { ue: 400, time: "15:30–16:15", topic: "Organisatorische Maßnahmen – Mitarbeiterschulung" }
        ]
      }
    ]
  },

  // WOCHE 11 – 05.01. bis 09.01.2026
  {
    id: 11,
    label: "Woche 11 · 05.01.2026 – 09.01.2026",
    days: [
      {
        weekday: "Montag",
        module: "Datenschutz",
        units: [
          { ue: 401, time: "09:00–09:45", topic: "Schweigepflicht und Datenweitergabe – rechtliche Grundlagen" },
          { ue: 402, time: "09:45–10:30", topic: "Dokumentationspflichten – Bedeutung & Umsetzung" },
          { ue: 403, time: "10:45–11:30", topic: "Datenschutz in der Praxis – Fallbeispiele aus dem Sicherheitsdienst" },
          { ue: 404, time: "11:30–12:15", topic: "Haftungsfragen bei Datenschutzverletzungen" },
          { ue: 405, time: "13:00–13:45", topic: "Zusammenhang zum StGB – §§201–205 StGB" },
          { ue: 406, time: "13:45–14:30", topic: "Zusammenhang zum StGB – §§202a, 303a/b StGB" },
          { ue: 407, time: "14:45–15:30", topic: "Verletzung von Persönlichkeitsrechten – Praxisanalyse" },
          { ue: 408, time: "15:30–16:15", topic: "Diskussion & Wiederholung" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Datenschutz",
        units: [
          { ue: 409, time: "09:00–09:45", topic: "Datenschutzbeauftragter – Aufgaben und Verantwortung" },
          { ue: 410, time: "09:45–10:30", topic: "Datenschutzbeauftragter – Voraussetzungen & Pflichten" },
          { ue: 411, time: "10:45–11:30", topic: "Meldepflichten & Datenschutzkontrolle – Aufsicht durch Behörden" },
          { ue: 412, time: "11:30–12:15", topic: "Zusammenarbeit mit dem Datenschutzbeauftragten im Sicherheitsdienst" },
          { ue: 413, time: "13:00–13:45", topic: "Technische Maßnahmen – Zugriffskontrollen & Verschlüsselung" },
          { ue: 414, time: "13:45–14:30", topic: "Technische Maßnahmen – Datensicherung & Updates" },
          { ue: 415, time: "14:45–15:30", topic: "Organisatorische Maßnahmen – Schulung & Verantwortlichkeiten" },
          { ue: 416, time: "15:30–16:15", topic: "Praxisübungen – Datenschutz im Dienstalltag" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Datenschutz",
        units: [
          { ue: 417, time: "09:00–09:45", topic: "Protokollierung & Nachvollziehbarkeit – technische Umsetzung" },
          { ue: 418, time: "09:45–10:30", topic: "Zugriffsbeschränkung & Passwortschutz" },
          { ue: 419, time: "10:45–11:30", topic: "Umgang mit personenbezogenen Daten – Praxisbeispiele" },
          { ue: 420, time: "11:30–12:15", topic: "Speicherung, Archivierung & Löschung von Daten" },
          { ue: 421, time: "13:00–13:45", topic: "Datensicherung & Backup-Systeme" },
          { ue: 422, time: "13:45–14:30", topic: "Risikoanalyse im Datenschutz" },
          { ue: 423, time: "14:45–15:30", topic: "Datenschutz im mobilen Einsatz (Funk, Smartphones)" },
          { ue: 424, time: "15:30–16:15", topic: "Datenschutzverletzungen – Reaktionsmaßnahmen" }
        ]
      },
      {
        // Donnerstag Vormittag – Datenschutz
        weekday: "Donnerstag",
        module: "Datenschutz",
        units: [
          { ue: 425, time: "09:00–09:45", topic: "Maßnahmen zur Einhaltung des Datenschutzes – Überblick" },
          { ue: 426, time: "09:45–10:30", topic: "Datenschutzmanagement im Sicherheitsdienst" },
          { ue: 427, time: "10:45–11:30", topic: "Praxisfallanalyse – Datenschutzverstöße & Prävention" },
          { ue: 428, time: "11:30–12:15", topic: "Abschluss Thema Datenschutz – Wiederholung & Reflexion" }
        ]
      },
      {
        // Donnerstag Nachmittag – Umgang mit Menschen
        weekday: "Donnerstag",
        module: "Umgang mit Menschen",
        units: [
          { ue: 429, time: "12:15–13:00", topic: "Einführung – Bedürfnisse, Motive und Motivation" },
          { ue: 430, time: "13:00–13:45", topic: "Motivation im Berufsalltag – Sicherheitsdienst und Eigenverantwortung" },
          { ue: 431, time: "14:00–14:45", topic: "Selbstwertgefühl und seine Bedeutung im Umgang mit Menschen" },
          { ue: 432, time: "14:45–15:30", topic: "Wahrnehmung und Selbstwahrnehmung – Grundlagen" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Umgang mit Menschen",
        units: [
          { ue: 433, time: "09:00–09:45", topic: "Wahrnehmung und Fremdwahrnehmung – Einflussfaktoren" },
          { ue: 434, time: "09:45–10:30", topic: "Diversität & Vorurteile – Erkennen und Reflektieren" },
          { ue: 435, time: "10:45–11:30", topic: "Menschenkenntnis – Verhalten & Körpersprache" },
          { ue: 436, time: "11:30–12:15", topic: "Der erste Eindruck – Wirkung und Bewertung" },
          { ue: 437, time: "13:00–13:45", topic: "Verhalten des Menschen & Steuerung – psychologische Grundlagen" },
          { ue: 438, time: "13:45–14:30", topic: "Interkulturelle Kompetenz – Grundlagen und Sensibilisierung" },
          { ue: 439, time: "14:45–15:30", topic: "Interkulturelle Kommunikation – praktische Übungen" },
          { ue: 440, time: "15:30–16:15", topic: "Zusammenfassung & Reflexion – Bedeutung für den Sicherheitsdienst" }
        ]
      }
    ]
  } 
  , // WOCHE 12 – 12.01. bis 16.01.2026
  {
    id: 12,
    label: "Woche 12 · 12.01.2026 – 16.01.2026",
    days: [
      {
        weekday: "Montag",
        module: "Umgang mit Menschen",
        units: [
          { ue: 441, time: "09:00–09:45", topic: "Kommunikation – Grundlagen & Bedeutung" },
          { ue: 442, time: "09:45–10:30", topic: "Kommunikationsarten – verbal, nonverbal, paraverbal, extraverbal" },
          { ue: 443, time: "10:45–11:30", topic: "Kommunikationsmodelle – Das Eisbergmodell" },
          { ue: 444, time: "11:30–12:15", topic: "Sachebene und Beziehungsebene nach Schulz von Thun" },
          { ue: 445, time: "13:00–13:45", topic: "Gesprächstechniken – Grundlagen aktiver Gesprächsführung" },
          { ue: 446, time: "13:45–14:30", topic: "Gesprächstechniken – „Schallplatte mit Sprung“, „Vernebelung“" },
          { ue: 447, time: "14:45–15:30", topic: "Kommunikationsabstände – Proxemik im Sicherheitsdienst" },
          { ue: 448, time: "15:30–16:15", topic: "Praxisübung – Kommunikationsverhalten im Dienst" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Umgang mit Menschen",
        units: [
          { ue: 449, time: "09:00–09:45", topic: "Bedürfnisse & Motivation – Wiederholung und Vertiefung" },
          { ue: 450, time: "09:45–10:30", topic: "Maslows Bedürfnispyramide – Anwendung im Berufsalltag" },
          { ue: 451, time: "10:45–11:30", topic: "Stress und Belastung – psychologische Grundlagen" },
          { ue: 452, time: "11:30–12:15", topic: "Stress und seine Auswirkungen auf Verhalten & Gesundheit" },
          { ue: 453, time: "13:00–13:45", topic: "Frustration, Aggression, Resignation – Zusammenhänge" },
          { ue: 454, time: "13:45–14:30", topic: "Ursachen und Folgen von Aggression – praktische Beispiele" },
          { ue: 455, time: "14:45–15:30", topic: "Deeskalation – Grundlagen & Techniken" },
          { ue: 456, time: "15:30–16:15", topic: "Deeskalation – Übung und Fallanalyse" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Umgang mit Menschen",
        units: [
          { ue: 457, time: "09:00–09:45", topic: "Konflikte – Definition und Entstehung" },
          { ue: 458, time: "09:45–10:30", topic: "Konfliktarten – Sach-, Beziehungs- und Wertekonflikte" },
          { ue: 459, time: "10:45–11:30", topic: "Konfliktbewältigung – Modelle & Strategien" },
          { ue: 460, time: "11:30–12:15", topic: "Kommunikation in Konfliktsituationen" },
          { ue: 461, time: "13:00–13:45", topic: "Aktives Zuhören – Theorie und Anwendung" },
          { ue: 462, time: "13:45–14:30", topic: "Sender- und Empfängermodell – praktische Übungen" },
          { ue: 463, time: "14:45–15:30", topic: "Empathie und emotionale Intelligenz im Sicherheitsdienst" },
          { ue: 464, time: "15:30–16:15", topic: "Übungssequenz – Rollenspiele zur Konfliktlösung" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Umgang mit Menschen",
        units: [
          { ue: 465, time: "09:00–09:45", topic: "Gruppen, Menschenmengen, Menschenmassen – Grundlagen" },
          { ue: 466, time: "09:45–10:30", topic: "Gruppendynamik – Rollen und Verhalten in Gruppen" },
          { ue: 467, time: "10:45–11:30", topic: "Massenpsychologische Phänomene – Ursachen und Beispiele" },
          { ue: 468, time: "11:30–12:15", topic: "Panikarten und Reaktionen in Gefahrensituationen" },
          { ue: 469, time: "13:00–13:45", topic: "Verhalten von Sicherheitskräften bei Massenpanik" },
          { ue: 470, time: "13:45–14:30", topic: "Kommunikation in Stresssituationen – Übungen" },
          { ue: 471, time: "14:45–15:30", topic: "Verhalten bei Großveranstaltungen – Besonderheiten" },
          { ue: 472, time: "15:30–16:15", topic: "Besonderheiten in Flüchtlingsunterkünften – Kommunikation & Verhalten" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Umgang mit Menschen",
        units: [
          { ue: 473, time: "09:00–09:45", topic: "Besondere Personengruppen – Jugendliche, Senioren, Betrunkene" },
          { ue: 474, time: "09:45–10:30", topic: "Umgang mit Drogenabhängigen – Kommunikation & Verhalten" },
          { ue: 475, time: "10:45–11:30", topic: "Verhaltensmuster erkennen & richtig reagieren" },
          { ue: 476, time: "11:30–12:15", topic: "Deeskalationsstrategien in besonderen Lagen" },
          { ue: 477, time: "13:00–13:45", topic: "Teamarbeit & kollegiales Verhalten im Sicherheitsdienst" },
          { ue: 478, time: "13:45–14:30", topic: "Selbstreflexion & persönliche Wirkung" },
          { ue: 479, time: "14:45–15:30", topic: "Zusammenfassung – Umgang mit Menschen im Berufsalltag" },
          { ue: 480, time: "15:30–16:15", topic: "Abschluss Reflexion & Ausblick – Bedeutung sozialer Kompetenz" }
        ]
      }
    ]
  },

  // WOCHE 13 – 19.01. bis 23.01.2026
  // Achtung: UE-Nummern hier von mir fortlaufend auf 481–520 angepasst.
  {
    id: 13,
    label: "Woche 13 · 19.01.2026 – 23.01.2026",
    days: [
      {
        weekday: "Montag",
        module: "Umgang mit Menschen",
        units: [
          { ue: 481, time: "09:00–09:45", topic: "Selbstwertgefühl – Einfluss auf Kommunikation und Verhalten" },
          { ue: 482, time: "09:45–10:30", topic: "Selbst- und Fremdwahrnehmung – Reflexionsübungen" },
          { ue: 483, time: "10:45–11:30", topic: "Wahrnehmung und Beurteilungsfehler – Vorurteile und Stereotype" },
          { ue: 484, time: "11:30–12:15", topic: "Diversität und interkulturelle Kompetenz – Grundlagen" },
          { ue: 485, time: "13:00–13:45", topic: "Interkulturelle Kommunikation – Herausforderungen im Dienst" },
          { ue: 486, time: "13:45–14:30", topic: "Kulturelle Missverständnisse – Beispiele aus der Praxis" },
          { ue: 487, time: "14:45–15:30", topic: "Empathie – Bedeutung und Anwendung im Umgang mit Menschen" },
          { ue: 488, time: "15:30–16:15", topic: "Übungssequenzen – Empathisches Verhalten trainieren" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Umgang mit Menschen",
        units: [
          { ue: 489, time: "09:00–09:45", topic: "Menschliches Verhalten – psychologische Grundlagen" },
          { ue: 490, time: "09:45–10:30", topic: "Steuerung und Beeinflussung von Verhalten – Motivation und Macht" },
          { ue: 491, time: "10:45–11:30", topic: "Konfliktursachen – Kommunikationsfehler und Missverständnisse" },
          { ue: 492, time: "11:30–12:15", topic: "Konfliktlösung – praktische Strategien und Schritte" },
          { ue: 493, time: "13:00–13:45", topic: "Deeskalationsverfahren – praxisorientierte Methoden" },
          { ue: 494, time: "13:45–14:30", topic: "Gesprächsführung in Stresssituationen" },
          { ue: 495, time: "14:45–15:30", topic: "Stressbewältigung im Sicherheitsdienst" },
          { ue: 496, time: "15:30–16:15", topic: "Übung: Kommunikation unter Druck und Belastung" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Umgang mit Menschen",
        units: [
          { ue: 497, time: "09:00–09:45", topic: "Teamarbeit – Rollen und Verantwortung im Team" },
          { ue: 498, time: "09:45–10:30", topic: "Kooperation und Zusammenhalt – Bedeutung im Dienst" },
          { ue: 499, time: "10:45–11:30", topic: "Kommunikation im Team – Feedback und Konfliktprävention" },
          { ue: 500, time: "11:30–12:15", topic: "Umgang mit Stress im Team – Strategien zur Resilienz" },
          { ue: 501, time: "13:00–13:45", topic: "Verhalten gegenüber Vorgesetzten und Kunden" },
          { ue: 502, time: "13:45–14:30", topic: "Beschwerdegespräche – Richtiges Auftreten und Formulierung" },
          { ue: 503, time: "14:45–15:30", topic: "Praxisübung – Kundengespräche und Kritikannahme" },
          { ue: 504, time: "15:30–16:15", topic: "Selbstreflexion – eigene Kommunikationsmuster erkennen" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Umgang mit Menschen",
        units: [
          { ue: 505, time: "09:00–09:45", topic: "Verhalten bei emotionalen Reaktionen anderer" },
          { ue: 506, time: "09:45–10:30", topic: "Umgang mit aggressiven Personen – Sicherheitsstrategien" },
          { ue: 507, time: "10:45–11:30", topic: "Prävention von Aggression und Eskalation" },
          { ue: 508, time: "11:30–12:15", topic: "Fallbeispiele – Aggressive Kunden und Konfliktgespräche" },
          { ue: 509, time: "13:00–13:45", topic: "Kommunikation mit hilfsbedürftigen Personen" },
          { ue: 510, time: "13:45–14:30", topic: "Verhalten gegenüber psychisch auffälligen Personen" },
          { ue: 511, time: "14:45–15:30", topic: "Menschliche Reaktionen in Ausnahmesituationen" },
          { ue: 512, time: "15:30–16:15", topic: "Übung – Sicheres und professionelles Auftreten" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Umgang mit Menschen",
        units: [
          { ue: 513, time: "09:00–09:45", topic: "Verhalten bei Großveranstaltungen – Kommunikation und Beobachtung" },
          { ue: 514, time: "09:45–10:30", topic: "Panikverhalten – Erkennen und Einschätzen" },
          { ue: 515, time: "10:45–11:30", topic: "Massenpsychologische Phänomene – Einfluss auf Sicherheitskräfte" },
          { ue: 516, time: "11:30–12:15", topic: "Massenreaktionen – Fallstudien und Analysen" },
          { ue: 517, time: "13:00–13:45", topic: "Besondere Personengruppen – Betrunkene & Drogenabhängige" },
          { ue: 518, time: "13:45–14:30", topic: "Besondere Personengruppen – Jugendliche & Senioren" },
          { ue: 519, time: "14:45–15:30", topic: "Flüchtlingsunterkünfte – Kommunikation und Verhalten" },
          { ue: 520, time: "15:30–16:15", topic: "Reflexion und Zusammenfassung – Abschluss Umgang mit Menschen" }
        ]
      }
    ]
  },

  // WOCHE 14 – 26.01. bis 30.01.2026
  {
    id: 14,
    label: "Woche 14 · 26.01.2026 – 30.01.2026",
    days: [
      {
        // Montag Vormittag – Umgang mit Menschen (Abschluss)
        weekday: "Montag",
        module: "Umgang mit Menschen",
        units: [
          { ue: 521, time: "09:00–09:45", topic: "Wiederholung – Kommunikationsmodelle und Konfliktbewältigung" },
          { ue: 522, time: "09:45–10:30", topic: "Reflexion – Verhalten in Stresssituationen" },
          { ue: 523, time: "10:45–11:30", topic: "Abschlussübung – Fallbeispiele Kommunikation und Deeskalation" },
          { ue: 524, time: "11:30–12:15", topic: "Abschluss Lernfeld 7 – Umgang mit Menschen" }
        ]
      },
      {
        // Montag Nachmittag – Umgang mit Verteidigungswaffen
        weekday: "Montag",
        module: "Umgang mit Verteidigungswaffen",
        units: [
          { ue: 525, time: "13:00–13:45", topic: "Einführung in das Waffenrecht – Grundlagen und Zielsetzung" },
          { ue: 526, time: "13:45–14:30", topic: "Waffengesetz (WaffG) – Aufbau und Struktur" },
          { ue: 527, time: "14:45–15:30", topic: "WaffG §§1–3 – Begriffsbestimmungen und Anwendungsbereich" },
          { ue: 528, time: "15:30–16:15", topic: "WaffG §§4–10 – Erwerb, Besitz, Erlaubnisse" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Umgang mit Verteidigungswaffen",
        units: [
          { ue: 529, time: "09:00–09:45", topic: "WaffG §§14–17 – Besitzberechtigung und Aufbewahrung" },
          { ue: 530, time: "09:45–10:30", topic: "WaffG §§21–23 – Erwerbsvoraussetzungen und Genehmigungen" },
          { ue: 531, time: "10:45–11:30", topic: "WaffG §§25–27 – Führen und Transport im öffentlichen Raum" },
          { ue: 532, time: "11:30–12:15", topic: "Bewachungsverordnung (BewachV) – rechtliche Grundlagen" },
          { ue: 533, time: "13:00–13:45", topic: "BewachV §14 – Waffen im Bewachungsgewerbe" },
          { ue: 534, time: "13:45–14:30", topic: "Straf- und zivilrechtliche Folgen bei unsachgemäßem Gebrauch" },
          { ue: 535, time: "14:45–15:30", topic: "Grenzen der Notwehr und des Notstands (§§32, 34 StGB)" },
          { ue: 536, time: "15:30–16:15", topic: "Praxisbeispiele Notwehr – rechtliche Bewertung" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Umgang mit Verteidigungswaffen",
        units: [
          { ue: 537, time: "09:00–09:45", topic: "Haftungsfragen – straf- und zivilrechtliche Konsequenzen" },
          { ue: 538, time: "09:45–10:30", topic: "Abgrenzung Notwehr – Notstand – Selbsthilfe" },
          { ue: 539, time: "10:45–11:30", topic: "WaffG §42 – Verbotene Waffen und gefährliche Gegenstände" },
          { ue: 540, time: "11:30–12:15", topic: "Arten von Verteidigungswaffen – Überblick" },
          { ue: 541, time: "13:00–13:45", topic: "Pfefferspray, Elektroschocker, Tonfa – rechtliche Einordnung" },
          { ue: 542, time: "13:45–14:30", topic: "Umgang und Lagerung von Verteidigungswaffen" },
          { ue: 543, time: "14:45–15:30", topic: "Sicheres Tragen und Verhalten im Dienst" },
          { ue: 544, time: "15:30–16:15", topic: "Dokumentations- und Meldepflichten" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Umgang mit Verteidigungswaffen",
        units: [
          { ue: 545, time: "09:00–09:45", topic: "Abwehrmittel und deren Wirkung – rechtliche Grenzen" },
          { ue: 546, time: "09:45–10:30", topic: "Schulung und Unterweisungspflicht des Bewachungspersonals" },
          { ue: 547, time: "10:45–11:30", topic: "Praktische Übungen – Einschätzen von Gefährdungssituationen" },
          { ue: 548, time: "11:30–12:15", topic: "Deeskalation statt Waffenanwendung – Strategien" },
          { ue: 549, time: "13:00–13:45", topic: "Prüfungsvorbereitung – Waffengesetz §§1–27" },
          { ue: 550, time: "13:45–14:30", topic: "Wiederholung BewachV und StGB-Bezüge" },
          { ue: 551, time: "14:45–15:30", topic: "Fallbearbeitung – Notwehr und Notstand in der Praxis" },
          { ue: 552, time: "15:30–16:15", topic: "Gruppenarbeit – Analyse realer Fälle" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Umgang mit Verteidigungswaffen",
        units: [
          { ue: 553, time: "09:00–09:45", topic: "Umgang mit verbotenen Waffen – Erkennen und Abgrenzen" },
          { ue: 554, time: "09:45–10:30", topic: "Simulation – Entscheidungen unter Stress" },
          { ue: 555, time: "10:45–11:30", topic: "Rechtsfolgen bei Fehlverhalten – Strafrechtliche Einordnung" },
          { ue: 556, time: "11:30–12:15", topic: "Zivilrechtliche Haftung bei Waffengebrauch" },
          { ue: 557, time: "13:00–13:45", topic: "Wiederholung: Notwehr, Notstand, Haftung" },
          { ue: 558, time: "13:45–14:30", topic: "Praxisbeispiele und Gruppenarbeit" },
          { ue: 559, time: "14:45–15:30", topic: "Theoretische Übungen – Fallanalyse" },
          { ue: 560, time: "15:30–16:15", topic: "Schriftliche Übungen" }
        ]
      }
    ]
  } 
  , // WOCHE 15 – 02.02. bis 06.02.2026
  {
    id: 15,
    label: "Woche 15 · 02.02.2026 – 06.02.2026",
    days: [
      {
        weekday: "Montag",
        module: "Umgang mit Verteidigungswaffen",
        units: [
          { ue: 561, time: "09:00–09:45", topic: "Einsatz von Verteidigungswaffen im Sicherheitsdienst – Praxisbeispiele" },
          { ue: 562, time: "09:45–10:30", topic: "Abgrenzung erlaubter vs. verbotener Waffen" },
          { ue: 563, time: "10:45–11:30", topic: "Umgang mit Elektroschockern, Pfefferspray – rechtliche Einordnung" },
          { ue: 564, time: "11:30–12:15", topic: "Praktische Übungen – Handhabung und Sicherheit" },
          { ue: 565, time: "13:00–13:45", topic: "Verhalten in kritischen Situationen – Entscheidungsfindung" },
          { ue: 566, time: "13:45–14:30", topic: "Fallbeispiele – Notwehr und Notstand bei Verteidigungswaffen" },
          { ue: 567, time: "14:45–15:30", topic: "Dokumentation und Meldung von Vorfällen" },
          { ue: 568, time: "15:30–16:15", topic: "Haftung – straf- und zivilrechtliche Folgen bei Fehlgebrauch" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Umgang mit Verteidigungswaffen",
        units: [
          { ue: 569, time: "09:00–09:45", topic: "Wiederholung: Waffengesetz §§1–27 – vertiefende Übungen" },
          { ue: 570, time: "09:45–10:30", topic: "Praktische Szenarien – Anwendung Verteidigungswaffen" },
          { ue: 571, time: "10:45–11:30", topic: "Gruppenarbeit – Risikoanalyse von Einsatzsituationen" },
          { ue: 572, time: "11:30–12:15", topic: "Simulation – Entscheidungsfindung unter Zeitdruck" },
          { ue: 573, time: "13:00–13:45", topic: "Theorie-Praxis-Transfer – Notwehr, Notstand, Haftung" },
          { ue: 574, time: "13:45–14:30", topic: "Zusammenfassung und Wiederholung zentraler Punkte" },
          { ue: 575, time: "14:45–15:30", topic: "Übungsfälle – Einsatz verbotener Waffen erkennen" },
          { ue: 576, time: "15:30–16:15", topic: "Gruppenarbeit – Handhabung und Sicherheitsmaßnahmen" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Umgang mit Verteidigungswaffen",
        units: [
          { ue: 577, time: "09:00–09:45", topic: "Praxisübungen – sichere Lagerung und Transport" },
          { ue: 578, time: "09:45–10:30", topic: "Praxisbeispiele – Einsatz unter realistischen Bedingungen" },
          { ue: 579, time: "10:45–11:30", topic: "Reflexion – Umgang mit kritischen Situationen" },
          { ue: 580, time: "11:30–12:15", topic: "Abschluss Lernfeld 8 – Umgang mit Verteidigungswaffen" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Erste Hilfe",
        units: [
          { ue: 581, time: "13:00–13:45", topic: "Lebensrettende Sofortmaßnahmen: HLW, stabile Seitenlage" },
          { ue: 582, time: "13:45–14:30", topic: "Umgang mit Blutungen, Schock, Bewusstlosigkeit" },
          { ue: 583, time: "14:45–15:30", topic: "Notfallmanagement und Kommunikation mit Rettungsdiensten" },
          { ue: 584, time: "15:30–16:15", topic: "Maßnahmen bei akuten Notfällen – Praxisübungen" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Erste Hilfe",
        units: [
          { ue: 585, time: "09:00–09:45", topic: "Abschlusszertifikat Erste Hilfe – Theorie" },
          { ue: 586, time: "09:45–10:30", topic: "Abschlusszertifikat Erste Hilfe – Praxis" },
          { ue: 587, time: "10:45–11:30", topic: "Wiederholung & Fragen" },
          { ue: 588, time: "11:30–12:15", topic: "Reflexion & Abschluss Lernfeld 9" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Brandschutz & Evakuierungshelfer",
        units: [
          { ue: 589, time: "13:00–13:45", topic: "Brandklassen, Feuerlöscher, Brandverhütung – Theorie" },
          { ue: 590, time: "13:45–14:30", topic: "Evakuierungspläne, Alarmierungsmaßnahmen, Personenrettung – Theorie" },
          { ue: 591, time: "14:45–15:30", topic: "Praktische Übungen – Feuerlöscher, Evakuierung" },
          { ue: 592, time: "15:30–16:15", topic: "Abschlusszertifikat & Reflexion" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Grundzüge der Sicherheitstechnik",
        units: [
          { ue: 593, time: "09:00–09:45", topic: "Einführung in Sicherheitstechnik – Aufgaben & Prävention" },
          { ue: 594, time: "09:45–10:30", topic: "Sicherheitsorganisation – Aufbau & Verantwortlichkeiten" },
          { ue: 595, time: "10:45–11:30", topic: "Die drei Säulen der Sicherheit – Einsatz, Inhalt, Zusammenwirken" },
          { ue: 596, time: "11:30–12:15", topic: "Mechanische Sicherungseinrichtungen – Zäune, Gitter, Türen" },
          { ue: 597, time: "13:00–13:45", topic: "Schutzziele eines Sicherheitszaunes & Zaunanlagen" },
          { ue: 598, time: "13:45–14:30", topic: "Widerstandsklassen der Verglasung" },
          { ue: 599, time: "14:45–15:30", topic: "Einfriedungsdurchlässe, automatische Türsysteme, Personenvereinzelungsanlagen" },
          { ue: 600, time: "15:30–16:15", topic: "Schlösser, Schließzylinder, Schließanlagen" }
        ]
      }
    ]
  },

  // WOCHE 16 – 09.02. bis 13.02.2026
  {
    id: 16,
    label: "Woche 16 · 09.02.2026 – 13.02.2026",
    days: [
      {
        weekday: "Montag",
        module: "Grundzüge der Sicherheitstechnik",
        units: [
          { ue: 601, time: "09:00–09:45", topic: "Zutrittskontrollsysteme – Grundlagen" },
          { ue: 602, time: "09:45–10:30", topic: "Elektronische Sicherungseinrichtungen – Alarmanlagen, Videoüberwachung" },
          { ue: 603, time: "10:45–11:30", topic: "Einbruchmeldeanlagen – Aufbau, Funktion & Aufgabenbereich" },
          { ue: 604, time: "11:30–12:15", topic: "Überfallmeldeanlagen – Einsatz & Besonderheiten" },
          { ue: 605, time: "13:00–13:45", topic: "Brandmeldeanlagen – Aufbau, Funktion, Integration" },
          { ue: 606, time: "13:45–14:30", topic: "Störmeldeanlagen – Monitoring & Alarmierung" },
          { ue: 607, time: "14:45–15:30", topic: "Feuer- und Rauchschutzabschlüsse, Feststellanlagen" },
          { ue: 608, time: "15:30–16:15", topic: "Sprachalarmierungs- und Evakuierungsanlagen" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Grundzüge der Sicherheitstechnik",
        units: [
          { ue: 609, time: "09:00–09:45", topic: "Automatische Löschanlagen – Aufbau & Aufgaben" },
          { ue: 610, time: "09:45–10:30", topic: "Bündelfunk – Erläuterung, Vor- und Nachteile analog/digital" },
          { ue: 611, time: "10:45–11:30", topic: "Mechanische Stechuhr, Todmannschalter – Funktionsweise" },
          { ue: 612, time: "11:30–12:15", topic: "Wächterkontrollsysteme – Einsatz & Dokumentation" },
          { ue: 613, time: "13:00–13:45", topic: "Videoüberwachungsanlagen – Betrieb & rechtliche Grundlagen" },
          { ue: 614, time: "13:45–14:30", topic: "Notruf- und Serviceleitstellen – Organisation & Aufgaben" },
          { ue: 615, time: "14:45–15:30", topic: "Organisation der Alarmverfolgung – Prozesse, Verantwortlichkeiten, Notfallpläne" },
          { ue: 616, time: "15:30–16:15", topic: "Technische Kommunikationsmittel – Übersicht & Anwendung" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Grundzüge der Sicherheitstechnik",
        units: [
          { ue: 617, time: "09:00–09:45", topic: "Brandschutz – Brandklassen & Feuerlöscher" },
          { ue: 618, time: "09:45–10:30", topic: "Alarmierungsmaßnahmen – Vorgehensweisen & Praxis" },
          { ue: 619, time: "10:45–11:30", topic: "Evakuierungspläne – Aufbau & Durchführung" },
          { ue: 620, time: "11:30–12:15", topic: "Personenrettung – Techniken & Sicherheit" },
          { ue: 621, time: "13:00–13:45", topic: "Praktische Übungen – Brandschutz & Alarmierung" },
          { ue: 622, time: "13:45–14:30", topic: "Praktische Übungen – Evakuierungsmaßnahmen" },
          { ue: 623, time: "14:45–15:30", topic: "Praktische Übungen – Personenrettung" },
          { ue: 624, time: "15:30–16:15", topic: "Fragen & Wiederholung" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Grundzüge der Sicherheitstechnik",
        units: [
          { ue: 625, time: "09:00–09:45", topic: "Mechanische Sicherungseinrichtungen – Vertiefung" },
          { ue: 626, time: "09:45–10:30", topic: "Zutrittskontrollsysteme – Vertiefung & Praxisbeispiele" },
          { ue: 627, time: "10:45–11:30", topic: "Videoüberwachung & Kommunikationsmittel – Integration in Objektschutz" },
          { ue: 628, time: "11:30–12:15", topic: "Alarmverfolgung – Verantwortlichkeiten & Ablauf" },
          { ue: 629, time: "13:00–13:45", topic: "Notruf- und Serviceleitstellen – Fallbeispiele" },
          { ue: 630, time: "13:45–14:30", topic: "Brandschutz – Übung & Wiederholung" },
          { ue: 631, time: "14:45–15:30", topic: "Praktische Übung – Alarmierung, Evakuierung" },
          { ue: 632, time: "15:30–16:15", topic: "Abschluss Lernfeld 11 – Grundzüge der Sicherheitstechnik" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Grundzüge der Sicherheitstechnik",
        units: [
          { ue: 633, time: "09:00–09:45", topic: "Einführung Einbruchmeldeanlagen – Bedeutung & Aufgabenbereich" },
          { ue: 634, time: "09:45–10:30", topic: "Aufbau von Einbruchmeldeanlagen – Komponenten & Funktionsweise" },
          { ue: 635, time: "10:45–11:30", topic: "Überfallmeldeanlagen – Bedeutung & Aufgabenbereich" },
          { ue: 636, time: "11:30–12:15", topic: "Aufbau von Überfallmeldeanlagen – Funktionsweise & Praxisbeispiele" },
          { ue: 637, time: "13:00–13:45", topic: "Brandmeldeanlagen – Bedeutung & Aufgabenbereich" },
          { ue: 638, time: "13:45–14:30", topic: "Aufbau von Brandmeldeanlagen – Sensoren, Alarmierung & Prozesse" },
          { ue: 639, time: "14:45–15:30", topic: "Störmeldeanlagen – Bedeutung & Aufgabenbereich" },
          { ue: 640, time: "15:30–16:15", topic: "Aufbau von Störmeldeanlagen – Funktionsprinzipien & Praxisbeispiele" }
        ]
      }
    ]
  },

  // WOCHE 17 – 16.02. bis 20.02.2026
  {
    id: 17,
    label: "Woche 17 · 16.02.2026 – 20.02.2026",
    days: [
      {
        weekday: "Montag",
        module: "Grundzüge der Sicherheitstechnik",
        units: [
          { ue: 641, time: "09:00–09:45", topic: "Feuer- und Rauchschutzabschlüsse – Aufgaben & Einsatzbereiche" },
          { ue: 642, time: "09:45–10:30", topic: "Feststellanlagen – Aufbau und Funktionsweise" },
          { ue: 643, time: "10:45–11:30", topic: "Sprachalarmierungs- und Evakuierungsanlagen – Bedeutung & Aufgaben" },
          { ue: 644, time: "11:30–12:15", topic: "Automatische Löschanlagen – Einsatzarten & Funktionsprinzipien" },
          { ue: 645, time: "13:00–13:45", topic: "Bündelfunk – Grundlagen, analoge vs. digitale Systeme" },
          { ue: 646, time: "13:45–14:30", topic: "Mechanische Stechuhr, Todmannschalter, Wächterkontrollsysteme – Aufbau & Nutzung" },
          { ue: 647, time: "14:45–15:30", topic: "Videoüberwachungsanlagen – Funktionen & rechtliche Rahmenbedingungen" },
          { ue: 648, time: "15:30–16:15", topic: "Notruf- und Serviceleitstellen – Aufgaben & Prozesse" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Grundzüge der Sicherheitstechnik",
        units: [
          { ue: 649, time: "09:00–09:45", topic: "Organisation der Alarmverfolgung – Verantwortlichkeiten & Prozesse" },
          { ue: 650, time: "09:45–10:30", topic: "Technische Kommunikationsmittel – Übersicht & Einsatzbereiche" },
          { ue: 651, time: "10:45–11:30", topic: "Brandschutz – Brandklassen, Feuerlöscher, praktische Übungen" },
          { ue: 652, time: "11:30–12:15", topic: "Alarmierungsmaßnahmen – Richtlinien & Praxis" },
          { ue: 653, time: "13:00–13:45", topic: "Evakuierungspläne – Erstellung & Anwendung" },
          { ue: 654, time: "13:45–14:30", topic: "Personenrettung – Verfahren & Übungen" },
          { ue: 655, time: "14:45–15:30", topic: "Praktische Übungen – Brandbekämpfung & Evakuierung" },
          { ue: 656, time: "15:30–16:15", topic: "Praktische Übungen – Brandbekämpfung & Evakuierung" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Grundzüge der Sicherheitstechnik",
        units: [
          { ue: 657, time: "09:00–09:45", topic: "Schlösser, Schließzylinder, Schließanlagen – Überblick & Funktionsweisen" },
          { ue: 658, time: "09:45–10:30", topic: "Zutrittskontrollsysteme – elektronische & mechanische Varianten" },
          { ue: 659, time: "10:45–11:30", topic: "Mechanische Sicherungseinrichtungen – Türen, Gitter, Zäune" },
          { ue: 660, time: "11:30–12:15", topic: "Schutzziele eines Sicherheitszauns & Zaunarten" },
          { ue: 661, time: "13:00–13:45", topic: "Widerstandsklassen von Verglasungen – Grundlagen & Einsatz" },
          { ue: 662, time: "13:45–14:30", topic: "Einfriedungsdurchlässe – Aufbau & Sicherheitsaspekte" },
          { ue: 663, time: "14:45–15:30", topic: "Automatische Türsysteme – Aufbau & Funktionsweise" },
          { ue: 664, time: "15:30–16:15", topic: "Personenvereinzelungsanlagen – Zweck & Bedienung" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Grundzüge der Sicherheitstechnik",
        units: [
          { ue: 665, time: "09:00–09:45", topic: "Elektronische Sicherungseinrichtungen – Einleitung & Einsatzgebiete" },
          { ue: 666, time: "09:45–10:30", topic: "Einbruchmeldeanlagen – Praxisübungen & Fallbeispiele" },
          { ue: 667, time: "10:45–11:30", topic: "Überfallmeldeanlagen – Praxisübungen & Fallbeispiele" },
          { ue: 668, time: "11:30–12:15", topic: "Brandmeldeanlagen – Praxisübungen & Fallbeispiele" },
          { ue: 669, time: "13:00–13:45", topic: "Störmeldeanlagen – Praxisübungen & Fallbeispiele" },
          { ue: 670, time: "13:45–14:30", topic: "Zusammenfassung Lernfeld 11 – Übungen & Fragen" },
          { ue: 671, time: "14:45–15:30", topic: "Wiederholung – alle Sicherungssysteme & Funktionsweisen" },
          { ue: 672, time: "15:30–16:15", topic: "Abschluss Lernfeld 11 – Diskussion & Fragen" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Unfallverhütungsvorschriften",
        units: [
          { ue: 673, time: "09:00–09:45", topic: "DGUV Vorschrift 1 – Grundsätze der Prävention" },
          { ue: 674, time: "09:45–10:30", topic: "Präventionsmaßnahmen – Planung & Organisation" },
          { ue: 675, time: "10:45–11:30", topic: "Grundpflichten des Unternehmers (§2) – Pflichten & Verantwortung" },
          { ue: 676, time: "11:30–12:15", topic: "Unternehmerpflichten – Haftung & Dokumentation" },
          { ue: 677, time: "13:00–13:45", topic: "Unterweisung der Versicherten (§4) – Inhalte & Durchführung" },
          { ue: 678, time: "13:45–14:30", topic: "Unterweisungsdokumentation & Kontrolle" },
          { ue: 679, time: "14:45–15:30", topic: "Zutritt- und Aufenthaltsverbote (§9) – Grundlagen & Praxisfälle" },
          { ue: 680, time: "15:30–16:15", topic: "Zutrittskontrollen – Umsetzung & Beispiele" }
        ]
      }
    ]
  }
  ,  // WOCHE 18 – 23.02. bis 27.02.2026
  {
    id: 18,
    label: "Woche 18 · 23.02.2026 – 27.02.2026",
    days: [
      {
        weekday: "Montag",
        module: "Unfallverhütungsvorschriften",
        units: [
          { ue: 681, time: "09:00–09:45", topic: "Zugang zu Vorschriften und Regeln (§12)" },
          { ue: 682, time: "09:45–10:30", topic: "Erste Hilfe – Allgemeine Pflichten des Unternehmers (§24)" },
          { ue: 683, time: "10:45–11:30", topic: "Erste Hilfe – Erforderliche Einrichtungen und Sachmittel (§25)" },
          { ue: 684, time: "11:30–12:15", topic: "Erste Hilfe – Zahl und Ausbildung der Ersthelfer (§26)" },
          { ue: 685, time: "13:00–13:45", topic: "DGUV Vorschrift 23 – Wach- und Sicherungsdienste" },
          { ue: 686, time: "13:45–14:30", topic: "Dienstanweisung, Eignung und Gewährleistung der Arbeitssicherheit" },
          { ue: 687, time: "14:45–15:30", topic: "Verbot berauschender Mittel" },
          { ue: 688, time: "15:30–16:15", topic: "Aufgaben bei Wach- und Sicherungstätigkeiten – Objektsicherung und besondere Gefahren" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Unfallverhütungsvorschriften",
        units: [
          { ue: 689, time: "09:00–09:45", topic: "Überprüfung von Objekten und Objekteinweisung (§9)" },
          { ue: 690, time: "09:45–10:30", topic: "Ausrüstung des Personals (§10)" },
          { ue: 691, time: "10:45–11:30", topic: "Regelungen für Brillenträger (§11)" },
          { ue: 692, time: "11:30–12:15", topic: "Hunde (§12) – Hundezwinger, Haltung in Objekten (§14)" },
          { ue: 693, time: "13:00–13:45", topic: "Hundeführer (§15) – Hundeführung (§16)" },
          { ue: 694, time: "13:45–14:30", topic: "Hundetransport (§17)" },
          { ue: 695, time: "14:45–15:30", topic: "Schusswaffen – Ausrüstung (§18)" },
          { ue: 696, time: "15:30–16:15", topic: "Schusswaffen – Führen und Beschusszeichen (§19)" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Unfallverhütungsvorschriften",
        units: [
          { ue: 697, time: "09:00–09:45", topic: "Schusswaffen – Führung von Munitionen (§20)" },
          { ue: 698, time: "09:45–10:30", topic: "Schusswaffen – Übergabe (§21)" },
          { ue: 699, time: "10:45–11:30", topic: "Schusswaffen – Aufbewahrung (§22)" },
          { ue: 700, time: "11:30–12:15", topic: "Schusswaffen – Eignung (§24)" },
          { ue: 701, time: "13:00–13:45", topic: "Geldtransport – Botendienste (§25)" },
          { ue: 702, time: "13:45–14:30", topic: "Geldtransport – Fahrzeuge (§26)" },
          { ue: 703, time: "14:45–15:30", topic: "Führungspflichten (§16) – Dokumentation" },
          { ue: 704, time: "15:30–16:15", topic: "ASR A1.3 – Sicherheits- und Gesundheitsschutzkennzeichnung" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Unfallverhütungsvorschriften",
        units: [
          { ue: 705, time: "09:00–09:45", topic: "Allgemeine Regelungen und Begriffsbestimmungen" },
          { ue: 706, time: "09:45–10:30", topic: "Verbotszeichen, Warnzeichen, Gebotszeichen" },
          { ue: 707, time: "10:45–11:30", topic: "Rettungszeichen, Brandschutzzeichen, Zusatzzeichen" },
          { ue: 708, time: "11:30–12:15", topic: "Grafische Symbole, Farben und deren Deutung" },
          { ue: 709, time: "13:00–13:45", topic: "Sicherheitsmarkierung für Hindernisse und Gefahrenstellen" },
          { ue: 710, time: "13:45–14:30", topic: "Flucht- und Rettungspläne – Grundlagen" },
          { ue: 711, time: "14:45–15:30", topic: "Flucht- und Rettungspläne – praktische Übungen" },
          { ue: 712, time: "15:30–16:15", topic: "Zusammenfassung & Fragen" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Unfallverhütungsvorschriften",
        units: [
          { ue: 713, time: "09:00–09:45", topic: "Wiederholung: Erste Hilfe & DGUV Vorschriften" },
          { ue: 714, time: "09:45–10:30", topic: "Wiederholung: Hunde- und Schusswaffenregelungen" },
          { ue: 715, time: "10:45–11:30", topic: "Wiederholung: Geldtransport und Führungspflichten" },
          { ue: 716, time: "11:30–12:15", topic: "Wiederholung: Sicherheits- und Gesundheitsschutzkennzeichnung" },
          { ue: 717, time: "13:00–13:45", topic: "Wiederholung: Flucht- und Rettungspläne" },
          { ue: 718, time: "13:45–14:30", topic: "Praktische Übungen – Fallbeispiele" },
          { ue: 719, time: "14:45–15:30", topic: "Praktische Übungen – Simulationen & Aufgaben" },
          { ue: 720, time: "15:30–16:15", topic: "Abschluss Lernfeld Unfallverhütungsvorschriften" }
        ]
      }
    ]
  },

  // WOCHE 19 – 02.03. bis 06.03.2026
  {
    id: 19,
    label: "Woche 19 · 02.03.2026 – 06.03.2026",
    days: [
      {
        weekday: "Montag",
        module: "Waffensachkunde §7 WaffG",
        units: [
          { ue: 721, time: "09:00–09:45", topic: "Waffengesetz – Definitionen & Kategorien" },
          { ue: 722, time: "09:45–10:30", topic: "Munition – Typen, Kennzeichnung, Umgang" },
          { ue: 723, time: "10:45–11:30", topic: "Aufbewahrung von Schusswaffen – Grundsätze, Vorschriften" },
          { ue: 724, time: "11:30–12:15", topic: "Transport von Schusswaffen – Regelungen & Sicherheit" },
          { ue: 725, time: "13:00–13:45", topic: "Führen von Schusswaffen – Voraussetzungen & Grenzen" },
          { ue: 726, time: "13:45–14:30", topic: "Notwehr und Notstand – Zusammenhang mit Waffenrecht" },
          { ue: 727, time: "14:45–15:30", topic: "Waffenhandhabung – sichere Handhabung & Grundregeln" },
          { ue: 728, time: "15:30–16:15", topic: "Verhalten am Schießstand – Sicherheit, Regeln, Organisation" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Waffensachkunde §7 WaffG",
        units: [
          { ue: 729, time: "09:00–09:45", topic: "Waffen- und Munitionskunde – theoretische Grundlagen" },
          { ue: 730, time: "09:45–10:30", topic: "Praktische Handhabung – Trockenübungen" },
          { ue: 731, time: "10:45–11:30", topic: "Transport & Aufbewahrung – praktische Übungen" },
          { ue: 732, time: "11:30–12:15", topic: "Verhalten am Schießstand – praktische Anwendung" },
          { ue: 733, time: "13:00–13:45", topic: "Theoretische Prüfungsvorbereitung – Fragen & Fallbeispiele" },
          { ue: 734, time: "13:45–14:30", topic: "Praktische Prüfungsvorbereitung – Übungen" },
          { ue: 735, time: "14:45–15:30", topic: "Notwehr & Notstand – Fallbeispiele" },
          { ue: 736, time: "15:30–16:15", topic: "Wiederholung – Theorie & Praxis" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Waffensachkunde §7 WaffG",
        units: [
          { ue: 737, time: "09:00–09:45", topic: "Waffenrechtliche Grundlagen – Wiederholung & Vertiefung" },
          { ue: 738, time: "09:45–10:30", topic: "Munitionskunde – praktische Übungen" },
          { ue: 739, time: "10:45–11:30", topic: "Aufbewahrung & Transport – Szenarienübungen" },
          { ue: 740, time: "11:30–12:15", topic: "Schießstandpraxis – Sicherheitsabläufe" },
          { ue: 741, time: "13:00–13:45", topic: "Verhalten bei Notfällen – Praxisbeispiele" },
          { ue: 742, time: "13:45–14:30", topic: "Waffenhandhabung – Prüfungsvorbereitung" },
          { ue: 743, time: "14:45–15:30", topic: "Theoretische Prüfung – Übungsaufgaben" },
          { ue: 744, time: "15:30–16:15", topic: "Praktische Prüfung – Simulation" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Waffensachkunde §7 WaffG",
        units: [
          { ue: 745, time: "09:00–09:45", topic: "Wiederholung – Definitionen, Kategorien, Munition" },
          { ue: 746, time: "09:45–10:30", topic: "Wiederholung – Aufbewahrung, Transport, Führung" },
          { ue: 747, time: "10:45–11:30", topic: "Wiederholung – Notwehr, Notstand, rechtliche Grundlagen" },
          { ue: 748, time: "11:30–12:15", topic: "Praktische Prüfungsvorbereitung – Waffenhandhabung" },
          { ue: 749, time: "13:00–13:45", topic: "Verhalten am Schießstand – letzte Übung" },
          { ue: 750, time: "13:45–14:30", topic: "Theoretische Prüfung – Fallbearbeitung" },
          { ue: 751, time: "14:45–15:30", topic: "Praktische Prüfung – Simulation" },
          { ue: 752, time: "15:30–16:15", topic: "Abschluss Waffensachkunde – Feedback, Zertifikate" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Waffensachkunde §7 WaffG",
        units: [
          { ue: 753, time: "09:00–09:45", topic: "Wiederholung – Gesetzliche Grundlagen & Definitionen" },
          { ue: 754, time: "09:45–10:30", topic: "Wiederholung – Munition & Aufbewahrung" },
          { ue: 755, time: "10:45–11:30", topic: "Wiederholung – Transport, Führung & Notwehr" },
          { ue: 756, time: "11:30–12:15", topic: "Wiederholung – Waffenhandhabung & Schießstandpraxis" },
          { ue: 757, time: "13:00–13:45", topic: "Prüfungssimulation – Theorie" },
          { ue: 758, time: "13:45–14:30", topic: "Prüfungssimulation – Praxis" },
          { ue: 759, time: "14:45–15:30", topic: "Feedback & Abschlussübungen" },
          { ue: 760, time: "15:30–16:15", topic: "Abschluss Waffensachkunde – Zertifikatsvergabe" }
        ]
      }
    ]
  },

  // WOCHE 20 – 09.03. bis 13.03.2026
  {
    id: 20,
    label: "Woche 20 · 09.03.2026 – 13.03.2026",
    days: [
      {
        weekday: "Montag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 761, time: "09:00–09:45", topic: "Wiederholung Rechtsgebiete – Bürgerliches Recht" },
          { ue: 762, time: "09:45–10:30", topic: "Wiederholung Rechtsgebiete – Straf- und Strafverfahrensrecht" },
          { ue: 763, time: "10:45–11:30", topic: "Wiederholung Rechtsgebiete – Gewerberecht" },
          { ue: 764, time: "11:30–12:15", topic: "Wiederholung Rechtsgebiete – Datenschutz" },
          { ue: 765, time: "13:00–13:45", topic: "Lernfeld Umgang mit Menschen – Theorie" },
          { ue: 766, time: "13:45–14:30", topic: "Lernfeld Umgang mit Verteidigungswaffen – Theorie" },
          { ue: 767, time: "14:45–15:30", topic: "Lernfeld Erste Hilfe – Theorie" },
          { ue: 768, time: "15:30–16:15", topic: "Lernfeld Brandschutz & Evakuierungshelfer – Theorie" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 769, time: "09:00–09:45", topic: "Grundzüge der Sicherheitstechnik – Wiederholung" },
          { ue: 770, time: "09:45–10:30", topic: "Unfallverhütungsvorschriften – Theorie" },
          { ue: 771, time: "10:45–11:30", topic: "Waffensachkunde – Wiederholung" },
          { ue: 772, time: "11:30–12:15", topic: "Fallbearbeitung – Praxisbeispiele" },
          { ue: 773, time: "13:00–13:45", topic: "Fallbearbeitung – Sicherheitsdienst" },
          { ue: 774, time: "13:45–14:30", topic: "Fallbearbeitung – Datenschutz" },
          { ue: 775, time: "14:45–15:30", topic: "Simulation schriftliche Prüfungen" },
          { ue: 776, time: "15:30–16:15", topic: "Simulation mündliche Prüfungen" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 777, time: "09:00–09:45", topic: "Strategien Prüfungsstress – Übungen" },
          { ue: 778, time: "09:45–10:30", topic: "Zeitmanagement für Prüfungen – Übungen" },
          { ue: 779, time: "10:45–11:30", topic: "Präsentationstechniken – Theorie & Praxis" },
          { ue: 780, time: "11:30–12:15", topic: "Wiederholung schwieriger Themen – Fallanalyse" },
          { ue: 781, time: "13:00–13:45", topic: "Fallbearbeitung – Bürgerliches Recht" },
          { ue: 782, time: "13:45–14:30", topic: "Fallbearbeitung – Straf- und Strafverfahrensrecht" },
          { ue: 783, time: "14:45–15:30", topic: "Fallbearbeitung – Gewerberecht" },
          { ue: 784, time: "15:30–16:15", topic: "Fallbearbeitung – Datenschutz" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 785, time: "09:00–09:45", topic: "Fallbearbeitung – Umgang mit Menschen" },
          { ue: 786, time: "09:45–10:30", topic: "Fallbearbeitung – Umgang mit Verteidigungswaffen" },
          { ue: 787, time: "10:45–11:30", topic: "Fallbearbeitung – Erste Hilfe" },
          { ue: 788, time: "11:30–12:15", topic: "Fallbearbeitung – Brandschutz & Evakuierung" },
          { ue: 789, time: "13:00–13:45", topic: "Simulation schriftliche Prüfung – Teil 1" },
          { ue: 790, time: "13:45–14:30", topic: "Simulation schriftliche Prüfung – Teil 2" },
          { ue: 791, time: "14:45–15:30", topic: "Simulation mündliche Prüfung – Rollenspiele" },
          { ue: 792, time: "15:30–16:15", topic: "Simulation mündliche Prüfung – Feedback" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 793, time: "09:00–09:45", topic: "Zusammenfassung Woche – Fragen & Klärungen" },
          { ue: 794, time: "09:45–10:30", topic: "Wiederholung aller Rechtsgebiete" },
          { ue: 795, time: "10:45–11:30", topic: "Praxisfälle – Sicherheitsdienst" },
          { ue: 796, time: "11:30–12:15", topic: "Praxisfälle – Datenschutz" },
          { ue: 797, time: "13:00–13:45", topic: "Simulation Prüfungen – schwierige Fälle" },
          { ue: 798, time: "13:45–14:30", topic: "Simulation Prüfungen – Wiederholung" },
          { ue: 799, time: "14:45–15:30", topic: "Strategien für Prüfungstag" },
          { ue: 800, time: "15:30–16:15", topic: "Abschluss der Woche – Feedback & offene Fragen" }
        ]
      }
    ]
  } 
  , // WOCHE 21 – 16.03. bis 20.03.2026
  {
    id: 21,
    label: "Woche 21 · 16.03.2026 – 20.03.2026",
    days: [
      {
        weekday: "Montag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 801, time: "09:00–09:45", topic: "Wiederholung Bürgerliches Recht – Fallanalyse" },
          { ue: 802, time: "09:45–10:30", topic: "Wiederholung Straf- und Strafverfahrensrecht – Fallanalyse" },
          { ue: 803, time: "10:45–11:30", topic: "Wiederholung Gewerberecht – Praxisfälle" },
          { ue: 804, time: "11:30–12:15", topic: "Wiederholung Datenschutz – Praxisfälle" },
          { ue: 805, time: "13:00–13:45", topic: "Umgang mit Menschen – Fallbearbeitung" },
          { ue: 806, time: "13:45–14:30", topic: "Umgang mit Verteidigungswaffen – Übungen" },
          { ue: 807, time: "14:45–15:30", topic: "Erste Hilfe – Fallbeispiele" },
          { ue: 808, time: "15:30–16:15", topic: "Brandschutz & Evakuierungshelfer – Fallbeispiele" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 809, time: "09:00–09:45", topic: "Grundzüge der Sicherheitstechnik – Praxisbeispiele" },
          { ue: 810, time: "09:45–10:30", topic: "Unfallverhütungsvorschriften – Praxisfälle" },
          { ue: 811, time: "10:45–11:30", topic: "Waffensachkunde – Übungen & Fragen" },
          { ue: 812, time: "11:30–12:15", topic: "Wiederholung schwieriger Themen – Fallanalyse" },
          { ue: 813, time: "13:00–13:45", topic: "Simulation schriftliche Prüfung – Teil 1" },
          { ue: 814, time: "13:45–14:30", topic: "Simulation schriftliche Prüfung – Teil 2" },
          { ue: 815, time: "14:45–15:30", topic: "Simulation mündliche Prüfung – Rollenspiele" },
          { ue: 816, time: "15:30–16:15", topic: "Simulation mündliche Prüfung – Feedback" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 817, time: "09:00–09:45", topic: "Strategien Prüfungsstress – Übungen" },
          { ue: 818, time: "09:45–10:30", topic: "Zeitmanagement für Prüfungen – Übungen" },
          { ue: 819, time: "10:45–11:30", topic: "Präsentationstechniken – Theorie & Praxis" },
          { ue: 820, time: "11:30–12:15", topic: "Wiederholung Rechtsgebiete – Fallanalyse" },
          { ue: 821, time: "13:00–13:45", topic: "Praxisfälle – Bürgerliches Recht" },
          { ue: 822, time: "13:45–14:30", topic: "Praxisfälle – Straf- und Strafverfahrensrecht" },
          { ue: 823, time: "14:45–15:30", topic: "Praxisfälle – Gewerberecht" },
          { ue: 824, time: "15:30–16:15", topic: "Praxisfälle – Datenschutz" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 825, time: "09:00–09:45", topic: "Fallbearbeitung – Umgang mit Menschen" },
          { ue: 826, time: "09:45–10:30", topic: "Fallbearbeitung – Umgang mit Verteidigungswaffen" },
          { ue: 827, time: "10:45–11:30", topic: "Fallbearbeitung – Erste Hilfe" },
          { ue: 828, time: "11:30–12:15", topic: "Fallbearbeitung – Brandschutz & Evakuierung" },
          { ue: 829, time: "13:00–13:45", topic: "Simulation schriftliche Prüfung – schwierige Fälle" },
          { ue: 830, time: "13:45–14:30", topic: "Simulation schriftliche Prüfung – Wiederholung" },
          { ue: 831, time: "14:45–15:30", topic: "Simulation mündliche Prüfung – Rollenspiele" },
          { ue: 832, time: "15:30–16:15", topic: "Simulation mündliche Prüfung – Feedback" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 833, time: "09:00–09:45", topic: "Zusammenfassung Woche – Fragen & Klärungen" },
          { ue: 834, time: "09:45–10:30", topic: "Wiederholung aller Rechtsgebiete" },
          { ue: 835, time: "10:45–11:30", topic: "Praxisfälle – Sicherheitsdienst" },
          { ue: 836, time: "11:30–12:15", topic: "Praxisfälle – Datenschutz" },
          { ue: 837, time: "13:00–13:45", topic: "Simulation Prüfungen – schwierige Fälle" },
          { ue: 838, time: "13:45–14:30", topic: "Simulation Prüfungen – Wiederholung" },
          { ue: 839, time: "14:45–15:30", topic: "Strategien für Prüfungstag" },
          { ue: 840, time: "15:30–16:15", topic: "Abschluss der Woche – Feedback & offene Fragen" }
        ]
      }
    ]
  },

  // WOCHE 22 – 23.03. bis 27.03.2026
  {
    id: 22,
    label: "Woche 22 · 23.03.2026 – 27.03.2026",
    days: [
      {
        weekday: "Montag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 841, time: "09:00–09:45", topic: "Wiederholung Bürgerliches Recht – schwierige Fälle" },
          { ue: 842, time: "09:45–10:30", topic: "Wiederholung Straf- und Strafverfahrensrecht – schwierige Fälle" },
          { ue: 843, time: "10:45–11:30", topic: "Wiederholung Gewerberecht – Fallanalyse" },
          { ue: 844, time: "11:30–12:15", topic: "Wiederholung Datenschutz – Übungen" },
          { ue: 845, time: "13:00–13:45", topic: "Umgang mit Menschen – Übungen & Fallbeispiele" },
          { ue: 846, time: "13:45–14:30", topic: "Umgang mit Verteidigungswaffen – Übungsfälle" },
          { ue: 847, time: "14:45–15:30", topic: "Erste Hilfe – praktische Übungen" },
          { ue: 848, time: "15:30–16:15", topic: "Brandschutz & Evakuierung – praktische Übungen" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 849, time: "09:00–09:45", topic: "Grundzüge Sicherheitstechnik – Fallbearbeitung" },
          { ue: 850, time: "09:45–10:30", topic: "Unfallverhütungsvorschriften – Praxisfälle" },
          { ue: 851, time: "10:45–11:30", topic: "Waffensachkunde – Fallbearbeitung" },
          { ue: 852, time: "11:30–12:15", topic: "Wiederholung schwieriger Themen – Übungen" },
          { ue: 853, time: "13:00–13:45", topic: "Simulation schriftliche Prüfung – Teil 1" },
          { ue: 854, time: "13:45–14:30", topic: "Simulation schriftliche Prüfung – Teil 2" },
          { ue: 855, time: "14:45–15:30", topic: "Simulation mündliche Prüfung – Rollenspiele" },
          { ue: 856, time: "15:30–16:15", topic: "Simulation mündliche Prüfung – Feedback" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 857, time: "09:00–09:45", topic: "Strategien Prüfungsstress – Übungen" },
          { ue: 858, time: "09:45–10:30", topic: "Zeitmanagement & Präsentationstechniken" },
          { ue: 859, time: "10:45–11:30", topic: "Wiederholung Rechtsgebiete – Praxisfälle" },
          { ue: 860, time: "11:30–12:15", topic: "Praxisfälle Sicherheitsdienst" },
          { ue: 861, time: "13:00–13:45", topic: "Praxisfälle Datenschutz" },
          { ue: 862, time: "13:45–14:30", topic: "Praxisfälle Bürgerliches Recht" },
          { ue: 863, time: "14:45–15:30", topic: "Praxisfälle Straf- und Strafverfahrensrecht" },
          { ue: 864, time: "15:30–16:15", topic: "Praxisfälle Gewerberecht" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 865, time: "09:00–09:45", topic: "Umgang mit Menschen – Übungen" },
          { ue: 866, time: "09:45–10:30", topic: "Umgang mit Verteidigungswaffen – Übungen" },
          { ue: 867, time: "10:45–11:30", topic: "Erste Hilfe – praktische Übungen" },
          { ue: 868, time: "11:30–12:15", topic: "Brandschutz & Evakuierung – praktische Übungen" },
          { ue: 869, time: "13:00–13:45", topic: "Simulation schriftliche Prüfung – schwierige Fälle" },
          { ue: 870, time: "13:45–14:30", topic: "Simulation schriftliche Prüfung – Wiederholung" },
          { ue: 871, time: "14:45–15:30", topic: "Simulation mündliche Prüfung – Rollenspiele" },
          { ue: 872, time: "15:30–16:15", topic: "Simulation mündliche Prüfung – Feedback" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 873, time: "09:00–09:45", topic: "Zusammenfassung Woche – Fragen & Klärungen" },
          { ue: 874, time: "09:45–10:30", topic: "Wiederholung aller Rechtsgebiete" },
          { ue: 875, time: "10:45–11:30", topic: "Praxisfälle Sicherheitsdienst" },
          { ue: 876, time: "11:30–12:15", topic: "Praxisfälle Datenschutz" },
          { ue: 877, time: "13:00–13:45", topic: "Simulation Prüfungen – schwierige Fälle" },
          { ue: 878, time: "13:45–14:30", topic: "Simulation Prüfungen – Wiederholung" },
          { ue: 879, time: "14:45–15:30", topic: "Strategien für Prüfungstag" },
          { ue: 880, time: "15:30–16:15", topic: "Abschluss Woche – Feedback & offene Fragen" }
        ]
      }
    ]
  },

  // WOCHE 23 – 30.03. bis 03.04.2026
  {
    id: 23,
    label: "Woche 23 · 30.03.2026 – 03.04.2026",
    days: [
      {
        weekday: "Montag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 881, time: "09:00–09:45", topic: "Wiederholung Bürgerliches Recht – Schwerpunkt Vertragsrecht" },
          { ue: 882, time: "09:45–10:30", topic: "Wiederholung Straf- und Strafverfahrensrecht – Fallbeispiele" },
          { ue: 883, time: "10:45–11:30", topic: "Wiederholung Gewerberecht – praktische Übung" },
          { ue: 884, time: "11:30–12:15", topic: "Datenschutz – praktische Fallbearbeitung" },
          { ue: 885, time: "13:00–13:45", topic: "Umgang mit Menschen – Konfliktlösungen" },
          { ue: 886, time: "13:45–14:30", topic: "Umgang mit Verteidigungswaffen – praxisnahe Übungen" },
          { ue: 887, time: "14:45–15:30", topic: "Erste Hilfe – praktische Übungen" },
          { ue: 888, time: "15:30–16:15", topic: "Brandschutz & Evakuierung – praktische Übungen" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 889, time: "09:00–09:45", topic: "Grundzüge Sicherheitstechnik – Praxisfälle" },
          { ue: 890, time: "09:45–10:30", topic: "Unfallverhütungsvorschriften – praktische Anwendung" },
          { ue: 891, time: "10:45–11:30", topic: "Waffensachkunde – Praxis & Prüfungsvorbereitung" },
          { ue: 892, time: "11:30–12:15", topic: "Wiederholung schwieriger Themen – Übungen" },
          { ue: 893, time: "13:00–13:45", topic: "Simulation schriftliche Prüfung – Teil 1" },
          { ue: 894, time: "13:45–14:30", topic: "Simulation schriftliche Prüfung – Teil 2" },
          { ue: 895, time: "14:45–15:30", topic: "Simulation mündliche Prüfung – Rollenspiele" },
          { ue: 896, time: "15:30–16:15", topic: "Simulation mündliche Prüfung – Feedback" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 897, time: "09:00–09:45", topic: "Strategien Prüfungsstress – Übungen" },
          { ue: 898, time: "09:45–10:30", topic: "Zeitmanagement & Präsentationstechniken" },
          { ue: 899, time: "10:45–11:30", topic: "Wiederholung Rechtsgebiete – Praxisfälle" },
          { ue: 900, time: "11:30–12:15", topic: "Praxisfälle Sicherheitsdienst" },
          { ue: 901, time: "13:00–13:45", topic: "Praxisfälle Datenschutz" },
          { ue: 902, time: "13:45–14:30", topic: "Praxisfälle Bürgerliches Recht" },
          { ue: 903, time: "14:45–15:30", topic: "Praxisfälle Straf- und Strafverfahrensrecht" },
          { ue: 904, time: "15:30–16:15", topic: "Praxisfälle Gewerberecht" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 905, time: "09:00–09:45", topic: "Umgang mit Menschen – Fallbearbeitung" },
          { ue: 906, time: "09:45–10:30", topic: "Umgang mit Verteidigungswaffen – Übungen" },
          { ue: 907, time: "10:45–11:30", topic: "Erste Hilfe – praktische Übungen" },
          { ue: 908, time: "11:30–12:15", topic: "Brandschutz & Evakuierung – praktische Übungen" },
          { ue: 909, time: "13:00–13:45", topic: "Simulation schriftliche Prüfung – schwierige Fälle" },
          { ue: 910, time: "13:45–14:30", topic: "Simulation schriftliche Prüfung – Wiederholung" },
          { ue: 911, time: "14:45–15:30", topic: "Simulation mündliche Prüfung – Rollenspiele" },
          { ue: 912, time: "15:30–16:15", topic: "Simulation mündliche Prüfung – Feedback" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Karfreitag (Feiertag – kein Unterricht)",
        units: []
      }
    ]
  },

  // WOCHE 24 – 07.04. bis 14.04.2026
  {
    id: 24,
    label: "Woche 24 · 07.04.2026 – 14.04.2026",
    days: [
      {
        weekday: "Montag",
        module: "Ostermontag (Feiertag – kein Unterricht)",
        units: []
      },
      {
        weekday: "Dienstag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 913, time: "09:00–09:45", topic: "Zusammenfassung Woche 23 – offene Fragen" },
          { ue: 914, time: "09:45–10:30", topic: "Wiederholung Bürgerliches Recht – Vertiefung" },
          { ue: 915, time: "10:45–11:30", topic: "Wiederholung Straf- und Strafverfahrensrecht – Vertiefung" },
          { ue: 916, time: "11:30–12:15", topic: "Wiederholung Gewerberecht – Vertiefung" },
          { ue: 917, time: "13:00–13:45", topic: "Datenschutz – Wiederholung schwieriger Fälle" },
          { ue: 918, time: "13:45–14:30", topic: "Umgang mit Menschen – Fallbearbeitung" },
          { ue: 919, time: "14:45–15:30", topic: "Umgang mit Verteidigungswaffen – Fallbearbeitung" },
          { ue: 920, time: "15:30–16:15", topic: "Erste Hilfe & Brandschutz – Wiederholung" }
        ]
      },
      {
        weekday: "Mittwoch",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 921, time: "09:00–09:45", topic: "Grundzüge Sicherheitstechnik – Wiederholung" },
          { ue: 922, time: "09:45–10:30", topic: "Unfallverhütungsvorschriften – Wiederholung" },
          { ue: 923, time: "10:45–11:30", topic: "Waffensachkunde – Wiederholung" },
          { ue: 924, time: "11:30–12:15", topic: "Praxisfälle – alle Lernfelder" },
          { ue: 925, time: "13:00–13:45", topic: "Simulation schriftliche Prüfung – Teil 1" },
          { ue: 926, time: "13:45–14:30", topic: "Simulation schriftliche Prüfung – Teil 2" },
          { ue: 927, time: "14:45–15:30", topic: "Simulation mündliche Prüfung – Rollenspiele" },
          { ue: 928, time: "15:30–16:15", topic: "Simulation mündliche Prüfung – Feedback" }
        ]
      },
      {
        weekday: "Donnerstag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 929, time: "09:00–09:45", topic: "Strategien Prüfungsstress – Übungen" },
          { ue: 930, time: "09:45–10:30", topic: "Zeitmanagement & Präsentationstechniken" },
          { ue: 931, time: "10:45–11:30", topic: "Praxisfälle Sicherheitsdienst" },
          { ue: 932, time: "11:30–12:15", topic: "Datenschutz – Praxisfälle" },
          { ue: 933, time: "13:00–13:45", topic: "Bürgerliches Recht – Fallbearbeitung" },
          { ue: 934, time: "13:45–14:30", topic: "Straf- und Strafverfahrensrecht – Fallbearbeitung" },
          { ue: 935, time: "14:45–15:30", topic: "Gewerberecht – Fallbearbeitung" },
          { ue: 936, time: "15:30–16:15", topic: "Umgang mit Menschen – Fallbearbeitung" }
        ]
      },
      {
        weekday: "Freitag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 937, time: "09:00–09:45", topic: "Umgang mit Verteidigungswaffen – Praxisfälle" },
          { ue: 938, time: "09:45–10:30", topic: "Erste Hilfe – Praxisfälle" },
          { ue: 939, time: "10:45–11:30", topic: "Brandschutz & Evakuierung – Praxisfälle" },
          { ue: 940, time: "11:30–12:15", topic: "Grundzüge Sicherheitstechnik – Praxisfälle" },
          { ue: 941, time: "13:00–13:45", topic: "Unfallverhütungsvorschriften – Praxisfälle" },
          { ue: 942, time: "13:45–14:30", topic: "Waffensachkunde – Praxisfälle" },
          { ue: 943, time: "14:45–15:30", topic: "Simulation schriftliche Prüfung – Wiederholung" },
          { ue: 944, time: "15:30–16:15", topic: "Simulation mündliche Prüfung – Wiederholung" }
        ]
      },
      {
        weekday: "Montag",
        module: "Prüfungsvorbereitung",
        units: [
          { ue: 945, time: "09:00–09:45", topic: "Zusammenfassung aller Lernfelder – offene Fragen" },
          { ue: 946, time: "09:45–10:30", topic: "Prüfungssimulation schriftlich – letzte Übung" },
          { ue: 947, time: "10:45–11:30", topic: "Prüfungssimulation mündlich – letzte Übung" },
          { ue: 948, time: "11:30–12:15", topic: "Strategien & Tipps Prüfungstag" },
          { ue: 949, time: "13:00–13:45", topic: "Praxisfälle – schwierige Themen" },
          { ue: 950, time: "13:45–14:30", topic: "Praxisfälle – Wiederholung" },
          { ue: 951, time: "14:45–15:30", topic: "Wiederholung aller Lernfelder – offene Fragen" },
          { ue: 952, time: "15:30–16:15", topic: "Abschluss Prüfungsphase – Feedback & letzte Klärungen" }
        ]
      },
      {
        weekday: "Dienstag",
        module: "Prüfungsvorbereitung (Abschluss)",
        units: [
          { ue: 953, time: "09:00–09:45", topic: "Mündliche Prüfungssimulation – Rollenspiel „Rechtsfragen im Sicherheitsdienst“" },
          { ue: 954, time: "09:45–10:30", topic: "Schriftliche Prüfungssimulation – gemischte Themenfelder" },
          { ue: 955, time: "10:45–11:30", topic: "Praxisnahe Fallbearbeitung – Kundenkommunikation & Deeskalation" },
          { ue: 956, time: "11:30–12:15", topic: "Praktische Prüfungssimulation – Sicherheits- und Dienstkunde" },
          { ue: 957, time: "13:00–13:45", topic: "Feedbackrunde zur mündlichen und schriftlichen Prüfung" },
          { ue: 958, time: "13:45–14:30", topic: "Wiederholung: häufige Fehlerquellen in der Prüfung & Tipps zur Selbstorganisation" },
          { ue: 959, time: "14:45–15:30", topic: "Abschlussgespräch – Reflexion über den Lernfortschritt und Berufsbild" },
          { ue: 960, time: "15:30–16:15", topic: "Offizieller Ausbildungsabschluss – Auswertung, Zertifikatsübergabe, Feedbackrunde" }
        ]
      }
    ]
  }
];
const data = {
  trainers: [
    {
      id: "koch",
      name: "Herr Koch",
      courses: [
        {
          id: "koch-3m-2025-10-13",
          label: "3 Monate · Start 13.10.",
          type: "3 Monate",
          startDate: "2025-10-13",
          weeks: [
            {
  id: 1,
  label: "Woche 1",
  days: [
    {
      // Montag, 13.10. – Öffentliche Sicherheit & Ordnung
      weekday: "Montag",
        module: "Recht der öffentlichen Sicherheit und Ordnung",
        units: [
          { ue: 1, time: "09:00–09:45", topic: "Begrüßung und Einweisung in den Ablauf der Maßnahme" },
          { ue: 2, time: "09:45–10:30", topic: "Erläuterung der Maßnahme, der Hausordnung und allgemeine Regeln" },
          { ue: 3, time: "10:45–11:30", topic: "Einweisung in das Lernportal, Jobbörse sowie Lehrmaterial" },
          { ue: 4, time: "11:30–12:15", topic: "Einweisung in das Lernportal, Jobbörse sowie Lehrmaterial" },
          { ue: 5, time: "13:00–13:45", topic: "Polizei & Ordnungsbehörden – Zuständigkeiten und Aufgaben" },
          { ue: 6, time: "13:45–14:30", topic: "Gewaltenteilung – Exekutive & Judikative Legislative" },
          { ue: 7, time: "14:45–15:30", topic: "Aufbau der BRD – Bund Länder Kommunen" },
          { ue: 8, time: "15:30–16:15", topic: "Staatsgewalten & deren Kompetenzen" }
      ]
    },

    {
      // Dienstag, 14.10. – Öffentliche Sicherheit & Ordnung
      weekday: "Dienstag",
      module: "Öffentliche Sicherheit & Ordnung",
      units: [
        { ue: 9,  time: "09:00–09:45", topic: "Grundgesetz – Bedeutung & Entstehung" },
        { ue: 10, time: "09:45–10:30", topic: "Grundgesetz – Artikelübersicht" },
        { ue: 11, time: "10:45–11:30", topic: "Ewigkeitsklausel" },
        { ue: 12, time: "11:30–12:15", topic: "Drittwirkung des Grundgesetzes" },
        { ue: 13, time: "13:00–13:45", topic: "Gefahrenabwehr – Grundlagen" },
        { ue: 14, time: "13:45–14:30", topic: "Gefahrenabwehr – präventive Maßnahmen" },
        { ue: 15, time: "14:45–15:30", topic: "Zuständigkeiten bei Störungen" },
        { ue: 16, time: "15:30–16:15", topic: "Zuständigkeiten bei Störungen" }
      ]
    },

    {
      // Mittwoch, 15.10. – Öffentliche Sicherheit & Ordnung
      weekday: "Mittwoch",
      module: "Öffentliche Sicherheit & Ordnung",
      units: [
        { ue: 17, time: "09:00–09:45", topic: "Zusammenarbeit Sicherheitsdienst – Polizei" },
        { ue: 18, time: "09:45–10:30", topic: "Zusammenarbeit mit Kommunen" },
        { ue: 19, time: "10:45–11:30", topic: "Dokumentation – Grundlagen" },
        { ue: 20, time: "11:30–12:15", topic: "Berichterstattung – Fallbeispiele" },
        { ue: 21, time: "13:00–13:45", topic: "Eingriffs- & Handlungsmöglichkeiten – Theorie" },
        { ue: 22, time: "13:45–14:30", topic: "Eingriffs- & Handlungsmöglichkeiten – Praxis" },
        { ue: 23, time: "14:45–15:30", topic: "Wiederholung Modul 1 – Teil 1" },
        { ue: 24, time: "15:30–16:15", topic: "Wiederholung Modul 1 – Teil 2" }
      ]
    },

    {
      // Donnerstag, 16.10. – Öffentliche Sicherheit & Ordnung
      weekday: "Donnerstag",
      module: "Öffentliche Sicherheit & Ordnung",
      units: [
        { ue: 25, time: "09:00–09:45", topic: "Zusammenfassung GG & Gewaltenteilung" },
        { ue: 26, time: "09:45–10:30", topic: "Vertiefung Gefahrenabwehr" },
        { ue: 27, time: "10:45–11:30", topic: "Vertiefung Zuständigkeiten" },
        { ue: 28, time: "11:30–12:15", topic: "Rollenspiel – Sicherheitslage" },
        { ue: 29, time: "13:00–13:45", topic: "Praxisübungen – Dokumentation" },
        { ue: 30, time: "13:45–14:30", topic: "Praxisübungen – Eingriffsrechte" },
        { ue: 31, time: "14:45–15:30", topic: "Wiederholung aller Inhalte" },
        { ue: 32, time: "15:30–16:15", topic: "Lernzielkontrolle Modul 1" }
      ]
    },

    {
      // Freitag, 17.10. – Gewerberecht
      weekday: "Freitag",
      module: "Gewerberecht",
      units: [
        { ue: 33, time: "09:00–09:45", topic: "§34a GewO – Grundlagen" },
        { ue: 34, time: "09:45–10:30", topic: "§34a GewO – Befugnisse" },
        { ue: 35, time: "10:45–11:30", topic: "Bewachungsunternehmen – Pflichten" },
        { ue: 36, time: "11:30–12:15", topic: "Mitarbeiter – Voraussetzungen" },
        { ue: 37, time: "13:00–13:45", topic: "Bewacherregister" },
        { ue: 38, time: "13:45–14:30", topic: "Antragsstellung – Praxisbeispiele" },
        { ue: 39, time: "14:45–15:30", topic: "Sachkundeprüfung & U40" },
        { ue: 40, time: "15:30–16:15", topic: "Befreiung & Tätigkeitsfelder" }
      ]
    }
  ]
},

           {
  id: 2,
  label: "Woche 2",
  days: [
    {
      // Montag, 20.10. – Gewerberecht
      weekday: "Montag",
      module: "Gewerberecht",
      units: [
        { ue: 41, time: "09:00–09:45", topic: "Gewerbeordnung – Anzeigepflicht §14" },
        { ue: 42, time: "09:45–10:30", topic: "Gewerbeordnung – Auskunft & Nachschau §29" },
        { ue: 43, time: "10:45–11:30", topic: "Bewachungsverordnung §§14 & 15" },
        { ue: 44, time: "11:30–12:15", topic: "Bewachungsverordnung §§17–18" },
        { ue: 45, time: "13:00–13:45", topic: "Bewachungsverordnung §§19–21" },
        { ue: 46, time: "13:45–14:30", topic: "Aufsichtspflichten & Kontrollmechanismen" },
        { ue: 47, time: "14:45–15:30", topic: "Konsequenzen bei Verstößen" },
        { ue: 48, time: "15:30–16:15", topic: "Anmeldung von Tätigkeiten & Dokumentationspflichten" }
      ]
    },

    {
      // Dienstag, 21.10. – Bürgerliches Recht (BGB)
      weekday: "Dienstag",
      module: "Bürgerliches Recht (BGB)",
      units: [
        { ue: 49, time: "09:00–09:45", topic: "Grundlagen BGB – Fundrecht" },
        { ue: 50, time: "09:45–10:30", topic: "Privatrecht – Abgrenzung" },
        { ue: 51, time: "10:45–11:30", topic: "Rechtsfähigkeit – Beginn & Ende" },
        { ue: 52, time: "11:30–12:15", topic: "Schikaneverbot" },
        { ue: 53, time: "13:00–13:45", topic: "Gefährdungshaftung – Einführung" },
        { ue: 54, time: "13:45–14:30", topic: "Verschuldensunabhängige Haftung" },
        { ue: 55, time: "14:45–15:30", topic: "Verschuldensabhängige Haftung" },
        { ue: 56, time: "15:30–16:15", topic: "Praxisbeispiele Haftung" }
      ]
    },

    {
      // Mittwoch, 22.10. – Bürgerliches Recht (BGB)
      weekday: "Mittwoch",
      module: "Bürgerliches Recht (BGB)",
      units: [
        { ue: 57, time: "09:00–09:45", topic: "Besitz & Eigentum" },
        { ue: 58, time: "09:45–10:30", topic: "Besitzdiener" },
        { ue: 59, time: "10:45–11:30", topic: "Sachen & Tiere" },
        { ue: 60, time: "11:30–12:15", topic: "Besitz & übertragene Rechte" },
        { ue: 61, time: "13:00–13:45", topic: "Vertragsrecht – Grundlagen" },
        { ue: 62, time: "13:45–14:30", topic: "Vertragsabschluss" },
        { ue: 63, time: "14:45–15:30", topic: "Rechte & Pflichten aus Verträgen" },
        { ue: 64, time: "15:30–16:15", topic: "Vertragsverletzungen" }
      ]
    },

    {
      // Donnerstag, 23.10. – Bürgerliches Recht (BGB)
      weekday: "Donnerstag",
      module: "Bürgerliches Recht (BGB)",
      units: [
        { ue: 65, time: "09:00–09:45", topic: "Schadensersatz – Grundlagen" },
        { ue: 66, time: "09:45–10:30", topic: "Haftung – Grenzen privater Eingriffe" },
        { ue: 67, time: "10:45–11:30", topic: "Unerlaubte Handlung" },
        { ue: 68, time: "11:30–12:15", topic: "Folgen unerlaubter Handlung" },
        { ue: 69, time: "13:00–13:45", topic: "Abgrenzung rechtmäßiges Handeln" },
        { ue: 70, time: "13:45–14:30", topic: "Abgrenzung strafbare Handlung" },
        { ue: 71, time: "14:45–15:30", topic: "Praxisbeispiel: Hausrecht" },
        { ue: 72, time: "15:30–16:15", topic: "Praxisbeispiel: Zutrittskontrollen" }
      ]
    },

    {
      // Freitag, 24.10. – Bürgerliches Recht (BGB)
      weekday: "Freitag",
      module: "Bürgerliches Recht (BGB)",
      units: [
        { ue: 73, time: "09:00–09:45", topic: "Jedermannsrechte nach BGB – Einführung" },
        { ue: 74, time: "09:45–10:30", topic: "§227 Notwehr & §228 Verteidigungsnotstand" },
        { ue: 75, time: "10:45–11:30", topic: "§229 Selbsthilfe & §859 Selbsthilfe des Besitzers" },
        { ue: 76, time: "11:30–12:15", topic: "§860 Selbsthilfe des Besitzdieners & §904 Angriffsnotstand" },
        { ue: 77, time: "13:00–13:45", topic: "Praxisbeispiel: Eingreifen in Notfällen" },
        { ue: 78, time: "13:45–14:30", topic: "Rollenspiel – Zutrittskontrolle mit Konflikt" },
        { ue: 79, time: "14:45–15:30", topic: "Wiederholung & Zusammenfassung BGB" },
        { ue: 80, time: "15:30–16:15", topic: "Lernzielkontrolle – BGB" }
      ]
    }
  ]
},


            // Platzhalter für weitere Wochen des 3-Monats-Kurses:
           {
  id: 3,
  label: "Woche 3",
  days: [
    {
      // Montag, 27.10. – Bürgerliches Recht (BGB)
      weekday: "Montag",
      module: "Bürgerliches Recht (BGB)",
      units: [
        { ue: 81, time: "09:00–09:45", topic: "Jedermannsrechte – Übersicht StGB/BGB" },
        { ue: 82, time: "09:45–10:30", topic: "Praxisbeispiele Sicherheitsdienst – Hausrecht" },
        { ue: 83, time: "10:45–11:30", topic: "Praxisbeispiele Zutrittskontrollen" },
        { ue: 84, time: "11:30–12:15", topic: "Eingreifen in Notfallsituationen" },
        { ue: 85, time: "13:00–13:45", topic: "Jedermannsrechte – Rollenspiele" },
        { ue: 86, time: "13:45–14:30", topic: "Fallanalyse – Notwehr / Selbsthilfe" },
        { ue: 87, time: "14:45–15:30", topic: "Abgrenzung rechtmäßiges Handeln vs. strafbare Handlung" },
        { ue: 88, time: "15:30–16:15", topic: "Wiederholung & Lernzielkontrolle Modul 3" }
      ]
    },

    {
      // Dienstag, 28.10. – Straf- & Strafverfahrensrecht
      weekday: "Dienstag",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 89, time: "09:00–09:45", topic: "Materielles Strafrecht – Tatbestand" },
        { ue: 90, time: "09:45–10:30", topic: "Schuld, Vorsatz, Fahrlässigkeit" },
        { ue: 91, time: "10:45–11:30", topic: "Versuch, Rechtsfolgen" },
        { ue: 92, time: "11:30–12:15", topic: "Aufbau Straftat – Tatbestandsmerkmale" },
        { ue: 93, time: "13:00–13:45", topic: "Rechtswidrigkeit & Schuld" },
        { ue: 94, time: "13:45–14:30", topic: "Verbrechen vs. Vergehen – Unterschiede & Beispiele" },
        { ue: 95, time: "14:45–15:30", topic: "Garantenstellung – Pflichten zur Abwendung von Schäden" },
        { ue: 96, time: "15:30–16:15", topic: "Echtes und unechtes Unterlassungsdelikt" }
      ]
    },

    {
      // Mittwoch, 29.10. – Straf- & Strafverfahrensrecht
      weekday: "Mittwoch",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 97,  time: "09:00–09:45", topic: "Strafverfahrensrecht – Ablauf eines Verfahrens" },
        { ue: 98,  time: "09:45–10:30", topic: "Rechte & Pflichten Beschuldigter" },
        { ue: 99,  time: "10:45–11:30", topic: "Rechte & Pflichten Zeugen" },
        { ue: 100, time: "11:30–12:15", topic: "Aufbau StGB – Allgemeiner & Besonderer Teil" },
        { ue: 101, time: "13:00–13:45", topic: "Nebengesetze (StPO, BtMG, JuSchG)" },
        { ue: 102, time: "13:45–14:30", topic: "Besonderer Teil StGB – Diebstahl §§242, 243" },
        { ue: 103, time: "14:45–15:30", topic: "Diebstahl mit Waffen / Bandendiebstahl §244" },
        { ue: 104, time: "15:30–16:15", topic: "Unterschlagung §§246, 248a" }
      ]
    },

    {
      // Donnerstag, 30.10. – Straf- & Strafverfahrensrecht
      weekday: "Donnerstag",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 105, time: "09:00–09:45", topic: "Raub §249, Räuberischer Diebstahl §252" },
        { ue: 106, time: "09:45–10:30", topic: "Erpressung §253" },
        { ue: 107, time: "10:45–11:30", topic: "Hehlerei §259" },
        { ue: 108, time: "11:30–12:15", topic: "Betrug §§263, 263a" },
        { ue: 109, time: "13:00–13:45", topic: "Untreue §266 / Veruntreuung §265a" },
        { ue: 110, time: "13:45–14:30", topic: "Körperverletzung §223" },
        { ue: 111, time: "14:45–15:30", topic: "Sachbeschädigung §303" },
        { ue: 112, time: "15:30–16:15", topic: "Brandstiftung §306" }
      ]
    },

    {
      // Freitag, 31.10. – Prüfungstag
      weekday: "Freitag",
      module: "Prüfungstag – Straf- & Zivilrecht",
      units: [
        { ue: 113, time: "09:00–09:45", topic: "Schadensersatz §281, Unterlassungsdelikte §323c" },
        { ue: 114, time: "09:45–10:30", topic: "Notwehr §§32, 34, 35" },
        { ue: 115, time: "10:45–11:30", topic: "Verhältnismäßigkeit & Erforderlichkeit" },
        { ue: 116, time: "11:30–12:15", topic: "StPO – Rechte & Pflichten Sicherheitskraft" },
        { ue: 117, time: "13:00–13:45", topic: "Festnahme durch Privatperson §127 StPO" },
        { ue: 118, time: "13:45–14:30", topic: "Beweissicherung & Anzeigeerstattung" },
        { ue: 119, time: "14:45–15:30", topic: "Praxisfallanalyse / Simulationen" },
        { ue: 120, time: "15:30–16:15", topic: "Besprechung schriftliche Übung / Lernzielkontrolle" }
      ]
    }
  ]
},

            {
  id: 4,
  label: "Woche 4",
  days: [
    {
      // Montag, 03.11. – Straf- & Strafverfahrensrecht
      weekday: "Montag",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 121, time: "09:00–09:45", topic: "Notwehr & rechtfertigender Notstand §§32, 34" },
        { ue: 122, time: "09:45–10:30", topic: "Aggressiver Notstand §35" },
        { ue: 123, time: "10:45–11:30", topic: "Verhältnismäßigkeit & Erforderlichkeit in Jedermannsrechten" },
        { ue: 124, time: "11:30–12:15", topic: "Fallbeispiele Notwehr / Notstand" },
        { ue: 125, time: "13:00–13:45", topic: "StPO – Rechte & Pflichten der Sicherheitskraft" },
        { ue: 126, time: "13:45–14:30", topic: "Festnahme durch Privatperson §127 StPO" },
        { ue: 127, time: "14:45–15:30", topic: "Beweissicherung & Anzeigeerstattung" },
        { ue: 128, time: "15:30–16:15", topic: "Praxisbeispiele – Strafverfahren" }
      ]
    },

    {
      // Dienstag, 04.11. – Straf- & Strafverfahrensrecht
      weekday: "Dienstag",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 129, time: "09:00–09:45", topic: "Computerbetrug, Untreue, Veruntreuung (Vertiefung)" },
        { ue: 130, time: "09:45–10:30", topic: "Körperverletzung, Sachbeschädigung (Vertiefung)" },
        { ue: 131, time: "10:45–11:30", topic: "Raub, Erpressung, Hehlerei (Vertiefung)" },
        { ue: 132, time: "11:30–12:15", topic: "Betrug §263 / Computerbetrug §263a (Fallanalyse)" },
        { ue: 133, time: "13:00–13:45", topic: "Praxisfall – Diebstahl & Unterschlagung" },
        { ue: 134, time: "13:45–14:30", topic: "Praxisfall – Brandstiftung & Schadensersatz" },
        { ue: 135, time: "14:45–15:30", topic: "Rollenspiel – Strafverfolgung" },
        { ue: 136, time: "15:30–16:15", topic: "Lernzielkontrolle Modul 4 Teil 1" }
      ]
    },

    {
      // Mittwoch, 05.11. – Straf- & Strafverfahrensrecht
      weekday: "Mittwoch",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 137, time: "09:00–09:45", topic: "Praxisübungen: Notwehr / Notstand" },
        { ue: 138, time: "09:45–10:30", topic: "Praxisübungen: Festnahme §127 StPO" },
        { ue: 139, time: "10:45–11:30", topic: "Beweissicherung & Anzeigeerstattung" },
        { ue: 140, time: "11:30–12:15", topic: "Fallanalyse – Unterlassungsdelikte §323c" },
        { ue: 141, time: "13:00–13:45", topic: "Aggressiver vs. rechtfertigender Notstand" },
        { ue: 142, time: "13:45–14:30", topic: "Verhältnismäßigkeit / Erforderlichkeit" },
        { ue: 143, time: "14:45–15:30", topic: "Praxis: Simulation Notfallsituationen" },
        { ue: 144, time: "15:30–16:15", topic: "Wiederholung & Lernzielkontrolle" }
      ]
    },

    {
      // Donnerstag, 06.11. – Straf- & Strafverfahrensrecht
      weekday: "Donnertag",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 145, time: "09:00–09:45", topic: "Rechte & Pflichten Sicherheitskraft – Fallanalyse" },
        { ue: 146, time: "09:45–10:30", topic: "Praxis – Anzeigeerstattung" },
        { ue: 147, time: "10:45–11:30", topic: "Notwehr / Notstand – Vertiefung" },
        { ue: 148, time: "11:30–12:15", topic: "Fallbeispiele aus Sicherheitsdienst" },
        { ue: 149, time: "13:00–13:45", topic: "Praxis: Dokumentation & Berichterstattung" },
        { ue: 150, time: "13:45–14:30", topic: "Rollenspiel – Konfliktsituationen" },
        { ue: 151, time: "14:45–15:30", topic: "Prüfungsvorbereitung – Strafrecht" },
        { ue: 152, time: "15:30–16:15", topic: "Zusammenfassung Strafrecht" }
      ]
    },

    {
      // Freitag, 07.11. – Straf- & Strafverfahrensrecht
      weekday: "Freitag",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 153, time: "09:00–09:45", topic: "Simulation Strafverfahren – schriftliche Übung" },
        { ue: 154, time: "09:45–10:30", topic: "Besprechung schriftliche Übung" },
        { ue: 155, time: "10:45–11:30", topic: "Praxis – Notwehr / Notstand" },
        { ue: 156, time: "11:30–12:15", topic: "Praxis – Festnahme §127 StPO" },
        { ue: 157, time: "13:00–13:45", topic: "Praxis – Anzeige & Beweissicherung" },
        { ue: 158, time: "13:45–14:30", topic: "Vertiefung Fallanalyse" },
        { ue: 159, time: "14:45–15:30", topic: "Besprechung & Rückmeldung" },
        { ue: 160, time: "15:30–16:15", topic: "Lernzielkontrolle Strafrecht" }
      ]
    }
  ]
},

            {
  id: 5,
  label: "Woche 5",
  days: [
    {
      // Montag, 10.11. – Straf- & Strafverfahrensrecht
      weekday: "Montag",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 161, time: "09:00–09:45", topic: "Wiederholung – Materielles Strafrecht" },
        { ue: 162, time: "09:45–10:30", topic: "Wiederholung – Aufbau einer Straftat" },
        { ue: 163, time: "10:45–11:30", topic: "Fallanalysen – Unterlassungsdelikte / Notwehr" },
        { ue: 164, time: "11:30–12:15", topic: "Fallanalyse – Notstand & Verhältnismäßigkeit" },
        { ue: 165, time: "13:00–13:45", topic: "Rollenspiel – Festnahme durch Privatperson §127 StPO" },
        { ue: 166, time: "13:45–14:30", topic: "Dokumentation & Berichterstattung" },
        { ue: 167, time: "14:45–15:30", topic: "Lernzielkontrolle Strafrecht" },
        { ue: 168, time: "15:30–16:15", topic: "Strafrecht Abschlussbesprechung" }
      ]
    },

    {
      // Dienstag, 11.11. – Jedermannsrechte – Ausnahmerechte
      weekday: "Dienstag",
      module: "Jedermannsrechte – Ausnahmerechte",
      units: [
        { ue: 169, time: "09:00–09:45", topic: "Einführung in Jedermannsrechte" },
        { ue: 170, time: "09:45–10:30", topic: "Abgrenzung Rechtfertigungs- und Entschuldigungsgründe" },
        { ue: 171, time: "10:45–11:30", topic: "Festnahmerechte §127 (1) StPO / §229 BGB" },
        { ue: 172, time: "11:30–12:15", topic: "Jedermannsrechte StGB §§32, 33, 34, 35" },
        { ue: 173, time: "13:00–13:45", topic: "Jedermannsrechte BGB §§227, 228, 859, 860, 904" },
        { ue: 174, time: "13:45–14:30", topic: "Jedermannsrechte OWiG §15" },
        { ue: 175, time: "14:45–15:30", topic: "Theoretische Übungen – Eingriffsrechte" },
        { ue: 176, time: "15:30–16:15", topic: "Rollenspiele – Notwehrsituationen & Selbsthilfe" }
      ]
    },

    {
      // Mittwoch, 12.11. – Jedermannsrechte – Ausnahmerechte
      weekday: "Mittwoch",
      module: "Jedermannsrechte – Ausnahmerechte",
      units: [
        { ue: 177, time: "09:00–09:45", topic: "Rollenspiele – Festnahme & Selbsthilfe" },
        { ue: 178, time: "09:45–10:30", topic: "Praxisübungen – Eingriffsrechte & Notwehrsituationen" },
        { ue: 179, time: "10:45–11:30", topic: "Fallbeispiele – Sicherheitsdienst / Zutrittskontrollen" },
        { ue: 180, time: "11:30–12:15", topic: "Dokumentation & Berichterstattung" },
        { ue: 181, time: "13:00–13:45", topic: "Besprechung der Rollenspiele / Reflexion" },
        { ue: 182, time: "13:45–14:30", topic: "Lernzielkontrolle Jedermannsrechte" },
        { ue: 183, time: "14:45–15:30", topic: "Feedback & offene Fragen Jedermannsrechte" },
        { ue: 184, time: "15:30–16:15", topic: "Zusammenfassung & Wiederholung Jedermannsrechte" }
      ]
    },

    {
      // Donnerstag, 13.11. – Datenschutz
      weekday: "Donnerstag",
      module: "Datenschutz",
      units: [
        { ue: 185, time: "09:00–09:45", topic: "Grundlagen DSGVO & BDSG, Rechte Betroffener" },
        { ue: 186, time: "09:45–10:30", topic: "Datenschutz bei Videoüberwachung & Zutrittskontrollen" },
        { ue: 187, time: "10:45–11:30", topic: "Datenerfassung & Speicherung" },
        { ue: 188, time: "11:30–12:15", topic: "Schweigepflicht, Datenweitergabe, Dokumentationspflichten" },
        { ue: 189, time: "13:00–13:45", topic: "Zusammenhang Datenschutz & StGB" },
        { ue: 190, time: "13:45–14:30", topic: "Aufgaben & Voraussetzungen Datenschutzbeauftragter" },
        { ue: 191, time: "14:45–15:30", topic: "Technische Maßnahmen – Zugriffskontrollen & Verschlüsselung" },
        { ue: 192, time: "15:30–16:15", topic: "Organisatorische Maßnahmen – Protokollierung & Datensicherung" }
      ]
    },

    {
      // Freitag, 14.11. – Datenschutz
      weekday: "Freitag",
      module: "Datenschutz",
      units: [
        { ue: 193, time: "09:00–09:45", topic: "Updates & Mitarbeiterschulung" },
        { ue: 194, time: "09:45–10:30", topic: "Praktische Übungen Datensicherung" },
        { ue: 195, time: "10:45–11:30", topic: "Fallbeispiele aus Sicherheitsdienst" },
        { ue: 196, time: "11:30–12:15", topic: "Übung – Datenschutz bei Zutrittskontrollen" },
        { ue: 197, time: "13:00–13:45", topic: "Dokumentation & Berichterstattung" },
        { ue: 198, time: "13:45–14:30", topic: "Rollenspiel – Datenschutzkonflikt" },
        { ue: 199, time: "14:45–15:30", topic: "Wiederholung & Lernzielkontrolle Datenschutz" },
        { ue: 200, time: "15:30–16:15", topic: "Abschlussbesprechung Datenschutz" }
      ]
    }
  ]
},

            {
  id: 6,
  label: "Woche 6",
  days: [
    {
      // Montag, 17.11. – Umgang mit Menschen
      weekday: "Montag",
      module: "Umgang mit Menschen",
      units: [
        { ue: 201, time: "09:00–09:45", topic: "Einführung – Bedürfnisse, Motive, Motivation" },
        { ue: 202, time: "09:45–10:30", topic: "Selbstwertgefühl & Wahrnehmung" },
        { ue: 203, time: "10:45–11:30", topic: "Diversität & Vorurteile" },
        { ue: 204, time: "11:30–12:15", topic: "Menschenkenntnis & erster Eindruck" },
        { ue: 205, time: "13:00–13:45", topic: "Verhalten des Menschen & Steuerung" },
        { ue: 206, time: "13:45–14:30", topic: "Interkulturelle Kompetenz" },
        { ue: 207, time: "14:45–15:30", topic: "Kommunikationsarten & Modelle" },
        { ue: 208, time: "15:30–16:15", topic: "Eisberg-Modell – Sachebene / Beziehungsebene" }
      ]
    },

    {
      // Dienstag, 18.11. – Umgang mit Menschen
      weekday: "Dienstag",
      module: "Umgang mit Menschen",
      units: [
        { ue: 209, time: "09:00–09:45", topic: "Gesprächstechniken: Schallplatte mit Sprung, Vernebelung" },
        { ue: 210, time: "09:45–10:30", topic: "Kommunikationsabstände" },
        { ue: 211, time: "10:45–11:30", topic: "Maslow-Pyramide" },
        { ue: 212, time: "11:30–12:15", topic: "Stress und Auswirkung auf Gesundheit" },
        { ue: 213, time: "13:00–13:45", topic: "Frustration, Aggression, Resignation & Zusammenhang" },
        { ue: 214, time: "13:45–14:30", topic: "Deeskalation, Konflikte & Konfliktlösung" },
        { ue: 215, time: "14:45–15:30", topic: "Aktives Zuhören, Sender & Empfänger" },
        { ue: 216, time: "15:30–16:15", topic: "Gruppen, Menschenmengen, Menschenmassen" }
      ]
    },

    {
      // Mittwoch, 19.11. – Umgang mit Menschen
      weekday: "Mittwoch",
      module: "Umgang mit Menschen",
      units: [
        { ue: 217, time: "09:00–09:45", topic: "Besonderheiten & Verhaltensweisen besonderer Personengruppen" },
        { ue: 218, time: "09:45–10:30", topic: "Jugendliche, Betrunkene, Drogenabhängige, Senioren" },
        { ue: 219, time: "10:45–11:30", topic: "Massenpsychologische Phänomene" },
        { ue: 220, time: "11:30–12:15", topic: "Massenpanik, Panikarten & Verhaltensweisen" },
        { ue: 221, time: "13:00–13:45", topic: "Besonderheiten Großveranstaltungen" },
        { ue: 222, time: "13:45–14:30", topic: "Besonderheiten Flüchtlingsunterkünfte" },
        { ue: 223, time: "14:45–15:30", topic: "Praxisbeispiele Sicherheitsdienst" },
        { ue: 224, time: "15:30–16:15", topic: "Fallanalysen & Diskussion" }
      ]
    },

    {
      // Donnerstag, 20.11. – Umgang mit Menschen
      weekday: "Donnerstag",
      module: "Umgang mit Menschen",
      units: [
        { ue: 225, time: "09:00–09:45", topic: "Kommunikationsübungen – Rollenspiele" },
        { ue: 226, time: "09:45–10:30", topic: "Konfliktmanagement in Gruppen" },
        { ue: 227, time: "10:45–11:30", topic: "Deeskalationsstrategien" },
        { ue: 228, time: "11:30–12:15", topic: "Praxis: Intervention bei Konflikten" },
        { ue: 229, time: "13:00–13:45", topic: "Simulationen – Menschenmengensteuerung" },
        { ue: 230, time: "13:45–14:30", topic: "Beobachtung & Verhaltenstraining" },
        { ue: 231, time: "14:45–15:30", topic: "Reflexion & Feedback" },
        { ue: 232, time: "15:30–16:15", topic: "Besprechung – Rollenspielauswertung" }
      ]
    },

    {
      // Freitag, 21.11. – Umgang mit Menschen
      weekday: "Freitag",
      module: "Umgang mit Menschen",
      units: [
        { ue: 233, time: "09:00–09:45", topic: "Wiederholung – Bedürfnisse & Motivation" },
        { ue: 234, time: "09:45–10:30", topic: "Wiederholung – Kommunikationsarten & Eisberg-Modell" },
        { ue: 235, time: "10:45–11:30", topic: "Praxisbeispiele – Konfliktbewältigung" },
        { ue: 236, time: "11:30–12:15", topic: "Fallanalyse – Menschenmassensteuerung" },
        { ue: 237, time: "13:00–13:45", topic: "Lernzielkontrolle Umgang mit Menschen" },
        { ue: 238, time: "13:45–14:30", topic: "Besprechung der Ergebnisse" },
        { ue: 239, time: "14:45–15:30", topic: "Feedback & offene Fragen" },
        { ue: 240, time: "15:30–16:15", topic: "Zusammenfassung Umgang mit Menschen" }
      ]
    }
  ]
},

           {
  id: 7,
  label: "Woche 7",
  days: [
    {
      // Montag, 24.11. – Umgang mit Verteidigungswaffen
      weekday: "Montag",
      module: "Umgang mit Verteidigungswaffen",
      units: [
        { ue: 241, time: "09:00–09:45", topic: "Einführung – Waffengesetz (WaffG) §§1–10, 25, 27, 42" },
        { ue: 242, time: "09:45–10:30", topic: "Bewachungsverordnung (BewachV)" },
        { ue: 243, time: "10:45–11:30", topic: "Grenzen der Notwehr und des Notstands (§§32, 34 StGB)" },
        { ue: 244, time: "11:30–12:15", topic: "Haftung, straf- und zivilrechtliche Folgen unsachgemäßen Einsatzes" },
        { ue: 245, time: "13:00–13:45", topic: "Besitz: Wer eine Schusswaffe rechtmäßig besitzt (§§14–17 WaffG)" },
        { ue: 246, time: "13:45–14:30", topic: "Erwerb: Erwerbsvoraussetzungen, Genehmigungen (§§21–23 WaffG)" },
        { ue: 247, time: "14:45–15:30", topic: "Führen: Transport & Mitführen im öffentlichen Raum (§§25–27 WaffG)" },
        { ue: 248, time: "15:30–16:15", topic: "Verbotene Waffen: Definitionen, Beispiele" }
      ]
    },

    {
      // Dienstag, 25.11. – Umgang mit Verteidigungswaffen
      weekday: "Dienstag",
      module: "Umgang mit Verteidigungswaffen",
      units: [
        { ue: 249, time: "09:00–09:45", topic: "Arten von Verteidigungswaffen" },
        { ue: 250, time: "09:45–10:30", topic: "Praktische Handhabung – Sicherheitsregeln" },
        { ue: 251, time: "10:45–11:30", topic: "Praktische Übungen – Handhabung und Einsatzlimits" },
        { ue: 252, time: "11:30–12:15", topic: "Rollenspiele – Einsatz im Bewachungsdienst" },
        { ue: 253, time: "13:00–13:45", topic: "Rechtliche Grenzen beim Einsatz von Verteidigungswaffen" },
        { ue: 254, time: "13:45–14:30", topic: "Dokumentation von Vorfällen mit Verteidigungswaffen" },
        { ue: 255, time: "14:45–15:30", topic: "Fallbeispiele – Einsatzanalyse" },
        { ue: 256, time: "15:30–16:15", topic: "Besprechung & Feedback" }
      ]
    },

    {
      // Mittwoch, 26.11. – Umgang mit Verteidigungswaffen
      weekday: "Mittwoch",
      module: "Umgang mit Verteidigungswaffen",
      units: [
        { ue: 257, time: "09:00–09:45", topic: "Wiederholung – Waffengesetz & Bewachungsverordnung" },
        { ue: 258, time: "09:45–10:30", topic: "Praxisübungen – Handhabung & Einsatz" },
        { ue: 259, time: "10:45–11:30", topic: "Simulation – Notwehr & Verteidigungswaffen" },
        { ue: 260, time: "11:30–12:15", topic: "Dokumentation & Berichtswesen" },
        { ue: 261, time: "13:00–13:45", topic: "Rollenspiele – Einsatzübungen" },
        { ue: 262, time: "13:45–14:30", topic: "Praxisübungen – Einsatzlimits beachten" },
        { ue: 263, time: "14:45–15:30", topic: "Lernzielkontrolle Umgang mit Verteidigungswaffen" },
        { ue: 264, time: "15:30–16:15", topic: "Besprechung & Feedback" }
      ]
    },

    {
      // Donnerstag, 27.11. – Verteidigungswaffen + Erste Hilfe
      weekday: "Donnerstag",
      module: "Verteidigungswaffen & Erste Hilfe",
      units: [
        { ue: 265, time: "09:00–09:45", topic: "Wiederholung – Umgang mit Verteidigungswaffen" },
        { ue: 266, time: "09:45–10:30", topic: "Fallbeispiele – Einsatz im Sicherheitsdienst" },
        { ue: 267, time: "10:45–11:30", topic: "Besprechung – Praxisübungen & Dokumentation" },
        { ue: 268, time: "11:30–12:15", topic: "Abschlussbesprechung Umgang mit Verteidigungswaffen" },
        { ue: 269, time: "13:00–13:45", topic: "Lebensrettende Sofortmaßnahmen – HLW" },
        { ue: 270, time: "13:45–14:30", topic: "Stabile Seitenlage & Bewusstseinskontrolle" },
        { ue: 271, time: "14:45–15:30", topic: "Umgang mit Blutungen, Schock & Bewusstlosigkeit" },
        { ue: 272, time: "15:30–16:15", topic: "Notfallmanagement & Kommunikation mit Rettungsdiensten" }
      ]
    },

    {
      // Freitag, 28.11. – Erste Hilfe & Evakuierungshelfer
      weekday: "Freitag",
      module: "Erste Hilfe & Evakuierungshelfer",
      units: [
        { ue: 273, time: "09:00–09:45", topic: "Praktische Übungen – HLW & stabile Seitenlage" },
        { ue: 274, time: "09:45–10:30", topic: "Praktische Übungen – Blutungen, Schock & Bewusstlosigkeit" },
        { ue: 275, time: "10:45–11:30", topic: "Fallbeispiele & Notfallmanagement" },
        { ue: 276, time: "11:30–12:15", topic: "Abschlusszertifikat Erste Hilfe & Besprechung" },
        { ue: 277, time: "13:00–13:45", topic: "Brandklassen, Feuerlöscher, Brandverhütung" },
        { ue: 278, time: "13:45–14:30", topic: "Evakuierungspläne, Alarmierungsmaßnahmen, Personenrettung" },
        { ue: 279, time: "14:45–15:30", topic: "Praktische Übungen Brandschutz & Evakuierung" },
        { ue: 280, time: "15:30–16:15", topic: "Abschlussbesprechung & Zertifikat" }
      ]
    }
  ]
},

           {
  id: 8,
  label: "Woche 8",
  days: [
    {
      // Montag, 01.12. – Sicherheitstechnik
      weekday: "Montag",
      module: "Grundzüge der Sicherheitstechnik",
      units: [
        { ue: 281, time: "09:00–09:45", topic: "Einführung Sicherheitstechnik – Aufgaben, Prävention" },
        { ue: 282, time: "09:45–10:30", topic: "Sicherheitsorganisation – Grundlagen" },
        { ue: 283, time: "10:45–11:30", topic: "Drei Säulen der Sicherheit: Einsatz, Inhalt, Zusammenwirken" },
        { ue: 284, time: "11:30–12:15", topic: "Mechanische Sicherungseinrichtungen: Zäune, Gitter, Türen" },
        { ue: 285, time: "13:00–13:45", topic: "Schutzziele von Sicherheitszäunen" },
        { ue: 286, time: "13:45–14:30", topic: "Verschiedene Zaunanlagen" },
        { ue: 287, time: "14:45–15:30", topic: "Widerstandsklassen der Verglasung" },
        { ue: 288, time: "15:30–16:15", topic: "Einfriedungsdurchlässe, automatische Türsysteme, Vereinzelungsanlagen" }
      ]
    },

    {
      // Dienstag, 02.12. – Sicherheitstechnik
      weekday: "Dienstag",
      module: "Grundzüge der Sicherheitstechnik",
      units: [
        { ue: 289, time: "09:00–09:45", topic: "Schlösser & Schließzylinder" },
        { ue: 290, time: "09:45–10:30", topic: "Schließanlagen – Organisation & Sicherheit" },
        { ue: 291, time: "10:45–11:30", topic: "Zutrittskontrollsysteme – Grundlagen" },
        { ue: 292, time: "11:30–12:15", topic: "Praxisbeispiele Zutrittskontrolle" },
        { ue: 293, time: "13:00–13:45", topic: "Elektronische Sicherungseinrichtungen – Gefahrmeldeanlagen" },
        { ue: 294, time: "13:45–14:30", topic: "Videoüberwachungssysteme – Technik & Recht" },
        { ue: 295, time: "14:45–15:30", topic: "Kommunikationsmittel im Sicherheitsdienst" },
        { ue: 296, time: "15:30–16:15", topic: "Aufgabenbereiche Einbruch- & Überfallmeldeanlagen" }
      ]
    },

    {
      // Mittwoch, 03.12. – Sicherheitstechnik
      weekday: "Mittwoch",
      module: "Grundzüge der Sicherheitstechnik",
      units: [
        { ue: 297, time: "09:00–09:45", topic: "Brandmeldeanlagen – Aufbau & Bedeutung" },
        { ue: 298, time: "09:45–10:30", topic: "Störmeldeanlagen – Einsatzbereiche" },
        { ue: 299, time: "10:45–11:30", topic: "Feuer- & Rauchschutzabschlüsse" },
        { ue: 300, time: "11:30–12:15", topic: "Feststellanlagen – Funktionsweise" },
        { ue: 301, time: "13:00–13:45", topic: "Sprachalarmierungs- & Evakuierungsanlagen" },
        { ue: 302, time: "13:45–14:30", topic: "Automatische Löschanlagen" },
        { ue: 303, time: "14:45–15:30", topic: "Bündelfunk – Grundlagen & Einsatz" },
        { ue: 304, time: "15:30–16:15", topic: "Analog vs. digitaler Betriebsfunk" }
      ]
    },

    {
      // Donnerstag, 04.12. – Sicherheitstechnik
      weekday: "Donnerstag",
      module: "Grundzüge der Sicherheitstechnik",
      units: [
        { ue: 305, time: "09:00–09:45", topic: "Mechanische Stechuhr & Wächterkontrollsysteme" },
        { ue: 306, time: "09:45–10:30", topic: "Todmannschalter – Einsatz & Bedeutung" },
        { ue: 307, time: "10:45–11:30", topic: "Notruf- & Serviceleitstellen – Aufbau" },
        { ue: 308, time: "11:30–12:15", topic: "Organisation der Alarmverfolgung" },
        { ue: 309, time: "13:00–13:45", topic: "Prozesse & Verantwortlichkeiten im Notfallplan" },
        { ue: 310, time: "13:45–14:30", topic: "Kommunikationstechnik – Überblick" },
        { ue: 311, time: "14:45–15:30", topic: "Brandschutz – Brandklassen & Feuerlöscher" },
        { ue: 312, time: "15:30–16:15", topic: "Evakuierungspläne & Alarmierungsmaßnahmen" }
      ]
    },

    {
      // Freitag, 05.12. – Sicherheitstechnik
      weekday: "Freitag",
      module: "Grundzüge der Sicherheitstechnik",
      units: [
        { ue: 313, time: "09:00–09:45", topic: "Personenrettung – Grundlagen" },
        { ue: 314, time: "09:45–10:30", topic: "Praxisübung – Feuerlöscher & Rettung" },
        { ue: 315, time: "10:45–11:30", topic: "Sicherheitsorganisation in Betrieben" },
        { ue: 316, time: "11:30–12:15", topic: "Wiederholung & Vertiefung der Sicherheitstechnik" },
        { ue: 317, time: "13:00–13:45", topic: "Abschlussübung – Sicherheitstechnik" },
        { ue: 318, time: "13:45–14:30", topic: "Praktische Fallanalyse" },
        { ue: 319, time: "14:45–15:30", topic: "Modulabschlussprüfung Sicherheitstechnik" },
        { ue: 320, time: "15:30–16:15", topic: "Besprechung & Feedback" }
      ]
    }
  ]
},

            {
  id: 9,
  label: "Woche 9",
  days: [
    {
      weekday: "Montag",
      module: "Unfallverhütungsvorschriften",
      units: [
        { ue: 321, time: "09:00–09:45", topic: "DGUV Vorschrift 1 – Grundsätze der Prävention" },
        { ue: 322, time: "09:45–10:30", topic: "Grundpflichten des Unternehmers (§2)" },
        { ue: 323, time: "10:45–11:30", topic: "Unterweisung der Versicherten (§4)" },
        { ue: 324, time: "11:30–12:15", topic: "Zutritts- und Aufenthaltsverbote (§9)" },
        { ue: 325, time: "13:00–13:45", topic: "Zugang zu Vorschriften & Regeln (§12)" },
        { ue: 326, time: "13:45–14:30", topic: "Erste Hilfe – Pflichten des Unternehmers (§24)" },
        { ue: 327, time: "14:45–15:30", topic: "Erforderliche Einrichtungen & Sachmittel (§25)" },
        { ue: 328, time: "15:30–16:15", topic: "Zahl & Ausbildung der Ersthelfer (§26)" }
      ]
    },

    {
      weekday: "Dienstag",
      module: "Unfallverhütungsvorschriften",
      units: [
        { ue: 329, time: "09:00–09:45", topic: "DGUV Vorschrift 23 – Wach- & Sicherungsdienste" },
        { ue: 330, time: "09:45–10:30", topic: "Dienstanweisung & Arbeitssicherheit" },
        { ue: 331, time: "10:45–11:30", topic: "Verbot berauschender Mittel" },
        { ue: 332, time: "11:30–12:15", topic: "Objektsicherung & besondere Gefahren" },
        { ue: 333, time: "13:00–13:45", topic: "Überprüfung & Objekteinweisung (§9)" },
        { ue: 334, time: "13:45–14:30", topic: "Ausrüstung des Personals (§10), Brillenträger (§11)" },
        { ue: 335, time: "14:45–15:30", topic: "Hunde – Haltung, Führung, Transport (§12–17)" },
        { ue: 336, time: "15:30–16:15", topic: "Schusswaffen – Ausrüstung & Beschusszeichen (§18–19)" }
      ]
    },

    {
      weekday: "Mittwoch",
      module: "Unfallverhütungsvorschriften",
      units: [
        { ue: 337, time: "09:00–09:45", topic: "Führung & Aufbewahrung von Munition (§20–22)" },
        { ue: 338, time: "09:45–10:30", topic: "Eignung (§24) & Geldtransporte (§25–26)" },
        { ue: 339, time: "10:45–11:30", topic: "Führungspflichten & Dokumentation (§16)" },
        { ue: 340, time: "11:30–12:15", topic: "ASR A1.3 – Sicherheits- & Gesundheitsschutzkennzeichnung" },
        { ue: 341, time: "13:00–13:45", topic: "Verbotszeichen, Warnzeichen, Gebotszeichen" },
        { ue: 342, time: "13:45–14:30", topic: "Rettungszeichen, Brandschutzzeichen, Zusatzzeichen" },
        { ue: 343, time: "14:45–15:30", topic: "Grafische Symbole, Farben & deren Bedeutung" },
        { ue: 344, time: "15:30–16:15", topic: "Flucht- & Rettungspläne – Praxis & Übungen" }
      ]
    },

    {
      weekday: "Donnerstag",
      module: "Waffensachkunde §7 WaffG",
      units: [
        { ue: 345, time: "09:00–09:45", topic: "Waffengesetz – Definitionen & Kategorien" },
        { ue: 346, time: "09:45–10:30", topic: "Arten von Waffen – Überblick" },
        { ue: 347, time: "10:45–11:30", topic: "Munition – Klassifizierung & Umgang" },
        { ue: 348, time: "11:30–12:15", topic: "Rechtliche Grundlagen Besitz/Erwerb (§§14–17, 21–23 WaffG)" },
        { ue: 349, time: "13:00–13:45", topic: "Transport & Führen von Schusswaffen (§§25–27 WaffG)" },
        { ue: 350, time: "13:45–14:30", topic: "Aufbewahrungspflichten (§36 WaffG)" },
        { ue: 351, time: "14:45–15:30", topic: "Verbotene Waffen (§2 WaffG) – Beispiele" },
        { ue: 352, time: "15:30–16:15", topic: "BewachV – Regelungen zum Waffeneinsatz" }
      ]
    },

    {
      weekday: "Freitag",
      module: "Waffensachkunde §7 WaffG",
      units: [
        { ue: 353, time: "09:00–09:45", topic: "Grenzen der Notwehr & Notstands (§§32, 34 StGB)" },
        { ue: 354, time: "09:45–10:30", topic: "Haftung, straf- & zivilrechtliche Folgen" },
        { ue: 355, time: "10:45–11:30", topic: "Sicherheitsrelevante Einsatzszenarien" },
        { ue: 356, time: "11:30–12:15", topic: "Fallanalyse Waffenmissbrauch" },
        { ue: 357, time: "13:00–13:45", topic: "Dokumentation & Nachweispflichten" },
        { ue: 358, time: "13:45–14:30", topic: "Kontrollmechanismen & Aufsichtspflichten" },
        { ue: 359, time: "14:45–15:30", topic: "Vorbereitung auf praktische Schulung" },
        { ue: 360, time: "15:30–16:15", topic: "Wiederholung & Quiz" }
      ]
    }
  ]
},

            {
  id: 10,
  label: "Woche 10",
  days: [
    {
      weekday: "Montag",
      module: "Waffensachkunde §7 WaffG",
      units: [
        { ue: 361, time: "09:00–09:45", topic: "Praktische Schulung – Waffenhandhabung (Theorie)" },
        { ue: 362, time: "09:45–10:30", topic: "Sicherheitsvorschriften im Umgang" },
        { ue: 363, time: "10:45–11:30", topic: "Lagerung & Transport praktisch" },
        { ue: 364, time: "11:30–12:15", topic: "Kontrollübung Waffenrecht" },
        { ue: 365, time: "13:00–13:45", topic: "Schießstandordnung – Grundlagen" },
        { ue: 366, time: "13:45–14:30", topic: "Verhalten am Schießstand" },
        { ue: 367, time: "14:45–15:30", topic: "Munition praktisch – Zuweisung & Kontrolle" },
        { ue: 368, time: "15:30–16:15", topic: "Besprechung Tagespraxis" }
      ]
    },

    {
      weekday: "Dienstag",
      module: "Waffensachkunde §7 WaffG",
      units: [
        { ue: 369, time: "09:00–09:45", topic: "Praktische Schulung – Handhabung Waffenattrappen" },
        { ue: 370, time: "09:45–10:30", topic: "Zielübungen (Trockenübungen)" },
        { ue: 371, time: "10:45–11:30", topic: "Sicherheitscheck Waffen" },
        { ue: 372, time: "11:30–12:15", topic: "Ablauf einer Waffenkontrolle" },
        { ue: 373, time: "13:00–13:45", topic: "Aufbewahrung & Übergabe – Praxis" },
        { ue: 374, time: "13:45–14:30", topic: "Dokumentationsübung Waffenbuch" },
        { ue: 375, time: "14:45–15:30", topic: "Rechtliche Wiederholung WaffG" },
        { ue: 376, time: "15:30–16:15", topic: "Diskussion – Sicherheitsrisiken" }
      ]
    },

    {
      weekday: "Mittwoch",
      module: "Waffensachkunde §7 WaffG",
      units: [
        { ue: 377, time: "09:00–09:45", topic: "Prüfungsvorbereitung Waffensachkunde" },
        { ue: 378, time: "09:45–10:30", topic: "Fallstudien & Übungen" },
        { ue: 379, time: "10:45–11:30", topic: "Schriftliche Testsimulation" },
        { ue: 380, time: "11:30–12:15", topic: "Mündliche Übungssimulation" },
        { ue: 381, time: "13:00–13:45", topic: "Praxisübung – Verhalten in Notwehrsituationen" },
        { ue: 382, time: "13:45–14:30", topic: "Praxisübung – Übergabe/Transport Waffen" },
        { ue: 383, time: "14:45–15:30", topic: "Abschlussprüfungsvorbereitung" },
        { ue: 384, time: "15:30–16:15", topic: "Besprechung & Waffensachkunde" }
      ]
    },

    {
      weekday: "Donnerstag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 385, time: "09:00–09:45", topic: "Wiederholung Strafrecht – Tatbestände" },
        { ue: 386, time: "09:45–10:30", topic: "Wiederholung Strafverfahrensrecht" },
        { ue: 387, time: "10:45–11:30", topic: "Jedermannsrechte – Übungen" },
        { ue: 388, time: "11:30–12:15", topic: "Datenschutz – Grundlagen & Wiederholung" },
        { ue: 389, time: "13:00–13:45", topic: "Kommunikationspraxis & Deeskalation" },
        { ue: 390, time: "13:45–14:30", topic: "Wiederholung Sicherheitsdienste – Hausrecht" },
        { ue: 391, time: "14:45–15:30", topic: "Fallübungen Sicherheitsdienst" },
        { ue: 392, time: "15:30–16:15", topic: "Dokumentations- & Berichtswesen" }
      ]
    },

    {
      weekday: "Freitag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 393, time: "09:00–09:45", topic: "Prüfungstraining schriftlich – Block 1" },
        { ue: 394, time: "09:45–10:30", topic: "Prüfungstraining schriftlich – Block 2" },
        { ue: 395, time: "10:45–11:30", topic: "Prüfungstraining schriftlich – Block 3" },
        { ue: 396, time: "11:30–12:15", topic: "Besprechung & Korrektur der Tests" },
        { ue: 397, time: "13:00–13:45", topic: "Praxisbeispiele – Sicherheitsdienst Alltag" },
        { ue: 398, time: "13:45–14:30", topic: "Praxisbeispiele – Notwehr/Notstand" },
        { ue: 399, time: "14:45–15:30", topic: "Praxisbeispiele – Festnahmerechte" },
        { ue: 400, time: "15:30–16:15", topic: "Rollenspiel – Konfliktlösung" }
      ]
    }
  ]
},

           {
  id: 11,
  label: "Woche 11",
  days: [
    {
      weekday: "Montag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 401, time: "09:00–09:45", topic: "Überblick & Ziele der Prüfungsvorbereitung" },
        { ue: 402, time: "09:45–10:30", topic: "Wiederholung Rechtsgebiete – Öffentliches Recht" },
        { ue: 403, time: "10:45–11:30", topic: "Wiederholung Gewerberecht" },
        { ue: 404, time: "11:30–12:15", topic: "Wiederholung Bürgerliches Recht (BGB)" },
        { ue: 405, time: "13:00–13:45", topic: "Wiederholung Strafrecht – Tatbestände" },
        { ue: 406, time: "13:45–14:30", topic: "Wiederholung Strafverfahrensrecht" },
        { ue: 407, time: "14:45–15:30", topic: "Jedermannsrechte – Anwendungsübungen" },
        { ue: 408, time: "15:30–16:15", topic: "Datenschutz – Wiederholung & Fallbeispiele" }
      ]
    },

    {
      weekday: "Dienstag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 409, time: "09:00–09:45", topic: "Wiederholung Umgang mit Menschen – Kommunikation" },
        { ue: 410, time: "09:45–10:30", topic: "Deeskalation & Konfliktlösung (Übungen)" },
        { ue: 411, time: "10:45–11:30", topic: "Wiederholung Verteidigungswaffen – rechtliche Grenzen" },
        { ue: 412, time: "11:30–12:15", topic: "Erste Hilfe – Kurzwiederholung" },
        { ue: 413, time: "13:00–13:45", topic: "Brandschutz – Grundlagen & Übungen" },
        { ue: 414, time: "13:45–14:30", topic: "Wiederholung Sicherheitstechnik" },
        { ue: 415, time: "14:45–15:30", topic: "Unfallverhütungsvorschriften – Fallbeispiele" },
        { ue: 416, time: "15:30–16:15", topic: "Wiederholung Waffensachkunde" }
      ]
    },

    {
      weekday: "Mittwoch",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 417, time: "09:00–09:45", topic: "Prüfungstraining schriftlich – Übungsblock 1" },
        { ue: 418, time: "09:45–10:30", topic: "Prüfungstraining schriftlich – Übungsblock 2" },
        { ue: 419, time: "10:45–11:30", topic: "Prüfungstraining schriftlich – Übungsblock 3" },
        { ue: 420, time: "11:30–12:15", topic: "Korrektur & Besprechung der Tests" },
        { ue: 421, time: "13:00–13:45", topic: "Praxisbeispiele Sicherheitsdienst – Hausrecht" },
        { ue: 422, time: "13:45–14:30", topic: "Praxisbeispiele – Notwehr/Notstand" },
        { ue: 423, time: "14:45–15:30", topic: "Praxisbeispiele – Festnahmerechte" },
        { ue: 424, time: "15:30–16:15", topic: "Rollenspiel – Konfliktlösung" }
      ]
    },

    {
      weekday: "Donnerstag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 425, time: "09:00–09:45", topic: "Prüfungsvorbereitung – mündliche Übung 1" },
        { ue: 426, time: "09:45–10:30", topic: "Mündliche Übung 2" },
        { ue: 427, time: "10:45–11:30", topic: "Mündliche Übung 3" },
        { ue: 428, time: "11:30–12:15", topic: "Rollenspiele – Sicherheitslagen" },
        { ue: 429, time: "13:00–13:45", topic: "Rollenspiele – Bedrohungslagen" },
        { ue: 430, time: "13:45–14:30", topic: "Simulation – Kontrollgang & Berichtswesen" },
        { ue: 431, time: "14:45–15:30", topic: "Simulation – Zutrittskontrolle" },
        { ue: 432, time: "15:30–16:15", topic: "Simulation – Evakuierungsübung" }
      ]
    },

    {
      weekday: "Freitag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 433, time: "09:00–09:45", topic: "Wiederholung schwierige Paragraphen" },
        { ue: 434, time: "09:45–10:30", topic: "Training Fachbegriffe & Definitionen" },
        { ue: 435, time: "10:45–11:30", topic: "Abschluss schriftliche Probeklausur" },
        { ue: 436, time: "11:30–12:15", topic: "Besprechung Probeklausur" },
        { ue: 437, time: "13:00–13:45", topic: "Mündliche Prüfungssimulation (Gruppe A)" },
        { ue: 438, time: "13:45–14:30", topic: "Mündliche Prüfungssimulation (Gruppe B)" },
        { ue: 439, time: "14:45–15:30", topic: "Mündliche Prüfungssimulation (Gruppe C)" },
        { ue: 440, time: "15:30–16:15", topic: "Feedback & Lernstrategien" }
      ]
    }
  ]
},

           {
  id: 12,
  label: "Woche 12",
  days: [
    {
      weekday: "Montag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 441, time: "09:00–09:45", topic: "Überblick & Ziele der Prüfungsvorbereitung" },
        { ue: 442, time: "09:45–10:30", topic: "Wiederholung Rechtsgebiete – Öffentliches Recht" },
        { ue: 443, time: "10:45–11:30", topic: "Wiederholung Gewerberecht" },
        { ue: 444, time: "11:30–12:15", topic: "Wiederholung Bürgerliches Recht (BGB)" },
        { ue: 445, time: "13:00–13:45", topic: "Wiederholung Strafrecht – Tatbestände" },
        { ue: 446, time: "13:45–14:30", topic: "Wiederholung Strafverfahrensrecht" },
        { ue: 447, time: "14:45–15:30", topic: "Jedermannsrechte – Anwendungsübungen" },
        { ue: 448, time: "15:30–16:15", topic: "Datenschutz – Wiederholung & Fallbeispiele" }
      ]
    },

    {
      weekday: "Dienstag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 449, time: "09:00–09:45", topic: "Wiederholung Umgang mit Menschen – Kommunikation" },
        { ue: 450, time: "09:45–10:30", topic: "Deeskalation & Konfliktlösung (Übungen)" },
        { ue: 451, time: "10:45–11:30", topic: "Wiederholung Verteidigungswaffen – rechtliche Grenzen" },
        { ue: 452, time: "11:30–12:15", topic: "Erste Hilfe – Kurzwiederholung" },
        { ue: 453, time: "13:00–13:45", topic: "Brandschutz – Grundlagen & Übungen" },
        { ue: 454, time: "13:45–14:30", topic: "Wiederholung Sicherheitstechnik" },
        { ue: 455, time: "14:45–15:30", topic: "Unfallverhütungsvorschriften – Fallbeispiele" },
        { ue: 456, time: "15:30–16:15", topic: "Wiederholung Waffensachkunde" }
      ]
    },

    {
      weekday: "Mittwoch",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 457, time: "09:00–09:45", topic: "Prüfungstraining schriftlich – Übungsblock 1" },
        { ue: 458, time: "09:45–10:30", topic: "Prüfungstraining schriftlich – Übungsblock 2" },
        { ue: 459, time: "10:45–11:30", topic: "Prüfungstraining schriftlich – Übungsblock 3" },
        { ue: 460, time: "11:30–12:15", topic: "Korrektur & Besprechung der Tests" },
        { ue: 461, time: "13:00–13:45", topic: "Praxisbeispiele Sicherheitsdienst – Hausrecht" },
        { ue: 462, time: "13:45–14:30", topic: "Praxisbeispiele – Notwehr/Notstand" },
        { ue: 463, time: "14:45–15:30", topic: "Praxisbeispiele – Festnahmerechte" },
        { ue: 464, time: "15:30–16:15", topic: "Rollenspiel – Konfliktlösung" }
      ]
    },

    {
      weekday: "Donnerstag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 465, time: "09:00–09:45", topic: "Prüfungsvorbereitung – mündliche Übung 1" },
        { ue: 466, time: "09:45–10:30", topic: "Mündliche Übung 2" },
        { ue: 467, time: "10:45–11:30", topic: "Mündliche Übung 3" },
        { ue: 468, time: "11:30–12:15", topic: "Rollenspiele – Sicherheitslagen" },
        { ue: 469, time: "13:00–13:45", topic: "Rollenspiele – Bedrohungslagen" },
        { ue: 470, time: "13:45–14:30", topic: "Simulation – Kontrollgang & Berichtswesen" },
        { ue: 471, time: "14:45–15:30", topic: "Simulation – Zutrittskontrolle" },
        { ue: 472, time: "15:30–16:15", topic: "Simulation – Evakuierungsübung" }
      ]
    },

    {
      weekday: "Freitag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 473, time: "09:00–09:45", topic: "Wiederholung schwierige Paragraphen" },
        { ue: 474, time: "09:45–10:30", topic: "Training Fachbegriffe & Definitionen" },
        { ue: 475, time: "10:45–11:30", topic: "Abschluss schriftliche Probeklausur" },
        { ue: 476, time: "11:30–12:15", topic: "Besprechung Probeklausur" },
        { ue: 477, time: "13:00–13:45", topic: "Mündliche Prüfungssimulation (Gruppe A)" },
        { ue: 478, time: "13:45–14:30", topic: "Mündliche Prüfungssimulation (Gruppe B)" },
        { ue: 479, time: "14:45–15:30", topic: "Mündliche Prüfungssimulation (Gruppe C)" },
        { ue: 480, time: "15:30–16:15", topic: "Feedback & Lernstrategien" }
      ]
    }
  ]
}

          ]
        }
      ]
    },

        {
      id: "winzer",
      name: "Herr Winzer",
      courses: [
        {
          id: "winzer-6m-2025-07-07",
          label: "6 Monate · Start 07.07.",
          type: "6 Monate",
          startDate: "2025-07-07",
          weeks: weeks6Monatskurs
        },
        {
          id: "winzer-6m-2025-08-11",
          label: "6 Monate · Start 11.08.",
          type: "6 Monate",
          startDate: "2025-08-11",
          weeks: weeks6Monatskurs
        },
        {
          id: "winzer-6m-2025-09-08",
          label: "6 Monate · Start 08.09.",
          type: "6 Monate",
          startDate: "2025-09-08",
          weeks: weeks6Monatskurs
        }
      ]
    },


        {
      id: "vespermann",
      name: "Herr Vespermann",
      courses: [
        {
          id: "vespermann-6m-2025-10-13",
          label: "6 Monate · Start 13.10.",
          type: "6 Monate",
          startDate: "2025-10-13",
          weeks: weeks6Monatskurs
        },
        {
          id: "vespermann-6m-2025-11-10",
          label: "6 Monate · Start 10.11.",
          type: "6 Monate",
          startDate: "2025-11-10",
          weeks: weeks6Monatskurs
        },
        {
          id: "vespermann-6m-2025-12-08",
          label: "6 Monate · Start 08.12.",
          type: "6 Monate",
          startDate: "2025-12-08",
          weeks: weeks6Monatskurs
        }
      ]
    },

    {
      id: "klein",
      name: "Herr Klein",
      courses: [
        {
          id: "klein-3m-2025-11-10",
          label: "3 Monate · Start 10.11.",
          type: "3 Monate",
          startDate: "2025-11-10",
        weeks: [
            {
              id: 1,
  label: "Woche 1",
  days: [
    {
      // Montag, 13.10. – Öffentliche Sicherheit & Ordnung
      weekday: "Montag",
        module: "Recht der öffentlichen Sicherheit und Ordnung",
        units: [
          { ue: 1, time: "09:00–09:45", topic: "Begrüßung und Einweisung in den Ablauf der Maßnahme" },
          { ue: 2, time: "09:45–10:30", topic: "Erläuterung der Maßnahme, der Hausordnung und allgemeine Regeln" },
          { ue: 3, time: "10:45–11:30", topic: "Einweisung in das Lernportal, Jobbörse sowie Lehrmaterial" },
          { ue: 4, time: "11:30–12:15", topic: "Einweisung in das Lernportal, Jobbörse sowie Lehrmaterial" },
          { ue: 5, time: "13:00–13:45", topic: "Polizei & Ordnungsbehörden – Zuständigkeiten und Aufgaben" },
          { ue: 6, time: "13:45–14:30", topic: "Gewaltenteilung – Exekutive & Judikative Legislative" },
          { ue: 7, time: "14:45–15:30", topic: "Aufbau der BRD – Bund Länder Kommunen" },
          { ue: 8, time: "15:30–16:15", topic: "Staatsgewalten & deren Kompetenzen" }
      ]
    },

    {
      // Dienstag, 14.10. – Öffentliche Sicherheit & Ordnung
      weekday: "Dienstag",
      module: "Öffentliche Sicherheit & Ordnung",
      units: [
        { ue: 9,  time: "09:00–09:45", topic: "Grundgesetz – Bedeutung & Entstehung" },
        { ue: 10, time: "09:45–10:30", topic: "Grundgesetz – Artikelübersicht" },
        { ue: 11, time: "10:45–11:30", topic: "Ewigkeitsklausel" },
        { ue: 12, time: "11:30–12:15", topic: "Drittwirkung des Grundgesetzes" },
        { ue: 13, time: "13:00–13:45", topic: "Gefahrenabwehr – Grundlagen" },
        { ue: 14, time: "13:45–14:30", topic: "Gefahrenabwehr – präventive Maßnahmen" },
        { ue: 15, time: "14:45–15:30", topic: "Zuständigkeiten bei Störungen" },
        { ue: 16, time: "15:30–16:15", topic: "Zuständigkeiten bei Störungen" }
      ]
    },

    {
      // Mittwoch, 15.10. – Öffentliche Sicherheit & Ordnung
      weekday: "Mittwoch",
      module: "Öffentliche Sicherheit & Ordnung",
      units: [
        { ue: 17, time: "09:00–09:45", topic: "Zusammenarbeit Sicherheitsdienst – Polizei" },
        { ue: 18, time: "09:45–10:30", topic: "Zusammenarbeit mit Kommunen" },
        { ue: 19, time: "10:45–11:30", topic: "Dokumentation – Grundlagen" },
        { ue: 20, time: "11:30–12:15", topic: "Berichterstattung – Fallbeispiele" },
        { ue: 21, time: "13:00–13:45", topic: "Eingriffs- & Handlungsmöglichkeiten – Theorie" },
        { ue: 22, time: "13:45–14:30", topic: "Eingriffs- & Handlungsmöglichkeiten – Praxis" },
        { ue: 23, time: "14:45–15:30", topic: "Wiederholung Modul 1 – Teil 1" },
        { ue: 24, time: "15:30–16:15", topic: "Wiederholung Modul 1 – Teil 2" }
      ]
    },

    {
      // Donnerstag, 16.10. – Öffentliche Sicherheit & Ordnung
      weekday: "Donnerstag",
      module: "Öffentliche Sicherheit & Ordnung",
      units: [
        { ue: 25, time: "09:00–09:45", topic: "Zusammenfassung GG & Gewaltenteilung" },
        { ue: 26, time: "09:45–10:30", topic: "Vertiefung Gefahrenabwehr" },
        { ue: 27, time: "10:45–11:30", topic: "Vertiefung Zuständigkeiten" },
        { ue: 28, time: "11:30–12:15", topic: "Rollenspiel – Sicherheitslage" },
        { ue: 29, time: "13:00–13:45", topic: "Praxisübungen – Dokumentation" },
        { ue: 30, time: "13:45–14:30", topic: "Praxisübungen – Eingriffsrechte" },
        { ue: 31, time: "14:45–15:30", topic: "Wiederholung aller Inhalte" },
        { ue: 32, time: "15:30–16:15", topic: "Lernzielkontrolle Modul 1" }
      ]
    },

    {
      // Freitag, 17.10. – Gewerberecht
      weekday: "Freitag",
      module: "Gewerberecht",
      units: [
        { ue: 33, time: "09:00–09:45", topic: "§34a GewO – Grundlagen" },
        { ue: 34, time: "09:45–10:30", topic: "§34a GewO – Befugnisse" },
        { ue: 35, time: "10:45–11:30", topic: "Bewachungsunternehmen – Pflichten" },
        { ue: 36, time: "11:30–12:15", topic: "Mitarbeiter – Voraussetzungen" },
        { ue: 37, time: "13:00–13:45", topic: "Bewacherregister" },
        { ue: 38, time: "13:45–14:30", topic: "Antragsstellung – Praxisbeispiele" },
        { ue: 39, time: "14:45–15:30", topic: "Sachkundeprüfung & U40" },
        { ue: 40, time: "15:30–16:15", topic: "Befreiung & Tätigkeitsfelder" }
      ]
    }
  ]
},

           {
  id: 2,
  label: "Woche 2",
  days: [
    {
      // Montag, 20.10. – Gewerberecht
      weekday: "Montag",
      module: "Gewerberecht",
      units: [
        { ue: 41, time: "09:00–09:45", topic: "Gewerbeordnung – Anzeigepflicht §14" },
        { ue: 42, time: "09:45–10:30", topic: "Gewerbeordnung – Auskunft & Nachschau §29" },
        { ue: 43, time: "10:45–11:30", topic: "Bewachungsverordnung §§14 & 15" },
        { ue: 44, time: "11:30–12:15", topic: "Bewachungsverordnung §§17–18" },
        { ue: 45, time: "13:00–13:45", topic: "Bewachungsverordnung §§19–21" },
        { ue: 46, time: "13:45–14:30", topic: "Aufsichtspflichten & Kontrollmechanismen" },
        { ue: 47, time: "14:45–15:30", topic: "Konsequenzen bei Verstößen" },
        { ue: 48, time: "15:30–16:15", topic: "Anmeldung von Tätigkeiten & Dokumentationspflichten" }
      ]
    },

    {
      // Dienstag, 21.10. – Bürgerliches Recht (BGB)
      weekday: "Dienstag",
      module: "Bürgerliches Recht (BGB)",
      units: [
        { ue: 49, time: "09:00–09:45", topic: "Grundlagen BGB – Fundrecht" },
        { ue: 50, time: "09:45–10:30", topic: "Privatrecht – Abgrenzung" },
        { ue: 51, time: "10:45–11:30", topic: "Rechtsfähigkeit – Beginn & Ende" },
        { ue: 52, time: "11:30–12:15", topic: "Schikaneverbot" },
        { ue: 53, time: "13:00–13:45", topic: "Gefährdungshaftung – Einführung" },
        { ue: 54, time: "13:45–14:30", topic: "Verschuldensunabhängige Haftung" },
        { ue: 55, time: "14:45–15:30", topic: "Verschuldensabhängige Haftung" },
        { ue: 56, time: "15:30–16:15", topic: "Praxisbeispiele Haftung" }
      ]
    },

    {
      // Mittwoch, 22.10. – Bürgerliches Recht (BGB)
      weekday: "Mittwoch",
      module: "Bürgerliches Recht (BGB)",
      units: [
        { ue: 57, time: "09:00–09:45", topic: "Besitz & Eigentum" },
        { ue: 58, time: "09:45–10:30", topic: "Besitzdiener" },
        { ue: 59, time: "10:45–11:30", topic: "Sachen & Tiere" },
        { ue: 60, time: "11:30–12:15", topic: "Besitz & übertragene Rechte" },
        { ue: 61, time: "13:00–13:45", topic: "Vertragsrecht – Grundlagen" },
        { ue: 62, time: "13:45–14:30", topic: "Vertragsabschluss" },
        { ue: 63, time: "14:45–15:30", topic: "Rechte & Pflichten aus Verträgen" },
        { ue: 64, time: "15:30–16:15", topic: "Vertragsverletzungen" }
      ]
    },

    {
      // Donnerstag, 23.10. – Bürgerliches Recht (BGB)
      weekday: "Donnerstag",
      module: "Bürgerliches Recht (BGB)",
      units: [
        { ue: 65, time: "09:00–09:45", topic: "Schadensersatz – Grundlagen" },
        { ue: 66, time: "09:45–10:30", topic: "Haftung – Grenzen privater Eingriffe" },
        { ue: 67, time: "10:45–11:30", topic: "Unerlaubte Handlung" },
        { ue: 68, time: "11:30–12:15", topic: "Folgen unerlaubter Handlung" },
        { ue: 69, time: "13:00–13:45", topic: "Abgrenzung rechtmäßiges Handeln" },
        { ue: 70, time: "13:45–14:30", topic: "Abgrenzung strafbare Handlung" },
        { ue: 71, time: "14:45–15:30", topic: "Praxisbeispiel: Hausrecht" },
        { ue: 72, time: "15:30–16:15", topic: "Praxisbeispiel: Zutrittskontrollen" }
      ]
    },

    {
      // Freitag, 24.10. – Bürgerliches Recht (BGB)
      weekday: "Freitag",
      module: "Bürgerliches Recht (BGB)",
      units: [
        { ue: 73, time: "09:00–09:45", topic: "Jedermannsrechte nach BGB – Einführung" },
        { ue: 74, time: "09:45–10:30", topic: "§227 Notwehr & §228 Verteidigungsnotstand" },
        { ue: 75, time: "10:45–11:30", topic: "§229 Selbsthilfe & §859 Selbsthilfe des Besitzers" },
        { ue: 76, time: "11:30–12:15", topic: "§860 Selbsthilfe des Besitzdieners & §904 Angriffsnotstand" },
        { ue: 77, time: "13:00–13:45", topic: "Praxisbeispiel: Eingreifen in Notfällen" },
        { ue: 78, time: "13:45–14:30", topic: "Rollenspiel – Zutrittskontrolle mit Konflikt" },
        { ue: 79, time: "14:45–15:30", topic: "Wiederholung & Zusammenfassung BGB" },
        { ue: 80, time: "15:30–16:15", topic: "Lernzielkontrolle – BGB" }
      ]
    }
  ]
},


            // Platzhalter für weitere Wochen des 3-Monats-Kurses:
           {
  id: 3,
  label: "Woche 3",
  days: [
    {
      // Montag, 27.10. – Bürgerliches Recht (BGB)
      weekday: "Montag",
      module: "Bürgerliches Recht (BGB)",
      units: [
        { ue: 81, time: "09:00–09:45", topic: "Jedermannsrechte – Übersicht StGB/BGB" },
        { ue: 82, time: "09:45–10:30", topic: "Praxisbeispiele Sicherheitsdienst – Hausrecht" },
        { ue: 83, time: "10:45–11:30", topic: "Praxisbeispiele Zutrittskontrollen" },
        { ue: 84, time: "11:30–12:15", topic: "Eingreifen in Notfallsituationen" },
        { ue: 85, time: "13:00–13:45", topic: "Jedermannsrechte – Rollenspiele" },
        { ue: 86, time: "13:45–14:30", topic: "Fallanalyse – Notwehr / Selbsthilfe" },
        { ue: 87, time: "14:45–15:30", topic: "Abgrenzung rechtmäßiges Handeln vs. strafbare Handlung" },
        { ue: 88, time: "15:30–16:15", topic: "Wiederholung & Lernzielkontrolle Modul 3" }
      ]
    },

    {
      // Dienstag, 28.10. – Straf- & Strafverfahrensrecht
      weekday: "Dienstag",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 89, time: "09:00–09:45", topic: "Materielles Strafrecht – Tatbestand" },
        { ue: 90, time: "09:45–10:30", topic: "Schuld, Vorsatz, Fahrlässigkeit" },
        { ue: 91, time: "10:45–11:30", topic: "Versuch, Rechtsfolgen" },
        { ue: 92, time: "11:30–12:15", topic: "Aufbau Straftat – Tatbestandsmerkmale" },
        { ue: 93, time: "13:00–13:45", topic: "Rechtswidrigkeit & Schuld" },
        { ue: 94, time: "13:45–14:30", topic: "Verbrechen vs. Vergehen – Unterschiede & Beispiele" },
        { ue: 95, time: "14:45–15:30", topic: "Garantenstellung – Pflichten zur Abwendung von Schäden" },
        { ue: 96, time: "15:30–16:15", topic: "Echtes und unechtes Unterlassungsdelikt" }
      ]
    },

    {
      // Mittwoch, 29.10. – Straf- & Strafverfahrensrecht
      weekday: "Mittwoch",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 97,  time: "09:00–09:45", topic: "Strafverfahrensrecht – Ablauf eines Verfahrens" },
        { ue: 98,  time: "09:45–10:30", topic: "Rechte & Pflichten Beschuldigter" },
        { ue: 99,  time: "10:45–11:30", topic: "Rechte & Pflichten Zeugen" },
        { ue: 100, time: "11:30–12:15", topic: "Aufbau StGB – Allgemeiner & Besonderer Teil" },
        { ue: 101, time: "13:00–13:45", topic: "Nebengesetze (StPO, BtMG, JuSchG)" },
        { ue: 102, time: "13:45–14:30", topic: "Besonderer Teil StGB – Diebstahl §§242, 243" },
        { ue: 103, time: "14:45–15:30", topic: "Diebstahl mit Waffen / Bandendiebstahl §244" },
        { ue: 104, time: "15:30–16:15", topic: "Unterschlagung §§246, 248a" }
      ]
    },

    {
      // Donnerstag, 30.10. – Straf- & Strafverfahrensrecht
      weekday: "Donnerstag",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 105, time: "09:00–09:45", topic: "Raub §249, Räuberischer Diebstahl §252" },
        { ue: 106, time: "09:45–10:30", topic: "Erpressung §253" },
        { ue: 107, time: "10:45–11:30", topic: "Hehlerei §259" },
        { ue: 108, time: "11:30–12:15", topic: "Betrug §§263, 263a" },
        { ue: 109, time: "13:00–13:45", topic: "Untreue §266 / Veruntreuung §265a" },
        { ue: 110, time: "13:45–14:30", topic: "Körperverletzung §223" },
        { ue: 111, time: "14:45–15:30", topic: "Sachbeschädigung §303" },
        { ue: 112, time: "15:30–16:15", topic: "Brandstiftung §306" }
      ]
    },

    {
      // Freitag, 31.10. – Prüfungstag
      weekday: "Freitag",
      module: "Prüfungstag – Straf- & Zivilrecht",
      units: [
        { ue: 113, time: "09:00–09:45", topic: "Schadensersatz §281, Unterlassungsdelikte §323c" },
        { ue: 114, time: "09:45–10:30", topic: "Notwehr §§32, 34, 35" },
        { ue: 115, time: "10:45–11:30", topic: "Verhältnismäßigkeit & Erforderlichkeit" },
        { ue: 116, time: "11:30–12:15", topic: "StPO – Rechte & Pflichten Sicherheitskraft" },
        { ue: 117, time: "13:00–13:45", topic: "Festnahme durch Privatperson §127 StPO" },
        { ue: 118, time: "13:45–14:30", topic: "Beweissicherung & Anzeigeerstattung" },
        { ue: 119, time: "14:45–15:30", topic: "Praxisfallanalyse / Simulationen" },
        { ue: 120, time: "15:30–16:15", topic: "Besprechung schriftliche Übung / Lernzielkontrolle" }
      ]
    }
  ]
},

            {
  id: 4,
  label: "Woche 4",
  days: [
    {
      // Montag, 03.11. – Straf- & Strafverfahrensrecht
      weekday: "Montag",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 121, time: "09:00–09:45", topic: "Notwehr & rechtfertigender Notstand §§32, 34" },
        { ue: 122, time: "09:45–10:30", topic: "Aggressiver Notstand §35" },
        { ue: 123, time: "10:45–11:30", topic: "Verhältnismäßigkeit & Erforderlichkeit in Jedermannsrechten" },
        { ue: 124, time: "11:30–12:15", topic: "Fallbeispiele Notwehr / Notstand" },
        { ue: 125, time: "13:00–13:45", topic: "StPO – Rechte & Pflichten der Sicherheitskraft" },
        { ue: 126, time: "13:45–14:30", topic: "Festnahme durch Privatperson §127 StPO" },
        { ue: 127, time: "14:45–15:30", topic: "Beweissicherung & Anzeigeerstattung" },
        { ue: 128, time: "15:30–16:15", topic: "Praxisbeispiele – Strafverfahren" }
      ]
    },

    {
      // Dienstag, 04.11. – Straf- & Strafverfahrensrecht
      weekday: "Dienstag",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 129, time: "09:00–09:45", topic: "Computerbetrug, Untreue, Veruntreuung (Vertiefung)" },
        { ue: 130, time: "09:45–10:30", topic: "Körperverletzung, Sachbeschädigung (Vertiefung)" },
        { ue: 131, time: "10:45–11:30", topic: "Raub, Erpressung, Hehlerei (Vertiefung)" },
        { ue: 132, time: "11:30–12:15", topic: "Betrug §263 / Computerbetrug §263a (Fallanalyse)" },
        { ue: 133, time: "13:00–13:45", topic: "Praxisfall – Diebstahl & Unterschlagung" },
        { ue: 134, time: "13:45–14:30", topic: "Praxisfall – Brandstiftung & Schadensersatz" },
        { ue: 135, time: "14:45–15:30", topic: "Rollenspiel – Strafverfolgung" },
        { ue: 136, time: "15:30–16:15", topic: "Lernzielkontrolle Modul 4 Teil 1" }
      ]
    },

    {
      // Mittwoch, 05.11. – Straf- & Strafverfahrensrecht
      weekday: "Mittwoch",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 137, time: "09:00–09:45", topic: "Praxisübungen: Notwehr / Notstand" },
        { ue: 138, time: "09:45–10:30", topic: "Praxisübungen: Festnahme §127 StPO" },
        { ue: 139, time: "10:45–11:30", topic: "Beweissicherung & Anzeigeerstattung" },
        { ue: 140, time: "11:30–12:15", topic: "Fallanalyse – Unterlassungsdelikte §323c" },
        { ue: 141, time: "13:00–13:45", topic: "Aggressiver vs. rechtfertigender Notstand" },
        { ue: 142, time: "13:45–14:30", topic: "Verhältnismäßigkeit / Erforderlichkeit" },
        { ue: 143, time: "14:45–15:30", topic: "Praxis: Simulation Notfallsituationen" },
        { ue: 144, time: "15:30–16:15", topic: "Wiederholung & Lernzielkontrolle" }
      ]
    },

    {
      // Donnerstag, 06.11. – Straf- & Strafverfahrensrecht
      weekday: "Donnertag",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 145, time: "09:00–09:45", topic: "Rechte & Pflichten Sicherheitskraft – Fallanalyse" },
        { ue: 146, time: "09:45–10:30", topic: "Praxis – Anzeigeerstattung" },
        { ue: 147, time: "10:45–11:30", topic: "Notwehr / Notstand – Vertiefung" },
        { ue: 148, time: "11:30–12:15", topic: "Fallbeispiele aus Sicherheitsdienst" },
        { ue: 149, time: "13:00–13:45", topic: "Praxis: Dokumentation & Berichterstattung" },
        { ue: 150, time: "13:45–14:30", topic: "Rollenspiel – Konfliktsituationen" },
        { ue: 151, time: "14:45–15:30", topic: "Prüfungsvorbereitung – Strafrecht" },
        { ue: 152, time: "15:30–16:15", topic: "Zusammenfassung Strafrecht" }
      ]
    },

    {
      // Freitag, 07.11. – Straf- & Strafverfahrensrecht
      weekday: "Freitag",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 153, time: "09:00–09:45", topic: "Simulation Strafverfahren – schriftliche Übung" },
        { ue: 154, time: "09:45–10:30", topic: "Besprechung schriftliche Übung" },
        { ue: 155, time: "10:45–11:30", topic: "Praxis – Notwehr / Notstand" },
        { ue: 156, time: "11:30–12:15", topic: "Praxis – Festnahme §127 StPO" },
        { ue: 157, time: "13:00–13:45", topic: "Praxis – Anzeige & Beweissicherung" },
        { ue: 158, time: "13:45–14:30", topic: "Vertiefung Fallanalyse" },
        { ue: 159, time: "14:45–15:30", topic: "Besprechung & Rückmeldung" },
        { ue: 160, time: "15:30–16:15", topic: "Lernzielkontrolle Strafrecht" }
      ]
    }
  ]
},

            {
  id: 5,
  label: "Woche 5",
  days: [
    {
      // Montag, 10.11. – Straf- & Strafverfahrensrecht
      weekday: "Montag",
      module: "Straf- & Strafverfahrensrecht",
      units: [
        { ue: 161, time: "09:00–09:45", topic: "Wiederholung – Materielles Strafrecht" },
        { ue: 162, time: "09:45–10:30", topic: "Wiederholung – Aufbau einer Straftat" },
        { ue: 163, time: "10:45–11:30", topic: "Fallanalysen – Unterlassungsdelikte / Notwehr" },
        { ue: 164, time: "11:30–12:15", topic: "Fallanalyse – Notstand & Verhältnismäßigkeit" },
        { ue: 165, time: "13:00–13:45", topic: "Rollenspiel – Festnahme durch Privatperson §127 StPO" },
        { ue: 166, time: "13:45–14:30", topic: "Dokumentation & Berichterstattung" },
        { ue: 167, time: "14:45–15:30", topic: "Lernzielkontrolle Strafrecht" },
        { ue: 168, time: "15:30–16:15", topic: "Strafrecht Abschlussbesprechung" }
      ]
    },

    {
      // Dienstag, 11.11. – Jedermannsrechte – Ausnahmerechte
      weekday: "Dienstag",
      module: "Jedermannsrechte – Ausnahmerechte",
      units: [
        { ue: 169, time: "09:00–09:45", topic: "Einführung in Jedermannsrechte" },
        { ue: 170, time: "09:45–10:30", topic: "Abgrenzung Rechtfertigungs- und Entschuldigungsgründe" },
        { ue: 171, time: "10:45–11:30", topic: "Festnahmerechte §127 (1) StPO / §229 BGB" },
        { ue: 172, time: "11:30–12:15", topic: "Jedermannsrechte StGB §§32, 33, 34, 35" },
        { ue: 173, time: "13:00–13:45", topic: "Jedermannsrechte BGB §§227, 228, 859, 860, 904" },
        { ue: 174, time: "13:45–14:30", topic: "Jedermannsrechte OWiG §15" },
        { ue: 175, time: "14:45–15:30", topic: "Theoretische Übungen – Eingriffsrechte" },
        { ue: 176, time: "15:30–16:15", topic: "Rollenspiele – Notwehrsituationen & Selbsthilfe" }
      ]
    },

    {
      // Mittwoch, 12.11. – Jedermannsrechte – Ausnahmerechte
      weekday: "Mittwoch",
      module: "Jedermannsrechte – Ausnahmerechte",
      units: [
        { ue: 177, time: "09:00–09:45", topic: "Rollenspiele – Festnahme & Selbsthilfe" },
        { ue: 178, time: "09:45–10:30", topic: "Praxisübungen – Eingriffsrechte & Notwehrsituationen" },
        { ue: 179, time: "10:45–11:30", topic: "Fallbeispiele – Sicherheitsdienst / Zutrittskontrollen" },
        { ue: 180, time: "11:30–12:15", topic: "Dokumentation & Berichterstattung" },
        { ue: 181, time: "13:00–13:45", topic: "Besprechung der Rollenspiele / Reflexion" },
        { ue: 182, time: "13:45–14:30", topic: "Lernzielkontrolle Jedermannsrechte" },
        { ue: 183, time: "14:45–15:30", topic: "Feedback & offene Fragen Jedermannsrechte" },
        { ue: 184, time: "15:30–16:15", topic: "Zusammenfassung & Wiederholung Jedermannsrechte" }
      ]
    },

    {
      // Donnerstag, 13.11. – Datenschutz
      weekday: "Donnerstag",
      module: "Datenschutz",
      units: [
        { ue: 185, time: "09:00–09:45", topic: "Grundlagen DSGVO & BDSG, Rechte Betroffener" },
        { ue: 186, time: "09:45–10:30", topic: "Datenschutz bei Videoüberwachung & Zutrittskontrollen" },
        { ue: 187, time: "10:45–11:30", topic: "Datenerfassung & Speicherung" },
        { ue: 188, time: "11:30–12:15", topic: "Schweigepflicht, Datenweitergabe, Dokumentationspflichten" },
        { ue: 189, time: "13:00–13:45", topic: "Zusammenhang Datenschutz & StGB" },
        { ue: 190, time: "13:45–14:30", topic: "Aufgaben & Voraussetzungen Datenschutzbeauftragter" },
        { ue: 191, time: "14:45–15:30", topic: "Technische Maßnahmen – Zugriffskontrollen & Verschlüsselung" },
        { ue: 192, time: "15:30–16:15", topic: "Organisatorische Maßnahmen – Protokollierung & Datensicherung" }
      ]
    },

    {
      // Freitag, 14.11. – Datenschutz
      weekday: "Freitag",
      module: "Datenschutz",
      units: [
        { ue: 193, time: "09:00–09:45", topic: "Updates & Mitarbeiterschulung" },
        { ue: 194, time: "09:45–10:30", topic: "Praktische Übungen Datensicherung" },
        { ue: 195, time: "10:45–11:30", topic: "Fallbeispiele aus Sicherheitsdienst" },
        { ue: 196, time: "11:30–12:15", topic: "Übung – Datenschutz bei Zutrittskontrollen" },
        { ue: 197, time: "13:00–13:45", topic: "Dokumentation & Berichterstattung" },
        { ue: 198, time: "13:45–14:30", topic: "Rollenspiel – Datenschutzkonflikt" },
        { ue: 199, time: "14:45–15:30", topic: "Wiederholung & Lernzielkontrolle Datenschutz" },
        { ue: 200, time: "15:30–16:15", topic: "Abschlussbesprechung Datenschutz" }
      ]
    }
  ]
},

            {
  id: 6,
  label: "Woche 6",
  days: [
    {
      // Montag, 17.11. – Umgang mit Menschen
      weekday: "Montag",
      module: "Umgang mit Menschen",
      units: [
        { ue: 201, time: "09:00–09:45", topic: "Einführung – Bedürfnisse, Motive, Motivation" },
        { ue: 202, time: "09:45–10:30", topic: "Selbstwertgefühl & Wahrnehmung" },
        { ue: 203, time: "10:45–11:30", topic: "Diversität & Vorurteile" },
        { ue: 204, time: "11:30–12:15", topic: "Menschenkenntnis & erster Eindruck" },
        { ue: 205, time: "13:00–13:45", topic: "Verhalten des Menschen & Steuerung" },
        { ue: 206, time: "13:45–14:30", topic: "Interkulturelle Kompetenz" },
        { ue: 207, time: "14:45–15:30", topic: "Kommunikationsarten & Modelle" },
        { ue: 208, time: "15:30–16:15", topic: "Eisberg-Modell – Sachebene / Beziehungsebene" }
      ]
    },

    {
      // Dienstag, 18.11. – Umgang mit Menschen
      weekday: "Dienstag",
      module: "Umgang mit Menschen",
      units: [
        { ue: 209, time: "09:00–09:45", topic: "Gesprächstechniken: Schallplatte mit Sprung, Vernebelung" },
        { ue: 210, time: "09:45–10:30", topic: "Kommunikationsabstände" },
        { ue: 211, time: "10:45–11:30", topic: "Maslow-Pyramide" },
        { ue: 212, time: "11:30–12:15", topic: "Stress und Auswirkung auf Gesundheit" },
        { ue: 213, time: "13:00–13:45", topic: "Frustration, Aggression, Resignation & Zusammenhang" },
        { ue: 214, time: "13:45–14:30", topic: "Deeskalation, Konflikte & Konfliktlösung" },
        { ue: 215, time: "14:45–15:30", topic: "Aktives Zuhören, Sender & Empfänger" },
        { ue: 216, time: "15:30–16:15", topic: "Gruppen, Menschenmengen, Menschenmassen" }
      ]
    },

    {
      // Mittwoch, 19.11. – Umgang mit Menschen
      weekday: "Mittwoch",
      module: "Umgang mit Menschen",
      units: [
        { ue: 217, time: "09:00–09:45", topic: "Besonderheiten & Verhaltensweisen besonderer Personengruppen" },
        { ue: 218, time: "09:45–10:30", topic: "Jugendliche, Betrunkene, Drogenabhängige, Senioren" },
        { ue: 219, time: "10:45–11:30", topic: "Massenpsychologische Phänomene" },
        { ue: 220, time: "11:30–12:15", topic: "Massenpanik, Panikarten & Verhaltensweisen" },
        { ue: 221, time: "13:00–13:45", topic: "Besonderheiten Großveranstaltungen" },
        { ue: 222, time: "13:45–14:30", topic: "Besonderheiten Flüchtlingsunterkünfte" },
        { ue: 223, time: "14:45–15:30", topic: "Praxisbeispiele Sicherheitsdienst" },
        { ue: 224, time: "15:30–16:15", topic: "Fallanalysen & Diskussion" }
      ]
    },

    {
      // Donnerstag, 20.11. – Umgang mit Menschen
      weekday: "Donnerstag",
      module: "Umgang mit Menschen",
      units: [
        { ue: 225, time: "09:00–09:45", topic: "Kommunikationsübungen – Rollenspiele" },
        { ue: 226, time: "09:45–10:30", topic: "Konfliktmanagement in Gruppen" },
        { ue: 227, time: "10:45–11:30", topic: "Deeskalationsstrategien" },
        { ue: 228, time: "11:30–12:15", topic: "Praxis: Intervention bei Konflikten" },
        { ue: 229, time: "13:00–13:45", topic: "Simulationen – Menschenmengensteuerung" },
        { ue: 230, time: "13:45–14:30", topic: "Beobachtung & Verhaltenstraining" },
        { ue: 231, time: "14:45–15:30", topic: "Reflexion & Feedback" },
        { ue: 232, time: "15:30–16:15", topic: "Besprechung – Rollenspielauswertung" }
      ]
    },

    {
      // Freitag, 21.11. – Umgang mit Menschen
      weekday: "Freitag",
      module: "Umgang mit Menschen",
      units: [
        { ue: 233, time: "09:00–09:45", topic: "Wiederholung – Bedürfnisse & Motivation" },
        { ue: 234, time: "09:45–10:30", topic: "Wiederholung – Kommunikationsarten & Eisberg-Modell" },
        { ue: 235, time: "10:45–11:30", topic: "Praxisbeispiele – Konfliktbewältigung" },
        { ue: 236, time: "11:30–12:15", topic: "Fallanalyse – Menschenmassensteuerung" },
        { ue: 237, time: "13:00–13:45", topic: "Lernzielkontrolle Umgang mit Menschen" },
        { ue: 238, time: "13:45–14:30", topic: "Besprechung der Ergebnisse" },
        { ue: 239, time: "14:45–15:30", topic: "Feedback & offene Fragen" },
        { ue: 240, time: "15:30–16:15", topic: "Zusammenfassung Umgang mit Menschen" }
      ]
    }
  ]
},

           {
  id: 7,
  label: "Woche 7",
  days: [
    {
      // Montag, 24.11. – Umgang mit Verteidigungswaffen
      weekday: "Montag",
      module: "Umgang mit Verteidigungswaffen",
      units: [
        { ue: 241, time: "09:00–09:45", topic: "Einführung – Waffengesetz (WaffG) §§1–10, 25, 27, 42" },
        { ue: 242, time: "09:45–10:30", topic: "Bewachungsverordnung (BewachV)" },
        { ue: 243, time: "10:45–11:30", topic: "Grenzen der Notwehr und des Notstands (§§32, 34 StGB)" },
        { ue: 244, time: "11:30–12:15", topic: "Haftung, straf- und zivilrechtliche Folgen unsachgemäßen Einsatzes" },
        { ue: 245, time: "13:00–13:45", topic: "Besitz: Wer eine Schusswaffe rechtmäßig besitzt (§§14–17 WaffG)" },
        { ue: 246, time: "13:45–14:30", topic: "Erwerb: Erwerbsvoraussetzungen, Genehmigungen (§§21–23 WaffG)" },
        { ue: 247, time: "14:45–15:30", topic: "Führen: Transport & Mitführen im öffentlichen Raum (§§25–27 WaffG)" },
        { ue: 248, time: "15:30–16:15", topic: "Verbotene Waffen: Definitionen, Beispiele" }
      ]
    },

    {
      // Dienstag, 25.11. – Umgang mit Verteidigungswaffen
      weekday: "Dienstag",
      module: "Umgang mit Verteidigungswaffen",
      units: [
        { ue: 249, time: "09:00–09:45", topic: "Arten von Verteidigungswaffen" },
        { ue: 250, time: "09:45–10:30", topic: "Praktische Handhabung – Sicherheitsregeln" },
        { ue: 251, time: "10:45–11:30", topic: "Praktische Übungen – Handhabung und Einsatzlimits" },
        { ue: 252, time: "11:30–12:15", topic: "Rollenspiele – Einsatz im Bewachungsdienst" },
        { ue: 253, time: "13:00–13:45", topic: "Rechtliche Grenzen beim Einsatz von Verteidigungswaffen" },
        { ue: 254, time: "13:45–14:30", topic: "Dokumentation von Vorfällen mit Verteidigungswaffen" },
        { ue: 255, time: "14:45–15:30", topic: "Fallbeispiele – Einsatzanalyse" },
        { ue: 256, time: "15:30–16:15", topic: "Besprechung & Feedback" }
      ]
    },

    {
      // Mittwoch, 26.11. – Umgang mit Verteidigungswaffen
      weekday: "Mittwoch",
      module: "Umgang mit Verteidigungswaffen",
      units: [
        { ue: 257, time: "09:00–09:45", topic: "Wiederholung – Waffengesetz & Bewachungsverordnung" },
        { ue: 258, time: "09:45–10:30", topic: "Praxisübungen – Handhabung & Einsatz" },
        { ue: 259, time: "10:45–11:30", topic: "Simulation – Notwehr & Verteidigungswaffen" },
        { ue: 260, time: "11:30–12:15", topic: "Dokumentation & Berichtswesen" },
        { ue: 261, time: "13:00–13:45", topic: "Rollenspiele – Einsatzübungen" },
        { ue: 262, time: "13:45–14:30", topic: "Praxisübungen – Einsatzlimits beachten" },
        { ue: 263, time: "14:45–15:30", topic: "Lernzielkontrolle Umgang mit Verteidigungswaffen" },
        { ue: 264, time: "15:30–16:15", topic: "Besprechung & Feedback" }
      ]
    },

    {
      // Donnerstag, 27.11. – Verteidigungswaffen + Erste Hilfe
      weekday: "Donnerstag",
      module: "Verteidigungswaffen & Erste Hilfe",
      units: [
        { ue: 265, time: "09:00–09:45", topic: "Wiederholung – Umgang mit Verteidigungswaffen" },
        { ue: 266, time: "09:45–10:30", topic: "Fallbeispiele – Einsatz im Sicherheitsdienst" },
        { ue: 267, time: "10:45–11:30", topic: "Besprechung – Praxisübungen & Dokumentation" },
        { ue: 268, time: "11:30–12:15", topic: "Abschlussbesprechung Umgang mit Verteidigungswaffen" },
        { ue: 269, time: "13:00–13:45", topic: "Lebensrettende Sofortmaßnahmen – HLW" },
        { ue: 270, time: "13:45–14:30", topic: "Stabile Seitenlage & Bewusstseinskontrolle" },
        { ue: 271, time: "14:45–15:30", topic: "Umgang mit Blutungen, Schock & Bewusstlosigkeit" },
        { ue: 272, time: "15:30–16:15", topic: "Notfallmanagement & Kommunikation mit Rettungsdiensten" }
      ]
    },

    {
      // Freitag, 28.11. – Erste Hilfe & Evakuierungshelfer
      weekday: "Freitag",
      module: "Erste Hilfe & Evakuierungshelfer",
      units: [
        { ue: 273, time: "09:00–09:45", topic: "Praktische Übungen – HLW & stabile Seitenlage" },
        { ue: 274, time: "09:45–10:30", topic: "Praktische Übungen – Blutungen, Schock & Bewusstlosigkeit" },
        { ue: 275, time: "10:45–11:30", topic: "Fallbeispiele & Notfallmanagement" },
        { ue: 276, time: "11:30–12:15", topic: "Abschlusszertifikat Erste Hilfe & Besprechung" },
        { ue: 277, time: "13:00–13:45", topic: "Brandklassen, Feuerlöscher, Brandverhütung" },
        { ue: 278, time: "13:45–14:30", topic: "Evakuierungspläne, Alarmierungsmaßnahmen, Personenrettung" },
        { ue: 279, time: "14:45–15:30", topic: "Praktische Übungen Brandschutz & Evakuierung" },
        { ue: 280, time: "15:30–16:15", topic: "Abschlussbesprechung & Zertifikat" }
      ]
    }
  ]
},

           {
  id: 8,
  label: "Woche 8",
  days: [
    {
      // Montag, 01.12. – Sicherheitstechnik
      weekday: "Montag",
      module: "Grundzüge der Sicherheitstechnik",
      units: [
        { ue: 281, time: "09:00–09:45", topic: "Einführung Sicherheitstechnik – Aufgaben, Prävention" },
        { ue: 282, time: "09:45–10:30", topic: "Sicherheitsorganisation – Grundlagen" },
        { ue: 283, time: "10:45–11:30", topic: "Drei Säulen der Sicherheit: Einsatz, Inhalt, Zusammenwirken" },
        { ue: 284, time: "11:30–12:15", topic: "Mechanische Sicherungseinrichtungen: Zäune, Gitter, Türen" },
        { ue: 285, time: "13:00–13:45", topic: "Schutzziele von Sicherheitszäunen" },
        { ue: 286, time: "13:45–14:30", topic: "Verschiedene Zaunanlagen" },
        { ue: 287, time: "14:45–15:30", topic: "Widerstandsklassen der Verglasung" },
        { ue: 288, time: "15:30–16:15", topic: "Einfriedungsdurchlässe, automatische Türsysteme, Vereinzelungsanlagen" }
      ]
    },

    {
      // Dienstag, 02.12. – Sicherheitstechnik
      weekday: "Dienstag",
      module: "Grundzüge der Sicherheitstechnik",
      units: [
        { ue: 289, time: "09:00–09:45", topic: "Schlösser & Schließzylinder" },
        { ue: 290, time: "09:45–10:30", topic: "Schließanlagen – Organisation & Sicherheit" },
        { ue: 291, time: "10:45–11:30", topic: "Zutrittskontrollsysteme – Grundlagen" },
        { ue: 292, time: "11:30–12:15", topic: "Praxisbeispiele Zutrittskontrolle" },
        { ue: 293, time: "13:00–13:45", topic: "Elektronische Sicherungseinrichtungen – Gefahrmeldeanlagen" },
        { ue: 294, time: "13:45–14:30", topic: "Videoüberwachungssysteme – Technik & Recht" },
        { ue: 295, time: "14:45–15:30", topic: "Kommunikationsmittel im Sicherheitsdienst" },
        { ue: 296, time: "15:30–16:15", topic: "Aufgabenbereiche Einbruch- & Überfallmeldeanlagen" }
      ]
    },

    {
      // Mittwoch, 03.12. – Sicherheitstechnik
      weekday: "Mittwoch",
      module: "Grundzüge der Sicherheitstechnik",
      units: [
        { ue: 297, time: "09:00–09:45", topic: "Brandmeldeanlagen – Aufbau & Bedeutung" },
        { ue: 298, time: "09:45–10:30", topic: "Störmeldeanlagen – Einsatzbereiche" },
        { ue: 299, time: "10:45–11:30", topic: "Feuer- & Rauchschutzabschlüsse" },
        { ue: 300, time: "11:30–12:15", topic: "Feststellanlagen – Funktionsweise" },
        { ue: 301, time: "13:00–13:45", topic: "Sprachalarmierungs- & Evakuierungsanlagen" },
        { ue: 302, time: "13:45–14:30", topic: "Automatische Löschanlagen" },
        { ue: 303, time: "14:45–15:30", topic: "Bündelfunk – Grundlagen & Einsatz" },
        { ue: 304, time: "15:30–16:15", topic: "Analog vs. digitaler Betriebsfunk" }
      ]
    },

    {
      // Donnerstag, 04.12. – Sicherheitstechnik
      weekday: "Donnerstag",
      module: "Grundzüge der Sicherheitstechnik",
      units: [
        { ue: 305, time: "09:00–09:45", topic: "Mechanische Stechuhr & Wächterkontrollsysteme" },
        { ue: 306, time: "09:45–10:30", topic: "Todmannschalter – Einsatz & Bedeutung" },
        { ue: 307, time: "10:45–11:30", topic: "Notruf- & Serviceleitstellen – Aufbau" },
        { ue: 308, time: "11:30–12:15", topic: "Organisation der Alarmverfolgung" },
        { ue: 309, time: "13:00–13:45", topic: "Prozesse & Verantwortlichkeiten im Notfallplan" },
        { ue: 310, time: "13:45–14:30", topic: "Kommunikationstechnik – Überblick" },
        { ue: 311, time: "14:45–15:30", topic: "Brandschutz – Brandklassen & Feuerlöscher" },
        { ue: 312, time: "15:30–16:15", topic: "Evakuierungspläne & Alarmierungsmaßnahmen" }
      ]
    },

    {
      // Freitag, 05.12. – Sicherheitstechnik
      weekday: "Freitag",
      module: "Grundzüge der Sicherheitstechnik",
      units: [
        { ue: 313, time: "09:00–09:45", topic: "Personenrettung – Grundlagen" },
        { ue: 314, time: "09:45–10:30", topic: "Praxisübung – Feuerlöscher & Rettung" },
        { ue: 315, time: "10:45–11:30", topic: "Sicherheitsorganisation in Betrieben" },
        { ue: 316, time: "11:30–12:15", topic: "Wiederholung & Vertiefung der Sicherheitstechnik" },
        { ue: 317, time: "13:00–13:45", topic: "Abschlussübung – Sicherheitstechnik" },
        { ue: 318, time: "13:45–14:30", topic: "Praktische Fallanalyse" },
        { ue: 319, time: "14:45–15:30", topic: "Modulabschlussprüfung Sicherheitstechnik" },
        { ue: 320, time: "15:30–16:15", topic: "Besprechung & Feedback" }
      ]
    }
  ]
},

            {
  id: 9,
  label: "Woche 9",
  days: [
    {
      weekday: "Montag",
      module: "Unfallverhütungsvorschriften",
      units: [
        { ue: 321, time: "09:00–09:45", topic: "DGUV Vorschrift 1 – Grundsätze der Prävention" },
        { ue: 322, time: "09:45–10:30", topic: "Grundpflichten des Unternehmers (§2)" },
        { ue: 323, time: "10:45–11:30", topic: "Unterweisung der Versicherten (§4)" },
        { ue: 324, time: "11:30–12:15", topic: "Zutritts- und Aufenthaltsverbote (§9)" },
        { ue: 325, time: "13:00–13:45", topic: "Zugang zu Vorschriften & Regeln (§12)" },
        { ue: 326, time: "13:45–14:30", topic: "Erste Hilfe – Pflichten des Unternehmers (§24)" },
        { ue: 327, time: "14:45–15:30", topic: "Erforderliche Einrichtungen & Sachmittel (§25)" },
        { ue: 328, time: "15:30–16:15", topic: "Zahl & Ausbildung der Ersthelfer (§26)" }
      ]
    },

    {
      weekday: "Dienstag",
      module: "Unfallverhütungsvorschriften",
      units: [
        { ue: 329, time: "09:00–09:45", topic: "DGUV Vorschrift 23 – Wach- & Sicherungsdienste" },
        { ue: 330, time: "09:45–10:30", topic: "Dienstanweisung & Arbeitssicherheit" },
        { ue: 331, time: "10:45–11:30", topic: "Verbot berauschender Mittel" },
        { ue: 332, time: "11:30–12:15", topic: "Objektsicherung & besondere Gefahren" },
        { ue: 333, time: "13:00–13:45", topic: "Überprüfung & Objekteinweisung (§9)" },
        { ue: 334, time: "13:45–14:30", topic: "Ausrüstung des Personals (§10), Brillenträger (§11)" },
        { ue: 335, time: "14:45–15:30", topic: "Hunde – Haltung, Führung, Transport (§12–17)" },
        { ue: 336, time: "15:30–16:15", topic: "Schusswaffen – Ausrüstung & Beschusszeichen (§18–19)" }
      ]
    },

    {
      weekday: "Mittwoch",
      module: "Unfallverhütungsvorschriften",
      units: [
        { ue: 337, time: "09:00–09:45", topic: "Führung & Aufbewahrung von Munition (§20–22)" },
        { ue: 338, time: "09:45–10:30", topic: "Eignung (§24) & Geldtransporte (§25–26)" },
        { ue: 339, time: "10:45–11:30", topic: "Führungspflichten & Dokumentation (§16)" },
        { ue: 340, time: "11:30–12:15", topic: "ASR A1.3 – Sicherheits- & Gesundheitsschutzkennzeichnung" },
        { ue: 341, time: "13:00–13:45", topic: "Verbotszeichen, Warnzeichen, Gebotszeichen" },
        { ue: 342, time: "13:45–14:30", topic: "Rettungszeichen, Brandschutzzeichen, Zusatzzeichen" },
        { ue: 343, time: "14:45–15:30", topic: "Grafische Symbole, Farben & deren Bedeutung" },
        { ue: 344, time: "15:30–16:15", topic: "Flucht- & Rettungspläne – Praxis & Übungen" }
      ]
    },

    {
      weekday: "Donnerstag",
      module: "Waffensachkunde §7 WaffG",
      units: [
        { ue: 345, time: "09:00–09:45", topic: "Waffengesetz – Definitionen & Kategorien" },
        { ue: 346, time: "09:45–10:30", topic: "Arten von Waffen – Überblick" },
        { ue: 347, time: "10:45–11:30", topic: "Munition – Klassifizierung & Umgang" },
        { ue: 348, time: "11:30–12:15", topic: "Rechtliche Grundlagen Besitz/Erwerb (§§14–17, 21–23 WaffG)" },
        { ue: 349, time: "13:00–13:45", topic: "Transport & Führen von Schusswaffen (§§25–27 WaffG)" },
        { ue: 350, time: "13:45–14:30", topic: "Aufbewahrungspflichten (§36 WaffG)" },
        { ue: 351, time: "14:45–15:30", topic: "Verbotene Waffen (§2 WaffG) – Beispiele" },
        { ue: 352, time: "15:30–16:15", topic: "BewachV – Regelungen zum Waffeneinsatz" }
      ]
    },

    {
      weekday: "Freitag",
      module: "Waffensachkunde §7 WaffG",
      units: [
        { ue: 353, time: "09:00–09:45", topic: "Grenzen der Notwehr & Notstands (§§32, 34 StGB)" },
        { ue: 354, time: "09:45–10:30", topic: "Haftung, straf- & zivilrechtliche Folgen" },
        { ue: 355, time: "10:45–11:30", topic: "Sicherheitsrelevante Einsatzszenarien" },
        { ue: 356, time: "11:30–12:15", topic: "Fallanalyse Waffenmissbrauch" },
        { ue: 357, time: "13:00–13:45", topic: "Dokumentation & Nachweispflichten" },
        { ue: 358, time: "13:45–14:30", topic: "Kontrollmechanismen & Aufsichtspflichten" },
        { ue: 359, time: "14:45–15:30", topic: "Vorbereitung auf praktische Schulung" },
        { ue: 360, time: "15:30–16:15", topic: "Wiederholung & Quiz" }
      ]
    }
  ]
},

            {
  id: 10,
  label: "Woche 10",
  days: [
    {
      weekday: "Montag",
      module: "Waffensachkunde §7 WaffG",
      units: [
        { ue: 361, time: "09:00–09:45", topic: "Praktische Schulung – Waffenhandhabung (Theorie)" },
        { ue: 362, time: "09:45–10:30", topic: "Sicherheitsvorschriften im Umgang" },
        { ue: 363, time: "10:45–11:30", topic: "Lagerung & Transport praktisch" },
        { ue: 364, time: "11:30–12:15", topic: "Kontrollübung Waffenrecht" },
        { ue: 365, time: "13:00–13:45", topic: "Schießstandordnung – Grundlagen" },
        { ue: 366, time: "13:45–14:30", topic: "Verhalten am Schießstand" },
        { ue: 367, time: "14:45–15:30", topic: "Munition praktisch – Zuweisung & Kontrolle" },
        { ue: 368, time: "15:30–16:15", topic: "Besprechung Tagespraxis" }
      ]
    },

    {
      weekday: "Dienstag",
      module: "Waffensachkunde §7 WaffG",
      units: [
        { ue: 369, time: "09:00–09:45", topic: "Praktische Schulung – Handhabung Waffenattrappen" },
        { ue: 370, time: "09:45–10:30", topic: "Zielübungen (Trockenübungen)" },
        { ue: 371, time: "10:45–11:30", topic: "Sicherheitscheck Waffen" },
        { ue: 372, time: "11:30–12:15", topic: "Ablauf einer Waffenkontrolle" },
        { ue: 373, time: "13:00–13:45", topic: "Aufbewahrung & Übergabe – Praxis" },
        { ue: 374, time: "13:45–14:30", topic: "Dokumentationsübung Waffenbuch" },
        { ue: 375, time: "14:45–15:30", topic: "Rechtliche Wiederholung WaffG" },
        { ue: 376, time: "15:30–16:15", topic: "Diskussion – Sicherheitsrisiken" }
      ]
    },

    {
      weekday: "Mittwoch",
      module: "Waffensachkunde §7 WaffG",
      units: [
        { ue: 377, time: "09:00–09:45", topic: "Prüfungsvorbereitung Waffensachkunde" },
        { ue: 378, time: "09:45–10:30", topic: "Fallstudien & Übungen" },
        { ue: 379, time: "10:45–11:30", topic: "Schriftliche Testsimulation" },
        { ue: 380, time: "11:30–12:15", topic: "Mündliche Übungssimulation" },
        { ue: 381, time: "13:00–13:45", topic: "Praxisübung – Verhalten in Notwehrsituationen" },
        { ue: 382, time: "13:45–14:30", topic: "Praxisübung – Übergabe/Transport Waffen" },
        { ue: 383, time: "14:45–15:30", topic: "Abschlussprüfungsvorbereitung" },
        { ue: 384, time: "15:30–16:15", topic: "Besprechung & Waffensachkunde" }
      ]
    },

    {
      weekday: "Donnerstag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 385, time: "09:00–09:45", topic: "Wiederholung Strafrecht – Tatbestände" },
        { ue: 386, time: "09:45–10:30", topic: "Wiederholung Strafverfahrensrecht" },
        { ue: 387, time: "10:45–11:30", topic: "Jedermannsrechte – Übungen" },
        { ue: 388, time: "11:30–12:15", topic: "Datenschutz – Grundlagen & Wiederholung" },
        { ue: 389, time: "13:00–13:45", topic: "Kommunikationspraxis & Deeskalation" },
        { ue: 390, time: "13:45–14:30", topic: "Wiederholung Sicherheitsdienste – Hausrecht" },
        { ue: 391, time: "14:45–15:30", topic: "Fallübungen Sicherheitsdienst" },
        { ue: 392, time: "15:30–16:15", topic: "Dokumentations- & Berichtswesen" }
      ]
    },

    {
      weekday: "Freitag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 393, time: "09:00–09:45", topic: "Prüfungstraining schriftlich – Block 1" },
        { ue: 394, time: "09:45–10:30", topic: "Prüfungstraining schriftlich – Block 2" },
        { ue: 395, time: "10:45–11:30", topic: "Prüfungstraining schriftlich – Block 3" },
        { ue: 396, time: "11:30–12:15", topic: "Besprechung & Korrektur der Tests" },
        { ue: 397, time: "13:00–13:45", topic: "Praxisbeispiele – Sicherheitsdienst Alltag" },
        { ue: 398, time: "13:45–14:30", topic: "Praxisbeispiele – Notwehr/Notstand" },
        { ue: 399, time: "14:45–15:30", topic: "Praxisbeispiele – Festnahmerechte" },
        { ue: 400, time: "15:30–16:15", topic: "Rollenspiel – Konfliktlösung" }
      ]
    }
  ]
},

           {
  id: 11,
  label: "Woche 11",
  days: [
    {
      weekday: "Montag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 401, time: "09:00–09:45", topic: "Überblick & Ziele der Prüfungsvorbereitung" },
        { ue: 402, time: "09:45–10:30", topic: "Wiederholung Rechtsgebiete – Öffentliches Recht" },
        { ue: 403, time: "10:45–11:30", topic: "Wiederholung Gewerberecht" },
        { ue: 404, time: "11:30–12:15", topic: "Wiederholung Bürgerliches Recht (BGB)" },
        { ue: 405, time: "13:00–13:45", topic: "Wiederholung Strafrecht – Tatbestände" },
        { ue: 406, time: "13:45–14:30", topic: "Wiederholung Strafverfahrensrecht" },
        { ue: 407, time: "14:45–15:30", topic: "Jedermannsrechte – Anwendungsübungen" },
        { ue: 408, time: "15:30–16:15", topic: "Datenschutz – Wiederholung & Fallbeispiele" }
      ]
    },

    {
      weekday: "Dienstag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 409, time: "09:00–09:45", topic: "Wiederholung Umgang mit Menschen – Kommunikation" },
        { ue: 410, time: "09:45–10:30", topic: "Deeskalation & Konfliktlösung (Übungen)" },
        { ue: 411, time: "10:45–11:30", topic: "Wiederholung Verteidigungswaffen – rechtliche Grenzen" },
        { ue: 412, time: "11:30–12:15", topic: "Erste Hilfe – Kurzwiederholung" },
        { ue: 413, time: "13:00–13:45", topic: "Brandschutz – Grundlagen & Übungen" },
        { ue: 414, time: "13:45–14:30", topic: "Wiederholung Sicherheitstechnik" },
        { ue: 415, time: "14:45–15:30", topic: "Unfallverhütungsvorschriften – Fallbeispiele" },
        { ue: 416, time: "15:30–16:15", topic: "Wiederholung Waffensachkunde" }
      ]
    },

    {
      weekday: "Mittwoch",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 417, time: "09:00–09:45", topic: "Prüfungstraining schriftlich – Übungsblock 1" },
        { ue: 418, time: "09:45–10:30", topic: "Prüfungstraining schriftlich – Übungsblock 2" },
        { ue: 419, time: "10:45–11:30", topic: "Prüfungstraining schriftlich – Übungsblock 3" },
        { ue: 420, time: "11:30–12:15", topic: "Korrektur & Besprechung der Tests" },
        { ue: 421, time: "13:00–13:45", topic: "Praxisbeispiele Sicherheitsdienst – Hausrecht" },
        { ue: 422, time: "13:45–14:30", topic: "Praxisbeispiele – Notwehr/Notstand" },
        { ue: 423, time: "14:45–15:30", topic: "Praxisbeispiele – Festnahmerechte" },
        { ue: 424, time: "15:30–16:15", topic: "Rollenspiel – Konfliktlösung" }
      ]
    },

    {
      weekday: "Donnerstag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 425, time: "09:00–09:45", topic: "Prüfungsvorbereitung – mündliche Übung 1" },
        { ue: 426, time: "09:45–10:30", topic: "Mündliche Übung 2" },
        { ue: 427, time: "10:45–11:30", topic: "Mündliche Übung 3" },
        { ue: 428, time: "11:30–12:15", topic: "Rollenspiele – Sicherheitslagen" },
        { ue: 429, time: "13:00–13:45", topic: "Rollenspiele – Bedrohungslagen" },
        { ue: 430, time: "13:45–14:30", topic: "Simulation – Kontrollgang & Berichtswesen" },
        { ue: 431, time: "14:45–15:30", topic: "Simulation – Zutrittskontrolle" },
        { ue: 432, time: "15:30–16:15", topic: "Simulation – Evakuierungsübung" }
      ]
    },

    {
      weekday: "Freitag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 433, time: "09:00–09:45", topic: "Wiederholung schwierige Paragraphen" },
        { ue: 434, time: "09:45–10:30", topic: "Training Fachbegriffe & Definitionen" },
        { ue: 435, time: "10:45–11:30", topic: "Abschluss schriftliche Probeklausur" },
        { ue: 436, time: "11:30–12:15", topic: "Besprechung Probeklausur" },
        { ue: 437, time: "13:00–13:45", topic: "Mündliche Prüfungssimulation (Gruppe A)" },
        { ue: 438, time: "13:45–14:30", topic: "Mündliche Prüfungssimulation (Gruppe B)" },
        { ue: 439, time: "14:45–15:30", topic: "Mündliche Prüfungssimulation (Gruppe C)" },
        { ue: 440, time: "15:30–16:15", topic: "Feedback & Lernstrategien" }
      ]
    }
  ]
},

           {
  id: 12,
  label: "Woche 12",
  days: [
    {
      weekday: "Montag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 441, time: "09:00–09:45", topic: "Überblick & Ziele der Prüfungsvorbereitung" },
        { ue: 442, time: "09:45–10:30", topic: "Wiederholung Rechtsgebiete – Öffentliches Recht" },
        { ue: 443, time: "10:45–11:30", topic: "Wiederholung Gewerberecht" },
        { ue: 444, time: "11:30–12:15", topic: "Wiederholung Bürgerliches Recht (BGB)" },
        { ue: 445, time: "13:00–13:45", topic: "Wiederholung Strafrecht – Tatbestände" },
        { ue: 446, time: "13:45–14:30", topic: "Wiederholung Strafverfahrensrecht" },
        { ue: 447, time: "14:45–15:30", topic: "Jedermannsrechte – Anwendungsübungen" },
        { ue: 448, time: "15:30–16:15", topic: "Datenschutz – Wiederholung & Fallbeispiele" }
      ]
    },

    {
      weekday: "Dienstag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 449, time: "09:00–09:45", topic: "Wiederholung Umgang mit Menschen – Kommunikation" },
        { ue: 450, time: "09:45–10:30", topic: "Deeskalation & Konfliktlösung (Übungen)" },
        { ue: 451, time: "10:45–11:30", topic: "Wiederholung Verteidigungswaffen – rechtliche Grenzen" },
        { ue: 452, time: "11:30–12:15", topic: "Erste Hilfe – Kurzwiederholung" },
        { ue: 453, time: "13:00–13:45", topic: "Brandschutz – Grundlagen & Übungen" },
        { ue: 454, time: "13:45–14:30", topic: "Wiederholung Sicherheitstechnik" },
        { ue: 455, time: "14:45–15:30", topic: "Unfallverhütungsvorschriften – Fallbeispiele" },
        { ue: 456, time: "15:30–16:15", topic: "Wiederholung Waffensachkunde" }
      ]
    },

    {
      weekday: "Mittwoch",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 457, time: "09:00–09:45", topic: "Prüfungstraining schriftlich – Übungsblock 1" },
        { ue: 458, time: "09:45–10:30", topic: "Prüfungstraining schriftlich – Übungsblock 2" },
        { ue: 459, time: "10:45–11:30", topic: "Prüfungstraining schriftlich – Übungsblock 3" },
        { ue: 460, time: "11:30–12:15", topic: "Korrektur & Besprechung der Tests" },
        { ue: 461, time: "13:00–13:45", topic: "Praxisbeispiele Sicherheitsdienst – Hausrecht" },
        { ue: 462, time: "13:45–14:30", topic: "Praxisbeispiele – Notwehr/Notstand" },
        { ue: 463, time: "14:45–15:30", topic: "Praxisbeispiele – Festnahmerechte" },
        { ue: 464, time: "15:30–16:15", topic: "Rollenspiel – Konfliktlösung" }
      ]
    },

    {
      weekday: "Donnerstag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 465, time: "09:00–09:45", topic: "Prüfungsvorbereitung – mündliche Übung 1" },
        { ue: 466, time: "09:45–10:30", topic: "Mündliche Übung 2" },
        { ue: 467, time: "10:45–11:30", topic: "Mündliche Übung 3" },
        { ue: 468, time: "11:30–12:15", topic: "Rollenspiele – Sicherheitslagen" },
        { ue: 469, time: "13:00–13:45", topic: "Rollenspiele – Bedrohungslagen" },
        { ue: 470, time: "13:45–14:30", topic: "Simulation – Kontrollgang & Berichtswesen" },
        { ue: 471, time: "14:45–15:30", topic: "Simulation – Zutrittskontrolle" },
        { ue: 472, time: "15:30–16:15", topic: "Simulation – Evakuierungsübung" }
      ]
    },

    {
      weekday: "Freitag",
      module: "Prüfungsvorbereitung",
      units: [
        { ue: 473, time: "09:00–09:45", topic: "Wiederholung schwierige Paragraphen" },
        { ue: 474, time: "09:45–10:30", topic: "Training Fachbegriffe & Definitionen" },
        { ue: 475, time: "10:45–11:30", topic: "Abschluss schriftliche Probeklausur" },
        { ue: 476, time: "11:30–12:15", topic: "Besprechung Probeklausur" },
        { ue: 477, time: "13:00–13:45", topic: "Mündliche Prüfungssimulation (Gruppe A)" },
        { ue: 478, time: "13:45–14:30", topic: "Mündliche Prüfungssimulation (Gruppe B)" },
        { ue: 479, time: "14:45–15:30", topic: "Mündliche Prüfungssimulation (Gruppe C)" },
        { ue: 480, time: "15:30–16:15", topic: "Feedback & Lernstrategien" }
    ]
  }
]              // Schließt: days von Woche 12
            }  // Schließt: Woche 12 (das Objekt mit id: 12)
          ]    // Schließt: weeks-Array des Kurses von Herr Klein
        }      // Schließt: Kurs-Objekt { id: "klein-3m-2025-11-10", ... }
      ]        // Schließt: courses-Array von Herr Klein
    },         // Schließt: Trainer-Objekt Herr Klein (Komma, weil danach Engelmann kommt)

    
     {
        id: "engelmann",
      name: "Frau Engelmann",
  courses: [
    {
      id: "engelmann-3m-2025-09-08",
      label: "3 Monate · Start 08.09.",
      type: "3 Monate",
      startDate: "2025-09-08",
      weeks: [
        {
          id: 1,
          label: "Woche 1",
          days: [
            {
              weekday: "Montag",
        module: "Recht der öffentlichen Sicherheit und Ordnung",
        units: [
          { ue: 1, time: "09:00–09:45", topic: "Begrüßung und Einweisung in den Ablauf der Maßnahme" },
          { ue: 2, time: "09:45–10:30", topic: "Erläuterung der Maßnahme, der Hausordnung und allgemeine Regeln" },
          { ue: 3, time: "10:45–11:30", topic: "Einweisung in das Lernportal, Jobbörse sowie Lehrmaterial" },
          { ue: 4, time: "11:30–12:15", topic: "Einweisung in das Lernportal, Jobbörse sowie Lehrmaterial" },
          { ue: 5, time: "13:00–13:45", topic: "Polizei & Ordnungsbehörden – Zuständigkeiten und Aufgaben" },
          { ue: 6, time: "13:45–14:30", topic: "Gewaltenteilung – Exekutive & Judikative Legislative" },
          { ue: 7, time: "14:45–15:30", topic: "Aufbau der BRD – Bund Länder Kommunen" },
          { ue: 8, time: "15:30–16:15", topic: "Staatsgewalten & deren Kompetenzen" }
              ]
            },
            {
              weekday: "Dienstag",
              module: "Öffentliche Sicherheit & Ordnung",
              units: [
                { ue: 9, time: "09:00–09:45", topic: "Grundgesetz – Bedeutung & Entstehung" },
                { ue: 10, time: "09:45–10:30", topic: "Grundgesetz – Artikelübersicht" },
                { ue: 11, time: "10:45–11:30", topic: "Ewigkeitsklausel" },
                { ue: 12, time: "11:30–12:15", topic: "Drittwirkung des Grundgesetzes" },
                { ue: 13, time: "13:00–13:45", topic: "Gefahrenabwehr – Grundlagen" },
                { ue: 14, time: "13:45–14:30", topic: "Gefahrenabwehr – präventive Maßnahmen" },
                { ue: 15, time: "14:45–15:30", topic: "Zuständigkeiten bei Störungen" },
                { ue: 16, time: "15:30–16:15", topic: "Zuständigkeiten bei Störungen" }
              ]
            },
            {
              weekday: "Mittwoch",
              module: "Öffentliche Sicherheit & Ordnung",
              units: [
                { ue: 17, time: "09:00–09:45", topic: "Zusammenarbeit Sicherheitsdienst – Polizei" },
                { ue: 18, time: "09:45–10:30", topic: "Zusammenarbeit mit Kommunen" },
                { ue: 19, time: "10:45–11:30", topic: "Dokumentation – Grundlagen" },
                { ue: 20, time: "11:30–12:15", topic: "Berichterstattung – Fallbeispiele" },
                { ue: 21, time: "13:00–13:45", topic: "Eingriffs- & Handlungsmöglichkeiten – Theorie" },
                { ue: 22, time: "13:45–14:30", topic: "Eingriffs- & Handlungsmöglichkeiten – Praxis" },
                { ue: 23, time: "14:45–15:30", topic: "Wiederholung Modul 1 – Teil 1" },
                { ue: 24, time: "15:30–16:15", topic: "Wiederholung Modul 1 – Teil 2" }
              ]
            },
            {
              weekday: "Donnerstag",
              module: "Öffentliche Sicherheit & Ordnung",
              units: [
                { ue: 25, time: "09:00–09:45", topic: "Zusammenfassung GG & Gewaltenteilung" },
                { ue: 26, time: "09:45–10:30", topic: "Vertiefung Gefahrenabwehr" },
                { ue: 27, time: "10:45–11:30", topic: "Vertiefung Zuständigkeiten" },
                { ue: 28, time: "11:30–12:15", topic: "Rollenspiel – Sicherheitslage" },
                { ue: 29, time: "13:00–13:45", topic: "Praxisübungen – Dokumentation" },
                { ue: 30, time: "13:45–14:30", topic: "Praxisübungen – Eingriffsrechte" },
                { ue: 31, time: "14:45–15:30", topic: "Wiederholung aller Inhalte" },
                { ue: 32, time: "15:30–16:15", topic: "Lernzielkontrolle Modul 1" }
              ]
            },
            {
              weekday: "Freitag",
              module: "Gewerberecht",
              units: [
                { ue: 33, time: "09:00–09:45", topic: "§34a GewO – Grundlagen" },
                { ue: 34, time: "09:45–10:30", topic: "§34a GewO – Befugnisse" },
                { ue: 35, time: "10:45–11:30", topic: "Bewachungsunternehmen – Pflichten" },
                { ue: 36, time: "11:30–12:15", topic: "Mitarbeiter – Voraussetzungen" },
                { ue: 37, time: "13:00–13:45", topic: "Bewacherregister" },
                { ue: 38, time: "13:45–14:30", topic: "Antragsstellung – Praxisbeispiele" },
                { ue: 39, time: "14:45–15:30", topic: "Sachkundeprüfung & U40" },
                { ue: 40, time: "15:30–16:15", topic: "Befreiung & Tätigkeitsfelder" }
              ]
            }
          ]
        },

        {
          id: 2,
          label: "Woche 2",
          days: [
            {
              weekday: "Montag",
              module: "Gewerberecht",
              units: [
                { ue: 41, time: "09:00–09:45", topic: "Gewerbeordnung – Anzeigepflicht §14" },
                { ue: 42, time: "09:45–10:30", topic: "Gewerbeordnung – Auskunft & Nachschau §29" },
                { ue: 43, time: "10:45–11:30", topic: "Bewachungsverordnung §§14 & 15" },
                { ue: 44, time: "11:30–12:15", topic: "Bewachungsverordnung §§17–18" },
                { ue: 45, time: "13:00–13:45", topic: "Bewachungsverordnung §§19–21" },
                { ue: 46, time: "13:45–14:30", topic: "Aufsichtspflichten & Kontrollmechanismen" },
                { ue: 47, time: "14:45–15:30", topic: "Konsequenzen bei Verstößen" },
                { ue: 48, time: "15:30–16:15", topic: "Anmeldung von Tätigkeiten & Dokumentationspflichten" }
              ]
            },
            {
              weekday: "Dienstag",
              module: "Bürgerliches Recht (BGB)",
              units: [
                { ue: 49, time: "09:00–09:45", topic: "Grundlagen BGB – Fundrecht" },
                { ue: 50, time: "09:45–10:30", topic: "Privatrecht – Abgrenzung" },
                { ue: 51, time: "10:45–11:30", topic: "Rechtsfähigkeit – Beginn & Ende" },
                { ue: 52, time: "11:30–12:15", topic: "Schikaneverbot" },
                { ue: 53, time: "13:00–13:45", topic: "Gefährdungshaftung – Einführung" },
                { ue: 54, time: "13:45–14:30", topic: "Verschuldensunabhängige Haftung" },
                { ue: 55, time: "14:45–15:30", topic: "Verschuldensabhängige Haftung" },
                { ue: 56, time: "15:30–16:15", topic: "Praxisbeispiele Haftung" }
              ]
            },
            {
              weekday: "Mittwoch",
              module: "Bürgerliches Recht (BGB)",
              units: [
                { ue: 57, time: "09:00–09:45", topic: "Besitz & Eigentum" },
                { ue: 58, time: "09:45–10:30", topic: "Besitzdiener" },
                { ue: 59, time: "10:45–11:30", topic: "Sachen & Tiere" },
                { ue: 60, time: "11:30–12:15", topic: "Besitz & übertragene Rechte" },
                { ue: 61, time: "13:00–13:45", topic: "Vertragsrecht – Grundlagen" },
                { ue: 62, time: "13:45–14:30", topic: "Vertragsabschluss" },
                { ue: 63, time: "14:45–15:30", topic: "Rechte & Pflichten aus Verträgen" },
                { ue: 64, time: "15:30–16:15", topic: "Vertragsverletzungen" }
              ]
            },
            {
              weekday: "Donnerstag",
              module: "Bürgerliches Recht (BGB)",
              units: [
                { ue: 65, time: "09:00–09:45", topic: "Schadensersatz – Grundlagen" },
                { ue: 66, time: "09:45–10:30", topic: "Haftung – Grenzen privater Eingriffe" },
                { ue: 67, time: "10:45–11:30", topic: "Unerlaubte Handlung" },
                { ue: 68, time: "11:30–12:15", topic: "Folgen unerlaubter Handlung" },
                { ue: 69, time: "13:00–13:45", topic: "Abgrenzung rechtmäßiges Handeln" },
                { ue: 70, time: "13:45–14:30", topic: "Abgrenzung strafbare Handlung" },
                { ue: 71, time: "14:45–15:30", topic: "Praxisbeispiel: Hausrecht" },
                { ue: 72, time: "15:30–16:15", topic: "Praxisbeispiel: Zutrittskontrollen" }
              ]
            },
            {
              weekday: "Freitag",
              module: "Bürgerliches Recht (BGB)",
              units: [
                { ue: 73, time: "09:00–09:45", topic: "Jedermannsrechte nach BGB – Einführung" },
                { ue: 74, time: "09:45–10:30", topic: "§227 Notwehr & §228 Verteidigungsnotstand" },
                { ue: 75, time: "10:45–11:30", topic: "§229 Selbsthilfe & §859 Selbsthilfe des Besitzers" },
                { ue: 76, time: "11:30–12:15", topic: "§860 Selbsthilfe des Besitzdieners & §904 Angriffsnotstand" },
                { ue: 77, time: "13:00–13:45", topic: "Praxisbeispiel: Eingreifen in Notfällen" },
                { ue: 78, time: "13:45–14:30", topic: "Rollenspiel – Zutrittskontrolle mit Konflikt" },
                { ue: 79, time: "14:45–15:30", topic: "Wiederholung & Zusammenfassung BGB" },
                { ue: 80, time: "15:30–16:15", topic: "Lernzielkontrolle – BGB" }
              ]
            }
          ]
        },

        {
          id: 3,
          label: "Woche 3",
          days: [
            {
              weekday: "Montag",
              module: "Bürgerliches Recht (BGB)",
              units: [
                { ue: 81, time: "09:00–09:45", topic: "Jedermannsrechte – Übersicht StGB/BGB" },
                { ue: 82, time: "09:45–10:30", topic: "Praxisbeispiele Sicherheitsdienst – Hausrecht" },
                { ue: 83, time: "10:45–11:30", topic: "Praxisbeispiele Zutrittskontrollen" },
                { ue: 84, time: "11:30–12:15", topic: "Eingreifen in Notfallsituationen" },
                { ue: 85, time: "13:00–13:45", topic: "Jedermannsrechte – Rollenspiele" },
                { ue: 86, time: "13:45–14:30", topic: "Fallanalyse – Notwehr / Selbsthilfe" },
                { ue: 87, time: "14:45–15:30", topic: "Abgrenzung rechtmäßiges Handeln vs. strafbare Handlung" },
                { ue: 88, time: "15:30–16:15", topic: "Wiederholung & Lernzielkontrolle Modul 3" }
              ]
            },
            {
              weekday: "Dienstag",
              module: "Straf- & Strafverfahrensrecht",
              units: [
                { ue: 89, time: "09:00–09:45", topic: "Materielles Strafrecht – Tatbestand" },
                { ue: 90, time: "09:45–10:30", topic: "Schuld, Vorsatz, Fahrlässigkeit" },
                { ue: 91, time: "10:45–11:30", topic: "Versuch, Rechtsfolgen" },
                { ue: 92, time: "11:30–12:15", topic: "Aufbau Straftat – Tatbestandsmerkmale" },
                { ue: 93, time: "13:00–13:45", topic: "Rechtswidrigkeit & Schuld" },
                { ue: 94, time: "13:45–14:30", topic: "Verbrechen vs. Vergehen – Unterschiede & Beispiele" },
                { ue: 95, time: "14:45–15:30", topic: "Garantenstellung – Pflichten zur Abwendung von Schäden" },
                { ue: 96, time: "15:30–16:15", topic: "Echtes und unechtes Unterlassungsdelikt" }
              ]
            },
            {
              weekday: "Mittwoch",
              module: "Straf- & Strafverfahrensrecht",
              units: [
                { ue: 97, time: "09:00–09:45", topic: "Strafverfahrensrecht – Ablauf eines Verfahrens" },
                { ue: 98, time: "09:45–10:30", topic: "Rechte & Pflichten Beschuldigter" },
                { ue: 99, time: "10:45–11:30", topic: "Rechte & Pflichten Zeugen" },
                { ue: 100, time: "11:30–12:15", topic: "Aufbau StGB – Allgemeiner & Besonderer Teil" },
                { ue: 101, time: "13:00–13:45", topic: "Nebengesetze (StPO, BtMG, JuSchG)" },
                { ue: 102, time: "13:45–14:30", topic: "Besonderer Teil StGB – Diebstahl §§242, 243" },
                { ue: 103, time: "14:45–15:30", topic: "Diebstahl mit Waffen / Bandendiebstahl §244" },
                { ue: 104, time: "15:30–16:15", topic: "Unterschlagung §§246, 248a" }
              ]
            },
            {
              weekday: "Donnerstag",
              module: "Straf- & Strafverfahrensrecht",
              units: [
                { ue: 105, time: "09:00–09:45", topic: "Raub §249, Räuberischer Diebstahl §252" },
                { ue: 106, time: "09:45–10:30", topic: "Erpressung §253" },
                { ue: 107, time: "10:45–11:30", topic: "Hehlerei §259" },
                { ue: 108, time: "11:30–12:15", topic: "Betrug §§263, 263a" },
                { ue: 109, time: "13:00–13:45", topic: "Untreue §266 / Veruntreuung §265a" },
                { ue: 110, time: "13:45–14:30", topic: "Körperverletzung §223" },
                { ue: 111, time: "14:45–15:30", topic: "Sachbeschädigung §303" },
                { ue: 112, time: "15:30–16:15", topic: "Brandstiftung §306" }
              ]
            },
            {
              weekday: "Freitag",
              module: "Straf- & Strafverfahrensrecht – Prüfungstag",
              units: [
                { ue: 113, time: "09:00–09:45", topic: "Schadensersatz §281, Unterlassungsdelikte §323c" },
                { ue: 114, time: "09:45–10:30", topic: "Notwehr §§32, 34, 35" },
                { ue: 115, time: "10:45–11:30", topic: "Verhältnismäßigkeit & Erforderlichkeit" },
                { ue: 116, time: "11:30–12:15", topic: "StPO – Rechte & Pflichten Sicherheitskraft" },
                { ue: 117, time: "13:00–13:45", topic: "Festnahme durch Privatperson §127 StPO" },
                { ue: 118, time: "13:45–14:30", topic: "Beweissicherung & Anzeigeerstattung" },
                { ue: 119, time: "14:45–15:30", topic: "Praxisfallanalyse / Simulationen" },
                { ue: 120, time: "15:30–16:15", topic: "Besprechung schriftliche Übung / Lernzielkontrolle" }
              ]
            }
          ]
        },

        {
          id: 4,
          label: "Woche 4",
          days: [
            {
              weekday: "Montag",
              module: "Straf- & Strafverfahrensrecht",
              units: [
                { ue: 121, time: "09:00–09:45", topic: "Notwehr & rechtfertigender Notstand §§32, 34" },
                { ue: 122, time: "09:45–10:30", topic: "Aggressiver Notstand §35" },
                { ue: 123, time: "10:45–11:30", topic: "Verhältnismäßigkeit & Erforderlichkeit in Jedermannsrechten" },
                { ue: 124, time: "11:30–12:15", topic: "Fallbeispiele Notwehr / Notstand" },
                { ue: 125, time: "13:00–13:45", topic: "StPO – Rechte & Pflichten der Sicherheitskraft" },
                { ue: 126, time: "13:45–14:30", topic: "Festnahme durch Privatperson §127 StPO" },
                { ue: 127, time: "14:45–15:30", topic: "Beweissicherung & Anzeigeerstattung" },
                { ue: 128, time: "15:30–16:15", topic: "Praxisbeispiele – Strafverfahren" }
              ]
            },
            {
              weekday: "Dienstag",
              module: "Straf- & Strafverfahrensrecht",
              units: [
                { ue: 129, time: "09:00–09:45", topic: "Computerbetrug, Untreue, Veruntreuung (Vertiefung)" },
                { ue: 130, time: "09:45–10:30", topic: "Körperverletzung, Sachbeschädigung (Vertiefung)" },
                { ue: 131, time: "10:45–11:30", topic: "Raub, Erpressung, Hehlerei (Vertiefung)" },
                { ue: 132, time: "11:30–12:15", topic: "Betrug §263 / Computerbetrug §263a (Fallanalyse)" },
                { ue: 133, time: "13:00–13:45", topic: "Praxisfall – Diebstahl & Unterschlagung" },
                { ue: 134, time: "13:45–14:30", topic: "Praxisfall – Brandstiftung & Schadensersatz" },
                { ue: 135, time: "14:45–15:30", topic: "Rollenspiel – Strafverfolgung" },
                { ue: 136, time: "15:30–16:15", topic: "Lernzielkontrolle Modul 4 Teil 1" }
              ]
            },
            {
              weekday: "Mittwoch",
              module: "Straf- & Strafverfahrensrecht",
              units: [
                { ue: 137, time: "09:00–09:45", topic: "Praxisübungen: Notwehr / Notstand" },
                { ue: 138, time: "09:45–10:30", topic: "Praxisübungen: Festnahme §127 StPO" },
                { ue: 139, time: "10:45–11:30", topic: "Beweissicherung & Anzeigeerstattung" },
                { ue: 140, time: "11:30–12:15", topic: "Fallanalyse – Unterlassungsdelikte §323c" },
                { ue: 141, time: "13:00–13:45", topic: "Aggressiver vs. rechtfertigender Notstand" },
                { ue: 142, time: "13:45–14:30", topic: "Verhältnismäßigkeit / Erforderlichkeit" },
                { ue: 143, time: "14:45–15:30", topic: "Praxis: Simulation Notfallsituationen" },
                { ue: 144, time: "15:30–16:15", topic: "Wiederholung & Lernzielkontrolle" }
              ]
            },
            {
              weekday: "Donnerstag",
              module: "Straf- & Strafverfahrensrecht",
              units: [
                { ue: 145, time: "09:00–09:45", topic: "Rechte & Pflichten Sicherheitskraft – Fallanalyse" },
                { ue: 146, time: "09:45–10:30", topic: "Praxis – Anzeigeerstattung" },
                { ue: 147, time: "10:45–11:30", topic: "Notwehr / Notstand – Vertiefung" },
                { ue: 148, time: "11:30–12:15", topic: "Fallbeispiele aus Sicherheitsdienst" },
                { ue: 149, time: "13:00–13:45", topic: "Praxis: Dokumentation & Berichterstattung" },
                { ue: 150, time: "13:45–14:30", topic: "Rollenspiel – Konfliktsituationen" },
                { ue: 151, time: "14:45–15:30", topic: "Prüfungsvorbereitung – Strafrecht" },
                { ue: 152, time: "15:30–16:15", topic: "Zusammenfassung Strafrecht" }
              ]
            },
            {
              weekday: "Freitag",
              module: "Straf- & Strafverfahrensrecht",
              units: [
                { ue: 153, time: "09:00–09:45", topic: "Simulation Strafverfahren – schriftliche Übung" },
                { ue: 154, time: "09:45–10:30", topic: "Besprechung schriftliche Übung" },
                { ue: 155, time: "10:45–11:30", topic: "Praxis – Notwehr / Notstand" },
                { ue: 156, time: "11:30–12:15", topic: "Praxis – Festnahme §127 StPO" },
                { ue: 157, time: "13:00–13:45", topic: "Praxis – Anzeige & Beweissicherung" },
                { ue: 158, time: "13:45–14:30", topic: "Vertiefung Fallanalyse" },
                { ue: 159, time: "14:45–15:30", topic: "Besprechung & Rückmeldung" },
                { ue: 160, time: "15:30–16:15", topic: "Lernzielkontrolle Strafrecht" }
              ]
            }
          ]
        },

        {
          id: 5,
          label: "Woche 5",
          days: [
            {
              weekday: "Montag",
              module: "Straf- & Strafverfahrensrecht",
              units: [
                { ue: 161, time: "09:00–09:45", topic: "Wiederholung – Materielles Strafrecht" },
                { ue: 162, time: "09:45–10:30", topic: "Wiederholung – Aufbau einer Straftat" },
                { ue: 163, time: "10:45–11:30", topic: "Fallanalysen – Unterlassungsdelikte / Notwehr" },
                { ue: 164, time: "11:30–12:15", topic: "Fallanalyse – Notstand & Verhältnismäßigkeit" },
                { ue: 165, time: "13:00–13:45", topic: "Rollenspiel – Festnahme durch Privatperson §127 StPO" },
                { ue: 166, time: "13:45–14:30", topic: "Dokumentation & Berichterstattung" },
                { ue: 167, time: "14:45–15:30", topic: "Lernzielkontrolle Strafrecht" },
                { ue: 168, time: "15:30–16:15", topic: "Strafrecht Abschlussbesprechung" }
              ]
            },
            {
              weekday: "Dienstag",
              module: "Jedermannsrechte – Ausnahmerechte",
              units: [
                { ue: 169, time: "09:00–09:45", topic: "Einführung in Jedermannsrechte" },
                { ue: 170, time: "09:45–10:30", topic: "Abgrenzung Rechtfertigungs- und Entschuldigungsgründe" },
                { ue: 171, time: "10:45–11:30", topic: "Festnahmerechte §127 (1) StPO / §229 BGB" },
                { ue: 172, time: "11:30–12:15", topic: "Jedermannsrechte StGB §§32, 33, 34, 35" },
                { ue: 173, time: "13:00–13:45", topic: "Jedermannsrechte BGB §§227, 228, 859, 860, 904" },
                { ue: 174, time: "13:45–14:30", topic: "Jedermannsrechte OWiG §15" },
                { ue: 175, time: "14:45–15:30", topic: "Theoretische Übungen – Eingriffsrechte" },
                { ue: 176, time: "15:30–16:15", topic: "Rollenspiele – Notwehrsituationen & Selbsthilfe" }
              ]
            },
            {
              weekday: "Mittwoch",
              module: "Jedermannsrechte – Ausnahmerechte",
              units: [
                { ue: 177, time: "09:00–09:45", topic: "Rollenspiele – Festnahme & Selbsthilfe" },
                { ue: 178, time: "09:45–10:30", topic: "Praxisübungen – Eingriffsrechte & Notwehrsituationen" },
                { ue: 179, time: "10:45–11:30", topic: "Fallbeispiele – Sicherheitsdienst / Zutrittskontrollen" },
                { ue: 180, time: "11:30–12:15", topic: "Dokumentation & Berichterstattung" },
                { ue: 181, time: "13:00–13:45", topic: "Besprechung der Rollenspiele / Reflexion" },
                { ue: 182, time: "13:45–14:30", topic: "Lernzielkontrolle Jedermannsrechte" },
                { ue: 183, time: "14:45–15:30", topic: "Feedback & offene Fragen Jedermannsrechte" },
                { ue: 184, time: "15:30–16:15", topic: "Zusammenfassung & Wiederholung Jedermannsrechte" }
              ]
            },
            {
              weekday: "Donnerstag",
              module: "Datenschutz",
              units: [
                { ue: 185, time: "09:00–09:45", topic: "Grundlagen DSGVO & BDSG, Rechte Betroffener" },
                { ue: 186, time: "09:45–10:30", topic: "Datenschutz bei Videoüberwachung & Zutrittskontrollen" },
                { ue: 187, time: "10:45–11:30", topic: "Datenerfassung & Speicherung" },
                { ue: 188, time: "11:30–12:15", topic: "Schweigepflicht, Datenweitergabe, Dokumentationspflichten" },
                { ue: 189, time: "13:00–13:45", topic: "Zusammenhang Datenschutz & StGB" },
                { ue: 190, time: "13:45–14:30", topic: "Aufgaben & Voraussetzungen Datenschutzbeauftragter" },
                { ue: 191, time: "14:45–15:30", topic: "Technische Maßnahmen – Zugriffskontrollen & Verschlüsselung" },
                { ue: 192, time: "15:30–16:15", topic: "Organisatorische Maßnahmen – Protokollierung & Datensicherung" }
              ]
            },
            {
              weekday: "Freitag",
              module: "Datenschutz",
              units: [
                { ue: 193, time: "09:00–09:45", topic: "Updates & Mitarbeiterschulung" },
                { ue: 194, time: "09:45–10:30", topic: "Praktische Übungen Datensicherung" },
                { ue: 195, time: "10:45–11:30", topic: "Fallbeispiele aus Sicherheitsdienst" },
                { ue: 196, time: "11:30–12:15", topic: "Übung – Datenschutz bei Zutrittskontrollen" },
                { ue: 197, time: "13:00–13:45", topic: "Dokumentation & Berichterstattung" },
                { ue: 198, time: "13:45–14:30", topic: "Rollenspiel – Datenschutzkonflikt" },
                { ue: 199, time: "14:45–15:30", topic: "Wiederholung & Lernzielkontrolle Datenschutz" },
                { ue: 200, time: "15:30–16:15", topic: "Abschlussbesprechung Datenschutz" }
              ]
            }
          ]
        },

        {
          id: 6,
          label: "Woche 6",
          days: [
            {
              weekday: "Montag",
              module: "Umgang mit Menschen",
              units: [
                { ue: 201, time: "09:00–09:45", topic: "Einführung – Bedürfnisse, Motive, Motivation" },
                { ue: 202, time: "09:45–10:30", topic: "Selbstwertgefühl & Wahrnehmung" },
                { ue: 203, time: "10:45–11:30", topic: "Diversität & Vorurteile" },
                { ue: 204, time: "11:30–12:15", topic: "Menschenkenntnis & erster Eindruck" },
                { ue: 205, time: "13:00–13:45", topic: "Verhalten des Menschen & Steuerung" },
                { ue: 206, time: "13:45–14:30", topic: "Interkulturelle Kompetenz" },
                { ue: 207, time: "14:45–15:30", topic: "Kommunikationsarten & Modelle" },
                { ue: 208, time: "15:30–16:15", topic: "Eisberg-Modell – Sachebene / Beziehungsebene" }
              ]
            },
            {
              weekday: "Dienstag",
              module: "Umgang mit Menschen",
              units: [
                { ue: 209, time: "09:00–09:45", topic: "Gesprächstechniken: Schallplatte mit Sprung, Vernebelung" },
                { ue: 210, time: "09:45–10:30", topic: "Kommunikationsabstände" },
                { ue: 211, time: "10:45–11:30", topic: "Maslow-Pyramide" },
                { ue: 212, time: "11:30–12:15", topic: "Stress und Auswirkung auf Gesundheit" },
                { ue: 213, time: "13:00–13:45", topic: "Frustration, Aggression, Resignation & Zusammenhang" },
                { ue: 214, time: "13:45–14:30", topic: "Deeskalation, Konflikte & Konfliktlösung" },
                { ue: 215, time: "14:45–15:30", topic: "Aktives Zuhören, Sender & Empfänger" },
                { ue: 216, time: "15:30–16:15", topic: "Gruppen, Menschenmengen, Menschenmassen" }
              ]
            },
            {
              weekday: "Mittwoch",
              module: "Umgang mit Menschen",
              units: [
                { ue: 217, time: "09:00–09:45", topic: "Besonderheiten & Verhaltensweisen besonderer Personengruppen" },
                { ue: 218, time: "09:45–10:30", topic: "Jugendliche, Betrunkene, Drogenabhängige, Senioren" },
                { ue: 219, time: "10:45–11:30", topic: "Massenpsychologische Phänomene" },
                { ue: 220, time: "11:30–12:15", topic: "Massenpanik, Panikarten & Verhaltensweisen" },
                { ue: 221, time: "13:00–13:45", topic: "Besonderheiten Großveranstaltungen" },
                { ue: 222, time: "13:45–14:30", topic: "Besonderheiten Flüchtlingsunterkünfte" },
                { ue: 223, time: "14:45–15:30", topic: "Praxisbeispiele Sicherheitsdienst" },
                { ue: 224, time: "15:30–16:15", topic: "Fallanalysen & Diskussion" }
              ]
            },
            {
              weekday: "Donnerstag",
              module: "Umgang mit Menschen",
              units: [
                { ue: 225, time: "09:00–09:45", topic: "Kommunikationsübungen – Rollenspiele" },
                { ue: 226, time: "09:45–10:30", topic: "Konfliktmanagement in Gruppen" },
                { ue: 227, time: "10:45–11:30", topic: "Deeskalationsstrategien" },
                { ue: 228, time: "11:30–12:15", topic: "Praxis: Intervention bei Konflikten" },
                { ue: 229, time: "13:00–13:45", topic: "Simulationen – Menschenmengensteuerung" },
                { ue: 230, time: "13:45–14:30", topic: "Beobachtung & Verhaltenstraining" },
                { ue: 231, time: "14:45–15:30", topic: "Reflexion & Feedback" },
                { ue: 232, time: "15:30–16:15", topic: "Besprechung – Rollenspielauswertung" }
              ]
            },
            {
              weekday: "Freitag",
              module: "Umgang mit Menschen",
              units: [
                { ue: 233, time: "09:00–09:45", topic: "Wiederholung – Bedürfnisse & Motivation" },
                { ue: 234, time: "09:45–10:30", topic: "Wiederholung – Kommunikationsarten & Eisberg-Modell" },
                { ue: 235, time: "10:45–11:30", topic: "Praxisbeispiele – Konfliktbewältigung" },
                { ue: 236, time: "11:30–12:15", topic: "Fallanalyse – Menschenmassensteuerung" },
                { ue: 237, time: "13:00–13:45", topic: "Lernzielkontrolle Umgang mit Menschen" },
                { ue: 238, time: "13:45–14:30", topic: "Besprechung der Ergebnisse" },
                { ue: 239, time: "14:45–15:30", topic: "Feedback & offene Fragen" },
                { ue: 240, time: "15:30–16:15", topic: "Zusammenfassung Umgang mit Menschen" }
              ]
            }
          ]
        },

        {
          id: 7,
          label: "Woche 7",
          days: [
            {
              weekday: "Montag",
              module: "Umgang mit Verteidigungswaffen",
              units: [
                { ue: 241, time: "09:00–09:45", topic: "Einführung – Waffengesetz (WaffG) §§1–10, 25, 27, 42" },
                { ue: 242, time: "09:45–10:30", topic: "Bewachungsverordnung (BewachV)" },
                { ue: 243, time: "10:45–11:30", topic: "Grenzen der Notwehr und des Notstands (§§32, 34 StGB)" },
                { ue: 244, time: "11:30–12:15", topic: "Haftung, straf- und zivilrechtliche Folgen unsachgemäßen Einsatzes" },
                { ue: 245, time: "13:00–13:45", topic: "Besitz: Wer eine Schusswaffe rechtmäßig besitzt (§§14–17 WaffG)" },
                { ue: 246, time: "13:45–14:30", topic: "Erwerb: Erwerbsvoraussetzungen, Genehmigungen (§§21–23 WaffG)" },
                { ue: 247, time: "14:45–15:30", topic: "Führen: Transport und Mitführen im öffentlichen Raum (§§25–27 WaffG)" },
                { ue: 248, time: "15:30–16:15", topic: "Verbotene Waffen: Definitionen, Beispiele" }
              ]
            },
            {
              weekday: "Dienstag",
              module: "Umgang mit Verteidigungswaffen",
              units: [
                { ue: 249, time: "09:00–09:45", topic: "Arten von Verteidigungswaffen" },
                { ue: 250, time: "09:45–10:30", topic: "Praktische Handhabung – Sicherheitsregeln" },
                { ue: 251, time: "10:45–11:30", topic: "Praktische Übungen – Handhabung und Einsatzlimits" },
                { ue: 252, time: "11:30–12:15", topic: "Rollenspiele – Einsatz im Bewachungsdienst" },
                { ue: 253, time: "13:00–13:45", topic: "Rechtliche Grenzen beim Einsatz von Verteidigungswaffen" },
                { ue: 254, time: "13:45–14:30", topic: "Dokumentation von Vorfällen mit Verteidigungswaffen" },
                { ue: 255, time: "14:45–15:30", topic: "Fallbeispiele – Einsatzanalyse" },
                { ue: 256, time: "15:30–16:15", topic: "Besprechung & Feedback" }
              ]
            },
            {
              weekday: "Mittwoch",
              module: "Umgang mit Verteidigungswaffen",
              units: [
                { ue: 257, time: "09:00–09:45", topic: "Wiederholung – Waffengesetz & Bewachungsverordnung" },
                { ue: 258, time: "09:45–10:30", topic: "Praxisübungen – Handhabung & Einsatz" },
                { ue: 259, time: "10:45–11:30", topic: "Simulation – Notwehr & Verteidigungswaffen" },
                { ue: 260, time: "11:30–12:15", topic: "Dokumentation & Berichtswesen" },
                { ue: 261, time: "13:00–13:45", topic: "Rollenspiele – Einsatzübungen" },
                { ue: 262, time: "13:45–14:30", topic: "Praxisübungen – Einsatzlimits beachten" },
                { ue: 263, time: "14:45–15:30", topic: "Lernzielkontrolle Umgang mit Verteidigungswaffen" },
                { ue: 264, time: "15:30–16:15", topic: "Besprechung & Feedback" }
              ]
            },
            {
              weekday: "Donnerstag",
              module: "Umgang mit Verteidigungswaffen & Erste Hilfe",
              units: [
                { ue: 265, time: "09:00–09:45", topic: "Wiederholung – Umgang mit Verteidigungswaffen" },
                { ue: 266, time: "09:45–10:30", topic: "Fallbeispiele – Einsatz im Sicherheitsdienst" },
                { ue: 267, time: "10:45–11:30", topic: "Besprechung – Praxisübungen & Dokumentation" },
                { ue: 268, time: "11:30–12:15", topic: "Abschlussbesprechung Umgang mit Verteidigungswaffen" },
                { ue: 269, time: "13:00–13:45", topic: "Lebensrettende Sofortmaßnahmen – HLW" },
                { ue: 270, time: "13:45–14:30", topic: "Stabile Seitenlage & Bewusstseinskontrolle" },
                { ue: 271, time: "14:45–15:30", topic: "Umgang mit Blutungen, Schock & Bewusstlosigkeit" },
                { ue: 272, time: "15:30–16:15", topic: "Notfallmanagement und Kommunikation mit Rettungsdiensten" }
              ]
            },
            {
              weekday: "Freitag",
              module: "Erste Hilfe - Evakuierungshelfer",
              units: [
                { ue: 273, time: "09:00–09:45", topic: "Praktische Übungen – HLW & stabile Seitenlage" },
                { ue: 274, time: "09:45–10:30", topic: "Praktische Übungen – Blutungen, Schock & Bewusstlosigkeit" },
                { ue: 275, time: "10:45–11:30", topic: "Fallbeispiele & Notfallmanagement" },
                { ue: 276, time: "11:30–12:15", topic: "Abschlusszertifikat Erste Hilfe & Besprechung" },
                { ue: 277, time: "13:00–13:45", topic: "Brandklassen, Feuerlöscher, Brandverhütung" },
                { ue: 278, time: "13:45–14:30", topic: "Evakuierungspläne, Alarmierungsmaßnahmen, Personenrettung" },
                { ue: 279, time: "14:45–15:30", topic: "Praktische Übungen Brandschutz & Evakuierung" },
                { ue: 280, time: "15:30–16:15", topic: "Abschlussbesprechung & Zertifikat" }
              ]
            }
          ]
        },

        {
          id: 8,
          label: "Woche 8",
          days: [
            {
              weekday: "Montag",
              module: "Grundzüge der Sicherheitstechnik",
              units: [
                { ue: 281, time: "09:00–09:45", topic: "Einführung Sicherheitstechnik – Aufgaben, Prävention" },
                { ue: 282, time: "09:45–10:30", topic: "Sicherheitsorganisation – Grundlagen" },
                { ue: 283, time: "10:45–11:30", topic: "Die drei Säulen der Sicherheit: Einsatz, Inhalt, Zusammenwirken" },
                { ue: 284, time: "11:30–12:15", topic: "Mechanische Sicherungseinrichtungen: Zäune, Gitter, Türen" },
                { ue: 285, time: "13:00–13:45", topic: "Schutzziele von Sicherheitszäunen" },
                { ue: 286, time: "13:45–14:30", topic: "Verschiedene Zaunanlagen" },
                { ue: 287, time: "14:45–15:30", topic: "Widerstandsklassen der Verglasung" },
                { ue: 288, time: "15:30–16:15", topic: "Einfriedungsdurchlässe, automatische Türsysteme, Vereinzelungsanlagen" }
              ]
            },
            {
              weekday: "Dienstag",
              module: "Grundzüge der Sicherheitstechnik",
              units: [
                { ue: 289, time: "09:00–09:45", topic: "Schlösser & Schließzylinder" },
                { ue: 290, time: "09:45–10:30", topic: "Schließanlagen – Organisation & Sicherheit" },
                { ue: 291, time: "10:45–11:30", topic: "Zutrittskontrollsysteme – Grundlagen" },
                { ue: 292, time: "11:30–12:15", topic: "Praxisbeispiele Zutrittskontrolle" },
                { ue: 293, time: "13:00–13:45", topic: "Elektronische Sicherungseinrichtungen – Gefahrmeldeanlagen" },
                { ue: 294, time: "13:45–14:30", topic: "Videoüberwachungssysteme – Technik & Recht" },
                { ue: 295, time: "14:45–15:30", topic: "Kommunikationsmittel im Sicherheitsdienst" },
                { ue: 296, time: "15:30–16:15", topic: "Aufgabenbereiche Einbruch- & Überfallmeldeanlagen" }
              ]
            },
            {
              weekday: "Mittwoch",
              module: "Grundzüge der Sicherheitstechnik",
              units: [
                { ue: 297, time: "09:00–09:45", topic: "Brandmeldeanlagen – Aufbau & Bedeutung" },
                { ue: 298, time: "09:45–10:30", topic: "Störmeldeanlagen – Einsatzbereiche" },
                { ue: 299, time: "10:45–11:30", topic: "Feuer- & Rauchschutzabschlüsse" },
                { ue: 300, time: "11:30–12:15", topic: "Feststellanlagen – Funktionsweise" },
                { ue: 301, time: "13:00–13:45", topic: "Sprachalarmierungs- & Evakuierungsanlagen" },
                { ue: 302, time: "13:45–14:30", topic: "Automatische Löschanlagen" },
                { ue: 303, time: "14:45–15:30", topic: "Bündelfunk – Grundlagen & Einsatz" },
                { ue: 304, time: "15:30–16:15", topic: "Analog vs. digitaler Betriebsfunk" }
              ]
            },
            {
              weekday: "Donnerstag",
              module: "Grundzüge der Sicherheitstechnik",
              units: [
                { ue: 305, time: "09:00–09:45", topic: "Mechanische Stechuhr & Wächterkontrollsysteme" },
                { ue: 306, time: "09:45–10:30", topic: "Todmannschalter – Einsatz & Bedeutung" },
                { ue: 307, time: "10:45–11:30", topic: "Notruf- & Serviceleitstellen – Aufbau" },
                { ue: 308, time: "11:30–12:15", topic: "Organisation der Alarmverfolgung" },
                { ue: 309, time: "13:00–13:45", topic: "Prozesse & Verantwortlichkeiten im Notfallplan" },
                { ue: 310, time: "13:45–14:30", topic: "Kommunikationstechnik – Überblick" },
                { ue: 311, time: "14:45–15:30", topic: "Brandschutz – Brandklassen & Feuerlöscher" },
                { ue: 312, time: "15:30–16:15", topic: "Evakuierungspläne & Alarmierungsmaßnahmen" }
              ]
            },
            {
              weekday: "Freitag",
              module: "Grundzüge der Sicherheitstechnik",
              units: [
                { ue: 313, time: "09:00–09:45", topic: "Personenrettung – Grundlagen" },
                { ue: 314, time: "09:45–10:30", topic: "Praxisübung – Feuerlöscher & Rettung" },
                { ue: 315, time: "10:45–11:30", topic: "Sicherheitsorganisation in Betrieben" },
                { ue: 316, time: "11:30–12:15", topic: "Wiederholung & Vertiefung der Sicherheitstechnik" },
                { ue: 317, time: "13:00–13:45", topic: "Abschlussübung – Sicherheitstechnik" },
                { ue: 318, time: "13:45–14:30", topic: "Praktische Fallanalyse" },
                { ue: 319, time: "14:45–15:30", topic: "Modulabschlussprüfung Sicherheitstechnik" },
                { ue: 320, time: "15:30–16:15", topic: "Besprechung & Feedback" }
              ]
            }
          ]
        },

        {
          id: 9,
          label: "Woche 9",
          days: [
            {
              weekday: "Montag",
              module: "Unfallverhütungsvorschriften",
              units: [
                { ue: 321, time: "09:00–09:45", topic: "DGUV Vorschrift 1 – Grundsätze der Prävention" },
                { ue: 322, time: "09:45–10:30", topic: "Grundpflichten des Unternehmers (§2)" },
                { ue: 323, time: "10:45–11:30", topic: "Unterweisung der Versicherten (§4)" },
                { ue: 324, time: "11:30–12:15", topic: "Zutritts- und Aufenthaltsverbote (§9)" },
                { ue: 325, time: "13:00–13:45", topic: "Zugang zu Vorschriften & Regeln (§12)" },
                { ue: 326, time: "13:45–14:30", topic: "Erste Hilfe – Pflichten des Unternehmers (§24)" },
                { ue: 327, time: "14:45–15:30", topic: "Erforderliche Einrichtungen & Sachmittel (§25)" },
                { ue: 328, time: "15:30–16:15", topic: "Zahl & Ausbildung der Ersthelfer (§26)" }
              ]
            },
            {
              weekday: "Dienstag",
              module: "Unfallverhütungsvorschriften",
              units: [
                { ue: 329, time: "09:00–09:45", topic: "DGUV Vorschrift 23 – Wach- & Sicherungsdienste" },
                { ue: 330, time: "09:45–10:30", topic: "Dienstanweisung & Arbeitssicherheit" },
                { ue: 331, time: "10:45–11:30", topic: "Verbot berauschender Mittel" },
                { ue: 332, time: "11:30–12:15", topic: "Objektsicherung & besondere Gefahren" },
                { ue: 333, time: "13:00–13:45", topic: "Überprüfung & Objekteinweisung (§9)" },
                { ue: 334, time: "13:45–14:30", topic: "Ausrüstung des Personals (§10), Regelungen für Brillenträger (§11)" },
                { ue: 335, time: "14:45–15:30", topic: "Hunde – Haltung, Führung, Transport (§12–17)" },
                { ue: 336, time: "15:30–16:15", topic: "Schusswaffen – Ausrüstung & Beschusszeichen (§18–19)" }
              ]
            },
            {
              weekday: "Mittwoch",
              module: "Unfallverhütungsvorschriften",
              units: [
                { ue: 337, time: "09:00–09:45", topic: "Führung & Aufbewahrung von Munition (§20–22)" },
                { ue: 338, time: "09:45–10:30", topic: "Eignung (§24) & Geldtransporte (§25–26)" },
                { ue: 339, time: "10:45–11:30", topic: "Führungspflichten & Dokumentation (§16)" },
                { ue: 340, time: "11:30–12:15", topic: "ASR A1.3 – Sicherheits- & Gesundheitsschutzkennzeichnung" },
                { ue: 341, time: "13:00–13:45", topic: "Verbotszeichen, Warnzeichen, Gebotszeichen" },
                { ue: 342, time: "13:45–14:30", topic: "Rettungszeichen, Brandschutzzeichen, Zusatzzeichen" },
                { ue: 343, time: "14:45–15:30", topic: "Grafische Symbole, Farben & deren Bedeutung" },
                { ue: 344, time: "15:30–16:15", topic: "Flucht- & Rettungspläne – Praxis & Übungen" }
              ]
            },
            {
              weekday: "Donnerstag",
              module: "Waffensachkunde § 7 WaffG",
              units: [
                { ue: 345, time: "09:00–09:45", topic: "Waffengesetz – Definitionen & Kategorien" },
                { ue: 346, time: "09:45–10:30", topic: "Arten von Waffen – Überblick" },
                { ue: 347, time: "10:45–11:30", topic: "Munition – Klassifizierung & Umgang" },
                { ue: 348, time: "11:30–12:15", topic: "Rechtliche Grundlagen Besitz/Erwerb (§§14–17, 21–23 WaffG)" },
                { ue: 349, time: "13:00–13:45", topic: "Transport & Führen von Schusswaffen (§§25–27 WaffG)" },
                { ue: 350, time: "13:45–14:30", topic: "Aufbewahrungspflichten (§36 WaffG)" },
                { ue: 351, time: "14:45–15:30", topic: "Verbotene Waffen (§2 WaffG) – Beispiele" },
                { ue: 352, time: "15:30–16:15", topic: "Bewachungsverordnung (BewachV) zum Waffeneinsatz" }
              ]
            },
            {
              weekday: "Freitag",
              module: "Waffensachkunde § 7 WaffG",
              units: [
                { ue: 353, time: "09:00–09:45", topic: "Grenzen der Notwehr & Notstands (§§32, 34 StGB)" },
                { ue: 354, time: "09:45–10:30", topic: "Haftung, straf- & zivilrechtliche Folgen" },
                { ue: 355, time: "10:45–11:30", topic: "Sicherheitsrelevante Einsatzszenarien" },
                { ue: 356, time: "11:30–12:15", topic: "Fallanalyse Waffenmissbrauch" },
                { ue: 357, time: "13:00–13:45", topic: "Dokumentation & Nachweispflichten" },
                { ue: 358, time: "13:45–14:30", topic: "Kontrollmechanismen & Aufsichtspflichten" },
                { ue: 359, time: "14:45–15:30", topic: "Vorbereitung auf praktische Schulung" },
                { ue: 360, time: "15:30–16:15", topic: "Wiederholung & Quiz" }
              ]
            }
          ]
        },

        {
          id: 10,
          label: "Woche 10",
          days: [
            {
              weekday: "Montag",
              module: "Waffensachkunde §7 WaffG",
              units: [
                { ue: 361, time: "09:00–09:45", topic: "Praktische Schulung – Waffenhandhabung (Theorie)" },
                { ue: 362, time: "09:45–10:30", topic: "Sicherheitsvorschriften im Umgang" },
                { ue: 363, time: "10:45–11:30", topic: "Lagerung & Transport praktisch" },
                { ue: 364, time: "11:30–12:15", topic: "Kontrollübung Waffenrecht" },
                { ue: 365, time: "13:00–13:45", topic: "Schießstandordnung – Grundlagen" },
                { ue: 366, time: "13:45–14:30", topic: "Verhalten am Schießstand" },
                { ue: 367, time: "14:45–15:30", topic: "Munition praktisch – Zuweisung & Kontrolle" },
                { ue: 368, time: "15:30–16:15", topic: "Besprechung Tagespraxis" }
              ]
            },
            {
              weekday: "Dienstag",
              module: "Waffensachkunde §7 WaffG",
              units: [
                { ue: 369, time: "09:00–09:45", topic: "Praktische Schulung – Handhabung Waffenattrappen" },
                { ue: 370, time: "09:45–10:30", topic: "Zielübungen (Trockenübungen)" },
                { ue: 371, time: "10:45–11:30", topic: "Sicherheitscheck Waffen" },
                { ue: 372, time: "11:30–12:15", topic: "Ablauf einer Waffenkontrolle" },
                { ue: 373, time: "13:00–13:45", topic: "Aufbewahrung & Übergabe – Praxis" },
                { ue: 374, time: "13:45–14:30", topic: "Dokumentationsübung Waffenbuch" },
                { ue: 375, time: "14:45–15:30", topic: "Rechtliche Wiederholung WaffG" },
                { ue: 376, time: "15:30–16:15", topic: "Diskussion – Sicherheitsrisiken" }
              ]
            },
            {
              weekday: "Mittwoch",
              module: "Waffensachkunde §7 WaffG",
              units: [
                { ue: 377, time: "09:00–09:45", topic: "Prüfungsvorbereitung Waffensachkunde" },
                { ue: 378, time: "09:45–10:30", topic: "Fallstudien & Übungen" },
                { ue: 379, time: "10:45–11:30", topic: "Schriftliche Testsimulation" },
                { ue: 380, time: "11:30–12:15", topic: "Mündliche Übungssimulation" },
                { ue: 381, time: "13:00–13:45", topic: "Praxisübung – Verhalten in Notwehrsituationen" },
                { ue: 382, time: "13:45–14:30", topic: "Praxisübung – Übergabe/Transport Waffen" },
                { ue: 383, time: "14:45–15:30", topic: "Abschlussprüfungsvorbereitung" },
                { ue: 384, time: "15:30–16:15", topic: "Besprechung & Waffensachkunde" }
              ]
            },
            {
              weekday: "Donnerstag",
              module: "Prüfungsvorbereitung",
              units: [
                { ue: 385, time: "09:00–09:45", topic: "Wiederholung Strafrecht – Tatbestände" },
                { ue: 386, time: "09:45–10:30", topic: "Wiederholung Strafverfahrensrecht" },
                { ue: 387, time: "10:45–11:30", topic: "Jedermannsrechte – Übungen" },
                { ue: 388, time: "11:30–12:15", topic: "Datenschutz – Grundlagen & Wiederholung" },
                { ue: 389, time: "13:00–13:45", topic: "Kommunikationspraxis & Deeskalation" },
                { ue: 390, time: "13:45–14:30", topic: "Wiederholung Sicherheitsdienste – Hausrecht" },
                { ue: 391, time: "14:45–15:30", topic: "Fallübungen Sicherheitsdienst" },
                { ue: 392, time: "15:30–16:15", topic: "Dokumentations- & Berichtswesen" }
              ]
            },
            {
              weekday: "Freitag",
              module: "Prüfungsvorbereitung",
              units: [
                { ue: 393, time: "09:00–09:45", topic: "Prüfungstraining schriftlich – Block 1" },
                { ue: 394, time: "09:45–10:30", topic: "Prüfungstraining schriftlich – Block 2" },
                { ue: 395, time: "10:45–11:30", topic: "Prüfungstraining schriftlich – Block 3" },
                { ue: 396, time: "11:30–12:15", topic: "Besprechung & Korrektur der Tests" },
                { ue: 397, time: "13:00–13:45", topic: "Praxisbeispiele – Sicherheitsdienst Alltag" },
                { ue: 398, time: "13:45–14:30", topic: "Praxisbeispiele – Notwehr/Notstand" },
                { ue: 399, time: "14:45–15:30", topic: "Praxisbeispiele – Festnahmerechte" },
                { ue: 400, time: "15:30–16:15", topic: "Rollenspiel – Konfliktlösung" }
              ]
            }
          ]
        },

        {
          id: 11,
          label: "Woche 11",
          days: [
            {
              weekday: "Montag",
              module: "Prüfungsvorbereitung",
              units: [
                { ue: 401, time: "09:00–09:45", topic: "Überblick & Ziele der Prüfungsvorbereitung" },
                { ue: 402, time: "09:45–10:30", topic: "Wiederholung Rechtsgebiete – Öffentliches Recht" },
                { ue: 403, time: "10:45–11:30", topic: "Wiederholung Gewerberecht" },
                { ue: 404, time: "11:30–12:15", topic: "Wiederholung Bürgerliches Recht (BGB)" },
                { ue: 405, time: "13:00–13:45", topic: "Wiederholung Strafrecht – Tatbestände" },
                { ue: 406, time: "13:45–14:30", topic: "Wiederholung Strafverfahrensrecht" },
                { ue: 407, time: "14:45–15:30", topic: "Jedermannsrechte – Anwendungsübungen" },
                { ue: 408, time: "15:30–16:15", topic: "Datenschutz – Wiederholung & Fallbeispiele" }
              ]
            },
            {
              weekday: "Dienstag",
              module: "Prüfungsvorbereitung",
              units: [
                { ue: 409, time: "09:00–09:45", topic: "Wiederholung Umgang mit Menschen – Kommunikation" },
                { ue: 410, time: "09:45–10:30", topic: "Deeskalation & Konfliktlösung (Übungen)" },
                { ue: 411, time: "10:45–11:30", topic: "Wiederholung Verteidigungswaffen – rechtliche Grenzen" },
                { ue: 412, time: "11:30–12:15", topic: "Erste Hilfe – Kurzwiederholung" },
                { ue: 413, time: "13:00–13:45", topic: "Brandschutz – Grundlagen & Übungen" },
                { ue: 414, time: "13:45–14:30", topic: "Wiederholung Sicherheitstechnik" },
                { ue: 415, time: "14:45–15:30", topic: "Unfallverhütungsvorschriften – Fallbeispiele" },
                { ue: 416, time: "15:30–16:15", topic: "Wiederholung Waffensachkunde" }
              ]
            },
            {
              weekday: "Mittwoch",
              module: "Prüfungsvorbereitung",
              units: [
                { ue: 417, time: "09:00–09:45", topic: "Prüfungstraining schriftlich – Übungsblock 1" },
                { ue: 418, time: "09:45–10:30", topic: "Prüfungstraining schriftlich – Übungsblock 2" },
                { ue: 419, time: "10:45–11:30", topic: "Prüfungstraining schriftlich – Übungsblock 3" },
                { ue: 420, time: "11:30–12:15", topic: "Korrektur & Besprechung der Tests" },
                { ue: 421, time: "13:00–13:45", topic: "Praxisbeispiele Sicherheitsdienst – Hausrecht" },
                { ue: 422, time: "13:45–14:30", topic: "Praxisbeispiele – Notwehr/Notstand" },
                { ue: 423, time: "14:45–15:30", topic: "Praxisbeispiele – Festnahmerechte" },
                { ue: 424, time: "15:30–16:15", topic: "Rollenspiel – Konfliktlösung" }
              ]
            },
            {
              weekday: "Donnerstag",
              module: "Prüfungsvorbereitung",
              units: [
                { ue: 425, time: "09:00–09:45", topic: "Prüfungsvorbereitung – mündliche Übung 1" },
                { ue: 426, time: "09:45–10:30", topic: "Mündliche Übung 2" },
                { ue: 427, time: "10:45–11:30", topic: "Mündliche Übung 3" },
                { ue: 428, time: "11:30–12:15", topic: "Rollenspiele – Sicherheitslagen" },
                { ue: 429, time: "13:00–13:45", topic: "Rollenspiele – Bedrohungslagen" },
                { ue: 430, time: "13:45–14:30", topic: "Simulation – Kontrollgang & Berichtswesen" },
                { ue: 431, time: "14:45–15:30", topic: "Simulation – Zutrittskontrolle" },
                { ue: 432, time: "15:30–16:15", topic: "Simulation – Evakuierungsübung" }
              ]
            },
            {
              weekday: "Freitag",
              module: "Prüfungsvorbereitung",
              units: [
                { ue: 433, time: "09:00–09:45", topic: "Wiederholung schwierige Paragraphen" },
                { ue: 434, time: "09:45–10:30", topic: "Training Fachbegriffe & Definitionen" },
                { ue: 435, time: "10:45–11:30", topic: "Abschluss schriftliche Probeklausur" },
                { ue: 436, time: "11:30–12:15", topic: "Besprechung Probeklausur" },
                { ue: 437, time: "13:00–13:45", topic: "Mündliche Prüfungssimulation (Gruppe A)" },
                { ue: 438, time: "13:45–14:30", topic: "Mündliche Prüfungssimulation (Gruppe B)" },
                { ue: 439, time: "14:45–15:30", topic: "Mündliche Prüfungssimulation (Gruppe C)" },
                { ue: 440, time: "15:30–16:15", topic: "Feedback & Lernstrategien" }
              ]
            }
          ]
        },

        {
          id: 12,
          label: "Woche 12",
          days: [
            {
              weekday: "Montag",
              module: "Prüfungsvorbereitung",
              units: [
                { ue: 441, time: "09:00–09:45", topic: "Überblick & Ziele der Prüfungsvorbereitung" },
                { ue: 442, time: "09:45–10:30", topic: "Wiederholung Rechtsgebiete – Öffentliches Recht" },
                { ue: 443, time: "10:45–11:30", topic: "Wiederholung Gewerberecht" },
                { ue: 444, time: "11:30–12:15", topic: "Wiederholung Bürgerliches Recht (BGB)" },
                { ue: 445, time: "13:00–13:45", topic: "Wiederholung Strafrecht – Tatbestände" },
                { ue: 446, time: "13:45–14:30", topic: "Wiederholung Strafverfahrensrecht" },
                { ue: 447, time: "14:45–15:30", topic: "Jedermannsrechte – Anwendungsübungen" },
                { ue: 448, time: "15:30–16:15", topic: "Datenschutz – Wiederholung & Fallbeispiele" }
              ]
            },
            {
              weekday: "Dienstag",
              module: "Prüfungsvorbereitung",
              units: [
                { ue: 449, time: "09:00–09:45", topic: "Wiederholung Umgang mit Menschen – Kommunikation" },
                { ue: 450, time: "09:45–10:30", topic: "Deeskalation & Konfliktlösung (Übungen)" },
                { ue: 451, time: "10:45–11:30", topic: "Wiederholung Verteidigungswaffen – rechtliche Grenzen" },
                { ue: 452, time: "11:30–12:15", topic: "Erste Hilfe – Kurzwiederholung" },
                { ue: 453, time: "13:00–13:45", topic: "Brandschutz – Grundlagen & Übungen" },
                { ue: 454, time: "13:45–14:30", topic: "Wiederholung Sicherheitstechnik" },
                { ue: 455, time: "14:45–15:30", topic: "Unfallverhütungsvorschriften – Fallbeispiele" },
                { ue: 456, time: "15:30–16:15", topic: "Wiederholung Waffensachkunde" }
              ]
            },
            {
              weekday: "Mittwoch",
              module: "Prüfungsvorbereitung",
              units: [
                { ue: 457, time: "09:00–09:45", topic: "Prüfungstraining schriftlich – Übungsblock 1" },
                { ue: 458, time: "09:45–10:30", topic: "Prüfungstraining schriftlich – Übungsblock 2" },
                { ue: 459, time: "10:45–11:30", topic: "Prüfungstraining schriftlich – Übungsblock 3" },
                { ue: 460, time: "11:30–12:15", topic: "Korrektur & Besprechung der Tests" },
                { ue: 461, time: "13:00–13:45", topic: "Praxisbeispiele Sicherheitsdienst – Hausrecht" },
                { ue: 462, time: "13:45–14:30", topic: "Praxisbeispiele – Notwehr/Notstand" },
                { ue: 463, time: "14:45–15:30", topic: "Praxisbeispiele – Festnahmerechte" },
                { ue: 464, time: "15:30–16:15", topic: "Rollenspiel – Konfliktlösung" }
              ]
            },
            {
              weekday: "Donnerstag",
              module: "Prüfungsvorbereitung",
              units: [
                { ue: 465, time: "09:00–09:45", topic: "Prüfungsvorbereitung – mündliche Übung 1" },
                { ue: 466, time: "09:45–10:30", topic: "Mündliche Übung 2" },
                { ue: 467, time: "10:45–11:30", topic: "Mündliche Übung 3" },
                { ue: 468, time: "11:30–12:15", topic: "Rollenspiele – Sicherheitslagen" },
                { ue: 469, time: "13:00–13:45", topic: "Rollenspiele – Bedrohungslagen" },
                { ue: 470, time: "13:45–14:30", topic: "Simulation – Kontrollgang & Berichtswesen" },
                { ue: 471, time: "14:45–15:30", topic: "Simulation – Zutrittskontrolle" },
                { ue: 472, time: "15:30–16:15", topic: "Simulation – Evakuierungsübung" }
              ]
            },
            {
              weekday: "Freitag",
              module: "Prüfungsvorbereitung",
              units: [
                { ue: 473, time: "09:00–09:45", topic: "Wiederholung schwierige Paragraphen" },
                { ue: 474, time: "09:45–10:30", topic: "Training Fachbegriffe & Definitionen" },
                { ue: 475, time: "10:45–11:30", topic: "Abschluss schriftliche Probeklausur" },
                { ue: 476, time: "11:30–12:15", topic: "Besprechung Probeklausur" },
                { ue: 477, time: "13:00–13:45", topic: "Mündliche Prüfungssimulation (Gruppe A)" },
                { ue: 478, time: "13:45–14:30", topic: "Mündliche Prüfungssimulation (Gruppe B)" },
                { ue: 479, time: "14:45–15:30", topic: "Mündliche Prüfungssimulation (Gruppe C)" },
             { ue: 480, time: "15:30–16:15", topic: "Feedback & Lernstrategien" }
              ]
            }
          ]
        }      // schließt Woche 12 des Kurses 08.09.
      ]        // schließt weeks-Array des Kurses 08.09.
    },         // schließt Kurs-Objekt "engelmann-3m-2025-09-08" (Komma, weil noch ein Kurs folgt)

    {
      id: "engelmann-3m-2025-12-08",
      label: "3 Monate · Start 08.12.",
      type: "3 Monate",
      startDate: "2025-12-08",
    
          weeks: [
            {
              id: 1,
              label: "Woche 1",
              days: [
                {
                  weekday: "Montag",
        module: "Recht der öffentlichen Sicherheit und Ordnung",
        units: [
          { ue: 1, time: "09:00–09:45", topic: "Begrüßung und Einweisung in den Ablauf der Maßnahme" },
          { ue: 2, time: "09:45–10:30", topic: "Erläuterung der Maßnahme, der Hausordnung und allgemeine Regeln" },
          { ue: 3, time: "10:45–11:30", topic: "Einweisung in das Lernportal, Jobbörse sowie Lehrmaterial" },
          { ue: 4, time: "11:30–12:15", topic: "Einweisung in das Lernportal, Jobbörse sowie Lehrmaterial" },
          { ue: 5, time: "13:00–13:45", topic: "Polizei & Ordnungsbehörden – Zuständigkeiten und Aufgaben" },
          { ue: 6, time: "13:45–14:30", topic: "Gewaltenteilung – Exekutive & Judikative Legislative" },
          { ue: 7, time: "14:45–15:30", topic: "Aufbau der BRD – Bund Länder Kommunen" },
          { ue: 8, time: "15:30–16:15", topic: "Staatsgewalten & deren Kompetenzen" }
                  ]
                },
                {
                  weekday: "Dienstag",
                  module: "Öffentliche Sicherheit & Ordnung",
                  units: [
                    { ue: 9, time: "09:00–09:45", topic: "Grundgesetz – Bedeutung & Entstehung" },
                    { ue: 10, time: "09:45–10:30", topic: "Grundgesetz – Artikelübersicht" },
                    { ue: 11, time: "10:45–11:30", topic: "Ewigkeitsklausel" },
                    { ue: 12, time: "11:30–12:15", topic: "Drittwirkung des Grundgesetzes" },
                    { ue: 13, time: "13:00–13:45", topic: "Gefahrenabwehr – Grundlagen" },
                    { ue: 14, time: "13:45–14:30", topic: "Gefahrenabwehr – präventive Maßnahmen" },
                    { ue: 15, time: "14:45–15:30", topic: "Zuständigkeiten bei Störungen" },
                    { ue: 16, time: "15:30–16:15", topic: "Zuständigkeiten bei Störungen" }
                  ]
                },
                {
                  weekday: "Mittwoch",
                  module: "Öffentliche Sicherheit & Ordnung",
                  units: [
                    { ue: 17, time: "09:00–09:45", topic: "Zusammenarbeit Sicherheitsdienst – Polizei" },
                    { ue: 18, time: "09:45–10:30", topic: "Zusammenarbeit mit Kommunen" },
                    { ue: 19, time: "10:45–11:30", topic: "Dokumentation – Grundlagen" },
                    { ue: 20, time: "11:30–12:15", topic: "Berichterstattung – Fallbeispiele" },
                    { ue: 21, time: "13:00–13:45", topic: "Eingriffs- & Handlungsmöglichkeiten – Theorie" },
                    { ue: 22, time: "13:45–14:30", topic: "Eingriffs- & Handlungsmöglichkeiten – Praxis" },
                    { ue: 23, time: "14:45–15:30", topic: "Wiederholung Modul 1 – Teil 1" },
                    { ue: 24, time: "15:30–16:15", topic: "Wiederholung Modul 1 – Teil 2" }
                  ]
                },
                {
                  weekday: "Donnerstag",
                  module: "Öffentliche Sicherheit & Ordnung",
                  units: [
                    { ue: 25, time: "09:00–09:45", topic: "Zusammenfassung GG & Gewaltenteilung" },
                    { ue: 26, time: "09:45–10:30", topic: "Vertiefung Gefahrenabwehr" },
                    { ue: 27, time: "10:45–11:30", topic: "Vertiefung Zuständigkeiten" },
                    { ue: 28, time: "11:30–12:15", topic: "Rollenspiel – Sicherheitslage" },
                    { ue: 29, time: "13:00–13:45", topic: "Praxisübungen – Dokumentation" },
                    { ue: 30, time: "13:45–14:30", topic: "Praxisübungen – Eingriffsrechte" },
                    { ue: 31, time: "14:45–15:30", topic: "Wiederholung aller Inhalte" },
                    { ue: 32, time: "15:30–16:15", topic: "Lernzielkontrolle Modul 1" }
                  ]
                },
                {
                  weekday: "Freitag",
                  module: "Gewerberecht",
                  units: [
                    { ue: 33, time: "09:00–09:45", topic: "§34a GewO – Grundlagen" },
                    { ue: 34, time: "09:45–10:30", topic: "§34a GewO – Befugnisse" },
                    { ue: 35, time: "10:45–11:30", topic: "Bewachungsunternehmen – Pflichten" },
                    { ue: 36, time: "11:30–12:15", topic: "Mitarbeiter – Voraussetzungen" },
                    { ue: 37, time: "13:00–13:45", topic: "Bewacherregister" },
                    { ue: 38, time: "13:45–14:30", topic: "Antragsstellung – Praxisbeispiele" },
                    { ue: 39, time: "14:45–15:30", topic: "Sachkundeprüfung & U40" },
                    { ue: 40, time: "15:30–16:15", topic: "Befreiung & Tätigkeitsfelder" }
                  ]
                }
              ]
            },

            {
              id: 2,
              label: "Woche 2",
              days: [
                {
                  weekday: "Montag",
                  module: "Gewerberecht",
                  units: [
                    { ue: 41, time: "09:00–09:45", topic: "Gewerbeordnung – Anzeigepflicht §14" },
                    { ue: 42, time: "09:45–10:30", topic: "Gewerbeordnung – Auskunft & Nachschau §29" },
                    { ue: 43, time: "10:45–11:30", topic: "Bewachungsverordnung §§14 & 15" },
                    { ue: 44, time: "11:30–12:15", topic: "Bewachungsverordnung §§17–18" },
                    { ue: 45, time: "13:00–13:45", topic: "Bewachungsverordnung §§19–21" },
                    { ue: 46, time: "13:45–14:30", topic: "Aufsichtspflichten & Kontrollmechanismen" },
                    { ue: 47, time: "14:45–15:30", topic: "Konsequenzen bei Verstößen" },
                    { ue: 48, time: "15:30–16:15", topic: "Anmeldung von Tätigkeiten & Dokumentationspflichten" }
                  ]
                },
                {
                  weekday: "Dienstag",
                  module: "Bürgerliches Recht (BGB)",
                  units: [
                    { ue: 49, time: "09:00–09:45", topic: "Grundlagen BGB – Fundrecht" },
                    { ue: 50, time: "09:45–10:30", topic: "Privatrecht – Abgrenzung" },
                    { ue: 51, time: "10:45–11:30", topic: "Rechtsfähigkeit – Beginn & Ende" },
                    { ue: 52, time: "11:30–12:15", topic: "Schikaneverbot" },
                    { ue: 53, time: "13:00–13:45", topic: "Gefährdungshaftung – Einführung" },
                    { ue: 54, time: "13:45–14:30", topic: "Verschuldensunabhängige Haftung" },
                    { ue: 55, time: "14:45–15:30", topic: "Verschuldensabhängige Haftung" },
                    { ue: 56, time: "15:30–16:15", topic: "Praxisbeispiele Haftung" }
                  ]
                },
                {
                  weekday: "Mittwoch",
                  module: "Bürgerliches Recht (BGB)",
                  units: [
                    { ue: 57, time: "09:00–09:45", topic: "Besitz & Eigentum" },
                    { ue: 58, time: "09:45–10:30", topic: "Besitzdiener" },
                    { ue: 59, time: "10:45–11:30", topic: "Sachen & Tiere" },
                    { ue: 60, time: "11:30–12:15", topic: "Besitz & übertragene Rechte" },
                    { ue: 61, time: "13:00–13:45", topic: "Vertragsrecht – Grundlagen" },
                    { ue: 62, time: "13:45–14:30", topic: "Vertragsabschluss" },
                    { ue: 63, time: "14:45–15:30", topic: "Rechte & Pflichten aus Verträgen" },
                    { ue: 64, time: "15:30–16:15", topic: "Vertragsverletzungen" }
                  ]
                },
                {
                  weekday: "Donnerstag",
                  module: "Bürgerliches Recht (BGB)",
                  units: [
                    { ue: 65, time: "09:00–09:45", topic: "Schadensersatz – Grundlagen" },
                    { ue: 66, time: "09:45–10:30", topic: "Haftung – Grenzen privater Eingriffe" },
                    { ue: 67, time: "10:45–11:30", topic: "Unerlaubte Handlung" },
                    { ue: 68, time: "11:30–12:15", topic: "Folgen unerlaubter Handlung" },
                    { ue: 69, time: "13:00–13:45", topic: "Abgrenzung rechtmäßiges Handeln" },
                    { ue: 70, time: "13:45–14:30", topic: "Abgrenzung strafbare Handlung" },
                    { ue: 71, time: "14:45–15:30", topic: "Praxisbeispiel: Hausrecht" },
                    { ue: 72, time: "15:30–16:15", topic: "Praxisbeispiel: Zutrittskontrollen" }
                  ]
                },
                {
                  weekday: "Freitag",
                  module: "Bürgerliches Recht (BGB)",
                  units: [
                    { ue: 73, time: "09:00–09:45", topic: "Jedermannsrechte nach BGB – Einführung" },
                    { ue: 74, time: "09:45–10:30", topic: "§227 Notwehr & §228 Verteidigungsnotstand" },
                    { ue: 75, time: "10:45–11:30", topic: "§229 Selbsthilfe & §859 Selbsthilfe des Besitzers" },
                    { ue: 76, time: "11:30–12:15", topic: "§860 Selbsthilfe des Besitzdieners & §904 Angriffsnotstand" },
                    { ue: 77, time: "13:00–13:45", topic: "Praxisbeispiel: Eingreifen in Notfällen" },
                    { ue: 78, time: "13:45–14:30", topic: "Rollenspiel – Zutrittskontrolle mit Konflikt" },
                    { ue: 79, time: "14:45–15:30", topic: "Wiederholung & Zusammenfassung BGB" },
                    { ue: 80, time: "15:30–16:15", topic: "Lernzielkontrolle – BGB" }
                  ]
                }
              ]
            },

            {
              id: 3,
              label: "Woche 3",
              days: [
                {
                  weekday: "Montag",
                  module: "Bürgerliches Recht (BGB)",
                  units: [
                    { ue: 81, time: "09:00–09:45", topic: "Jedermannsrechte – Übersicht StGB/BGB" },
                    { ue: 82, time: "09:45–10:30", topic: "Praxisbeispiele Sicherheitsdienst – Hausrecht" },
                    { ue: 83, time: "10:45–11:30", topic: "Praxisbeispiele Zutrittskontrollen" },
                    { ue: 84, time: "11:30–12:15", topic: "Eingreifen in Notfallsituationen" },
                    { ue: 85, time: "13:00–13:45", topic: "Jedermannsrechte – Rollenspiele" },
                    { ue: 86, time: "13:45–14:30", topic: "Fallanalyse – Notwehr / Selbsthilfe" },
                    { ue: 87, time: "14:45–15:30", topic: "Abgrenzung rechtmäßiges Handeln vs. strafbare Handlung" },
                    { ue: 88, time: "15:30–16:15", topic: "Wiederholung & Lernzielkontrolle Modul 3" }
                  ]
                },
                {
                  weekday: "Dienstag",
                  module: "Straf- & Strafverfahrensrecht",
                  units: [
                    { ue: 89, time: "09:00–09:45", topic: "Materielles Strafrecht – Tatbestand" },
                    { ue: 90, time: "09:45–10:30", topic: "Schuld, Vorsatz, Fahrlässigkeit" },
                    { ue: 91, time: "10:45–11:30", topic: "Versuch, Rechtsfolgen" },
                    { ue: 92, time: "11:30–12:15", topic: "Aufbau Straftat – Tatbestandsmerkmale" },
                    { ue: 93, time: "13:00–13:45", topic: "Rechtswidrigkeit & Schuld" },
                    { ue: 94, time: "13:45–14:30", topic: "Verbrechen vs. Vergehen – Unterschiede & Beispiele" },
                    { ue: 95, time: "14:45–15:30", topic: "Garantenstellung – Pflichten zur Abwendung von Schäden" },
                    { ue: 96, time: "15:30–16:15", topic: "Echtes und unechtes Unterlassungsdelikt" }
                  ]
                },
                {
                  weekday: "Mittwoch",
                  module: "Straf- & Strafverfahrensrecht",
                  units: [
                    { ue: 97, time: "09:00–09:45", topic: "Strafverfahrensrecht – Ablauf eines Verfahrens" },
                    { ue: 98, time: "09:45–10:30", topic: "Rechte & Pflichten Beschuldigter" },
                    { ue: 99, time: "10:45–11:30", topic: "Rechte & Pflichten Zeugen" },
                    { ue: 100, time: "11:30–12:15", topic: "Aufbau StGB – Allgemeiner & Besonderer Teil" },
                    { ue: 101, time: "13:00–13:45", topic: "Nebengesetze (StPO, BtMG, JuSchG)" },
                    { ue: 102, time: "13:45–14:30", topic: "Besonderer Teil StGB – Diebstahl §§242, 243" },
                    { ue: 103, time: "14:45–15:30", topic: "Diebstahl mit Waffen / Bandendiebstahl §244" },
                    { ue: 104, time: "15:30–16:15", topic: "Unterschlagung §§246, 248a" }
                  ]
                },
                {
                  weekday: "Donnerstag",
                  module: "Straf- & Strafverfahrensrecht",
                  units: [
                    { ue: 105, time: "09:00–09:45", topic: "Raub §249, Räuberischer Diebstahl §252" },
                    { ue: 106, time: "09:45–10:30", topic: "Erpressung §253" },
                    { ue: 107, time: "10:45–11:30", topic: "Hehlerei §259" },
                    { ue: 108, time: "11:30–12:15", topic: "Betrug §§263, 263a" },
                    { ue: 109, time: "13:00–13:45", topic: "Untreue §266 / Veruntreuung §265a" },
                    { ue: 110, time: "13:45–14:30", topic: "Körperverletzung §223" },
                    { ue: 111, time: "14:45–15:30", topic: "Sachbeschädigung §303" },
                    { ue: 112, time: "15:30–16:15", topic: "Brandstiftung §306" }
                  ]
                },
                {
                  weekday: "Freitag",
                  module: "Straf- & Strafverfahrensrecht – Prüfungstag",
                  units: [
                    { ue: 113, time: "09:00–09:45", topic: "Schadensersatz §281, Unterlassungsdelikte §323c" },
                    { ue: 114, time: "09:45–10:30", topic: "Notwehr §§32, 34, 35" },
                    { ue: 115, time: "10:45–11:30", topic: "Verhältnismäßigkeit & Erforderlichkeit" },
                    { ue: 116, time: "11:30–12:15", topic: "StPO – Rechte & Pflichten Sicherheitskraft" },
                    { ue: 117, time: "13:00–13:45", topic: "Festnahme durch Privatperson §127 StPO" },
                    { ue: 118, time: "13:45–14:30", topic: "Beweissicherung & Anzeigeerstattung" },
                    { ue: 119, time: "14:45–15:30", topic: "Praxisfallanalyse / Simulationen" },
                    { ue: 120, time: "15:30–16:15", topic: "Besprechung schriftliche Übung / Lernzielkontrolle" }
                  ]
                }
              ]
            },

            {
              id: 4,
              label: "Woche 4",
              days: [
                {
                  weekday: "Montag",
                  module: "Straf- & Strafverfahrensrecht",
                  units: [
                    { ue: 121, time: "09:00–09:45", topic: "Notwehr & rechtfertigender Notstand §§32, 34" },
                    { ue: 122, time: "09:45–10:30", topic: "Aggressiver Notstand §35" },
                    { ue: 123, time: "10:45–11:30", topic: "Verhältnismäßigkeit & Erforderlichkeit in Jedermannsrechten" },
                    { ue: 124, time: "11:30–12:15", topic: "Fallbeispiele Notwehr / Notstand" },
                    { ue: 125, time: "13:00–13:45", topic: "StPO – Rechte & Pflichten der Sicherheitskraft" },
                    { ue: 126, time: "13:45–14:30", topic: "Festnahme durch Privatperson §127 StPO" },
                    { ue: 127, time: "14:45–15:30", topic: "Beweissicherung & Anzeigeerstattung" },
                    { ue: 128, time: "15:30–16:15", topic: "Praxisbeispiele – Strafverfahren" }
                  ]
                },
                {
                  weekday: "Dienstag",
                  module: "Straf- & Strafverfahrensrecht",
                  units: [
                    { ue: 129, time: "09:00–09:45", topic: "Computerbetrug, Untreue, Veruntreuung (Vertiefung)" },
                    { ue: 130, time: "09:45–10:30", topic: "Körperverletzung, Sachbeschädigung (Vertiefung)" },
                    { ue: 131, time: "10:45–11:30", topic: "Raub, Erpressung, Hehlerei (Vertiefung)" },
                    { ue: 132, time: "11:30–12:15", topic: "Betrug §263 / Computerbetrug §263a (Fallanalyse)" },
                    { ue: 133, time: "13:00–13:45", topic: "Praxisfall – Diebstahl & Unterschlagung" },
                    { ue: 134, time: "13:45–14:30", topic: "Praxisfall – Brandstiftung & Schadensersatz" },
                    { ue: 135, time: "14:45–15:30", topic: "Rollenspiel – Strafverfolgung" },
                    { ue: 136, time: "15:30–16:15", topic: "Lernzielkontrolle Modul 4 Teil 1" }
                  ]
                },
                {
                  weekday: "Mittwoch",
                  module: "Straf- & Strafverfahrensrecht",
                  units: [
                    { ue: 137, time: "09:00–09:45", topic: "Praxisübungen: Notwehr / Notstand" },
                    { ue: 138, time: "09:45–10:30", topic: "Praxisübungen: Festnahme §127 StPO" },
                    { ue: 139, time: "10:45–11:30", topic: "Beweissicherung & Anzeigeerstattung" },
                    { ue: 140, time: "11:30–12:15", topic: "Fallanalyse – Unterlassungsdelikte §323c" },
                    { ue: 141, time: "13:00–13:45", topic: "Aggressiver vs. rechtfertigender Notstand" },
                    { ue: 142, time: "13:45–14:30", topic: "Verhältnismäßigkeit / Erforderlichkeit" },
                    { ue: 143, time: "14:45–15:30", topic: "Praxis: Simulation Notfallsituationen" },
                    { ue: 144, time: "15:30–16:15", topic: "Wiederholung & Lernzielkontrolle" }
                  ]
                },
                {
                  weekday: "Donnerstag",
                  module: "Straf- & Strafverfahrensrecht",
                  units: [
                    { ue: 145, time: "09:00–09:45", topic: "Rechte & Pflichten Sicherheitskraft – Fallanalyse" },
                    { ue: 146, time: "09:45–10:30", topic: "Praxis – Anzeigeerstattung" },
                    { ue: 147, time: "10:45–11:30", topic: "Notwehr / Notstand – Vertiefung" },
                    { ue: 148, time: "11:30–12:15", topic: "Fallbeispiele aus Sicherheitsdienst" },
                    { ue: 149, time: "13:00–13:45", topic: "Praxis: Dokumentation & Berichterstattung" },
                    { ue: 150, time: "13:45–14:30", topic: "Rollenspiel – Konfliktsituationen" },
                    { ue: 151, time: "14:45–15:30", topic: "Prüfungsvorbereitung – Strafrecht" },
                    { ue: 152, time: "15:30–16:15", topic: "Zusammenfassung Strafrecht" }
                  ]
                },
                {
                  weekday: "Freitag",
                  module: "Straf- & Strafverfahrensrecht",
                  units: [
                    { ue: 153, time: "09:00–09:45", topic: "Simulation Strafverfahren – schriftliche Übung" },
                    { ue: 154, time: "09:45–10:30", topic: "Besprechung schriftliche Übung" },
                    { ue: 155, time: "10:45–11:30", topic: "Praxis – Notwehr / Notstand" },
                    { ue: 156, time: "11:30–12:15", topic: "Praxis – Festnahme §127 StPO" },
                    { ue: 157, time: "13:00–13:45", topic: "Praxis – Anzeige & Beweissicherung" },
                    { ue: 158, time: "13:45–14:30", topic: "Vertiefung Fallanalyse" },
                    { ue: 159, time: "14:45–15:30", topic: "Besprechung & Rückmeldung" },
                    { ue: 160, time: "15:30–16:15", topic: "Lernzielkontrolle Strafrecht" }
                  ]
                }
              ]
            },

            {
              id: 5,
              label: "Woche 5",
              days: [
                {
                  weekday: "Montag",
                  module: "Straf- & Strafverfahrensrecht",
                  units: [
                    { ue: 161, time: "09:00–09:45", topic: "Wiederholung – Materielles Strafrecht" },
                    { ue: 162, time: "09:45–10:30", topic: "Wiederholung – Aufbau einer Straftat" },
                    { ue: 163, time: "10:45–11:30", topic: "Fallanalysen – Unterlassungsdelikte / Notwehr" },
                    { ue: 164, time: "11:30–12:15", topic: "Fallanalyse – Notstand & Verhältnismäßigkeit" },
                    { ue: 165, time: "13:00–13:45", topic: "Rollenspiel – Festnahme durch Privatperson §127 StPO" },
                    { ue: 166, time: "13:45–14:30", topic: "Dokumentation & Berichterstattung" },
                    { ue: 167, time: "14:45–15:30", topic: "Lernzielkontrolle Strafrecht" },
                    { ue: 168, time: "15:30–16:15", topic: "Strafrecht Abschlussbesprechung" }
                  ]
                },
                {
                  weekday: "Dienstag",
                  module: "Jedermannsrechte – Ausnahmerechte",
                  units: [
                    { ue: 169, time: "09:00–09:45", topic: "Einführung in Jedermannsrechte" },
                    { ue: 170, time: "09:45–10:30", topic: "Abgrenzung Rechtfertigungs- und Entschuldigungsgründe" },
                    { ue: 171, time: "10:45–11:30", topic: "Festnahmerechte §127 (1) StPO / §229 BGB" },
                    { ue: 172, time: "11:30–12:15", topic: "Jedermannsrechte StGB §§32, 33, 34, 35" },
                    { ue: 173, time: "13:00–13:45", topic: "Jedermannsrechte BGB §§227, 228, 859, 860, 904" },
                    { ue: 174, time: "13:45–14:30", topic: "Jedermannsrechte OWiG §15" },
                    { ue: 175, time: "14:45–15:30", topic: "Theoretische Übungen – Eingriffsrechte" },
                    { ue: 176, time: "15:30–16:15", topic: "Rollenspiele – Notwehrsituationen & Selbsthilfe" }
                  ]
                },
                {
                  weekday: "Mittwoch",
                  module: "Jedermannsrechte – Ausnahmerechte",
                  units: [
                    { ue: 177, time: "09:00–09:45", topic: "Rollenspiele – Festnahme & Selbsthilfe" },
                    { ue: 178, time: "09:45–10:30", topic: "Praxisübungen – Eingriffsrechte & Notwehrsituationen" },
                    { ue: 179, time: "10:45–11:30", topic: "Fallbeispiele – Sicherheitsdienst / Zutrittskontrollen" },
                    { ue: 180, time: "11:30–12:15", topic: "Dokumentation & Berichterstattung" },
                    { ue: 181, time: "13:00–13:45", topic: "Besprechung der Rollenspiele / Reflexion" },
                    { ue: 182, time: "13:45–14:30", topic: "Lernzielkontrolle Jedermannsrechte" },
                    { ue: 183, time: "14:45–15:30", topic: "Feedback & offene Fragen Jedermannsrechte" },
                    { ue: 184, time: "15:30–16:15", topic: "Zusammenfassung & Wiederholung Jedermannsrechte" }
                  ]
                },
                {
                  weekday: "Donnerstag",
                  module: "Datenschutz",
                  units: [
                    { ue: 185, time: "09:00–09:45", topic: "Grundlagen DSGVO & BDSG, Rechte Betroffener" },
                    { ue: 186, time: "09:45–10:30", topic: "Datenschutz bei Videoüberwachung & Zutrittskontrollen" },
                    { ue: 187, time: "10:45–11:30", topic: "Datenerfassung & Speicherung" },
                    { ue: 188, time: "11:30–12:15", topic: "Schweigepflicht, Datenweitergabe, Dokumentationspflichten" },
                    { ue: 189, time: "13:00–13:45", topic: "Zusammenhang Datenschutz & StGB" },
                    { ue: 190, time: "13:45–14:30", topic: "Aufgaben & Voraussetzungen Datenschutzbeauftragter" },
                    { ue: 191, time: "14:45–15:30", topic: "Technische Maßnahmen – Zugriffskontrollen & Verschlüsselung" },
                    { ue: 192, time: "15:30–16:15", topic: "Organisatorische Maßnahmen – Protokollierung & Datensicherung" }
                  ]
                },
                {
                  weekday: "Freitag",
                  module: "Datenschutz",
                  units: [
                    { ue: 193, time: "09:00–09:45", topic: "Updates & Mitarbeiterschulung" },
                    { ue: 194, time: "09:45–10:30", topic: "Praktische Übungen Datensicherung" },
                    { ue: 195, time: "10:45–11:30", topic: "Fallbeispiele aus Sicherheitsdienst" },
                    { ue: 196, time: "11:30–12:15", topic: "Übung – Datenschutz bei Zutrittskontrollen" },
                    { ue: 197, time: "13:00–13:45", topic: "Dokumentation & Berichterstattung" },
                    { ue: 198, time: "13:45–14:30", topic: "Rollenspiel – Datenschutzkonflikt" },
                    { ue: 199, time: "14:45–15:30", topic: "Wiederholung & Lernzielkontrolle Datenschutz" },
                    { ue: 200, time: "15:30–16:15", topic: "Abschlussbesprechung Datenschutz" }
                  ]
                }
              ]
            },

            {
              id: 6,
              label: "Woche 6",
              days: [
                {
                  weekday: "Montag",
                  module: "Umgang mit Menschen",
                  units: [
                    { ue: 201, time: "09:00–09:45", topic: "Einführung – Bedürfnisse, Motive, Motivation" },
                    { ue: 202, time: "09:45–10:30", topic: "Selbstwertgefühl & Wahrnehmung" },
                    { ue: 203, time: "10:45–11:30", topic: "Diversität & Vorurteile" },
                    { ue: 204, time: "11:30–12:15", topic: "Menschenkenntnis & erster Eindruck" },
                    { ue: 205, time: "13:00–13:45", topic: "Verhalten des Menschen & Steuerung" },
                    { ue: 206, time: "13:45–14:30", topic: "Interkulturelle Kompetenz" },
                    { ue: 207, time: "14:45–15:30", topic: "Kommunikationsarten & Modelle" },
                    { ue: 208, time: "15:30–16:15", topic: "Eisberg-Modell – Sachebene / Beziehungsebene" }
                  ]
                },
                {
                  weekday: "Dienstag",
                  module: "Umgang mit Menschen",
                  units: [
                    { ue: 209, time: "09:00–09:45", topic: "Gesprächstechniken: Schallplatte mit Sprung, Vernebelung" },
                    { ue: 210, time: "09:45–10:30", topic: "Kommunikationsabstände" },
                    { ue: 211, time: "10:45–11:30", topic: "Maslow-Pyramide" },
                    { ue: 212, time: "11:30–12:15", topic: "Stress und Auswirkung auf Gesundheit" },
                    { ue: 213, time: "13:00–13:45", topic: "Frustration, Aggression, Resignation & Zusammenhang" },
                    { ue: 214, time: "13:45–14:30", topic: "Deeskalation, Konflikte & Konfliktlösung" },
                    { ue: 215, time: "14:45–15:30", topic: "Aktives Zuhören, Sender & Empfänger" },
                    { ue: 216, time: "15:30–16:15", topic: "Gruppen, Menschenmengen, Menschenmassen" }
                  ]
                },
                {
                  weekday: "Mittwoch",
                  module: "Umgang mit Menschen",
                  units: [
                    { ue: 217, time: "09:00–09:45", topic: "Besonderheiten & Verhaltensweisen besonderer Personengruppen" },
                    { ue: 218, time: "09:45–10:30", topic: "Jugendliche, Betrunkene, Drogenabhängige, Senioren" },
                    { ue: 219, time: "10:45–11:30", topic: "Massenpsychologische Phänomene" },
                    { ue: 220, time: "11:30–12:15", topic: "Massenpanik, Panikarten & Verhaltensweisen" },
                    { ue: 221, time: "13:00–13:45", topic: "Besonderheiten Großveranstaltungen" },
                    { ue: 222, time: "13:45–14:30", topic: "Besonderheiten Flüchtlingsunterkünfte" },
                    { ue: 223, time: "14:45–15:30", topic: "Praxisbeispiele Sicherheitsdienst" },
                    { ue: 224, time: "15:30–16:15", topic: "Fallanalysen & Diskussion" }
                  ]
                },
                {
                  weekday: "Donnerstag",
                  module: "Umgang mit Menschen",
                  units: [
                    { ue: 225, time: "09:00–09:45", topic: "Kommunikationsübungen – Rollenspiele" },
                    { ue: 226, time: "09:45–10:30", topic: "Konfliktmanagement in Gruppen" },
                    { ue: 227, time: "10:45–11:30", topic: "Deeskalationsstrategien" },
                    { ue: 228, time: "11:30–12:15", topic: "Praxis: Intervention bei Konflikten" },
                    { ue: 229, time: "13:00–13:45", topic: "Simulationen – Menschenmengensteuerung" },
                    { ue: 230, time: "13:45–14:30", topic: "Beobachtung & Verhaltenstraining" },
                    { ue: 231, time: "14:45–15:30", topic: "Reflexion & Feedback" },
                    { ue: 232, time: "15:30–16:15", topic: "Besprechung – Rollenspielauswertung" }
                  ]
                },
                {
                  weekday: "Freitag",
                  module: "Umgang mit Menschen",
                  units: [
                    { ue: 233, time: "09:00–09:45", topic: "Wiederholung – Bedürfnisse & Motivation" },
                    { ue: 234, time: "09:45–10:30", topic: "Wiederholung – Kommunikationsarten & Eisberg-Modell" },
                    { ue: 235, time: "10:45–11:30", topic: "Praxisbeispiele – Konfliktbewältigung" },
                    { ue: 236, time: "11:30–12:15", topic: "Fallanalyse – Menschenmassensteuerung" },
                    { ue: 237, time: "13:00–13:45", topic: "Lernzielkontrolle Umgang mit Menschen" },
                    { ue: 238, time: "13:45–14:30", topic: "Besprechung der Ergebnisse" },
                    { ue: 239, time: "14:45–15:30", topic: "Feedback & offene Fragen" },
                    { ue: 240, time: "15:30–16:15", topic: "Zusammenfassung Umgang mit Menschen" }
                  ]
                }
              ]
            },

            {
              id: 7,
              label: "Woche 7",
              days: [
                {
                  weekday: "Montag",
                  module: "Umgang mit Verteidigungswaffen",
                  units: [
                    { ue: 241, time: "09:00–09:45", topic: "Einführung – Waffengesetz (WaffG) §§1–10, 25, 27, 42" },
                    { ue: 242, time: "09:45–10:30", topic: "Bewachungsverordnung (BewachV)" },
                    { ue: 243, time: "10:45–11:30", topic: "Grenzen der Notwehr und des Notstands (§§32, 34 StGB)" },
                    { ue: 244, time: "11:30–12:15", topic: "Haftung, straf- und zivilrechtliche Folgen unsachgemäßen Einsatzes" },
                    { ue: 245, time: "13:00–13:45", topic: "Besitz: Wer eine Schusswaffe rechtmäßig besitzt (§§14–17 WaffG)" },
                    { ue: 246, time: "13:45–14:30", topic: "Erwerb: Erwerbsvoraussetzungen, Genehmigungen (§§21–23 WaffG)" },
                    { ue: 247, time: "14:45–15:30", topic: "Führen: Transport und Mitführen im öffentlichen Raum (§§25–27 WaffG)" },
                    { ue: 248, time: "15:30–16:15", topic: "Verbotene Waffen: Definitionen, Beispiele" }
                  ]
                },
                {
                  weekday: "Dienstag",
                  module: "Umgang mit Verteidigungswaffen",
                  units: [
                    { ue: 249, time: "09:00–09:45", topic: "Arten von Verteidigungswaffen" },
                    { ue: 250, time: "09:45–10:30", topic: "Praktische Handhabung – Sicherheitsregeln" },
                    { ue: 251, time: "10:45–11:30", topic: "Praktische Übungen – Handhabung und Einsatzlimits" },
                    { ue: 252, time: "11:30–12:15", topic: "Rollenspiele – Einsatz im Bewachungsdienst" },
                    { ue: 253, time: "13:00–13:45", topic: "Rechtliche Grenzen beim Einsatz von Verteidigungswaffen" },
                    { ue: 254, time: "13:45–14:30", topic: "Dokumentation von Vorfällen mit Verteidigungswaffen" },
                    { ue: 255, time: "14:45–15:30", topic: "Fallbeispiele – Einsatzanalyse" },
                    { ue: 256, time: "15:30–16:15", topic: "Besprechung & Feedback" }
                  ]
                },
                {
                  weekday: "Mittwoch",
                  module: "Umgang mit Verteidigungswaffen",
                  units: [
                    { ue: 257, time: "09:00–09:45", topic: "Wiederholung – Waffengesetz & Bewachungsverordnung" },
                    { ue: 258, time: "09:45–10:30", topic: "Praxisübungen – Handhabung & Einsatz" },
                    { ue: 259, time: "10:45–11:30", topic: "Simulation – Notwehr & Verteidigungswaffen" },
                    { ue: 260, time: "11:30–12:15", topic: "Dokumentation & Berichtswesen" },
                    { ue: 261, time: "13:00–13:45", topic: "Rollenspiele – Einsatzübungen" },
                    { ue: 262, time: "13:45–14:30", topic: "Praxisübungen – Einsatzlimits beachten" },
                    { ue: 263, time: "14:45–15:30", topic: "Lernzielkontrolle Umgang mit Verteidigungswaffen" },
                    { ue: 264, time: "15:30–16:15", topic: "Besprechung & Feedback" }
                  ]
                },
                {
                  weekday: "Donnerstag",
                  module: "Umgang mit Verteidigungswaffen & Erste Hilfe",
                  units: [
                    { ue: 265, time: "09:00–09:45", topic: "Wiederholung – Umgang mit Verteidigungswaffen" },
                    { ue: 266, time: "09:45–10:30", topic: "Fallbeispiele – Einsatz im Sicherheitsdienst" },
                    { ue: 267, time: "10:45–11:30", topic: "Besprechung – Praxisübungen & Dokumentation" },
                    { ue: 268, time: "11:30–12:15", topic: "Abschlussbesprechung Umgang mit Verteidigungswaffen" },
                    { ue: 269, time: "13:00–13:45", topic: "Lebensrettende Sofortmaßnahmen – HLW" },
                    { ue: 270, time: "13:45–14:30", topic: "Stabile Seitenlage & Bewusstseinskontrolle" },
                    { ue: 271, time: "14:45–15:30", topic: "Umgang mit Blutungen, Schock & Bewusstlosigkeit" },
                    { ue: 272, time: "15:30–16:15", topic: "Notfallmanagement und Kommunikation mit Rettungsdiensten" }
                  ]
                },
                {
                  weekday: "Freitag",
                  module: "Erste Hilfe - Evakuierungshelfer",
                  units: [
                    { ue: 273, time: "09:00–09:45", topic: "Praktische Übungen – HLW & stabile Seitenlage" },
                    { ue: 274, time: "09:45–10:30", topic: "Praktische Übungen – Blutungen, Schock & Bewusstlosigkeit" },
                    { ue: 275, time: "10:45–11:30", topic: "Fallbeispiele & Notfallmanagement" },
                    { ue: 276, time: "11:30–12:15", topic: "Abschlusszertifikat Erste Hilfe & Besprechung" },
                    { ue: 277, time: "13:00–13:45", topic: "Brandklassen, Feuerlöscher, Brandverhütung" },
                    { ue: 278, time: "13:45–14:30", topic: "Evakuierungspläne, Alarmierungsmaßnahmen, Personenrettung" },
                    { ue: 279, time: "14:45–15:30", topic: "Praktische Übungen Brandschutz & Evakuierung" },
                    { ue: 280, time: "15:30–16:15", topic: "Abschlussbesprechung & Zertifikat" }
                  ]
                }
              ]
            },

            {
              id: 8,
              label: "Woche 8",
              days: [
                {
                  weekday: "Montag",
                  module: "Grundzüge der Sicherheitstechnik",
                  units: [
                    { ue: 281, time: "09:00–09:45", topic: "Einführung Sicherheitstechnik – Aufgaben, Prävention" },
                    { ue: 282, time: "09:45–10:30", topic: "Sicherheitsorganisation – Grundlagen" },
                    { ue: 283, time: "10:45–11:30", topic: "Die drei Säulen der Sicherheit: Einsatz, Inhalt, Zusammenwirken" },
                    { ue: 284, time: "11:30–12:15", topic: "Mechanische Sicherungseinrichtungen: Zäune, Gitter, Türen" },
                    { ue: 285, time: "13:00–13:45", topic: "Schutzziele von Sicherheitszäunen" },
                    { ue: 286, time: "13:45–14:30", topic: "Verschiedene Zaunanlagen" },
                    { ue: 287, time: "14:45–15:30", topic: "Widerstandsklassen der Verglasung" },
                    { ue: 288, time: "15:30–16:15", topic: "Einfriedungsdurchlässe, automatische Türsysteme, Vereinzelungsanlagen" }
                  ]
                },
                {
                  weekday: "Dienstag",
                  module: "Grundzüge der Sicherheitstechnik",
                  units: [
                    { ue: 289, time: "09:00–09:45", topic: "Schlösser & Schließzylinder" },
                    { ue: 290, time: "09:45–10:30", topic: "Schließanlagen – Organisation & Sicherheit" },
                    { ue: 291, time: "10:45–11:30", topic: "Zutrittskontrollsysteme – Grundlagen" },
                    { ue: 292, time: "11:30–12:15", topic: "Praxisbeispiele Zutrittskontrolle" },
                    { ue: 293, time: "13:00–13:45", topic: "Elektronische Sicherungseinrichtungen – Gefahrmeldeanlagen" },
                    { ue: 294, time: "13:45–14:30", topic: "Videoüberwachungssysteme – Technik & Recht" },
                    { ue: 295, time: "14:45–15:30", topic: "Kommunikationsmittel im Sicherheitsdienst" },
                    { ue: 296, time: "15:30–16:15", topic: "Aufgabenbereiche Einbruch- & Überfallmeldeanlagen" }
                  ]
                },
                {
                  weekday: "Mittwoch",
                  module: "Grundzüge der Sicherheitstechnik",
                  units: [
                    { ue: 297, time: "09:00–09:45", topic: "Brandmeldeanlagen – Aufbau & Bedeutung" },
                    { ue: 298, time: "09:45–10:30", topic: "Störmeldeanlagen – Einsatzbereiche" },
                    { ue: 299, time: "10:45–11:30", topic: "Feuer- & Rauchschutzabschlüsse" },
                    { ue: 300, time: "11:30–12:15", topic: "Feststellanlagen – Funktionsweise" },
                    { ue: 301, time: "13:00–13:45", topic: "Sprachalarmierungs- & Evakuierungsanlagen" },
                    { ue: 302, time: "13:45–14:30", topic: "Automatische Löschanlagen" },
                    { ue: 303, time: "14:45–15:30", topic: "Bündelfunk – Grundlagen & Einsatz" },
                    { ue: 304, time: "15:30–16:15", topic: "Analog vs. digitaler Betriebsfunk" }
                  ]
                },
                {
                  weekday: "Donnerstag",
                  module: "Grundzüge der Sicherheitstechnik",
                  units: [
                    { ue: 305, time: "09:00–09:45", topic: "Mechanische Stechuhr & Wächterkontrollsysteme" },
                    { ue: 306, time: "09:45–10:30", topic: "Todmannschalter – Einsatz & Bedeutung" },
                    { ue: 307, time: "10:45–11:30", topic: "Notruf- & Serviceleitstellen – Aufbau" },
                    { ue: 308, time: "11:30–12:15", topic: "Organisation der Alarmverfolgung" },
                    { ue: 309, time: "13:00–13:45", topic: "Prozesse & Verantwortlichkeiten im Notfallplan" },
                    { ue: 310, time: "13:45–14:30", topic: "Kommunikationstechnik – Überblick" },
                    { ue: 311, time: "14:45–15:30", topic: "Brandschutz – Brandklassen & Feuerlöscher" },
                    { ue: 312, time: "15:30–16:15", topic: "Evakuierungspläne & Alarmierungsmaßnahmen" }
                  ]
                },
                {
                  weekday: "Freitag",
                  module: "Grundzüge der Sicherheitstechnik",
                  units: [
                    { ue: 313, time: "09:00–09:45", topic: "Personenrettung – Grundlagen" },
                    { ue: 314, time: "09:45–10:30", topic: "Praxisübung – Feuerlöscher & Rettung" },
                    { ue: 315, time: "10:45–11:30", topic: "Sicherheitsorganisation in Betrieben" },
                    { ue: 316, time: "11:30–12:15", topic: "Wiederholung & Vertiefung der Sicherheitstechnik" },
                    { ue: 317, time: "13:00–13:45", topic: "Abschlussübung – Sicherheitstechnik" },
                    { ue: 318, time: "13:45–14:30", topic: "Praktische Fallanalyse" },
                    { ue: 319, time: "14:45–15:30", topic: "Modulabschlussprüfung Sicherheitstechnik" },
                    { ue: 320, time: "15:30–16:15", topic: "Besprechung & Feedback" }
                  ]
                }
              ]
            },

            {
              id: 9,
              label: "Woche 9",
              days: [
                {
                  weekday: "Montag",
                  module: "Unfallverhütungsvorschriften",
                  units: [
                    { ue: 321, time: "09:00–09:45", topic: "DGUV Vorschrift 1 – Grundsätze der Prävention" },
                    { ue: 322, time: "09:45–10:30", topic: "Grundpflichten des Unternehmers (§2)" },
                    { ue: 323, time: "10:45–11:30", topic: "Unterweisung der Versicherten (§4)" },
                    { ue: 324, time: "11:30–12:15", topic: "Zutritts- und Aufenthaltsverbote (§9)" },
                    { ue: 325, time: "13:00–13:45", topic: "Zugang zu Vorschriften & Regeln (§12)" },
                    { ue: 326, time: "13:45–14:30", topic: "Erste Hilfe – Pflichten des Unternehmers (§24)" },
                    { ue: 327, time: "14:45–15:30", topic: "Erforderliche Einrichtungen & Sachmittel (§25)" },
                    { ue: 328, time: "15:30–16:15", topic: "Zahl & Ausbildung der Ersthelfer (§26)" }
                  ]
                },
                {
                  weekday: "Dienstag",
                  module: "Unfallverhütungsvorschriften",
                  units: [
                    { ue: 329, time: "09:00–09:45", topic: "DGUV Vorschrift 23 – Wach- & Sicherungsdienste" },
                    { ue: 330, time: "09:45–10:30", topic: "Dienstanweisung & Arbeitssicherheit" },
                    { ue: 331, time: "10:45–11:30", topic: "Verbot berauschender Mittel" },
                    { ue: 332, time: "11:30–12:15", topic: "Objektsicherung & besondere Gefahren" },
                    { ue: 333, time: "13:00–13:45", topic: "Überprüfung & Objekteinweisung (§9)" },
                    { ue: 334, time: "13:45–14:30", topic: "Ausrüstung des Personals (§10), Regelungen für Brillenträger (§11)" },
                    { ue: 335, time: "14:45–15:30", topic: "Hunde – Haltung, Führung, Transport (§12–17)" },
                    { ue: 336, time: "15:30–16:15", topic: "Schusswaffen – Ausrüstung & Beschusszeichen (§18–19)" }
                  ]
                },
                {
                  weekday: "Mittwoch",
                  module: "Unfallverhütungsvorschriften",
                  units: [
                    { ue: 337, time: "09:00–09:45", topic: "Führung & Aufbewahrung von Munition (§20–22)" },
                    { ue: 338, time: "09:45–10:30", topic: "Eignung (§24) & Geldtransporte (§25–26)" },
                    { ue: 339, time: "10:45–11:30", topic: "Führungspflichten & Dokumentation (§16)" },
                    { ue: 340, time: "11:30–12:15", topic: "ASR A1.3 – Sicherheits- & Gesundheitsschutzkennzeichnung" },
                    { ue: 341, time: "13:00–13:45", topic: "Verbotszeichen, Warnzeichen, Gebotszeichen" },
                    { ue: 342, time: "13:45–14:30", topic: "Rettungszeichen, Brandschutzzeichen, Zusatzzeichen" },
                    { ue: 343, time: "14:45–15:30", topic: "Grafische Symbole, Farben & deren Bedeutung" },
                    { ue: 344, time: "15:30–16:15", topic: "Flucht- & Rettungspläne – Praxis & Übungen" }
                  ]
                },
                {
                  weekday: "Donnerstag",
                  module: "Waffensachkunde § 7 WaffG",
                  units: [
                    { ue: 345, time: "09:00–09:45", topic: "Waffengesetz – Definitionen & Kategorien" },
                    { ue: 346, time: "09:45–10:30", topic: "Arten von Waffen – Überblick" },
                    { ue: 347, time: "10:45–11:30", topic: "Munition – Klassifizierung & Umgang" },
                    { ue: 348, time: "11:30–12:15", topic: "Rechtliche Grundlagen Besitz/Erwerb (§§14–17, 21–23 WaffG)" },
                    { ue: 349, time: "13:00–13:45", topic: "Transport & Führen von Schusswaffen (§§25–27 WaffG)" },
                    { ue: 350, time: "13:45–14:30", topic: "Aufbewahrungspflichten (§36 WaffG)" },
                    { ue: 351, time: "14:45–15:30", topic: "Verbotene Waffen (§2 WaffG) – Beispiele" },
                    { ue: 352, time: "15:30–16:15", topic: "Bewachungsverordnung (BewachV) zum Waffeneinsatz" }
                  ]
                },
                {
                  weekday: "Freitag",
                  module: "Waffensachkunde § 7 WaffG",
                  units: [
                    { ue: 353, time: "09:00–09:45", topic: "Grenzen der Notwehr & Notstands (§§32, 34 StGB)" },
                    { ue: 354, time: "09:45–10:30", topic: "Haftung, straf- & zivilrechtliche Folgen" },
                    { ue: 355, time: "10:45–11:30", topic: "Sicherheitsrelevante Einsatzszenarien" },
                    { ue: 356, time: "11:30–12:15", topic: "Fallanalyse Waffenmissbrauch" },
                    { ue: 357, time: "13:00–13:45", topic: "Dokumentation & Nachweispflichten" },
                    { ue: 358, time: "13:45–14:30", topic: "Kontrollmechanismen & Aufsichtspflichten" },
                    { ue: 359, time: "14:45–15:30", topic: "Vorbereitung auf praktische Schulung" },
                    { ue: 360, time: "15:30–16:15", topic: "Wiederholung & Quiz" }
                  ]
                }
              ]
            },

            {
              id: 10,
              label: "Woche 10",
              days: [
                {
                  weekday: "Montag",
                  module: "Waffensachkunde §7 WaffG",
                  units: [
                    { ue: 361, time: "09:00–09:45", topic: "Praktische Schulung – Waffenhandhabung (Theorie)" },
                    { ue: 362, time: "09:45–10:30", topic: "Sicherheitsvorschriften im Umgang" },
                    { ue: 363, time: "10:45–11:30", topic: "Lagerung & Transport praktisch" },
                    { ue: 364, time: "11:30–12:15", topic: "Kontrollübung Waffenrecht" },
                    { ue: 365, time: "13:00–13:45", topic: "Schießstandordnung – Grundlagen" },
                    { ue: 366, time: "13:45–14:30", topic: "Verhalten am Schießstand" },
                    { ue: 367, time: "14:45–15:30", topic: "Munition praktisch – Zuweisung & Kontrolle" },
                    { ue: 368, time: "15:30–16:15", topic: "Besprechung Tagespraxis" }
                  ]
                },
                {
                  weekday: "Dienstag",
                  module: "Waffensachkunde §7 WaffG",
                  units: [
                    { ue: 369, time: "09:00–09:45", topic: "Praktische Schulung – Handhabung Waffenattrappen" },
                    { ue: 370, time: "09:45–10:30", topic: "Zielübungen (Trockenübungen)" },
                    { ue: 371, time: "10:45–11:30", topic: "Sicherheitscheck Waffen" },
                    { ue: 372, time: "11:30–12:15", topic: "Ablauf einer Waffenkontrolle" },
                    { ue: 373, time: "13:00–13:45", topic: "Aufbewahrung & Übergabe – Praxis" },
                    { ue: 374, time: "13:45–14:30", topic: "Dokumentationsübung Waffenbuch" },
                    { ue: 375, time: "14:45–15:30", topic: "Rechtliche Wiederholung WaffG" },
                    { ue: 376, time: "15:30–16:15", topic: "Diskussion – Sicherheitsrisiken" }
                  ]
                },
                {
                  weekday: "Mittwoch",
                  module: "Waffensachkunde §7 WaffG",
                  units: [
                    { ue: 377, time: "09:00–09:45", topic: "Prüfungsvorbereitung Waffensachkunde" },
                    { ue: 378, time: "09:45–10:30", topic: "Fallstudien & Übungen" },
                    { ue: 379, time: "10:45–11:30", topic: "Schriftliche Testsimulation" },
                    { ue: 380, time: "11:30–12:15", topic: "Mündliche Übungssimulation" },
                    { ue: 381, time: "13:00–13:45", topic: "Praxisübung – Verhalten in Notwehrsituationen" },
                    { ue: 382, time: "13:45–14:30", topic: "Praxisübung – Übergabe/Transport Waffen" },
                    { ue: 383, time: "14:45–15:30", topic: "Abschlussprüfungsvorbereitung" },
                    { ue: 384, time: "15:30–16:15", topic: "Besprechung & Waffensachkunde" }
                  ]
                },
                {
                  weekday: "Donnerstag",
                  module: "Prüfungsvorbereitung",
                  units: [
                    { ue: 385, time: "09:00–09:45", topic: "Wiederholung Strafrecht – Tatbestände" },
                    { ue: 386, time: "09:45–10:30", topic: "Wiederholung Strafverfahrensrecht" },
                    { ue: 387, time: "10:45–11:30", topic: "Jedermannsrechte – Übungen" },
                    { ue: 388, time: "11:30–12:15", topic: "Datenschutz – Grundlagen & Wiederholung" },
                    { ue: 389, time: "13:00–13:45", topic: "Kommunikationspraxis & Deeskalation" },
                    { ue: 390, time: "13:45–14:30", topic: "Wiederholung Sicherheitsdienste – Hausrecht" },
                    { ue: 391, time: "14:45–15:30", topic: "Fallübungen Sicherheitsdienst" },
                    { ue: 392, time: "15:30–16:15", topic: "Dokumentations- & Berichtswesen" }
                  ]
                },
                {
                  weekday: "Freitag",
                  module: "Prüfungsvorbereitung",
                  units: [
                    { ue: 393, time: "09:00–09:45", topic: "Prüfungstraining schriftlich – Block 1" },
                    { ue: 394, time: "09:45–10:30", topic: "Prüfungstraining schriftlich – Block 2" },
                    { ue: 395, time: "10:45–11:30", topic: "Prüfungstraining schriftlich – Block 3" },
                    { ue: 396, time: "11:30–12:15", topic: "Besprechung & Korrektur der Tests" },
                    { ue: 397, time: "13:00–13:45", topic: "Praxisbeispiele – Sicherheitsdienst Alltag" },
                    { ue: 398, time: "13:45–14:30", topic: "Praxisbeispiele – Notwehr/Notstand" },
                    { ue: 399, time: "14:45–15:30", topic: "Praxisbeispiele – Festnahmerechte" },
                    { ue: 400, time: "15:30–16:15", topic: "Rollenspiel – Konfliktlösung" }
                  ]
                }
              ]
            },

            {
              id: 11,
              label: "Woche 11",
              days: [
                {
                  weekday: "Montag",
                  module: "Prüfungsvorbereitung",
                  units: [
                    { ue: 401, time: "09:00–09:45", topic: "Überblick & Ziele der Prüfungsvorbereitung" },
                    { ue: 402, time: "09:45–10:30", topic: "Wiederholung Rechtsgebiete – Öffentliches Recht" },
                    { ue: 403, time: "10:45–11:30", topic: "Wiederholung Gewerberecht" },
                    { ue: 404, time: "11:30–12:15", topic: "Wiederholung Bürgerliches Recht (BGB)" },
                    { ue: 405, time: "13:00–13:45", topic: "Wiederholung Strafrecht – Tatbestände" },
                    { ue: 406, time: "13:45–14:30", topic: "Wiederholung Strafverfahrensrecht" },
                    { ue: 407, time: "14:45–15:30", topic: "Jedermannsrechte – Anwendungsübungen" },
                    { ue: 408, time: "15:30–16:15", topic: "Datenschutz – Wiederholung & Fallbeispiele" }
                  ]
                },
                {
                  weekday: "Dienstag",
                  module: "Prüfungsvorbereitung",
                  units: [
                    { ue: 409, time: "09:00–09:45", topic: "Wiederholung Umgang mit Menschen – Kommunikation" },
                    { ue: 410, time: "09:45–10:30", topic: "Deeskalation & Konfliktlösung (Übungen)" },
                    { ue: 411, time: "10:45–11:30", topic: "Wiederholung Verteidigungswaffen – rechtliche Grenzen" },
                    { ue: 412, time: "11:30–12:15", topic: "Erste Hilfe – Kurzwiederholung" },
                    { ue: 413, time: "13:00–13:45", topic: "Brandschutz – Grundlagen & Übungen" },
                    { ue: 414, time: "13:45–14:30", topic: "Wiederholung Sicherheitstechnik" },
                    { ue: 415, time: "14:45–15:30", topic: "Unfallverhütungsvorschriften – Fallbeispiele" },
                    { ue: 416, time: "15:30–16:15", topic: "Wiederholung Waffensachkunde" }
                  ]
                },
                {
                  weekday: "Mittwoch",
                  module: "Prüfungsvorbereitung",
                  units: [
                    { ue: 417, time: "09:00–09:45", topic: "Prüfungstraining schriftlich – Übungsblock 1" },
                    { ue: 418, time: "09:45–10:30", topic: "Prüfungstraining schriftlich – Übungsblock 2" },
                    { ue: 419, time: "10:45–11:30", topic: "Prüfungstraining schriftlich – Übungsblock 3" },
                    { ue: 420, time: "11:30–12:15", topic: "Korrektur & Besprechung der Tests" },
                    { ue: 421, time: "13:00–13:45", topic: "Praxisbeispiele Sicherheitsdienst – Hausrecht" },
                    { ue: 422, time: "13:45–14:30", topic: "Praxisbeispiele – Notwehr/Notstand" },
                    { ue: 423, time: "14:45–15:30", topic: "Praxisbeispiele – Festnahmerechte" },
                    { ue: 424, time: "15:30–16:15", topic: "Rollenspiel – Konfliktlösung" }
                  ]
                },
                {
                  weekday: "Donnerstag",
                  module: "Prüfungsvorbereitung",
                  units: [
                    { ue: 425, time: "09:00–09:45", topic: "Prüfungsvorbereitung – mündliche Übung 1" },
                    { ue: 426, time: "09:45–10:30", topic: "Mündliche Übung 2" },
                    { ue: 427, time: "10:45–11:30", topic: "Mündliche Übung 3" },
                    { ue: 428, time: "11:30–12:15", topic: "Rollenspiele – Sicherheitslagen" },
                    { ue: 429, time: "13:00–13:45", topic: "Rollenspiele – Bedrohungslagen" },
                    { ue: 430, time: "13:45–14:30", topic: "Simulation – Kontrollgang & Berichtswesen" },
                    { ue: 431, time: "14:45–15:30", topic: "Simulation – Zutrittskontrolle" },
                    { ue: 432, time: "15:30–16:15", topic: "Simulation – Evakuierungsübung" }
                  ]
                },
                {
                  weekday: "Freitag",
                  module: "Prüfungsvorbereitung",
                  units: [
                    { ue: 433, time: "09:00–09:45", topic: "Wiederholung schwierige Paragraphen" },
                    { ue: 434, time: "09:45–10:30", topic: "Training Fachbegriffe & Definitionen" },
                    { ue: 435, time: "10:45–11:30", topic: "Abschluss schriftliche Probeklausur" },
                    { ue: 436, time: "11:30–12:15", topic: "Besprechung Probeklausur" },
                    { ue: 437, time: "13:00–13:45", topic: "Mündliche Prüfungssimulation (Gruppe A)" },
                    { ue: 438, time: "13:45–14:30", topic: "Mündliche Prüfungssimulation (Gruppe B)" },
                    { ue: 439, time: "14:45–15:30", topic: "Mündliche Prüfungssimulation (Gruppe C)" },
                    { ue: 440, time: "15:30–16:15", topic: "Feedback & Lernstrategien" }
                  ]
                }
              ]
            },

            {
              id: 12,
              label: "Woche 12",
              days: [
                {
                  weekday: "Montag",
                  module: "Prüfungsvorbereitung",
                  units: [
                    { ue: 441, time: "09:00–09:45", topic: "Überblick & Ziele der Prüfungsvorbereitung" },
                    { ue: 442, time: "09:45–10:30", topic: "Wiederholung Rechtsgebiete – Öffentliches Recht" },
                    { ue: 443, time: "10:45–11:30", topic: "Wiederholung Gewerberecht" },
                    { ue: 444, time: "11:30–12:15", topic: "Wiederholung Bürgerliches Recht (BGB)" },
                    { ue: 445, time: "13:00–13:45", topic: "Wiederholung Strafrecht – Tatbestände" },
                    { ue: 446, time: "13:45–14:30", topic: "Wiederholung Strafverfahrensrecht" },
                    { ue: 447, time: "14:45–15:30", topic: "Jedermannsrechte – Anwendungsübungen" },
                    { ue: 448, time: "15:30–16:15", topic: "Datenschutz – Wiederholung & Fallbeispiele" }
                  ]
                },
                {
                  weekday: "Dienstag",
                  module: "Prüfungsvorbereitung",
                  units: [
                    { ue: 449, time: "09:00–09:45", topic: "Wiederholung Umgang mit Menschen – Kommunikation" },
                    { ue: 450, time: "09:45–10:30", topic: "Deeskalation & Konfliktlösung (Übungen)" },
                    { ue: 451, time: "10:45–11:30", topic: "Wiederholung Verteidigungswaffen – rechtliche Grenzen" },
                    { ue: 452, time: "11:30–12:15", topic: "Erste Hilfe – Kurzwiederholung" },
                    { ue: 453, time: "13:00–13:45", topic: "Brandschutz – Grundlagen & Übungen" },
                    { ue: 454, time: "13:45–14:30", topic: "Wiederholung Sicherheitstechnik" },
                    { ue: 455, time: "14:45–15:30", topic: "Unfallverhütungsvorschriften – Fallbeispiele" },
                    { ue: 456, time: "15:30–16:15", topic: "Wiederholung Waffensachkunde" }
                  ]
                },
                {
                  weekday: "Mittwoch",
                  module: "Prüfungsvorbereitung",
                  units: [
                    { ue: 457, time: "09:00–09:45", topic: "Prüfungstraining schriftlich – Übungsblock 1" },
                    { ue: 458, time: "09:45–10:30", topic: "Prüfungstraining schriftlich – Übungsblock 2" },
                    { ue: 459, time: "10:45–11:30", topic: "Prüfungstraining schriftlich – Übungsblock 3" },
                    { ue: 460, time: "11:30–12:15", topic: "Korrektur & Besprechung der Tests" },
                    { ue: 461, time: "13:00–13:45", topic: "Praxisbeispiele Sicherheitsdienst – Hausrecht" },
                    { ue: 462, time: "13:45–14:30", topic: "Praxisbeispiele – Notwehr/Notstand" },
                    { ue: 463, time: "14:45–15:30", topic: "Praxisbeispiele – Festnahmerechte" },
                    { ue: 464, time: "15:30–16:15", topic: "Rollenspiel – Konfliktlösung" }
                  ]
                },
                {
                  weekday: "Donnerstag",
                  module: "Prüfungsvorbereitung",
                  units: [
                    { ue: 465, time: "09:00–09:45", topic: "Prüfungsvorbereitung – mündliche Übung 1" },
                    { ue: 466, time: "09:45–10:30", topic: "Mündliche Übung 2" },
                    { ue: 467, time: "10:45–11:30", topic: "Mündliche Übung 3" },
                    { ue: 468, time: "11:30–12:15", topic: "Rollenspiele – Sicherheitslagen" },
                    { ue: 469, time: "13:00–13:45", topic: "Rollenspiele – Bedrohungslagen" },
                    { ue: 470, time: "13:45–14:30", topic: "Simulation – Kontrollgang & Berichtswesen" },
                    { ue: 471, time: "14:45–15:30", topic: "Simulation – Zutrittskontrolle" },
                    { ue: 472, time: "15:30–16:15", topic: "Simulation – Evakuierungsübung" }
                  ]
                },
                {
                  weekday: "Freitag",
                  module: "Prüfungsvorbereitung",
                  units: [
                    { ue: 473, time: "09:00–09:45", topic: "Wiederholung schwierige Paragraphen" },
                    { ue: 474, time: "09:45–10:30", topic: "Training Fachbegriffe & Definitionen" },
                    { ue: 475, time: "10:45–11:30", topic: "Abschluss schriftliche Probeklausur" },
                    { ue: 476, time: "11:30–12:15", topic: "Besprechung Probeklausur" },
                    { ue: 477, time: "13:00–13:45", topic: "Mündliche Prüfungssimulation (Gruppe A)" },
                    { ue: 478, time: "13:45–14:30", topic: "Mündliche Prüfungssimulation (Gruppe B)" },
                    { ue: 479, time: "14:45–15:30", topic: "Mündliche Prüfungssimulation (Gruppe C)" },
                    { ue: 480, time: "15:30–16:15", topic: "Feedback & Lernstrategien" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
