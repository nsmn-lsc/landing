# GourmetLab - Portal de Recetas de Alta Cocina

Este proyecto es un sitio web de recetas de cocina diseñado bajo estándares estéticos premium, utilizando HTML5 semántico, CSS3 personalizado (con temas adaptados estilo café/bistro en claro/oscuro) y JavaScript para interactividad avanzada.

## 📂 Estructura del Proyecto

```
landing/
│
├── index.html            # Estructura semántica, categorías culinarias y meta-tags.
├── style.css             # Estilo Gourmet: paleta terracota/oro, tipografía serif y modo claro/oscuro.
├── app.js                # Interactividad de menú, scroll spy de categorías y validación de club culinario.
├── recipe_hero.png       # Imagen gourmet premium en alta resolución para el Hero.
└── README.md             # Documentación detallada del proyecto (este archivo).
```

---

## 🛠️ Explicación del Código y Categorías

### 1. `index.html` (Estructura y Categorías Culinarias)
El sitio web está dividido en secciones específicas para cada comida del día:
- **Categorías de Navegación**:
  - `Desayuno`: Recetas matutinas y energéticas como *Tostada de Aguacate con Huevo Poché*.
  - `Comida`: Platos fuertes reconfortantes como *Risotto al Pesto* y *Salmón Glaseado*.
  - `Cena`: Alternativas ligeras y elegantes como *Pechuga de Pato con Puré de Camote*.
  - `Postres`: Finales dulces irresistibles como *Fondant de Chocolate*.
- **Estructura Semántica**: Cada receta se presenta como un `<article>` independiente con metadatos de accesibilidad, iconos emoji culinarios de alta fidelidad, tiempos de preparación y niveles de dificultad.

### 2. `style.css` (Paleta Culinaria Premium)
Se rediseñó la hoja de estilos para evocar un ambiente gastronómico sofisticado:
- **Tipografía Híbrida**: Se integra la tipografía Serif `Playfair Display` para los títulos principales (dando un aire editorial de revista de cocina) combinada con `Plus Jakarta Sans` para textos legibles de recetas.
- **Paleta Gourmet Terracota/Oro**:
  - Oscuro (Predeterminado): Tonos de chocolate profundo y carbón cálido (`#12100e`) con acentos de terracota brillante (`#e06a3b`) y oro miel (`#d99b26`).
  - Claro: Tonos de crema de leche e marfil cálido (`#fcfbf7`) que simulan el menú de un restaurante bistró físico.

### 3. `app.js` (Interacciones del Portal)
- **Control de Temas**: Almacena si el usuario prefiere el estilo bistró claro u oscuro usando `localStorage`.
- **Validación del Club Culinario**: Valida que el nombre, correo y preferencias gastronómicas en el formulario estén correctos antes de confirmar la suscripción al boletín con una notificación flotante flotante.
- **Scroll Spy Automatizado**: A medida que el usuario se desplaza leyendo las recetas, la barra de navegación superior resalta de manera inteligente la categoría activa (Desayuno, Comida, Cena, Postres).

---

## 🚀 Cómo Ejecutar el Proyecto

1. Simplemente haz doble clic en el archivo [index.html](file:///home/doku/Projects/landing/index.html) para visualizarlo en cualquier navegador.
2. Si deseas simular un entorno real:
   ```bash
   python3 -m http.server 8000
   ```
   E ingresa a [http://localhost:8000](http://localhost:8000).
