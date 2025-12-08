# 汉字学习 HSK1 - Aprendizaje de Hanzi HSK1

Una aplicación web interactiva y gratuita para aprender los 150 caracteres chinos del nivel HSK1 con pinyin y significados en español.

**🌐 [Probar la aplicación en línea](https://repositorioinformatico.github.io/hsk1-hanzi-learning/)**

---

## 🙏 Créditos y Reconocimiento

> **Proyecto Original**: [jp - 練習平假名](https://github.com/plh97/jp) por [@plh97](https://github.com/plh97)
>
> Este proyecto es una **adaptación** del proyecto original de práctica de Hiragana/Katakana japonés, transformado completamente para el aprendizaje de caracteres chinos (Hanzi) del nivel HSK1.

### 📝 Nota sobre el origen

Este **no es un fork** del proyecto original porque:
- ✅ El proyecto original enseña **alfabetos japoneses** (Hiragana/Katakana)
- ✅ Este proyecto enseña **caracteres chinos** (Hanzi del HSK1)
- ✅ Son **idiomas completamente diferentes** con sistemas de escritura distintos
- ✅ Los **datos y contenido** son totalmente diferentes (141 caracteres HSK1 vs alfabetos japoneses)
- ✅ Se han añadido **características significativas** no presentes en el original

### 🆕 Principales diferencias y mejoras

| Característica | Proyecto Original | Este Proyecto |
|---------------|-------------------|---------------|
| **Idioma objetivo** | Japonés (Hiragana/Katakana) | Chino (Hanzi HSK1) |
| **Sistema de escritura** | Alfabetos silábicos | Caracteres ideográficos |
| **Romanización** | Romaji | Pinyin con tonos obligatorios |
| **Cantidad de caracteres** | ~100 símbolos | 141 caracteres HSK1 |
| **Organización** | Por filas del silabario | Por categorías temáticas |
| **Significados** | No incluidos | Español incluido siempre |
| **Modo Tarjetas** | No disponible | ✅ Con navegación por teclado |
| **Modo Estudio** | No disponible | ✅ Con solución visible |
| **Sistema de ayuda** | No disponible | ✅ Pistas letra por letra |
| **Feedback en tiempo real** | Al finalizar | ✅ Letra por letra mientras escribes |
| **Navegación por teclado** | Limitada | ✅ Espacio, flechas, Shift+Espacio |

**Modificado por**: repositorioinformatico (2025)

---

## 🎯 Características Principales

- **150 caracteres del HSK1** organizados en 4 categorías temáticas
- **Pinyin con tonos obligatorios** para práctica precisa de pronunciación
- **Significados en español** siempre visibles para mejor comprensión
- **Interfaz interactiva** con feedback instantáneo (verde para correcto, rojo para incorrecto)
- **Sistema de puntuación** que rastrea tu progreso en tiempo real
- **Diseño responsive** que funciona en desktop, tablet y móvil
- **Persistencia de progreso** mediante localStorage

## 📚 Organización de Caracteres

La aplicación organiza los caracteres del HSK1 en 4 categorías temáticas:

### 1. 数字与基础 (Números y Básicos) - 34 caracteres
Números (一二三四五六七八九十), medidas (个、本、块), cantidades (多、少、几、些), y adjetivos básicos (大、小、好、高、冷、热).

### 2. 人物与关系 (Personas y Relaciones) - 32 caracteres
Pronombres (我、你、他、她), familia (爸、妈、儿、子), relaciones (朋、友、人), y partículas gramaticales (的、们、和).

### 3. 常用动词 (Verbos Comunes) - 33 caracteres
Verbos esenciales del HSK1: 是、有、在、会、能、想、做、吃、喝、看、来、去、买、住、叫、爱、喜欢、打、工作、开、睡觉, etc.

### 4. 名词与时间 (Sustantivos y Tiempo) - 42 caracteres
Tiempo (天、年、月、日、今、明、昨、上、下), lugares (家、店、国、北京), comida (水、茶、米、饭、菜), y objetos cotidianos (书、车、电影、电视、衣服).

## 🎮 Cómo Usar

1. **Selecciona una categoría** haciendo clic en uno de los 4 tabs en la parte superior
2. **Observa cada tarjeta** que muestra:
   - El carácter hanzi (grande)
   - El significado en español (pequeño, debajo del hanzi)
   - Un campo de entrada para escribir el pinyin
3. **Escribe el pinyin con tono** (ejemplo: `ni3` para 你)
4. **Presiona Enter o haz clic fuera** del campo para verificar tu respuesta
5. **Feedback visual inmediato**:
   - ✅ Verde: respuesta correcta (el pinyin correcto se muestra)
   - ❌ Rojo: respuesta incorrecta (puedes intentar de nuevo)
6. **Navega con el teclado**: Presiona Enter para saltar a la siguiente tarjeta vacía o incorrecta
7. **Reinicia en cualquier momento** con el botón "重置" en la esquina inferior derecha

## 🔤 Sistema de Tonos

La aplicación utiliza **tonos numéricos** para el pinyin:

- **Tono 1**: añade `1` (ejemplo: `ma1` para 妈)
- **Tono 2**: añade `2` (ejemplo: `ren2` para 人)
- **Tono 3**: añade `3` (ejemplo: `wo3` para 我)
- **Tono 4**: añade `4` (ejemplo: `shi4` para 是)
- **Tono neutral**: añade `5` (ejemplo: `de5` para 的)

⚠️ **Importante**: Los tonos son **obligatorios**. Debes incluir el número del tono para que la respuesta sea aceptada.

## 💻 Tecnologías Utilizadas

- **React 18** - Framework de interfaz de usuario
- **Vite** - Build tool y dev server ultra rápido
- **CSS3** - Estilos modernos con variables CSS y animaciones
- **HTML5** - Estructura semántica
- **localStorage** - Persistencia del progreso del usuario

## 🚀 Instalación y Desarrollo

### Requisitos previos
- Node.js 14+ o pnpm

### Pasos para ejecutar localmente

```bash
# Clonar el repositorio
git clone https://github.com/repositorioinformatico/hsk1-hanzi-learning.git
cd hsk1-hanzi-learning

# Instalar dependencias
npm install
# o
pnpm install

# Iniciar servidor de desarrollo
npm run dev
# o
pnpm dev

# Compilar para producción
npm run build
# o
pnpm build

# Previsualizar build de producción
npm run preview
# o
pnpm preview
```

El servidor de desarrollo se ejecutará en `http://localhost:5173` (o el puerto que Vite asigne).

## 📱 Compatibilidad

La aplicación es totalmente responsive y funciona en:
- 💻 Desktop (1024px+)
- 📱 Tablets (768px - 1024px)
- 📱 Móviles (400px - 768px)
- 📱 Móviles pequeños (< 400px)

## 🎨 Características de Diseño

- **Material Design** inspirado en la paleta de colores
- **Animaciones suaves** para feedback visual
- **Tipografía optimizada**: Noto Sans SC para caracteres chinos, Poppins para texto latino
- **Modo de enfoque** con indicadores visuales claros
- **Accesibilidad** con contraste de colores y tamaños de fuente legibles

## 📖 Sobre el HSK1

El **HSK (Hanyu Shuiping Kaoshi)** es el examen estandarizado de competencia en chino mandarín. El **HSK1** es el nivel más básico y requiere:

- Conocimiento de **150 caracteres chinos**
- Vocabulario de **150 palabras**
- Capacidad de entender y usar frases y oraciones simples
- Nivel equivalente a ~2-3 meses de estudio

Esta aplicación cubre los **150 caracteres esenciales** del HSK1, organizados de manera lógica para facilitar el aprendizaje progresivo.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún error o tienes sugerencias de mejora:

1. Reporta issues en GitHub
2. Propón pull requests con mejoras
3. Comparte feedback sobre la experiencia de usuario

## 📝 Licencia

Este proyecto es de código abierto y está disponible gratuitamente para fines educativos.

## 🙏 Agradecimientos

- **[@plh97](https://github.com/plh97)** - Creador del proyecto original [jp - 練習平假名](https://github.com/plh97/jp). Sin su trabajo inicial de aprendizaje de Hiragana/Katakana, este repositorio no existiría o sería totalmente diferente. Toda la estructura, diseño y lógica de la aplicación están basados en su excelente trabajo.
- Datos de caracteres basados en el vocabulario oficial del HSK1
- Tipografía: Google Fonts (Noto Sans SC, Poppins)
- Framework: React y Vite

---

**¡Buena suerte con tu preparación para el HSK1!** 加油！(jiā yóu - ¡ánimo!)

---

## 📄 License

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
