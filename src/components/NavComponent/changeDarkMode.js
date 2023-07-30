export default function changeDarkMode(setButtonEmoji){
    console.log(localStorage.getItem("data-theme"))
    if(document.documentElement.getAttribute('data-theme')){  //check if user has set a theme in the current session
      if(document.documentElement.getAttribute('data-theme') === "dark"){
        setButtonEmoji("💀")
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem("data-theme","light")
      }else{
        setButtonEmoji("🤡")
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem("data-theme","dark")
      }
    }else if(localStorage.getItem("data-theme")){  //check if user has set a theme in a past session
      if(localStorage.getItem("data-theme") === "dark"){
        console.log("dark ls")
        setButtonEmoji("💀")
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem("data-theme","light")
      }else{
        console.log("light ls")
        setButtonEmoji("🤡")
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem("data-theme","dark")
      }
    }else {  //check if user has theme preference set on their device
      if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        setButtonEmoji("💀")
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem("data-theme","light")
      }else{
        setButtonEmoji("🤡")
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem("data-theme","dark")
      }
    }
  }