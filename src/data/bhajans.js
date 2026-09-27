// ─────────────────────────────────────────────────────────────────────────
// JAI JAI VAANI — BHAJAN LIBRARY
// Every bhajan on the "Jai Jai Vaani" page comes from this one array.
//
// TO ADD A NEW BHAJAN: copy one object below (including the comma!) and
// fill in your own values. That's it — no other file needs to change.
//
// Fields:
//   id         → any unique short string, no spaces
//   title      → shown as the card heading
//   category   → groups bhajans together and fills the filter dropdown
//                automatically. Use an existing category name to add to
//                it, or type a brand-new one to create a new group.
//   lyrics     → multi-line string, keep the backticks
//   youtubeUrl → full YouTube link, e.g. "https://www.youtube.com/watch?v=XXXXXXXXXXX"
//                or "https://youtu.be/XXXXXXXXXXX". Leave it as "" (empty)
//                if you don't have the link yet — the site will show a
//                friendly "coming soon" instead of a broken player.
//
// This mirrors the folders in your reference repo (Jai_Jai_Vaani,
// jai_jagnnath, radhadamodar_stuti) — replace the sample lyrics below with
// the real text from that repo whenever you're ready.
// See EDITING_GUIDE.md → "Adding or editing a bhajan".
// ─────────────────────────────────────────────────────────────────────────

