/*

Name=Gunvanti Sonsare
Roll no =2301184
Div=B

*/
// recurive staircase
function countWays(n)
    {
        let res = new Array(n + 2);
        res[0] = 1
        res[1] = 1
        res[2] = 2
  
        for (let i = 3; i <= n; i++)
            res[i] = res[i - 1] + res[i - 2] + res[i - 3]
  
        return res[n]
    }
     
    var n = 4
      console.log(countWays(n))