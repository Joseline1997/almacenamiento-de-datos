let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

function actualizarListaClientes() {
  const clientesUl = document.getElementById("clientesUl");
  clientesUl.innerHTML = "";
  clientes.forEach((cliente, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${index + 1}.<br>Cédula: ${cliente.cedula}<br>Dirección: ${
      cliente.direccion
    }<br>Apellidos: ${cliente.apellidos}<br>Nombres: ${
      cliente.nombres
    }<br>Teléfono: ${cliente.telefono}<br>Correo: ${cliente.correo}`;
    clientesUl.appendChild(li);
  });
}

document.getElementById("clienteForm").addEventListener("submit", function (e) {
  e.preventDefault();
  if (validarFormulario()) {
    const nuevoCliente = {
      cedula: document.getElementById("cedula").value,
      direccion: document.getElementById("direccion").value,
      apellidos: document.getElementById("apellidos").value,
      nombres: document.getElementById("nombres").value,
      telefono: document.getElementById("telefono").value,
      correo: document.getElementById("correo").value,
    };
    clientes.push(nuevoCliente);
    localStorage.setItem("clientes", JSON.stringify(clientes));
    actualizarListaClientes();
    this.reset();
    alert("Cliente registrado correctamente");
  }
});

function validarFormulario() {
  let isValid = true;

  // Validar Cédula (10 dígitos)
  const cedula = document.getElementById("cedula").value;
  const cedulaRegex = /^\d{10}$/;
  if (!cedulaRegex.test(cedula)) {
    document.getElementById("cedulaError").textContent =
      "La cédula debe tener 10 dígitos";
    isValid = false;
  } else {
    document.getElementById("cedulaError").textContent = "";
  }

  // Validar Dirección (no vacía)
  const direccion = document.getElementById("direccion").value;
  if (direccion.trim() === "") {
    document.getElementById("direccionError").textContent =
      "La dirección no puede estar vacía";
    isValid = false;
  } else {
    document.getElementById("direccionError").textContent = "";
  }
  const nombres = document.getElementById("nombres").value;
  if (nombres.trim() === "") {
    document.getElementById("nombresError").textContent =
      "Los nombres no pueden estar vacíos";
    isValid = false;
  } else {
    document.getElementById("direccionError").textContent = "";
  }
  const apellidos = document.getElementById("apellidos").value;
  if (apellidos.trim() === "") {
    document.getElementById("apellidosError").textContent =
      "Los apellidos no pueden estar vacíos";
    isValid = false;
  } else {
    document.getElementById("direccionError").textContent = "";
  }

  // Validar Teléfono (10 dígitos)
  const telefono = document.getElementById("telefono").value;
  const telefonoRegex = /^\d{10}$/;
  if (!telefonoRegex.test(telefono)) {
    document.getElementById("telefonoError").textContent =
      "El teléfono debe tener 10 dígitos";
    isValid = false;
  } else {
    document.getElementById("telefonoError").textContent = "";
  }

  // Validar Correo Institucional
  const correo = document.getElementById("correo").value;
  const correoRegex = /^e\d{10}@live\.uleam\.edu\.ec$/;
  if (!correoRegex.test(correo)) {
    document.getElementById("correoError").textContent =
      "El correo debe tener el formato e123456789@live.uleam.edu.ec";
    isValid = false;
  } else {
    document.getElementById("correoError").textContent = "";
  }

  return isValid;
}

// Cargar la lista de clientes al iniciar la página
actualizarListaClientes();
