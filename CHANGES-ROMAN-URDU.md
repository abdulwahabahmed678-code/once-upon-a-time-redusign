# Once Upon A Time - Homepage redesign (Roman Urdu guide)

## 1. Kya naya hai
- Naya logo (desktop, mobile, favicon): `public/logo-horizontal.svg`, `public/logo-compact.svg`, `app/icon.svg`, `app/apple-icon.png`.
- Naya header: mobile par Logo, Search, Account, Wishlist, Cart aur Menu sab nazar aate hain. Hamburger menu mein Home, Party Accessories, Costume Rentals, Mascots, Shop All, Wishlist, My Account / Login, Cart, Contact.
- Desktop navigation: Home, Party Accessories, Costume Rentals, Mascots, Shop All + Search, Account, Wishlist, Cart.
- 3-slide hero slider (har 5 second, arrows, 3 dots, mobile swipe). Heading, description aur button alag HTML hain, tasveer ke andar nahi.
- "Shop Our Collections" ke 4 cards, Trust section (4 highlights), Book Now section.
- Footer: purane sab links wahin hain; naya Newsletter box (asli, database mein save hota hai) aur payment methods (sirf wo jo Admin > Settings mein on hain).
- Admin > **Homepage Slider**: slides aur 4 collection cards ki tasveer, text, button, link, order, on/off, preview, Save & Publish.
- Admin > **Newsletter**: jama hui emails ki list.
- Product page ka "Demo product..." message ab sirf un products par aata hai jin par Admin mein "Demo product (sample)" tick hai.

## 2. Database migration (zaroori, sirf ek baar)
1. Supabase kholein > SQL Editor > New query.
2. File `supabase/migrations/002_home_content.sql` ka poora text paste karein > Run.
3. Yeh sirf 3 NAYE tables banati hai (`home_slides`, `home_collections`, `newsletter_subscribers`). Aap ke products, orders, customers, settings ko chhoti nahi. Dobara chalane se bhi koi nuksan nahi.
4. Jab tak migration nahi chalti, website built-in slider dikhati hai aur Admin > Homepage Slider "setup needed" likhta hai.

## 3. Slider ki tasveer kaise badlein (bina code)
1. /admin par login karein > **Homepage Slider**.
2. Slide ke neeche "Replace picture" dabayein, nayi tasveer chunein (JPG/PNG/WebP, 5 MB tak, kam az kam 1400 pixel chauri).
3. Heading, Description, Button text, Button link badlein. Link `/shop` ya `/category/mascots` jaisa ya `https://...` ho.
4. "Text position" se text left/center/right karein. "Phone crop" slider se phone par tasveer ka kaun sa hissa dikhe, wo tay karein. Upar Desktop/Mobile preview se dekh lein.
5. Order badalne ke liye "Earlier / Later", band karne ke liye "Show on website" ka tick hatayein.
6. **Save & Publish slides** dabayein. Homepage par foran nazar aata hai.
Collection cards bhi isi page ke "2. Shop Our Collections" mein isi tarah badalte hain.

Tasveer ke liye behtareen: sirf artwork, **text ke baghair**, 16:9 (jaise 1672x941). Text alag se website likhti hai.

## 4. Abhi temporary tasveerein (aap ki tasveerein chahiye)
- Slide 2 (balloons/cake) aur collection cards "Party Accessories" aur "Shop All" (cake) ki asli tasveerein ab tak nahi mili thin. In ki jagah temporary soft illustrations lagi hain. Admin se apni asli tasveerein upload kar dein.
- Slide 1 aur 3 aur cards "Costume Rentals", "Mascots" aap ki di hui tasveeron se bane hain (slide 1 aur 3 se chhapa hua text mita kar).

## 5. Test kaise karein (live domain par nahi)
1. Naye code ko GitHub ki nayi branch mein daalein (jaise `redesign`). Vercel us branch ka alag Preview link khud bana deta hai.
2. Preview link par dekhein, migration chalayein, Admin mein slider aazmayein.
3. Sab theek ho to hi branch ko main mein merge karein (tab live domain badlega).
