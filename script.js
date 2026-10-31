const form = document.getElementById("mainForm");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const namePersonal = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    
    if(namePersonal.trim() === '' || email.trim() === '' || number.trim() === ''){
       Swal.fire({
         title: "Atenção!",
         text: "Preencha os campos vazios!",
         icon: "warning",
         background: "#271b31",
         color: "#ffffff",
         confirmButtonColor: "#8B5CF6",
         confirmButtonText: "Continuar",
       });
    } else{
    Swal.fire({
    title: "Sucesso!",
    text: "Cadastro realizado com sucesso.",
    icon: "success",
    background: "#271b31",
    color: "#ffffff",
    confirmButtonColor: "#8B5CF6",
    confirmButtonText: "Continuar",
});
       window.location = "https://novoportal.cruzeirodosul.edu.br";  

    };
});

