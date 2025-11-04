# 🔗 Your MongoDB Atlas Connection String

## 📝 Your Connection String Template:
```
mongodb+srv://Video-Conference:<db_password>@cluster0.rg7ajkz.mongodb.net/?appName=Cluster0
```

## ✅ Formatted Connection String:

Replace `<db_password>` with your actual database password:

**Format:**
```
mongodb+srv://Video-Conference:YOUR_PASSWORD@cluster0.rg7ajkz.mongodb.net/video-conference-app?retryWrites=true&w=majority&appName=Cluster0
```

**Example (with password "MyPass123"):**
```
mongodb+srv://Video-Conference:MyPass123@cluster0.rg7ajkz.mongodb.net/video-conference-app?retryWrites=true&w=majority&appName=Cluster0
```

## ⚠️ Important Notes:

1. **Replace `<db_password>`** with your actual password from MongoDB Atlas
2. **Add database name**: `/video-conference-app` (add before the `?`)
3. **If password has special characters**, URL encode them:
   - `@` → `%40`
   - `#` → `%23`
   - `$` → `%24`
   - `%` → `%25`
   - `&` → `%26`
   - `+` → `%2B`
   - `=` → `%3D`

## 📋 Where to Use This:

### Local Development (backend/.env):
```env
MONGO_URI=mongodb+srv://Video-Conference:YOUR_PASSWORD@cluster0.rg7ajkz.mongodb.net/video-conference-app?retryWrites=true&w=majority&appName=Cluster0
```

### Render Deployment (Environment Variables):
```
MONGO_URI=mongodb+srv://Video-Conference:YOUR_PASSWORD@cluster0.rg7ajkz.mongodb.net/video-conference-app?retryWrites=true&w=majority&appName=Cluster0
```

## 🧪 Test Connection:

1. Replace `YOUR_PASSWORD` with your actual password
2. Update `backend/.env` file
3. Start backend: `npm start`
4. Should see: `✅ MongoDB Atlas Connected Successfully`

