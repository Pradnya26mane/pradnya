/*

Name=Gunvanti Sonsare
Roll no =2301184
Div=B

*/
// Number of Paths


function numberOfPaths(m, n)
    {
     
      
        if (m == 1 || n == 1)
            return 1
         
       
        return numberOfPaths(m - 1, n) + numberOfPaths(m, n - 1)
        
       
    }
     
    console.log(numberOfPaths(3, 3))