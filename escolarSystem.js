
//obtencion de los datos rellenados en el formulario
let nameStudent = document.getElementById("nameStudent").value;
let mailStudent = document.getElementById("emailStudent").value;
let dniStudent = document.getElementById("dniStudent").value;
let courseStudent = document.querySelector('input[name="course"]:checked').value; //aceso al input de tipo radio marcado
console.log(courseStudent);
if (courseStudent) {
  if (courseStudent == "OTRA") {
    let inputCourseStudent = document.getElementById("inputCourse").style.visibility = "visible";
    let textInputCourseStudent = document.getElementById("textInputCourse").style.visibility = "visible";
    courseStudent = inputCourseStudent.value;
  }
}
else {
  alert("No se ha seleccionado ninguna materia");
}
//prevencion de comportamiento por defecto del formulario
document.getElementById("formContent").addEventListener('submit', (e) => {
  e.preventDefault();
});
function result() {
  alert("DATOS REGISTRADOS\nNOMBRE:" + nameStudent + "\nCORREO ELECTRONICO: " + mailStudent + "\nDNI: " + dniStudent + "\nMATERIA A REGISTRAR: " + courseStudent);
}
submitButton = document.getElementById("buttonStudent");
submitButton.addEventListener("click", result); 