export const bhajans = [
  {
    id: "jjv-mahamantra",
    title: "राधे झूलन पधारो घिर आए बदरा",
    category: "Jai Jai Vaani",
    lyrics: `राधे झूलन पधारो झुकी आए बदरा,
झुक आये बदरा झुकी आये बदरा,
राधे झूलन पधारो झुकी आये बदरा,
झुक आये बदरा झुकी आये बदरा,
साजो सकल श्रृंगार नैना सारो कजरा ॥


ऐसो मान ना कीजे हठ तजिए अली,
ऐसो मान ना कीजे हठ तजिए अली,
राधे झूलन पधारो झुकी आये बदरा,
झुक आये बदरा झुकी आये बदरा ॥

तू तो परम सयानी हो वृषभान की लली,
तू तो परम सयानी हो वृषभान की लली,
राधे झूलन पधारो झुकी आये बदरा,
झुक आये बदरा झुकी आये बदरा ॥

तेरो रसिक प्रीतम मग जोवत खड़ो,
तेरो रसिक प्रीतम मग जोवत खड़ो,
राधे झूलन पधारो झुकी आये बदरा,
झुक आये बदरा झुकी आये बदरा ॥

राधे दोऊ कर जोड़े तेरे चरण पड्यो,
राधे दोऊ कर जोड़े तेरे चरण पड्यो,
राधे झूलन पधारो झुकी आये बदरा,
झुक आये बदरा झुकी आये बदरा ॥


दो मिल झूलत रंग हिडोरे, नील पीत आंचल चल चंचल
हे बैनीहार हिलो रे, दो मिल झूलत रंग हिडोरे

हे भंवर भीर लटपट संग आवत, लगे सुगंध के डोरे
हे नागरिया नागर रस कििनते, मिल गावत है थोड़े थोड़े

श्यामा झूलन पधारो, राधे झूलन पधारो
प्यारी झूलन पधारो, घिर आए बदरा।`,
    youtubeUrl: "https://www.youtube.com/watch?v=9vW-2UJjQjg", // TODO(ADD-BHAJAN): paste your YouTube link here
  },
  {
    id: "jjv-govinda-jai",
    title: "एक बार हरि बोल",
    category: "Jai Jai Vaani",
    lyrics: `निताई जाए द्वारे द्वारे
एक बार हरि बोल
भाई तेरे पांव पडू
एक बार हरि बोल
मैया तेरे पाव पडू

मैया तेरे पांव पडू
एक बार हरि बोल
प्रेम दाता निताई बोले
गौर हरि हरि बोल
भाईया तेरे पांव पडू

नाम बुलवाऊंगो
हरि हरि हरि बोल
तो द्वारे अड़ जाऊं
हरि हरि हरि बोल

यही मर जाऊंगो
एक बार हरि बोल
निताई जाए द्वारे द्वारे
एक बार हरि बोल
प्रेम दाता निताई बोले
गौर हरि हरि बोल`,
    youtubeUrl: "https://www.youtube.com/watch?v=CdR_Hg0ae2M&list=RDCdR_Hg0ae2M&start_radio=1",
  },
  {
    id: "jagannath-swami",
    title: "ऐसो चटक मटक सो ठाकुर, तीनों लोकन हूँ में नाय",
    category: "Jai Jagannath",
    lyrics: `ऐसो चटक मटक सो ठाकुर, तीनों लोकन हूँ में नाय।
ऐसो चटक मटक सो ठाकुर, तीनों लोकन हूँ में नाय॥

तीन ठौर ते टेढ़ो दिखे, नट किसी चलगत यह सीखे।
टेड़े नैन चलावे तीखे, सब देवन को देव,
ताऊ ये ब्रज में घेरे गाय॥ (Touu ye braj me ghere gaay)
ऐसो चटक मटक सो ठाकुर, तीनों लोकन हूँ में नाय॥

बड़े बड़े असूरन को मारयो, नाग कालिया पकड़ पछाड़ो।
सात दिना तक गिरिवर धारयो, ऐसो बलि ताऊ,
खेलत में ग्वालन पे पीट जाय॥
ऐसो चटक मटक सो ठाकुर, तीनों लोकन हूँ में नाय॥

रूप छबीलो है ब्रज सुंदर, बिना बुलाए डोले घर घर।
प्रेमी ब्रज गोपीन को चाकर, ऐसो प्रेम बढ्यो,
माखन की चोरी करवे जाए॥
ऐसो चटक मटक सो ठाकुर, तीनों लोकन हूँ में नाय॥`,
    youtubeUrl: "https://www.youtube.com/watch?v=OqB3zL44qKc&list=RDOqB3zL44qKc&start_radio=1",
  },
  {
    id: "jagannath-aarti",
    title: "ओ म्हारा गिरधर लाल, थारो नचायो नाचूँ रे",
    category: "Jai Jagannath",
    lyrics: `ओ म्हारा गिरधर लाल, थारो नचायो नाचूँ रे
म्हारा गिरधर लाल, थारो नचायो नाचूँ रे
ओ म्हारा नटराजा, थारो नचायो नाचूँ रे
म्हारा गिरधर लाल, थारो नचायो नाचूँ रे

घर का प्राणी, कहा ना माने, मन-मन खुशी मनाऊँ
थारे इस मंगल विधान में, मैं काहे टाँग अड़ाऊँ?
म्हारा गिरधर लाल, थारो नचायो नाचूँ रे

रूखा-सूखा जो कछु देवे, थारे ही भोग लगाऊँ
खीर-परस या छाछ-राबड़ी, मैं सब प्रेम से पाऊँ
म्हारा गिरधर लाल, थारो नचायो नाचूँ रे

जो तू ठोकर मार गिरावे, लकड़ी जो गिर जाऊँ
जो तू माथे ऊपर बिठावे, मैं तो बिना शरमाऊँ
म्हारा गिरधर लाल, थारो नचायो नाचूँ रे

जो तू तन को रोग लगावे, ओढ़ सिर सो जाऊँ
जो तू काल रूप बन आवे, मैं लपक गोद में आऊँ
म्हारा गिरधर लाल, थारो नचायो नाचूँ रे

उलटा-सुलटा जो कछु कर ले, मंगल रूप लखाऊँ
थारी मन-चाही मैं प्यारे, अपनी चाह मिलाऊँ
म्हारा गिरधर लाल, थारो नचायो नाचूँ रे

गोविंद जय जय, गोपाल जय जय
श्री राधा रमण हरि गोविंद जय जय

म्हारा गिरधर लाल, थारो नचायो नाचूँ रे... (भजन समापन)`,
    youtubeUrl: "https://www.youtube.com/watch?v=VgZQXHvTfmU&list=RDVgZQXHvTfmU&start_radio=1",
  },
  {
    id: "jagannath-aarti",
    title: "किशोरी तेरे चरणन की रज पाऊँ",
    category: "Jai Jagannath",
    lyrics: `वृंदावन के वृक्षों को प्रणाम किया करो
किशोरी तेरे चरणन की रज पाऊँ
बैठ रहूँ कुंजन के कोने
श्याम राधिका गाऊँ

रज को ब्रह्मादिक तरसत, सुरज शीश चढ़ाऊँ
हे व्यास स्वामिनी की छवि निरख, विमल विमल यश गाऊँ
किशोरी तेरे चरणन की रज पाऊँ

मुझे दुनिया से नहीं लेना-देना
ये जगत है एक सपना, यहाँ कोई नहीं अपना
मेरी अपनी वृषभानु दुलारी, मेरी अपनी श्री राधा प्यारी
जहाँ विराजे राधा रानी, मेरो मन लगयो बरसाने में

मुझे दुनिया से नहीं कोई काम
मैं तो जपूँ राधा राधा नाम, दर्शन करूँ सुबह-शाम
मेरे मन में बिराजे श्याम दीवानी
जहाँ विराजे राधा रानी, मेरो मन लगयो बरसाने में

जय राधे राधे, जय राधे राधे
वृंदावन वारी श्री राधे राधे, वृषभानु दुलारी जय राधे राधे
श्यामा प्यारी श्री राधे राधे, कीरत सुत प्यारी जय राधे राधे
जय कुंज बिहारी जय राधे राधे

मुझे दुनिया से नहीं कोई काम
मैं तो रटू राधा राधा नाम, दर्शन करूँ सुबह-शाम
मेरे मन में बिराजे श्याम दीवानी
जहाँ बिराजे राधा रानी, मेरो मन लगयो बरसाने में`,
    youtubeUrl: "https://www.youtube.com/watch?v=EeSxroU37-0&list=RDEeSxroU37-0&start_radio=1",
  },
  {
    id: "radha-damodar-1",
    title: "Radha Damodar Ashtakam (verse 1)",
    category: "Radha Damodar Stuti",
    lyrics: `Namami Radha Madana Mohanau Aho
Radha Madana Mohanau…

// TODO(ADD-BHAJAN): replace with the complete verse and translation`,
    youtubeUrl: "",
  },
  {
    id: "sample-noinstrument",
    title: "Sample Nirgun Bhajan (unplugged)",
    category: "Noinstrument",
    lyrics: `// TODO(ADD-BHAJAN): add lyrics for your "noinstrument" collection here`,
    youtubeUrl: "",
  },

  // TODO(ADD-BHAJAN): keep adding objects here, following the shape above.
];
