# Multi-Step Form

Formulario multi-paso interactivo con validación en tiempo real, construido siguiendo las mejores prácticas de React y TypeScript.

## 🚀 Tech Stack

- **React 19** + **TypeScript** - Framework y tipado estático
- **React Hook Form** - Manejo eficiente de formularios
- **Zod** - Validación type-safe de schemas
- **Tailwind CSS 4** - Utility-first CSS
- **Vite** - Build tool rápido

## 📁 Estructura del Proyecto

```
src/
├── features/multi-step-form/
│   ├── components/
│   │   ├── steps/                    # Componentes de cada paso
│   │   │   ├── Step1PersonalInfo.tsx
│   │   │   ├── Step2SelectPlan.tsx
│   │   │   ├── Step3AddOns.tsx
│   │   │   └── Step4Summary.tsx
│   │   ├── StepIndicator.tsx         # Sidebar con indicadores
│   │   ├── StepIndicatorItem.tsx     # Item individual del sidebar
│   │   ├── StepRenderer.tsx          # Renderiza paso actual sin desmontarlo
│   │   ├── StepButton.tsx            # Navegación Next/Back
│   │   ├── StepHeader.tsx            # Título y descripción
│   │   └── SuccessMessage.tsx        # Mensaje de confirmación
│   ├── hooks/
│   │   └── useFormSteps.ts           # Lógica de navegación entre pasos
│   ├── schemas/
│   │   └── formSchema.ts             # Validación Zod por paso
│   ├── types/
│   │   └── form.types.ts             # Interfaces y tipos
│   ├── helpers/
│   │   └── formHelpers.ts            # Funciones de cálculo y búsqueda
│   ├── constants/
│   │   └── valuesSteps.ts            # Planes, add-ons y precios
│   └── MultiStepForm.tsx             # Contenedor principal
├── components/ui/                     # Componentes reutilizables
│   ├── Button.tsx                    # Button con variants
│   └── form/
│       └── ControllerInput.tsx       # Input controlado genérico
└── hooks/
    └── useControllerField.ts         # Hook para campos de formulario
```

## ⚙️ Instalación y Uso

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build producción
npm run build

# Preview del build
npm run preview
```

## 🏗️ Arquitectura y Patrones

### **FormProvider Pattern**
- Una única instancia de `useForm` en `MultiStepForm`
- Compartida mediante `FormProvider` a todos los componentes hijos
- Los steps acceden al formulario con `useFormContext()`
- **Ventaja**: Sin prop drilling, estado centralizado

### **Estado Persistente**
- Los steps **NO se desmontan**, solo se ocultan
- Los datos permanecen aunque cambies de paso
- Validación incremental por paso antes de avanzar

### **Componentes Reutilizables**
- `ControllerInput`: Input genérico con tipos
- `Button`: Variants (primary/secondary)
- `StepHeader`: Título y descripción consistentes
- `useControllerField`: Hook para manejo de campos

### **Validación Type-Safe**
```typescript
// Validación por paso con Zod
const STEP_FIELDS = {
  1: ["personal.name", "personal.email", "personal.phone"],
  2: ["planId", "billing"],
  3: ["addOnIds"],
} as const;
```

## 🎯 Características

- ✅ **4 pasos de navegación** con validación incremental
- ✅ **Estado persistente** entre pasos (FormProvider)
- ✅ **Validación robusta** con Zod schemas
- ✅ **TypeScript strict** con tipos genéricos
- ✅ **Responsive design** (Mobile 375px / Desktop 1440px)
- ✅ **Componentes reutilizables** y modulares
- ✅ **Accesibilidad** (ARIA labels, roles, semántica)
- ✅ **Custom hooks** para lógica reutilizable
- ✅ **Separación de concerns** (helpers, constants, types)

## 📋 Pasos del Formulario

### **Step 1: Personal Info**
- Nombre (min 3 caracteres)
- Email (validación email)
- Teléfono (min 10 dígitos)

### **Step 2: Select Plan**
- 3 planes: Arcade, Advanced, Pro
- Facturación: Mensual / Anual
- Precio dinámico según billing

### **Step 3: Add-ons**
- Online Service
- Larger Storage
- Customizable Profile
- Selección múltiple

### **Step 4: Summary**
- Resumen de plan seleccionado
- Lista de add-ons
- Total calculado
- Opción de editar pasos previos

## 🎨 Diseño y Estilos

- **Mobile First** con breakpoints responsive
- **Tailwind CSS 4** con variables CSS personalizadas
- **Fuente Ubuntu** (400, 500, 700) cargada localmente
- **Paleta de colores** definida en `index.css`
- **Componentes** con estados hover, focus, disabled

## 🔧 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo en http://localhost:5173 |
| `npm run build` | Compilar TypeScript + Build optimizado |
| `npm run lint` | Ejecutar ESLint para verificar código |
| `npm run preview` | Preview del build de producción |

## 📦 Dependencias Principales

```json
{
  "react": "^19.2.0",
  "react-hook-form": "^7.71.1",
  "@hookform/resolvers": "^5.2.2",
  "zod": "^4.3.5",
  "tailwindcss": "^4.1.18"
}
```

## 🧪 Mejores Prácticas Aplicadas

- ✅ Feature-based folder structure
- ✅ Componentes pequeños y enfocados (SRP)
- ✅ Custom hooks para lógica reutilizable
- ✅ Named exports consistentes
- ✅ TypeScript strict mode
- ✅ Separación de tipos Input/Output en schemas
- ✅ Constants extraídas (magic numbers eliminados)
- ✅ Helpers con funciones puras
- ✅ Accesibilidad (WCAG)

---

💡 **Proyecto diseñado para demostrar:** Arquitectura escalable, TypeScript avanzado, React Hook Form + Zod, y componentes reutilizables.