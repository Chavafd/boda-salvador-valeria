# 🎊 Sistema de Invitaciones Personalizadas - Guía de Uso

## 📋 Cómo Funciona

### 1. **Panel de Administración**
Visita: http://localhost:3000/admin

Aquí puedes:
- Ver todos los invitados (100 personas de tu lista)
- Copiar el enlace único de cada invitado
- Descargar la lista completa en CSV
- Filtrar por confirmados/probables
- Buscar invitados específicos

### 2. **Enlaces Personalizados de Ejemplo**

Aquí hay algunos enlaces de prueba que puedes usar:

#### Familia Directa:
- **Mamá**: http://localhost:3000/?invite=eyJjb2RlIjoiVllTLTAwMSIsIm5hbWUiOiJNYW3DoSIsImlkIjoiMDAxIn0=
- **Papá**: http://localhost:3000/?invite=eyJjb2RlIjoiVllTLTAwMiIsIm5hbWUiOiJQYXDDoSIsImlkIjoiMDAyIn0=

#### Amigos:
- **Juan Godina y Maru**: http://localhost:3000/?invite=eyJjb2RlIjoiVllTLTAxMSIsIm5hbWUiOiJKdWFuIEdvZGluYSB5IE1hcnUiLCJpZCI6IjAxMSJ9

### 3. **Flujo del Invitado**

1. El invitado recibe su enlace único por WhatsApp/Email
2. Al hacer clic, ve una bienvenida personalizada con:
   - Su nombre
   - Código único
   - Número de invitados permitidos
3. Llena el formulario Tally (ya existente)
4. Hace clic en "Confirmar Asistencia"
5. Recibe su código QR personal
6. Puede descargar el QR para el día del evento

### 4. **Características del Sistema**

✅ **100% Gratuito** - No requiere base de datos
✅ **Funciona con GitHub Pages** - Se puede desplegar gratis
✅ **QR Codes únicos** - Cada invitado tiene su propio código
✅ **Integrado con Tally** - Usa tu formulario existente
✅ **Seguimiento local** - Guarda confirmaciones en el navegador

## 🚀 Cómo Enviar las Invitaciones

### Opción 1: WhatsApp (Recomendado)
```
¡Hola [Nombre]! 🎊

Valeria y Salvador tienen el honor de invitarte a su boda
📅 4 de Enero, 2025

Tu invitación personal:
[ENLACE_PERSONALIZADO]

Por favor confirma tu asistencia en el enlace.
¡Esperamos celebrar contigo! 💕
```

### Opción 2: Email
Puedes usar el CSV descargado para hacer envíos masivos con servicios como:
- Gmail (con complementos)
- Mailchimp (versión gratuita)
- SendGrid (versión gratuita)

## 📱 Día del Evento

Los invitados mostrarán su código QR en sus teléfonos y podrás:
1. Escanearlos con cualquier app de QR
2. Ver la información del invitado
3. Confirmar su entrada

## 🔧 Personalización Adicional

Si quieres modificar algo:
- **Lista de invitados**: `lib/guest-data.ts`
- **Mensaje de bienvenida**: `components/PersonalizedWelcome.tsx`
- **Panel admin**: `app/admin/page.tsx`

## 📊 Estadísticas Actuales

- **Total de invitados**: 99 personas
- **Confirmados**: ~60 personas
- **Probables**: ~39 personas
- **Capacidad total**: ~110 personas (considerando acompañantes)

## 🎯 Próximos Pasos

1. **Prueba el sistema** con los enlaces de ejemplo
2. **Revisa el panel admin** en /admin
3. **Decide si te gusta** esta versión
4. Si te gusta, podemos:
   - Mejorar el diseño
   - Agregar más funciones
   - Preparar para producción

## 💡 Ventajas de Este Sistema

- **Sin costos mensuales** (no hay base de datos)
- **Cada invitado se siente especial** (mensaje personalizado)
- **Control de acceso** (QR codes únicos)
- **Fácil de gestionar** (panel admin simple)
- **Integrado con tu diseño actual** (mismo estilo)

---

**Nota**: Esta es la rama `feature/personalized-invitations`. Tu sitio principal está seguro en la rama `main`.
