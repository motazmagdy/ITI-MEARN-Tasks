let arr=[];
        function addVal() {
            var val = +document.getElementById("valu").value;
            arr.push(val);
            console.log(arr);
};
      function maxVal(){
         console.log(arr);
         let maxv = Math.max(...arr);
         console.log(maxv);
         let mxsent = document.getElementById("maxsent");
         mxsent.innerHTML=("Maximum Value in Array = "+ maxv)
         }
    function minVal(){
      console.log(arr);
      let minv = Math.min(...arr);
      console.log(minv);
      let mnsent = document.getElementById("minsent");
      mnsent.innerHTML=("Minimum Value in Array = "+ minv)
       }

       document.write(`Values are shown in the Console`);