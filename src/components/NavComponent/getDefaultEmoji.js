export default function getDefaultEmoji(){
    if(document.documentElement.getAttribute('data-theme')){  //check if user has set a theme in the current session
      if(document.documentElement.getAttribute('data-theme') === "dark"){
        return "🤡"
      }else{
        return "💀"
      }
    }else if (localStorage.getItem("data-theme")){  //check if user has set a theme in a past session
      if(localStorage.getItem("data-theme") === "dark"){
        console.log("dark ls")
        document.documentElement.setAttribute('data-theme', 'dark')
        return "🤡"
      }else{
        console.log("light ls")
        document.documentElement.setAttribute('data-theme', 'light')
        return "💀"
      }
    }else {  //check if user has theme preference set on their device
      if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        document.documentElement.setAttribute('data-theme', 'dark')
        return "🤡"
      }else{
        document.documentElement.setAttribute('data-theme', 'light')
        return "💀"
      }
    }
  }