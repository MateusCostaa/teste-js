

$(document).ready(function()

{ 

    //$("#btnSim").on("click", function(){
   //     swal("","Ok Te Vejo La ;D", "success")
   // })

    $("#btnNao").hover(
        function () {
            let posTop = Math.floor(Math.random() * (300 - 10) + 10);
            let posLeft = Math.floor(Math.random() * (300 - 10) + 10);

            $(this).css({ top: posTop + "px", left: posLeft + "px" });
        }
    );
})