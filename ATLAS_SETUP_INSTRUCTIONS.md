# 🎯 MongoDB Atlas Connection Setup - YOUR CLUSTER

## ✅ Your Connection String Details:
- **Username**: `Video-Conference`
- **Cluster**: `cluster0.rg7ajkz.mongodb.net`
- **Connection String Template**: `mongodb+srv://Video-Conference:<db_password>@cluster0.rg7ajkz.mongodb.net/?appName=Cluster0`

## 📝 Steps to Complete Setup:

### Step 1: Find Your Database Password

1. Go to [MongoDB Atlas Dashboard](https://cloud.mongodb.com)
2. Click **"Security"** → **"Database Access"**
3. Find user **"Video-Conference"**
4. Click the **"..."** menu → **"Edit"** or click on the user
5. If password is hidden, click **"Edit Password"** or check your saved password
6. **Copy your password** (or reset it if you forgot)

### Step 2: Format Connection String

**Your formatted connection string should be:**
```
mongodb+srv://Video-Conference:YOUR_PASSWORD@cluster0.rg7ajkz.mongodb.net/video-conference-app?retryWrites=true&w=majority&appName=Cluster0
```

**Replace `YOUR_PASSWORD` with your actual password from Step 1**

### Step 3: Update .env File

Your `backend/.env` file has been updated with the template. **Now you need to:**

1. Open `backend/.env`
2. Find this line:
   ```
   MONGO_URI=mongodb+srv://Video-Conference:YOUR_PASSWORD_HERE@cluster0.rg7ajkz.mongodb.net/video-conference-app?retryWrites=true&w=majority&appName=Cluster0
   ```
3. Replace `YOUR_PASSWORD_HERE` with your actual password

### Step 4: Handle Special Characters in Password

If your password contains special characters, URL encode them:
- `@` → `%40`
- `#` → `%23`
- `$` → `%24`
- `%` → `%25`
- `&` → `%26`
- `+` → `%2B`
- `=` → `%3D`
- `/` → `%2F`
- `?` → `%3F`

**Example:** If password is `My@Pass#123`, it becomes `My%40Pass%23123`

### Step 5: Verify Network Access

1. Go to MongoDB Atlas → **"Security"** → **"Network Access"**
2. Make sure you have **"0.0.0.0/0"** (Allow Access from Anywhere) added
3. This is required for Render deployment

### Step 6: Test Connection Locally

```bash
cd backend
npm start
```

**Expected Output:**
```
✅ MongoDB Atlas Connected Successfully
📦 Database: video-conference-app
🌍 Host: cluster0.rg7ajkz.mongodb.net
🔗 Connection Type: Atlas Cloud
```

If you see errors, check:
- Password is correct
- Network access is configured
- Connection string format is correct

### Step 7: Use in Render Deployment

When deploying to Render, add this in **Environment Variables**:

```
MONGO_URI=mongodb+srv://Video-Conference:YOUR_PASSWORD@cluster0.rg7ajkz.mongodb.net/video-conference-app?retryWrites=true&w=majority&appName=Cluster0
```

**Again, replace `YOUR_PASSWORD` with your actual password**

---

## ✅ Quick Checklist:

- [ ] Found your database password for user "Video-Conference"
- [ ] Updated `backend/.env` with actual password
- [ ] URL encoded any special characters in password
- [ ] Network Access set to `0.0.0.0/0` in Atlas
- [ ] Tested connection locally - backend connects successfully
- [ ] Ready to add to Render environment variables

---

## 🔒 Security Reminder:

- **Never commit `.env` to Git** ✅ (already protected)
- **Keep your password secure**
- **Use environment variables in Render**, never hardcode

---

## 🎉 You're Ready!

Once you've updated the password in `.env`, your backend will connect to MongoDB Atlas and you can deploy to Render!

