# ⚡ Quick Fix: Update Your Password

## 🔴 Current Issue:
Your `.env` file has: `YOUR_PASSWORD_HERE` as placeholder - this is why authentication is failing!

## ✅ Solution: Get Your Real Password

### Method 1: Check Your Saved Password
1. Check where you saved your MongoDB Atlas password when you created it
2. Check password managers, notes, or wherever you stored it

### Method 2: Reset Password in Atlas (Recommended)

1. **Go to MongoDB Atlas**: https://cloud.mongodb.com
2. **Login** to your account
3. Click **"Security"** (left sidebar)
4. Click **"Database Access"**
5. Find user **"Video-Conference"**
6. Click the **"..."** (three dots) → **"Edit"**
7. Click **"Edit Password"**
8. Choose one:
   - **Option A**: Click **"Autogenerate Secure Password"** → **Copy it immediately!**
   - **Option B**: Create your own password (remember it!)
9. Click **"Update User"**

### Method 3: Create New User (If you can't find password)

1. In **"Database Access"**, click **"Add New Database User"**
2. **Authentication**: Password
3. **Username**: `VideoConference` (without hyphen, simpler)
4. **Password**: Create a simple one like `VideoConf2024!` (remember it!)
5. **Privileges**: Atlas admin
6. Click **"Add User"**
7. Use this username in connection string instead

---

## 📝 Update Your .env File

### Option 1: Simple Password (No Special Characters)

If password is: `VideoConf2024`

**Update `.env`:**
```env
MONGO_URI=mongodb+srv://Video-Conference:VideoConf2024@cluster0.rg7ajkz.mongodb.net/video-conference-app?retryWrites=true&w=majority&appName=Cluster0
```

### Option 2: Password With Special Characters

If password is: `My@Pass#123`

**URL encode it:**
- `@` → `%40`
- `#` → `%23`

**Update `.env`:**
```env
MONGO_URI=mongodb+srv://Video-Conference:My%40Pass%23123@cluster0.rg7ajkz.mongodb.net/video-conference-app?retryWrites=true&w=majority&appName=Cluster0
```

---

## 🔧 Step-by-Step Fix:

1. **Get/Reset password** from Atlas (Method 2 above)
2. **Open** `backend/.env` file
3. **Find** this line:
   ```
   MONGO_URI=mongodb+srv://Video-Conference:YOUR_PASSWORD_HERE@cluster0.rg7ajkz.mongodb.net/video-conference-app?retryWrites=true&w=majority&appName=Cluster0
   ```
4. **Replace** `YOUR_PASSWORD_HERE` with your actual password
5. **Save** the file
6. **Test** with: `npm start`

---

## ✅ Example .env File (After Fix):

```env
PORT=5000
MONGO_URI=mongodb+srv://Video-Conference:YourActualPassword123@cluster0.rg7ajkz.mongodb.net/video-conference-app?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=mysecret123
NODE_ENV=development
```

**Replace `YourActualPassword123` with your real password!**

---

## 🧪 Test After Update:

```bash
cd backend
npm start
```

**Success looks like:**
```
✅ MongoDB Atlas Connected Successfully
📦 Database: video-conference-app
🌍 Host: cluster0.rg7ajkz.mongodb.net
🔗 Connection Type: Atlas Cloud
```

---

## ⚠️ Still Not Working?

1. **Verify username** in Atlas matches exactly: `Video-Conference`
2. **Check Network Access** - must have `0.0.0.0/0`
3. **Try resetting password** to something simple like: `Test1234`
4. **Check for typos** - no extra spaces
5. **URL encode** any special characters

---

## 🎯 Recommended: Use Simple Password

For easiest setup, reset password to:
- `VideoConf123` (letters + numbers only, no encoding needed)

Then your connection string:
```
MONGO_URI=mongodb+srv://Video-Conference:VideoConf123@cluster0.rg7ajkz.mongodb.net/video-conference-app?retryWrites=true&w=majority&appName=Cluster0
```

