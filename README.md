# Once Upon A Time (onceuponatime.pk)
Next.js + TypeScript + Tailwind + Supabase (Database, Auth, Storage) + Vercel.
Hindi step-by-step guide: DEPLOY-GUIDE-HINDI.md

## What is inside
Storefront: home, shop with search/filters, categories, product pages (colours, rental dates and sizes), cart, checkout (COD, JazzCash, Easypaisa), order tracking, accounts (register, login, forgot password, addresses, order history), wishlist, About, Contact, FAQs, Shipping and Returns, Privacy, Terms, sitemap, robots, product structured data.
Admin (/admin): dashboard, homepage slider and collection cards (Homepage Slider), newsletter, orders (status, tracking, notes, payment approve/reject, invoice, CSV), products, categories, image manager, customers, rentals, enquiries, coupons, shipping by city, settings (store, payments, shipping, colours, fonts, homepage text, section order and show/hide, pages and policies), security (change password).
Server side: prices, stock, coupons, shipping, deposits and rental availability are calculated on the server. Orders are written only by the server (service role key). Row Level Security is on for every table.

## Setup
1. supabase.com > New project. SQL Editor > paste supabase/migrations/001_schema.sql > Run.
2. Authentication > Users > Add user (your email and a strong password).
3. SQL Editor: update profiles set is_admin = true where id = (select id from auth.users where email = 'YOUR EMAIL');
4. Authentication settings: set JWT expiry to 604800 so you stay logged in for 7 days.
5. Project Settings > API: copy URL, anon key, service_role key.
6. Local: npm install, copy .env.example to .env.local, fill it, npm run dev. Admin: /admin
7. Vercel: push to GitHub, import the repo, add the same variables, deploy.
8. Domain: Vercel > Settings > Domains > add onceuponatime.pk, then add the DNS records Vercel shows in Hostinger DNS. Wait for the green tick before saying it is live.
9. Admin > Settings: enter your real JazzCash/Easypaisa numbers, WhatsApp, shipping. Admin > Image Manager: upload your pictures. Delete or edit the demo products.

## Optional
Email alerts: create a Resend account, set RESEND_API_KEY, NOTIFY_FROM, ADMIN_EMAIL.
Automatic payments: needs a merchant account with an official gateway. app/api/payments/webhook/route.ts is a signed-webhook template; adapt it to the provider's documentation. Until then payments are verified by you in Admin > Orders.

## Backup
Supabase > Database > Backups, and export tables as CSV regularly. Pictures live in the Storage bucket site-images.

## Homepage redesign
See CHANGES-ROMAN-URDU.md. Run supabase/migrations/002_home_content.sql once (adds new tables only). Slider pictures, headings, buttons and the four collection cards are managed in Admin > Homepage Slider.
