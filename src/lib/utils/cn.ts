// lib/utils.ts

// Utilidad helper que combina clases de Tailwind CSS de forma segura y condicional.
// Combina clases de forma limpia
// Maneja condiciones sin anidamiento complejo
// Resuelve conflictos de clases de Tailwind
// Mejora legibilidad del código
// Es reutilizable en todo el proyecto

export default function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}