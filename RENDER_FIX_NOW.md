# ⚡ QUICK FIX: Render Deployment Error

## 🔴 Current Error:
```
bash: line 1: /opt/render/project/src/node_modules/.bin/nodemon: Permission denied
==> Running 'nodemon server.js'
```

## ✅ IMMEDIATE FIX (2 Minutes):

### Step 1: Go to Render Dashboard
1. Login at https://render.com
2. Click on your **backend service**

### Step 2: Fix Start Command
1. Click **"Settings"** tab
2. Scroll to **"Build & Deploy"** section
3. Find **"Start Command"**
4. **Change from:** `nodemon server.js` (or whatever it says)
5. **Change to:** `npm start`
6. Click **"Save Changes"**

### Step 3: Verify Settings
Make sure these are correct:
- **Root Directory**: `backend`
- **Build Command**: `npm install` (or empty)
- **Start Command**: `npm start` ✅

### Step 4: Redeploy
1. Click **"Manual Deploy"** → **"Deploy latest commit"**
2. Wait 2-5 minutes
3. Check logs - should see success!

---

## ✅ Success Looks Like:

```
==> Build successful 🎉
==> Deploying...
==> Starting service...
🚀 Server running on port 5000
✅ MongoDB Atlas Connected Successfully
```

---

## 📝 Why This Happens:

- `nodemon` is a development tool
- It's in `devDependencies` (not installed in production)
- Production should use `node server.js` (via `npm start`)

**Your `package.json` already has the correct script:**
```json
"start": "node server.js"
```

So `npm start` will work correctly!

---

## 🎯 That's It!

After changing Start Command to `npm start` and redeploying, your service should work!

