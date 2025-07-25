# SmartSplit - Effortless tracking , fair splitting
SmartSplit is a full-stack expense tracking web app that helps users manage their finances, track daily expenses, split bills with friends, and get AI-powered suggestions to reduce unnecessary spending.
# Link of my website:-
https://smartsplit-ixow.vercel.app/
# Features
1.User can create  groups for roommates, trips, or events to keep expenses organized and fairly splitted.  
2.Our algorithm minimises the number of payments when settling up.  
3.Track spending patterns and discover insights about your shared costs.  
4.Automated reminders for pending debts and insights on spending patterns.  
5.Split equally, by percentage, or by exact amounts to fit any scenario.  
6.See new expenses and repayments the moment your friends add them.  
# Tech stack
Frontend:-Tailwind CSS , ShadCN UI , NextJS  
Backend:-Inngest (event-driven functions)  
Database:-Convex (realtime backend)  
API:- Google Gemini API 
# Getting Started  
Set up your next.js app   
Add shadCN UI to your app  
A Convex project setup (via npx convex dev)  
Setup Inngest for your events  
A Google Gemini API Key (for chatbot)  
# Installation  
git clone https://github.com/your-username/smartsplit.git     
cd smartsplit  
npm install  
Run website:- npm run dev  
Open browser and visit:- http://localhost:3000  
# set up .env file 
CONVEX_DEPLOYMENT=  
NEXT_PUBLIC_CONVEX_URL=  
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=  
CLERK_SECRET_KEY=  
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in  
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up  
CLERK_JWT_ISSUER_DOMAIN=  
RESEND_API_KEY=  
GEMINI_API_KEY=
# Folder highlights
convex/ → Convex database schema & functions  
app/ → Next.js App Router structure  
lib/ → Custom hooks, utilities, and Inngest client  
components/ → Reusable UI (using ShadCN UI & Tailwind)  
inngest/ → Event-driven backend functions  
# Screenshots of my website.
<img width="1894" height="792" alt="image" src="https://github.com/user-attachments/assets/7e981fba-cd51-4af7-b7cf-1a832003a023" />
<img width="1881" height="807" alt="image" src="https://github.com/user-attachments/assets/33208056-ca23-4a54-a356-c1cb324f9237" />
<img width="1881" height="823" alt="image" src="https://github.com/user-attachments/assets/af3ec30d-50fe-4cc4-91cc-49a2dc04dd4b" />
<img width="1854" height="846" alt="image" src="https://github.com/user-attachments/assets/f7fe587a-e983-4256-a1e5-9ae792ccf45e" />  





