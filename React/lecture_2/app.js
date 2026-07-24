// create an HTML element with the help of react


const element = React.createElement(

     'h1',
     {id :'title'},
     " i'm creating an element "

);

/*
   
   so above code is similar to writing like

   const element =   <h1 id = "title">   i'm creating an element   </h1>


   React.createElement() : -> manually creates a React element 

*/

const root = ReactDOM.createRoot( document.getElementById('root')  );


/*
   
   document.getElementById('root')  : -> finds an HTML element 
                              ex like this =      <div id = "root"> </div>

   ReactDOM.createRoot( ) : -> creates a `React Root` inside that div
   


*/


root.render(element);

/*

     root.render(element) :-> this renders or displays the react element inside the root div 


    =>  final result looks like this 

      < div id = "root">
        <h1 id = "title" > i'm creating an element </h1>
      
      </div>

*/