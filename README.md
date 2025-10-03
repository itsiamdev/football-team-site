FC Retro — Site demo

Acest proiect este un site static simplu (HTML, CSS, JS) care prezintă o echipă de fotbal fictivă: FC Retro.

Fișiere create:
- `index.html` — pagina principală
- `css/styles.css` — stiluri responsive și modul dark
- `js/script.js` — datele lotului și funcționalitatea de căutare / filtrare

Cum rulezi local:
1. Deschide `index.html` direct în browser (dublu-click) — funcționează pentru testare rapidă.
2. Sau, pornește un server local (recomandat) din folderul proiectului. În PowerShell (Windows):

```powershell
# pornire server http simplu (Python 3.x)
python -m http.server 8000; Start-Process http://localhost:8000
```

Extensii și îmbunătățiri posibile:
- Adăugarea imaginilor reale ale jucătorilor în folderul `assets/` și actualizarea link-urilor.
- Pagini detaliate pentru fiecare jucător.
- Integrare cu un CMS sau un backend simplu pentru administrare.

Licență: conținut demonstrativ, folosește-l după cum dorești.
