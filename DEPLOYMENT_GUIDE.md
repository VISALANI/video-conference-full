# 🚀 Deployment Guide: Video Conference App

## Deployment Order
**Deploy BACKEND first, then FRONTEND** (because frontend needs backend URL)

---

## 📦 Part 1: Deploy Backend to Render

### Step 1: Prepare Backend for Deployment

1. **Ensure you have a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

### Step 2: Create Render Account & Web Service

1. Go to [render.com](https://render.com) and sign up/login
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Select your repository

### Step 3: Configure Backend on Render

**Settings:**
- **Name**: `video-conference-backend` (or your choice)
- **Region**: Choose closest to your users
- **Branch**: `main` (or your default branch)
- **Root Directory**: `backend` ⚠️ **CRITICAL: Must be `backend`**
- **Runtime**: `Node`
- **Build Command**: `npm install` (or leave empty - Render will auto-detect)
- **Start Command**: `npm start` ⚠️ **MUST be `npm start`, NOT `nodemon server.js`**
- **Instance Type**: Free tier is fine to start

**⚠️ IMPORTANT:** 
- Start Command must be `npm start` (runs `node server.js`)
- Do NOT use `nodemon server.js` (development only, causes permission errors)

**Environment Variables (Add these in Render dashboard):**
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/video-conference-app
JWT_SECRET=your-super-secret-jwt-key-change-this
NODE_ENV=production
```

**Important:** Use MongoDB Atlas (Cloud) - Required for Render Deployment
- See **`ATLAS_QUICK_SETUP.md`** for step-by-step Atlas setup
- Or follow detailed guide in **`MONGODB_ATLAS_SETUP.md`**
- After setting up Atlas, use the connection string format:
  ```
  mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/video-conference-app?retryWrites=true&w=majority
  ```

### Step 4: Deploy Backend

1. Click **"Create Web Service"**
2. Wait for deployment (usually 2-5 minutes)
3. Copy your backend URL (e.g., `https://video-conference-backend.onrender.com`)
4. **Save this URL** - you'll need it for frontend!

### Step 5: Update CORS in Backend (If needed)

If you get CORS errors, update `backend/server.js` CORS settings to include your frontend URL.

---

## 🌐 Part 2: Deploy Frontend to Vercel

### Step 1: Prepare Frontend for Deployment

Ensure your code is pushed to GitHub (same repository is fine).

### Step 2: Create Vercel Account

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Import your GitHub repository

### Step 3: Configure Frontend on Vercel

**Settings:**
- **Framework Preset**: Vite
- **Root Directory**: `frontend`
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `dist` (auto-detected)

**Environment Variables (Add these in Vercel dashboard):**
```
VITE_API_URL=https://your-backend-url.onrender.com/api
VITE_SOCKET_URL=https://your-backend-url.onrender.com
```

**Replace `your-backend-url.onrender.com` with your actual Render backend URL!**

### Step 4: Deploy Frontend

1. Click **"Deploy"**
2. Wait for build (usually 1-3 minutes)
3. Your app will be live at `https://your-project.vercel.app`

---

## ✅ Post-Deployment Checklist

### Backend (Render)
- [ ] Backend is accessible at Render URL
- [ ] Health check endpoint works: `https://your-backend.onrender.com/`
- [ ] MongoDB connection is working
- [ ] CORS allows your Vercel frontend URL

### Frontend (Vercel)
- [ ] Frontend is accessible at Vercel URL
- [ ] Environment variables are set correctly
- [ ] Can connect to backend API
- [ ] Socket.io connection works

---

## 🔧 Troubleshooting

### Backend Issues:
- **Build fails**: Check Node version in `package.json` or Render settings
- **MongoDB connection error**: Verify `MONGO_URI` is correct
- **CORS errors**: Update allowed origins in `server.js`

### Frontend Issues:
- **API errors**: Check `VITE_API_URL` environment variable
- **Socket connection fails**: Check `VITE_SOCKET_URL` environment variable
- **Build fails**: Check for hardcoded localhost URLs

### Common Fixes:
1. Clear Vercel/Render cache and redeploy
2. Verify all environment variables are set
3. Check browser console for specific errors
4. Ensure backend is running before testing frontend

---

## 📝 Notes

- Render free tier services **sleep after 15 minutes** of inactivity
- First request after sleep may take 30-60 seconds
- Consider upgrading for production use
- Always test in production after deployment!

---

## 🔗 Quick Links

- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Setup](https://www.mongodb.com/docs/atlas/getting-started/)

