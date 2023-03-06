function slide()
{   
     var size=document.getElementById("range").value
     document.getElementById("heading1").style.fontSize=size+"px"
     localStorage.setItem("size",size)
}
function color()
{
     var  col=document.getElementById("hcol").value
     document.getElementById("heading1").style.color=col
     var hcolor=document.getElementById("hcol").value
     localStorage.setItem("hcolor",hcolor)
}
function backcol()
{
     var  col=document.getElementById("backg").value
     document.getElementById("background").style.backgroundColor=col
     var  bcol=document.getElementById("backg").value
     localStorage.setItem("backcolor",bcol)

}
function right()
{
     document.getElementById("text").style.textAlign="right"
     var align=document.getElementById("text").style.textAlign="right"
     localStorage.setItem("align",align)
}
function left()
{
     document.getElementById("text").style.textAlign="left"
     var align=document.getElementById("text").style.textAlign="left"
     localStorage.setItem("align",align)
}
function justify()
{
     document.getElementById("text").style.textAlign="justify"
     var align=document.getElementById("text").style.textAlign="justify"
     localStorage.setItem("align",align)
}
function center()
{
     document.getElementById("text").style.textAlign="center"
     var align=document.getElementById("text").style.textAlign="center"
     localStorage.setItem("align",align)
}
function fontcol()
{
      var col=document.getElementById("fontcolor").value
     document.getElementById("text").style.color=col
     var fcol=document.getElementById("fontcolor").value
     localStorage.setItem("fcol",fcol)
}
function store()
{
     var from=document.getElementById("fromname").value
     localStorage.setItem("from",from)
     var fromad=document.getElementById("fromadd").value
     localStorage.setItem("fromadd",fromad)
     var to=document.getElementById("toname").value
     localStorage.setItem("to",to)
     var toad=document.getElementById("toadd").value
     localStorage.setItem("toadd",toad)
     var su=document.getElementById("s").value
     localStorage.setItem("sub",su)
     var sub=document.getElementById("subject").value
     localStorage.setItem("subject",sub)
     var reason=document.getElementById("reasonin").value
     localStorage.setItem("reas",reason)
     var frdate=document.getElementById("frdate").value
     localStorage.setItem("fd",frdate)
     var todate=document.getElementById("todate").value
     localStorage.setItem("td",todate)
     var day=document.getElementById("days").value
     localStorage.setItem("days",day)
     var date=document.getElementById("today").value
     localStorage.setItem("today",date)
}
function data()
{
     var  bcol=localStorage.getItem("backcolor",bcol)
     document.getElementById("body").style.backgroundColor=bcol
     var name=localStorage.getItem("from",from)
     var size=localStorage.getItem("size",size)
     document.getElementById("from").innerHTML=name
     document.getElementById("fromend").innerHTML=name+"."
     document.getElementById("from").style.fontSize=(size/2)+"px"
     var hcolor=localStorage.getItem("hcolor",hcolor)
     document.getElementById("letter").style.fontSize=size+"px"
     document.getElementById("letter").style.color=hcolor
     document.getElementById("from").style.color=hcolor
     var ad=localStorage.getItem("fromadd",fromad)
     document.getElementById("fromad").innerHTML=ad
     var to=localStorage.getItem("to",to)
     document.getElementById("to").innerHTML=to
     document.getElementById("to").style.fontSize=(size/2)+"px"
     document.getElementById("to").style.color=hcolor
     var toad=localStorage.getItem("toadd",toad)
     document.getElementById("toad").innerHTML=toad
     var su=localStorage.getItem("sub",su)
     var sal=`Dear ${su},`
     document.getElementById("salution").innerHTML=sal
     document.getElementById("subjecth").style.fontSize=(size/2)+"px"
     var sub=localStorage.getItem("subject",sub)
     document.getElementById("subject").innerHTML=sub
     var reason=localStorage.getItem("reas",reason)
     document.getElementById("reasonout").innerHTML=reason
     var align=localStorage.getItem("align",align)
     document.getElementById("reasonout").style.textAlign=align
     var fcol=localStorage.getItem("fcol",fcol)
     document.getElementById("reasonout").style.color=fcol
     var frdate=localStorage.getItem("fd",frdate)
     var todate=localStorage.getItem("td",todate)
     var day=localStorage.getItem("days",day)
     var date=`Please grant me permission  ${frdate}  ${todate} i.e., ${day} `
     document.getElementById("fromdate").innerHTML=date
     var today=localStorage.getItem("today",date)
     document.getElementById("date").innerHTML=today
}