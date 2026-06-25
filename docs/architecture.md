# Komponenten

- Buttons -> bestimmte farbe und link
- Flatlist -> mit aufgaben
- Such formular
- Cards -> Pro aufgabe im Menü
- Cards -> Pro aufgabe im Training

# Navigation

- Für Menu (Tabs)
- Rest (Stack)

# Datenmodell

- Aufgabe: { name, weight_type, train_type, imageUri? }
- Training: {title, duration, aufgabe:{ name, weight_type, train_type, imageUri? } }

# Zustand & Side-Effekte

- lokal:
  - Timer
- API/local-Storage:
  - Aufgaben
  - training
- Context
  - ThemeContext
