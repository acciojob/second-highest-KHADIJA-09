//your JS code here. If required.

function secondHighest(a)
{
    f =  Number.MIN_SAFE_INTEGER
    s =  Number.MIN_SAFE_INTEGER
for(i = 0; i<a.length; i++)
{
    if(a[i]>f)
    {
        s = f
        f = a[i]
    }
    else if(a[i]>s && a[i]!=f)
    {
        s = a[i]
    }
  
}
return s;
}
