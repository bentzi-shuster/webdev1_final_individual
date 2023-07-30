export default function scrollLink (e,link){
    e.preventDefault()
    if(link.href === "#top"){
      window.scrollTo({top:0,behavior:"smooth"})
      return
    }
    document.querySelector(link.href).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }