 setTimeout(function() {
     console.log('first method completed');
     setTimeout(function() {
         console.log('second method completed');
         setTimeout(function() {
             console.log('third method completed');
         }, 3000);
     }, 2000);
 }, 2000);