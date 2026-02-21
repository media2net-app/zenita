# Zenita – Structured Dashboard Spec (MyManifest = Zenita)

> **Note:** The product was originally described as "MyManifest"; in this project it is **Zenita** (Zenita.app). This document is the single source of truth for the full dashboard structure.

---

## MAIN DASHBOARD OVERVIEW

### Header Area
- Profile Avatar
- User Name
- Daily Status Indicator (Green / Yellow / Red)
- Quick AI Button
- Notifications
- Devices Connected Indicator

---

## MYMANIFEST CORE (Zenita Core)
*Central identity & direction module*

**Subsections:**
- Vision & Life Direction
- Core Values
- Long-Term Objectives
- Identity Statement
- Weekly Alignment Score
- Life Balance Overview

---

## AGENDA & DAILY CHALLENGES
*Habit tracking + corrective behavioral system*

**Subsections:**
- Today’s Schedule
- Smart Challenges (Health / Finance / Movement / Nutrition / Focus)
- Alcohol Monitoring (Glasses counter + type selection)
- Sleep Tracking
- Financial Discipline Tracker
- Movement & Training
- Daily Reflection Summary

**AI System:**
- Detects imbalance
- Suggests corrective micro-actions
- Weekly behavioral analysis

---

## MYMANIFEST SOUL (Zenita Soul)
*Interfaith-neutral inner balance module*

**Subsections:**
- Reflection & Meditation
- Gratitude Journal
- Emotional State Tracker
- Personal Growth Notes
- Inner Alignment Index

---

## JURIDICAL ASSISTANT (Legal)
*AI-powered legal organization module*

**Subsections:**
- Fine Scanner (Photo upload: ticket + envelope date)
- AI Contestation Generator
- Legal Document Builder
- Step-by-step Court Guide
- Stamp Tax Payment Guidance
- Authority Interaction Assistant
- Legal Deadline Tracker

---

## AI MENTOR (Integrated AI Coach + AI Advisor)

**Subsections:**
- Life Strategy Coaching
- Financial Guidance
- Behavioral Analysis
- Decision Simulator
- Crisis Mode
- Long-Term Optimization

**System Features:**
- Context-aware responses
- Pattern recognition
- Personalized evolution roadmap

---

## DEVICES ECOSYSTEM

**Connected Devices:**
- Smart Watch (e.g. Apple Watch / Samsung Galaxy Watch)
- Smart Glasses
- Smart Scale (body composition sync)
- Smart Urine Analyzer (health markers)
- Telemedicine Camera
- Blood Pressure Monitor
- Pulse & Oxygen Sensor
- Sleep Monitor
- Smart Hydration Bottle

**System Features:**
- Automatic data sync
- AI health correlation engine
- Predictive health alerts
- Lifestyle deviation detection

---

## RIGHT SIDE PANEL (Global Widgets)
- Daily Score
- Weekly Financial Health
- Sleep Quality
- Alcohol Intake
- Hydration Level
- Focus Score
- Legal Alerts
- Device Status

---

## BOTTOM SECTION
- AI Insights Summary
- Recommended Actions
- Upcoming Deadlines
- Progress Graph

---

## Current Zenita vs Spec (mapping)

| Spec module              | Zenita route        | Status / notes                                      |
|-------------------------|---------------------|-----------------------------------------------------|
| Main dashboard overview  | `/dashboard`        | ✅ Stats, today, devices, quick actions + **right-side widgets** |
| MYMANIFEST CORE         | `/dashboard/core`   | ✅ **Added:** Vision, Values, Objectives, Identity, Alignment, Life Balance |
| Agenda & Daily Challenges| `/dashboard/agenda` | Partial: events; add challenges, alcohol, sleep, etc. |
| Soul                    | `/dashboard/soul`   | Partial: reflections, streaks; add journal, index   |
| Juridical Assistant     | `/dashboard/legal`  | Partial: docs, reminders; add scanner, AI tools     |
| AI Mentor               | `/dashboard/mentor` | Partial: session, goals; expand to full coach      |
| Devices                 | `/dashboard/devices`| Partial: list; add sync, alerts, more device types  |
| Documents               | `/dashboard/documents` | Present: folders, upload, detail                 |
| Financial               | `/dashboard/financial` | Partial: balance, transactions, budgets          |
| Health                  | `/dashboard/health` | Partial: metrics, steps, add measurement           |
| Right side panel        | `/dashboard` (lg+)  | ✅ **Added:** Daily Score, Financial Health, Sleep, Alcohol, Hydration, Focus, Legal Alerts, Device Status |
| Bottom section          | —                   | **Missing:** AI summary, actions, deadlines, graph  |
| Marketplace             | `/dashboard/marketplace` | Present: categories, items (spec not in doc)   |
| Timeline                | `/dashboard/timeline`   | Present: event list                             |
| Settings                | `/dashboard/settings`  | Present: profile, notifications, preferences    |

This structure keeps Zenita clean, modular, scalable, and ready for future expansion.
