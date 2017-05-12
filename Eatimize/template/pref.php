<html>
    <head>
        <link href="/css/pref.css" rel="stylesheet" type="text/css">    
    
        <script>
          $('.cb').click(function() {
              
            sessionStorage.setItem($(this).attr("value"), $(this).is(":checked"));
                                    
            });
        </script>
    </head>

    <body>
        <div class="prefDiv">
            <input type='checkbox' name='pref' value='gluten' id="gluten" class="cb"/>
            <label for="gluten">
                <img src="../icons/gluten.png" class="prefimg">
                <span>Glutenallergi</span>
            </label>    

        </div>  


        <div class="prefDiv">
            <input type='checkbox' name='pref' value='milkprotein' id="milkprotein" class="cb"/>    
                <label for="milkprotein">
                    <img src="../icons/milkprotein.png" class="prefimg">
                    <span>Mjölkprotein-allergi</span>
                </label>
        </div>       


        <div class="prefDiv">
            <input type='checkbox' name='pref' value='laktos' id="laktos" class="cb"/>    
                <label for="laktos">
                    <img src="../icons/laktos.png" class="prefimg">
                    <span>Laktosintolerant</span>
                </label>
         </div>  

        <div class="prefDiv">        
            <input type='checkbox' name='pref' value='nut' id="nut" class="cb"/>    
                <label for="nut">
                    <img src="../icons/nut.png" class="prefimg">
                    <span>Jordnötsallergi</span>
                </label>        
        </div>  

        <div class="prefDiv">
            <input type='checkbox' name='pref' value='vegetarian' id="vegetarian" class="cb"/>    
                <label for="vegetarian">
                    <img src="../icons/vegetarian.png"  class="prefimg">
                    <span>Vegetarian</span>
                </label>      
        </div>  

        <div class="prefDiv">
            <input type='checkbox' name='pref' value='vegan' id="vegan" class="cb"/>    
                <label for="vegan">
                    <img src="../icons/vegan.png" class="prefimg">
                    <span>Vegan</span>
                </label>
        </div>
    
        
        <!-- Script -->
        
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>    
    <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
    
    </body>
    
</html>  