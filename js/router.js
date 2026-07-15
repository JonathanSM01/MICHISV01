/**
 * ==========================================
 * AGROLAB ROUTER
 * ==========================================
 */

async function loadView(viewName) {

    const container = document.getElementById("view");

    try {

        const response = await fetch(`views/${viewName}.html`);

        if (!response.ok) {
            throw new Error("No se pudo cargar la vista.");
        }

        const html = await response.text();

container.innerHTML = html;

if(viewName=="home") loadDashboard();

if(viewName=="results") createChart();

// Si estamos en Inicio, cargar datos y gráfica
if (viewName === "home") {

    if (typeof loadDashboard === "function") {
        await loadDashboard();
    }

    if (typeof createGrowthChart === "function") {
        createGrowthChart();
    }

}

        
} catch (error) {

    console.error(error);

    container.innerHTML = `
        <pre style="color:red;background:#fff;padding:20px">
${error.stack}
        </pre>
    `;

}

}