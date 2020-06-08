function eliminar(id){
	swal({
		  title: "Estas seguro de eliminar?",
		  text: "Una vez eliminado, no podrás volver a recuperarlo",
		  icon: "warning",
		  buttons: true,
		  dangerMode: true,
		})
		.then((OK) => {
		  if (OK) {
			  $.ajax({
				 url:"/eliminar/"+id,
				 success: function(res){
					 console.log(res);
				 },
			  });
		    swal("Dato eliminado correctamente", {
		      icon: "success",
		    }).then((ok)=>{
		    	if(ok){
		    		location.href="/listar";
		    	}
		    });
		  } else {
		    swal("el dato está seguro!");
		  }
		});
}