<html>
    <head>
        <script>
            
            $(document).ready(function(){
                
             $("#male, #female").change(function () {
                 if ($("#male").is(":checked")) {

                     sessionStorage.setItem("sex", "Male");

                 }else if ($("#female").is(":checked")) {
 
                     sessionStorage.setItem("sex", "Female");
 
                    }
                 document.location.href = "#R4";
        
                 });
            });

        </script>

        
        <style>
      
            /*** STÄNG AV MATERIALIZE : ***/ 
            
            .sex-input [type="radio"] + label:before,
            .sex-input [type="radio"] + label:after {
            content: none; 
            position: none;
            left: 0;
            top: 0;
            margin: 0px;
            width: 0px;
            height: 0px;
            z-index: 0;
            transition: none;
            }
            
            
            /** LÄGG TILL NY STYLE FÖR RADIOBUTTONS **/ 
            
            .sex { 
                height: 70px;
                width: 70px;            
            }
        
            div {
               /* margin:0 0 0.75em 0;    */        
            }

           .sex-input input[type="radio"] {
                display:none;
            }


           .sex-input input[type="radio"] + label {

            }

           .sex-input input[type="radio"] + label span {
                display:inline-block;
               width:70px;
                height:70px;
            }

           .sex-input input[type="radio"] + label span {
                 background-color:palegreen;
                border-radius: 8px;
               -webkit-transition: background-color 0.5s;
            }

           .sex-input input[type="radio"]:checked + label span{
                 background-color:forestgreen;
            }

        </style>
    
    </head>

    <body>
        <div class="sex-input">
            <input type="radio" id="male" name="gender" />
                <label for="male"><span><img src="icons/male.png" class="sex">Man</span></label>

                <input type="radio" id="female" name="gender" />
                <label for="female"><span><img src="icons/female.png" class="sex">Kvinna</span></label> 
        </div>
    
    </body>
    
    </html>  