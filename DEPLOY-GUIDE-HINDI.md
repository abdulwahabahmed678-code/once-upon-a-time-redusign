# वेबसाइट को लाइव करने की गाइड (हिंदी)

ज़रूरी: कोई पासवर्ड या secret key किसी को चैट में न भेजें।

## 1. Supabase (डेटाबेस)
1. supabase.com पर मुफ़्त अकाउंट बनाएँ और New project बनाएँ।
2. बाएँ मेन्यू में SQL Editor खोलें। इस प्रोजेक्ट की फ़ाइल supabase/migrations/001_schema.sql की पूरी लिखावट कॉपी करके पेस्ट करें और Run दबाएँ।
3. Authentication > Users > Add user: अपना ईमेल और मज़बूत पासवर्ड डालें।
4. SQL Editor में यह चलाएँ (ईमेल अपना डालें): update profiles set is_admin = true where id = (select id from auth.users where email = 'आपका ईमेल');
5. Authentication के सेटिंग्स में JWT expiry 604800 कर दें।
6. Project Settings > API से तीन चीज़ें कॉपी करें: Project URL, anon key, service_role key (service_role सबसे गुप्त है)।

## 2. GitHub और Vercel
1. github.com पर अकाउंट बनाएँ, नई private repository बनाएँ और प्रोजेक्ट की फ़ाइलें अपलोड करें (ज़िप खोलकर)।
2. vercel.com पर GitHub से लॉगिन करें, Add New > Project, अपनी repository चुनें।
3. Environment Variables में .env.example वाले नाम डालें: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY, NEXT_PUBLIC_SITE_URL (https://onceuponatime.pk)।
4. Deploy दबाएँ। कुछ मिनट में एक अस्थायी लिंक मिलेगा।

## 3. डोमेन (Hostinger)
1. Vercel में प्रोजेक्ट > Settings > Domains > onceuponatime.pk जोड़ें।
2. Vercel जो DNS records दिखाए (A record और CNAME), उन्हें Hostinger > Domains > DNS में जोड़ें।
3. जब Vercel में हरा निशान आ जाए, तभी वेबसाइट लाइव मानें। इसमें कुछ घंटे लग सकते हैं।

## 4. पहली बार का काम
1. onceuponatime.pk/admin खोलें और लॉगिन करें।
2. Settings में अपने असली JazzCash/Easypaisa नंबर, WhatsApp नंबर और शिपिंग भरें।
3. Image Manager में अपनी तस्वीरें अपलोड करें।
4. Products में डेमो प्रोडक्ट बदलें या हटाएँ, और अपने असली प्रोडक्ट जोड़ें।
5. Settings > Pages में About, Privacy, Terms और Returns का अपना टेक्स्ट लिखें (कानूनी टेक्स्ट आप खुद जाँचें)।
6. एक टेस्ट ऑर्डर दें (COD) और Admin > Orders में देखें कि दिख रहा है।

## 5. बैकअप
Supabase > Database > Backups देखें, और हर कुछ दिन Table Editor से CSV निकाल लें।
