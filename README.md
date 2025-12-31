# 🧟‍♂️ zombie-city  
### A Browser-Based 3D Zombie Survival Game

> **zombie-city** is a fast-paced zombie survival game built for the web.  
> No downloads. No installs. Just pure survival.

-🎮 **Play now:** [https://unrivaled-gumption-60d183.netlify.app/]


<p align="center">
  <img src="public/zombie.gif" alt="Zombie City Gameplay" width="80%" />
</p>


---

## 🎮 Features

- **Immersive 3D Graphics**: Real-time rendering with realistic physics simulation
- **Wave-Based Gameplay**: Progressive difficulty with increasing zombie spawns
- **Physics-Based Combat**: Realistic bullet physics and zombie physics interactions
- **Leaderboard System**: Track top scores globally with Convex backend
- **Responsive UI**: Dynamic HUD with health bars, ammo counter, and wave counter
- **Crosshair System**: Precise aiming mechanics for combat
- **Score Tracking**: Detailed game statistics saved to database

---

## 🛠️ Technology Stack

### **Frontend**

- **HTML5**: Semantic markup and structure
- **JavaScript/TypeScript**: Dynamic game logic and interactivity
- **CSS3**: Responsive styling with viewport scaling and animations

### **3D Graphics & Physics**

- **Three.js** - Open-source JavaScript 3D library for rendering
  - 3D model loading and rendering
  - Camera controls and first-person perspective
  - Lighting and material systems
  - Scene management

- **Cannon-ES** - JavaScript physics engine
  - Rigid body dynamics
  - Collision detection
  - Physics-based zombie and bullet behavior
  - Realistic gravity and velocity calculations

### **Backend & Database**

- **Convex** - Modern backend platform for real-time data
  - Real-time database (serverless)
  - Mutations for saving game statistics
  - Queries for retrieving top scores
  - Automatic API generation
  - Built-in security and authentication support

### **Build & Deployment**

- **Node.js**: JavaScript runtime
- **TypeScript**: Type-safe JavaScript for robust code
- **Vercel**: Deployment platform (configured in `vercel.json`)
- **npm**: Package management

---

## 🖼️ Game Preview

<p align="center">
  <img src="public/screenshot.png" alt="Zombie City Gameplay 1" width="45%" />
  <img src="public/screenshot1.png" alt="Zombie City Gameplay 2" width="45%" />
</p>


> _Real-time gameplay, boss waves, physics, and an immersive FPS experience — all inside the browser._

---

## 📊 Project Structure

```
zombie-city-game/
├── index.html              # Main HTML file with full UI and styling
├── package.json            # Project dependencies and scripts
├── vercel.json             # Vercel deployment configuration
├── convex/                 # Backend database functions
│   ├── schema.ts           # Database schema definition
│   ├── gameStats.ts        # Game statistics mutations & queries
│   └── _generated/         # Auto-generated Convex API files
├── README.md              # This file
└── node_modules/          # Project dependencies
```

---

## 📦 Dependencies

| Package        | Version | Purpose                                        |
| -------------- | ------- | ---------------------------------------------- |
| **convex**     | latest  | Backend database and real-time synchronization |
| **three**      | latest  | 3D graphics rendering engine                   |
| **cannon-es**  | latest  | Physics simulation engine                      |
| **typescript** | latest  | Type checking for JavaScript (dev only)        |

---

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Hanumatrix/zombie-city-game.git
   cd zombie-city-game
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up Convex backend**

   ```bash
   convex auth
   
   ```
   Follow the prompts to connect your Convex project.

4. **Start the development server**

   ```bash
   npm run dev
   ```

   This will start the Convex backend and your local development server.

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 🎯 How to Play

1. **Launch the Game**: Open the web application in your browser
2. **Enter Username**: Provide your name for the leaderboard
3. **Combat Controls**:
   - **Mouse**: Look around and aim
   - **WASD**: Move forward, left, backward, right
   - **Click**: Shoot
   - **P**: Pause the game 
4. **Survive**: Defeat waves of zombies and rack up kills
5. **Leaderboard**: Your final stats are saved to the global leaderboard

---

## 🎓 Learning Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [Cannon-ES Physics Engine](https://cannon.js.org/)
- [Convex Database Docs](https://docs.convex.dev/)
- [WebGL Best Practices](https://www.khronos.org/webgl/)

---
<p align="center">
  <img src="public/pika.gif" alt="Zombie City Gameplay" width="80%" />
</p>
<p align= "center">
**Happy Gaming! 🚀**
</p>



