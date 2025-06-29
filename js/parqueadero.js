const prompt = require('prompt-sync')();

function calcularPago(tipoVehiculo, horasEstadia, salidaDespuesDeLas10PM) {
  let tarifaPorHora;
  let recargoPorTiempo = 0;
  let recargoNocturno = 0;

  switch (tipoVehiculo.toLowerCase()) {
    case "moto": tarifaPorHora = 1000; break;
    case "carro": tarifaPorHora = 2000; break;
    case "camión":
    case "camion": tarifaPorHora = 3500; break;
    default:
      console.log("❌ Tipo de vehículo no válido.");
      return;
  }

  const valorBase = tarifaPorHora * horasEstadia;
  if (horasEstadia > 8) recargoPorTiempo = valorBase * 0.15;
  if (salidaDespuesDeLas10PM) recargoNocturno = (valorBase + recargoPorTiempo) * 0.20;
  const totalPagar = valorBase + recargoPorTiempo + recargoNocturno;

  console.log("\n========== FACTURA DE PARQUEADERO ==========");
  console.log(`🅿️ Tipo de vehículo:       ${tipoVehiculo.toUpperCase()}`);
  console.log(`⏱️  Horas de estadía:       ${horasEstadia}`);
  console.log(`💰 Tarifa por hora:        $${tarifaPorHora.toLocaleString()} COP`);
  console.log(`📄 Valor base:             $${valorBase.toLocaleString()} COP`);
  console.log(`📌 Recargo por tiempo:     $${recargoPorTiempo.toLocaleString()} COP`);
  console.log(`🌙 Recargo nocturno:       $${recargoNocturno.toLocaleString()} COP`);
  console.log(`💳 Total a pagar:          $${totalPagar.toLocaleString()} COP`);
  console.log("=============================================\n");
}

const tipoVehiculo = prompt("Ingrese el tipo de vehículo (moto, carro, camión): ");
const horasEstadia = parseFloat(prompt("Ingrese las horas de estadía: "));
const salidaTardeInput = prompt("¿La salida fue después de las 10:00 p.m.? (sí/no): ");
const salidaTarde = salidaTardeInput.toLowerCase() === 'sí' || salidaTardeInput.toLowerCase() === 'si';

calcularPago(tipoVehiculo, horasEstadia, salidaTarde);
