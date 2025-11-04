# 🎥 Video Conference App

A real-time video conferencing application built with React, Node.js, Socket.io, and WebRTC.

## 🚀 Features

- ✅ User Authentication (Login/Register)
- ✅ Real-time Video Conferencing
- ✅ Multi-user Support
- ✅ Screen Sharing
- ✅ Chat Messaging
- ✅ Audio/Video Controls
- ✅ Modern Animated UI

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (Local or Atlas)
- npm or yarn

## 🛠️ Installation

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env  # Create .env file
# Edit .env with your MongoDB URI
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## 📦 Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

### Quick Deploy:

1. **Backend → Render.com**
   - Connect GitHub repo
   - Set root directory to `backend`
   - Add environment variables

2. **Frontend → Vercel.com**
   - Connect GitHub repo
   - Set root directory to `frontend`
   - Add environment variables:
     - `VITE_API_URL`
     - `VITE_SOCKET_URL`

## 🔧 Environment Variables

### Backend (.env)
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/video-conference-app
JWT_SECRET=your-secret-key
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

## 📝 License

ISC

