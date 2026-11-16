# Vyjmenovaná slova po B

Online kvíz na procvičení pravopisu vyjmenovaných slov po B. Statická stránka,
žádný build, žádné závislosti.

- 39 otázek — doplňovačky i/y a výběr ze čtyř možností
- chytáky s dvojicemi *být / bít*, *bylina / bílý*, *bydlit / bidlo*
- po každé odpovědi vysvětlení a celá správná věta
- na konci přehled otázek, které se nepovedly
- ovládání klávesnicí (1–4, Enter), funguje na mobilu, světlý i tmavý režim

## Spuštění lokálně

```sh
python3 -m http.server 8000
# a otevři http://localhost:8000
```

## Úprava otázek

Všechny otázky jsou v `questions.js`:

```js
// doplňovačka — mezera se v textu značí dvěma podtržítky
{ type: "iy", text: "Chtěl b__t doktorem.", gap: ["ý", "í"], answer: 0, hint: "..." }

// výběr ze čtyř možností
{ type: "pick", text: "Které slovo je napsané správně?",
  options: ["dobytek", "dobitek", "dobýtek", "dobitěk"], answer: 0, hint: "..." }
```

`answer` je index správné možnosti, pořadí se hráči vždy promíchá.
U doplňovačky s více mezerami se varianty oddělují `…` (např. `"y … y"`).

## Barvy

Barvy jsou v `styles.css` jako proměnné na `:root` — `--accent` stačí přepsat
na barvu z vlastního loga.
