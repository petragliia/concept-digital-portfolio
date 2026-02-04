# Design Commitment: Concept Booking

**Role:** Senior Frontend Architect (`frontend-specialist`)
**Date:** 2026-02-03
**Update:** Switched to **Cosmic Glass** (User Request)

## 🎨 DESIGN COMMITMENT (COSMIC GLASS)

*   **Style:** **Cosmic Glass / High-End Dark Mode**
    *   *Concept:* Interfaces that feel like they are floating in space. Deep depth, translucency, and light interactions.
*   **Palette:** **Deep Space Navy & Starlight Gold**
    *   **Background:** Very Dark Navy (`#020617` - Slate 950).
    *   **Surface:** Translucent White (`bg-white/5`) with `backdrop-blur-xl`.
    *   **Border:** Subtle White (`border-white/10`).
    *   **Text:** White (Primary) & Gold (Accent).
*   **Effects:**
    *   **Glows:** `shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)]` (Gold Glow).
    *   **Glass:** `backdrop-blur` is key.
*   **Geometry:**
    *   **Radius:** `rounded-2xl` or `3xl` (Retained from Soft style, fits glass well).

## 🚫 EXPLICITLY BANNED
1.  **Solid White Backgrounds** on cards (unless active state demands high contrast).
2.  **Flat Colors**: Everything must have depth or transparency.
3.  **Standard Greys**: Use `slate-400` or `indigo-200` for muted text, never pure grey.

---
**Approved by User:** Yes (Option 1 Selected)
