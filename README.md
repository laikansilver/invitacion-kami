# Proyecto Invitación XV Años - Kamila Olivo Mercado

Este proyecto contiene la estructura base para la página web de la invitación.

## Estructura de Carpetas

*   **index.html**: Archivo principal. Ábrelo en tu navegador para ver la página.
*   **css/**: Contiene los estilos.
    *   `styles.css`: Aquí puedes cambiar colores, fuentes, etc.
*   **js/**: Contiene la lógica.
    *   `script.js`: Maneja la cuenta regresiva y el formulario.
*   **assets/img/**: Aquí debes guardar las imágenes reales.

## Pasos para Personalizar

1.  **Imágenes**:
    *   Reemplaza las imágenes de `assets/img/` con las fotos reales de Kamila.
    *   Actualiza las rutas en `index.html` (busca `src="..."`).

2.  **Mapas**:
    *   En `index.html`, busca la sección de "Ubicación".
    *   Para insertar un mapa real de Google Maps:
        1.  Ve a Google Maps, busca el lugar.
        2.  Clic en "Compartir" -> "Insertar un mapa".
        3.  Copia el `<iframe>` y pégalo donde dice `<!-- Mapa Placeholder -->`.

3.  **Formulario**:
    *   Actualmente el formulario solo simula el envío.
    *   Para hacerlo funcionar real sin servidor, regístrate en [Formspree](https://formspree.io/) o [EmailJS](https://www.emailjs.com/) y sigue sus instrucciones para conectar el formulario HTML.

## Colores

El tema principal es Azul Cielo (`#87CEEB`), pero puedes cambiarlo en `css/styles.css` modificando la variable `--primary-color`.
