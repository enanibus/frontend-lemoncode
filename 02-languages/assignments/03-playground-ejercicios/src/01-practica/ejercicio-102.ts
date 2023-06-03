console.log("************** PRACTICE 102 *********************");
const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

function printAverage(classResults) {
  console.log(
    "La media de notas de la clase es: " +
      printAlphaQualification(average(classResults))
  );
}

function printAlphaQualification(average) {
  if (average < 4) return "Muy deficiente";
  else if (average >= 4 && average < 5) return "Insuficiente";
  else if (average >= 5 && average < 6) return "Suficiente";
  else if (average >= 6 && average < 7) return "Bien";
  else if (average >= 7 && average < 9) return "Notable";
  else if (average >= 9 && average < 10) return "Sobresaliente";
  else if (average >= 4 && average < 5) return "Matrícula de Honor";
}

function values(obj) {
  const properties = Object.keys(obj);
  const valArray = [];
  // listar las enumerables
  properties.forEach((property) => {
    valArray.push(obj[property]);
  });
  // listar todas
  // for (const property in obj) {
  //     valArray.push(obj[property]);
  // }
  return valArray;
}

function average(qualifications) {
  const results = values(qualifications);
  const lenght = results.length;
  const sum = results.reduce(function (a, b) {
    return a + b;
  }, 0);
  return sum / lenght;
}

printAverage(eso2o);
