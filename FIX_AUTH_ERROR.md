# 🔧 Fix MongoDB Atlas Authentication Error

## ❌ Error: "bad auth : authentication failed"

This means your username or password is incorrect in the connection string.

## 🔍 Troubleshooting Steps:

### Step 1: Verify Username in Atlas

1. Go to [MongoDB Atlas Dashboard](https://cloud.mongodb.com)
2. Click **"Security"** → **"Database Access"**
3. Check your username:
   - Should be: `Video-Conference`
   - Make sure it matches exactly (case-sensitive)

### Step 2: Reset or Verify Password

**Option A: Reset Password (Recommended if you forgot it)**
1. In **"Database Access"**, find user **"Video-Conference"**
2. Click the **"..."** menu → **"Edit"**
3. Click **"Edit Password"**
4. Enter a new password (or use autogenerate)
5. **Save the password immediately!**
6. Click **"Update User"**

**Option B: If you know the password**
1. Make sure there are no extra spaces
2. Check if password has special characters that need encoding

### Step 3: URL Encode Special Characters

If your password contains special characters, you MUST encode them:

**Special Characters Mapping:**
- `@` → `%40`
- `#` → `%23`
- `$` → `%24`
- `%` → `%25`
- `&` → `%26`
- `+` → `%2B`
- `=` → `%3D`
- `/` → `%2F`
- `?` → `%3F`
- ` ` (space) → `%20`

**Example:**
- Password: `My@Pass#123`
- Encoded: `My%40Pass%23123`

### Step 4: Update .env File

**Format:**
```env
MONGO_URI=mongodb+srv://Video-Conference:YOUR_PASSWORD@cluster0.rg7ajkz.mongodb.net/video-conference-app?retryWrites=true&w=majority&appName=Cluster0
```

**Important:**
- No spaces around `:`
- No spaces around `@`
- Password should be URL-encoded if it has special chars
- Database name (`video-conference-app`) must be before the `?`

### Step 5: Test Connection

```bash
cd backend
npm start
```

Should see:
```
✅ MongoDB Atlas Connected Successfully
```

---

## 🎯 Quick Fix Options:

### Option 1: Reset Password to Simple One (Easiest)

1. In Atlas, reset password to something simple like: `VideoConf123!`
2. URL encode if needed: If you use `!`, keep it as is (usually works)
3. Update `.env`:
   ```
   MONGO_URI=mongodb+srv://Video-Conference:VideoConf123!@cluster0.rg7ajkz.mongodb.net/video-conference-app?retryWrites=true&w=majority&appName=Cluster0
   ```

### Option 2: Use Password Without Special Characters

Reset to password with only letters and numbers (no encoding needed):
- Example: `VideoConference2024`

---

## ✅ Verification Checklist:

- [ ] Username is exactly: `Video-Conference` (case-sensitive)
- [ ] Password is correct (try resetting it)
- [ ] Password is URL-encoded if it has special characters
- [ ] No extra spaces in connection string
- [ ] Database name `/video-conference-app` is included
- [ ] Network Access allows `0.0.0.0/0`

---

## 🔗 Test Connection String Format:

Your connection string should look like:
```
mongodb+srv://Video-Conference:SimplePass123@cluster0.rg7ajkz.mongodb.net/video-conference-app?retryWrites=true&w=majority&appName=Cluster0
```

**No spaces, no quotes, just the string exactly as shown above.**

