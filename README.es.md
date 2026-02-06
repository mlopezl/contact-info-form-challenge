# Frontend Mentor - Solución del Formulario de Contacto

Esta es mi solución al desafío **Contact Form** de Frontend Mentor. Este proyecto se centra en la creación de un formulario de contacto accesible y responsivo, con validación en tiempo real, retroalimentación clara en la interfaz y una experiencia de usuario amigable utilizando HTML, CSS y JavaScript puro.

El desafío fue una excelente oportunidad para practicar HTML semántico, técnicas modernas de CSS y lógica de validación personalizada de formularios sin depender de librerías o frameworks externos.

---

## Tabla de contenidos
- [Descripción general](#descripción-general)
- [El desafío](#el-desafío)
- [Diseño](#diseño)
- [Enlaces](#enlaces)
- [Mi proceso](#mi-proceso)
- [Construido con](#construido-con)
- [Lo que aprendí](#lo-que-aprendí)

---

## Descripción general
Este proyecto es un formulario de contacto responsive diseñado para funcionar de manera fluida en dispositivos móviles, tablets y escritorio. Proporciona mensajes claros de validación, estados interactivos y un mensaje de éxito tras un envío correcto.

El formulario incluye campos de texto, validación de correo electrónico, botones de radio, un área de texto y una casilla de consentimiento. Toda la validación se maneja mediante lógica personalizada en JavaScript, lo que permite un control total sobre la experiencia del usuario y el manejo de errores.

---

## El desafío
Los usuarios deben poder:

- Ver el diseño óptimo según el tamaño de pantalla de su dispositivo.
- Experimentar un diseño responsivo con enfoque *mobile-first*.
- Completar y enviar el formulario con campos obligatorios.
- Recibir validación en tiempo real mientras escriben.
- Ver mensajes de error claros para campos inválidos o vacíos.
- Seleccionar un tipo de consulta mediante botones de radio.
- Enviar el formulario solo cuando todos los campos sean válidos.
- Ver un mensaje de éxito después de un envío correcto.
- Experimentar estados *hover* y *focus* en todos los elementos interactivos.

---

## Diseño

- Diseño de escritorio  

<img src="./design/desktop-design.jpg" alt="Vista previa de escritorio" width="600">

- Estados de foco y activo  

<img src="./design/focus-and-active-state.jpg" alt="Vista previa de estados de foco y activo" width="400">

- Estados hover  

<img src="./design/hover-state.jpg" alt="Vista previa de estados hover" width="400">

- Estado de éxito  

<img src="./design/success-state.jpg" alt="Vista previa del estado de éxito" width="400">

- Estado de error  

<img src="./design/error-state.jpg" alt="Vista previa de estados de error" width="400">

- Diseño móvil  

<img src="./design/mobile-design.jpg" alt="Vista previa móvil" width="200">

---

## Enlaces
- URL de la solución: [Repositorio en GitHub](https://github.com/mlopezl/contact-info-form-challenge)
- URL del sitio en vivo: [Demo en vivo](https://mlopezl.github.io/contact-info-form-challenge/)

---

## Mi proceso
- Estructuré el formulario utilizando **HTML5 semántico**, con elementos como `form`, `section`, `label`, `input` y `textarea`.
- Seguí un enfoque **mobile-first**, mejorando el diseño con *media queries* para pantallas más grandes.
- Construí los layouts utilizando **Flexbox** y **CSS Grid** cuando fue necesario.
- Utilicé **propiedades personalizadas de CSS (variables)** para gestionar los colores y mantener un sistema de diseño consistente.
- Apliqué la **metodología BEM** para mantener el CSS modular, legible y escalable.
- Estilicé los elementos del formulario con estados *hover*, *focus* y *active* para mejorar la usabilidad y la accesibilidad.
- Implementé **validación personalizada del formulario** usando JavaScript puro.
- Utilicé **expresiones regulares** para validar el correo electrónico.
- Mostré los errores de validación de forma dinámica alternando clases CSS.
- Añadí **validación en tiempo real** mediante eventos de entrada (*input*).
- Controlé los estados de la interfaz, como mensajes de error y éxito, desde JavaScript.

---

## Construido con
- HTML5
- CSS3
- JavaScript (ES6)
- Flexbox
- CSS Grid
- Custom properties CSS (variables)
- Flujo de trabajo *mobile-first*
- Principios de diseño responsive
- Metodología de nombrado BEM
- Expresiones regulares (RegEx)

---

## Lo que aprendí
- Cómo construir un formulario de contacto accesible y responsivo utilizando **HTML semántico**.
- Crear layouts flexibles usando **Flexbox** y **Grid**.
- Gestionar un sistema de diseño consistente con **variables CSS**.
- Estructurar estilos escalables aplicando la **metodología BEM**.
- Implementar **lógica de validación personalizada** sin depender de la validación por defecto del navegador.
- Utilizar **eventos de JavaScript** para ofrecer retroalimentación en tiempo real al usuario.
- Mejorar la experiencia de usuario con un manejo claro de errores, transiciones y estados de éxito.
- Organizar un proyecto frontend pequeño de forma limpia, profesional y mantenible.
