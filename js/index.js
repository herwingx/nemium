   /* El fragmento de código que proporcionó selecciona todo `<details> `elementos en el documento usando
    `document.querySelectorAll(&quot;detalles&quot;)`. Luego, itera sobre cada `<details> ` elemento
    usando el método `forEach()` y para cada `<details> ` elemento, encuentra el `<summary> `elemento
    dentro de él usando `querySelector(&quot;summary&quot;)`. */
    const detailsList = document.querySelectorAll("details");
    detailsList.forEach((details) => {
      const summary = details.querySelector("summary");
      summary.addEventListener("click", () => {
        expand(details);
      });
    });

    /* Esta función `expandir(clickedDetails)` está diseñada para cerrar todos `<details> `elementos
    excepto aquel en el que se hizo clic. */
    function expand(clickedDetails) {
      detailsList.forEach((details) => {
        if (details !== clickedDetails) {
          // Cierra todos los detalles excepto el clicado
          details.removeAttribute("open");
        }
      });
    }