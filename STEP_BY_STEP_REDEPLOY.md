# 📸 Step-by-Step: Redeploy on Render (With Images Guide)

## 🎯 Goal: Fix Start Command and Redeploy

---

## Step 1: Login to Render

1. Go to: https://dashboard.render.com
2. Login with your account

---

## Step 2: Open Your Backend Service

1. Click on **"Services"** in left sidebar (or see service cards on dashboard)
2. Find and click: **"video-conference-backend"** (or your service name)
3. You'll see the service overview page

---

## Step 3: Fix Start Command

1. Click **"Settings"** tab (top of the page)
2. Scroll down to **"Build & Deploy"** section
3. Find **"Start Command"** field
4. **Current (WRONG):** Probably shows `nodemon server.js`
5. **Change to:** `npm start`
6. Scroll down and click **"Save Changes"** button

---

## Step 4: Redeploy

### Method A: Manual Deploy Button (Easiest)

1. Look at top of the page for **"Manual Deploy"** button
   - Usually in top right corner
   - OR in the header area
2. Click **"Manual Deploy"** dropdown
3. Select **"Deploy latest commit"**
4. Confirm if prompted

### Method B: Via Events Tab

1. Click **"Events"** tab (at top of page)
2. Click **"Manual Deploy"** button
3. Select **"Deploy latest commit"**

---

## Step 5: Watch Deployment

1. You'll be redirected to **"Events"** or **"Logs"** tab
2. Watch the deployment progress:
   ```
   ==> Cloning repository...
   ==> Building...
   ==> Installing dependencies...
   ==> Build successful 🎉
   ==> Deploying...
   ==> Starting service...
   ```
3. Wait 2-5 minutes

---

## Step 6: Check Deployment Status

### ✅ Success Indicators:

**Status Badge:**
- Should show **"Live"** (green indicator)

**Logs Should Show:**
```
==> Build successful 🎉
==> Deploying...
==> Starting service...
🚀 Server running on port 5000
✅ MongoDB Atlas Connected Successfully
📦 Database: video-conference-app
```

### ❌ If Failed:

- Status shows **"Build Failed"** or **"Deploy Failed"**
- Check **"Logs"** tab for error messages
- Common errors:
  - Still trying to use `nodemon` → Start Command not saved correctly
  - MongoDB connection error → Check `MONGO_URI` environment variable
  - Missing dependencies → Check build logs

---

## Step 7: Test Your Deployment

1. **Get your backend URL** (shown at top of service page)
   - Format: `https://your-service-name.onrender.com`
2. **Test health endpoint:**
   - Open: `https://your-service-name.onrender.com/`
   - Should see: **"✅ VidMeet backend is running successfully!"**

---

## 🔄 If You Need to Redeploy Again:

After making any changes:
1. Fix the issue (Settings, Environment Variables, etc.)
2. Click **"Manual Deploy"** → **"Deploy latest commit"**
3. Wait for deployment
4. Check logs

---

## ⚡ Quick Action Items:

**Right Now:**
1. ✅ Go to Render Dashboard
2. ✅ Settings → Change Start Command to `npm start`
3. ✅ Save Changes
4. ✅ Manual Deploy → Deploy latest commit
5. ✅ Wait and watch logs
6. ✅ Verify service is "Live"

---

## 📞 Troubleshooting:

**"Still showing permission denied"**
→ Make sure Start Command is exactly `npm start` (not `nodemon`)

**"Build fails"**
→ Check Logs tab for specific error, fix it, redeploy

**"MongoDB connection error"**
→ Check Environment tab → `MONGO_URI` is set correctly

**"Service won't start"**
→ Check Logs tab → Look for error messages → Fix → Redeploy

---

**Follow these steps and your backend will be deployed successfully! 🚀**

