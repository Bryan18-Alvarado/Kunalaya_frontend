<div align="center">
  <img src="./assets/images/kunalaya-logo.png" alt="Kunalaya Logo" width="320" />
</div>

# Kunalaya App

> Aplicación móvil para preservar, compartir y descubrir tradiciones, relatos, saberes y eventos culturales de Nicaragua.

---

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso](#uso)
- [Autores](#autores)

---

## 📝 Descripción

Kunalaya App es una plataforma colaborativa donde los usuarios pueden compartir relatos, registrar lugares históricos, crear eventos y preservar saberes populares de Nicaragua.

## 🚀 Características

- Registro e inicio de sesión de usuarios
- Compartir relatos multimedia (texto, imagen, video, audio)
- Mapa interactivo de lugares culturales
- Juegos de aprendizaje y cultura nacionacional
- Calendario de eventos tradicionales
- Biblioteca de saberes populares
- Filtros y búsqueda avanzada
- Interfaz moderna y responsiva

## 🛠️ Tecnologías

- **Frontend:** Expo React Native (TypeScript)
- **Backend:** Django + Django REST Framework
- **Base de datos:** SQLite (desarrollo), PostgreSQL (producción)
- **Otros:** expo-av, expo-video, react-native-maps, MaterialCommunityIcons

## ⚡ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/Bryan18-Alvarado/Kunalaya_App.git
cd Kunalaya_App/Kunalaya_frontend
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar la app

```bash
npx expo start
```

### 4. Backend (Django)

```bash
cd ../Kunalaya_backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

## 🗂️ Estructura del Proyecto

```text
Kunalaya_App/
├── Kunalaya_frontend/   # Expo React Native app
│   ├── app/             # Vistas y navegación
│   ├── components/      # Componentes reutilizables
│   ├── assets/          # Imágenes y multimedia
│   └── ...              # Configuración y scripts
├── Kunalaya_backend/    # API Django REST
│   ├── app_relatos/     # Relatos y multimedia
│   ├── core/            # Usuarios y autenticación
│   └── ...              # Configuración y migraciones
```

## 📱 Uso

1. Inicia el backend Django (`python manage.py runserver`)
2. Inicia la app Expo (`npx expo start`)
3. Accede desde tu dispositivo móvil o emulador


## 👥 Autores

- Josué Espinoza
- Hadyi Dávila
- Bryan Alvarado
- Nathalie Castillo
- Cristian Monterrey
