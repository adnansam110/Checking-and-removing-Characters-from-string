var str1 = prompt("Enter a String");
if (str1.substring(4,10)==="Script" || str1.substring(4,10)==="script")
{
    var str2 = str1.substring(0,4) + str1.substring(10,str1.length); 
    document.write(str2);
}
else 
{
    document.write(str1);
}