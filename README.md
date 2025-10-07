# 🧩 Frontend Task – Next.js

## 🚀 Overview
This project is a **Next.js Frontend Task** implementing a complete **Authentication Flow** integrated with provided APIs.  
It includes Register, Login, and Verify Account pages, and a simple Dashboard showing the logged-in user's name.

---

## 🧠 Features
✅ Register with: Full Name, Email, Password, Phone Number, and Country Code  
✅ Login with Email and Password  
✅ Verify Account using a verification code (default test code: **123456**)  
✅ Token saved in `localStorage` after successful login  
✅ Protected Dashboard displaying: **“Welcome, [User Name]”**  
✅ Integrated with Postman API Collection endpoints

---

## ⚙️ Tech Stack
- **Next.js 15** 
- **Tailwind CSS**
- **Axios** (for API integration)
- **Lucide-react** (icons)
- **daisyUI** (for UI components)
- **LocalStorage** (for token persistence)

---


---

## 🔌 API Integration
All authentication requests are connected to the provided API (via Postman collection).

### Endpoints Used:
- **POST /register** → Register new user  
- **POST /login** → Login user & receive token  
- **POST /verify-account** → Verify user account  

🧾 **Test Verification Code:** `123456`

---

## 🧑‍💻 How to Run Locally
```bash
# 1️⃣ Install dependencies
npm install

# 2️⃣ Run the development server
npm run dev


🌐 Live Demo
https://trendline-mu.vercel.app/