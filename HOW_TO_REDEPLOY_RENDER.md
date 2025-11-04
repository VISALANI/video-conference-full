# 🔄 How to Redeploy on Render

## Quick Steps to Redeploy Your Backend

### Option 1: Manual Redeploy (Recommended)

1. **Go to Render Dashboard**
   - Visit: https://dashboard.render.com
   - Login to your account

2. **Select Your Service**
   - Click on your backend service name (e.g., `video-conference-backend`)
   - You'll see the service details page

3. **Find Manual Deploy**
   - Look for **"Manual Deploy"** button in the top right area
   - OR go to **"Events"** tab → Click **"Manual Deploy"**

4. **Choose Deploy Option**
   - Click **"Manual Deploy"** dropdown
   - Select **"Deploy latest commit"**
   - OR if you just pushed changes, select the latest commit

5. **Wait for Deployment**
   - Render will start building
   - Watch the logs in real-time
   - Usually takes 2-5 minutes

6. **Check Status**
   - Green checkmark ✅ = Success
   - Red X ❌ = Failed (check logs)

---

### Option 2: Push to GitHub (Auto-Deploy)

If you have **Auto-Deploy** enabled:

1. **Make Changes Locally**
   ```bash
   # Make your changes
   git add .
   git commit -m "Fix start command for Render"
   git push origin main
   ```

2. **Render Auto-Deploys**
   - Render detects the push
   - Automatically starts deployment
   - Check dashboard for progress

---

## 📋 Before Redeploying - Make Sure:

### ✅ Step 1: Fix Start Command (If Not Done)
1. Go to **Settings** tab
2. Update **Start Command** to: `npm start`
3. Click **"Save Changes"**

### ✅ Step 2: Check Environment Variables
Go to **Environment** tab, ensure you have:
```
PORT=5000
MONGO_URI=mongodb+srv://Video-Conference:YOUR_PASSWORD@cluster0.rg7ajkz.mongodb.net/video-conference-app?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=your-secret-key-minimum-32-characters
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
```

### ✅ Step 3: Verify Settings
- **Root Directory**: `backend`
- **Build Command**: `npm install` (or empty)
- **Start Command**: `npm start` ✅

---

## 🔍 Monitor Deployment

### Watch Logs in Real-Time:

1. Click on your service
2. Go to **"Logs"** tab
3. Watch deployment progress
4. Look for these success messages:
   ```
   ✅ Build successful
   ✅ Server running on port 5000
   ✅ MongoDB Atlas Connected Successfully
   ```

---

## 🐛 If Deployment Fails:

1. **Check Logs** - Look for red error messages
2. **Common Issues:**
   - Start Command still using `nodemon` → Fix in Settings
   - Missing environment variables → Add in Environment tab
   - MongoDB connection error → Check `MONGO_URI` is correct
   - Build errors → Check package.json and dependencies

3. **Fix and Redeploy Again**
   - Fix the issue
   - Click **"Manual Deploy"** again
   - OR push fix to GitHub (if auto-deploy enabled)

---

## ✅ Success Checklist:

After redeployment, verify:
- [ ] Service status is **"Live"** (green)
- [ ] Logs show "Server running on port 5000"
- [ ] MongoDB connection successful
- [ ] Health check endpoint works: `https://your-backend.onrender.com/`
- [ ] Should see: "✅ VidMeet backend is running successfully!"

---

## 🎯 Quick Reference:

**Render Dashboard Location:**
- Manual Deploy: Service page → Top right or Events tab
- Settings: Service page → Settings tab
- Logs: Service page → Logs tab
- Environment Variables: Service page → Environment tab

**Deployment Time:**
- Usually 2-5 minutes
- First deployment may take longer
- Free tier may have slower builds

---

## 📝 After Successful Deployment:

1. **Copy Your Backend URL** (e.g., `https://video-conference-backend.onrender.com`)
2. **Save it** - You'll need it for frontend deployment
3. **Test the endpoint:**
   - Visit: `https://your-backend.onrender.com/`
   - Should see: "✅ VidMeet backend is running successfully!"

---

**That's it! Your backend should be live! 🎉**

