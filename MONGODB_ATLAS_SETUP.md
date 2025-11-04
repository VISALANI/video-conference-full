# 🗄️ MongoDB Atlas Setup Guide

## Step-by-Step: Connect Your Backend to MongoDB Atlas

### Step 1: Create MongoDB Atlas Account

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Click **"Try Free"** or **"Sign Up"**
3. Sign up with Google, GitHub, or email

### Step 2: Create a Free Cluster

1. Once logged in, click **"Build a Database"**
2. Choose **"M0 FREE"** tier (Free forever)
3. Select your preferred **Cloud Provider & Region**:
   - Choose closest to your Render region for better performance
   - AWS is recommended
   - Select closest region to where you'll deploy (e.g., `us-east-1`)
4. Click **"Create"**
5. Wait 1-3 minutes for cluster to be created

### Step 3: Create Database User

1. In the **"Security"** section, click **"Database Access"**
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Enter:
   - **Username**: `vidmeet-user` (or your choice)
   - **Password**: Click **"Autogenerate Secure Password"** or create your own
   - **⚠️ SAVE THIS PASSWORD** - you'll need it for connection string
5. Under **"Database User Privileges"**, select **"Atlas admin"** or **"Read and write to any database"**
6. Click **"Add User"**

### Step 4: Configure Network Access (Whitelist IPs)

1. In **"Security"** section, click **"Network Access"**
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for Render deployment)
   - Or add specific IPs:
   - **Render IPs**: `0.0.0.0/0` (allows all IPs)
   - **Your local IP**: For local testing
4. Click **"Confirm"**
5. Wait 30 seconds for changes to apply

### Step 5: Get Your Connection String

1. Go to **"Deployment"** → Click **"Connect"** on your cluster
2. Choose **"Connect your application"**
3. Select:
   - **Driver**: Node.js
   - **Version**: 5.5 or later
4. Copy the connection string (looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. **Replace the placeholders**:
   - Replace `<username>` with your database username (from Step 3)
   - Replace `<password>` with your database password (from Step 3)
   - Replace `<dbname>` with your database name (e.g., `video-conference-app`)

**Final connection string should look like:**
```
mongodb+srv://vidmeet-user:YourPassword123@cluster0.xxxxx.mongodb.net/video-conference-app?retryWrites=true&w=majority
```

### Step 6: Update Your Backend Environment Variables

#### For Local Development (.env file):

Create or update `backend/.env`:
```env
PORT=5000
MONGO_URI=mongodb+srv://vidmeet-user:YourPassword123@cluster0.xxxxx.mongodb.net/video-conference-app?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters-long
NODE_ENV=development
```

#### For Render Deployment:

1. Go to your Render dashboard
2. Select your backend service
3. Go to **"Environment"** tab
4. Add/Update these variables:
   ```
   MONGO_URI=mongodb+srv://vidmeet-user:YourPassword123@cluster0.xxxxx.mongodb.net/video-conference-app?retryWrites=true&w=majority
   JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters-long
   NODE_ENV=production
   PORT=5000
   ```

### Step 7: Test Connection

1. Restart your backend server
2. Check logs for: `✅ MongoDB Atlas Connected Successfully`
3. If you see errors, check:
   - Username/password are correct
   - IP whitelist includes Render/all IPs
   - Connection string format is correct

### Step 8: Verify Connection

1. In MongoDB Atlas dashboard
2. Go to **"Collections"**
3. Click **"Browse Collections"**
4. You should see your database and collections after first use

---

## 🔒 Security Tips

1. **Never commit `.env` file to Git** (already in `.gitignore`)
2. **Use strong passwords** for database user
3. **Restrict IP access** in production (use specific Render IPs if possible)
4. **Rotate passwords** periodically
5. **Use environment variables** in Render, never hardcode

---

## 🐛 Troubleshooting

### Connection Timeout
- Check Network Access settings
- Ensure IP is whitelisted
- Try `0.0.0.0/0` for testing

### Authentication Failed
- Verify username and password
- Check for special characters in password (URL encode if needed)
- Ensure user has proper permissions

### Database Not Found
- MongoDB Atlas creates database on first write
- Just ensure connection string includes database name

### Render Deployment Issues
- Verify `MONGO_URI` in Render environment variables
- Check Render logs for connection errors
- Ensure environment variables are set correctly

---

## ✅ Checklist

- [ ] MongoDB Atlas account created
- [ ] Free cluster created and running
- [ ] Database user created with password
- [ ] Network access configured (IP whitelist)
- [ ] Connection string obtained and formatted correctly
- [ ] Local `.env` file updated
- [ ] Render environment variables set
- [ ] Backend connects successfully
- [ ] Test registration/login works
- [ ] Data appears in Atlas Collections

---

## 📞 Need Help?

- [MongoDB Atlas Documentation](https://www.mongodb.com/docs/atlas/)
- [MongoDB Connection String Guide](https://www.mongodb.com/docs/manual/reference/connection-string/)

