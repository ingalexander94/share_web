(() => {
  const $d = document;

  $d.addEventListener("DOMContentLoaded", () => {
    const form = $d.querySelector("form");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      var formData = new FormData(form);
      const values = Object.fromEntries(formData.entries());
      const req = await fetch(values.url);
      const blob = await req.blob();
      const data = {
        files: [
          new File([blob], "ojalafuncione.jpg", {
            type: blob.type,
          }),
        ],
        title: "no se que es, pero es un titulo",
        text: "Esto tampoco se que es, pero es un texto",
        url: "http://localhost:3005/paciente/historial-medico/detalle/9",
      };
      try {
        if (!navigator.canShare(data)) {
          alert("pailas no se puede");
        } else {
          await navigator.share(data);
        }
      } catch (error) {
        console.error(error);
      }
    });
  });
})();
