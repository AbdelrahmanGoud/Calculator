let input = document.getElementById("calck");
function desplay(num)
{
          input.value +=num
}
function Clear()
{
          input.value=""
}
function Delete()
{
          input.value=input.value.slice(0,-1)
}
function clck()
{
          try{
                    input.value=eval(input.value)
                    
          }
          catch(err)
          {
                    input.value="error";
          }
}

