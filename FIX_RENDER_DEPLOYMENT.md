# 🔧 Fix Render Deployment Error

## ❌ Error: "Permission denied" with nodemon

Render is trying to run `nodemon` instead of the production start command.

## ✅ Solution: Update Render Service Settings

### Step 1: Go to Render Dashboard

1. Go to [render.com](https://render.com)
2. Login to your account
3. Click on your **backend service** (video-conference-backend)

### Step 2: Update Start Command

1. Click **"Settings"** tab (or **"Environment"**)
2. Scroll down to **"Build & Deploy"** section
3. Find **"Start Command"** field
4. **Change it to:**
   ```
   npm start
   ```
   OR
   ```
   node server.js
   ```
5. **DO NOT use:** `nodemon server.js` (this is for development only)

### Step 3: Verify Build Command

Make sure **"Build Command"** is:
```
npm install
```
OR leave it **empty** (Render will auto-detect)

### Step 4: Verify Root Directory

Make sure **"Root Directory"** is:
```
backend
```

### Step 5: Save and Redeploy

1. Click **"Save Changes"**
2. Click **"Manual Deploy"** → **"Deploy latest commit"**
3. Wait for deployment (2-5 minutes)

---

## 📋 Correct Render Settings:

**Service Settings:**
- **Name**: `video-conference-backend`
- **Environment**: `Node`
- **Region**: Your chosen region
- **Branch**: `main` (or your branch)
- **Root Directory**: `backend`
- **Build Command**: `npm install` (or leave empty)
- **Start Command**: `npm start` ✅ (IMPORTANT!)
- **Auto-Deploy**: Yes

**Environment Variables:**
```
PORT=5000
MONGO_URI=mongodb+srv://Video-Conference:YOUR_PASSWORD@cluster0.rg7ajkz.mongodb.net/video-conference-app?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
```

---

## ✅ What Should Happen After Fix:

**Successful deployment logs:**
```
==> Build successful 🎉
==> Deploying...
==> Starting service...
🚀 Server running on port 5000
✅ MongoDB Atlas Connected Successfully
📦 Database: video-conference-app
🌍 Host: cluster0.rg7ajkz.mongodb.net
🔗 Connection Type: Atlas Cloud
```

---

## 🔍 If Still Having Issues:

1. **Check logs** in Render dashboard for specific errors
2. **Verify** environment variables are set correctly
3. **Ensure** MongoDB Atlas password is correct in `MONGO_URI`
4. **Check** Network Access in Atlas allows `0.0.0.0/0`
5. **Verify** `package.json` has correct start script: `"start": "node server.js"`

---

## 📝 Summary:

**The fix:** Change Render's Start Command from `nodemon server.js` to `npm start`

This will use the production start script which runs `node server.js` instead of the development tool `nodemon`.

