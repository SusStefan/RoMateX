$( document ).ready(function() {
    var x=0;
    var y=0;
    var condition=0;
    $("#1").click(function(){
      if(condition==0)
      { x=1+x*10;
        $("p").html(x);}
        else
          {
            y=1+y*10;
            switch(condition)
            {
              case 1: $("p").html(x + " + " + y);break;
              case 2: $("p").html(x + " - " + y); break;
              case 3: $("p").html(x + " / " + y); break;
              case 4: $("p").html(x + " * " + y); break;
            }
          }
       
      });
      $("#2").click(function(){
        if(condition==0)
      { x=2+x*10;
        $("p").html(x);}
        else
          {
            y=2+y*10;
            switch(condition)
            {
              case 1: $("p").html(x + " + " + y);break;
              case 2: $("p").html(x + " - " + y); break;
              case 3: $("p").html(x + " / " + y); break;
              case 4: $("p").html(x + " * " + y); break;
            }
          }
      });
      $("#3").click(function(){
        if(condition==0)
        { x=3+x*10;
          $("p").html(x);}
          else
          {
            y=3+y*10;
            switch(condition)
            {
              case 1: $("p").html(x + " + " + y);break;
              case 2: $("p").html(x + " - " + y); break;
              case 3: $("p").html(x + " / " + y); break;
              case 4: $("p").html(x + " * " + y); break;
            }
          }
      });
      $("#4").click(function(){
        if(condition==0)
        { x=4+x*10;
          $("p").html(x);}
          else
          {
            y=4+y*10;
            switch(condition)
            {
              case 1: $("p").html(x + " + " + y);break;
              case 2: $("p").html(x + " - " + y); break;
              case 3: $("p").html(x + " / " + y); break;
              case 4: $("p").html(x + " * " + y); break;
            }
          }
      });
      $("#5").click(function(){
        if(condition==0)
        { x=5+x*10;
          $("p").html(x);}
          else
          {
            y=5+y*10;
            switch(condition)
            {
              case 1: $("p").html(x + " + " + y);break;
              case 2: $("p").html(x + " - " + y); break;
              case 3: $("p").html(x + " / " + y); break;
              case 4: $("p").html(x + " * " + y); break;
            }
          }
      });
      $("#6").click(function(){
        if(condition==0)
        { x=6+x*10;
          $("p").html(x);}
          else
          {
            y=6+y*10;
            switch(condition)
            {
              case 1: $("p").html(x + " + " + y);break;
              case 2: $("p").html(x + " - " + y); break;
              case 3: $("p").html(x + " / " + y); break;
              case 4: $("p").html(x + " * " + y); break;
            }
          }
      });
      $("#7").click(function(){
        if(condition==0)
        { x=7+x*10;
          $("p").html(x);}
          else
          {
            y=7+y*10;
            switch(condition)
            {
              case 1: $("p").html(x + " + " + y);break;
              case 2: $("p").html(x + " - " + y); break;
              case 3: $("p").html(x + " / " + y); break;
              case 4: $("p").html(x + " * " + y); break;
            }
          }
      });
      $("#8").click(function(){
        if(condition==0)
        { x=8+x*10;
          $("p").html(x);}
          else
          {
            y=8+y*10;
            switch(condition)
            {
              case 1: $("p").html(x + " + " + y);break;
              case 2: $("p").html(x + " - " + y); break;
              case 3: $("p").html(x + " / " + y); break;
              case 4: $("p").html(x + " * " + y); break;
            }
          }
      });
      $("#9").click(function(){
        if(condition==0)
        { x=9+x*10;
          $("p").html(x);}
          else
          {
            y=9+y*10;
            switch(condition)
            {
              case 1: $("p").html(x + " + " + y);break;
              case 2: $("p").html(x + " - " + y); break;
              case 3: $("p").html(x + " / " + y); break;
              case 4: $("p").html(x + " * " + y); break;
            }
          }
      });
      $("#0").click(function(){
        if(condition==0)
        { x=0+x*10;
          $("p").html(x);}
          else
          {
            y=0+y*10;
            switch(condition)
            {
              case 1: $("p").html(x + " + " + y); break;
              case 2: $("p").html(x + " - " + y); break;
              case 3: $("p").html(x + " / " + y); break;
              case 4: $("p").html(x + " * " + y); break;
            }
          }

      });
      $("#delete").click(function(){
        x=(x-(x%10))/10;
        $("p").html(x)
      });
      $("#plus").click(function(){
        condition=1;
        $("p").html(x + " + ");
      });
      $("#minus").click(function(){
        condition=2;
        $("p").html(x + " - ");
      });
      $("#div").click(function(){
        condition=3;
        $("p").html(x + " / ");
      });
      $("#ori").click(function(){
        condition=4;
        $("p").html(x + " * ");
      });
      $("#neg").click(function(){
        if(condition==0)
        {
          x=x*-1;
          $("p").html(x);
        }
      })
        $("#c").click(function(){
         x=0;
         $("p").html(x);
      });

      $("#pat").click(function(){
        if(condition==0)
        {
          x=x*x;
          $("p").html(x);
        }
     });


     $("#rad").click(function(){
      if(condition==0)
      {
        x=Math.sqrt(x);
        $("p").html(x);
      }
   });

      $("#egal").click(function(){
        switch(condition)
        {
          case 1: x=x+y; y=0;  $("p").html(x); break;
          case 2:  x=x-y; y=0;  $("p").html(x); break;
          case 3:  x=x/y; y=0;  $("p").html(x); break;
          case 4:  x=x*y; y=0;  $("p").html(x); break;
          default: $("p").html(x); 
        }
        condition=0;
      });
})