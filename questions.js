// Otázky ke kvízu: vyjmenovaná slova po B
// typ "iy"   – ve větě je mezera, hráč volí i/í nebo y/ý
// typ "pick" – hráč vybírá jednu ze čtyř možností

window.QUESTIONS = [
  // --- doplňovačka: být / bít ---
  { type: "iy", text: "Chtěl b__t doktorem.", gap: ["ý", "í"], answer: 0,
    hint: "být = existovat, bít = tlouct" },
  { type: "iy", text: "Přestaň b__t svého brášku!", gap: ["ý", "í"], answer: 1,
    hint: "bít = tlouct, udeřit" },
  { type: "iy", text: "Hodiny začaly b__t poledne.", gap: ["ý", "í"], answer: 1,
    hint: "hodiny bijí – od slova bít" },
  { type: "iy", text: "Kde b__s chtěl b__dlet?", gap: ["y … y", "i … i"], answer: 0,
    hint: "bys patří k být, bydlet je vyjmenované slovo" },

  // --- bydlit a odvozená ---
  { type: "iy", text: "Naše b__dliště je v Brně.", gap: ["y", "i"], answer: 0,
    hint: "od bydlit" },
  { type: "iy", text: "Zvířata si postavila ob__dlí z větví.", gap: ["y", "i"], answer: 0,
    hint: "obydlí – od bydlit" },
  { type: "iy", text: "V paneláku b__dlí sto ob__vatel.", gap: ["y … y", "i … i"], answer: 0,
    hint: "bydlí i obyvatel jsou vyjmenovaná slova" },

  // --- byt, příbytek, nábytek ---
  { type: "iy", text: "Koupili si nový b__t ve třetím patře.", gap: ["y", "i"], answer: 0,
    hint: "byt = místo k bydlení" },
  { type: "iy", text: "Do pokoje přivezli nový náb__tek.", gap: ["y", "i"], answer: 0,
    hint: "nábytek – vyjmenované slovo" },
  { type: "iy", text: "Vrátil se do svého teplého příb__tku.", gap: ["y", "i"], answer: 0,
    hint: "příbytek = obydlí" },
  { type: "iy", text: "Na talíři zůstal jen zb__tek večeře.", gap: ["y", "i"], answer: 0,
    hint: "zbytek – příbuzné se slovem být" },

  // --- dobytek, býk, kobyla ---
  { type: "iy", text: "Pastevec vyhnal dob__tek na pastvu.", gap: ["y", "i"], answer: 0,
    hint: "dobytek – vyjmenované slovo" },
  { type: "iy", text: "Za plotem se pásl b__k a kob__la.", gap: ["ý … y", "í … i"], answer: 0,
    hint: "býk i kobyla jsou vyjmenovaná slova" },
  { type: "iy", text: "Malý b__ček se schoval za mámu.", gap: ["ý", "í"], answer: 0,
    hint: "býček – od býk" },

  // --- obyčej, bystrý, bylina ---
  { type: "iy", text: "Je to starý vánoční ob__čej.", gap: ["y", "i"], answer: 0,
    hint: "obyčej = zvyk, tradice" },
  { type: "iy", text: "Byl to úplně ob__čejný den.", gap: ["y", "i"], answer: 0,
    hint: "obyčejný – od obyčej" },
  { type: "iy", text: "Má b__strý rozum a všechno hned pochopí.", gap: ["y", "i"], answer: 0,
    hint: "bystrý = chytrý" },
  { type: "iy", text: "Pod skalou tekla studená b__střina.", gap: ["y", "i"], answer: 0,
    hint: "bystřina – od bystrý" },
  { type: "iy", text: "Babička sbírá léčivé b__liny.", gap: ["y", "i"], answer: 0,
    hint: "bylina = rostlina" },
  { type: "iy", text: "Uvařila mi b__linkový čaj.", gap: ["y", "i"], answer: 0,
    hint: "bylinkový – od bylina" },

  // --- Přibyslav a zeměpisná jména ---
  { type: "iy", text: "Vlak jede do Přib__slavi.", gap: ["y", "i"], answer: 0,
    hint: "Přibyslav – vyjmenované slovo" },

  // --- chytáky, kde se píše I ---
  { type: "iy", text: "Pták seděl na b__dle v kurníku.", gap: ["y", "i"], answer: 1,
    hint: "bidlo = dřevěná tyč, není vyjmenované slovo" },
  { type: "iy", text: "B__lá kočka spala na okně.", gap: ["y", "í"], answer: 1,
    hint: "bílý = barva, nepatří k bylinám" },
  { type: "iy", text: "O vítězství se rozhodlo v krátké b__tvě.", gap: ["y", "i"], answer: 1,
    hint: "bitva – od bít" },
  { type: "iy", text: "Na hřišti se strhla b__tka.", gap: ["y", "i"], answer: 1,
    hint: "bitka – od bít" },
  { type: "iy", text: "Dostali jsme zajímavou nab__dku.", gap: ["y", "í"], answer: 1,
    hint: "nabídka – od nabízet" },
  { type: "iy", text: "Rozb__l sklenici na drobné střepy.", gap: ["y", "i"], answer: 1,
    hint: "rozbil – od bít, rozbíjet" },

  // --- výběr ze čtyř ---
  { type: "pick", text: "Které slovo NEPATŘÍ mezi vyjmenovaná slova po B?",
    options: ["bidlo", "bylina", "obyčej", "kobyla"], answer: 0,
    hint: "bidlo je tyč – píše se s I" },
  { type: "pick", text: "Které slovo je napsané správně?",
    options: ["dobytek", "dobitek", "dobýtek", "dobitěk"], answer: 0,
    hint: "dobytek – vyjmenované slovo" },
  { type: "pick", text: "Které slovo je napsané správně?",
    options: ["nábytek", "nábitek", "nábýtek", "nábitěk"], answer: 0,
    hint: "nábytek – vyjmenované slovo" },
  { type: "pick", text: "Které slovo je napsané správně?",
    options: ["příbytek", "přibytek", "příbitek", "přibítek"], answer: 0,
    hint: "příbytek – dlouhé Í v předponě pří-, pak Y" },
  { type: "pick", text: "Co znamená slovo „obyčej“?",
    options: ["zvyk nebo tradice", "druh nábytku", "stádo zvířat", "léčivá rostlina"],
    answer: 0, hint: "obyčej = zvyk, tradice" },
  { type: "pick", text: "Co znamená slovo „bidlo“?",
    options: ["dřevěná tyč", "místo k bydlení", "mladý býk", "bylinkový čaj"],
    answer: 0, hint: "proto se píše s I" },
  { type: "pick", text: "Ve které větě je chyba?",
    options: ["Pes bidlí v boudě.", "Bylina voní.", "Býk se pase.", "Kobyla běží."],
    answer: 0, hint: "správně: bydlí – od bydlit" },
  { type: "pick", text: "Ve které větě je chyba?",
    options: ["Nebyl bych rád.", "Bil ho holí.", "Hodiny bijí.", "Bidlo je dlouhé."],
    answer: 0, hint: "správně: nebyl bych – od být" },
  { type: "pick", text: "Které slovo je příbuzné se slovem „být“?",
    options: ["bytost", "bitva", "bílý", "bidlo"], answer: 0,
    hint: "bytost, bytí, bývalý, zbytek" },
  { type: "pick", text: "Které slovo je příbuzné se slovem „bystrý“?",
    options: ["bystřina", "bistro", "bitva", "bílek"], answer: 0,
    hint: "bystřina = rychlý horský potok" },
  { type: "pick", text: "Kolik je vyjmenovaných slov po B?",
    options: ["13", "9", "11", "15"], answer: 0,
    hint: "být, bydlit, obyvatel, byt, příbytek, nábytek, dobytek, obyčej, bystrý, bylina, kobyla, býk, Přibyslav" },
  { type: "pick", text: "Které z těchto slov je vyjmenované slovo po B?",
    options: ["Přibyslav", "Brno", "Bystrc", "Bílina"], answer: 0,
    hint: "Přibyslav je v řadě vyjmenovaných slov" }
];
